import { SumAsync } from './async';

test('async 2+2=4', async () =>
{
    expect.assertions(1);

    const result = await SumAsync(2, 2);

    expect(result).toBe(4);
});



test('async 2+2=4', async (done) =>
{
    const result = await SumAsync(2, 2);

    expect(result).toBe(4);

    done();
});
