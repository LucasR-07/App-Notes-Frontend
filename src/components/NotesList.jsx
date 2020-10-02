import React, { Component } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import Loading from "./Loading";

export default class NotesList extends Component {
  state = {
    notes: [],
    loading: false,
  };

  componentDidMount() {
    this.getNotes();
  }

  async getNotes() {
    this.setState({ loading: true })
    const res = await axios.get(
      "https://appnotes-backend.herokuapp.com/api/notes"
    );
    this.setState({ notes: res.data, loading: false });
  }

  deleteNote = async (id) => {
    await axios.delete(
      "https://appnotes-backend.herokuapp.com/api/notes/" + id
    );
    this.getNotes();
  };

  render() {
    if (this.state.loading) {
      return (
        <Loading />
      )
    } else {
      return (
        <div className="row">
          {this.state.notes.map((note) => (
            <div key={note._id} className="col-md-4 p-2">
              <div className="card bg-dark text-light shadow-lg border-0">
                <div className="card-header d-flex justify-content-between">
                  <h5>
                    <b>{note.title}</b>
                  </h5>
                  <Link
                    className="btn btn-danger text-light rounded-pill"
                    to={"/notes-app-frontend/notes/" + note._id}
                  >
                    Edit
                  </Link>
                </div>

                <div className="card-body">
                  <p>{note.content}</p>
                  <p>
                    User: <b>{note.author}</b>
                  </p>
                  <p>{format(note.date)}</p>
                </div>

                <div className="card-footer">
                  <button
                    className="btn btn-danger text-light"
                    onClick={() => this.deleteNote(note._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}
