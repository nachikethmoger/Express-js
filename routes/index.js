const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'my home page'
    })
});

router.get('/download', (req, res) => {
    res.render('about');
});

module.exports = router;