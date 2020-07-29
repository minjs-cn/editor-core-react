import React from 'react';
import useMousemove, { Position } from './useMousemove';
import { EnumDirection } from './enum';

const createTranslateFactory = (direction: EnumDirection) => (position: Position) => {
  return {
    transform: `translate3d(${direction === EnumDirection.Row ? 0 : position.x}px,${
      direction === EnumDirection.Col ? 0 : position.y
    }px,0px)`,
  };
};

function useTranslate(direction = EnumDirection.Detault) {
  const [position, onMousedown] = useMousemove();
  const setTranslate = createTranslateFactory(direction);

  const style = React.useMemo(() => {
    return setTranslate(position);
  }, [position, setTranslate]);

  return [style, onMousedown] as const;
}

export default useTranslate;
