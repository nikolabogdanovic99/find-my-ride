<script>
	import { formatDate, formatDistance, formatPrice } from "$lib/util.js";

	let { data } = $props();
	const { listing } = data;

	const car = listing.car;
	const garage = listing.garage;
	const price = formatPrice(listing.price);
	const kms = formatDistance(listing.kms);
	const date = formatDate(listing.date);

	let audioSound = $state();

	if (car._id === "683cbae7946b73a8bdcb377a") {
		audioSound = "/xfilestheme.mp3";
	} else if (car._id === "683cbae7946b73a8bdcb377b") {
		audioSound = "/batman.mp3";
	} else if (car._id === "683cbae7946b73a8bdcb377c") {
		audioSound = "/backtothefuture.mp3";
	}
</script>

<div class="container py-5">
	<div class="mx-auto mb-4">
		<a href="/listings" class="btn btn-secondary"><i class="fa-solid fa-arrow-left"></i> Back to Listings</a>
	</div>

	<div class="card shadow mb-5 mx-auto">
		<img src="/{car.image}" alt="Car" class="img-fluid rounded-top car-image" />

		<div class="card-body">
			<div class="d-flex justify-content-between">
				<h2 class="card-title mb-4">{car.make} {car.model} – {price}</h2>
				<form method="POST">
					<input type="hidden" class="form-control" name="listing_id" value="{listing._id}"/>
					<button class="btn btn-outline-danger" type="submit"><i class="fa-solid fa-trash"></i> Delete Listing</button>
				</form>
			</div>

			<div class="row mb-4">
				<div class="col-md-6">
					<p><span class="fw-semibold">Kilometers:</span> {kms}</p>
					<p class="text-capitalize">
						<span class="fw-semibold">Fuel Type:</span>
						{car.fuel}
					</p>
					<p class="text-capitalize">
						<span class="fw-semibold">Transmission:</span>
						{car.transmission}
					</p>
				</div>
				<div class="col-md-6">
					<p class="text-capitalize">
						<span class="fw-semibold">Condition:</span>
						{listing.condition}
					</p>
					<p><span class="fw-semibold">Year:</span> {car.year}</p>
					<p><span class="fw-semibold">Posted on:</span> {date}</p>
				</div>
			</div>

			<div class="mb-4">
				<h5 class="fw-semibold">Description</h5>
				<p>{listing.description}</p>
			</div>

			<audio src={audioSound} preload="metadata" autoplay></audio>

			<div class="bg-light rounded p-4 d-flex flex-wrap align-items-center gap-4 position-relative">
				<a href="/garages/{garage._id}" class="stretched-link" aria-label="garage"></a>
				<div class="col-md-4">
					<img src="/{garage.image}" alt="Garage" class="img-fluid rounded garage-image" />
				</div>
				<div class="col-md-7">
					<h5 class="mb-3">Listed by Garage</h5>
					<p><span class="fw-semibold">Name:</span> {garage.name}</p>
					<p>
						<span class="fw-semibold">Email:</span>
						<a href="mailto:{garage.email}">{garage.email}</a>
					</p>
					<p><span class="fw-semibold">Phone:</span> {garage.phone}</p>
					<p>
						<span class="fw-semibold">Location:</span>
						{garage.location.city}, {garage.location.country}
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.car-image {
		width: 100%;
		max-height: 400px;
		object-fit: contain;
		background-color: white;
	}

	.garage-image {
		height: 180px;
		object-fit: cover;
	}
</style>
