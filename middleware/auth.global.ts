export default defineNuxtRouteMiddleware(async (to) => {
	// // Routs That not required login
	// const nologin = ["/", "/signin", "/signup", "/resetpassword"];
	// //Get Cookie from browser
	// const cookie = useCookie("org_user");
	// //if cookie not found
	// if (cookie.value === undefined || !cookie.value) {
	// 	if (!nologin.includes(to.path)) {
	// 		return navigateTo(`/signin?redirect=${to.path}`);
	// 	}
	// } else {
	// }
});
