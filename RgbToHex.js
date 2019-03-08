/*
	Author: Feenks
	Description: Null.
*/

class RgbToHex {
	function rgb2hex(red, green, blue) {
    var rgb = blue | (green << 8) | (red << 16);
    return '#' + (0x1000000 + rgb).toString(16).slice(1)
}

function hex2rgb(hex) {
    // long version
    r = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
    if (r) {
            return r.slice(1,4).map(function(x) { return parseInt(x, 16); });
    }
    // short version
    r = hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);
    if (r) {
            return r.slice(1,4).map(function(x) { return 0x11 * parseInt(x, 16); });
    }
    return null;
  }
  
  //Example
  var rgb = [value, value1, value2]
  var hex = rgb2hex(rgb[0], rgb[1], rgb[2]);
  
  console.log(hex2rgb(hex).join(', '));
}