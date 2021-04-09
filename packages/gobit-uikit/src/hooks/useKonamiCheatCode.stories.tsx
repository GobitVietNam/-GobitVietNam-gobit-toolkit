/**
 * @author [Peter]
 * @email [hoangvanlam9988@mail.com]
 * @create date 2021-04-09 14:14:25
 * @modify date 2021-04-09 14:14:25
 * @desc [description]
 */
import React, { useCallback, useState } from "react";
import useKonamiCheatCode from "./useKonamiCheatCode";

export default {
  title: "Hooks/useKonamiCheatCode",
  argTypes: {},
};

export const Default: React.FC = () => {
  const [correctCodeEntered, setCorrectCodeEntered] = useState(false);
  const correctCodeHandler = useCallback(() => setCorrectCodeEntered(true), [setCorrectCodeEntered]);
  useKonamiCheatCode(correctCodeHandler);

  return (
    <div style={{ padding: "32px" }}>
      <div>Enter: ArrowUp, ArrowUp, ArrowDown, ArrowDown, ArrowLeft, ArrowRight, ArrowLeft, ArrowRight</div>
      <pre>Code Entered: {JSON.stringify(correctCodeEntered)}</pre>
    </div>
  );
};
