import { LessonsStorage } from "./LessonsStorage";

describe('LessonStorage', () => {
  it('should read file only once', () => {
    const fileReader =
      {
        readFileSync(filePath, options) {
          return '{}';
        }
      };

    const ReadAllTextInFileReaderSpy = jest.spyOn(fileReader, 'readFileSync');

    const storage = new LessonsStorage(fileReader);

    expect(ReadAllTextInFileReaderSpy).toHaveBeenCalledTimes(1);
  });

  it('Titles should return only lessons titles', () => {
    const fileReader =
      {
        readFileSync(filePath, options) {
          return JSON.stringify({'lesson1': {}, 'lesson2': {}});
        }
      };

    const ReadAllTextInFileReaderSpy = jest.spyOn(fileReader, 'readFileSync');

    const storage = new LessonsStorage(fileReader);

    expect(storage.Titles).toEqual(['lesson1', 'lesson2']);
    expect(ReadAllTextInFileReaderSpy).toHaveBeenCalledTimes(1);
  });

  describe('GetByTitle', () => {
    const fileReader =
      {
        readFileSync(filePath, options) {
          return JSON.stringify({ 'lesson1': { foo: "bar" } });
        }
      };
    const storage = new LessonsStorage(fileReader);

    it('should return lesson config', () => {

      const lessonsConfig = storage.GetByTitle('lesson1');
      expect(lessonsConfig).toEqual({ foo: "bar" });
    });


    it('should throw for invalid title', () => {
      expect(() => {
        storage.GetByTitle('potato');
      }).toThrow();
    });
  });

});



