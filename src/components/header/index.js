import React from 'react'

import { HeaderLogo } from '../../config/assets/index'
import { makeStyles } from '@material-ui/styles'
import { Typography, Box, Tooltip } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    HeaderLogo: {
        display: "block",
        [theme.breakpoints.down('md')]: {
            width: "400px"
        },
        [theme.breakpoints.down('sm')]: {
            width: "350px",
        },
        width: "450px"
    },
    HeaderText: {
        marginTop: `${theme.spacing(4)}px`,
        "& h1": {
            lineHeight: ".8"
        },
        "& span": {
            [theme.breakpoints.down('md')]: {
                marginLeft: "2.6em",
                fontSize: `${theme.typography.subtitle1.fontSize.replace('rem', '')}rem`,
            },
            [theme.breakpoints.down('sm')]: {
                marginLeft: "2.7em",
                fontSize: `${theme.typography.subtitle1.fontSize.replace('rem', '') - 0.2}rem`
            },
            marginLeft: "2.9em"
        }
    }
}))

export default () => {
    const classes = useStyles()

    return (
        <>
            <Box className={classes.HeaderText}>
               <center> <img className={classes.HeaderLogo} src={HeaderLogo} alt="Header logo" />  </center>
                <Tooltip aria-label="add" placement="bottom" style={{color: "white",  marginLeft: "112px",  }} title="özel anime ve manga uygulaması.">
                  <center> <Typography variant="h4" style={{color: "white", textAlign: "center", marginLeft: "85px",  }} >Mobil Uygulama</Typography>  </center>
                </Tooltip>
            </Box>
        </>
    )
}