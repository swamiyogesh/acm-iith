import React from 'react'
import './css/style.css';
import './css/common.css';
import Navbar from './Components/Common/Navbar'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function Joinus()  {
    const classes = useStyles();
    return (
        <div className="Joinus">
            <Navbar />
            <div className="container">
                <br /><br /><br />
                <p className="h35" style={{color: 'black', textDecoration: 'none', borderLeft: '5px solid #479ff8', top: '50%'}}>&nbsp;Join Us</p>
                <br /><br />
                <form className={classes.root} noValidate autoComplete="off">
                <div>
                <TextField
                style={{width: '100%'}}
                id="outlined-email-input"
                label="Email"
                type="email"
                variant="outlined"
                />
                <br />
                <TextField
                style={{width: '100%'}}
                id="outlined-pnumber-input"
                label="Phone Number"
                type="number"
                variant="outlined"
                />
                <br />
                <TextField
                style={{width: '100%'}}
                multiline={true}
                id="outlined-project-input"
                label="Projects Link"
                type="text"
                variant="outlined"
                />
                <br />
                <TextField
                style={{width: '100%'}}
                multiline={true}
                id="outlined-idea-input"
                label="Your Ideas"
                type="text"
                variant="outlined"
                />
                <br />
                <br /><br />
                <center><Button variant="outlined" color="primary">
                    Submit!
                </Button></center>
                </div>
                </form>

            </div>
        </div>
    )
}

export default Joinus