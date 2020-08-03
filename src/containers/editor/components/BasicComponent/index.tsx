import React from 'react';
import { useSelector } from 'src/stores';
import MyCard from './card';

const BasicComponent: React.FC = () => {
  const { basicComponents } = useSelector((state) => state.component);
  console.log(basicComponents);

  return (
    <div>
      {basicComponents.map((com) => (
        <MyCard {...com} key={com.name} />
      ))}
    </div>
  );
};

export default BasicComponent;
