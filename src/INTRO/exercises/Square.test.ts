import { Square } from './Square';

test('Square() should return square power of number', () => {
  const squareResult = Square(4);
  const expectedResult = 16;

  expect(squareResult).toBe(expectedResult);
});
