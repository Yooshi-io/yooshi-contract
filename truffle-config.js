module.exports = {
  networks: {
   dev: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*"
   },
   test: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*"
   }
 },

  compilers: {
    solc: {
      version: "0.6.12"
    }
  }
};
