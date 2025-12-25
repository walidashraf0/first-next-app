type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

interface ICreatePostDTO {
  title: string;
  body: string;
}

interface IUpdatePostDTO {
  title?: string;
  body?: string;
}
export type { TPost, ICreatePostDTO, IUpdatePostDTO };
