import { useState, useEffect } from 'react';
import { AUTO_SAVE_TOLERANCE_AFTER_BUY, COOKIES_EXPIRATION, COOKIES_KEY, SPLIT_COOKIE_AMOUNT } from '../constants';
import { useDebounce } from './useDebounce';
import { decryptSave, encryptSave } from '../security/crypto';

/**
 * Salva um objeto de dados nos cookies do navegador com uma chave e tempo de expiração predefinidos.
 * Utiliza `encodeURIComponent` para garantir que caracteres especiais sejam armazenados corretamente.
 *
 * @param {Object} saveData - O objeto contendo os dados a serem salvos nos cookies.
 */
function setCookies(saveData) {
  // Split data into chunks
  const chunks = [];
  for (let i = 0; i < saveData.length; i += SPLIT_COOKIE_AMOUNT) {
    chunks.push(saveData.substring(i, i + SPLIT_COOKIE_AMOUNT));
  }

  // Set each chunk as a separate cookie
  chunks.forEach((chunk, index) => {
    document.cookie = `${COOKIES_KEY}_${index}=${encodeURIComponent(chunk)}; max-age=${COOKIES_EXPIRATION}`;
  });
}


/**
 * Carrega os dados salvos nos cookies e retorna um objeto com esses dados.
 * Utiliza uma expressão regular para encontrar a chave correspondente nos cookies,
 * além de `decodeURIComponent` para decodificar caracteres especiais e `JSON.parse` para transformar a string em objeto.
 *
 * @returns {Object} - O objeto contendo os dados carregados dos cookies. Retorna um objeto vazio se não houver dados.
 */
function getFromCookies() {
  try {
    const cookies = document.cookie.split('; ').filter(cookie => cookie.startsWith(COOKIES_KEY));
    
    if (cookies.length === 0) return null;

    // Collect and decode all chunks
    const chunks = cookies.map(cookie => decodeURIComponent(cookie.split('=')[1]));
    const fullData = chunks.join('');

    return fullData;
  } catch (e) {
    console.error(e);
    return null;
  }
}

/**
 * Hook que gerencia o estado de `saveData`, salvando-o em cookies do navegador com atraso (debounce).
 * A função debounced de `saveData` garante que os dados sejam salvos nos cookies após um tempo de espera, evitando muitas atualizações seguidas.
 *
 * @returns {[Object, Function]} - Um array contendo o estado atual de `saveData` e a função para atualizá-lo.
 */
export default function useCookiesSave() {
  const [savedData, setSavedData] = useState(null);
  const debouncedSaveData = useDebounce(savedData, AUTO_SAVE_TOLERANCE_AFTER_BUY);

  useEffect(() => {
    if (debouncedSaveData) {
      setCookies(encryptSave(debouncedSaveData));
    }
  }, [debouncedSaveData]);

  function loadFromCookies() {
    const loadedData = getFromCookies();
    if (!loadedData) return null;

    setSavedData(decryptSave(loadedData));
    return loadedData;
  }

  function saveToCookies(newData) {
    setSavedData(newData);
  }

  return { saveToCookies, loadFromCookies};

};
