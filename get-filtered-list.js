const fs = require('fs');
const path = require('path');

module.exports = function (directory, extension, callback){ 
   fs.readdir(directory, function(err, files){
     if (err) return callback(err);
      let filteredList = files.filter(function(file){
        return extension === path.extname(file).substr(1);
      });
      callback(null, filteredList);
   });
}