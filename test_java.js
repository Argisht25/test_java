//Write a JavaScript program to check whether a string starts with 'Java' and false otherwise
function test(x) {
    if (x.length < 4) {
        return false
    }
    let m = x.substring(0, 4)
    return m === "java"
}
