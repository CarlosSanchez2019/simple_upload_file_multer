const express = require('express');
const multer = require('multer')
const app = express();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname + '/public/upload')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+file.originalname)
    }
  })
var upload = multer({ storage: storage })

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname + '/public'));


app.post('/upload', upload.single('image'), (req, res) => {
    const image = req.file
    console.log(image)
    res.redirect('/')
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

//Run app, then load http://localhost:3000 in a browser to see the output.