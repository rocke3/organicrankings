export default defineNuxtRouteMiddleware(async (to) => {
	// Routs That not required login
	const nologin = ["/", "/signin", "/signup", "/resetpassword", "/requstSignin", "/requstSignup", "/requstReset", "/loadcaptcha"];
	//Get Cookie from browser
	const cookie = useCookie("org_user");

	//if cookie not found
	// if (typeof cookie.value !== "undefined") {
	// 	console.log("Cokkie valid");
	// } else {
	// 	console.log("test");

	// 	if (!nologin.includes(to.path)) {
	// 		return navigateTo(`/signin`, { redirectCode: 301 });
	// 	}
	// }
});
