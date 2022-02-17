const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// const expressHbs = require('express-handlebars'); // Views: hbs

const rootDir = require('./util/path');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');

const app = express();

// app.set('view engine', 'pug'); // Views: pug

// app.engine(
//   'hbs',
//   expressHbs({
//     layoutsDir: 'views/layouts/',
//     defaultLayout: 'main-layout',
//     extname: 'hbs'
//   })
// ); // Views: hbs
// app.set('view engine', 'hbs'); // Views: hbs

app.set('view engine', 'ejs'); // Views: ejs

app.set('views', 'views');

app.use(
  bodyParser.urlencoded(
    {extended: false}
  )
);
app.use(
  express.static(
    path.join(
      rootDir,
      'public'
    )
  )
);

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);