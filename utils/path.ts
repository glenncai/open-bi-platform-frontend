import { LOGIN_PATHNAME, REGISTER_PATHNAME, RESET_PASSWORD_PATHNAME } from '@/constant/path';

const isCurrentAuthPath = (pathName: string): boolean => {
  return [LOGIN_PATHNAME, REGISTER_PATHNAME, RESET_PASSWORD_PATHNAME].includes(pathName);
};

const isNoNeedUserInfoPath = (pathName: string): boolean => {
  return [LOGIN_PATHNAME, REGISTER_PATHNAME, RESET_PASSWORD_PATHNAME].includes(pathName);
};

export { isCurrentAuthPath, isNoNeedUserInfoPath };
