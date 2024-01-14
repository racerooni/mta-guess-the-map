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
  const [correctGuess, setCorrectGuess] = useState(0);
  const [wrongGuess, setWrongGuess] = useState(0);
  const checkIfCorrect = () => {
    if (mapToGuess.mapName.includes(guessedMap)) {
      toast.success("you got it");
      setGuessedMap("");
      setMapToGuess(() => {
        return Songs[Math.floor(Math.random() * Songs.length)];
      });
      setCorrectGuess(correctGuess + 1);
    } else {
      toast.error("try again");
      setGuessedMap("");
      setWrongGuess(wrongGuess + 1);
    }
  };
  const skip = () => {
    setMapToGuess(() => {
      return Songs[Math.floor(Math.random() * Songs.length)];
    });
  };

  return (
    <>
      <div className="min-h-1/2 flex flex-col w-1/2 bg-white bg-opacity-20 rounded-md px-6 gap-2.5 py-6">
        <h1 className="mx-auto text-4xl text-white font-bold">
          Guess the map!
        </h1>
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
        <Button variant="destructive" onClick={skip}>
          Skip
        </Button>
        <div className="text-white">
          Correct guesses:{" "}
          <span className="text-green-500">{correctGuess}</span> <br />
          Wrong guesses: <span className="text-red-500">{wrongGuess}</span>
        </div>
      </div>
    </>
  );
};

export default SongGuesser;
