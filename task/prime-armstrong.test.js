const {isArmstrong, isPrime} = require('./prime-armstrong');

test('testCase1' , () => {
    expect(isArmstrong(1634)).toBe(true);
});

test('testCase2' , () => {
    expect(isArmstrong(153)).toBe(true);
});

test('testCase3' , () => {
    expect(isArmstrong(100)).toBe(false);
});

test('testCase4' , () => {
    expect(isArmstrong(5)).toBe(true);
});

test('testCase5' , () => {
    expect(isPrime(17)).toBe(true);
});

test('testCase6' , () => {
    expect(isPrime(157)).toBe(true);
});

test('testCase7' , () => {
    expect(isPrime(1)).toBe(false);
});

test('testCase8' , () => {
    expect(isPrime(0)).toBe(false);
});