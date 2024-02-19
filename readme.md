
# About

Built by [ANDREW COOK](https://drewford.dev) for a front end challenge from [SEARCHSPRING](https://searchspring.com). This website is intended for the application process at Searchspring. Backend data hosted and owned by SearchSpring.

## Deployment

[Otterly Unique](https://shop-otterly.netlify.app) deployed on Netlify

## Requirements

You can ignore the "Request Headers" section of any of the API documentation. You should only need to use "q", "resultsFormat" and "page" query parameters.

We don’t expect you to build out a full implementation we just need the following:

- An input box for a search bar with a search button next to it
- When someone types into the search bar and hits enter or clicks the search button display product results below the search bar
    - Use site ID “scmq7n” for this example.
    - You’ll want to use “resultsFormat=native” as part of the API request to get your results back as JSON.
    - You’ll want to pass the search query using the “q” parameter.
    - Display the product image using the “thumbnailImageUrl”, the product “name” and “price”.
    - If the product has an “msrp” field and it’s greater than “price” field, display the “msrp” next to the price crossed out.
- Above and below the results show pagination with next and previous buttons. You could also display some pages before/after the current page.
    - If you’re on the first page, you shouldn’t show the previous button or it should be disabled.
    - If you’re on the last page, you shouldn’t show the next button or it should be disabled.
    - You’ll be able to change the page by making another request to our Search API with the “page” parameter set to the page you’d like to request.