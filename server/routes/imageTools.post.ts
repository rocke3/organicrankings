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

		const outImg = await imagemin([image.filepath]);

		console.log(outImg[0].data);
	});
});

// export default async (req, res, next) => {
// 	console.log(req);
// };
