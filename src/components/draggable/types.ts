import React from 'react';

export type DraggableProps = {
  posX?: number;
  posY?: number;
  children?: any;
  onDrag?: (position: object) => void;
};