import CryptoJS from 'crypto-js/core';
import { parse, stringify } from 'flatted';
import { USER_TOKEN } from '@/constant/localStorage';

const encryptData = (content: unknown, salt: string): string => {
  return CryptoJS.AES.encrypt(stringify({ content }), salt).toString();
};

const decryptData = (cipherText: string, salt: string): string => {
  return parse(CryptoJS.AES.decrypt(cipherText, salt).toString(CryptoJS.enc.Utf8)).content;
};

const setToken = (token: string) => {
  localStorage.setItem(USER_TOKEN, token);
};

const getToken = () => {
  return localStorage.getItem(USER_TOKEN);
};

const removeToken = () => {
  localStorage.removeItem(USER_TOKEN);
};

export { encryptData, decryptData, setToken, getToken, removeToken };
