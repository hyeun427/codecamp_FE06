import { useRouter } from "next/router";
import { useRecoilState } from "recoil";

export function useMoveToPage() {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState();

  const onClickMoveToPage = (path) => () => {
    setVisitedPage(path);
    router.push(path);
  };

  return { visitedPage, onClickMoveToPage };
}
