const express = require("express");

var Jimp = require("jimp");

const cors = require("cors");
const fileUpload = require("express-fileupload");
const app = express();

app.use(cors());
app.use(
	fileUpload({
		createParentPath: true,
		limits: { fileSize: 50 * 1024 * 1024 },
	})
);
const port = 3005;

app.post("/", async (req, res) => {
	let images = req.files;
	for (var key in images) {
		let image = images[key];

		await Jimp.read(image.data, (err, lenna) => {
			if (err) throw err;
			let comPath = "./public/compressed/" + image.name;
			let com = lenna.quality(65).write(comPath);

			res.send(JSON.stringify({ key, comPath }));
		});
	}
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
