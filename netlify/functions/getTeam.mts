import { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {

  const teamName = Netlify.env.get("MY_TEAM");
  const globalEnvarTest = Netlify.env.get("JLOWENSTERN_TEST");


  return new Response(JSON.stringify({ teamName, globalEnvarTest }))
};

