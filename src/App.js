import React, { useState } from "react";
import { Layout, Modal } from "antd";
import AppHeader from "./components/Header";
import Feed from "./components/Feed";
import AuthPage from "./pages/AuthPage";

import { useSelector, useDispatch } from "react-redux";
import { login } from "./store/authSlice";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAuthModal, setShowAuthModal] = useState(false);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const [user, setUser] = useState(null);

  const handleAuthSuccess = () => {
    setUser({
      username: "johndoe",
      avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    });
    dispatch(login({ email: "mockuser@example.com" }));
    setShowAuthModal(false); // ปิด modal login หลัง login สำเร็จ
  };

  return (
    <Layout style={{ minHeight: "100vh", background: "#fafafa" }}>
      <AppHeader onSearchChange={setSearchTerm} user={user} />

      <Layout.Content
        style={{ maxWidth: 800, margin: "0 auto", width: "100%" }}
      >
        <Feed
          searchTerm={searchTerm}
          onRequireLogin={() => setShowAuthModal(true)}
        />
      </Layout.Content>

      {/* Login Modal */}
      <Modal
        visible={showAuthModal}
        footer={null}
        closable={false}
        destroyOnClose
      >
        <AuthPage onAuthSuccess={handleAuthSuccess} />
      </Modal>
    </Layout>
  );
}

export default App;
