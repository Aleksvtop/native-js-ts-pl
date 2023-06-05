export type ManType = {
    name: string;
    age: number;
    lessons: LessonType[]
    address: {street: {title: string}}
}
type LessonType = {
    title: string
}

let man: ManType;

beforeEach(() => {
    man = {
        name: "Dimych",
        age: 32,
        lessons: [{title: "1"}, {title: "2"}],
        address: {street: {title: "Beleckogo str"}}
    }
})
test("", () => {

    /*const age = man.age
    const lessons = man.lessons*/
    const {age, lessons} = man

    expect(age).toBe(32)
    expect(lessons.length).toBe(2)
})