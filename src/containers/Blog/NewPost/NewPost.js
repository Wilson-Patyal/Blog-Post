import React, { Component } from 'react';
import axios from 'axios'

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        body: '',
        author: '',

    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.body,
            author: this.state.author
        }
        axios.post("/posts", data)
            .then(response => {
                this.props.history.replace('/posts')

            })

    }

    render() {
        return (
            <div className="NewPost">

                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} placeholder="Enter Title" onChange={(event) => this.setState({ title: event.target.value })} />
                <label>Content</label>
                <textarea rows="4" value={this.state.body} placeholder="Type Something..." onChange={(event) => this.setState({ body: event.target.value })} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })}>
                    <option value="Arch">Arch</option>
                    <option value="Hades">Hades</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;