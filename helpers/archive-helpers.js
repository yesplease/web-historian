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
  'list' : path.join(__dirname, '../archives/sites.txt')
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
  // url = "'"+url+"'";
  return fs.readFile(exports.paths.list, 'utf8', function(err, data){
    if (err) throw err;
    // console.log(data.split('\n'));
    // console.log("url to string after splitting: ", data.split('\n'), ['www.facebook.com'], url);
    console.log( 'www.facebook.com' === data.split('\n')[2] );

    return _.contains( testdata, url);
  });
};

exports.addURLToList = function(){
};

exports.isURLArchived = function(){
};

exports.downloadURLs = function(){
};
