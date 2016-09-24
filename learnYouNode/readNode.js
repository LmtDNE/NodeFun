var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, list) {
  if(err) throw err;
  list.filter( function(item){

    if(path.extname(item) === '.'+ process.argv[3].toString()){
      return true;
    }else {
      return false;
    }
  }).forEach(function(item) {
    console.log(item);
  });
});