To Create Project follwing order mainatin:
1. mkdir project folder
2. npm init -y
3. npm i --save-dev @wdio/cli
4. npx wdio config
5. npm i faker (for random data generation)
6. faker method used for email data generation
7. Create Folder features inside create .feature file
8. Inside feature folder create step-definitions folder where steps generated.
9. to maintain object repositories create pageobjects folder inside feature
10.Testdata managed in Json file inside resources
11. To run Test execute following : npx wdio run ./wdio.conf.ts

To generate allure report
allure generate reports/allure-results/.

or 
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "report": "allure generate allure-results --clean && allure open"
    },
    followed by command : npm run report

    https://github.com/Pratik-2/AutomationPractice.git

