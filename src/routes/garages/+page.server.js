import { getAllGarages } from "$lib/db";

export async function load({ params }) {
	const garages = await getAllGarages();
	return {
		garages
	}
}