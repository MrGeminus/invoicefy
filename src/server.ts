import createApp from './utilities/app';

const app = createApp();

const port = process.env.PORT;

app.listen(port, () => {
    console.log('Server running');
});
