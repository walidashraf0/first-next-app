"use client";
import Pagination from "@/components/Pagination/Pagination";
import PostItem from "@/components/PostItem/PostItem";
import SearchPostInput from "@/components/SearchPostInput/SearchPostInput";
import { Post } from "@/generated/prisma/client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getPostsData } from "../apiCalls/getPosts";

const PostsPage = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";
  
  const [posts, setPosts] = useState<Post[]>([]);


  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await getPostsData(page);
      setPosts(postsData);
    };
    fetchPosts();
  }, [page]);

  return (
    <>
      <div className="container m-auto px-4">
        <SearchPostInput />
        <div className="flex items-center justify-center flex-wrap gap-7">
          {posts?.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
        <Pagination />
      </div>
    </>
  );
};

export default PostsPage;
