import React, { Component } from "react";
import userAPI from "../../utils/userAPI";
import "../../pages/trophies.css";
// back of card

class TrophyEmailForm extends Component {

  state = {
    yourEmail: "",
    friendEmail: "",
    experience: "",
    photo: ""
  };

  updateUsers = (userData) => {
    userAPI.updateUsers(userData).then(
      (res) => {
        console.log(res);
      }
    ).catch(err => console.log(err))
  }

  onSubmit = (e) => {
    e.preventDefault();
    // if (this.state.yourEmail && this.state.friendEmail) {
    //   userAPI.
    // }


  }



  render() {
    return (
      <div class="col">
        <div>
          <h1>Details</h1>
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Your Email</label>
              <input
                value={this.state.yourEmail}
                name="yourEmail"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email" />
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Your Friend's Email</label>
              <input
                value={this.state.friendEmail}
                name="friendEmail"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email" />
              <small id="emailHelp" class="form-text text-muted">We'll never share your friend's email with anyone else.</small>
            </div>

            <div class="form-group">
              <label for="description">Description</label>
              <input
                value={this.state.experience}
                name="experience"
                type="text"
                class="form-control"
                id="description"
                placeholder="In one word, how was it!?" />
            </div>
            <div class="form-group">
              <label for="photoURL">Photo URL</label>
              <input
                value={this.state.photo}
                name="photo"
                type="text"
                class="form-control"
                id="photoURL"
                placeholder="Link to your photo" />
            </div>
            <button name="Got Pizza" type="submit" class="btn btn-primary" onClick={this.onSubmit}>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default TrophyEmailForm;