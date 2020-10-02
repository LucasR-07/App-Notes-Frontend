import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class EditNote extends Component {
  state = {
    _id: "",
    users: [],
    userSelected: "",
    title: "",
    content: "",
    date: new Date(),
    author: ""
  };

  async componentDidMount() {
    const res = await axios.get("https://appnotes-backend.herokuapp.com/api/users");
    this.setState({
      users: res.data,
      userSelected: res.data[0].username,
    });

    if (this.props.match.params.id) {
      const res = await axios.get(
        "https://appnotes-backend.herokuapp.com/api/notes/" + this.props.match.params.id
      );
      this.setState({
        title: res.data.title,
        content: res.data.content,
        date: new Date(res.data.date),
        author: res.data.author,
        _id: this.props.match.params.id,
      });
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const editNote = {
      title: this.state.title,
      content: this.state.content,
      date: this.state.date,
      author: this.state.author,
    };

    await axios.put(
      "https://appnotes-backend.herokuapp.com/api/notes/" + this.state._id,
      editNote
    );

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
          <h4>Edit Note</h4>

          {/* Select User */}

          <div className="form-group">
            <select
              className="form-control"
              name="author"
              value={this.state.author}
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
