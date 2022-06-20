const app = require('./app');

const ENV = 3000;

console.log(`server running on port ${ENV}`);
app.listen(process.env.PORT || ENV, () => {
});