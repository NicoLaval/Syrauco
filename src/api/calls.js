import { TODOS, TODO } from './paths';

const get = (url, { setResult, setLoading, setError }) =>
  fetch(url)
    .then((r) => {
      if (r.ok) return r.json();
      throw new Error('API failed');
    })
    .then((r) => {
      setResult(r);
      setLoading(false);
    })
    .catch((e) => {
      setError(`${e}`);
      setLoading(false);
    });

export const getTodos = (setters) => get(`${TODOS}`, setters);

export const getTodo = (id, setters) => get(`${TODO}/${id}`, setters);
