// boards/[게시물아이디]
// 게시물 상세페이지
import { useRouter } from "next/router";
import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";

export default function BoardDetailPage() {
  const router = useRouter();
  return <BoardDetail />;
}
