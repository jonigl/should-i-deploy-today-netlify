import { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {

  const teamName = Netlify.env.get("MY_TEAM");

  return new Response(JSON.stringify({ teamName }))
};

