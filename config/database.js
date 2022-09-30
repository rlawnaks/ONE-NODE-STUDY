const mysql = require('mysql'),
  dbInfo = {
    host: '127.0.0.1',
    port: '3306',
    user: 'user',
    password: 'rlawnaks12341!@',
    database: 'test'
  },
  pool = mysql.createPool(dbInfo)

module.exports = (callback) => {
  pool.getConnection((err, conn) => {
    if (!err) {
      callback(conn)
    }
  })
}