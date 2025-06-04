import { createListing, getAllCars, getAllGarages } from "$lib/db";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
    const cars = await getAllCars();
    const garages = await getAllGarages()
    return {
        cars,
        garages,
    }
}

export const actions = {
	default: async ({request}) => {
        const form = await request.formData()

        const listing = {
            car_id: form.get("car_id"),
            garage_id: form.get("garage_id"),
            kms: form.get("kms"),
            price: form.get("price"),
            condition: form.get("condition"),
            description: form.get("description"),
            date: new Date().toISOString().split("T")[0]
        }
        await createListing(listing)
        throw redirect(303, "/listings");
	}
};