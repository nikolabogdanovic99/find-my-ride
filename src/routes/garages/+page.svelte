<script>
	import GarageCard from "$lib/components/GarageCard.svelte";

	let { data } = $props();
	const { garages } = data;
</script>

<div class="container py-4">
	<h2 class="mb-4 text-center fw-semibold">Our Garages</h2>

	{#each garages as garage}
		<GarageCard {garage} />
	{/each}
</div>
