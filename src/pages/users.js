import React from 'react'

import { PlayStoreoLogo, AnimeWhoLogo } from '../config/assets/index'
import { UsersPanel } from '../components/users/index'
import { Grid } from '@material-ui/core'

export default () => {
    const UsersList = [

        {
            title: "AnimeWho",
            logo: AnimeWhoLogo,
            link: "https://animewho.com/"
        },
		{
            title: "Play Store",
            logo: PlayStoreoLogo,
            link: "https://play.google.com/store/apps/details?id=com.animewho.mobil"
        }
    ]

    return (
        <>
            <Grid container spacing={4} justify="center">
                {UsersList.map((t, i) => (
                    <UsersPanel {...t} key={i + t.title} />
                ))}
            </Grid>
        </>
    )
}