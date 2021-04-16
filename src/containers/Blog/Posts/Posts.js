import React, { Component } from 'react';
import axios from 'axios'
import Post from '../../../components/Post/Post'
import './Posts.css'
import { Typography, AppBar, Card, CardActions, CardContent, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import useStyles from '../../../useStyles/useStyles'
import SearchInput from '../../SearchInput/SearchInput'

class Posts extends Component {

    state = {
        posts: [],
        error: false
    }

    postSelectedHandler = (id) => {
        this.props.history.push('/' + id)
    }

    componentDidMount() {
        axios.get("/posts")
            .then(response => {
                const posts = response.data.reverse();
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,

                    }
                })
                this.setState({ posts: updatedPosts })
            })
            .catch(error => {
                this.setState({ error: true })
            })
    }

    render() {
        const { classes } = this.props;

        let posts = <p style={{ textAlign: 'center' }}><strong>Something went Wrong !!</strong></p>

        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)} />
                )
            })
        }
        return (

            <main>
                <div className={classes.search} >
                    <SearchInput />
                </div>
                <div className={classes.container}>
                    <Container maxWidth="sm" >
                        <Typography variant="h4" align='center' color="textPrimary" gutterBottom>
                            <strong> Post</strong>
                        </Typography>
                        <Typography variant='h6' align="center" color="textSecondary" paragraph>
                            <strong>  <b> To check the working of Search, type alphabet d in the search bar.</b>
                            </strong> <br />
                            Hello everyone, this is a post application and I am just trying to make this sentence as long as possible so that it can cover more area and we can get a better view of whole. <br />

                        </Typography>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md" >
                    <Grid container spacing={4}>
                        {posts}
                    </Grid>
                </Container>
            </main>
        );
    }
}

export default withStyles(useStyles)(Posts);