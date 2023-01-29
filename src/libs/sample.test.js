import { add } from './sample';

describe('Sample unit test.', () => {
  test('1+2+3', () => {
    expect(add(1, 3)).toBe(4);
  });
});