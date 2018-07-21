test('primitives', () =>
{
    expect(5).toBe(5);
    expect("text").toBe("text");
    expect(true).toBe(true);
    expect(true).toBeTruthy();
    expect(null).toBeNull();

    expect(2).not.toBe(5);
    expect(3).toBeGreaterThan(1);
    expect("WarsawJS").toContain("saw");
    expect([1,2,3]).toContain(2);
});