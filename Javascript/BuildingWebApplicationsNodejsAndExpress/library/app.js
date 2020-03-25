/* eslint-disable no-console */
// Routing chapter 6.
const express = require('express');
const chalk = require('chalk');
const debug = require('debug');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './src/views');
// app.set('view engine', 'pug');
app.set('view engine', 'ejs');

// install eslint --> npm i -D eslint eslint-config-airbnb-base eslint-plugin-import
// res.sendFile(path.join(`${__dirname}/views/index.html`));
app.get('/', (_req, res) => {
  res.render('index', { list: ['a', 'b'], title: 'Library' });
  // res.render('index', { list: ['a', 'b'] });
});

// console.log(`listening on port  ${chalk.green('3000')}`);
// Install eslint: npm init -y, npm i -D eslint eslint-config-airbnb-base eslint-plugin-import
// set DEBUG = * &  node app.js --> localhost:3000 FIX --> .\node_modules\.bin\eslint app.js --fix
app.listen(port, () => {
  debug(`listening on port ${chalk.green(port)}`);
  console.log(`Listening to port ${chalk.green(port)}`);
});
