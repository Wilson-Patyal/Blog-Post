import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CssBaseline, Grid, Toolbar, Container, CardMedia } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import './Post.css';


const useStyles = makeStyles(theme => ({

    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%' //16:9
    },
    cardContent: {
        flexGrow: 1
    }
}))

const Post = (props) => {

    const classes = useStyles();

    return (

        <Grid item onClick={props.clicked} xs={12} sm={6} md={4} >
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image Title" />
                <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {props.title}
                    </Typography>
                    <Typography>
                        {props.author}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>

    )
}

export default Post;

