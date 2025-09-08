/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect, useRef } from "react";
import Post from "./Post";

import { useQuery } from '@tanstack/react-query';
import { fetchPokemons } from '../api/fetchPokemons.ts';

const Feed = ({ searchTerm, onRequireLogin }) => {
  const [allPosts, setAllPosts] = useState([]);
  const [searchPosts, setSearchPosts] = useState([]);
  const [hasMore, setHasMore] = useState(false); // ไม่มี infinite scroll แล้วถ้าใช้ API จริง
  // const loader = useRef(null);

  // ดึงข้อมูล Pokemon จาก API ด้วย react-query
  const { data, isLoading, error } = useQuery({
    queryKey: ["pokemons"],
    queryFn: fetchPokemons,
  });

  // hooks ทั้งหมดต้องเรียกก่อน return อะไร

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading Pokémon 😢</p>;
  }

  // เมื่อข้อมูล Pokemon มาแล้ว ให้แปลงเป็นรูปแบบโพสต์
  useEffect(() => {
    if (data) {
      const pokemonPosts = data.map((poke, index) => ({
        id: index,
        username: poke.name,
        avatar: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        image: poke.image,
        caption: `A wild ${poke.name} appeared!`,
        timestamp: new Date(),
      }));
      setAllPosts(pokemonPosts);
      setHasMore(false); // โหลดหมดแล้ว
    }
  }, [data]);

  
  useEffect(() => {
    if (searchTerm) {
      const filtered = allPosts.filter((post) =>
        post.caption.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchPosts(filtered);
    } else {
      setSearchPosts([]);
    }
  }, [searchTerm, allPosts]);

  const postsToRender = searchTerm ? searchPosts : allPosts;

  return (
    <div style={{ padding: "20px" }}>
      {postsToRender.map((post) => (
        <Post key={post.id} {...post} onRequireLogin={onRequireLogin} />
      ))}

      {!searchTerm && !hasMore && allPosts.length === 0 && (
        <div style={{ textAlign: "center", padding: "20px", color: "#999" }}>
          No posts available.
        </div>
      )}
    </div>
  );
};

export default Feed;
