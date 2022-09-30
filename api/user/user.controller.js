const pool = require(`../../config/database`)

exports.register = (req, res) =>{
    const param = [req.body.num, req.body.name]
    pool((conn) => {
      const sql = "INSERT INTO info(num, name) VALUES(?, ?)"
      conn.query(sql, param, (err, result) => {
        if (err) res.json({ result: false, message: err})
        result ? res.json({ result: true }) : res.json({ result: false})
      })
      conn.release()
    })
  }
