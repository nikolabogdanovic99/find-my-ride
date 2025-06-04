import { getAllListings } from "$lib/db";

export async function load({ params }) {
	const listings = await getAllListings();
	return {
		listings
	}
}