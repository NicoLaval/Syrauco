import React, { useState, useEffect } from 'react';
import { Title, Content, Loading, Error } from 'components/common';
import { useParams } from 'react-router-dom';
import { getTodo } from 'api/calls';

const Visualization = () => {
  const { id } = useParams();

  const [version, setVersion] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getTodo(id, { setResult: setVersion, setLoading, setError });
  }, [id]);

  if (loading) return <Loading />;

  if (error) return <Error error={error} />;

  const { title, ...content } = version;

  return (
    <>
      <Title title={title} />
      <Content content={content} />
    </>
  );
};

export default Visualization;
