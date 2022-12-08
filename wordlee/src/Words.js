import wordBank from "./wordleWordBank.txt";

export const boardDefault = [
    ["", "", "", "",""],
    ["", "", "", "",""],
    ["", "", "", "",""],
    ["", "", "", "",""],
    ["", "", "", "",""],
    ["", "", "", "",""],
];


export const generateWordSet = async () => {
    let wordSet;
    let todaysWord;

    // Using the fetch api to grab the words from the word bank file
    await fetch(wordBank)
        .then((response) => response.text())
        .then((result) => {
            const wordArr = result.split("\n")
            todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)]

            // Set is like an array, but you can't repeat values and there are no indexes
            // Very good data structure
            wordSet = new Set(wordArr);
        });

    return { wordSet, todaysWord };
};
