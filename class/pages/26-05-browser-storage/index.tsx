export default function BrowserStoragePage() {
  const onClickSaveCookie = () => {
    document.cookie = "aaa=철수";
    document.cookie = "zzz=맹구";
  };
  const onClickSaveLocal = () => {
    localStorage.setItem("bbb", "영희");
  };
  const onClickSaveSession = () => {
    sessionStorage.setItem("ccc", "훈이");
  };
  const onClickLoadCookie = () => {
    const myCookie = document.cookie
      .split("; ")
      // .filter((el) => el.includes("aaa="));
      // startsWith를 쓰면 괄호 안의 문자열로 시작하는것 찾아줌!!!!대박
      .filter((el) => el.startsWith("aaa="))[0]
      .replace("aaa=", "");
    //  이렇게 하면 철수만 뽑아 낼수 있음
    console.log(myCookie);
  };
  const onClickLoadLocal = () => {
    const bbb = localStorage.getItem("bbb");
    console.log(bbb);
  };
  const onClickLoadSession = () => {
    const ccc = sessionStorage.getItem("ccc");
    console.log(ccc);
  };

  return (
    <div>
      <button onClick={onClickSaveCookie}>쿠키에 저장</button>
      <button onClick={onClickSaveLocal}>로컬에 저장</button>
      <button onClick={onClickSaveSession}>세션에 저장</button>
      ============================
      <button onClick={onClickLoadCookie}>쿠키 조회</button>
      <button onClick={onClickLoadLocal}>로컬 조회</button>
      <button onClick={onClickLoadSession}>세션 조회</button>
    </div>
  );
}
