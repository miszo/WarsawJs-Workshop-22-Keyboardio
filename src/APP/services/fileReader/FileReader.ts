import * as fs from 'fs';

export class MyFileReader
{
    public ReadAllText(fileDir: string): string
    {
        return fs.readFileSync(fileDir, 'utf-8');
    }
}