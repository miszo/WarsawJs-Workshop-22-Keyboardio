import { IPValidator } from './IPValidator';

describe('IPValidator', () => {

  it('should return false for invalid IP', () => {
    expect(IPValidator('0.-1.555')).toBeFalsy();
  });

  it('should return true for valid IP', () => {
    expect(IPValidator('123.123.123.123')).toBeTruthy();
  });

});
