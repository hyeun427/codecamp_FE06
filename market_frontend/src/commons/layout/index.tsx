import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import Sidebar from "./sidebar";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HIDDEN_LAYOUT = ["/signIn"];

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
          <Sidebar />
          <Body>{props.children}</Body>
        </>
      ) : (
        <>
          <Sidebar />
          <Body>{props.children}</Body>
        </>
      )}
    </>
  );
}
