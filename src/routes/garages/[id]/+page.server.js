import { getAllListingsOfGarage, getGarage } from "$lib/db";

export async function load({ params }) {
	const garage = await getGarage(params.id);
	const listings = await getAllListingsOfGarage(params.id)
	return {
		garage,
		listings
	}
}