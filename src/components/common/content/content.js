import React from 'react';

const Content = ({ content }) => {
  const detail = Object.entries(content).map(([k, v], index) => (
    <li key={index}>{`${k} : ${v}`}</li>
  ));

  return <ul>{detail}</ul>;
};

export default Content;
