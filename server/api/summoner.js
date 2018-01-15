const router = require('express').Router();
const https = require('https');

const summonerURL = summonerName => `https://euw1.api.riotgames.com/lol/summoner/v3/summoners/by-name/` + summonerName;
const championMasteriesURL = summonerId => 'https://euw1.api.riotgames.com/lol/champion-mastery/v3/champion-masteries/by-summoner/' + summonerId;
const leagueURL = summonerId => 'https://euw1.api.riotgames.com/lol/league/v3/positions/by-summoner/' + summonerId;
const api_key = `?api_key=RGAPI-4bb340ac-8d0e-44d9-8759-be48eaf9aafd`;

router.get('/:name', (req, res) => {
  https.get(summonerURL(req.params.name) + api_key, hres => {
    let body = "";

    hres.on("data", data => {
      body += data;
    });

    hres.on("end", data => {
      res.send(body);
    })
  });
});

router.get('/champion-masteries/:summonerId', (req, res) => {
  https.get(championMasteriesURL(req.params.summonerId) + api_key, hres => {
    let body = "";

    hres.on("data", data => {
      body += data;
    })

    hres.on("end", data => {
      res.send(body);
    })
  });
});

router.get('/league/:summonerId', (req, res) => {
  https.get(leagueURL(req.params.summonerId) + api_key, hres => {
    let body = "";

    hres.on("data", data => {
      body += data;
    })

    hres.on("end", data => {
      res.send(body);
    })
  });
});

module.exports = router;
