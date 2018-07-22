export function FullName(firstName, lastName: string): string {

  if (typeof firstName !== 'string') {
    throw new Error('Toż to błond!');
  }

  return `${firstName} ${lastName}`;

}
