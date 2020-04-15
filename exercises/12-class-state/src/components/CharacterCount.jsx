import React, { Component } from "react";
//import "./Likes.css";

class CharacterCount extends Component {
    state = {
        charCount: 0
    };

    like = () => this.setState({ likes: this.state.likes + 1 });
    render() {
        /**
         * In the render function, add an onclick to the button to update the like count.
         *
         */
        return (
            <div className="container mt-4 h1">
                <h3>Character Count</h3>
                <textarea onChange={(e) => this.setState({ charCount: e.target.value.length })}></textarea>
                <p>Count {this.state.charCount}</p>            </div>
        );
    }
}

export default CharacterCount;
