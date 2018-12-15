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
    const project = req.body;
    const queryText = 'INSERT INTO "projects" ("name", "description", "website", "github", "date_completed", "tag_id") ' +
    'VALUES ($1, $2, $3, $4, $5, $6);';
    pool.query(queryText, [project.name, project.description, project.website, project.github, project.date_completed, project.tag_id])
    .then(result => {
        res.sendStatus(200);
    })
    .catch(error => {
        console.log('error in post', error);
        res.sendStatus(500);
    })
})

router.delete('/api/projects/:id', (req, res) => {
    const id = req.params.id;
    const queryText = 'DELETE FROM "projects" WHERE id =$1;';
    pool.query(queryText, [id])
    .then(result => {
        res.sendStatus(202);
    })
    .catch(error => {
        console.log('error in delete', error);
        res.sendStatus(500);
    })
})

module.exports = router;