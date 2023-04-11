const User = require("../model/User");
const asyncHandler = require("express-async-handler")

exports.getUser = async (req, res) => {
  try {
    const result = await User.find();
    res.json({
      success: true,
      message: "Get All Users",
      result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: `ERROR : ${error}`,
      result,
    });
  }
};

exports.UserRegister = async (req, res) => {
  try {
    console.log(req.body);
    await User.create(req.body);
    res.json({
      success: true,
      message: "User Register successfuly",
    });
  } catch (error) {
    res.json({
      success: false,
      message: `ERROR : ${error}`,
    });
  }
};

exports.loginUser = async (req, res) => {
  const { email } = req.body
  try {
    console.log(req.body);
    const result = await User.find({ email: email });
    res.json({
      success: true,
      message: " login Sucess",
      result: result
    });
  } catch (error) {
    res.json({
      success: false,
      message: `ERROR : ${error}`,
    });
  }
};

// exports.UserRegister = asyncHandler(async (req, res) => {
//   const { name, password, email } = req.body
//   if (!name || !password || !email) {
//     return res.status(400).json({
//       message: "All Felids Required"
//     })
//   }

//   const hashPass = bcrypt.hashSync(password, 10)
//   const result = await User.create({
//     ...req.body,
//     password: hashPass
//   })
//   res.json({
//     message: "user Regsiter Success",
//     result
//   })
// })

