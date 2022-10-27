'use strict';

const { v4: uuidv4 } = require('uuid')
const { MongoClient } = require('mongodb')

async function main(args) {
  const url = process.env.DATABASE_URL
  const client = new MongoClient(url)

  const dbName = process.env.DATABASE_NAME

  try {
    await client.connect()

    const db = client.db(dbName);
    const collection = db.collection(process.env.DATABASE_COLLECTION)

    if (args.__ow_method == 'post') {
      const isInserted = await collection.insertOne({ uuidzzz: uuidv4() }) && true

      if (isInserted)
        return {
          'body': { 'success': 'New uuid created successfully.' },
          'statusCode': 200
        }
    }

    const data = await collection.find({}).toArray()

    return {
      'body': { data },
      'statusCode': 200
    }

  } catch (err) {
    console.log({ err })

    return {
      'body': { 'error': 'There was a problem adding the uuid to the database.' },
      'statusCode': 400
    }

  } finally {
    await client.close()
  }
}

module.exports.main = main
