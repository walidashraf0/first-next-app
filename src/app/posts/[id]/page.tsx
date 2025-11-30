"use client";
import AddCommentForm from "@/components/comments/AddCommentForm";
import CommentItem from "@/components/comments/CommentItem";
import { TPost } from "@/utils/types";
import axios from "axios";
import { useEffect, useState } from "react";
import { use } from "react";

const PostPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);

  const [post, setPost] = useState<TPost | null>(null);
  const getPosts = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setPost(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, [id]);

  return (
    <>
      <div className="container mx-auto">
        <div className="my-4 mx-auto w-full p-2 md:w-2/3 bg-gray-400 border-2 border-blue-400 rounded-md">
          <h2 className="text-2xl font-bold text-green-400">
            {post?.title} <span className="text-2xl">{post?.id}</span>
          </h2>
          <p className="text-sm text-gray-600">{post?.body}</p>
        </div>
        <AddCommentForm />
        <CommentItem comment={"hiii"} />
        <CommentItem comment={"hiii"} />
        <CommentItem comment={"hiii"} />
        <CommentItem comment={"hiii"} />
        
      </div>
    </>
  );
};

export default PostPage;
