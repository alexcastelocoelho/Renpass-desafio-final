const app = require('./app');

const ENV = 3000;

app.listen(ENV, () => {
	console.log(`server running on port ${ENV}`);
});