module.exports = function check(str, bracketsConfig) {
    let arr = [];
    let openBrackets = [];
    let closeBrackets = [];

    bracketsConfig.forEach((item) => {
        openBrackets.push(item[0]);
        closeBrackets.push(item[1]);
    });

    for (let i = 0; i < str.length; i++) {
        if (closeBrackets.includes(str[i]) && arr.length !== 0) {
            let pairBracket = openBrackets[closeBrackets.indexOf(str[i])];
            if (
                arr[arr.length - 1] === pairBracket ||
                arr[arr.length - 1] === str[i]
            ) {
                arr.pop();
            } else if (str[i] !== pairBracket) {
                return false;
            } else {
                arr.push(str[i]);
            }
        } else {
            arr.push(str[i]);
        }
    }
    return arr.length === 0;
};
