// database config
module.exports = {
  mysql: {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'test',
    port: 3306,
    insecureAuth : true,
    queueLimit : 0, // unlimited queueing
    connectionLimit : 0 // unlimited co
  }
}