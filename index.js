const express = require('express');
const pg = require('pg');
const config = {
  DATABASE: {
    NAME: 'notes_jw8o',
    USER: 'sowmiya',
    PASSWORD: '20EQ4IhQfsJ21BbxgcpboAjfq4b5JRMt',
    HOST: '',
    PORT: 5432,
    DB_DIALECT: 'mysql',
    DEBUG: true,
    URL_EXT:
      'postgresql://sowmiya:20EQ4IhQfsJ21BbxgcpboAjfq4b5JRMt@dpg-ct4kfo52ng1s73a5hql0-a.oregon-postgres.render.com/notes_jw8o',
    URL_INT:
      'postgresql://sowmiya:20EQ4IhQfsJ21BbxgcpboAjfq4b5JRMt@dpg-ct4kfo52ng1s73a5hql0-a/notes_jw8o',
  },
  PORT: process.env.port || 8085,
};
const { Client } = require('pg');

const client = new Client({
  connectionString: config.DATABASE.URL_INT
});
console.log(client)
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
})

    client.query(
      'insert into table values($1,$2,$3,$4)',
      [1, 2, 2, 3],
      (err, res) => {
        if (err) {
          console.log(err);
        } else {
          cosole.log(res);
        }
      }
    );
    // Close the connection when done
		client
				.end()
				.then(() => {
					console.log('Connection to PostgreSQL closed');
				})
				.catch((err) => {
					console.error('Error closing connection', err);
				});
		




const cors = require('cors');
const morgan = require('morgan');
//  console.log(seqInstance.authenticate());
let NoteModel = {};
let app = express();
app.use(cors({ origin: '*' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

app.listen(config.PORT, () => {
  console.log(`Server Running on ${config.PORT}`);
});
app.post('/api/notes', (req, res) => {});
