import {CityType} from "../02-Object/02-type";
import {addMoneyToBudget, createMessage, repairHouse, toFireStaff, toHireStaff} from "./03";

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

test("Budget should be changed for Hospital", () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000)

    expect(city.governmentBuildings[0].budget).toBe(300000)
    expect(city.governmentBuildings[1].budget).toBe(500000)
})

test("Budget should be changed for Fire-station", () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000)

    expect(city.governmentBuildings[0].budget).toBe(200000)
    expect(city.governmentBuildings[1].budget).toBe(400000)
})

test("Houses should be destroyed", () => {
    repairHouse(city.houses[1])

    expect(city.houses[1].repaired).toBeTruthy()
})

test("staff should be decreased", () => {
    toFireStaff(city.governmentBuildings[0], 20)
    expect(city.governmentBuildings[0].staffCount).toBe(180)
})

test("Staff should be increased", () => {
    toHireStaff(city.governmentBuildings[0], 20)

    expect(city.governmentBuildings[0].staffCount).toBe(220)
})

test("Greeting message should be correct for city", () => {
    expect(createMessage(city)).toBe("Hello New York citizens. I want you be happy. All 1000000 men")
})