<script setup>
import axios from 'axios'
definePageMeta({ layout: "user-layout" });
useHead({ title: "Dashboard - Organic Rankings" });
let plans = ref({});

if (process.client) {
	axios.post('/getPlans')
		.then(function (res) {
			plans.value = res.data;
		}).catch((error) => {
			console.log(error);
		});
}

function subscribe(price) {
	axios.post('/sendToSubscriptin', { price: price })
		.then(async function (res) {
			let data = res.data;
			if (data) {
				window.location.href = data;
			}
		}).catch((error) => {
			console.log(error);
		});
}
</script>


<template>
	<div>
		<div class="row">
			<div class="col-xl-3 col-md-6" v-for="plan in plans">
				<div class="card mb-5 planBox">
					<div class="card-header p-3 pt-2 pb-2 bg-transparent">
						<div class="bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
							<h3 class="m-0 py-1 px-4 text-white">{{ plan.plan_name }}</h3>
						</div>
						<div class="text-end pt-2">
							<div class="mb-0 mt-4">
								<small class="float-start mt-2">Monthly</small>
								<h4>${{plan.plan_price}} USD</h4>
							</div>
						</div>
					</div>
					<hr class="horizontal my-0 dark">
					<div class="card-footer p-3">
						<h5 class="text-center">Requst can use</h5>
						<p class="mb-2 text-secondery text-sm font-weight-bolder text-center"
							:class="plan.plan_extra != 0 ? 'text-primary' : ''">
							{{plan.plan_extra == 0 ? "No extra benefits" : `Free ${plan.plan_extra} extra requst` }}
						</p>
						<p class="mb-1 text-success text-sm font-weight-bolder">
							HTML tools
							<span class="float-end">{{plan.plan_html}}
								<span class="text-primary" v-if="plan.plan_extra">+{{plan.plan_extra}}</span>
							</span>
						</p>
						<p class="mb-1 text-success text-sm font-weight-bolder">
							CSS tools
							<span class="float-end">{{plan.plan_css}}
								<span class="text-primary" v-if="plan.plan_extra">+{{plan.plan_extra}}</span>
							</span>
						</p>
						<p class="mb-1 text-success text-sm font-weight-bolder">
							JS tools
							<span class="float-end">{{plan.plan_js}}
								<span class="text-primary" v-if="plan.plan_extra">+{{plan.plan_extra}}</span>
							</span>
						</p>
						<p class="mb-1 text-success text-sm font-weight-bolder">
							Image
							<span class="float-end">{{plan.plan_image}}
								<span class="text-primary" v-if="plan.plan_extra">+{{plan.plan_extra}}</span>
							</span>
						</p>
						<div class="text-center mt-4">
							<button class="btn btn-primary" @click="subscribe(plan.plan_price_id)">Subscribe now</button>
						</div>
					</div>

				</div>
			</div>


		</div>
	</div>
</template>
		
		
<style scoped>
.planBox {
	max-width: 320px;
	margin: auto;
}
</style>
