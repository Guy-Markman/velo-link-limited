Link with limited amount of entrances using Velo
===================================

_By Guy-Markman: 18.4.2022_

With this code you will be able to limit the amount of people who can access the link link, using your Wix website

## Setup
1. Create a new directory in your backend named ClickConfig, and create a file named `ClickConfig.js`.
2. Copy the content of `ClickConfig.js` from `backend/ClickConfig/ClickConfig.js` into it, you can edit the variables however you want that fits your needs.

  **From now on, if you see a name in upper screaming snake case, it refers to the a variable from ClickConfig.js**

3. Create a new **single item collection** `COLLECTION`, set its permissions to `Site Content`.
4. Create a number field in it named `FIELD_NAME` and set it to 0,.
5. Create a new Wix page (you can call it whatever you want), and put the code from [page.js](page.js) in the code editor of this page.
6. Create a text object with the style that you want and change its id to TEXT_ID.
7. Create a new file in the backend and name it `updateClicks.jsw`. Copy the content from [backend/updateClicks.jsw](backend/updateClicks.jsw) it.
8. Release the page and share the link to the page with whomever you want.

#
## Tip
You can change the values in [ClickConfig.js](public/ClickConfig/ClickConfig.js) and the values in `COLLECTION` to suit your needs