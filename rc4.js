/*
 * RC4 symmetric cipher encryption/decryption
 *
 * @license Public Domain
 * @param string key - secret key for encryption/decryption
 * @param string str - string to be encrypted/decrypted
 * @return string
 */
function rc4encrypt()
{
	let str = document.getElementById("PlainText").value;
	let key = document.getElementById("KeyWord").value;
	document.write("Plaintext entered by user is:"+str);
	document.write("<br>keyword entered by user is:"+key);
	rc4(key,str);
	
}

function rc4(key, str) {
	document.write("<br><b>Step 1: Key Scheduling algorithm</b>")
	document.write("<br>State matrix which we used to store and perform X-OR operations and modulus operarions on key<br>")
	var s = [], j = 0, x, res = '';
	for (var i = 0; i < 256; i++) {
		s[i] = i;
		// document.write("<br>S["+i+"]="+s[i]);
	}
	document.write("<br>Sheduling key for key k="+key +"<br>")
	for (i = 0; i < 256; i++) {
		j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;
		document.write(j+"   ")
		x = s[i];
		s[i] = s[j];
		s[j] = x;
	}
	i = 0;
	j = 0;
	document.write("<br>Stream generation:<br>")
	
	for (var y = 0; y < str.length; y++) {
		document.write("<br>iteraiton"+y+":<br>")
		document.write("i=("+i+"+1) % 256")
		i = (i + 1) % 256;
		document.write("<br>i="+i)
		j = (j + s[i]) % 256;
		x = s[i];
		s[i] = s[j];
		s[j] = x;
		document.write("<br>")
		res += String.fromCharCode(str.charCodeAt(y) ^ s[(s[i] + s[j]) % 256]);
	}
	document.write("encrypted text:"+res);
	return res;
}