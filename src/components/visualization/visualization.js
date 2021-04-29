import React from 'react';
import { Title } from 'components/common';
import { versions } from 'mock/versions';
import { useParams } from 'react-router-dom';

const Visualization = () => {
  const { id } = useParams();
  const label = versions.find((v) => id === v.id)?.label || 'pas trouvé';
  return <Title title={`Visualization : ${label}`} />;
};

// TODO add version label

export default Visualization;
