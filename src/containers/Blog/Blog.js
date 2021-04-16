import React, { Component } from 'react';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom'

import { Typography, AppBar, Card, CardActions, CardContent, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles';
import useStyles from '../../useStyles/useStyles'


import EditPost from './EditPost/EditPost'
import FullPost from './FullPost/FullPost'
import NewPost from './NewPost/NewPost'
import Posts from './Posts/Posts'


import './Blog.css';


class Blog extends Component {


    render() {

        const { classes } = this.props;

        return (

            <div >

                <CssBaseline />
                <AppBar position="relative">
                    <Toolbar>
                        <PhotoCamera className={classes.icon} />
                        <Typography variant="h6" >
                            POST
                        </Typography>

                        <Grid container className={classes.home}>
                            <NavLink className={classes.NavLink} to="/posts" exact ><strong>Home</strong></NavLink>
                            <NavLink className={classes.NavLink} to="/posts/newPost"><strong>New Post</strong></NavLink>

                        </Grid>
                    </Toolbar>
                </AppBar>


                <Switch>
                    <Route path="/posts/newPost" component={NewPost} />
                    <Route path="/posts/editPost/:id" component={EditPost} />
                    <Route path="/posts" component={Posts} />
                    <Route path="/Blog-Post" component={Posts} />
                    <Route path="/:id" exact component={FullPost} />
                    <Redirect from="/" to="/posts" />
                </Switch>

            </div>
        );
    }
}

export default withStyles(useStyles)(Blog);