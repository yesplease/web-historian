var path = require('path');
var fs = require('fs');
var httpHelp = require('./http-helpers');
var archive = require('../helpers/archive-helpers');
var request = require('http-request');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  if ( req.method === 'GET' ) {
    console.log("This is the request url", req.url);
    // if root path -> /index.html (response 301)

    //case 1: is it the root?
    if ( req.url === '/' ) {
      var urlPath = archive.paths.siteAssets + '/index.html';
      console.log("This is our urlPath", urlPath);
      fs.readFile(urlPath, function (err, data) {
        if (err) throw err;
        res.writeHead(200, httpHelp.headers);
        res.end(data);
      });
    }

    //case 2: is it for an archived site? (achives/sites)

    //case 3: is it for a site asset? (web/public)
    if ( req.url === '/index.html' ) {
      fs.readFile('./public/index.html', function (err, data) {
        if (err) throw err;
        res.writeHead(200, httpHelp.headers);
        res.end(data);
      });
    }
  }

  // res.end(archive.paths.list);
};
