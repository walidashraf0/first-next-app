import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "@/utils/verifyToken";

interface Props {
  params: { id: string };
}

export const DELETE = async (request: NextRequest, { params }: Props) => {
  try {
    const { id } = await params;
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
    });
    if (!user) {
      return NextResponse.json({ message: "User not found!" }, { status: 404 });
    }

    const userAuthToken = verifyToken(request);

    if (userAuthToken !== null && userAuthToken.id === user.id) {
      await prisma.user.delete({ where: { id: parseInt(params.id) } });
      return NextResponse.json(
        { message: "User deleted successfully!" },
        { status: 200 },
      );
    }

    return NextResponse.json(
      { message: "You are not authorized to delete this user!" },
      { status: 403 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal Server Error!",
      },
      { status: 500 },
    );
  }
};

export const GET = async (request: NextRequest, { params }: Props) => {
  try {
    const { id } = await params;
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
      select: {
        id: true,
        username: true,
        email: true,
        createdAt: true,
        isAdmin: true,
      },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found!" }, { status: 404 });
    }

    const userAuthToken = verifyToken(request);

    if (userAuthToken === null || userAuthToken.id !== user.id) {
      return NextResponse.json(
        { message: "You are not authorized to view this user!" },
        { status: 403 },
      );
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error!" },
      { status: 500 },
    );
  }
};
