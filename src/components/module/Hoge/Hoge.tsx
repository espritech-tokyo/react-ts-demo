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
    {list.map((foo, index) => (
      <dl key={index} className={style.foo}>
        <dt className={style.title}>{foo.title}</dt>
        <dd className={style.detail}>{foo.detail}</dd>
      </dl>
    ))}
  </>
);
