import React, { useState } from 'react';

import { DraggableProps } from './types';

export const Draggable = function (props: DraggableProps) {
  const { posX = 0, posY = 0, children, ...others } = props;
  const [_dragging, _setDragging] = useState<boolean>(false);
  const [_x, _setPosX] = useState<number>(posX);
  const [_y, _setPosY] = useState<number>(posY);
  const [_style, _setStyle] = useState<object>({ left: _x, top: _y });

  const handleMove = (e: React.MouseEvent) => {
    if (_dragging) {
      const left = e.screenX - _x;
      const top = e.screenY - _y;
      _setStyle({
        left: left,
        top: top,
      })
    }
  };

  const handleStart = (e: React.MouseEvent) => {
    _setDragging(true);
    _setPosX(e.screenX - e.currentTarget.getBoundingClientRect().left);
    _setPosY(e.screenY - e.currentTarget.getBoundingClientRect().top);
  };

  const handleEnd = (e: React.MouseEvent) => {
    _setDragging(false);
  };

  return (
    <div 
      className="draggable"
      style={_style}
      onMouseDown={handleStart}
      onMouseUp={handleEnd}
      onMouseMove={handleMove}
      >
      {children}
    </div>
  );
};