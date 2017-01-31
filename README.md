# New Relic Demo

This is a demo website to trigger New Relic notifications.


## Setup

```
yarn install
```


## Start the website

```
node index.js
```


## How to test

Launch your browser and navigate to http://localhost:3000

By default it's an almost-empty window and it refreshes every 10 seconds. Every refresh triggers a 500 errors.
You can confirm it by looking at the network activity of your browser.

And After 5 minutes, a new incident should be created by New Relic. Message is: incident created.

Then you can go to New Relic to acknowledge the incident. Then another message is generated: incident acknowledged.

Then close the browser page. But DO keep the website server process running for another 5 minutes. One more message is generated: incident resolved.


## Important notes

- License key is hard-coded: https://github.com/tylerlong/new-relic-demo/blob/master/newrelic.js#L17
    - It is from https://rpm.newrelic.com/accounts/1484191
    - If you want to test other New Relic accounts, please do update the license key accordingly
- Before the testing, make sure there is no un-resolved incidents in New Relic. Close then if there are any.
    - otherwise no new incident will be created.
