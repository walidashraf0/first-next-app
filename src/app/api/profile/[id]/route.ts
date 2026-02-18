import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

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

    const authToken = request.headers.get("authtoken") as string;
    if (!authToken) {
      return NextResponse.json(
        { message: "No token provided, Access Denied!" },
        { status: 401 },
      );
    }
    const userAuthToken = jwt.verify(
      authToken,
      process.env.JWT_SECRET as string,
    ) as JwtPayload;
    if (userAuthToken.id === user.id) {
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
