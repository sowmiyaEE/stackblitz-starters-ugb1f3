const axios = require('axios');
let url =
  'https://gigs-interview-sowmiyaee.aws-us-east-1.turso.io/v2/pipeline/';
let url2 =
  'libsql://gigs-interview-sowmiyaee.aws-us-east-1.turso.io/v2/pipeline';
let authtoken2 =
  'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MzI4NjI3MjgsImlkIjoiNmU0MDBiZWMtZmIwNi00NzVkLTk5NGUtNDRiYjNiYzFjMjc4In0.bzL_CO5a_-mrLm-tnNTWt9k20K_rXnNIzJFwe_MhSAF7DAvu-kP50kzIH2VadbZq5UicFCHVAcwg9FMOhBJvBw';
let authToken =
  'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJnaWQiOiJhM2FkNWJmZi1iZjNiLTQ2M2QtOTIyNS0xMzQxZmQyYjUxN2MiLCJpYXQiOjE3MzI4NjI2NDB9.IoWHpvEaruX15A6WElSFxw2d4Mz3Jat2GwqagciGLjt5LQxpB4zeygIwLJfoRNeDL5cUeJGnQhtU0EGuWWTtBA';

let query =
  'create table notes if not exists( Id integer primary key autoincrement, heading text,tagline text, detail text, isPinned boolean, date INTEGER DEFAULT (unixepoch()));';

const { createClient } = require('@libsql/client');

const turso = createClient({
  url: url2,
  authToken: authtoken2,
});

turso
  .execute(query)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
/*
fetch(url, {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${authtoken2}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    requests: [{ type: 'execute', stmt: { sql: query } }, { type: 'close' }],
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
*/
