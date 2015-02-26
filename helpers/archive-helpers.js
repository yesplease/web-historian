var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var request = require('http-request');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSites' : path.join(__dirname, '../archives/sites'),
  'list' : path.join(__dirname, '../web/archives/sites.txt') //added web
};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfURLs = function(){
};

exports.isURLInList = function(url){
  var sites = fs.readFileSync(exports.paths.list, 'utf8');
  // console.log("Our boolean test result for contains: ", _.contains( sites.split('\n'), url ));
  return _.contains( sites.split('\n'), url )
};

exports.addURLToList = function(url){
  fs.appendFile(exports.paths.list, url+'\n','utf8', function(err){
    if (err) throw err;
    console.log('append like a BOSS!');
  });
};

exports.isURLArchived = function(){
};

exports.downloadURLs = function(){
};
