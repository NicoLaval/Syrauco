import React, { useEffect, useState } from 'react';
import { Title, Loading, Error } from 'components/common';
import { Link } from 'react-router-dom';
import { getTodos } from 'api/calls';

const Home = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getTodos({ setResult: setList, setLoading, setError });
  }, []);

  if (loading) return <Loading />;

  if (error) return <Error error={error} />;

  return (
    <>
      <Title title="Home" />
      <ul>
        {list.map((v) => (
          <li key={v.id}>
            <Link to={`/visu/${v.id}`}>{v.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
