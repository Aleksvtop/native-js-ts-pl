import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student1: StudentType

beforeEach(() => {
    student1 = {
        id: 1,
        name: "Aleks",
        age: 38,
        isActive: false,
        address: {
            streetTitle: "Beletskogo 4",
            city: {
                title: "Minsk",
                country: "Belarus"
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "CSS"
            },
            {
                id: 3,
                title: "JS"
            }

        ]
    }
})

test("New skill should be added", () => {
    expect(student1.technologies.length).toBe(3)
    addSkill(student1, "React")
    expect(student1.technologies.length).toBe(4)
    expect(student1.technologies[0].title).toBe("HTML")
    expect(student1.technologies[3 ].title).toBe("React")
    expect(student1.technologies[3].id).toBeDefined()

})

test("Student should be active", () => {
    expect(student1.isActive).toBe(false)
    makeStudentActive(student1)
    expect(student1.isActive).toBe(true)
})

test("Does student live in city?", () => {
    let result1 = doesStudentLiveIn(student1, "Moscow")
    let result2 = doesStudentLiveIn(student1, "Minsk")
    expect(result1).toBe(false)
    expect(result2).toBe(true)
})