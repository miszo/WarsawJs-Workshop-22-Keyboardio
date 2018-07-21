import { IScreen } from "./IScreen";

export class Console implements IScreen
{
    Write(text)
    {
        process.stdout.write(text);
    }

    WriteLine(text)
    {
        console.log(text);
    }
}