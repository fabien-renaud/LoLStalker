const router = require('express').Router();
const https = require('https');

const championAPI = `https://euw1.api.riotgames.com/lol/static-data/v3/champions`;
const championDataURL = championId => 'https://euw1.api.riotgames.com/lol/static-data/v3/champions/' + championId;
const api_key = `?api_key=RGAPI-4bb340ac-8d0e-44d9-8759-be48eaf9aafd`;

router.get('/championList', (req, res) => {
  https.get(championAPI + api_key + '&tags=info&tags=image', hres => {
    let body = "";

    hres.on("data", data => {
      body += data;
    });

    hres.on("end", data => {
      res.send(JSON.parse(body));
    })
  });
});

router.get('/champion-data/:championId', (req, res) => {
  https.get(championDataURL(req.params.championId) + api_key, hres => {
    let body = "";

    hres.on("data", data => {
      body += data;
    })

    hres.on("end", data => {
      res.send(body);
    })
  })
});

module.exports = router;
