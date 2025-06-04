<svelte:options runes={true} />

<script>
	import ListingCard from "$lib/components/ListingCard.svelte";
	import { formatDate, formatDistance, formatPrice } from "$lib/util.js";

	let { data } = $props();
	const { garage, listings } = data;
</script>

<div class="container py-5">
	<div class="mx-auto mb-4">
		<a href="/garages" class="btn btn-secondary"><i class="fa-solid fa-arrow-left"></i> Back to Garages</a>
	</div>

	<div class="card shadow mb-5 mx-auto">
		<img src="/{garage.image}" alt={garage.name} class="img-fluid rounded-top garage-banner" />

		<div class="card-body">
			<h2 class="card-title mb-3">{garage.name}</h2>

			<div class="row mb-4">
				<div class="col-md-6">
					<p>
						<span class="fw-semibold">Email:</span>
						<a href="mailto:{garage.email}">{garage.email}</a>
					</p>
					<p><span class="fw-semibold">Phone:</span> {garage.phone}</p>
				</div>
				<div class="col-md-6">
					<p>
						<span class="fw-semibold">Location:</span>
						{garage.location.city}, {garage.location.country}
					</p>
				</div>
			</div>

			<hr />

			<h4 class="mb-3">Listings from {garage.name}</h4>

			<div class="d-flex flex-column gap-4">
				{#each listings as listing}
					<ListingCard {listing} />
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.garage-banner {
		width: 100%;
		max-height: 350px;
		object-fit: contain;
		background-color: white;

	}
</style>
