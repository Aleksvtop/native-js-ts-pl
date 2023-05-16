import {CityType, GovBuildingsType, HouseType} from "../02-Object/02-type";


export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({id: new Date().getTime(), title: skill})
}

export const makeStudentActive = (st: StudentType) => {
    st.isActive = true
}

export const doesStudentLiveIn = (st: StudentType, city: string) => {
    return st.address.city.title === city
}

export const addMoneyToBudget = (building: GovBuildingsType, addBudget: number ) => {
    building.budget += addBudget
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true
}

export const toFireStaff = (govBuilding: GovBuildingsType, firedCount: number) => {
    govBuilding.staffCount -= firedCount
}

export const toHireStaff = (govBuilding: GovBuildingsType, hireCount: number) => {
    govBuilding.staffCount += hireCount
}

export const createMessage = (city: CityType) => {
    return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber} men`
}