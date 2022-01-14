import { useEffect, useState } from "react";

enum DIRECTION {
  UP = "up",
  DOWN = "down",
}

export default function useScrollDirection() {
  const [direction, setDirection] = useState<DIRECTION>(DIRECTION.UP);
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      setDirection(scrollY > lastScrollY ? DIRECTION.DOWN : DIRECTION.UP);
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    const scroll = () => {
        window.requestAnimationFrame(updateScrollDirection)
    };
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  return direction;
}
