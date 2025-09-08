import React, { useState } from "react";
import { Card, Avatar, Image, Typography, Space, message } from "antd";
import {
  HeartOutlined,
  HeartFilled,
  MessageOutlined,
  SendOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import moment from "moment";

import { useSelector } from "react-redux";

const { Text } = Typography;

const Post = ({
  username,
  avatar,
  image,
  caption,
  timestamp,
  onRequireLogin,
}) => {
  const [liked, setLiked] = useState(false);
  const [showHeart, setShowHeart] = useState(false);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleImageDoubleClick = () => {
    if (!isLoggedIn) {
      message.info("You need to login to like posts!");
      if (onRequireLogin) onRequireLogin();
      return;
    }

    setLiked(true);
    setShowHeart(true);

    setTimeout(() => setShowHeart(false), 800);
  };

  const handleLikeClick = () => {
    if (!isLoggedIn) {
      message.info("You need to login to like posts!");
      if (onRequireLogin) onRequireLogin();
      return;
    }

    setLiked(!liked);
  };

  const handleShare = () => {
    if (!isLoggedIn) {
      message.info("You need to login to like posts!");
      if (onRequireLogin) onRequireLogin();
      return;
    }

    const postUrl = `${
      window.location.origin
    }/post/${username}-${timestamp.getTime()}`; 

    if (navigator.share) {
      navigator
        .share({
          title: `${username}'s Post`,
          text: caption,
          url: postUrl,
        })
        .then(() => message.success("Shared successfully!"))
        .catch((error) => message.error("Failed to share."));
    } else {
      navigator.clipboard.writeText(postUrl).then(() => {
        message.success("Post link copied to clipboard!");
      });
    }
  };

  return (
    <Card
      style={{ maxWidth: 500, margin: "0 auto 20px", position: "relative" }}
      bodyStyle={{ padding: 0 }}
      bordered={false}
    >
      <div style={{ display: "flex", alignItems: "center", padding: "10px" }}>
        <Avatar src={avatar} />
        <Text strong style={{ marginLeft: "10px" }}>
          {username}
        </Text>
      </div>

      <div
        onDoubleClick={handleImageDoubleClick}
        style={{ position: "relative", cursor: "pointer" }}
      >
        <Image
          src={image}
          width="100%"
          preview={false}
          style={{ objectFit: "cover" }}
        />

        {showHeart && (
          <HeartFilled
            style={{
              color: "white",
              fontSize: "80px",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) scale(1)",
              animation: "fadeAndScale 0.8s ease-in-out",
              pointerEvents: "none",
              textShadow: "0 0 10px red",
            }}
          />
        )}
      </div>

      <Space style={{ padding: "10px" }}>
        {liked ? (
          <HeartFilled style={{ color: "red" }} onClick={handleLikeClick} />
        ) : (
          <HeartOutlined onClick={handleLikeClick} />
        )}
        <MessageOutlined />
        <SendOutlined />
        <ShareAltOutlined onClick={handleShare} style={{ cursor: "pointer" }} />
      </Space>

      <div style={{ padding: "0 10px 10px" }}>
        <Text strong>{username}</Text> <Text>{caption}</Text>
        <div style={{ fontSize: "12px", color: "#888" }}>
          {moment(timestamp).fromNow()}
        </div>
      </div>
    </Card>
  );
};

export default Post;
