import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ForumIcon from "@mui/icons-material/Forum";
import styled from "@emotion/styled";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";

export const Flex = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;
export const FlexRow = styled(Flex)``;
export const FlexColumn = styled(Flex)`
  flex-direction: column;
`;

export const EditIcon = styled(CreateOutlinedIcon)`
  && {
    color: #bdbdbd;
    margin-right: 16px;
    font-size: 18px;
    cursor: pointer;
  }
`;

export const CloseIcon = styled(CloseOutlinedIcon)`
  && {
    color: #bdbdbd;
    font-size: 18px;
    cursor: pointer;
  }
`;

export const CommentIcon = styled(ForumIcon)`
  && {
    margin-left: 16px;
    color: #bdbdbd;
    font-size: 18px;
    cursor: pointer;
  }
`;

export const UserIcon = styled(AccountCircleIcon)`
  && {
    color: #bdbdbd;
    font-size: 40px;
  }
`;

export const CommentWrapper = styled(FlexColumn)`
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
  width: 1200px;
`;

export const CommentContainer = styled(FlexRow)`
  margin: 0 auto;
  padding: 40px 0px 20px 0px;
  width: 100%;
`;

export const CommentLeft = styled.div`
  padding-right: 15px;
`;
export const CommentRight = styled(FlexColumn)``;
export const CommentRightHead = styled(FlexRow)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const Contents = styled.div`
  padding-top: 4px;
  color: #4f4f4f;
`;
export const CreatedAt = styled.div`
  padding-top: 20px;
  color: #bdbdbd;
`;
export const CommentRightBody = styled(FlexRow)``;
export const CommentRightFoot = styled(FlexRow)``;
export const CommentRightHeadLeft = styled(FlexRow)`
  & > .ant-rate {
    margin-top: -6px;
  }
`;
export const Writer = styled.div`
  padding-right: 18px;
  font-weight: 700;
  color: #000000;
`;

export const CommentRightHeadRight = styled(FlexRow)``;

export const AnswerWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding-top: 1.5rem;
`;

export const AnswerIconWrapper = styled.div`
  padding-left: 2.5rem;
`;

export const AnswerIcon = styled(SubdirectoryArrowRightIcon)`
  && {
    color: #000000;
    font-size: 20px;
    cursor: pointer;
  }
`;
