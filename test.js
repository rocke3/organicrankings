const express = require("express");
const fs = require("fs");
const compress_images = require("compress-images");
const fileUpload = require("express-fileupload");

const cors = require("cors");
const app = express();

const tempFolder = "./public/temp/";
const compresFolder = "./public/compressed/";

app.use(cors());
app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: tempFolder,
		createParentPath: true,
		limits: { fileSize: 6291456 }, // 6Mb / 6 * 1024 * 1024
		abortOnLimit: true,
	})
);
const port = 3005;

app.post("/", async (req, res) => {
	let images = req.files;
	for (var key in images) {
		let image = images[key];
		let newFile = tempFolder + image.name;
		if (fs.existsSync(compresFolder + image.name)) fs.unlinkSync(compresFolder + image.name); // Delete if alredy have same image
		await image.mv(newFile); // Rename the temp file
		try {
			compress_images(
				newFile,
				compresFolder,
				{ compress_force: false, statistic: true, autoupdate: true },
				false,
				{ jpg: { engine: "mozjpeg", command: ["-quality", "80"] } },
				{ png: { engine: "pngquant", command: ["--quality=30-70", "-o"] } },
				{ svg: { engine: "svgo", command: "--multipass" } },
				{ gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
				function (error, completed, statistic) {
					console.log(statistic);
					if (completed && statistic) {
						fs.unlinkSync(newFile);
						res.send(JSON.stringify({ key: key, path: statistic.path_out_new, newSize: Math.floor(statistic.size_output / 1000), compressed: statistic.percent }));
					}
				}
			);
		} catch (err) {
			console.log("error");
			res.send(JSON.stringify({ error: true, msg: "Invalid file" }));
		}
	}
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
