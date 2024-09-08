import { useEffect, useState } from "react";

/**
 * Hook que retorna uma versão "debounced" (com atraso) de um valor.
 * O valor retornado será atualizado apenas após o tempo de atraso especificado,
 * reduzindo a frequência de alterações de estado e economizando recursos computacionais.
 *
 * @param {any} value - O valor a ser "debounced".
 * @param {number} delay - O tempo de atraso em milissegundos.
 * @returns {any} - O valor "debounced".
 */
export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}