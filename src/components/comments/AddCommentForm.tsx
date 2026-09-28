"use client";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import type { CommentWithUser } from "@/utils/types";

interface IAddCommentFormProps {
  postId?: number;
  onCommentAdded: (comment: CommentWithUser) => void;
}

const AddCommentForm = ({ postId, onCommentAdded }: IAddCommentFormProps) => {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!postId) {
      return toast.error("Post is not loaded yet");
    }

    if (commentText.trim() === "") return toast.error("Comment is required");

    try {
      const response = await axios.post<CommentWithUser>(
        `http://localhost:3000/api/comments`,
        {
          text: commentText.trim(),
          postId,
        },
      );
      onCommentAdded(response.data);
      setCommentText("");
      toast.success("Comment added successfully");
    } catch (error: unknown) {
      const message = axios.isAxiosError<{ message?: string }>(error)
        ? error.response?.data?.message || error.message
        : error instanceof Error
          ? error.message
          : "Something went wrong";
      toast.error(message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-4 mx-auto w-full md:w-2/3">
      <input
        type="text"
        placeholder={postId ? "Add a comment.." : "Loading post..."}
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        disabled={!postId}
        className="mb-6 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 disabled:cursor-not-allowed disabled:opacity-60"
      />
      <button
        type="submit"
        disabled={!postId}
        className="w-full rounded-lg bg-indigo-600 py-2 font-medium text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 disabled:cursor-not-allowed disabled:bg-indigo-300"
      >
        Add Comment
      </button>
    </form>
  );
};

export default AddCommentForm;
