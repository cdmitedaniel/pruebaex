// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    //connection: 'postgres://postgres:postgres@localhost/my_life'
    connection: 'postgres://postgres:postgres@localhost/excursiones_db'
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};
