import React, { Component } from "react";
import axios from "axios";
import "./styles/CreateUser.css";

export default class CreateUser extends Component {
  state = {
    users: [],
    username: "",
  };

  async componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const res = await axios.get("https://appnotes-backend.herokuapp.com/api/users");
    this.setState({ users: res.data });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://appnotes-backend.herokuapp.com/api/users", {
      username: this.state.username,
    });
    this.setState({ username: "" });
    this.getUsers();
  };

  handleChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  deleteUser = async (id) => {
    await axios.delete("https://appnotes-backend.herokuapp.com/api/users/" + id);
    this.getUsers();
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="card bg-dark text-light card-body mb-3">
            <h3>Create New User</h3>

            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </div>

              <button type="submit" className="btn btn-danger">
                Save
              </button>
            </form>
          </div>
        </div>

        <div className="col-md-8">
          <div className="list-group">
            <div className="list-group-item bg-dark text-light">
              <h4><b>Usuarios creados:</b></h4>
            </div>
            {this.state.users.map((user) => (
              <div
                className="list-group-item list-group-item-action bg-dark text-light d-flex justify-content-between"
                key={user._id}
                onDoubleClick={() => this.deleteUser(user._id)}
              >
                {user.username}

                <button className="btn btn-danger" onClick={() => this.deleteUser(user._id)}>
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
