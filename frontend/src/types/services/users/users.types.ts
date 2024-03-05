export interface IUsersData {
  id: string;
  userName: string;
  phone: number;
}

export interface IUsersDto {
  userName: string;
  phone: number;
  password: string;
  passwordConfirm: string;
}
