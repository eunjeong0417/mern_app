import React, {useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import imageSource from './img/box.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import {getPosts} from './actions/posts'

const App = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    //리덕스 스토어에 접근하기 위해 
    //dispatch설정

    useEffect(() => {
        dispatch(getPosts());
    },[dispatch])

    return (
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading}variant="h2" align="center">
                    my web
                </Typography>
                <img className={classes.image} src={imageSource} alt="boximage" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        <Form />
                    </Grid>
                    </Grid>
                </Container>
            </Grow>
       </Container>
    )
}

export default App;
