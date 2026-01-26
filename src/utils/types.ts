type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

interface ICreatePostDTO {
  title: string;
  content: string;
}

interface IUpdatePostDTO {
  title?: string;
  content?: string;
}

interface IRegisterUserDto {
  username: string;
  email: string;
  password: string;
}

export type { TPost, ICreatePostDTO, IUpdatePostDTO, IRegisterUserDto };
