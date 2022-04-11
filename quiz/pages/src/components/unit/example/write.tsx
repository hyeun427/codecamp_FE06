import { useRecoilState } from "recoil";
import { isEditState } from "../../store";

export default function WritePage() {
  const [isEdit] = useRecoilState(isEditState);

  return <h1>{isEdit ? "수정하기" : "등록하기"}</h1>;
}
