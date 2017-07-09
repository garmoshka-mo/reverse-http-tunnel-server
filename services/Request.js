const uuidv1 = require('uuid/v1');
var { tunnel } = require('./tunnel.js');

exports.Request = class {

  constructor(req, res) {
    this.id = uuidv1();
    this.data = {
      id: this.id,
      method: req.method,
      url: req.url,
      headers: req.headers
    };
    this.responseToBrowser = res;

    tunnel.addRequest(this);
  }

  respond(data) {
    //this.responseToBrowser.set(data.headers);
    //this.responseToBrowser.set('Content-Type', 'image/jpeg');

    //console.log('DATA', data);
    //this.responseToBrowser.send( new Buffer(data.body) );
    //this.responseToBrowser.send( new Buffer(data) );
    if (data.code)
      this.responseToBrowser.status( data.code );
    this.responseToBrowser.send( data.body );
  }

};