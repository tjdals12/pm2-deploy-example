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
    deploy: {
        production: {
            user: 'minz',
            host: '192.168.7.11',
            ref: 'origin/master',
            repo: 'git@github.com:tjdals12/pm2-deploy-example.git',
            ssh_options: 'StrictHostKeyChecking=no',
            path: '/home/minz',
            'post-deploy': 'yarn deploy',
        },
    },
};
