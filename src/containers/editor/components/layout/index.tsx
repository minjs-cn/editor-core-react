import React from 'react';
import Dock from '../dock';
import layout from './default';

const MyLayout: React.FC = () => {
  return <Dock {...layout} />;
};

export default MyLayout;
