<script>
	let { data } = $props();

	const { cars, garages } = data;
</script>

<div class="container py-5">
	<h2 class="mb-4 text-center fw-semibold">Submit a Car Listing</h2>

	<form method="POST" class="card shadow p-4 bg-white mx-auto form-wrapper">
		<div class="row mb-3">
			<div class="col-md-6">
				<label for="vehicle" class="form-label">Car (Make & Model)</label>
				<select class="form-select" id="vehicle" name="car_id" required>
					<option value="">Select a vehicle</option>
					{#each cars as car}
						<option value={car._id}>{car.make} - {car.model}</option>
					{/each}
				</select>
			</div>
			<div class="col-md-6">
				<label for="garage" class="form-label">Garage</label>
				<select class="form-select" id="garage" name="garage_id" required>
					<option value="">Select a garage</option>
					{#each garages as garage}
						<option value={garage._id}>{garage.name}</option>
					{/each}
				</select>
			</div>
		</div>

		<div class="row mb-3">
			<div class="col-md-6">
				<label for="kms" class="form-label">Kilometers</label>
				<input type="number" class="form-control" id="kms" name="kms" required />
			</div>
			<div class="col-md-6">
				<label for="price" class="form-label">Price (CHF)</label>
				<input type="number" class="form-control" id="price" name="price" required />
			</div>
		</div>

		<div class="mb-3">
			<label for="condition" class="form-label">Condition</label>
			<select class="form-select" id="condition" name="condition" required>
				<option value="">Select...</option>
				<option value="new">New</option>
				<option value="used">Used</option>
				<option value="broken">Broken</option>
			</select>
		</div>

		<div class="mb-4">
			<label for="description" class="form-label">Description</label>
			<textarea class="form-control" id="description" name="description" rows="4"></textarea>
		</div>

		<div class="d-grid">
			<button type="submit" class="btn btn-primary btn-lg">Submit Listing</button>
		</div>
	</form>
</div>

<style>
	.form-wrapper {
		max-width: 800px;
	}
</style>
