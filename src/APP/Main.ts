import { Keyboard } from './services/keyboard/Keyboard';
import { Screen } from './services/screen/Screen';
import { Validate } from './services/validator/Validate';
import { MenuDI } from './components/menu/MenuDI';
import { LessonsStorage } from './services/storage/LessonsStorage';
import { LessonGenerator } from './services/lessonGenerator/GenerateLesson';
import * as fs from 'fs';

export class Main {

  private screen = new Screen();
  private keyboard = new Keyboard();

  public Start() {
    while (true) {
      try {
        switch (MenuDI(this.screen, this.keyboard, ['play', 'exit'])) {
          case 'play':
            this.Play();
            break;

          case 'exit':
            return;
        }
      }
      catch (ex) {
        this.screen.WriteLine('Wrong key! Please provide key from given menu.');
      }
    }
  }

  Play() {
    const selectedLesson = this.SelectLesson();
    this.LessonExecutor(selectedLesson);
  }

  SelectLesson() {
    const store = new LessonsStorage(fs);
    const selected = MenuDI(this.screen, this.keyboard, store.Titles);
    return store.GetByTitle(selected);
  }

  LessonExecutor(config) {
    const lessonText = LessonGenerator.Generate(config);
    this.screen.WriteLine(' ' + lessonText);
    this.screen.Write('> ');
    const userInput = this.keyboard.GetLine();
    const mistakes = Validate(lessonText, userInput);
    this.screen.WriteLine('Mistakes: ' + mistakes);
  }
}
