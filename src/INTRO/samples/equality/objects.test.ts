test('objects', () =>
{
    expect({ foo: "bar" }).toEqual({ foo: "bar" });
    expect({ foo: "bar" }).not.toBe({ foo: "bar" }); // Remove ".not" and check result :)

    const objectsList = [
        { foo: "bar" },
        { foo: "baz" },
        { foo: "bix" },
    ];

    expect(objectsList).toContainEqual({foo: "baz"});
});