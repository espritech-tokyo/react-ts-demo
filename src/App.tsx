import 'styles/base.module.scss';

import { Hoge, Foo } from '@/components/module/Hoge';

function App() {
  const list: Foo[] = [
    {
      title: 'apple',
      detail: 'りんご'
    },
    {
      title: 'banana',
      detail: 'ばなな'
    }
  ];

  return (
    <>
      react-ts-demo
      <Hoge list={list} />
    </>
  );
}

export default App;
