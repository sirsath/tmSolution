import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteTodoAction, TodoAddAction, UpdateTodoAction, getAllTodoAction } from "../Redux/Todordx/TodoAction";

export default function Dashbord() {
  const dispatch = useDispatch();
  const { Todo } = useSelector((state) => state.alltodo);

  const [TodoData, setTodoData] = useState({
    task: "This is Task ",
    name: "it tech solution",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolores",
  });

  const [TodoUpdateData, setTodoUpdateData] = useState({})
  const handeAddTodo = () => {
    dispatch(TodoAddAction(TodoData));
  };
  useEffect(() => {
    dispatch(getAllTodoAction());
  }, [Todo])

  const handelUpdateTodo = () => {
    dispatch(UpdateTodoAction(TodoUpdateData))
  }
  return (
    <>
      <div class="container mt-5">
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="card-header text-center h2">Todo</div>
              <div class="card-body">
                <div className="mt-2">
                  <label for="task" class="form-label">
                    Task
                  </label>
                  <input
                    type="text"
                    value={TodoData.task}
                    onChange={(e) =>
                      setTodoData({ ...TodoData, task: e.target.value })
                    }
                    class="form-control"
                    id="task"
                    placeholder="Enter Your Task"
                  />
                </div>
                <div className="mt-2">
                  <label for="name" class="form-label">
                    name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    value={TodoData.name}
                    onChange={(e) =>
                      setTodoData({ ...TodoData, name: e.target.value })
                    }
                    id="name"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="mt-2">
                  <label for="desc" class="form-label">
                    Description
                  </label>
                  <textarea
                    class="form-control"
                    value={TodoData.desc}
                    onChange={(e) =>
                      setTodoData({ ...TodoData, desc: e.target.value })
                    }
                    id="desc"
                    placeholder="Enter Your Description"
                  ></textarea>
                </div>
              </div>
              <div class="card-footer">
                <button
                  onClick={handeAddTodo}
                  type="button"
                  class="btn btn-primary"
                >
                  Add Todo
                </button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-header h2 text-center">Todo List</div>
              <div class="card-body">
                <table class="table table-info table-striped">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Task</th>
                      <th scope="col">Name</th>
                      <th scope="col">Desc</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Todo.map((item, i) => (
                      <>
                        <tr>
                          <th scope="row">{i + 1}</th>
                          <td>{item.task}</td>
                          <td>{item.name}</td>
                          <td>{item.desc}</td>
                          <td>
                            <button
                              type="button"
                              class="btn btn-warning"
                              data-bs-toggle="modal"
                              data-bs-target="#editmodel"
                              onClick={e => setTodoUpdateData(item)}
                            >
                              Edit
                            </button>
                          </td>
                          <td>
                            <button
                              onClick={e => dispatch(DeleteTodoAction(item._id))}
                              type="button" class="btn btn-danger">
                              Delete
                            </button>
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Update Model */}
      <div
        class="modal fade"
        id="editmodel"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title " id="exampleModalLabel">
                Edit Todo item
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="card-body">
                <div className="mt-2">
                  <label for="task" class="form-label">
                    Task
                  </label>
                  <input
                    value={TodoUpdateData.task}
                    onChange={e => setTodoUpdateData({ ...TodoUpdateData, task: e.target.value })}
                    type="text"
                    class="form-control"
                    id="task"
                    placeholder="Enter Your Task"
                  />
                </div>
                <div className="mt-2">
                  <label for="name" class="form-label">
                    name
                  </label>
                  <input
                    value={TodoUpdateData.name}
                    onChange={e => setTodoUpdateData({ ...TodoUpdateData, name: e.target.value })}
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="mt-2">
                  <label for="desc" class="form-label">
                    Description
                  </label>
                  <textarea
                    value={TodoUpdateData.desc}
                    onChange={e => setTodoUpdateData({ ...TodoUpdateData, desc: e.target.value })}
                    class="form-control"
                    id="desc"
                    placeholder="Enter Your Description"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handelUpdateTodo}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
