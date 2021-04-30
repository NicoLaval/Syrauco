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
      setError(e);
      setLoading(false);
    });

export const getTodos = ({ setResult, setLoading, setError }) =>
  get(`${TODOS}`, { setResult, setLoading, setError });

export const getTodo = (id, { setResult, setLoading, setError }) =>
  get(`${TODO}/${id}`, { setResult, setLoading, setError });
