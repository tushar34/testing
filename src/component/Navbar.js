import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';

const style = theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },

});

class Navbar extends React.Component {
    render() {
        const classes = this.props;
        return (
            // <Grid container>
            //     <Grid item >
                <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography style={{flexGrow:1}} variant="h6" className={classes.title} >
                            Testing
                        </Typography>
                        <Button color="inherit" component={Link} to="/" >Home</Button>
                        <Button color="inherit" component={Link} to="/login" >Login</Button>
                        <Button color="inherit" component={Link} to="/sign-up">Sign-up</Button>
                    </Toolbar>
                </AppBar>
            </div>
            //     </Grid>
            // </Grid>
                
            
        )
    }
}
export default withStyles(style)(Navbar);