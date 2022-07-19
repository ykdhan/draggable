import React, { useEffect, useState } from 'react';

import { BoxProps } from './types';

export const Box = function (props: BoxProps) {
  const { className, children, ...others } = props;

  return (
    <div className={`box ${className}`}>
      {children}
    </div>
  );
};