import { posts } from "@/utils/data";
import { IUpdatePostDTO } from "@/utils/types";
import { NextRequest, NextResponse } from "next/server";

interface IGetPostProps {
  params: { id: string };
}

export const GET = (request: NextRequest, { params }: IGetPostProps) => {
  const post = posts.find((p) => p.id === parseInt(params.id));
  if (!post) {
    return NextResponse.json({ message: "Post not found" }, { status: 404 });
  }
  return NextResponse.json({ message: post }, { status: 200 });
};

export const PUT = async (request: NextRequest, { params }: IGetPostProps) => {
  const { id } = await params;
  const post = posts.find((p) => p.id === parseInt(id));
  const data = (await request.json()) as IUpdatePostDTO;
  if (!post) {
    return NextResponse.json({ message: "Post not found" }, { status: 404 });
  }
  return NextResponse.json({ message: "Post Updated" }, { status: 200 });
};

export const DELETE = async (request: NextRequest, { params }: IGetPostProps) => {
  const { id } = await params;
  const post = posts.find((p) => p.id === parseInt(id));
  if (!post) {
    return NextResponse.json({ message: "Post not found" }, { status: 404 });
  }
  return NextResponse.json({ message: "Post Deleted" }, { status: 200 });
};
