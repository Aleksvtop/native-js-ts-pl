type StudentType = {
    id: number,
    name: string,
    age: number,
    isActive: boolean,
    address: AddressType
    technologies: TechnologiesType[]
}

type AddressType = {
    streetTitle: string,
    city: LocalCityType
}

type LocalCityType = {
    title: string,
    country: string
}

type TechnologiesType = {
    id: number,
    title: string
}

const student: StudentType = {
    id: 1,
    name: "Aleks",
    age: 38,
    isActive: true,
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

const student1: StudentType = {
    id: 2,
    name: "Victor",
    age: 42,
    isActive: true,
    address: {
        streetTitle: "Gromova 6",
        city: {
            title: "Minsk",
            country: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "React"
        },
        {
            id: 2,
            title: "HTML"
        },
        {
            id: 3,
            title: "JS"
        }
    ]
}
console.log(student.technologies[1].title)
console.log(student1.technologies[0].title)

type CarType = {
    mark: string,
    class: string,
    isNew: boolean,
    regNumber: number,
    regAddress: RegAddressType,
    options: OptionsType[]
}

type RegAddressType = {
    country: string,
    city: string
}

type OptionsType = {
    id: number,
    value: string
}

const car: CarType = {
    mark: "Audi",
    class: "S",
    isNew: true,
    regNumber: 666546,
    regAddress: {
        country: "Belarus",
        city: "Minsk"
    },
    options: [
        {
            id:1,
            value: "4matic"
        },
        {
            id:2,
            value: "xenon"
        },
        {
            id:3,
            value: "loudMusic"
        }
    ]
}

console.log(car.isNew)
console.log(car.options[2].value)