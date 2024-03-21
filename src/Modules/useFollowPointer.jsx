import { useState, useEffect } from "react";

export function useFollowPointer() {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (e) => {
      // Directly use clientX and clientY for the cursor
      setPoint({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handlePointerMove);

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
    };
  }, []);

  return point;
}
