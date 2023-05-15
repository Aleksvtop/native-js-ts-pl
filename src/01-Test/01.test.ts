import {mult, sum} from "./01";

test('Sum of two numbers should be correct', () => {
    const a = 5
    const b = 6
    const c = 11
    const res1 = sum(a, b)
    const res2 = sum(a, c)
    expect(res1).toBe(11)
    expect(res2).toBe(16)
})

test('Multiply of two numbers should be correct', () => {
    const a = 4
    const b = 6
    const c = 8
    const res1 = mult(a, b)
    const res2 = mult(a, c)
    expect(res1).toBe(24)
    expect(res2).toBe(32)
})