

function submit1(){
    
    let my_cipher =  document.getElementById("number1").value;
    let my_keyword =  document.getElementById("number2").value;
    my_cipher=my_cipher.toUpperCase();
    my_keyword=my_keyword.toUpperCase();
    document.write("<b>step1: take input from user<br></b>");
    document.write("<br><b>Plaintext: ");
    document.write(my_cipher);document.write("</b>");
    document.write("<br><b>keyword: ");
    document.write(my_keyword);document.write("</b>");
    document .write("<br><br><br><b>step2: Generate keyword</b> <br>");
    document.write("<br>There are two cases to generate a keyword");
    document.write("<br><br>1. keyword > plaintext<br>Add the keyword again untill the generated keyword is not of same size as that of plaintext.");
    document.write("<br>Example:<br>plaintext: doreamon<br>keyword: lol<br>generated keyword: lollollo");
    document.write("<br><br>2. Keyword <  plaintext<br>Use the starting letters of keyword by calculating the size of plaintext.");
    document.write("<br>Example:<br>plaintext: raju<br>keyword:govind<br>generated keyword: govi      (ind will not be considered becuase palintext size is 4)");
    document.write("<br>");
    let key = generateKey(my_cipher,my_keyword);
    
    document .write("<b>Generated keyword: "); document.write(key+"</b> <br>");
    document.write("<b>step3: generate cipher text</b><br>");
    let cipher_text = cipherText(my_cipher,key);
    

    document.write("<br>Cipher text: "+ cipher_text + "<br><br>");
    // document.write("Plain text: "+ originalText(cipher_text, key)+"<br>");
    
    //functions start here
    
    function generateKey(str,key)
    {
        
        key=key.split("");
        if(str.length == key.length)
            return key.join("");
        else
        {
            let temp=key.length;   
            for (let i = 0;i<(str.length-temp) ; i++)
            {
                key.push(key[i % ((key).length)]);  
            }
        }
        return key.join("");
    }
    function cipherText(str,key)
    {
        let cipher_text="";
        for (let i = 0; i < str.length; i++)
        {
            // converting in range 0-25
            let x = (str[i].charCodeAt(0) + key[i].charCodeAt(0)) %26;
            // convert into alphabets(ASCII)
            x += 'A'.charCodeAt(0);
            document.write("E["+i+"] =  P["+i+"]+K["+i+"] 26 ="+String.fromCharCode(x)+"<br>");
            cipher_text+=String.fromCharCode(x);
            
            
        }
        return cipher_text;
    }
    function originalText(cipher_text,key)
    {
        let orig_text="";
        for (let i = 0 ; i < cipher_text.length ; i++)
        {
            // converting in range 0-25
            let x = (cipher_text[i].charCodeAt(0) -
                        key[i].charCodeAt(0) + 26) %26;
            // convert into alphabets(ASCII)
            x += 'A'.charCodeAt(0);
            orig_text+=String.fromCharCode(x);
        }
        return orig_text;
    }
}
//-------------------------------------------
// document.getElementById("screen1").innerHTML=my_cipher;
    //str=my_cipher
    //keyword=my_keyword
// let c = parseInt(a) + parseInt(b); 
    // to print on screen: document.getElementById("screen1").innerHTML=my_cipher;
    // document.write("plain text is:");