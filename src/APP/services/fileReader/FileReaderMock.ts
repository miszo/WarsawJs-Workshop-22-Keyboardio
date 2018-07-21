export class FileReaderMock
{
    public ReadAllText(file)
    {
        return '{ "lesson1": {}, "lesson2": {} }';
    }
}