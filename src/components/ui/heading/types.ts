import { forwardRef } from 'react';

export type As = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';

export enum ELEMENT_OPTIONS {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  DIV = 'div',
}

type FixedForwardRef = <T, P = {}>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode
) => (props: P & React.RefAttributes<T>) => React.ReactNode;

export type DistributiveOmit<T, TOmitted extends PropertyKey> = T extends any
  ? Omit<T, TOmitted>
  : never;

export const fixedForwardRef = forwardRef as FixedForwardRef;
