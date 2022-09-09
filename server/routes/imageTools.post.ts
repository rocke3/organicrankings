import imagemin from "imagemin";
import formidable from "formidable";
import { defineEventHandler } from "h3";

export default defineEventHandler(async (event) => {
	const form = formidable();
	const req = event.req,
		res = event.res;
	console.log("in");

	form.parse(req, async (err, fields, files) => {
		const fileInfo = JSON.parse(JSON.stringify(files));
		const image = fileInfo.maxImg[0];

		console.log(err);
		console.log(image);
	});
	//const outImg = await imagemin([image.filepath]);
});

// export default async (req, res, next) => {
// 	console.log(req);
// };
