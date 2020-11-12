import React from 'react'

import Technologies from './technologies'
import Users from './users'
import Plans from './plans'
import Update from './update'
import Newf from './newf'
import Newf2 from './newf2'
import Destek from './destek'

import { Grid, Box, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    Grid: {
        marginTop: `${theme.spacing(5)}px`
    },
    Titles: {
        marginLeft: `${theme.spacing(0)}px`
    }
}))

function GridProps(classes) {
    return ({
        item: true,
        md: 11,
        xs: 12,
        className: classes.Grid
    })
}

const BoxProps = {
    boxShadow: 6,
    p: 4,
    bgcolor: "background.paper"
}

export default () => {
    const classes = useStyles()
    const useGridProps = GridProps(classes)

    return (
        <>
            <Grid {...useGridProps}>
                <Box {...BoxProps}>
				<Typography style={{color: "white", textAlign: "center", }} className={classes.Titles} variant="h3">
                    Özellikler
                </Typography>
				<hr />
				<br />
                    <Newf />
                <br />					
					<Newf2 />
				<br />
				<hr />
                <Box {...BoxProps} bgcolor="transparent" boxShadow={0}>
				<Typography style={{color: "white", textAlign: "center", }} className={classes.Titles} variant="h3">
                    Güncelleme Notları
                </Typography>				
                    <Update />
                </Box>				
                <Box {...BoxProps} bgcolor="transparent" boxShadow={0}>
                    <Technologies />
                </Box>
                <Typography style={{ textAlign: "center", color: "white"  }} variant="h4">
                    kullanılarak hazırlandı.
                </Typography>  					
                </Box>
            </Grid>
            <Grid {...useGridProps}>
				<Box {...BoxProps} bgcolor="transparent" boxShadow={0}>
                    <Users />
					<br />
				 <Typography style={{ textAlign: "center", color: "white" }} variant="h4">
                    Uygulama şimdilik "Erken Erişim" kullanıcılarına açıktır.
                </Typography>  	
                </Box>
            </Grid>
            <Grid {...useGridProps}>
                <Box {...BoxProps} bgcolor="#121212" boxShadow={0}>
				<Typography style={{textAlign: "center", color: "white" }} className={classes.Titles} variant="h3">
                    Emeği Geçenler
                </Typography>
				<br />
                    <Plans />
                </Box>
            </Grid>
			<Grid {...useGridProps}>
                <Box {...BoxProps} bgcolor="#121212" boxShadow={0}>
				<Typography style={{textAlign: "center", color: "white" }} className={classes.Titles} variant="h3">
                    Destek Ol
                </Typography>
				<br />
                    <Destek />
                </Box>
            </Grid>
			
        </>
    )
}