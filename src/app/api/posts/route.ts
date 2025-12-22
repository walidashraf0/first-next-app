import { posts } from "@/utils/data";
import { ICreatePostDTO, TPost } from "@/utils/types";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const GET = (request: NextRequest) => {
  console.log(request);
  return NextResponse.json(posts, { status: 200 });
};

export const POST = async (request: NextRequest) => {
  const body = (await request.json()) as ICreatePostDTO;

  const createPostSchema = z.object({
    title: z.string().min(5, "Title must be at least 5 characters long").max(100),
    body: z.string().min(10),
  });

  const validation = createPostSchema.safeParse(body);
  
  if (!validation.success) {
    console.log(validation.error.issues[0].message)
    return NextResponse.json({ message: validation.error.issues[0].message }, { status: 400 });
  }

  const newPost: TPost = {
    id: posts.length + 1,
    userId: 5,
    title: body.title,
    body: body.body,
  };
  posts.push(newPost);
  return NextResponse.json(newPost, { status: 201 });
};
