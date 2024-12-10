import { useState, useEffect } from 'react';
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import RetroGrid from "@/components/ui/retro-grid";
import SparklesText from "@/components/ui/sparkles-text";

import './App.css';

function App() {
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

  const [shouldDeploy, setShouldDeploy] = useState("If it’s not Friday, the deploy button is basically the ‘Go To Production’ party cannon");

  const checkShouldDeploy = () => {
    const today = new Date();
    const day = today.getDay();
    let randomPhrase = "";
    if (day === 5) {
      const randomIndex = Math.floor(Math.random() * funnyDeploymentPhrases.length);
      randomPhrase = funnyDeploymentPhrases[randomIndex];
    } else {
      const randomIndex = Math.floor(Math.random() * nonFridayPhrases.length);
      randomPhrase = nonFridayPhrases[randomIndex];
    }
    setShouldDeploy(randomPhrase);
  };

  useEffect(() => {
    checkShouldDeploy();
  }, []);

  return (
    <>
      <div className="should relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
        <div className="h-10" />
        <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
          Should I Deploy Today?
        </span>
        <div className="should relative flex h-[250px] w-screen flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
          <SparklesText text={shouldDeploy} />
        </div>
        <div className="z-10 flex min-h-32 items-center justify-center" onClick={checkShouldDeploy}>
          <AnimatedGradientText>
            🚀 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
            <span
              className={cn(
                `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
              )}
            >
              Check Again
            </span>
          </AnimatedGradientText>
        </div>
        <div className="h-1/4" />
        <p>Created with ❤️ by Infra DevOps Team</p>
        <RetroGrid />
      </div>
    </>
  );
}

export default App;
