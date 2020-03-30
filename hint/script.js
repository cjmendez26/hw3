document.getElementById("generate").addEventListener("click", generatePassword);

function generator(){
    var num = '0, 1, 2, 3, 4, 5, 6, 7, 8, 9';
    var abcs = 'a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z';
    var specialChar = '!, @, #, $, %, ^, &, *, (, ), _, -, +, =, {, [, }, ], <, >, ?, /, ~';

    for(var i=0; i<length; i++) {
        // generate a random character from (num, abcs, or specialChar) 
        // to add to the generated password
    }
}

function generatePassword() {
    var length = document.getElementById("length").value;
    generator();
}
