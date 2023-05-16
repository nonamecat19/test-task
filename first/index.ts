import {SortFunctionOutput, Student} from "./types"

export const sortStudents = (students: Student[]): Student[] => {
    const compareFunction = (a: Student, b: Student): SortFunctionOutput => {
        if (a.grade < b.grade) {
            return 1
        }
        if (a.grade > b.grade) {
            return -1
        }
        if (a.age < b.age) {
            return 1
        }
        if (a.age > b.age) {
            return -1
        }
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1
        } else {
            return 1
        }
    }

    return students.sort(compareFunction)
}