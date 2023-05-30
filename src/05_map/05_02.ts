import {GovBuildingsType, HouseType} from "../02-Object/02-type";

export const getStreetsTitlesOfGovernmentBuildings = (governmentBuildings: GovBuildingsType[]) => {
    return governmentBuildings.map(building => building.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: HouseType[]) => {
    return houses.map(house => house.address.street.title)
}

export const greetingMessage = (street: HouseType[]) => {
    return street.map(str => `Hello people from ${str.address.street.title}!`)
}