const string = 'revers';

let revers = "";

let i = string.length - 1;

while (i >= 0) {
    revers += string[i];
    i--;
}

console.log("revers", revers);


