import React from 'react'

import { Technologies } from '../config/assets/index'
import { TechPanel } from '../components/technologies/index'
import { Grid } from '@material-ui/core'

export default () => {
    const TechList = [
        {
            title: "Flutter",
            logo: Technologies,
            link: "https://flutter.dev/",
            offset: [0, 219]
        }
    ]

    return (
        <>
            <Grid container spacing={4} justify="center">
                {TechList.map((t, i) => (
                    <TechPanel {...t} key={i + t.title} />
                ))}
            </Grid>
        </>
    )
}