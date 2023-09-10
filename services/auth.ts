import httpClient from '@/lib/httpClient';
import { HttpResProps } from '@/lib/type';

export interface LoginFormProps {
  username: string;
  password: string;
}

export interface RegisterFormProps {
  username: string;
  password: string;
  confirmPassword: string;
}

export interface LoginUserInfoProps {
  id: number;
  username: string;
  role: string;
  loginIp: string;
  valid: boolean;
  createdAt: string;
  updatedAt: string;
}

const loginService = async (data: LoginFormProps): Promise<HttpResProps> => {
  return (await httpClient.post('/user/login', data)) as HttpResProps;
};

const registerService = async (data: RegisterFormProps): Promise<HttpResProps> => {
  return (await httpClient.post('/user/register', data)) as HttpResProps;
};

const getLoginUserInfoService = async (): Promise<HttpResProps> => {
  return (await httpClient.post('/user/get/login')) as HttpResProps;
};

export { loginService, registerService, getLoginUserInfoService };
