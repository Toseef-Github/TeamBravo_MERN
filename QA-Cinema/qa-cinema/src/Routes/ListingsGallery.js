// import express and then use router
const express = require('express');
const router = express.Router();

// Routers to specific actions

// GET all films
router.get('/', (req, res) => {
    res.json({mssg: 'GET all films'})
});

// GET single film
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET single film'})
});