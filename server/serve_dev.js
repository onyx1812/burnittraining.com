const
  express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  path = require('path'),
  http = require('http'),
  reload = require('reload'),
  history = require('connect-history-api-fallback'),
  port = process.env.PORT || 8001,
  app = express(),
  server = http.createServer(app);

/*-------------------------------------------
Connect DB
-------------------------------------------*/
const mysql = require('mysql')
const db_conf = require('./db/dev.js')
const db = mysql.createConnection(db_conf)
db.connect(err => {
  if(err){ throw err }
})

/*-------------------------------------------
Path settings
-------------------------------------------*/
const frontPath = path.join(__dirname, '../front/dist/')

app.use(history())
app.use(bodyParser.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.set("view options", {layout: false})
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.set('views', path.join(frontPath))
app.use(express.static(frontPath))
app.use(express.json())

/*-------------------------------------------
Routing
-------------------------------------------*/
app.get('/', (req, res) => {
  res.render(path.join(frontPath+'index.html'))
});

app.get('/orders', (req, res) => {
  let sql = `SELECT * FROM orders`;
  db.query(sql, (err, result) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(result);
  });
});

app.post('/orders/update-shipping', (req, res) => {
  let date = new Date();
  let post = {
    "shipping_name": req.body.params.shipping_name,
    "city": req.body.params.city,
    "country": req.body.params.country,
    "line1": req.body.params.line1,
    "line2": req.body.params.line2,
    "zip": req.body.params.zip,
    "state": req.body.params.state,
    "status": req.body.params.status,
    "notes": req.body.params.notes
  }
  let sql = `UPDATE orders SET ? WHERE ID = ${req.body.params.order_id}`;
  let query = db.query(sql, post, (err, result) => {
      if(err) throw err;
      res.send(result);
  });
});

app.post('/orders/update-status', (req, res) => {
  let date = new Date();
  let post = {
    "status": req.body.params.status
  }
  let sql = `UPDATE orders SET ? WHERE ID = ${req.body.params.order_id}`;
  let query = db.query(sql, post, (err, result) => {
      if(err) throw err;
      res.send(result);
  });
});

app.post('/orders/update-total', (req, res) => {
  let date = new Date();
  let post = {
    "total": req.body.params.total,
    "status": req.body.params.status
  }
  let sql = `UPDATE orders SET ? WHERE ID = ${req.body.params.order_id}`;
  let query = db.query(sql, post, (err, result) => {
      if(err) throw err;
      res.send(result);
  });
});

app.post('/orders/update-payment', (req, res) => {
  let date = new Date();
  let post = {
    "status": req.body.params.status,
    "card_number": req.body.params.card_number,
    "exp_month": req.body.params.exp_month,
    "exp_year": req.body.params.exp_year,
    "card_code": req.body.params.card_code
  }
  let sql = `UPDATE orders SET ? WHERE ID = ${req.body.params.order_id}`;
  let query = db.query(sql, post, (err, result) => {
      if(err) throw err;
      res.send(result);
  });
});

app.post('/orders/update-subscription', (req, res) => {
  let date = new Date();
  let post = {
    "subscription": req.body.params.subscription
  }
  let sql = `UPDATE orders SET ? WHERE ID = ${req.body.params.order_id}`;
  let query = db.query(sql, post, (err, result) => {
      if(err) throw err;
      res.send(result);
  });
});

app.post('/orders/create', (req, res) => {
  let date = new Date();
  let post = {
    "date": date,
    "first_name": req.body.params.first_name,
    "last_name": req.body.params.last_name,
    "email": req.body.params.email,
    "phone": req.body.params.phone,
    "status": req.body.params.status,
    "total": req.body.params.total,
    "card_number": req.body.params.card_number,
    "exp_month": req.body.params.exp_month,
    "exp_year": req.body.params.exp_year,
    "card_code": req.body.params.card_code
  }
  let sql = 'INSERT INTO orders SET ?';
  let query = db.query(sql, post, (err, result) => {
      if(err) throw err;
      res.send(result);
  });
});

const stripe = require('stripe')('sk_test_Tdn64ZHF8E2SG6RF1nONNQUh');
app.post('/payment/stripe', (req, res) => {
  let token_id = null;
  const address = req.query.address;
  stripe.tokens.create({
    card: {
      number: req.body.params.card_number,
      exp_month: Number(req.body.params.exp_month),
      exp_year: Number(req.body.params.exp_year),
      cvc: req.body.params.card_code
    }
  }, (err, token) => {
    if(err) res.send(JSON.stringify(err));
    stripe.customers.create({
      source: token.id,
      email: req.body.params.email,
      name: req.body.params.first_name+' '+req.body.params.last_name,
      phone: req.body.params.phone,
    }, (err, customer) => {
      if(err) res.send(JSON.stringify(err));
      stripe.charges.create({
        amount: Number(req.body.params.amount) * 100,
        currency: req.body.params.currency,
        description: `Order #dev_vshred_${req.body.params.order_id}`,
        customer: customer.id,
        receipt_email: req.body.params.email,
        metadata: {
          order_id: req.body.params.order_id
        }
      }, (err, charge) => {
        if(err) res.send(JSON.stringify(err));
        const result = {
          status: charge.status,
          order_id: req.body.params.order_id
        };
        res.send(result);
      });
    });
  });

});

app.post('/payment/subscription', (req, res) => {
  let token_id = null;
  const address = req.query.address;

  stripe.tokens.create({
    card: {
      number: req.body.params.card_number,
      exp_month: Number(req.body.params.exp_month),
      exp_year: Number(req.body.params.exp_year),
      cvc: req.body.params.card_code
    }
  }, (err, token) => {
    if(err) res.send(JSON.stringify(err));
    stripe.customers.create({
      source: token.id,
      email: req.body.params.email,
      name: req.body.params.first_name+' '+req.body.params.last_name,
      phone: req.body.params.phone,
    }, (err, customer) => {
      if(err) res.send(JSON.stringify(err));
      stripe.subscriptions.create({
        customer: customer.id,
        items: [
          {price: 'price_1HEvzBGNtXCd4U0XivYdlmMT'},
        ]
      }, (err, subscription) => {
        if(err) res.send(JSON.stringify(err));
        const result = {
          status: subscription.status
        };
        res.send(result);
      }); //stripe.subscriptions.create
    }); //stripe.customers.create
  }); //stripe.tokens.create
}); ///Route payment/subscription

app.post('/payment/stripeshipp', (req, res) => {
  let token_id = null;
  const address = req.query.address;

  const address_arr = {
    city: req.body.params.city,
    country: req.body.params.country,
    line1: req.body.params.line1,
    line2: req.body.params.line2,
    postal_code: req.body.params.postal_code,
    state: req.body.params.state,
  };

  stripe.tokens.create({
    card: {
      number: req.body.params.card_number,
      exp_month: Number(req.body.params.exp_month),
      exp_year: Number(req.body.params.exp_year),
      cvc: req.body.params.card_code
    }
  }, (err, token) => {
    if(err) res.send(JSON.stringify(err));
    stripe.customers.create({
      source: token.id,
      email: req.body.params.email,
      name: req.body.params.first_name+' '+req.body.params.last_name,
      phone: req.body.params.phone,
      address: address_arr,
      shipping: {
        address: address_arr,
        name: req.body.params.name,
        phone: req.body.params.phone
      }
    }, (err, customer) => {
      if(err) res.send(JSON.stringify(err));
      stripe.charges.create({
        amount: Number(req.body.params.amount) * 100,
        currency: req.body.params.currency,
        description: `Order #dev_vshred_${req.body.params.order_id}`,
        customer: customer.id,
        receipt_email: req.body.params.email,
        shipping: {
          address: address_arr,
          name: req.body.params.name,
          phone: req.body.params.phone
        },
        metadata: {
          order_id: req.body.params.order_id
        }
      }, (err, charge) => {
        if(err) res.send(JSON.stringify(err));
        const result = {
          status: charge.status,
          order_id: req.body.params.order_id
        };
        res.send(result);
      });
    });
  });

});

/*-------------------------------------------
              START Klaviyo
-------------------------------------------*/
const
  Klaviyo = require('klaviyo-node'),
  client = new Klaviyo('XDGXFa'),
  request = require("request");

app.post('/klaviyo/identify', (req, res) => {
  client.track('Started Checkout', req.body.params.email,{
    '$first_name': req.body.params.first_name,
    '$last_name': req.body.params.last_name
  });
  client.identify(req.body.params.email, {
    '$first_name': req.body.params.first_name,
    '$last_name': req.body.params.last_name
  });
});
/*-------------------------------------------
              END Klaviyo
-------------------------------------------*/

/*-------------------------------------------
Server Listen
-------------------------------------------*/
// reload(app).then(function (reloadReturned) {
//   server.listen(port, () => {
// console.log(`----------------------------------------------------------
//      Server has been started on http://localhost:${port}
// ----------------------------------------------------------`)
//   })
// }).catch(function (err) {
//   console.error('Reload could not start, could not start server/sample app', err)
// })

server.listen(port, () => {
  console.log(`Server has been started on port ${port}`)
})