import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export class CreateNote extends Component {
  state = {
    _id: '',
    users: [],
    userSelected: "",
    title: "",
    content: "",
    date: new Date(),
  };

  async componentDidMount() {
    const res = await axios.get("https://appnotes-backend.herokuapp.com/api/users");
    this.setState({
      users: res.data,
      userSelected: res.data[0].username,
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const newNote = {
      title: this.state.title,
      content: this.state.content,
      date: this.state.date,
      author: this.state.userSelected,
    };

    await axios.post("https://appnotes-backend.herokuapp.com/api/notes", newNote);

    window.location.href = "/notes-app-frontend";
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleDate = (e) => {
    this.setState({ date: e });
  };

  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <div className="card card-body bg-dark text-light">
          <h4>Create a Note</h4>

          {/* Select User */}

          <div className="form-group">
            <select
              className="form-control"
              name="userSelected"
              value={this.state.userSelected}
              onChange={this.handleChange}
            >
              {this.state.users.map((user) => (
                <option key={user._id} value={user.username}>
                  {user.username}
                </option>
              ))}
            </select>
          </div>

          {/* Title */}

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              name="title"
              value={this.state.title}
              required
              onChange={this.handleChange}
            />
          </div>

          {/* Content */}

          <div className="form-group">
            <textarea
              name="content"
              value={this.state.content}
              className="form-control"
              placeholder="Content"
              required
              onChange={this.handleChange}
            ></textarea>
          </div>

          {/* Date */}

          <div className="form-group">
            <DatePicker
              className="form-control"
              selected={this.state.date}
              onChange={this.handleDate}
            />
          </div>

          <form onSubmit={this.handleSubmit}>
            <button type="submit" className="btn btn-danger">
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateNote;
