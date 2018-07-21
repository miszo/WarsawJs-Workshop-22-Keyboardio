import { LessonsStorage } from "./LessonsStorage";
import { LessonsStorageDI } from "./LessonsStorageDI";
import { MyFileReader } from "../fileReader/FileReader";

test('LessonStorage should read file only once', () =>
{  
    const fileReader = 
    {
         ReadAllText(file)
         {
             return '{}';
         }
    };

    const ReadAllTextInFileReaderSpy = jest.spyOn(fileReader, 'ReadAllText');

    const storage = new LessonsStorageDI(fileReader);

    expect(ReadAllTextInFileReaderSpy).toHaveBeenCalledTimes(1);
});


test('LessonStorage.Titles should return only lessons titles', () =>
{  
    const fileReader =
    {
        ReadAllText(file)
        {
            return JSON.stringify({ 'lesson1': {}, 'lesson2': {} });
        }
    };

    const ReadAllTextInFileReaderSpy = jest.spyOn(fileReader, 'ReadAllText');

    const storage = new LessonsStorageDI(fileReader);

    expect(storage.Titles).toEqual(['lesson1', 'lesson2']);
    expect(ReadAllTextInFileReaderSpy).toHaveBeenCalledTimes(1);
});


