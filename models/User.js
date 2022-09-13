const pool = require('../config/db-config')
const bcrypt = require('bcryptjs')

class User {
  static find(email) {
    const q = "SELECT * FROM users WHERE email = ?";

    pool.execute(q, [email], (e, rows) => {
      if(e) {
        return false
      } else {
        if(rows.length === 0) {
          console.log('empty')
          return false
        } else {
          console.log(rows)
          return rows
        }
      }
    })
  }

  static async authenticate(email, password) {
    const user = this.find(email)

    if(!user) {
      return false
    } else {
      if(await bcrypt.compare(password, user.hash)) {
        return true
      } else {
        return false
      }
    }
  }
}

module.exports = User;