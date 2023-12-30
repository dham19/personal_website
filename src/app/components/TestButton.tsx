"use client";

export default function TestButton() {
  const makeApiCall = async () => {
    // console.log("helllooo");
    await fetch("/api/route", {
      method: "POST",
      body: JSON.stringify({ hello: "world" }),
    });
  };

  return <button onClick={makeApiCall}> Call API </button>;
}
