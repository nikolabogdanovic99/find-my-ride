import { MongoClient, ObjectId } from "mongodb";
import { DB_URI } from "$env/static/private";


const client = new MongoClient(DB_URI);
const database = client.db("find-my-ride");

export async function getAllListings() {
    try {
        const listingsCol = database.collection("listings");
        const listings = await listingsCol.find({}).toArray();
        const res = listings.map(l => {
            return {
                ...l,
                _id: l._id.toString(),
                garage: {
                    ...l.garage,
                    _id: l.garage._id.toString(),
                },
                car: {
                    ...l.car,
                    _id: l.car._id.toString(),
                }
            }
        })
        return res;
    } catch (e) {
        console.log(e)
        return [];
    }
}

export async function getListing(id) {
    try {
        const listingsCol = database.collection("listings");
        let listing = await listingsCol.findOne({ _id: ObjectId.createFromHexString(id) });
        const res = {
            ...listing,
            _id: listing._id.toString(),
            garage: {
                ...listing.garage,
                _id: listing.garage._id.toString(),
            },
            car: {
                ...listing.car,
                _id: listing.car._id.toString(),
            }
        }
        return res;
    } catch (e) {
        console.log(e)
        return null;
    }
}

export async function deleteListing(id) {
    try {
        const listingsCol = database.collection("listings");
        await listingsCol.deleteOne({ _id: ObjectId.createFromHexString(id) })
    } catch (e) {
        console.log(e)
    }
}

export async function getAllListingsOfGarage(garageId) {
    try {
        const listingsCol = database.collection("listings");
        const listings = await listingsCol.find({
            "garage._id": ObjectId.createFromHexString(garageId)
        }).toArray();
        const res = listings.map(l => {
            return {
                ...l,
                _id: l._id.toString(),
                garage: {
                    ...l.garage,
                    _id: l.garage._id.toString(),
                },
                car: {
                    ...l.car,
                    _id: l.car._id.toString(),
                }
            }
        })
        return res;
    } catch (e) {
        console.log(e)
        return [];
    }
}

export async function getAllGarages() {
    try {
        const garagesCol = database.collection("garages");
        const listings = await garagesCol.find({}).toArray();
        const res = listings.map(g => {
            return {
                ...g,
                _id: g._id.toString(),
            }
        })
        return res;
    } catch (e) {
        console.log(e)
        return [];
    }
}

export async function getGarage(id) {
    try {
        const garageCol = database.collection("garages");
        const garage = await garageCol.findOne({ _id: ObjectId.createFromHexString(id) });
        const res = {
            ...garage,
            _id: garage._id.toString(),
        }
        return res;
    } catch (e) {
        console.log(e)
        return null;
    }
}

export async function getAllCars() {
    try {
        const carsCol = database.collection("cars");
        const cars = await carsCol.find({}).sort({ make: 1, model: 1 }).toArray();
        const res = cars.map(c => {
            return {
                ...c,
                _id: c._id.toString(),
            }
        })
        return res;
    } catch (e) {
        console.log(e)
        return [];
    }
}

export async function getCar(id) {
    try {
        const listingsCol = database.collection("cars");
        let listing = await listingsCol.findOne({ _id: ObjectId.createFromHexString(id) });
        const res = {
            ...listing,
            _id: listing._id.toString()
        }
        return res;
    } catch (e) {
        console.log(e)
        return null;
    }
}

export async function createListing(listing) {
    try {
        const car = await getCar(listing.car_id);
        const garage = await getGarage(listing.garage_id);
        
        delete listing.car_id;
        delete listing.garage_id;

        let ins = {
            car: {
                ...car,
                _id: ObjectId.createFromHexString(car._id)
            },
            garage: {
                ...garage,
                _id: ObjectId.createFromHexString(garage._id)
            },
            ...listing
        }
        const listingsCol = database.collection("listings");
        await listingsCol.insertOne(ins)
    } catch (e) {
        console.log(e)
    }
}