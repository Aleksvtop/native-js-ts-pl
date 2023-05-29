import {CityType, GovBuildingsType} from "../02-Object/02-type";

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(house => house.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen = (building: GovBuildingsType[], count: number) => {
    return building.filter( b => b.staffCount > count)
}