import { useRouter } from "next/router";
import LayoutNavigationUI from "./LayoutNavigation.presenter";
import { ILayoutNavigation } from "./LayoutNavigation.types";

export default function LayoutNavigation(props: ILayoutNavigation) {
  const router = useRouter();

  const onClickMoveToMarket = () => {
    router.push("/products");
  };
  return <LayoutNavigationUI onClickMoveToMarket={onClickMoveToMarket} />;
}
