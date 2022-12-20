<script setup lang="ts">


</script>

<template>
	<div class="userNav shadow mb-4">
		<nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur"
			data-scroll="true">
			<div class="container-fluid py-1 px-0">

				<nav aria-label="breadcrumb">
					<h6 class="font-weight-bolder mb-0">Dashboard</h6>
				</nav>
				<div class="collapse navbar-collapse mt-sm-0 me-md-0 me-sm-4" id="navbar">
					<ul class="navbar-nav ms-md-auto justify-content-end">
						<li class="nav-item ps-3 d-flex align-items-center">
							<ElementsDarkToggle />
						</li>

					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>

<style scoped>
.userNav {
	background-color: #fff !important;
}

.dark-version .userNav {
	background-color: #202940 !important;
	box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%),
		0 1px 5px 0 rgb(0 0 0 / 12%);
}

#navbarBlur {
	background: transparent !important;
}

.navbar .sidenav-toggler-inner .sidenav-toggler-line {
	height: 3px;
}

@media (max-width: 1199.98px) {
	#navbarBlur {
		padding-left: 15px !important;
	}
}
</style>
