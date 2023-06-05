type UsersType = {
    [key: string] : {id: number, name: string}
}
export const users: UsersType = {
    "101": {id: 101, name: "Dimych"},
    "1212": {id: 1212, name: "Natasha"},
    "32356": {id: 32356, name: "Valera"},
    "1": {id: 1, name: "Katya"}
}

let user = {id: 100500, name: "Igor"}
users[user.id] = user