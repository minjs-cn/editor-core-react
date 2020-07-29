import React from 'react';

export interface Position {
  x: number;
  y: number;
}

function useMousemove() {
  const [position, setPosition] = React.useState<Position>({
    x: 0,
    y: 0,
  });

  function onMousedown() {
    document.addEventListener('mousemove', onMousemove);
    document.addEventListener('mouseup', onMouseup);
  }

  function onMousemove(e: MouseEvent) {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  }

  function onMouseup() {
    document.removeEventListener('mousemove', onMousemove);
    document.removeEventListener('mouseup', onMouseup);
  }

  return [position, onMousedown] as const;
}

export default useMousemove;
