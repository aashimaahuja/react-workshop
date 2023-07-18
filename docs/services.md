### Managing services

We can use fetch API or axios to make an api request. If you have multiple components that needs data from an API, making a fetch call everywhere will result in a lot of duplicate code.

Better idea is to encapsulate the common logic of an API into a separate hook

Pros:

- easy to change or provide any headers
- easy logging of APIs
- A central place for managing services. (implementing cache, retries)

There are already similar solutions in market like npm library `useFetch`. It already provides caching , retry mechanism and many more features.
