import { FullName } from './FullName';

describe('FullName', () => {
  it('should return full name', () => {
    const fullName = FullName('Miszo', 'Radomski');
    expect(fullName).toBe('Miszo Radomski')
  });

  it('input values should be strings', () => {
    expect(() => {
      const fullName = FullName(18, 'Radomski');
    }).toThrow();
  });
});
