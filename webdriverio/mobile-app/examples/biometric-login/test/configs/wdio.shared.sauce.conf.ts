import {config} from './wdio.shared.conf';
import {SauceRegions} from '@wdio/types/build/Options';

// =====================
// Sauce specific config
// =====================
config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY;

// If you run your tests on Sauce Labs you can specify the region you want to run your tests
// in via the `region` property. Available short handles for regions are `us` (default) and `eu`.
// These regions are used for the Sauce Labs VM cloud and the Sauce Labs Real Device Cloud.
// If you don't provide the region, it defaults to `us`.
config.region = (process.env.REGION || 'us') as SauceRegions;

// =============================================
// Max instances of the same device in the cloud
// =============================================
config.maxInstances = 20;

// ========
// Services
// ========
config.services = (config.services || []).concat('sauce');

export default config;
