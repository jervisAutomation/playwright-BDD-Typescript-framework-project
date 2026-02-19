// Generated from: e2e\ui\features\login.feature
import { test } from "playwright-bdd";

test.describe('SauceDemo login', () => {

  test('login', async ({ Given, Then, And, page }) => { 
    await Given('I navigate to saucedemo', null, { page }); 
    await And('I input "standard_user" in the username field', null, { page }); 
    await And('I input "secret_sauce" in the password field', null, { page }); 
    await And('I click "login" button', null, { page }); 
    await Then('I should be able to see "Products" page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('e2e\\ui\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I navigate to saucedemo","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And I input \"standard_user\" in the username field","stepMatchArguments":[{"group":{"start":8,"value":"\"standard_user\"","children":[{"start":9,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And I input \"secret_sauce\" in the password field","stepMatchArguments":[{"group":{"start":8,"value":"\"secret_sauce\"","children":[{"start":9,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And I click \"login\" button","stepMatchArguments":[{"group":{"start":8,"value":"\"login\"","children":[{"start":9,"value":"login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then I should be able to see \"Products\" page","stepMatchArguments":[{"group":{"start":24,"value":"\"Products\"","children":[{"start":25,"value":"Products","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end