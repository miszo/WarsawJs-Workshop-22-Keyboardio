export function RandomChar(random)
{
    const charset = ['a','b','c','d','e'];
    const radom = Math.floor(random * (charset.length-1));

    return charset[radom];
}
