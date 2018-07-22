export function NameValidator(name)
{
    return !(!name
      || typeof name !== 'string'
      || name.trim() === ''
      || name.trim() !== name
      || name.split(' ').length > 2);

}
