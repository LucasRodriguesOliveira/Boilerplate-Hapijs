const IDatabase = require('../../interface/IDatabase.interface');
const Mongoose = require('mongoose');
const { mongodb, global } = require('../base/config.json');

/**
 * @public
 * @class
 * @extends IDatabase
 * @description Manipulates connection and operations to mongodb database <br/>
 * Set your connection string in .env.development in CONNECTION variable
 */
class Mongodb extends IDatabase {
  constructor(connection) {
    super(mongodb.name, connection);
    this._status = mongodb.status;
  }

  async isConnected(){
    const status = this._status[this.connection.readyState];

    if(status === this._status[1]) return status;
    if(status !== this._status[2]) return status;

    await new Promise(resolve => setTimeout(resolve, mongodb.connectionTime));
    return this._status[this.connection.readyState];
  }

  static connect(showLog) {
    const ConnectionString = process.env.CONNECTION;
    const MongooseOptions = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    };

    Mongoose.connect(ConnectionString, MongooseOptions, err => {
      if(!err) return;

      console.log(`${global.ErrConnectionLog} ${err}`);
    });

    Mongoose.connection.once('open', () => {
      showLog && console.log(mongodb.logMessage);
    });

    return Mongoose.connection;
  }

  async defineModel(schema) {
    this.schema = schema;
  }

  async create(item) {
    return this.schema.create(item);
  }

  async read(query, skip = 0, limit = 10) {
    return this.schema.find(query || {}).skip(skip).limit(limit);
  }

  async update(id, item) {
    return this.schema.updateOne({_id: id}, {$set: item});
  }

  async delete(id) {
    const deleteInfo = {active: false, excluded: true, modifiedAt: Date.now()};
    return await this.update(id, deleteInfo);
  }

  async destroy(id) {
    return this.schema.deleteOne({_id: id});
  }

  async truncate(query) {
    return this.schema.deleteMany(query||{excluded: true});
  }
}

module.exports = Mongodb;