const { createWSClient } = require('@liskhq/lisk-api-client');
const networkConfig = require('../config/network');

const ws = (endpoint, params) =>
  createWSClient(`ws://${networkConfig.ws.ip}:${networkConfig.ws.port}/rpc-ws`)
    .then((wsClient) => wsClient.invoke(endpoint, params));
module.exports = { ws };
