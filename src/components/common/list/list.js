import React from 'react';
import { SearchableList } from '@inseefr/wilco';

const List = ({ items, childPath }) => (
  <SearchableList
    items={items}
    col={6}
    colOff={3}
    childPath={childPath}
    autoFocus={true}
  />
);

export default List;
