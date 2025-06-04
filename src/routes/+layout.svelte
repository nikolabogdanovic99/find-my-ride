<script>
	let { children } = $props();
</script>

<div class="vh-100 d-flex flex-column">
	<nav class="navbar navbar-expand-lg bg-body-tertiary">
		<div class="container-fluid">
			<a class="navbar-brand" href="/">Find My Ride</a>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<a class="nav-link" href="/listings">Listings</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/garages">Garages</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/sell">Sell</a>
					</li>
				</ul>
				<div class="d-flex">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="/about">About Us</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>

	<div class="bg-bright p-4 rounded flex-fill">
		{@render children()}
	</div>
</div>
