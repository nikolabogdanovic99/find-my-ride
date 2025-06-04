import { redirect } from "@sveltejs/kit";
import { deleteListing, getListing } from "$lib/db";

export async function load({ params }) {
	const listing = await getListing(params.id);
	return {
		listing
	}
}


export const actions = {
	default: async ({request}) => {
		const form = await request.formData()
		const listingId = form.get("listing_id");
		await deleteListing(listingId);
		throw redirect(303, "/listings");
	}
};