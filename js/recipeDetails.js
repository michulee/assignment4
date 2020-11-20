var url = window.location.href;
// console.log("url = " + url);
var x = breakUpURLParameters(url);
// console.log(x.search);

var h1 = document.createElement('h1');
h1.innerHTML = x.search["title"];
h1.style.textAlign = 'center';
document.body.appendChild(h1);

let fav = document.createElement('img');
if(document.cookie.includes(x.search['URL'])) {
  fav.setAttribute('src', 'icons/favorite_icon.png');
  fav.style.display = 'block';
  fav.style.margin = '0 auto';
  document.body.appendChild(fav);
} else {
  fav.setAttribute('src', 'icons/favorite_border_icon.png');
  fav.style.display = 'block';
  fav.style.margin = '0 auto';
  document.body.appendChild(fav);
}

var img = document.createElement('img');
img.setAttribute('src', 'img/' + x.search["URL"])
img.style.margin = 'auto';
img.style.display = 'block';
document.body.appendChild(img);

var desc = document.createElement('p');
desc.innerHTML = x.search["desc"];
desc.style.margin = 'auto';
desc.style.width = '730px';
document.body.appendChild(desc);

function breakUpURLParameters(url) {        //analyze and output the url parameters as a useful array to caller
  //  create a link in the DOM and set its href
  var link = document.createElement('a');
  link.setAttribute('href', url);

  // console.log("path variable is " + url);

  //  return an easy-to-use object that breaks apart the path
  return {
    host:     link.hostname,  //  'example.com'
    port:     link.port,      //  12345
    search:   mapMaker(link.search),  //  {startIndex: 1, pageSize: 10}
    path:     link.pathname,  //  '/blog/foo/bar'
    protocol: link.protocol   //  'http:'
  }
}

/**
 *  Convert search param string into an object or array
*  '?startIndex=1&pageSize=10' -> {startIndex: 1, pageSize: 10}
*/
function mapMaker(search, preserveDuplicates) {
//  option to preserve duplicate keys (e.g. 'sort=name&sort=age')
  preserveDuplicates = preserveDuplicates || false;  //  disabled by default

  var outputNoDupes = {};
  var returnableArray = [];  //  optional output array to preserve duplicate keys

  //  sanity check
  if(!search) throw new Error('mapMaker: your search input param is misformed?');

  //  remove ? character from your url (?foo=1&bar=2 -> 'foo=1&bar=2')
  search = search.split('?')[1];

  //  split apart your keys into a useful array of key/value pairs ('foo=1&bar=2' -> ['foo=1', 'bar=2'])
  search = search.split('&');

  //  separate keys from values (['foo=1', 'bar=2'] -> [{foo:1}, {bar:2}])
  //  then package as an array for your caller to use as variables
  returnableArray = search.map(function(keyval){
    var out = {};
    keyval = keyval.split('=');

    // decodeURI(str) to decode the '%20'
    out[keyval[0]] = decodeURI(keyval[1]);
    outputNoDupes[keyval[0]] = decodeURI(keyval[1]); //  might as well do the no-dupe work too while we're in the loop
    return out;
  });

  return (preserveDuplicates) ? returnableArray : outputNoDupes;
}