var path = require('path');
var fs = require('fs');
var httpHelp = require('./http-helpers');
var archive = require('../helpers/archive-helpers');
var request = require('http-request');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  var assetPath = archive.paths.siteAssets;

  if ( req.method === 'GET' ) {
    // console.log("This is the request url", req.url);
    //case 1: is it the root?
    // if so, serve it up (serveAssets)
    if ( req.url === '/' ) {
      assetPath += '/index.html';
      console.log("This is our urlPath", assetPath);
      fs.readFile(assetPath, function (err, data) {
        if (err) throw err;
        res.writeHead(200, httpHelp.headers);
        res.end(data);
      });
    }

    //look at incoming URL to determine if it is a valid archive query?
    //if yes,
    if ( req.url.substr(0, 6) === '/?url=' ) {
      // check if query site is in sites.txt
      var queryURL = req.url.substr(6);
      // console.log('valid query:', queryURL);
      console.log('is it in the list?', archive.isURLInList(queryURL) );

      if ( archive.isURLInList(queryURL) ) {
        //if yes:
          // serve it up (serveAssets)
          console.log('archive is in list!');
      }
        // if not
          // add to queue
          // archive.addURLToList()

          // serve up loading page (come back later)
    //if not, is it a site asset that we have (e.g. index.html)
    } else {
      //if it is, serve that up (serveAssets)
      //if not, serve up a 404!
    }

    //case 2: is it for a site asset? (web/public)
    // if so  (serveAssets)
      // assetPath +=  // plus our path

    if ( /* path exists */ true ) {
      fs.readFile('./public/index.html', function (err, data) {
        if (err) throw err;
        res.writeHead(200, httpHelp.headers);
        res.end(data);
      });
    }

    //case 3: is it for an archived site? (achives/sites)
    // /www.google.com ???

  }

  // res.end(archive.paths.list);
};
