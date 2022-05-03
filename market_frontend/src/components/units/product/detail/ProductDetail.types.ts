import { IQuery } from "../../../../commons/types/generated/types";

export interface IProductDetaulUIProps {
  data?: Pick<IQuery, "fetchUseditem">;
  onClickMoveToList: () => void;
  onClickMoveToEdit: () => void;
  onClickPick: () => Promise<void>;
}
