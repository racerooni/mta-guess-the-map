import { useState } from "react";
import { cn } from "@/lib/utils";

const Disclaimer = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div
      onMouseOver={() => setisOpen(true)}
      onMouseLeave={() => setisOpen(false)}
      className="absolute top-2 right-1 h-8 w-8 text-center my-auto rounded-full text-2xl bg-white transition"
    >
      <p>?</p>
      <div
        className={cn(
          "absolute top-0 right-0 w-64 rounded-md text-muted p-1 transition hidden text-sm bg-slate-500",
          isOpen ? "block" : "hidden"
        )}
      >
        Map names should be in the following formats: <br />
        <span className="text-green-300">
          naval ft nakezi unmatched player <br />
          unmatched player <br />
          up
        </span>
      </div>
    </div>
  );
};

export default Disclaimer;
