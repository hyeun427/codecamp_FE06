import { Menu, Button } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

export default function Toggle() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleBar, setToggleBar] = useState(true);
  const router = useRouter();

  const NavTop = styled.div`
    display: flex;
    /* justify-content: flex-end; */
    button {
      background: black;
      border: none;
    }
  `;

  const toggleChange = () => {
    setToggleMenu(!toggleMenu);
    setToggleBar(!toggleBar);
  };

  const onClickMenuBoards = () => {
    router.push("../../../boards");
  };

  return (
    <div style={{ width: 150 }}>
      <NavTop>
        <Button type="primary" onClick={toggleChange}>
          {React.createElement(
            toggleBar ? MenuUnfoldOutlined : MenuFoldOutlined
          )}
        </Button>
      </NavTop>

      {toggleMenu && (
        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={toggleBar}
        >
          <Menu.Item
            key="1"
            icon={<PieChartOutlined />}
            onClick={onClickMenuBoards}
          >
            게시판
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            고객센터
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            마이페이지
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
}
