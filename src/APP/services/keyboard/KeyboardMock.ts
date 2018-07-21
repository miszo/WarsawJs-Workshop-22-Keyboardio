import { IKeyboard } from './IKeyboard';
import { Keyboard } from './Keyboard';

export class KeyboardMock implements IKeyboard
{
    constructor(private keyToReturn?)
    { }

    public GetLine(): string
    {
        return "";
    }
    
    public GetOneKey(): string
    {
        return this.keyToReturn;
    }
}