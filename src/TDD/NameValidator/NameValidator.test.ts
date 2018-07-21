import { NameValidator } from './NameValidator';

describe('NameValidator', () =>
{
    // Unnecessary when Typescript..
    it('should fail when input is undefined', () =>
    {
        let isValid = NameValidator(undefined);

        expect(isValid).toBeFalsy();
    });

    // Unnecessary when Typescript..
    it('should fail when input is null', () =>
    {
        let isValid = NameValidator(null);
        
        expect(isValid).toBeFalsy();
    });
    
    // Unnecessary when Typescript..
    it('should fail when input is number', () =>
    {
        let isValid = NameValidator(123);

        expect(isValid).toBeFalsy();
    });
    
    // Unnecessary when Typescript..
    it('should fail when input is object', () =>
    {
        let isValid = NameValidator({ foo: "bar" });

        expect(isValid).toBeFalsy();
    });

    it('should fail when input is empty string', () =>
    {
        let isValid = NameValidator('');

        expect(isValid).toBeFalsy();
    });

    it('should fail when input is blank string (only tabs and spaces)', () =>
    {
        let isValid = NameValidator('        ');

        expect(isValid).toBeFalsy();
    });

    it('should fail for too many spaces between words', () =>
    {
        let isValid = NameValidator('Jon   Doe');

        expect(isValid).toBeFalsy();
    });

    it('should fail for too many spaces around', () =>
    {
        let isValid = NameValidator('  Jon Doe  ');

        expect(isValid).toBeFalsy();
    });

    it('should succeed for valid value ', () =>
    {
        let isValid = NameValidator('Jon Doe');

        expect(isValid).toBeTruthy();
    });
});