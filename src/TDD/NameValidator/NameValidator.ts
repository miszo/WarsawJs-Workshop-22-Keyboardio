export function NameValidator(name)
{
    if (!name
      || typeof name !== 'string'
      || name.trim() === ''
      || name.trim() !== name
      || name.split(' ').length > 2
    ) {
        return false;
    }
    return true;
}
