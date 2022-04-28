import { memo } from "react";

function MemoizationPresenterPage(props) {
  console.log("프리젠터가 렌더링된다구!!~!~!!!");
  return (
    <div>
      <div></div>
      <div>===================================</div>
      <h1>프리젠터!!!</h1>
      <div>===================================</div>
    </div>
  );
}

export default memo(MemoizationPresenterPage);
