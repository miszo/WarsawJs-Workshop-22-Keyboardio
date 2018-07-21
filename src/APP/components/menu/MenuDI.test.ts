import { MenuDI } from "./MenuDI";
import { EOL } from 'os';
import { ScreenMock } from "../../services/screen/ScreenMock";
import { KeyboardMock } from "../../services/keyboard/KeyboardMock";

describe('Menu()', () =>
{
    it('should print items', () =>
    {
        const screen = new ScreenMock();
        const keyboard = new KeyboardMock();

        MenuDI(screen, keyboard, ['foo', 'bar']);

        expect(screen.output).toBe('-----' + EOL + '[0] foo' + EOL + '[1] bar' + EOL);
    });

    it('should return first item when Zero key pressed', () =>
    {
        const screen = new ScreenMock();
        const keyboard = new KeyboardMock('0');

        let selectedItem = MenuDI(screen, keyboard, ['foo', 'bar']);

        expect(selectedItem).toBe('foo');
    });
});