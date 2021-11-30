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

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

exports.handler = async (event) => {
    const response = main().catch(console.error);
    return response
}