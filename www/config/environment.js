/* jshint node: true */
module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'pool',
    environment: environment,
    rootURL: 'https://www.3pool.cn/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // API host and port
      ApiUrl: '//api.3pool.cn:8080/',
      // HTTP mining endpoint
      // HttpHost: 'http://eth.3pool.cn',
      // HttpPort: 9009,

      // Stratum mining endpoint
      // StratumHost: 'http://eth.3pool.cn',
      // StratumPort: 9999,

      // Fee and payout details
      //  PoolFee: '1%',
     // PayoutThreshold: '0.06 Ether',

      // For network hashrate (change for your favourite fork)
      BlockTime: 14.4
    }
  };

  if (environment === 'development') {
    /* Override ApiUrl just for development, while you are customizing
      frontend markup and css theme on your workstation.
    */
    ENV.APP.ApiUrl = 'https://api.3pool.cn:8080/'
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
