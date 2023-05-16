import { sortStudents } from './index'

describe('sortStudents', () => {
    it('main', () => {
        expect(sortStudents([
            { name: 'John', age: 21, grade: 90 },
            { name: 'Jane', age: 20, grade: 85 },
            { name: 'Alice', age: 22, grade: 90 },
            { name: 'Bob', age: 20, grade: 80 },
            { name: 'David', age: 21, grade: 85 }
        ])).toStrictEqual([
            { name: 'Alice', age: 22, grade: 90 },
            { name: 'John', age: 21, grade: 90 },
            { name: 'David', age: 21, grade: 85 },
            { name: 'Jane', age: 20, grade: 85 },
            { name: 'Bob', age: 20, grade: 80 }
        ])
    })

    it('by grade', () => {
        expect(sortStudents([
            { name: 'John', age: 20, grade: 90 },
            { name: 'John', age: 20, grade: 85 },
            { name: 'John', age: 20, grade: 90 },
            { name: 'John', age: 20, grade: 80 },
            { name: 'John', age: 20, grade: 85 }
        ])).toStrictEqual([
            { name: 'John', age: 20, grade: 90 },
            { name: 'John', age: 20, grade: 90 },
            { name: 'John', age: 20, grade: 85 },
            { name: 'John', age: 20, grade: 85 },
            { name: 'John', age: 20, grade: 80 },
        ])
    })

    it('similar grade, different age', () => {
        expect(sortStudents([
            { name: 'John', age: 26, grade: 90 },
            { name: 'John', age: 21, grade: 90 },
            { name: 'John', age: 29, grade: 90 },
            { name: 'John', age: 27, grade: 90 },
        ])).toStrictEqual([
            { name: 'John', age: 29, grade: 90 },
            { name: 'John', age: 27, grade: 90 },
            { name: 'John', age: 26, grade: 90 },
            { name: 'John', age: 21, grade: 90 },
        ])
    })

    it('similar grade and age, different name', () => {
        expect(sortStudents([
            { name: 'John', age: 26, grade: 90 },
            { name: 'bob', age: 26, grade: 90 },
            { name: 'Alice', age: 26, grade: 90 },
            { name: 'Jane', age: 26, grade: 90 },
            { name: 'David', age: 26, grade: 90 },
        ])).toStrictEqual([
            { name: 'Alice', age: 26, grade: 90 },
            { name: 'bob', age: 26, grade: 90 },
            { name: 'David', age: 26, grade: 90 },
            { name: 'Jane', age: 26, grade: 90 },
            { name: 'John', age: 26, grade: 90 },
        ])
    })
})
