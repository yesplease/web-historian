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
  'archivedSites' : path.join(__dirname, '../archives/sites'), //added web
  'list' : path.join(__dirname, '../archives/sites.txt') //added web
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
  //returns an array of all the URLs in sits.txt
  // console.log("This is our array of all sites: ", fs.readFileSync(exports.paths.list, 'utf8').split('\n'));
  return fs.readFileSync(exports.paths.list, 'utf8').split('\n');
};

exports.isURLInList = function(url){
  return _.contains( exports.readListOfURLs(), url );
};

exports.addURLToList = function(url){
  fs.appendFile(exports.paths.list, url+'\n','utf8', function(err){
    if (err) throw err;
    console.log('append like a BOSS!');
  });
};

exports.isURLArchived = function(url, callback){
  //read our file system to see if that asset has been added / completed
  //var sites = exports.readListofURLs();
  var fileDir = exports.paths.archivedSites + '/' + url;
  console.log("This is the file directory I'm looking for: ", fileDir);
  //if the file doesn't exist, the openSync method throws an exception.
  //How do we handle an exception here? Does it evaluate to false when
  //we try to open a file that doesn't exist?
  // fs.openSync(fileDir, 'r');



  fs.open(fileDir, 'r', function(err, fd){
    console.log("This is FD!: ", fd);
    console.log("We are in FS.open");

    // invoke callback(fd);
    callback(fd);
    }
  });
  // exports.paths.archivedSites
  // file name should be the queryURL


};

exports.downloadURLs = function(){

  //go over list and check if item in list has been archived before
    //if yes, read next item
    //if no, call htmlfetcher to go create that asset for us.
  var sites = exports.readListofURLs();
  return sites.split('\n');
};
