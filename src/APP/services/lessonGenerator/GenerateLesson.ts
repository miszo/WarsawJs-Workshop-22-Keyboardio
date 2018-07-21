import { Random } from "../random/Random";

export class LessonGenerator
{
    static Generate(config)
    {
        let lineLength = 10;
        let out = '';
        let charsetSize = config.charset.length;

        while (lineLength--)
        {
            const random = Random(0, charsetSize);
            out += config.charset[random];
            if ((lineLength % config.spaces) == 0)
                out += ' ';
        }

        return out.trim();
    }
}