import React from 'react';
import { useSelector } from 'src/stores';
import MyCard from './card';

const BasicComponent: React.FC = () => {
  const { basic } = useSelector((state) => state.component);
  return (
    <div>
      {basic.map((com) => (
        <MyCard {...com} key={com.name} />
      ))}
    </div>
  );
};

export default BasicComponent;
