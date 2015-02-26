// eventually, you'll have some code here that uses the code in `archive-helpers.js`
// to actually download the urls you want to download.
var fs = require('fs');
// var path = require('path');
var archive = require('../helpers/archive-helpers');
var _ = require('underscore');
var request = require('http-request');

//know where list is
//check the list
//know position in list
//find the first new entry and fetch it
//store the site in our file system (archives)
//rinse repeat in a cron job outside here.

//for every site in sites.txt
  //check if we have already archived this site
    //yes: continue on
    //no: archive it! (call request.get)

// first way
// 1) readListofURLs
// 2) for every URL in list, isURLArchived
// 3) if no, keep track of no URLs
// 4) downloadURLs(of no URLs) fetches


request.get({
  url: 'http://localhost/get',
  progress: function (current, total) {
    console.log('downloaded %d bytes from %d', current, total);
  }
}, 'get.bin', function (err, res) {
  if (err) {
    console.error(err);
    return;
  }

  console.log(res.code, res.headers, res.file);
});
