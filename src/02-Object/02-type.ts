export type CityType = {
    title: string;
    houses: HouseType[];
    governmentBuildings: GovBuildingsType[],
    citizensNumber: number
}

export type GovBuildingsType = {
    type: string;
    budget: number;
    staffCount: number;
    address: GovAddressType
}

type GovAddressType = {
    street: StreetType
}

export type HouseType = {
    builtAt: number;
    repaired: boolean;
    address: AddressType
}

type AddressType = {
    number: number;
    street: StreetType
}

type StreetType = {
    title: string
}