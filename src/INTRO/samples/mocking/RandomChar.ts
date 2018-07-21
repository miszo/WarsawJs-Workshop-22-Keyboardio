export function RandomChar()
{
    const charset = ['a','b','c','d','e'];
    const random = Math.floor(Math.random() * (charset.length-1));

    return charset[random];
}