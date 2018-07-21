export function MenuDI(_screen, _keyboard, items)
{
    items.forEach((item, index) =>
    {
        _screen.WriteLine(`[${ index }] ${ item }`);
    });
    let pressedKey = _keyboard.GetOneKey();
    let pressedKeyAsInt = parseInt(pressedKey);
    return items[pressedKeyAsInt];
}
