import { defineEventHandler, readBody } from "h3";

export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	const email = body.email;
	const confemail = body.confemail;

	//Validate
	if (!email.match(/^([\w-\.]{2,4})+@([\w-]{2,4})+\.+[\w-]{2,4}$/) || !confemail.match(/^([\w-\.]{2,4})+@([\w-]{2,4})+\.+[\w-]{2,4}$/) || email != confemail) {
		return { login: false, message: "Invalid Email" };
	}

	if (email && confemail && email == confemail) {
		return { login: false, message: "Email or Password dosen't match " };
	} else {
		return { login: false, message: "Email or Password dosen't match " };
	}
	return { login: false, message: "Something went wrong please try again later" };
});
