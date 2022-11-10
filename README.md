# Muzikie Streamer

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](http://www.apache.org/licenses/LICENSE-2.0)
[![License: Apache 2.0](https://img.shields.io/github/workflow/status/muzikie/streamer/Node.js%20CI/development)](https://img.shields.io/github/workflow/status/muzikie/streamer/Node.js%20CI/development)

Muzikie Streamer is a web application that allows streaming audio tracks to the client applications.


### Development

#### prerequisite
- [NVM](https://github.com/nvm-sh/nvm/blob/master/README.md) (Used to set up the required node version)
- [Node v16.15.0](https://nodejs.org)
- [Muzikie Blockchain](https://github.com/Muzikie/blockchain)

#### Scripts
Install dependencies using `npm ci` to be able to use the existing scripts.

You can run 

```
npm run dev
```
to run the project in development mode. Although for running the project in production mode, you should use

```
npm start
```
You may change the configurations under the [config directory](https://github.com/Muzikie/streamer/tree/development/config). There are dedicated files for api, network, and more.

#### Tests
Tests files are located under the [tests directory](https://github.com/Muzikie/streamer/tree/development/tests). There is a dedicated npm `package.json` file. Once you installed the dependencies, you can run

```
npm test
```
to run tests. You may pass a file directory to run a single file.


## Contributors

https://github.com/muzikie/streamer/graphs/contributors

## License

Copyright 2022 Block Made GmbH

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

[Muzikie site]: https://muzikie.com/
[Block Made GmbH site]: https://block-made.com/
