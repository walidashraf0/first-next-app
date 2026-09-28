import PostPageClient from "./PostPageClient";
import { verifyTokenPage } from "@/utils/verifyToken";
import { cookies } from "next/headers";

const PostPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const token = (await cookies()).get("jwtToken")?.value || "";
  const payload = await verifyTokenPage(token);

  return <PostPageClient id={id} isLoggedIn={Boolean(payload)} />;
};

export default PostPage;
