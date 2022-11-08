import { defineEventHandler } from "h3";

export default defineEventHandler((event) => {
	var result = "";
	var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
});
