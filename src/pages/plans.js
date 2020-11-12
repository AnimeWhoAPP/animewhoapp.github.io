import React from 'react'
import { Box } from '@material-ui/core'

import { PanelOne } from '../config/assets/index'
import { MakeFish } from '../config/assets/index'
import { Prenses } from '../config/assets/index'
import { Zamion101 } from '../config/assets/index'
import { ZLokisdottir } from '../config/assets/index'

import { PlansPanel } from '../components/plans/index'

export default () => {
    const PanelList = [
        {
            image: MakeFish,
            title: "MakeFish",
            description: "AnimeWho? uygulamasının tamamını ve tüm altyapı \(API)\ bağlantılarının hepsini kodlayan kişidir.",
            buttons: [
                {
                    title: "İletişime Geç",
                    link: "https://discord.com/invite/kXkg3pY"
                }
            ]
        },
		{
            image: Prenses,
            title: "Prenses",
            description: "Tasarım planlaması, taslak resimlerin renklendirilmesi ve uygulamanın hata testinden sorumlu kişidir.",
            buttons: [
                {
                    title: "İletişime Geç",
                    link: "https://discord.com/invite/kXkg3pY"
                }
            ]
        },
		{
            image: Zamion101,
            title: "Zamion101",
            description: "Uygulama içi renk konusunda yardımcı olan ve fikir önerilerini sunan kişidir.",
            buttons: [
                {
                    title: "İletişime Geç",
                    link: "https://discord.com/invite/kXkg3pY"
                }
            ]
        },
		{
            image: ZLokisdottir,
            title: "ZLokisdottir",
            description: "Uygulamanın kategoriler kısmına ait tüm resimlerin taslak çizimini yapan kişidir.",
            buttons: [
                {
                    title: "İletişime Geç",
                    link: "https://discord.com/invite/kXkg3pY"
                }
            ]
        }
    ]

    return (
        <>
            <Box display="flex" flexWrap="wrap" justifyContent="center" >
                {PanelList.map(p => (
                    <PlansPanel key={p.title} {...p} />
					
                ))}
            </Box>
        </>
    )
}