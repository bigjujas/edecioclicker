import CryptoJS from 'crypto-js';
import { SECRET_KEY } from '../constants';

// Criptografar os dados
export function encryptSave(progress) {
  const encrypted = CryptoJS.AES.encrypt(JSON.stringify(progress), SECRET_KEY).toString();
  return encrypted;
}

// Descriptografar os dados
export function decryptSave(encrypted) {
  const bytes = CryptoJS.AES.decrypt(encrypted, SECRET_KEY);
  const decrypted = bytes.toString(CryptoJS.enc.Utf8);
  console.log(decrypted);
  const progress = JSON.parse(decrypted);
  return progress;
}