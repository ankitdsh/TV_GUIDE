const express = require('express')
const request = require('request');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const os = require('os');
const ifaces = os.networkInterfaces();

let EXTERNAL_IP = 'http://192.168.0.5'; // Change to your current network address
const PATH = 'http://ams-api.astro.com.my/ams/v3';
const API_ENDPOINTS = {
  'getChannelList': '/getChannelList',
  'getChannelDetails': '/getChannels',
  'getChannelTVGuide': '/getEvents',
}

app.use(cors())
app.use(bodyParser.json({ type: 'application/json' }))

// Utility for formatting the querystring
function formatQuery(reqQuery) {

  let queryString = '?'

  // Check for empty Object
  if (Object.keys(reqQuery).length === 0 && reqQuery.constructor === Object) {
    return ''
  }

  for (let query in reqQuery) {
    queryString += query + "=" + reqQuery[query] + "&"
  }
  return queryString.substr(0, queryString.length - 1)
}

Object.keys(ifaces).forEach(function(ifname) {
  var alias = 0;

  ifaces[ifname].forEach(function(iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }

    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      console.log(ifname + ':' + alias, iface.address);

    } else {
      // this interface has only one ipv4 adress
      console.log(ifname, iface.address);
      EXTERNAL_IP = "http://" + iface.address

      let text = 'Copy this External IP into your App\' config file:- ' + EXTERNAL_IP;
      console.log('\n\n\n')
      console.log('\x1b[33m%s\x1b[0m', text)
      console.log('\n\n\n')

    }
    ++alias;
  });
});

app.get('/getChannelList', function(req, res, next) {

  let requestAPI = PATH + API_ENDPOINTS['getChannelList'] + formatQuery(req.query)
  console.log('\n\n\n\n\n\nRequesting:- ', requestAPI)

  request(requestAPI, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('\n\n\n\n\n\nSuccessfully fetched:- ', requestAPI)
      res.json(body)
    }
  })
})
app.get('/getChannelDetails', function(req, res, next) {
  let requestAPI = PATH + API_ENDPOINTS['getChannelDetails'] + formatQuery(req.query)
  console.log('\n\n\n\n\n\nRequesting:- ', requestAPI)

  request(requestAPI, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('\n\n\n\n\n\nSuccessfully fetched:- ', requestAPI)
      res.json(body)
    }
  })
})
app.get('/getChannelTVGuide', function(req, res, next) {
  let requestAPI = PATH + API_ENDPOINTS['getChannelTVGuide'] + formatQuery(req.query)
  console.log('\n\n\n\n\n\nRequesting:- ', requestAPI)

  request(requestAPI, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('\n\n\n\n\n\nSuccessfully fetched:- ', requestAPI)
      res.json(body)
    }
  })
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
  console.log('Example app listening on port ' + EXTERNAL_IP + ':3000!')
  console.log('\n\nuse \'ifconfig\' on mac  OR \'ipconfig\' on Windows  for your current External IP Address ')
})
