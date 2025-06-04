<svelte:options runes={true} />

<script>
	import ListingCard from "$lib/components/ListingCard.svelte";

	let { data } = $props();
	const { listings } = data;
</script>

<div class="container py-4">
	<h2 class="mb-4 text-center fw-semibold">Available Listings</h2>

	{#each listings as listing}
		<ListingCard {listing} />
	{/each}
</div>
