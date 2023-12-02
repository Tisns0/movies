const express = require('express')
const app = express()
const port = 5000
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
const Article = require("./models/articleSchema")


//تشغيل تلقي
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));

const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/index");
  }, 100);
})


///// mongose
const mongoose = require('mongoose');
const { CLIENT_RENEG_LIMIT } = require('tls')

mongoose
  .connect(
    "mongodb+srv://Rash1:jpoWyAMPML1GculY@cluster0.3ypgv9t.mongodb.net/all-data?retryWrites=true&w=majority"

  )



  .then((result) => {
    app.listen(port, () => {
      console.log(`Example app listening https://tisns0.github.io/movies/:${port}`)
    })
  })
  .catch((err) => { console.log(err) });











app.get('/', (req, res) => {

  res.redirect("/movies")
});

app.get("/movies", (req, res) => {

  Article.find()
  .then((result) => { res.render('movies', { arrArticle: result });
})
  .catch((err) => {console.log(err)});
});


app.get("/addnwe-article", (req, res) => {

  res.render('addnwe-article')
}
);


app.get("/post-article", (req, res) => {

  res.render('post-article')
}
);


app.get("/post-article", (req, res) => {

  res.render('post-article')
}
);


app.get("/WFSTAFF", (req, res) => {

  res.render('WFSTAFF')
}
);


app.get("/staff-login", (req, res) => {

  res.render('staff-login')
}
);


app.get("/contract", (req, res) => {

  res.render('contract')
}


);
app.get("/shop", (req, res) => {

  res.render('shop')
}
);


app.get("/movies", (req, res) => {

  res.render('movies')
}
);

app.get("/vddd", (req, res) => {

  res.render('vddd')
}
);






app.post("/WFESPORT", (req, res) => {
  const article = new Article(req.body);

  //console.log(req.body)

  article
    .save()
    .then((result) => { res.redirect("/WFESPORT"); })
    .catch((err) => { consoarticlele.log(err) })

})



app.post("/Contract", (req, res) => {
  const article = new Article(req.body);

  //console.log(req.body)

  article
    .save()
    .then((result) => { res.redirect("/WFESPORT"); })
    .catch((err) => { console.log(err) })

})


app.post("/post-article", (req, res) => {
  const article = new Article(req.body);

  //console.log(req.body)

  article
    .save()
    .then((result) => { res.redirect("/WFESPORT"); })
    .catch((err) => { console.log(err) })

})


app.post("/staff-login", (req, res) => {
  const article = new Article(req.body);

  //console.log(req.body)

  article
    .save()
    .then((result) => { res.redirect("/WFESPORT"); })
    .catch((err) => { console.log(err) })

})


//404 خطاء
app.use((req, res,) => {
  res.status(404).send("Sorry can't find that!")
});










