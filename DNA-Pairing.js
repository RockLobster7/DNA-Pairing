/*
DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

//AT TA CG GC

function pairElement(str) {

    var arr = [];

    for (var i = 0; i < str.length; i++) {
        arr[i] = [str[i]];

       if (arr[i] == "G") arr[i].push("C");
       if (arr[i] == "C") arr[i].push("G");
       if (arr[i] == "A") arr[i].push("T");
       if (arr[i] == "T") arr[i].push("A");
    }
    return arr;
}

console.log(pairElement("GCG")); //should return [["G", "C"], ["C","G"],["G", "C"]]
console.log(pairElement("ATCGA")); // should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
console.log(pairElement("TTGAG")); // should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
console.log(pairElement("CTCTA")); // should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].