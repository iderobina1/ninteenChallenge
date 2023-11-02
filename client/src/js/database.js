import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => 
{console.error('putDb not implemented');

//create connection to db and versin
const textDb = await openDB("jate", 1);

//Create new transaction 
const tx = textDb.transaction("jate", "readwrite");

//Opens desired object store
const store = tx.objectStore("jate");

//put method to store
const request = store.put({ id: 1, value: content});

//confirm request
const result = await request;
console.log("data saved to db", result)
};

//get content from db
export const getDB = async() => {
  console.log("det data from database");


//create connection to db and version
const textDb = await openDB("jate", 1);

//create transaction 
const tx = textDb.transaction("jate", "readonly");

//open up desired store
const store = tx.objectStore("jate");

const request = store.get(1);

//confirm the request
const result = await request;
console.log("request.value", result)
return result?.value
};

initdb();
