/* eslint-disable prettier/prettier */
class Unknow extends Error {
  constructor(id) {
    super();

    this.statusCode = 400;
    this.description = 'Id unknown';
    this.message = `id ${id} unknown`;
  }
}

module.exports = Unknow;
// deploy
