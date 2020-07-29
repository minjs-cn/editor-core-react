import React from 'react';
import { useSelector } from 'src/stores';

const List: React.FC = () => {
  const works = useSelector((state) => state);
  console.log(works);
  return <div></div>;
};

export default List;
