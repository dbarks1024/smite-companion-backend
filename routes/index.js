const express = require('express');
const router = express.Router();
const rp = require('request-promise');
const md5 = require('md5');
const { currentTime, createSignature } = require('../helper/helper');

/* GET home page. */
router.get('/', function(req, res) {
  const method = 'createsession';
  const url =  `http://api.realmroyale.com/realmapi.svc/${method}JSON/${process.env.DEV_ID}/${createSignature(method)}/${currentTime()}`;
  
  rp(url)
  .then((response) => {
    return JSON.parse(response);
  })
  .then((response) => {
    res.json(response);
  })
  .catch((error) => {
    console.log(error);
  });

});

module.exports = router;
