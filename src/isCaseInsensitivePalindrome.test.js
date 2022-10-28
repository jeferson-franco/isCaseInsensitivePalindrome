const solution = require('./isCaseInsensitivePalindrome.js');

test('test 1', () => {
    expect(solution('AaBaa')).toBe(true);
});

test('test 2', () => {
    expect(solution('abac')).toBe(false);
});

test('test 3', () => {
    expect(solution('aBACaba')).toBe(true);
});

test('test 4', () => {
    expect(solution('opOP')).toBe(false);
});

test('test 5', () => {
    expect(solution('ZZzzazZzz')).toBe(true);
});

test('test 6', () => {
    expect(solution('zzzzazzzz')).toBe(true);
});

test('test 7', () => {
    expect(solution('ZZzzabzZzz')).toBe(false);
});

test('test 8', () => {
    expect(solution('abcdcbA')).toBe(true);
});

test('test 9', () => {
    expect(solution('abracabra')).toBe(false);
});

test('test 10', () => {
    expect(solution('abcd')).toBe(false);
});
