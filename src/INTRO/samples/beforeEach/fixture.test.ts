describe('beforeEach example', () =>
{
    let variable = 0;

    beforeEach(() => // this gonna be called before every it() function
    {
        variable = 5;
    });

    it('beforeEach should set variable to 5', () =>
    {
       expect(variable).toBe(5);

       variable = 0;
    });

    it('beforeEach should set variable to 5 again (after first test)', () =>
    {
       expect(variable).toBe(5);
    });
});