import React, { Component } from 'react';
import axios from 'axios'
import { Link } from "react-router-dom"
import './FullPost.css';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from '../../../useStyles/useStyles'
import { Container } from '@material-ui/core'

class FullPost extends Component {

    state = {
        loadedPost: null
    }

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }

    loadData() {
        if (this.props.match.params.id) {
            if (!this.state.loadedPost || this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id) {
                axios.get("/posts/" + this.props.match.params.id)
                    .then(response => {
                        this.setState({ loadedPost: response.data })
                    })
            }

        }
    }

    deletePostHandler = (id) => {
        axios.delete(`/posts/${id}`)
            .then(response => {
                this.props.history.replace('/posts')
            })
    }
    render() {
        const { classes } = this.props

        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if (this.props.match.params.id) {
            post = <p style={{ textAlign: 'center' }}>Loading....</p>
        }

        if (this.state.loadedPost) {
            post = (
                <Container className={classes.rootFather}>
                    <Card className={classes.root} >
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://source.unsplash.com/random"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {this.state.loadedPost.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {this.state.loadedPost.body}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Link className={classes.fullButton} to={"/posts/editPost/" + this.props.match.params.id}>Edit Post</Link>
                            <Button size="small" color="danger" onClick={() => this.deletePostHandler(this.props.match.params.id)} >Delete</Button>
                        </CardActions>
                    </Card>
                </Container>
            );
        }
        return post;
    }
}

export default withStyles(useStyles)(FullPost);