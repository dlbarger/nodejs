# Overview
Sample project that combines Node.js and DynamoDB to build a back-end service to query
historical rock songs.

# Back-end Service
API's include the following:
* Retrieve songs for a specific artist
* Retrieve songs for a specific year

## Project Structure

-   src
    -   app
        -   routes
            -   /artistSearch
            -   /songyearSearch
        -   services
            -   search