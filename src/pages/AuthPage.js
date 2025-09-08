import React, { useState } from "react";
import { Card, Input, Button, Typography, Divider, Image, message } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

const { Title, Text, Link } = Typography;

const AuthPage = ({ onAuthSuccess }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!email || !password) {
      message.error("Please enter email and password");
      return;
    }

    message.success(isRegister ? "Registered!" : "Logged in!");
    setTimeout(() => {
      onAuthSuccess();
    }, 1000);
  };

  return (
    <div
      style={{
        background: "#fafafa",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{
          textAlign: "center",
          background: "#fff",
          border: "1px solid #ddd",
        }}
      >
        <Image
          preview={false}
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Instagram"
          width={60}
          style={{ marginBottom: 20 }}
        />

        <Title level={3} style={{ color: "#000" }}>
          {isRegister ? "Sign up to see photos" : "Login to your account"}
        </Title>

        <Input
          size="large"
          placeholder="Email"
          prefix={<MailOutlined />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: 15 }}
        />

        <Input.Password
          size="large"
          placeholder="Password"
          prefix={<LockOutlined />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: 15 }}
        />

        <Button
          type="primary"
          block
          size="large"
          onClick={handleSubmit}
          style={{ marginBottom: 10 }}
        >
          {isRegister ? "Register" : "Login"}
        </Button>

        <Divider plain style={{ color: "#999" }}>
          OR
        </Divider>

        <Text style={{ color: "#555" }}>
          {isRegister ? (
            <>
              Already have an account?{" "}
              <Link onClick={() => setIsRegister(false)}>Login</Link>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <Link onClick={() => setIsRegister(true)}>Register</Link>
            </>
          )}
        </Text>
      </Card>
    </div>
  );
};

export default AuthPage;
