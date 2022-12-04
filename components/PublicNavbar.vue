<template>
	<div class="container position-sticky z-index-sticky top-0">
		<div class="row">
			<div class="col-12">
				<!-- Navbar -->
				<nav
					class="navbar navbar-expand-lg blur border-radius-xl top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
					<div class="container-fluid ps-2 pe-0">
						<a class="navbar-brand font-weight-bolder ms-lg-0 ms-3" href="/user">
							OrganicRankings.com
						</a>
						<button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse"
							data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false"
							aria-label="Toggle navigation">
							<span class="navbar-toggler-icon mt-2">
								<span class="navbar-toggler-bar bar1"></span>
								<span class="navbar-toggler-bar bar2"></span>
								<span class="navbar-toggler-bar bar3"></span>
							</span>
						</button>
						<div class="collapse navbar-collapse justify-content-end publicNav" id="navigation">
							<ul class="navbar-nav">
								<li class="nav-item">
									<NuxtLink to="/signin" class="nav-link me-2" no-rel>
										<i class="material-icons">fingerprint</i>
										<span class="nav-link-text ms-1">Sign in</span>
									</NuxtLink>
								</li>
								<li class="nav-item">
									<NuxtLink to="/signup" class="nav-link me-2" no-rel>
										<i class="material-icons">person_add</i>
										<span class="nav-link-text ms-1">Sign up</span>
									</NuxtLink>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				<!-- End Navbar -->
			</div>
		</div>
	</div>
</template>

<style scoped>
.material-icons {
	vertical-align: middle;
	font-size: 20px;
}

.nav-link-text {
	font-size: 15px;
}

.material-icons,
.nav-link-text {
	transition: 0.3s all;
}

.nav-item:hover * {
	color: #007c9d;
}
</style>
