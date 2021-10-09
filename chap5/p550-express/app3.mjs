// app3.mjs
// Handling URL-encoded data in GET and POST requests

import express from 'express';
let app = express();

// add middleware to decode URL-encoded request body
app.use(express.urlencoded({extended: true}));

app.get('/add', (req, res) => {
  let a = parseFloat(req.query.a);
  let b = parseFloat(req.query.b);
  res.json({
    method: 'GET',
    a: a, b: b, sum: a+b  
  });
});

app.post('/add', (req, res) => {
  let a = parseFloat(req.body.a);
  let b = parseFloat(req.body.b);
  res.json({
	method: 'POST',
	a: a, b: b, sum: a+b  
  });
});

// matches any URL
app.get('*', function(req, res) {
	res.status(404).send(`<!doctype html>
<html>
<body>
  <p>This app demonstrates how to handle URL-encoded payload sent in GET and POST requests.</p>
  <hr>
  <p>Click this link <a href="/add?a=3&b=5">/add?a=3&b=5</a> to send 'GET' request with query string</p>
  <hr>
  <p>Use this form to send a POST request</p>
  <form action='/add' method='POST'>
    <p>a: <input name='a' type='text' value='3'/>
    <p>b: <input name='b' type='text' value='5'/>
	<p><button type='submit'>Calculate a+b</button>
  </form>
</body>
</html>`);
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});