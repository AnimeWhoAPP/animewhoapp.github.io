import React, { useState } from 'react'
import PropTypes from 'prop-types';

import { Typography, Grid, Box, makeStyles, Divider, Paper} from '@material-ui/core'
import { isMobile } from 'react-device-detect';
import clsx from 'clsx'

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

const useStyles = makeStyles(theme => ({
    ImageContainer: {

        backgroundImage: props => `url("${props.image}")`,
        backgroundSize: "cover",
        height: props => props.height || "450px",
		width: props => props.width || "auto"
		
    },
    ScrollToBottom: {
        animation: `$ScrollToBottom`,
        animationDuration: props => props.duration || `3500ms`,
        backgroundPosition: "center bottom"
    },
    ScrollToBottomExit: {
        animationName: `$ScrollToBottomExit`,
        animationDuration: props => props.duration || `3500ms`,
        backgroundPosition: "center top"
    },
    "@keyframes ScrollToBottom": {
        "0%": {
            backgroundPosition: "center top",
        },
        "100%": {
            backgroundPosition: "center bottom",
        }
    },
    "@keyframes ScrollToBottomExit": {
        "0%": {
            backgroundPosition: "center bottom",
        },
        "100%": {
            backgroundPosition: "center top",
        }
    }
}))

function FeaturePanel(props) {
    const { image, title, description, subtitle, side, end, index, disableAnimation } = props
    const [exit, setExit] = useState(true)
    const classes = useStyles(props)
	
	const arr = [];
	if (side === "right" || isMobile) {
		
		return (
		<>
		<TimelineOppositeContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h4" component="h1">
              {index}. {title}
            </Typography>
			<Box align="right">
            <Typography variant="subtitle1" >
                        {description}
						<br />
                    </Typography>
					<br />
                    <Box  style={{ textAlign: "center"}}
					    
                        boxShadow={6}
                        image={image}
                        className={`${classes.ImageContainer} ${clsx(classes.ScrollToBottom, { [classes.ScrollToBottomExit]: exit })}`}
                        onMouseEnter={disableAnimation ? "" : () => setExit(!exit)}
                    />
					</Box>
          </Paper>
        </TimelineOppositeContent>
			<TimelineSeparator>
			  <TimelineDot color="secondary" variant="outlined">
			  </TimelineDot>
			  <TimelineConnector />
			</TimelineSeparator>
		</>
		
			)
	}
	 else 
		return (
		<>
			<TimelineContent >
			  <Paper elevation={3} className={classes.paper}>
				<Typography variant="h4" component="h1">
				  {index}. {title}
				</Typography>
				<Box align="left">
				<Typography variant="subtitle1" align="left" >
							{description}
							<br />
						</Typography>
						<br />
						<Box  style={{ textAlign: "center"}}
							
							boxShadow={6}
							image={image}
							className={`${classes.ImageContainer} ${clsx(classes.ScrollToBottom, { [classes.ScrollToBottomExit]: exit })}`}
							onMouseEnter={disableAnimation ? "" : () => setExit(!exit)}
						/>
						</Box>
			  </Paper>
					<br/>
			</TimelineContent>
			</>
		)
	 
    /**if (side === "right" || isMobile) {
        return (
		<>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Eat
            </Typography>
            <Typography>Because you need strength</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
	  </>
        )
    }
	else
		return (
		<>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            9:30 am
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Eat
            </Typography>
            <Typography>Because you need strength</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            10:00 am
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Code
            </Typography>
            <Typography>Because it&apos;s awesome!</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Sleep
            </Typography>
            <Typography>Because you need rest</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Repeat
            </Typography>
            <Typography>Because this is the life you love!</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
	  </>
	)
    /**else
        return (
            <>
               
                <Grid item lg={7} md={4} xs={6}>
				<Box display="flex" flexDirection="column" justifyContent="center" textAlign="right" alignItems="flex-end">
                    <Typography variant="h4">
                        {index}. {title}
                    </Typography>
                    <Typography variant="subtitle1" >
                        {description}
						<br />
                    </Typography>
					<br />
                    <Box  style={{ textAlign: "right"}}
					    
                        boxShadow={6}
                        image={image}
                        className={`${classes.ImageContainer} ${clsx(classes.ScrollToBottom, { [classes.ScrollToBottomExit]: exit })}`}
                        onMouseEnter={disableAnimation ? "" : () => setExit(!exit)}
                    />
					</Box>
                </Grid>
               
            </>
        )*/
}

FeaturePanel.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    subtitle: PropTypes.object,
    image: PropTypes.string.isRequired,
    height: PropTypes.string,
    duration: PropTypes.string,
    disableAnimation: PropTypes.bool
}

export { FeaturePanel }