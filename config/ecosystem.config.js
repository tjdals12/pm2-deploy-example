module.exports = {
    apps: [
        {
            name: 'server',
            script: './dist/server.js',
            log_date_format: 'YYYY-MM-DD HH:mm',
            out_file: './logs/out.log',
            error_file: './logs/err.log',
            merge_logs: true,
            instances: 0,
            exec_mode: 'cluster',
        },
    ],
};
