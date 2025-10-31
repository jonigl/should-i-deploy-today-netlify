
import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const devtunnelUrl = process.env.DEVTUNNEL_URL;

  if (!devtunnelUrl) {
    return new Response(JSON.stringify({ error: 'DEVTUNNEL_URL is not defined in environment variables' }), { status: 500, headers: { 'content-type': 'application/json' } });
  }

  try {
    const upstream = await fetch(devtunnelUrl, { method: 'GET' });

    // Mirror upstream status and body. We'll normalize headers to JSON on the response.
    const contentType = upstream.headers.get('content-type') || '';

    if (!upstream.ok) {
      const text = await upstream.text().catch(() => '');
      return new Response(JSON.stringify({ error: 'Upstream request failed', status: upstream.status, body: text }), { status: 502, headers: { 'content-type': 'application/json' } });
    }

    if (contentType.includes('application/json')) {
      const data = await upstream.json();
      return new Response(JSON.stringify({ upstream: data }), { status: 200, headers: { 'content-type': 'application/json' } });
    }

    const text = await upstream.text();
    return new Response(JSON.stringify({ upstream: text }), { status: 200, headers: { 'content-type': 'application/json' } });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: 'Fetch failed', message: err?.message || String(err) }), { status: 500, headers: { 'content-type': 'application/json' } });
  }
};
