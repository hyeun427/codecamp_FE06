import { useCallback, useMemo, useState } from "react";
import MemoizationPresenterPage from "./presenter";

export default function MemoizationContainerPage() {
  console.log("컨테이너가 렌더링 됩니다!");

  let countLet = 0;
  const [countState, setCountState] = useState(0);

  const aaa = useMemo(() => Math.random(), []);
  // 특정상황에서 memo값이 아닌 새로운 값을 써야할 때는 의존성배열안에 값을 넣어주면 됨!
  // const aaa = useMemo(() => Math.random(), [countState]);
  console.log(aaa);

  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);

  /* const onClickCountState = useCallback(() => {
    // useCallback함수 내에서 state쓰는 것은 주의해야함. 리렌더가 불가능하기때문.
    // console.log(countState + 1);
    // setCountState(countState + 1);
    setCountState((prev) => prev + 1);
  }, []); */

  // useMemo로 useCallback 만들어보기!
  const onClickCountState = useMemo(() => {
    return () => {
      // console.log(countState + 1);
      setCountState((prev) => prev + 1);
    };
  }, []);

  /*  // useMemo로 useCallback 만들어보기!
  const onClickCountState = useMemo(() => {
    return () => {
      console.log(countState + 1);
      setCountState(countState + 1);
    };
  }, []); */

  return (
    <div>
      <div>===================================</div>
      <h1>이것은 컨테이너 입니다!</h1>

      <div>카운트(let) : {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) +1 올리기</button>

      <div>카운트(state) : {countState}</div>
      <button onClick={onClickCountState}>카운트(state) +1 올리기</button>
      <div>===================================</div>
      <MemoizationPresenterPage countState={countState} />
    </div>
  );
}
