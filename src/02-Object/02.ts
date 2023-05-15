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
console.log(student.technologies[1].title)