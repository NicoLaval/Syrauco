import React from 'react';
import { Menu as MenuWilco } from '@inseefr/wilco';
import { CREATE } from 'api/paths';

const paths = [{ label: 'Create', path: `${CREATE}` }];

const Menu = () => <MenuWilco paths={paths} text="Home" />;

export default Menu;
