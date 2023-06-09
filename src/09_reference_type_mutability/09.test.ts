const increaseAge = (u: UserType) => {
    u.age++
}

type UserType = {
    name: string;
    age: number
    address: {title: string}
}

test('Reference type test', () => {
    let user: UserType = {
        name: "Aleks",
        age: 38,
        address: {
            title: "Minsk"
        }
    }
    increaseAge(user)

    expect(user.age).toBe(39)

    const superman = user
    superman.age = 1000
    expect(user.age).toBe(1000)
})

test("Array test", () => {
    let users: UserType[] = [
        {
            name: "Dimych",
            age: 33,
            address: {
                title: "Minsk"
            }
        },
        {
            name: "Aleks",
            age: 38,
            address: {
                title: "Minsk"
            }
        }
    ]

    let admins = users
    admins.push({name: "Vasya", age: 44, address: {title: "Minsk"}})
    expect(users.length).toBe(3)
    expect(users[2]).toEqual({name: "Vasya", age: 44})
})

test("Value type test", () => {
    let usersCount = 100

    let adminsCount = usersCount

    adminsCount++
    expect(usersCount).toBe(100)
    expect(adminsCount).toBe(101)
})

test("Reference type 2 test", () => {
    let user: UserType = {
        name: "Aleks",
        age: 38,
        address: {
            title: "Minsk"
        }
    }

    let user1: UserType = {
        name: "Misha",
        age: 30,
        address: user.address
    }

    user1.address.title = "Kiev"

    expect(user.address.title).toBe("Kiev")
    expect(user.address).toBe(user1.address)

})

