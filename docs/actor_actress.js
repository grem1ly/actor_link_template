

function get(url) {

  return new Promise(function(resolve, reject) {

    var req = new XMLHttpRequest();
    req.open("GET", url);

    req.onload = function() {
      if(req.status == 200) {
        resolve(req.response);
      }
      else {
        reject(Error(req.statusText));
      }
    };

    req.onerror = function() {
      reject(Error("Network Error"));
    };

    req.send();
  });
}

async function read_actor_file() {
  var actor_file = './actor_names.csv';
  var rawdata = await get(actor_file);
  var lines = rawdata.split("\n");
  var actors = lines.splice(1).map(function(line){ return line.replaceAll("\r", "").replaceAll("\"", "") });

  return actors;
}
