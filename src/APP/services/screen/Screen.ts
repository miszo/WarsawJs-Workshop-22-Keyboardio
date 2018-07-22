import { IScreen } from "./IScreen";

export class Screen implements IScreen
{
    Write(text: string): void
    {
        process.stdout.write(text);
    }

    WriteLine(text: string): void
    {
        console.log(text);
    }
}
