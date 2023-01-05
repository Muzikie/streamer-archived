const { createWSClient } = require('@liskhq/lisk-api-client');
const networkConfig = require('../config/network');

class Socket {
  constructor () {
    this.client = null;
    this.readyCallbacks = [];
    this.create();
  }

  async create() {
    const url = `ws://${networkConfig.ws.ip}:${networkConfig.ws.port}/rpc-ws`;
    const client = await createWSClient(url);
    this.client = client;
    this.readyCallbacks.forEach(cb => cb(this.client));
  }

  request (endpoint, params) {
    return this.client.invoke(endpoint, params);
  }

  subscribe (endpoint, cb) {
    return this.client.subscribe(endpoint, cb);
  }

  onReady (cb) {
    if (this.client !== null) {
      cb(this.client);
    } else {
        this.readyCallbacks.push(cb);
    }
  }

  disconnect () {
    this.client.disconnect();
  }
}

module.exports = new Socket();
