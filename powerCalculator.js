const powerCalculator = (base, exp) => {
    if(exp < 0) {
        return "exponent should be >= 0"
    }
    if(exp === 0) {
        return 1;
    } else {
        return base * powerCalculator(base, (exp -1))
    }
}



console.log(powerCalculator(10, 12))