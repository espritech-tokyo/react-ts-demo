import React from 'react';

import style from './style.module.scss';

export interface Foo {
  title: string;
  detail: string;
}

export type Props = {
  list: Foo[];
};

export const Hoge: React.FC<Props> = ({ list }) => (
  <>
    {list.map(foo => (
      <dl key={foo.title} className={style.foo} data-testid="hoge">
        <dt className={style.title} data-testid="hogeTitle">{foo.title}</dt>
        <dd className={style.detail} data-testid="hogeDetail">{foo.detail}</dd>
      </dl>
    ))}
  </>
);
