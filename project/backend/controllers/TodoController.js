const Todo = require("../model/Todo");

exports.getAllTodo = async (req, res) => {
  try {
    const result = await Todo.find();
    res.json({
      success: true,
      message: "All Todo Fetched",
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
exports.AddAllTodo = async (req, res) => {
  try {
    console.log(req.body);
    await Todo.create(req.body);
    res.json({
      success: true,
      message: "Todo create successfuly",
    });
  } catch (error) {
    res.json({
      success: false,
      message: `ERROR : ${error}`,
    });
  }
};
exports.deleteTodo = async (req, res) => {
  try {
    console.log(req.body);
    const { TodoID } = req.params;

    await Todo.findByIdAndDelete(TodoID);
    res.json({
      success: true,
      message: "Todo Delete successfuly",
    });
  } catch (error) {
    res.json({
      success: false,
      message: `ERROR : ${error}`,
    });
  }
};
exports.updateTodo = async (req, res) => {
  try {
    console.log(req.body);
    const { TodoID } = req.params;
    const result = await Todo.findByIdAndUpdate(TodoID, req.body);
    res.json({
      success: true,
      message: "Todo Update successfuly",
      result,
    });
  } catch (error) {
    res.json({
      success: false,
      message: `ERROR : ${error}`,
    });
  }
};
