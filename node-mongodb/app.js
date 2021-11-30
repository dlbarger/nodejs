/*
    Script: app.js

    Description:
    List databases in MongoDB server

    Implementation Notes:

    MongoDB Configuration
    -   Connection String:  uri = "mongodb+srv://<user>:<password>@<mongodb cluster url>/<default database>?retryWrites=true&w=majority";
        -   user = <<>>
        -   password = <<>>
        -   cluster url = cluster0.9ptie.mongodb.net
        -   default database = sample_airbnb

    Node.js MongoDB Setup
    -   npm install mongodb

    MongoDB IP Address List
    -   Information about white-listing IP Addresses:  https://docs.atlas.mongodb.com/security/ip-access-list/
*/

const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb+srv://<<user>>:<<password>>@cluster0.9ptie.mongodb.net/sample_airbnb?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);

/**
 * Print the names of all available databases
 * @param {MongoClient} client A MongoClient that is connected to a cluster
 */
async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};



