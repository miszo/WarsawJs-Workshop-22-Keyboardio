export function MenuDI(_screen, _keyboard, items)
{
    _screen.WriteLine('-----');

    items.forEach((item, index) =>
    {
        _screen.WriteLine(`[${ index }] ${ item }`);
    });

    _screen.Write('> ');

    let pressedKey = _keyboard.GetOneKey();
    let pressedKeyAsInt = parseInt(pressedKey);

    if (isNaN(pressedKeyAsInt)) throw new Error();
    if (pressedKeyAsInt >= items.length) throw new Error();

    return items[pressedKeyAsInt];
}
