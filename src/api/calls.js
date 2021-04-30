import { TODOS, TODO, POST_VERSION } from './paths';

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

const post = (url, body) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

export const postVersion = (body) => post(POST_VERSION, body);
