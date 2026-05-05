const express = require('express');

const app = express();

app.use(express.json());

// app.get("/sum", (req, res) => {
//   const a = req.query.a;
//   const b = req.query.b;
//   res.send(parseInt(a)+parseInt(b));
// });


// app.post("/sum", (req, res) => {

//   const a = req.body.a;
//   const b = req.body.b;
//   res.send(parseInt(a)+parseInt(b));
// });

app.post("/sum", (req, res,next) => {

  const a = req.body.a;
  const b = req.body.b;
  res.send(parseInt(a)+parseInt(b));
});

// app.get("/sub", (req, res) => {
//   const a = req.query.a;
//   const b = req.query.b;
//   res.send(parseInt(a)-parseInt(b));
// });


app.post("/sub", (req, res) => {

  const a = req.body.a;
  const b = req.body.b;
  res.send(parseInt(a)-parseInt(b));
});


// app.get("/multiply", (req, res) => {
//   const a = req.query.a;
//   const b = req.query.b;
//   res.send(parseInt(a)*parseInt(b));
// });

app.post("/multiply", (req, res) => {

  const a = req.body.a;
  const b = req.body.b;
  res.send(parseInt(a)*parseInt(b));
});


// app.get("/divide", (req, res) => {
//   const a = req.query.a;
//   const b = req.query.b;
//   res.send(parseInt(a)/parseInt(b));
// });

app.post("/divide", (req, res) => {

  const a = req.body.a;
  const b = req.body.b;
  res.send(parseInt(a)/parseInt(b));
});

app.listen(3000,()=> {
  console.log("server is running");
})