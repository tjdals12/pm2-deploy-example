import config from 'configs';
import app from 'app';

const { port } = config;

app.listen(4000, () => {
    console.log(`Server running at ${port}`);
});
