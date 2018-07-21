export function Validate(lessonText, userInput)
{
    let mistakes = 0;

    for (let i = 0; i < lessonText.length; i++)
    {
        if (lessonText[i] != userInput[i])
        {
            mistakes++;
        }
    }

    return mistakes;
}