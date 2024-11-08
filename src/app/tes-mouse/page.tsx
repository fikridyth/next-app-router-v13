"use client";

import { useEffect } from "react";

export default function TesPage() {
  function MouseTracker() {
    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        console.log("Mouse moved:", e.clientX, e.clientY);
      };

      // Log to confirm that the event listener is being added
      console.log("Event listener added for mouse move");

      // Add event listener for mousemove
      window.addEventListener("mousemove", handleMouseMove);

      // Cleanup function to remove the event listener when the component unmounts
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        console.log("Event listener removed");
      };
    }, []); // This will run only once, after the initial render

    return <div className="mt-10">Move your mouse!</div>;
  }

  return (
    <div>
      <h1>Test Page</h1>
      <MouseTracker />
    </div>
  );
}
