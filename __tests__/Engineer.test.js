const Engineer = require('../lib/Engineer');

// test to hold the gitHub account
test('set gitHub account through constructor', () => {
    const testValue = 'GitHubUser';
    const e = new Engineer('Foo', 1, 'test@test.com', testValue);
    expect(e.github).toBe(testValue);
});

// test to hold getRole() which should return 'Engineer'
test('getRole() should return "Engineer"', () => {
    const testValue = 'Engineer';
    const e = new Engineer('Foo', 1, 'test@test.com', testValue);
    expect(e.getRole()).toBe(testValue);
});

// test to hold gitHub username through gitHub()
test('get gitHub username through github()', () => {
    const testValue = 'GitHubUser';
    const e = new Engineer('Foo', 1, 'test@test.com', testValue);
    expect(e.getGithub()).toBe(testValue);
});