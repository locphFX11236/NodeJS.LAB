const path = require('path'); //

const express = require('express'); //
const bodyParser = require('body-parser'); //
// const expressHbs = require('express-handlebars'); // hbs

const rootDir = require('./util/path'); //
const adminData = require('./routes/admin'); //
const shopRoutes = require('./routes/shop'); //

const app = express(); //

// app.set('view engine', 'pug'); // pug

// app.engine(
//   'hbs',
//   expressHbs({
//     layoutsDir: 'views/layouts/',
//     defaultLayout: 'main-layout',
//     extname: 'hbs'
//   })
// ); // hbs
// app.set('view engine', 'hbs'); // hbs

app.set('view engine', 'ejs'); // ejs

app.set('views', 'views'); //

app.use(
  bodyParser.urlencoded(
    {extended: false}
  )
); //
app.use(
  express.static(
    path.join(
      rootDir,
      'public'
    )
  )
); //

app.use('/admin', adminData.routes); //
app.use(shopRoutes); //

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found', path });
}); //

app.listen(3000); //