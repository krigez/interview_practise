// Write a function that counts the number of words in a sentence.

// Input: "Hello, how are you today?"
// Expected Output: 5

WordsCount = (sentence) => {
    let count = 0;
    sentence.split(" ").forEach(word => {
        if (word !== "") {
            count++;
        }
    });
    return count;
}

console.log(WordsCount("Hello, how are you today?")); // 5