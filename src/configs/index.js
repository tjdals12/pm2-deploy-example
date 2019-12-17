import dotenv from 'dotenv';

dotenv.config();

const env = process.env.NODE_ENV || 'development';

const configs = {
    base: {
        env,
        port: process.env.PORT,
    },
    production: {},
    development: {},
};

const config = Object.assign(configs.base, configs[env]);

export default config;
