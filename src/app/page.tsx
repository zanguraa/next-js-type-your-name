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
    <div>
      <div>
        <h1>Enter Your Name</h1>
      </div>
      <form>
        <input
          type="text"
          placeholder="Type your name..."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button type="submit">Predict Data</button>
      </form>
    </div>
  );
}
