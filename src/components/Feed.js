import React, { useEffect, useRef, useCallback } from "react";
import Post from "./Post";

import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPokemons } from "../api/fetchPokemons.ts";

const Feed = ({ searchTerm, onRequireLogin }) => {
  const loader = useRef(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey: ["pokemons"],
    queryFn: ({ pageParam = 0 }) => fetchPokemons(pageParam),
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length < 10) return undefined;
      return pages.length * 10; 
    },
  });

  const allPosts = data
    ? data.pages.flatMap((page, pageIndex) =>
        page.map((poke, index) => ({
          id: pageIndex * 10 + index,
          username: poke.name,
          avatar: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            pageIndex * 10 + index + 1
          }.png`,
          image: poke.image,
          caption: `A wild ${poke.name} appeared!`,
          timestamp: new Date(),
        }))
      )
    : [];

  const postsToRender = searchTerm
    ? allPosts.filter((post) =>
        post.caption.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allPosts;

  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (
        target.isIntersecting &&
        hasNextPage &&
        !isFetchingNextPage &&
        !searchTerm
      ) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage, searchTerm]
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);

    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [handleObserver]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading Pokémon 😢</p>;

  return (
    <div style={{ padding: "20px" }}>
      {postsToRender.map((post) => (
        <Post key={post.id} {...post} onRequireLogin={onRequireLogin} />
      ))}

      <div
        ref={loader}
        style={{ height: "100px", textAlign: "center", padding: "20px" }}
      >
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Scroll down to load more"
          : "No more posts"}
      </div>

      {searchTerm && postsToRender.length === 0 && (
        <div style={{ textAlign: "center", padding: "20px", color: "#999" }}>
          No results found for "{searchTerm}"
        </div>
      )}
    </div>
  );
};

export default Feed;
