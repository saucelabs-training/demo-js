const {config} = require('./wdio.shared.conf');

// ========
// Services
// ========
config.services = config.services.concat([['sauce']]);

// =================
// Service Providers
// =================
config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY;
config.region = process.env.REGION || 'us';

// ==========
// Workaround
// ==========
config.transformResponse = (Response) => {
    /**
     * Currently the response that is given back by RDC is not a valid W3C response, it needs to return
     * at least a valid body. This will override the body and returns an empty value
     */
    if (Response.requestUrl && Response.requestUrl.includes('execute/sync') && Response.body === '') {
        Response.body = {value:''}
    }

    return Response;
};

exports.config = config;
