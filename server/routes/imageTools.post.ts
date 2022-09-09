import imagemin from "imagemin";
import formidable from "formidable";
import { defineEventHandler, getHeader, readRawBody, setResponseHeader } from "h3";
import { Buffer } from "node:buffer";

export default defineEventHandler(async (event) => {
	const form = formidable();
	const req = event.req,
		res = event.res;

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
