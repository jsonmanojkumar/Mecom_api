const Cart = require('../model/imageUpload_model');
const multer = require("multer");

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'media/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

exports.uploadFiles = async (req, res) => {
  try {
    await upload(req, res);
    console.log(req.files);

    if (req.files.length <= 0) {
      return res
        .status(400)
        .send({ message: "You must select at least 1 file." });
    }

    return res.status(200).send({
      message: "Files have been uploaded.",
    });
  } catch (error) { }
  console.log(error);

  if (error.code === "LIMIT_UNEXPECTED_FILE") {
    return res.status(400).send({
      message: "Too many files to upload.",
    });
  }
  return res.status(500).send({
    message: `Error when trying upload many files: ${error}`,
  });
}



exports.createCart = async (req, res) => {
  try {
    const cart = await Cart.create(req.body);
    res.status(200).json({
      status: 200,
      data: cart,
      message: "success",
      errorCode: 0
    });

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


