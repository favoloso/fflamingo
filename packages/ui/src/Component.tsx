import React from 'react';

interface Props {
  name: string;
}

/**
 * Componente di demo.
 */
export function Component(props: Props) {
  return <div>{props.name}</div>;
}
