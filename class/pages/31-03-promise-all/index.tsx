export default function PromiseAllPage() {
  // 코드의 순서대로 3초 기다려서 1번 받아오면, 1초 기다려서 2번 받아오고, 또 2초 기다려서 3번 받아옴
  // 3개 모두 받아오는대에 총 6초가 걸리는 것.
  const onClickPromise = async () => {
    console.time("Promise시작");
    const result1 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("https://dog1.jpg");
      }, 3000);
    });
    console.log(result1);

    const result2 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("https://dog2.jpg");
      }, 1000);
    });
    console.log(result2);

    const result3 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("https://dog3.jpg");
      }, 2000);
    });
    console.log(result3);
    console.timeEnd("Promise시작");
  };

  // // 동시에 요청, 한번만 기다림!
  // // Promise.all에 await를 붙여주는 아래의 세개가 모두 끝날 때까지 기다림!
  // // 두번째, 세번째는 2초,1초 걸리니까 먼저 받아와져서 나머지가 끝날 때까지 기다림
  // // 첫번째가 3초가 지나서 받아와지면 완료되니까 Promise.all이 끝남! 총 3초를 기다리는 것.
  const onClickPromiseAll = async () => {
    // 1. 하나하나 확인하는 방법
    //   console.time("Promise.all 시작");
    //   await Promise.all([
    //     new Promise((resolve, reject) => {
    //       setTimeout(() => {
    //         resolve("https://dog1.jpg");
    //       }, 3000);
    //     }),
    //     new Promise((resolve, reject) => {
    //       setTimeout(() => {
    //         resolve("https://dog2.jpg");
    //       }, 1000);
    //     }),
    //     new Promise((resolve, reject) => {
    //       setTimeout(() => {
    //         resolve("https://dog3.jpg");
    //       }, 2000);
    //     }),
    //   ]);
    //   console.log(result);
    //   console.timeEnd("Promise.all 시작");

    // 2. 한방에 확인하는 방법
    console.time("Promise.all 시작");
    const result = await Promise.all(
      ["https://dog1.jpg", "https://dog2.jpg", "https://dog3.jpg"].map(
        (el) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(el);
            }, 3000);
          })
      )
    );
    console.log(result);
    console.timeEnd("Promise.all 시작");
  };

  return (
    <div>
      <button onClick={onClickPromise}>Promise 연습하기</button>
      <button onClick={onClickPromiseAll}>Promise.all 연습하기</button>
    </div>
  );
}
