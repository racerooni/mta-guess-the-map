"use client";

import SongGuesser from "./components/SongGuesser";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import toast from "react-hot-toast";

const Home = () => {
  return (
    <>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <SongGuesser songUrl="xd" mapName={["xd"]} />
    </>
  );
};
export default Home;
