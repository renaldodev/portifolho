import { useEffect, MutableRefObject } from "react";

export default function useClickedOutside(
  ref: MutableRefObject<any>,
  handle: () => void
) {
  useEffect(() => {
    const handleFC=()=>handle()
    const listner = (evt: Event) => {
      if (!ref.current || ref.current.contains(evt.target)) {
         return;
      } 
      handleFC()
    };

    window.addEventListener("mousedown", listner);
    window.addEventListener("touchstart", listner);
    return () => {
      window.removeEventListener("mousedown", listner);
      window.removeEventListener("touchstart", listner);
    };
  }, [ref, handle]);
}
