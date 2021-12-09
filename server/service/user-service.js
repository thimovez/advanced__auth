const UserModel = require('../models/user-model');

class UserService {
  async registration(email, password) {
    const candidate = await UserModel.findOne({email});
    if(candidate) {
      throw new Error(`Пользователь с почтовым адресом ${email} уже существует`)
    }
  }
}

module.exports = new UserService();