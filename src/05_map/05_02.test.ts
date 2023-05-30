import {CityType} from "../02-Object/02-type";
import exp from "constants";
import {getStreetsTitlesOfGovernmentBuildings, getStreetsTitlesOfHouses, greetingMessage} from "./05_02";

let city: CityType

beforeEach(() => {
        city = {
            title: "New York",
            houses: [
                {
                    builtAt: 2012, repaired: false,
                    address: {number: 100, street: {title: "White street"}}
                },
                {
                    builtAt: 2008, repaired: false,
                    address: {number: 100, street: {title: "Happy street"}}
                },
                {
                    builtAt: 2020, repaired: false,
                    address: {number: 101, street: {title: "Happy street"}}
                }
            ],
            governmentBuildings: [
                {
                    type: 'Hospital', budget: 200000, staffCount: 200,
                    address: {
                        street: {
                            title: "Central str"
                        }
                    }
                },
                {
                    type: "Fire-station", budget: 500000, staffCount: 1000,
                    address: {
                        street: {
                            title: "South str"
                        }
                    }
                }
            ],
            citizensNumber: 1000000
        }
    })

test("List of streets titles of governments buildings", () => {
    let streetsTitles = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings)

    expect(streetsTitles.length).toBe(2)
    expect(streetsTitles[0]).toBe("Central str")
    expect(streetsTitles[1]).toBe("South str")
})

test("List of streets titles", () => {
    let streets = getStreetsTitlesOfHouses(city.houses)

    expect(streets.length).toBe(3)
    expect(streets[0]).toBe("White street")
    expect(streets[1]).toBe("Happy street")
    expect(streets[2]).toBe("Happy street")
})

test("Create greeting messages for streets", () => {
    let message = greetingMessage(city.houses)

    expect(message.length).toBe(3)
    expect(message[0]).toBe("Hello people from White street!")
    expect(message[1]).toBe("Hello people from Happy street!")
    expect(message[2]).toBe("Hello people from Happy street!")
})