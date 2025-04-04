// Hallow Triangle star

// remember seed pattern -- first term 11 , second 21, third - 1211, fourth - 111221

    
function printPattern(n) {
    for (let i = 0; i < n; i++) {
        let row = " ".repeat(2 * (n - i - 1));

        for (let j = 0; j < 2 * i + 1; j++) {
            row += (i === n - 1 || j === 0 || j === 2 * i) ? "* " : "  ";
        }

        console.log(row.trimEnd()); 
    }
}

printPattern(7);