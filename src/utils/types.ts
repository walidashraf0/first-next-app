type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type TUserPayload = {
  id: number;
  username: string;
  isAdmin: boolean;
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

interface ILoginUserDto {
  email: string;
  password: string;
}

interface IUpdateUserDto {
  username?: string;
  email?: string;
  password?: string;
}

export type {
  TPost,
  TUserPayload,
  ICreatePostDTO,
  IUpdatePostDTO,
  IRegisterUserDto,
  ILoginUserDto,
  IUpdateUserDto,
};
