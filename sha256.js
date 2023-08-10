function encrypt()
{

    var txt = document.getElementById("txt").value;
    document.write("Massage Text : ");
    document.write(txt,"<br><br>");
    
    document.write("In Binary : <br>");

    function textToBin(msg) {
        var length = msg.length,
            output = [];
        for (var i = 0;i < length; i++) {
          var bin = msg[i].charCodeAt().toString(2);
          output.push(Array(8-bin.length+1).join("0") + bin);
        } 
        return output.join(" ");
    }
    var msg = textToBin(txt);
    msg = msg.replace(/ /g, "");
    document.write(msg,"<br><br>");


    var lmsg = msg.length;
    document.write("Length of Massage = ",lmsg,"<br><br>");


    var output = [];
    bin = msg.length.toString(2);
    output.push(Array(8-bin.length+1).join("0") + bin);
    document.write("In Binary = ",output.join(" "),"<br><br>");
    

    msg = msg + 1;
    document.write("<br>Append 1 bit<br>"+msg+"<br><br>");
    document.write(msg.match(/.{1,8}/g));

    
    function addzero(msg)
    {
        return msg.padEnd(448,'0');
    }
    msg = addzero(msg);
    document.write("<br><br>Append 0's until data is a multiple of 512, less 64 bits <br>"+msg+"<br><br>");
    document.write(msg.match(/.{1,8}/g));


    // function block(msg) {
    //     document.write("8-bit<br>");
    //     var output = [];
    //     for (var i = 0;i < msg.length; i++) {
    //         output.push(Array(8-msg.length+1).join("0")) + msg;
    //       } 
    //       document.write("8-bit<br>");
    //     return output.join(" ");
    // }
    //msg = block(msg);



    document.write("<br><br>Length in binary : ",output.join(" "),"<br><br>");

    function addlen(msg)
    {
        return msg.padStart(64,'0');
    }
    
    output = addlen(output.join(" "));
    document.write(" 64 bit of length to append <br>"+output+"<br><br>");
    document.write(output.match(/.{1,8}/g));

    
    var newmsg = msg + output;
    document.write("<br><br>Preprocessed Massage is : <br>",newmsg);
    document.write("<br>",newmsg.match(/.{1,8}/g));

    document.write("<br><br>Now we have to initinalize the 8 hash values constants that represents first 32-bits of the fractional part of square root of first 8 prime numbers.");
    document.write("<br>i.e : 2, 3, 5, 7, 11, 13, 17 and 19.<br><br>");
    // var arrs = [2,3,5,7,11,13,17,19];
    // for(let i = 0; i<arrs.length;i++)
    // {
    //     n = Math.sqrt(arrs[i]).toString(16);
    //     document.write("h",[i]," = ",n,"<br>");
    // }

    //var ishash = ["01101010000010011110011001100111","10111011011001111010111010000101","00111100011011101111001101110010","10100101010011111111010100111010","01010001000011100101001001111111","10011011000001010110100010001100","00011111100000111101100110101011","01011011111000001100110100011001"];
    
    var ishash = ["6a09e667","bb67ae85","3c6ef372","a54ff53a","510e527f","9b05688c","1f83d9ab","5be0cd19"];

    for(let i = 0; i<ishash.length;i++)
    {
        ishash[i] = parseInt(ishash[i],16).toString(2);
        var output = [];
        output.push(Array(32-ishash[i].length+1).join("0") + ishash[i]);
        ishash[i] = output.join(" ");
        document.write("h",[i]," = ",ishash[i],"<br>");
    }

    document.write("<br>Now, We are creating some constants. This time, there are 64 of them. Each value (0-63) is the first 32 bits of the fractional parts of the cube roots of the first 64 primes (2 - 311).<br><br>")
    
    //var ichash = ["01000010100010100010111110011000","01110001001101110100010010010001","10110101110000001111101111001111","11101001101101011101101110100101","00111001010101101100001001011011","01011001111100010001000111110001","10010010001111111000001010100100","10101011000111000101111011010101","11011000000001111010101010011000","00010010100000110101101100000001","00100100001100011000010110111110","01010101000011000111110111000011","01110010101111100101110101110100","10000000110111101011000111111110","10011011110111000000011010100111","11000001100110111111000101110100","11100100100110110110100111000001","11101111101111100100011110000110","00001111110000011001110111000110","00100100000011001010000111001100","00101101111010010010110001101111","01001010011101001000010010101010","01011100101100001010100111011100","01110110111110011000100011011010","10011000001111100101000101010010","10101000001100011100011001101101","10110000000000110010011111001000","10111111010110010111111111000111","11000110111000000000101111110011","11010101101001111001000101000111","00000110110010100110001101010001","00010100001010010010100101100111","00100111101101110000101010000101","00101110000110110010000100111000","01001101001011000110110111111100","01010011001110000000110100010011","01100101000010100111001101010100","01110110011010100000101010111011","10000001110000101100100100101110","10010010011100100010110010000101","10100010101111111110100010100001","10101000000110100110011001001011","11000010010010111000101101110000","11000111011011000101000110100011","11010001100100101110100000011001","11010110100110010000011000100100","11110100000011100011010110000101","00010000011010101010000001110000","00011001101001001100000100010110","00011110001101110110110000001000","00100111010010000111011101001100","00110100101100001011110010110101","00111001000111000000110010110011","01001110110110001010101001001010","01011011100111001100101001001111","01101000001011100110111111110011","01110100100011111000001011101110","01111000101001010110001101101111","10000100110010000111100000010100","10001100110001110000001000001000","10010000101111101111111111111010","10100100010100000110110011101011","10111110111110011010001111110111","11000110011100010111100011110010"];
    
    var ichash = ["428a2f98", "71374491", "b5c0fbcf", "e9b5dba5", "3956c25b", "59f111f1", "923f82a4", "ab1c5ed5", "d807aa98", "12835b01", "243185be", "550c7dc3", "72be5d74", "80deb1fe", "9bdc06a7", "c19bf174", "e49b69c1", "efbe4786", "0fc19dc6", "240ca1cc", "2de92c6f", "4a7484aa", "5cb0a9dc", "76f988da", "983e5152", "a831c66d", "b00327c8", "bf597fc7", "c6e00bf3", "d5a79147", "06ca6351", "14292967", "27b70a85", "2e1b2138", "4d2c6dfc", "53380d13", "650a7354", "766a0abb", "81c2c92e", "92722c85", "a2bfe8a1", "a81a664b", "c24b8b70", "c76c51a3", "d192e819", "d6990624", "f40e3585", "106aa070", "19a4c116", "1e376c08", "2748774c", "34b0bcb5", "391c0cb3", "4ed8aa4a", "5b9cca4f", "682e6ff3", "748f82ee", "78a5636f", "84c87814", "8cc70208", "90befffa", "a4506ceb", "bef9a3f7", "c67178f2"];
    for(let i = 0; i<ichash.length;i++)
    {
        ichash[i] = parseInt(ichash[i],16).toString(2);
        var output = [];
        output.push(Array(32-ichash[i].length+1).join("0") + ichash[i]);
        document.write("h",[i]," = ",output.join(" "),"<br>");
    }


    document.write("<br><br> Creating 64 words : <br>First 16 words are as it is from the preprocessed massage : <br>")
    
    //document.write("<br>",newmsg.match(/.{1,32}/g),"<br><br>");
    
    var word = new Array;
    word = newmsg.match(/.{1,32}/g);

    for(let i = 0;i<16;i++)
    {
        document.write(i," - ",word[i],"<br>");
    }

    //document.write("<br><br>Over")
    //console.log(word);

    // function rightRotate( n, d)
    // {
    //     a = (n >>> d)|((n << (32 - d)));
    //     return a.toString(2);
    // }


    function rightrotate(str, d)
    {
        d = str.length - d;
        var ans = str.substring(d, str.length) + str.substring(0, d);
        return ans;
    }

    // function rightrotate(arr,n)
    // {
    //     arr = arr.split(" ");
    //     for(let i = 0;i<n;i++)
    //     {
    //         arr.unshift(arr.pop());
    //     }
    //     return arr;
    // }


    function RightRotate(a, k)
    {   
        for (let i = 0; i < k; i++) {
            a.unshift(a.pop());
        }
      
        return a.join(""); 
    }


    function shift(word,n)
    {
        var s = (parseInt(word,2) >>> n).toString(2);
        var ss = [];
        ss.push(Array(32-s.length+1).join("0") + s);
        return ss.join(" ");
    }

    function xor(a, b){
        let ans = "";    
            // Loop to iterate over the
            // Binary Strings
            for (let i = 0; i < 32; i++)
            {
                // If the Character matches
                if (a[i] == b[i])
                    ans += "0";
                else
                    ans += "1";
            }
            return ans;
    }
    
    //var add = function(a, b, c, d) {
    //    var dec = Number(parseInt(a, 2)) + Number(parseInt(b, 2)) + Number(parseInt(c, 2)) + Number(parseInt(d, 2));
    //    return dec.toString(2);
    //};

    var add = function(a, b) {
        var dec = Number(parseInt(a, 2)) + Number(parseInt(b, 2));
        return dec.toString(2);
    };


    function admd(a,b){
        var result = "",
            carry = 0
        while(a || b || carry){
          let sum = +a.slice(-1) + +b.slice(-1) + carry // get last digit from each number and sum 
          if( sum > 1 ){  
            result = sum%2 + result
            carry = 1
          }
          else{
            result = sum + result
            carry = 0
          }
          // trim last digit (110 -> 11)
          a = a.slice(0, -1)
          b = b.slice(0, -1)
        }
        return result
      }

    document.write("<br>To generate the rest 48 words we use a combination of previous words : <br>");
    document.write("wi = w(i-16) + s0 (w(i-15)) + w(i-7) + s1 (w(i-2))");
    document.write("<br><br>Here s0 (wi) and s1 (wi) are calculated as follows : <br>");
    document.write("s0 (w(i-15)) = (w(i-15) >>> 7) xor (w(i-15) >>> 18) xor (w(i-15) >> 3)");
    document.write("<br>s1 (w(i-2)) = (w(i-2) >>> 17) xor (w(i-2) >>> 19) xor (w(i-2) >> 10)");
    document.write("<br> >>> means right rotation (circular shift of bits when bits are removed from the end of the word and prepended to the beginning), ");
    document.write("<br> >>> means right shift (last bits are removed, zeros are prepended)."); 
    document.write("<br>For example ");
    document.write("<br>10011101 >>> 2 = 01100111");
    document.write("<br>10011101 >> 2 = 00100111 <br>");
   
    var words = [];
    for(let i = 16; i<=63 ;i++)
    {   
        //document.write("<br>",i,"  ",rightrotate(word[i-15],7).toString(2),"<br>");
        //document.write("<br>",i,"  ",rightrotate(word[i-15],18),"<br>");
        //document.write("<br>",i,"  ",shift(word[i-15],3),"<br>")
        
        var s0 = xor(rightrotate(word[i-15],7), rightrotate(word[i-15],18));
        s0 = xor(s0,shift(word[i-15],3));
        
        //document.write("<br>",i,"  ",s0,"<br>");

        //document.write("<br>",i,"  ",rightrotate(word[i-2],17),"<br>");
        //document.write("<br>",i,"  ",rightrotate(word[i-2],19),"<br>");
        //document.write("<br>",i,"  ",shift(word[i-2],10),"<br>")

        var s1 = xor(rightrotate(word[i-2],17),rightrotate(word[i-2],19));
        s1 = xor(s1,shift(word[i-2],10));
        //document.write("<br>",i,"  ",s0,"<br>");

        word[i] = add(s0,word[i-16]);
        word[i] = add(word[i],word[i-7]);
        word[i] = add(word[i],s1);
        var n = word[i].length;
        //document.write("<br>",n," ");
        if(n>32)
        {
            m=n-32;
            word[i] = word[i].slice(m,n);
        }

        words[i] = word[i] % 4294967296;
        document.write("<br>",i," - ",word[i],"");
        //document.write("<br>",i," - ",words[i],"<br>");
    }

    var arr = [ a = ishash[0],
                b = ishash[1],
                c = ishash[2],
                d = ishash[3],
                e = ishash[4],
                f = ishash[5],
                g = ishash[6],
                h = ishash[7]];

    // for(let i = 0;i<8;i++)
    // {
    //     document.write("<br><br>",arr[i]);
    // }

    for(let i = 0;i<64;i++)
    {
        var S1 = xor(rightrotate(e,6),rightrotate(e,11));
        //document.write("<br>",a);
        S1 = xor(S1,rightrotate(e,25));
        ch = xor((e & f),((~e) & g));
        temp1 = add(h,S1);
        temp1 = add(temp1,ch);
        temp1 = add(temp1,ichash[i]);
        temp1 = add(temp1,word[i]);
        var S0 = xor(rightrotate(a,2),rightrotate(a,13));
        S0 = xor(S0,rightrotate(a,22));
        maj = xor((a & b),(a & c));
        maj = xor(maj,(b & c));
        temp2 = add(S0,maj);



        var n = temp1.length;
        //document.write("<br>",n," ");
        if(n>32)
        {
            m=n-32;
            temp1 = temp1.slice(m,n);
        }

        var p = temp2.length;
        //document.write("<br>",n," ");
        if(p>32)
        {
            q=p-32;
            temp2 = temp2.slice(q,p);
        }

        h = g
        g = f
        f = e
        e = add(d,temp1);
        d = c
        c = b
        b = a
        a = add(temp1, temp2);
        
        var arrr = [a, b, c, d, e, f, g, h];

        for(let i=0;i<8;i++)
        {
            var n = arrr[i].length;
            if(n>32)
            {
                m=n-32;
                arrr[i] = arrr[i].slice(m,n);
            }
        }

        //document.write("<br>S1 = ",S1,"<br>ch = ",ch,"<br>temp1 = ",temp1,"<br>S0 = ",S0,"<br>maj = ",maj,"<br>temp2 = ",temp2);
        document.write("<br><br>Round - ",i,"<br>a = ",a,"<br>b = ",b,"<br>c = ",c,"<br>d = ",d,"<br>e = ",e,"<br>f = ",f,"<br>g = ",g,"<br>h = ",h);
    }

    document.write("<br><br> Now, for the final hash value we have to add the initial 8 hashes and the final ones :  <br>i.e. ");

    document.write("<br><br>h0 = h0 + a = ",ishash[0]," + ",arrr[0]);
    document.write("<br>h1 = h1 + b = ",ishash[1]," + ",arrr[1]);
    document.write("<br>h2 = h2 + c = ",ishash[2]," + ",arrr[2]);
    document.write("<br>h3 = h3 + d = ",ishash[3]," + ",arrr[3]);
    document.write("<br>h4 = h4 + e = ",ishash[4]," + ",arrr[4]);
    document.write("<br>h5 = h5 + f = ",ishash[5]," + ",arrr[5]);
    document.write("<br>h6 = h6 + g = ",ishash[6]," + ",arrr[6]);
    document.write("<br>h7 = h7 + h = ",ishash[7]," + ",arrr[7]);


    var modhash = new Array;
    modhash = ["h0","h1","h2","h3","h4","h5","h6","h7"];
    for(let i=0;i<8;i++)
    {
        modhash[i] = add(ishash[i],arrr[i]);
    }

    for(let i=0;i<8;i++)
        {
            var n = modhash[i].length;
            if(n>32)
            {
                m=n-32;
                modhash[i] = modhash[i].slice(m,n);
            }
        }


    document.write("<br><br>h0 = ",modhash[0]);//,"  =>  ",parseInt(modhash[0], 2).toString(16));    
    document.write("<br>h1 = ",modhash[1]);//,"  =>  ",parseInt(modhash[1], 2).toString(16));
    document.write("<br>h2 = ",modhash[2]);//,"  =>  ",parseInt(modhash[2], 2).toString(16));
    document.write("<br>h3 = ",modhash[3]);//,"  =>  ",parseInt(modhash[3], 2).toString(16));
    document.write("<br>h4 = ",modhash[4]);//,"  =>  ",parseInt(modhash[4], 2).toString(16));
    document.write("<br>h5 = ",modhash[5]);//,"  =>  ",parseInt(modhash[5], 2).toString(16));
    document.write("<br>h6 = ",modhash[6]);//,"  =>  ",parseInt(modhash[6], 2).toString(16));
    document.write("<br>h7 = ",modhash[7]);//,"  =>  ",parseInt(modhash[7], 2).toString(16));

    document.write("<br><br>After converting it to Hexadecimal and appending them we will get our final hash value");

    var fhash = modhash.join("");
    document.write("<br><br>",fhash);

    for(let i = 0;i<8;i++)
    {
        modhash[i] = parseInt(modhash[i], 2).toString(16);
    }

    //var hex = parseInt(fhash, 2).toString(16);
    document.write("<br><br>Hash = ",modhash.join(""));





    













   

}











