import { Post } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";
import { ICreatePostDTO } from "@/utils/types";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const GET = async () => {
  const allPosts = await prisma.post.findMany();

  return NextResponse.json(allPosts, { status: 200 });
};

export const POST = async (request: NextRequest) => {
  const body = (await request.json()) as ICreatePostDTO;

  const createPostSchema = z.object({
    title: z
      .string()
      .min(5, "Title must be at least 5 characters long")
      .max(100),
    content: z.string().min(10),
  });

  const validation = createPostSchema.safeParse(body);

  if (!validation.success) {
    console.log(validation.error.issues[0].message);
    return NextResponse.json(
      { message: validation.error.issues[0].message },
      { status: 400 },
    );
  }

  const newPost: Post = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
    },
  });
  return NextResponse.json(newPost, { status: 201 });
};
