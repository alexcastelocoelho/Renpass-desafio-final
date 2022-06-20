const app = require('./app');

const ENV = process.env.PORT || 3000;


app.listen( ENV, () => {
	console.log(`server running on port ${ENV}`);
});