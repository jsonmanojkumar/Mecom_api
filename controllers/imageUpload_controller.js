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



exports.getUserById = async (req, res) => {
  console.log('reeeee', req.params.id);
  try {
    const item = await Users.findById(req.params.id);
    if (!item) {
      return res.status(404).json(
        {
          status: 404,
          message: "user not found",
          data: [],
          errorCode: 1
        }
      );
    } else {
      res.status(200).json({
        status: 200,
        message: "user fatch successfully",
        data: item,
        errorCode: 0
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "server error",
      data: error,
      errorCode: 1
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updatedItem = await Users.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedItem) {
      return res.status(404).json(
        {
          status: 404,
          message: "user not found",
          data: [],
          errorCode: 1
        }
      );
    } else {
      res.status(200).json({
        status: 200,
        message: "updated successfully",
        data: updatedItem,
        errorCode: 0
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "server error",
      data: error,
      errorCode: 1
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deleteItem = await Users.findByIdAndDelete(req.params.id);
    if (!deleteItem) {
      return res.status(404).json(
        {
          status: 404,
          message: "user not found",
          data: deleteItem,
          errorCode: 1
        }
      );
    } else {
      res.status(200).json({
        status: 200,
        message: "deleted successfully",
        data: deleteItem,
        errorCode: 0
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "server error",
      data: error,
      errorCode: 1
    });
  }
};

