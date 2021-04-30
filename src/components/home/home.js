import React, { useEffect, useState } from 'react';
import { Title, Loading, Error, List } from 'components/common';
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

  const items = list.map(({ title: label, id }) => ({ label, id }));

  return (
    <>
      <Title title="Syrauco" />
      <List items={items} childPath={`visu`} />
    </>
  );
};

export default Home;
