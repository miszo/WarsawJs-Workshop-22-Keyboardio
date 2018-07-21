import { FunctionWithDependency } from "./target";

jest.mock('./dependency', () => (
    {
        Dependency: jest.fn(() => 1)
    }
));

import { Dependency } from "./dependency";


test('mock with jest', () =>
{
    let result = FunctionWithDependency(Dependency, 5);

    expect(result).toBe(6);
}); 


test('spy utils test', () =>
{
    let result = FunctionWithDependency(Dependency, 5);

    expect(Dependency).toHaveBeenCalledWith(5);
}); 