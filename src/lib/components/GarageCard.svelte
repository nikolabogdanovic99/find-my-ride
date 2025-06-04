<script>
	let { garage } = $props();
</script>

<div class="card mb-3 ms-5 me-5 mx-auto">
	<div class="row g-0">
		<div class="col-md-3">
			<img src="/{garage.image}" class="img-fluid rounded-start" alt="Car"/>
		</div>
		<div class="col-md-9">
			<div class="card-header fw-semibold"><h5>{garage.name}</h5></div>
			<div class="card-body">
				<div class="card-text">
					<div><b>Email:</b> {garage.email}</div>
					<div><b>Phone:</b> {garage.phone}</div>
					<div><b>Location:</b> {garage.location.city} - {garage.location.country}</div>
				</div>
				<a href="/garages/{garage._id}" class="stretched-link" aria-label="garage"></a>
			</div>
		</div>
	</div>
</div>
