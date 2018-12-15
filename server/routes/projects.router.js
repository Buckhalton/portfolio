const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/api/projects', (req, res) => {
    const queryText = 'SELECT * FROM "projects" LEFT JOIN "tags" ON "projects".tag_id = "tags".id;';
    pool.query(queryText)
    .then(result => {
        res.send(result.rows);
    })
    .catch(error => {
        console.log('error on query:', error);
        res.sendStatus(500);
    })
})

router.post('/api/projects', (req, res) => {

})

router.delete('/api/projects/:id', (req, res) => {

})

module.exports = router;