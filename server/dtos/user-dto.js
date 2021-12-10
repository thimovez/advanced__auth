// Data transfer object
module.exports =  class UserDto {
  email;
  id;
  isActivated;
  //_id нижнее подчеркивание для того чтобы понимать что значение неизменяемое
  constructor(model) {
    this.email = model.email;
    this.id = model._id;
    this.isActivated = model.isActivated;
  }
}