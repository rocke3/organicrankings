import imagemin from "imagemin";
//import formidable from "formidable";
import { IncomingForm } from "formidable";
import { defineEventHandler } from "h3";

export default defineEventHandler(async (event) => {
	const form = new IncomingForm();
	const req = event.req,
		res = event.res;

	form.on("file", (field, file) => {
		// Do something with the file
		// e.g. save it to the database
		// you can access it using file.path
		//originalFilename
		console.log("file", file.filepath);
	});
	form.on("end", () => {
		console.log("end");
	});
	form.parse(req);

	// form.parse(req, async (err, fields, files) => {
	// 	const fileInfo = JSON.parse(JSON.stringify(files));
	// 	const image = fileInfo.maxImg[0];

	// 	console.log(image);
	// });
	//const outImg = await imagemin([image.filepath]);

	return "asd";
});

// export default async (req, res, next) => {
// 	console.log(req);
// };
