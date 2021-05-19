import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import { Hoge } from '.';

const DEFAULT = (<Hoge list={[{ title: '', detail: '' }]} />);

describe('Hoge', () => {
  describe('props', () => {
    test('single', () => {
      render(DEFAULT);
      expect(screen.getByTestId('hoge')).toHaveClass('foo');
    });
  });

  describe('children', () => { });

  describe('action', () => { });

  describe('snapshot', () => {
    test('single', () => {
      const { container } = render(DEFAULT);
      expect(container.firstChild).toMatchInlineSnapshot(`
        <dl
          class="foo"
          data-testid="hoge"
        >
          <dt
            class="title"
            data-testid="hogeTitle"
          />
          <dd
            class="detail"
            data-testid="hogeDetail"
          />
        </dl>
      `);
    });
  });
});
