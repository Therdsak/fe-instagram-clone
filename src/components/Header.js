import React from "react";
import { Layout, Input, Avatar } from "antd";
import { SearchOutlined, HeartOutlined, UserOutlined } from "@ant-design/icons";

const { Header } = Layout;

const AppHeader = ({ onSearchChange, user }) => {
  return (
    <Header
      style={{
        backgroundColor: "#fff",
        borderBottom: "1px solid #e8e8e8",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div style={{ fontSize: "22px", fontWeight: "bold" }}>Instagram</div>

      <Input
        placeholder="Search"
        prefix={<SearchOutlined />}
        style={{ width: 200 }}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <HeartOutlined style={{ fontSize: "20px" }} />
        {user && user.avatar ? (
          <Avatar src={user.avatar} alt={user.username} />
        ) : (
          <Avatar icon={<UserOutlined />} />
        )}
      </div>
    </Header>
  );
};

export default AppHeader;
