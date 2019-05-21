var mysql = require('mysql');
var _config = require('../config');
var sql = require('./userSqlMapping')

var pool = mysql.createPool(Object.assign({}, _config.mysql));

var jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    })
  } else {
    res.json(ret)
  }
}

module.exports = {
  add: (req, res, next) => {
    pool.getConnection((err, connection) => {
      var param = req.query || req.params;
      if (err)
        return res.send(400);

      connection.query(sql.insert, [param.name, param.age], function(err, result) {
        if (result) {
          result = {
            code: 200,
            msg: '增加成功'
          }
        }

        jsonWrite(res, result);

        connection.release()
      })
    })
  }
}