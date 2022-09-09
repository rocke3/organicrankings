import imagemin from "imagemin";
import { IncomingForm } from "formidable";
import { defineEventHandler } from "h3";

// export default defineEventHandler(async (event) => {
// 	const form = new IncomingForm({ multiples: true });
// 	form.on("file", (field, file) => {
// 		// Do something with the file
// 		// e.g. save it to the database
// 		// originalFilename , mimetype, filepath, newFilename
// 		console.log("file", file.filepath);
// 	});
// 	form.on("end", (err) => {
// 		console.log(err);
// 	});
// 	form.parse(event.req);
// 	//const outImg = await imagemin([image.filepath]);

// 	return "asd";
// });

export default (req, res, next) => {
	const form = new IncomingForm();
	form.multiples = true;
	form.maxFileSize = 50 * 1024 * 1024; // 5MB
	form.uploadDir = "./";
	form.on("file", async (field, file) => {
		// Do something with the file
		// e.g. save it to the database
		// originalFilename , mimetype, filepath, newFilename
		console.log("file", file.filepath);
		const outImg = await imagemin([file.filepath]);
		console.log(outImg[0].data);
		return outImg[0].data;
	});
	form.on("end", (data) => {
		console.log(data);
	});
	form.parse(req);
};
