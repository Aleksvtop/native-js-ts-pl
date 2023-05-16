import {cheapPredicate, predicate} from "./04";

test("Should take old men older then 90", () => {
    const ages = [18, 20, 22, 1, 100, 90, 14]
    const oldAges = ages.filter(predicate)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test("Should take cheap courses", () => {
    const courses = [
        {title: "CSS", price: 110},
        {title: "JS", price: 200},
        {title: "REACT", price: 150}
        ]
    const cheapCourses = courses.filter(cheapPredicate)
    expect(cheapCourses.length).toBe(2)
    expect(cheapCourses[0].price).toBe(110)
    expect(cheapCourses[1].price).toBe(150)
})