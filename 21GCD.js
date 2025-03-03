// The Greatest Common Divisor (GCD) of two numbers is the largest positive integer that divides both numbers without leaving a remainder.
// For example, let's find the GCD of 12 and 18:
// List the factors of 12: 1, 2, 3, 4, 6, 12.
// List the factors of 18: 1, 2, 3, 6, 9, 18.
// Identify the largest common factor: In this case, it's 6.
// So, GCD(12, 18) = 6. This means 6 is the greatest number that can evenly divide both 12 and 18.
// Write a function to calculate the GCD of two numbers.
// Output: 6



// Recursive

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

console.log(gcd(12, 18))

/* --------------------------------------------------------*/
// Brute force

gcdBruteForce = (a, b) => {
    let gcd = 1;
    for (let i = 1; i <= Math.min(a, b); i++) {
      if (a % i === 0 && b % i === 0) {
        gcd = i;
      }
    }
    return gcd;
  }

/* ============================================ */
  const getFactors = (num) => {
    let factors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    return factors;
};

const findGCD = (a, b) => {
    let firstFactors = getFactors(a);
    let secondFactors = getFactors(b);

    let commonFactors = firstFactors.filter(factor => secondFactors.includes(factor));
    console.log(commonFactors)
    return Math.max(...commonFactors);
};

console.log(findGCD(12, 18));


