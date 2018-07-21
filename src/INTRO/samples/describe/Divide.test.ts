import { Divide } from "./Divide";

describe('Divide()', () =>
{
    it('should divide', () =>
    {
        const result = Divide(10, 5);

        expect(result).toBe(2);
    });

    it('should throw if divide by zero', () =>
    {
        expect(() =>
        {
            Divide(5, 0);
        })
        .toThrow();
    });
});