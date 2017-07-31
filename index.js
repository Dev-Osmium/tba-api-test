var request = require('request');
var fs = require('fs');
var options = {
  url: 'https://thebluealliance.com/api/v3/team/frc4905',
  headers: {
    'X-TBA-Auth-Key': 'VT4PglwnxS1z7NI9X8fsSNWhktlbneQ2vgm3ZagANHwwgdPDE7Nr1aJH6BttXvu8 '
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log('It Worked!');
  }
}

request(options,callback).pipe(fs.createWriteStream('frc4905.json'));
console.log(request(options,callback));
