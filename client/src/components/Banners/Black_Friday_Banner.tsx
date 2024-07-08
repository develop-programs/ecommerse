import React from "react";
import { cn } from "../../lib/utils";

export default function BlackFridayBanner() {
  const [show, setShow] = React.useState<boolean>(true);
  return (
    <div className={cn("bg-black py-4", show ? "block" : "hidden")}>
      <div className="container flex justify-between">
        <div className="flex gap-3 items-center">
          <div className="bg-yellow-400 px-5 py-1.5 -rotate-6">
            <span className="text-lg font-bold">Black</span>
          </div>
          <div>
            <span className="text-white text-2xl font-semibold">Friday</span>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center text-white">
          <div className="flex items-center gap-2">
            <span>Up to</span>
            <span className="text-3xl font-bold text-yellow-500">50%</span>
            <span>off</span>
          </div>
        </div>
        <div>
          <button className="bg-yellow-500 font-semibold text-sm uppercase px-4 py-3 flex gap-2 items-center group/btn">
            Shop Now
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover/btn:translate-x-1 transition-transform delay-150"
            >
              <path
                d="M7 12H17M17 12L13 8M17 12L13 16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <button
        onClick={() => setShow(!show)}
        className="absolute right-6 top-5 text-2xl"
      >
        ❌
      </button>
    </div>
  );
}
