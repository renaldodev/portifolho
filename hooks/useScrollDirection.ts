import { useEffect, useState } from "react";

export enum DIRECTION {
  UP = "up",
  DOWN = "down",
}

export default function useScrollDirection(
  initialDirection: DIRECTION | null
) {
  const [direction, setDirection] = useState<DIRECTION>(
    initialDirection ? initialDirection : DIRECTION.DOWN
  );
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      setDirection(scrollY > lastScrollY ? DIRECTION.DOWN : DIRECTION.UP);
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    const scroll = () => {
      window.requestAnimationFrame(updateScrollDirection);
    };
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  return direction;
}
