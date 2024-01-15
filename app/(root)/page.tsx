"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import toast, { Toaster } from "react-hot-toast";
import maps from "@/app/maps.json";
import dynamic from "next/dynamic";
import Disclaimer from "./components/disclaimer";
import { KeyObject } from "crypto";

const DynamicIframe = dynamic(() => import("react-iframe"), { ssr: false });

const SongGuesser = () => {
  const Songs = maps;
  const filteredSongs = Songs.filter((song) => !song.guessed);
  const [mapToGuess, setMapToGuess] = useState(() => {
    return filteredSongs[Math.floor(Math.random() * filteredSongs.length)];
  });

  const [guessedMap, setGuessedMap] = useState("");
  const [correctGuess, setCorrectGuess] = useState(0);
  const [wrongGuess, setWrongGuess] = useState(0);
  const checkIfCorrect = () => {
    if (mapToGuess.mapName.includes(guessedMap.toLowerCase())) {
      toast.success("You got it!");
      setGuessedMap("");
      mapToGuess.guessed = true;
      const filteredSongs = Songs.filter((song) => !song.guessed);
      setMapToGuess(() => {
        return filteredSongs[Math.floor(Math.random() * filteredSongs.length)];
      });
      setCorrectGuess(correctGuess + 1);
    } else {
      toast.error("Try again!");
      setGuessedMap("");
      setWrongGuess(wrongGuess + 1);
    }
  };
  const skip = () => {
    toast(`The map was: ${mapToGuess.mapName[0]}`, {
      icon: "😂",
    });
    setMapToGuess(() => {
      return filteredSongs[Math.floor(Math.random() * filteredSongs.length)];
    });
  };

  const handleKeypress = (e: React.KeyboardEvent) => {
    if ((e.keyCode = 13)) {
      checkIfCorrect();
    }
  };

  return (
    <>
      <Toaster />
      <div
        className="sm:h-100 flex flex-col md:w-2/3 lg:w-1/2 sm:w-100 bg-white bg-opacity-20 rounded-md px-6 gap-2.5 py-6 relative shadow-[20px 20px 60px #bebebe,
             -20px -20px 60px #ffffff;] mx-2"
      >
        <Disclaimer />
        <div className="">
          <h1 className="mx-auto text-4xl text-white font-bold text-center">
            Guess the map based on its song!
          </h1>
        </div>
        <div>
          {mapToGuess ? (
            <div>
              <DynamicIframe
                className="w-full aspect-video rounded-lg shadow-lg"
                url={`https://www.youtube.com/embed/${mapToGuess.songUrl}`}
              />
            </div>
          ) : (
            <h1 className="text-white text-3xl text-center">
              There are no more maps for you to guess for now 😢
            </h1>
          )}
        </div>

        <div className="flex flex-col gap-2 md:flex-row mt-4">
          <Input
            type="text"
            placeholder="What map has this song?"
            value={guessedMap}
            onChange={(e) => {
              setGuessedMap(e.target.value);
            }}
          />
          <Button variant="destructive" className="flex-1" onClick={skip}>
            Skip
          </Button>
        </div>

        <Button
          className="mt-4"
          onClick={checkIfCorrect}
          onKeyDown={handleKeypress}
        >
          Guess
        </Button>

        <div className="text-white">
          Correct guesses:{" "}
          <span className="text-green-500">{correctGuess}</span> <br />
          Wrong guesses: <span className="text-red-500">{wrongGuess}</span>{" "}
          <br />
          Maps left to guess:{" "}
          <span className="text-yellow-500">{Songs.length - correctGuess}</span>
        </div>
        <p className="absolute bottom-0 right-0 text-white text-xs text-right">
          thanks to niim0te🍐 for picking the songs. <br /> made by racer 😚😚
        </p>
      </div>
    </>
  );
};

export default SongGuesser;
