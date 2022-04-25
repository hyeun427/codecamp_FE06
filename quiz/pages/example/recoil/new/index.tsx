import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../../src/commons/store";
import NewPage from "./new";

export default function GlobalStatePage() {
  const [, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(false);
  }, []);

  return <NewPage />;
}
