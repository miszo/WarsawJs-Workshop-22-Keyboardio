import { IScreen } from './IScreen';
import { EOL } from 'os';

export class ScreenMock implements IScreen
{
    output = "";

    Write(text)
    {
        this.output += text;
    }

    WriteLine(text)
    {
        this.output += text + EOL;
    }
}