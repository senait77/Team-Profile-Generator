const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');
const { TestScheduler } = require('@jest/core');

// test to set office number 
test('set office number through constructor argument', () => {
   const testValue = 100;
   const e = new Manager('Foo', 1, 'test@test.com', testValue);
   expect(e.officeNumber).toBe(testValue);
});

// test that getRole method should return 'Manager
test('getRole() should return "Manager"', () => {
    const testValue = "Manager";
    const e = new Manager('Foo',1, 'test@test.com', 100);
    expext(e.getRole()).toBe(testValue);
});

// test to get office number through getoffice method
test('get office number though getoffice()', () => {
   const testValue = 100;
   const e = new Manager('Foo',1 ,'test@test.com', testValue);
   expect(e.getOfficeNumber()).toBe(testValue);
});
