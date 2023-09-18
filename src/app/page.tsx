"use client";
import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [inputVal, setInputVal] = useState<string>("");

  const { push } = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    push(`/prediction/${inputVal}`);
    console.log(inputVal);
    setInputVal("");
  };

  return (
    <div className="w-full py-40 min-h-screen	flex justify-center items-start bg-inherit	">
      <div className="flex flex-col justify-center items-start bg-inherit	">
        <div>
          <h1>Enter Your Name</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type your name..."
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button type="submit">Predict Data</button>
        </form>
      </div>
    </div>
  );
}
