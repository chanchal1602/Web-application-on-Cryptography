function RSA() 
        {
            var gcd, p, q, no, n, t, e, i, x;
            gcd = function (a, b) { return (!b) ? a : gcd(b, a % b); };
            p = document.getElementById('p').value;
            q = document.getElementById('q').value;
            no = document.getElementById('msg').value;
            document.write("inputted prime numbers p and q are,")
            document.write("<br>p: "+p);
            document.write("<br>q: "+p);
            document.write("<br>Higher the prime numbers hard is the code to break.")
            n = p * q;
            document.write("<br>pubic key(n)<br>where,<br> n=p*q<br>n="+p+"*"+q+"<br>n="+n)
            t = (p - 1) * (q - 1);
            document.write("<br><br>Euler's totient function:<br>φ(n)=(p-1)*(q-1)<br>φ(n)=("+p+"-1)*("+q+"-1)<br>φ(n)="+t);
            document.write("<br>To find e, where 1 < e < φ(n) must be satisfied.")
            
            for (e = 2; e < t; e++) 
            {
                if (gcd(e, t) == 1) 
                {
                    break;
                }
            }
            for (i = 0; i < 10; i++) 
            {
                x = 1 + i * t
                if (x % e == 0) 
                {
                    d = x / e;
                    break;
                }
            }
            document.write("<br>Exponent is,<br>e: "+e)
            ctt = Math.pow(no, e).toFixed(0);
            ct = ctt % n;
            dtt = Math.pow(ct, d).toFixed(0);
            dt = dtt % n;
            document.write("<br>private key is:"+d)
            document.write("<br>private key:<br>d="+d)
            document.write("<br>Cipher text:<br>ct="+ct)
            
            // document.getElementById('publickey(N)').innerHTML = n;
            // document.getElementById('phi_of_n').innerHTML = t;
            // document.getElementById('exponent(e)').innerHTML = e;
            // document.getElementById('privatekey(d)').innerHTML = d;
            // document.getElementById('ciphertext(ct)').innerHTML = ct;
        }