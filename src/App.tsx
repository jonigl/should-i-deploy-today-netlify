import { useState, useEffect } from "react";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import RetroGrid from "@/components/ui/retro-grid";
import SparklesText from "@/components/ui/sparkles-text";

import "./App.css";

function App() {
  const [shouldDeploy, setShouldDeploy] = useState("");
  const [funnyDeploymentPhrases, setFunnyDeploymentPhrases] = useState<
    string[]
  >([]);
  const [nonFridayPhrases, setNonFridayPhrases] = useState<string[]>([]);
  const [team, setTeam] = useState<string[]>([]);

  const fetchPhrases = async () => {
    try {
      const response = await fetch("/.netlify/functions/getPhrases");
      const data = await response.json();
      setFunnyDeploymentPhrases(data.funnyDeploymentPhrases);
      setNonFridayPhrases(data.nonFridayPhrases);
      checkShouldDeploy(data.funnyDeploymentPhrases, data.nonFridayPhrases);
    } catch (error) {
      console.error("Error fetching phrases:", error);
      setShouldDeploy("Error fetching phrases.");
    }
  };

  const fetchTeam = async () => {
    try {
      const response = await fetch("/.netlify/functions/getTeam");
      const data = await response.json();
      setTeam(data.teamName);
    } catch (error) {
      console.error("Error fetching team:", error);
    }
  };

  const checkShouldDeploy = (
    funnyPhrases: string[],
    nonFridayPhrases: string[],
  ) => {
    const today = new Date();
    const day = today.getDay();
    let randomPhrase = "";
    if (day === 5) {
      const randomIndex = Math.floor(Math.random() * funnyPhrases.length);
      randomPhrase = funnyPhrases[randomIndex];
    } else {
      const randomIndex = Math.floor(Math.random() * nonFridayPhrases.length);
      randomPhrase = nonFridayPhrases[randomIndex];
    }
    setShouldDeploy(randomPhrase);
  };

  useEffect(() => {
    fetchPhrases();
    fetchTeam();
  }, []);

  return (
    <>
      <div className="should relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
        <div className="h-10" />
        <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
          Should I Deploy Today???
        </span>
        <div className="should relative flex h-[250px] w-screen flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
          <SparklesText text={shouldDeploy} />
        </div>
        <div
          className="z-10 flex min-h-32 items-center justify-center"
          onClick={() =>
            checkShouldDeploy(funnyDeploymentPhrases, nonFridayPhrases)
          }
        >
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
        <p>Created with ❤️ by {team}</p>
        <RetroGrid />
      </div>
    </>
  );
}

export default App;
