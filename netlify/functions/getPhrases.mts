
import type { Context } from "@netlify/functions";

const funnyDeploymentPhrases = [
  "If today is Friday or a full moon, I’d rather release my unfinished novel than deploy code.",
  "Is it Friday, Code Freeze, or Mercury in retrograde? Either way, the answer is NOPE.",
  "Should I deploy today? Well, if it’s Friday, I’d rather try speed dating at a bug convention.",
  "If the words 'Friday' or 'Code Freeze' are in your calendar, step away from the deploy button!",
  "Deploying on a Friday is like trying a new recipe *during* Thanksgiving dinner. Just don’t.",
  "Should I deploy today? Only if I also want to deploy my resignation letter tomorrow.",
  "If it's Friday and code's frozen, deploying today is as appealing as making hardcoding a feature.",
  "Friday deployments are like eating sushi at a gas station—technically possible, but do you *really* want to?",
  "The rule is simple: Friday + Code Freeze = Netflix, not Deploy.",
  "Deploying on Friday? Congratulations, you’ve just unlocked the chaos achievement!",
  "If it’s Friday, my deployment strategy is simple: Alt + F4 and run away.",
  "Should I deploy today? Only if today rhymes with 'Tuesday' and isn't Friday.",
  "Friday deployments: because who doesn’t love debugging during happy hour?",
  "Code freeze is a vibe, Friday is an opportunity, and deploying is a bad decision sandwich.",
  "A Friday deploy is like going bungee jumping without testing the rope. Bold, but you might regret it."
];

const nonFridayPhrases = [
  "It’s not Friday, so go ahead and deploy—your future self doesn’t hate you yet.",
  "Today’s not Friday! It’s safe to deploy. Just remember to triple-check and pray to the CI/CD gods.",
  "No Friday vibes here! Hit that deploy button like it owes you money.",
  "Good news: It’s not Friday. The bad news? Your deploy might still break production.",
  "It’s not Friday, so take a stretch, sip your coffee, and casually ship that code like a pro.",
  "Not Friday? Perfect! Deploy now, and enjoy dinner at home tonight.",
  "You’ve got four glorious days to deploy without fear. Don't waste 'em!",
  "Deploy away—it’s not Friday, and the weekend isn’t watching over your shoulder.",
  "Non-Friday deploys: because debugging while sober is always better.",
  "It’s not Friday. The only chaos today is in the code, not the calendar.",
  "Deploy now because Friday won’t let you later.",
  "It’s not Friday... yet. Deploy before that boss sends a ‘quick change’ request!",
  "Deploying today means you can sleep soundly on Friday night. It's a win-win!",
  "Midweek deploys are like trust falls—scary, but usually safe when it’s not Friday.",
  "If it’s not Friday, the deploy button is basically the ‘Go To Production’ party cannon."
];

export default async (req: Request, context: Context) => {
  return new Response(JSON.stringify({ funnyDeploymentPhrases, nonFridayPhrases }))
}


