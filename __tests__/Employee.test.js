const { TestScheduler } = require('@jest/core');
const Employee = require('../lib/Employee');

// test to hold the Employee section as an object
test('set employee object through constructor arguments', () => {
  const e = new Employee();
  expect(typeof(e)).toBe('object');
});

// test to hold the employee name
test('set the name through the constructor arguments', () => {
    const name = 'Senait';
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

// test to hold the employee id
test('set id through constructor arguments', () => {
   const testValue = 100;
   const e = new Employee('Foo', testValue);
   expect(e.id).toBe(testValue);
});

// test to hold the employee email adress
test('set email through constructor arguments', () => {
   const testValue = 'test@test.com';
   const e = new Employee('Foo', 1, testValue);
   expect(e.email).toBe(testValue);
});

// test to hold the getName Method
test('get name through getName()', () => {
    const testValue = 'Senait';
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

//test to hold the getId Method
test('get id through getId()', () => {
    const testValue = 100;
    const e = new Employee('Foo', testValue);
    expect(e.getId()).toBe(testValue);
});

// test to hold the getEmail Method
test('get email through getEmail()', () => {
   const testValue = 'test@test.com';
   const e = new Employee('Foo', 1, testValue);
   expect(e.getEmail()).toBe(testValue);
});

//test to hold the getRole Method that reutn 'Employee'
test('getRole() should return "Employee"', () => {
    const testValue = 'Employee';
    const e = new Employee('Senait', 1, 'test@test.com');
    expect(e.getRole()).toBe(testValue);
});