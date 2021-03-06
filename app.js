/**
 * @param {string[]} strs
 * @return {string}
 */

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["fl", "flo"]));
console.log(longestCommonPrefix(["fl"]));

function longestCommonPrefix(strs) {
    let prefix = "";
    if (strs && strs[0]) {
        // get shortest string length
        let minLen = strs[0].length;
        if (strs.length > 1) {
            minLen = strs.reduce((minLen, str) => {return minLen < str.length ? minLen : str.length});
        };
        for (let i = 0; i < minLen; i++) {
            // get the first char in the first item
            let char = strs[0][i];
            // check if that char is the same in all strings
            for (let item = 0; item < strs.length; item++) {
                if (strs[item][i] != char) {  
                    return prefix                
                };
            };
            prefix += char;
        };
    };
    return prefix; 
};
