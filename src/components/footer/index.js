import React from 'react'

import { Typography, Grid, makeStyles } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import HelpIcon from '@material-ui/icons/Help';
import CreateIcon from '@material-ui/icons/Create';
import GitHubIcon from '@material-ui/icons/GitHub';
import { faDiscord } from '@fortawesome/free-brands-svg-icons'


const useStyles = makeStyles(theme => ({
    Grid: {
        marginTop: `${theme.spacing(8)}px`,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[6]
    },
    Panel: {
        marginTop: `${theme.spacing(2)}px`
    },
    Copyright: {
        textDecoration: "none",
        color: theme.palette.text.primary
    },
    Dot: {
        fontSize: "2.4em",
        margin: `${theme.spacing(1)}px`
    },
    Link: {
        transition: theme.transitions.create(['color'], {
            easing: theme.transitions.easing.sharp,
            duration: "100ms",
        }),
        "&:hover": {
            color: theme.palette.primary.main
        },
        textDecoration: "none",
        color: "inherit"
    }
}))

function BigDot({ classes }) {
    return <span className={classes.Dot}>•</span>
}

export default () => {
    const classes = useStyles()
    return (
        <>
            <Grid container className={classes.Grid} justify="center" textAlign="center">
				<Grid item xs={0} className={classes.Panel}>				
				<center>
					<a href="https://shop.animewho.com/yardim/" rel="noopener noreferrer" target="_blank" className={classes.Copyright}>
                        <Typography variant="h6">Yardım</Typography>
                    </a>
					<a href="https://github.com/Hime-Dev" rel="noopener noreferrer" target="_blank" className={classes.Copyright}>
                        <Typography variant="h6">prenses &copy; {(new Date()).getFullYear()}</Typography>
                    </a>
				</center>
                    <a href="https://github.com/AnimeWhoAPP" target="_blank" rel="noopener noreferrer" className={classes.Link}>
                        <GitHubIcon />
                    </a>
                    <BigDot classes={classes} />
                    <a href="https://animewho.com/" target="_blank" rel="noopener noreferrer" className={classes.Link}>
                        <HelpIcon />
                    </a>
                    <BigDot classes={classes} />
					<a href="https://animehaber.com/" target="_blank" rel="noopener noreferrer" className={classes.Link}>
                        <CreateIcon size="2x" />
                    </a>
                </Grid>
            </Grid>
        </>
    )
}