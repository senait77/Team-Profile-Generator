const { TestScheduler } = require('@jest/core');
const Intern = require('../lib/Intern');

// test to hold the school through constrctor
test('set school through constructor', () => {
    const testValue = 'EIT';
    const e = new Intern('Foo', 1, 'test@test.com', testValue);
    expect(e.school).toBe(testValue);
});

//test to return getRole to "Intern"
test('getRole() should retun "Intern"', () => {
    const testValue = 'Intern';
    const e = new Intern('Foo', 1, 'test@test.com', 'EIT');
    expect(e.getRole()).toBe(testValue);
});

// test to hold the getRole method
test('get school through getschool()', () => {
    const testValue = 'EIT';
    const e = new Intern('Foo', 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});