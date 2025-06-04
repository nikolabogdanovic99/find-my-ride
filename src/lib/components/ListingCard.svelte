<script>
	import { formatDistance, formatPrice } from "$lib/util";

	let { listing } = $props();

	const priceFormat = formatPrice(listing.price);
	const kmsFormat = formatDistance(listing.kms);
</script>

<div class="card mb-3 ms-5 me-5 mx-auto">
	<div class="row g-0">
		<div class="col-md-4">
			<img src="/{listing.car.image}" class="img-fluid rounded-start" alt="Car" />
		</div>
		<div class="col-md-8">
			<div class="card-header fw-semibold">
				<h5>{listing.car.make} {listing.car.model} - {priceFormat}</h5>
			</div>
			<div class="card-body">
				<div class="card-text">
					<div><b>Kilometers driven:</b> {kmsFormat}</div>
					<div><b>Fuel:</b> {listing.car.fuel}</div>
					<div><b>Condition:</b> {listing.condition}</div>
					<div><b>Year:</b> {listing.car.year}</div>
					<div><b>Transmission:</b> {listing.car.transmission}</div>
				</div>
				<a href="/listings/{listing._id}" class="stretched-link" aria-label="listing"></a>
			</div>
		</div>
	</div>
</div>
