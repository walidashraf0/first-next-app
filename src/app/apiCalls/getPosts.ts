import { Post } from "@/generated/prisma/client";
import axios from "axios";

export const getPostsData = async (
  pageNumber: string | undefined,
): Promise<Post[]> => {
  const response = await fetch(
    `http://localhost:3000/api/posts?page=${pageNumber}`,
    { cache: "no-store" },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

// Get Posts data based on search text
export const getSearchPostsData = async (
  searchText: string,
): Promise<Post[]> => {
  const res = await axios.get(
    `http://localhost:3000/api/posts/search?searchText=${searchText}`,
  );

  return res.data;
};
