// Generated from: e2e\api\features\booking.feature
import { test } from "playwright-bdd";

test.describe('Booking API', () => {

  test('Create Booking', { tag: ['@api'] }, async ({ When, Then, request }) => { 
    await When('I create a new booking', null, { request }); 
    await Then('the booking should be created successfully'); 
  });

  test('Get Booking', { tag: ['@api'] }, async ({ Given, When, Then, request }) => { 
    await Given('I have an existing booking', null, { request }); 
    await When('I retrieve the booking', null, { request }); 
    await Then('the booking details should be returned'); 
  });

  test('Update Booking', { tag: ['@api'] }, async ({ Given, When, Then, request }) => { 
    await Given('I have a booking and auth token', null, { request }); 
    await When('I update the booking', null, { request }); 
    await Then('the booking should be updated successfully'); 
  });

  test('Delete Booking', { tag: ['@api'] }, async ({ Given, When, Then, request }) => { 
    await Given('I have a booking and auth token', null, { request }); 
    await When('I delete the booking', null, { request }); 
    await Then('the booking should be deleted successfully'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('e2e\\api\\features\\booking.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@api"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I create a new booking","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then the booking should be created successfully","stepMatchArguments":[]}]},
  {"pwTestLine":11,"pickleLine":8,"tags":["@api"],"steps":[{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given I have an existing booking","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When I retrieve the booking","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then the booking details should be returned","stepMatchArguments":[]}]},
  {"pwTestLine":17,"pickleLine":13,"tags":["@api"],"steps":[{"pwStepLine":18,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given I have a booking and auth token","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When I update the booking","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then the booking should be updated successfully","stepMatchArguments":[]}]},
  {"pwTestLine":23,"pickleLine":18,"tags":["@api"],"steps":[{"pwStepLine":24,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given I have a booking and auth token","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When I delete the booking","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then the booking should be deleted successfully","stepMatchArguments":[]}]},
]; // bdd-data-end