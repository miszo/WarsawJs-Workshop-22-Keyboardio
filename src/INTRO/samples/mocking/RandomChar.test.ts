import { RandomChar } from "./RandomChar";

test('should return first letter from charset for input 0', () =>
{
    let result = RandomChar(0);

    expect(result).toBe("a");
});

test('should return middle letter from charset for input 0.5', () =>
{
  let result = RandomChar(0.5);

  expect(result).toBe("c");
});
