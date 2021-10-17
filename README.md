# GoT API App

---

Demo on Netlify: [LINK](https://got-api-app.netlify.app/)

## Overview

*GoT API App* is an application thanks to which you can get familiar to GoT characters and houses. Data are downloaded from [An API of Ice And Fire](https://anapioficeandfire.com/). You can get to know characters' names, aliases, gender, whether are they alive or not, which culture do they come from and their allegiances. The app contains functionality of filtering characters based on gender and/or culture. You can also get to know details of houses such as region, coat of arms, titles, seats and a few more. Each house has its own page with dedicated URL. Pagination is implemented. The user can choose number of results shown on single page from proposed: 10, 25 or 50. The user can also go to first, previous, next or last page with one click. Coded in TypeScript with use of good practice of clean code. Code formatted with use of Prettier.
Are you ready for Ice And Fire journey?

- API URL: [An API of Ice And Fire](https://anapioficeandfire.com/)
- Demo on Netlify: [LINK](https://got-api-app.netlify.app/)
- Repo url: [LINK](https://github.com/PiotrRynio/got-api-app)

###### The following technologies/libraries/methodologies were used:

- React
- react-route
- react-query
- react hooks
- TypeScript
- Regex
- Styled Components
- react testing library
- jest-dom testing library
- MSW - Mock Service Worker (API queries mocking)
- Prettier
- Husky (pre-commit)
- lint-staged
- Full Responsive
- Clean Code
- Git & GitHub
- IntelliJ


###### TODO: 
1. Add culture filtering in API when you are requesting api with only part of the culture name
in the query - now it is empty list  If fetched list is filtering in app, then an empty table is 
returned after typing only part of the culture name in the query. Both solutions are little UX - 
API development is necessary.


## Running the project

Running this project locally

###### From the repo:

1. Clone this project locally.
2. Run `npm install` in your bash/command line.
3. Run `npm start` in your bash/command line.
4. Go to `http://localhost:3000/` in your browser (or other from your bash/command line info).

Others:

1. Compile and minify for production `npm build`
2. Run all tests `npm test`

---

### Authors

*Piotr Rynio*  
Contact:
pwrynio@gmail.com  
github.com/PiotrRynio/
