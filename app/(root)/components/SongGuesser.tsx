"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Iframe from "react-iframe";
import YouTube from "react-youtube";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import maps from "@/app/maps.json";

interface SongGuesserProps {
  songUrl: string;
  mapName: string[];
}

const SongGuesser: React.FC<SongGuesserProps> = ({ songUrl, mapName }) => {
  const Songs = maps;
  const [mapToGuess, setMapToGuess] = useState(() => {
    return Songs[Math.floor(Math.random() * Songs.length)];
  });
  const [guessedMap, setGuessedMap] = useState("");

  const checkIfCorrect = () => {
    if (mapToGuess.mapName.includes(guessedMap)) {
      toast.success("you got it");
      setGuessedMap("");
      setMapToGuess(() => {
        return Songs[Math.floor(Math.random() * Songs.length)];
      });
    } else {
      toast.error("try again");
      setGuessedMap("");
    }
  };

  return (
    <>
      <div className="h-1/2 space-y-4 flex flex-col w-1/2">
        <h1 className="mx-auto text-3xl">Guess the map!</h1>
        <YouTube className="mx-auto" videoId={mapToGuess.songUrl} />
        <Input
          type="text"
          placeholder="What map has this song?"
          value={guessedMap}
          onChange={(e) => {
            setGuessedMap(e.target.value);
          }}
        />
        <Button onClick={checkIfCorrect}>Guess</Button>
      </div>
    </>
  );
};

export default SongGuesser;
