import Router from 'koa-router';

const router = new Router();

router.get('/', ctx => {
    ctx.body = 'Home';
});

router.get('/about', ctx => {
    ctx.body = 'About';
});

export default router;
