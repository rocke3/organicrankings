import express from "express";
import cors from "cors";
import fs from "fs";
import fileUpload from "express-fileupload";
import imagemin from "imagemin";
import imageminJpegRecompress from "imagemin-jpeg-recompress";
import imageminPngquant from "imagemin-pngquant";
import imageminWebp from "imagemin-webp";
import imageminGifsicle from "imagemin-gifsicle";

const app = express();

const tempFolder = "./public/temp/";
const compresFolder = "./public/compressed/";
let supported = ["jpeg", "png", "gif", "webp"];
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
	let reqImages = req.files;
	let qualiy = req.query.qualiy == "true" ? 78 : 70;
	let convert = req.query.convert == "true" ? true : false;
	for (var key in reqImages) {
		let image = reqImages[key];
		let mimetype = image.mimetype.replace("image/", "");
		let imgsize = image.size;

		if (!supported.includes(mimetype)) {
			res.send(JSON.stringify({ error: true, msg: "Invalid file" }));
		} else {
			let newFile = tempFolder + image.name;
			if (fs.existsSync(compresFolder + image.name)) fs.unlinkSync(compresFolder + image.name); // Delete if alredy have same image
			await image.mv(newFile); // Rename the temp file
			try {
				const imageComp = await imagemin([newFile], {
					destination: compresFolder,
					plugins: getPlugins(mimetype, qualiy, convert),
				});

				let path = "/" + imageComp[0].destinationPath;
				const { size } = fs.statSync("." + path);
				const compressed = ((size / imgsize) * 100 - 100) * -1;
				//677/2330*100 -  100
				res.send(JSON.stringify({ key: key, path: path, newSize: Math.floor(size / 1024), compressed: Math.floor(compressed) }));
				fs.unlinkSync(newFile);
			} catch (err) {
				console.log(err);
				res.send(JSON.stringify({ error: true, msg: "Invalid file" }));
			}
		}
	}
});
//res.send(JSON.stringify({ key: key, path: statistic.path_out_new, newSize: Math.floor(statistic.size_output / 1000), compressed: statistic.percent }));

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

function getPlugins(mimetype, qualiy, convert) {
	if (mimetype == "webp" || convert) {
		return [imageminWebp({ quality: qualiy })];
	} else if (mimetype == "jpeg" || mimetype == "png") {
		let pngQuality = qualiy == 70 ? 0.5 : 0.7;
		return [imageminJpegRecompress({ quality: "high", min: 65, max: qualiy }), imageminPngquant({ quality: [0.4, pngQuality], strip: true })];
	} else if (mimetype == "gif") {
		return [imageminGifsicle()];
	}
}
