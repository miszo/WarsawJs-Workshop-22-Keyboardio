import { IKeyboard } from './IKeyboard';
import * as readline from 'readline-sync';

export class Keyboard implements IKeyboard
{
    public GetLine(): string
    {
        return readline.question('', { cancel: true });
    }

    public GetOneKey(): string
    {
        return readline.keyIn('', { mask: '', hideEchoBack: true, cancel: true });
    }
}
