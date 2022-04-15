// @providesModule mockComponent
// @ts-nocheck
import React from 'react';

const mockComponent = (name: string): React.ReactNode => {
  return (props: Record<string, unknown>) =>
    React.createElement(name, props, props.children);
};

export default mockComponent;
