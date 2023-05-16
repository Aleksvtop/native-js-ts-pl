
/*const courses = [
    {title: "CSS", price: 110},
    {title: "JS", price: 200},
    {title: "REACT", price: 150}
]*/

export const predicate = (age: number) => {
    return age > 90
}

type CourseType = {
    title: string,
    price: number
}

export const cheapPredicate = (course: CourseType) => {
    return course.price < 160
}
