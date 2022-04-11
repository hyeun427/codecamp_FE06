import { useState } from "react";

export default function StatePrevPage() {
  const [state, setState] = useState(0);

  const onClickState = () => {
    setState((qwer) => qwer + 1);
  };

  return (
    <div>
      <div>현재 state: {state}</div>
      <button onClick={onClickState}>state 증가!~</button>
    </div>
  );
}
