# Lab8_Starter

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)
   2

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
    No, you would use unit tests to test the writing feature and the send message feature seperately

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters
    Yes, since you are testing one single method that is being used by the application

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?
    the tests will run without the browser UI
    
5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?
   beforeAll(async () => {
    await page.click('header > img');
    await page.waitForTimeout(500);
  });

