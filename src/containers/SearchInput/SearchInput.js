import React, { Component } from 'react'
import axios from 'axios';
import Post from '../../components/Post/Post'
import './SearchInput.css'
import { withRouter } from 'react-router-dom'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import useStyles from '../../useStyles/useStyles'
import { Grid, Container } from "@material-ui/core"


class SearchInput extends Component {

    state = {
        searchTerm: "",
        posts: [],
        error: false
    }

    componentDidMount() {
        axios.get("/posts")
            .then(response => {
                const posts = response.data.slice(0, 10);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: "Wilson Patyal"
                    }
                })
                this.setState({ posts: updatedPosts })
            })
            .catch(error => {
                this.setState({ error: true })
            })
    }
    postSelectedHandler = (id) => {
        this.props.history.replace('/' + id)
        this.setState({ searchTerm: "" })
    }


    render() {
        const { classes } = this.props

        let posts = <p style={{ textAlign: 'center' }}><strong>Something went Wrong !!</strong></p>
        return (
            <div>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    type="text" value={this.state.searchTerm}
                    onChange={event => this.setState({ searchTerm: event.target.value })}
                    inputProps={{ 'aria-label': 'search' }}
                />


                {this.state.posts.filter((val) => {
                    if (this.state.searchTerm === "") {
                        return null;
                    } else if (val.body.toLowerCase().includes(this.state.searchTerm.toLowerCase())) {
                        return val
                    }
                }).map(post => {
                    return (
                        <Post
                            key={post.id}
                            title={post.title}
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)} />
                    )
                })}




            </div>
        )
    }
}
export default withStyles(useStyles)(withRouter(SearchInput));