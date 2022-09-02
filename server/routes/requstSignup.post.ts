import md5 from "md5";

export default defineEventHandler(async (req) => {
	const body = await useBody(req);
	const email = body.email;
	const pass = body.password;
	const confpass = body.confpass;

	//Validate
	if (email == "" || !email.match(/^([\w-\.]{2,4})+@([\w-]{2,4})+\.+[\w-]{2,4}$/)) {
		return { signup: false, message: "Invalid Email" };
	} else if (pass == "" || pass.length < 6 || confpass == "" || confpass.length < 6) {
		return { signup: false, message: "Invalid Password" };
	} else {
		try {
			
			return { signup: true };
		} catch (e) {
			return { signup: false };
		}
	}
});
