import { Sum } from './Sum';

test('Sum() should return sum of numbers', () => // this is a regular function
{
    const sumResult = Sum(1, 2); // regular function call, just like in your code
    const expectedSumResult = 3; // this is what your function should return

    expect(sumResult).toBe(expectedSumResult); // <---> if (sumResult === expecteSumResult) TEST_SUCCESS; else TEST_FAIL;
});
