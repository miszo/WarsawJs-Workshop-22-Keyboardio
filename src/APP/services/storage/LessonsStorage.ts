import * as fs from 'fs';

export class LessonsStorage
{
    private lessons = [];

    constructor()
    {
        const lessonsAsString = fs.readFileSync('./src/APP/services/storage/lessons.json', 'utf-8');
        this.lessons = JSON.parse(lessonsAsString);
    }
    
    get Titles()
    {
        return Object.keys(this.lessons);
    }

    GetByTitle(title)
    {
        return this.lessons[title];
    }
}
