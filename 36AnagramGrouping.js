// input = (['cat', 'act', "dog", "god, "tac])
// out = [["cat", "act", "tac"], ["dog", "god"]]

// input2 = (["listen", "silent", "enlist", "hello", "world"])

const anagramgrouping = (input) => {
    let anagramGroups = new Map();

    for(const item of input) {
        let sortedChars = item.split('').sort().join(''); 

        if(anagramGroups.has(sortedChars)) {
            anagramGroups.get(sortedChars).push(item);
        } else {
            anagramGroups.set(sortedChars, [item]);
        }
    }
    return Array.from(anagramGroups.values());
}


let abb = ['cat', 'act', 'dog', 'god', 'tac']
console.log(anagramgrouping(abb))