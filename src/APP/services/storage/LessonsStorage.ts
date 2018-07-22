export class LessonsStorage
{
    private lessons = [];

    constructor(_fileReader)
    {
        const lessonsAsString = _fileReader.readFileSync('./src/APP/services/storage/lessons.json', 'utf-8');
        this.lessons = JSON.parse(lessonsAsString);
    }
    
    get Titles()
    {
        return Object.keys(this.lessons);
    }

    GetByTitle(title)
    {
        if (!this.lessons[title]) throw new Error();

        return this.lessons[title];
    }
}
