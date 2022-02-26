const express = require('express');
const path = require('path');

const app = express();

const mainRouter = require('./routes/index')

// we need to tell the browser what  template engine we r using
app.set('view engine', 'ejs');


app.use(mainRouter);

// console.log(app.get('view engine'));
// i will o/p as ejs

// console.log(app.get('views'));

// ejs will fid in view folder

// app.set('views', path.resolve(__dirname) + '/mychoice');
// console.log(app.get('views'));
// i can also change name view to anything but by default it is views



// app.use(express.static('public'))

// app.get('/', (req, res) => {
//     res.render('index', {
//         title: 'my home page'
//     })
// });

// app.get('/download', (req, res) => {
//     res.render('about');
// });
// we can also download file using the above method

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname) + '/about.html');
});

// path module is used to send the files

app.listen(3000, function() {
    console.log('listening');
});