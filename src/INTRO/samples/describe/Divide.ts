export function Divide(a, b)
{
    if (b === 0)
    {
        throw new Error('Can not divide by zero');
    }

    return a / b;
}