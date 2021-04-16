import React, { Component } from 'react';
import axios from 'axios'

import './EditPost.css';
import post from '../../../components/Post/Post';


class EditPost extends Component {
    state = {
        post: {
            title: '',
            body: '',
            author: ''
        }

    }

    inputChangeHandler(event) {

        let value = event.target.value;
        this.setState(prevState => ({
            post: { ...prevState.post, [event.target.name]: value }
        }))
    }


    postDataHandler = async () => {
        const data = {
            ...this.state.post
        }
        await axios.put("/posts/" + this.props.match.params.id, data)

        this.props.history.replace('/posts')

    }

    componentDidMount() {
        if (this.props.match.params.id) {

            axios.get("/posts/" + this.props.match.params.id)
                .then(response => {
                    this.setState({ post: response.data })
                })
        }
    }



    render() {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if (this.props.match.params.id) {
            post = <p style={{ textAlign: 'center' }}>Loading....</p>
        }

        if (this.state.post) {
            post = (
                <div className="EditPost">
                    <h1>Edit a Post</h1>
                    <label>Title</label>
                    <input type="text" name="title" value={this.state.post.title} placeholder="Enter Title"
                        onChange={e => this.inputChangeHandler(e)}
                    />
                    <label>Content</label>
                    <textarea rows="4" name="body" value={this.state.post.body} placeholder="Type Something..." onChange={e => this.inputChangeHandler(e)} />
                    <label>Author</label>
                    <select name="author" value={this.state.post.author} onChange={e => this.inputChangeHandler(e)} >
                        <option value="Arch">Arch</option>
                        <option value="Hades">Hades</option>
                    </select>
                    <button onClick={() => this.postDataHandler()}>Update Post</button>
                </div>
            )
        }
        return post;
    }
}

export default EditPost;