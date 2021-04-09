/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 14:14:34
 * @modify date 2021-04-09 14:14:34
 * @desc [description]
 */
import { useEffect } from "react";

const useKonamiCheatCode = (matchedCodeHandler: () => void): void => {
  useEffect(() => {
    const pattern = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
    ];

    let currentIndex = 0;

    const onKeyUpHandler = (event: KeyboardEvent) => {
      const { key } = event;
      // is key in correct order otherwise reset
      if (key !== pattern[currentIndex]) {
        currentIndex = 0;
        return;
      }
      currentIndex += 1;
      if (pattern.length === currentIndex) {
        currentIndex = 0;
        matchedCodeHandler();
      }
    };

    document.addEventListener("keyup", onKeyUpHandler);
    return () => document.removeEventListener("keyup", onKeyUpHandler);
  }, [matchedCodeHandler]);
};

export default useKonamiCheatCode;
