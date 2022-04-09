import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HIDDEN_LAYOUT = ["/"];

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenLayout = HIDDEN_LAYOUT.includes(router.asPath);

  return (
    <>
      {!isHiddenLayout ? (
        <>
          <LayoutHeader />
          <LayoutBanner />
          <LayoutNavigation />
          <Body>{props.children}</Body>
        </>
      ) : (
        <>
          <Body>{props.children}</Body>
        </>
      )}
    </>
  );
}
