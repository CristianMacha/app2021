export interface IAuthRegister {
  matricula: string;
  name: string;
  mail: string;
  password: string;
}

export interface IAuthLogin {
  mail: string;
  password: string;
}
