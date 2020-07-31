import React from 'react';
import { BasicComponentType } from '../../../../packages';
import { Card } from 'antd';

const ComponentCard: React.FC<BasicComponentType> = (props: BasicComponentType) => {
  return <Card cover={<img src={props.thumbnail} />}></Card>;
};

export default ComponentCard;
