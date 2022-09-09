import sharp from "sharp";
import { defineEventHandler, getHeader, readRawBody } from "h3";
import formidable from "formidable";
import { Buffer } from "node:buffer";

// export default async (req, res, next) => {
// 	const form = formidable({ multiples: true });

// 	let outputFile = await form.parse(req, (err, fields, files) => {
// 		console.log(files);
// 		//res.writeHead(200, { "Content-Type": "application/json" });
// 		// let image = JSON.parse(JSON.stringify(files));
// 		// try {
// 		// 	sharp(image.image[0].filepath).toFile("output.webp", (err, info) => {
// 		// 		console.log(info);
// 		// 	});
// 		// } catch (err) {}

// 		// res.end(JSON.stringify({ fields, files }, null, 2));
// 	});

// 	return outputFile;

// 	// const chunks = [];
// 	// req.on("data", (chunk) => {
// 	// 	chunks.push(chunk);
// 	// });
// 	// req.on("end", async () => {
// 	// 	const data = Buffer.concat(chunks);
// 	// 	const roundedCorners = Buffer.from(data);
// 	// 	// sharp(roundedCorners)
// 	// 	// 	.resize(320, 240)
// 	// 	// 	.toFile("output.jpg", (err, info) => {
// 	// 	// 		console.log(err);
// 	// 	// 	});
// 	// 	//console.log(data);
// 	// });

// 	// let allBuffer = [];
// 	// await req.on("data", (chunk) => {
// 	// 	allBuffer.push(chunk);
// 	// });
// 	// await req.on("end", () => {
// 	// 	//console.log(Buffer.concat(allBuffer));
// 	// 	//let oBuffer = Buffer.concat(allBuffer);
// 	// 	let binary = Buffer.from(allBuffer, "binary");
// 	// 	let data = "data:image/jpeg;base64, " + binary.toString("base64");
// 	// 	console.log(data);
// 	// });
// 	// res.end("data");
// 	// next();
// };

export default defineEventHandler(async (event) => {
	//const reader = createWriteStream();
	var body = await readRawBody(event.req);
	const roundedCorners = await Buffer.from(body);
	console.log(roundedCorners);

	const roundedCornerResizer = sharp(roundedCorners)
		.resize(200, 200)
		.toFile("/output.webp", (err, info) => {
			console.log(err);
			console.log(info);
		});

	// var body = await readRawBody(event.req);
	// const roundedCorners = Buffer.from(body);

	// const roundedCornerResizer = sharp(roundedCorners)
	// 	.resize(200, 200)
	// 	.toFile("output.webp", (err, info) => {
	// 		//console.log(err);
	// 		//console.log(info);
	// 	});
	// console.log(roundedCornerResizer);

	// sharp(roundedCorners)
	// 	.resize(320, 240)
	// 	.toFile("output.webp", (err, info) => {
	// 		console.log(err);
	// 		console.log(info);
	// 	});

	return "data:image/jpeg;base64," + roundedCorners.toString("base64");
});
