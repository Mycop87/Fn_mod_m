var Big = require('big.js');

var stdin = process.openStdin();
stdin.addListener("data", function(d) {

var arr = d.toString().split(' '); 
var arrFib 			= [0,1];
var fibonachiNamber = Big(arr[0]);
var divider 		= +arr[1];
var counter 		= 0;

	for(var i=2; i < divider*6; ++i){
		arrFib.push((arrFib[i-1] + arrFib[i-2]) % divider);
		++counter;
		
		if ((arrFib[i] === 1) & (arrFib[i-1] === 0)) {
			break;
		}
	}
	console.log((arrFib[(fibonachiNamber.mod(counter))]).toString());
 }); 
