import { Post } from "@/generated/prisma/client";

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
