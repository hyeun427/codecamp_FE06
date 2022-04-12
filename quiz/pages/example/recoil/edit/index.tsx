import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../src/commons/store";
import EditPage from "./edit";

export default function GlobalStatePage() {
  const [, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(true);
  }, []);

  return <EditPage />;
}
