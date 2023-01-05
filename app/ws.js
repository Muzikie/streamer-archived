const { createWSClient } = require('@liskhq/lisk-api-client');
const networkConfig = require('../config/network');

class Socket {
  constructor () {
    this.ws = null;
    this.create();
  }

  async create() {
    const url = `ws://${networkConfig.ws.ip}:${networkConfig.ws.port}/rpc-ws`;
    const ws = await createWSClient(url);
    this.ws = ws;
  }

  request (endpoint, params) {
    return this.ws.invoke(endpoint, params);
  }
}

module.exports = new Socket();
