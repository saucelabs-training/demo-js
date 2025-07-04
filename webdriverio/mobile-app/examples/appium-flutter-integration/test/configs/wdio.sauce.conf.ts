import type { Options } from '@wdio/types';
import { config as baseConfig } from './wdio.shared.conf.js';

export const config: WebdriverIO.Config = {
    ...baseConfig,

    // ========
    // Services
    // ========
    services: [
        ...baseConfig.services || [],
        ['sauce', {}],
    ],

    // =================
    // Service Providers
    // =================
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    port: 443,
    // @ts-ignore
    region: process.env.REGION || 'eu', // eu or us

    // Increase for real device support
    connectionRetryTimeout: 180000,
};
