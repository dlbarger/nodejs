/*
    Script:     QueryTable.js
    Function:   queryTable
    Handler:    app.handler
    Author:     Dennis Barger

    Description:
    Lambda function to query RockHistory catalog which resides in DynamoDB.
    The functions executes a DynamoDB Query action.

    Resources:
    Node.js examples with DynamoDB; https://www.fernandomc.com/posts/eight-examples-of-fetching-data-from-dynamodb-with-node/
*/

// Lambda Handler
exports.handler = async (event, context) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify(event),
    };
    return response;
};

/*
    Private Functions
*/

// Query songs by artist
async function querySongsByArtist(artist) {
    try {
        
    }
}