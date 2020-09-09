/**
 * @param {string[]} strs
 * @return {string}
 */

console.log(longestCommonPrefix(["flower","flow","flight"]));

function longestCommonPrefix(strs) {
    let prefix = "";
    // get shortest string length
    let minLen = strs[0].length;
    minLen = strs.reduce((minLen, str) => {return minLen < str.length ? minLen : str.length});
    // console.log(minLen);

    for (let i = 0; i < minLen; i++) {
        // get the first char in the first item
        let char = strs[0][i];
        
        // check if that char is the same in all strings
        for (let item = 0; item < strs.length; item++) {
            if (strs[item][i] != char) {  
                return prefix                
            };
        };

        // console.log(prefix);
        prefix += char;
    };
    return prefix; 
};
