export interface IBoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickMoveToBoardList: () => void;
  onClickMoveToBoardEdit: () => void;
  onClickDeleteBoard: () => void;
  onClickLike: () => void;
  onClickDislike: () => void;
}
