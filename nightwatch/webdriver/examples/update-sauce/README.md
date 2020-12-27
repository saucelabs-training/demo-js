# NightWatch Desktop Web: Update Sauce Status
This folder contains a simple set up for Nightwatch desktop web tests that will automatically update the status in
Sauce Labs.

> **NOTE:**\
> This folder doesn't hold all tests like all other frameworks. We, read Sauce Labs, wants to show how Nightwatch can be 
> integrated with Chrome and Sauce Labs and not show some best practices.\
> The reason for this is that I, read [wswebcreation](https://github.com/wswebcreation), don't recommend using
> Nightwatch as a JavaScript based framework based on the following points:
> - For a JS based framework Nightwatch is way too complex to start with. It holds its own concepts which differ too
>   much from the rest of the JS-based frameworks and aks for a specific Nightwatch skill set which doesn't make you an 
>   *all-round* JS QA-er. 
> - The Nightwatch page-object concept is completely different in comparison to a *normal* JavaScript way of creating
>   page-objects.
> - Normally a test-file itself should not hold direct references to elements on a page. It should only hold the steps, 
>   methods and assertions to come to a specific end state. 
>   It is a **BAD PRACTICE** to add for example assertions in page-object. A page-object should only hold references to
>   elements and *helpers* to easily interact with elements on a page. 
> 
> In my opinion, read [wswebcreation](https://github.com/wswebcreation), Nightwatch forces you to implement complex code
> based on bad practices which makes your framework harder to understand and maintain. 

## Install dependencies
You can install all dependencies by running the following command

    npm install
    
This will install all needed dependencies that are listed in the `package.json`-file

> NOTE: Make sure you are in the folder `nightwatch/webdriver/examples/update-sauce` when you execute this command

## Run tests locally
You can run the tests on your local machine, the only thing you need to have is Chrome. If you have it you can run this 
command

    npm run test.local

It will run all tests in your local Chrome browser in headless mode. The logs will look like this

```log
➜  nightwatch git:(feat/add-nightwatch) ✗ npm run test.local

> nightwatch-saucedemo@1.0.0 test.local /nightwatch
> nightwatch --config tests/configs/nightwatch.conf.js --env localChrome

 specs/login.spec.js   
 specs/login.spec.js  [Login Spec] Test Suite 
 specs/login.spec.js  ======================= 
 specs/login.spec.js  - Connecting to localhost on port 9515... 
 specs/login.spec.js   
 specs/login.spec.js  ℹ Connected to localhost on port 9515 (1057ms). 
 specs/login.spec.js  Using: chrome (81.0.4044.113) on Mac OS X platform. 
 specs/login.spec.js  Results for:  Login page: should be able to test loading of login page 
 specs/login.spec.js  ✔ Element <#login_button_container> was visible after 26 milliseconds. 
 specs/login.spec.js  ✔ Testing if element <Element [name=@screen]> is visible (15ms) 
 specs/login.spec.js  ✔ specs/login.spec.js [Login Spec] Login page: should be able to test loading of login page (408ms) 
 specs/login.spec.js  Results for:  Login page: should be able to login with a standard user 
 specs/login.spec.js  ✔ Element <#login_button_container> was visible after 17 milliseconds. 
 specs/login.spec.js  ✔ Element <#login_button_container> was visible after 11 milliseconds. 
 specs/login.spec.js  ✔ Element <.inventory_list> was visible after 23 milliseconds. 
 specs/login.spec.js  ✔ Testing if element <Element [name=@screen]> is visible (13ms) 
 specs/login.spec.js  ✔ specs/login.spec.js [Login Spec] Login page: should be able to login with a standard user (601ms) 
 specs/login.spec.js  Results for:  Login page: should not be able to login with a locked user 
 specs/login.spec.js  ✔ Element <#login_button_container> was visible after 12 milliseconds. 
 specs/login.spec.js  ✔ Element <#login_button_container> was visible after 12 milliseconds. 
 specs/login.spec.js  ✔ Element <[data-test="error"]> was visible after 15 milliseconds. 
 specs/login.spec.js  ✔ Testing if element <Element [name=@errorMessage]> contains text 'Epic sadface: Sorry, this user has been locked out.' (29ms) 
 specs/login.spec.js  ✔ specs/login.spec.js [Login Spec] Login page: should not be able to login with a locked user (295ms) 
 specs/swag.items.list.spec.js   
 specs/swag.items.list.spec.js  [Swag Items List Spec] Test Suite 
 specs/swag.items.list.spec.js  ================================= 
 specs/swag.items.list.spec.js  - Connecting to localhost on port 9515... 
 specs/swag.items.list.spec.js   
 specs/swag.items.list.spec.js  ℹ Connected to localhost on port 9515 (1081ms). 
 specs/swag.items.list.spec.js  Using: chrome (81.0.4044.113) on Mac OS X platform. 
 specs/swag.items.list.spec.js  Results for:  Swag Overview page: should validate that all products are present 
 specs/swag.items.list.spec.js  ✔ Element <.inventory_list> was visible after 23 milliseconds. 
 specs/swag.items.list.spec.js  ✔ Expected elements <.inventory_item> count to equal: "6" (11ms) 
 specs/swag.items.list.spec.js  ✔ specs/swag.items.list.spec.js [Swag Items List Spec] Swag Overview page: should validate that all products are present (547ms) 

OK. 12  total assertions passed (2.773s)
```

## Run tests on Sauce Labs
You can run your tests on Sauce Labs US DC with this command

    npm run test.saucelabs.us

You can run your tests on Sauce Labs EU DC with this command

    npm run test.saucelabs.eu

It will spin up multiple browsers which you can find in the [nightwatch.conf.js](tests/configs/nightwatch.conf.js) and 
in the [package.json](package.json).


