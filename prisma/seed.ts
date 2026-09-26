import { prisma } from "@/lib/prisma";
import posts from "./posts.json";


async function main() {
  const postsToSeed = posts.map((post) => ({
    ...post,
    authorId: 1,
    published: true,
    publishedAt: new Date(),
  }));

  await prisma.post.createMany({
    data: postsToSeed,
    skipDuplicates: true,
  });

  console.log(`${posts.length} posts inserted`);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });