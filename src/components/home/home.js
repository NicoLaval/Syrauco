import React from 'react';
import { Title } from 'components/common';
import { versions } from 'mock/versions';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <Title title="Home" />
    <ul>
      {versions.map((v) => (
        <li key={v.id}>
          <Link to={`/visu/${v.id}`}>{v.label}</Link>
        </li>
      ))}
    </ul>
  </>
);

export default Home;
