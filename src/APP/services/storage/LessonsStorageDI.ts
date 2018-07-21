export class LessonsStorageDI
{
    private lessons = [];

    constructor(_fileReader)
    {
        const lessonsAsString = _fileReader.ReadAllText('./src/APP/service/storage/lessons.json');
        this.lessons = JSON.parse(lessonsAsString);
    }

    public get Titles()
    {
        return Object.keys(this.lessons);
    }

    public GetByTitle(title)
    {
        return this.lessons[title];
    }
}
