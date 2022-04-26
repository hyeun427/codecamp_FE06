import { Wrapper, MenuItem } from "./LayoutNavigation.styles";

export default function LayoutNavigationUI(props) {
  return (
    <Wrapper>
      <MenuItem>게시판</MenuItem>
      <MenuItem onClick={props.onClickMoveToMarket}>중고마켓</MenuItem>
      <MenuItem>고객센터</MenuItem>
      <MenuItem>마이페이지 </MenuItem>
    </Wrapper>
  );
}
