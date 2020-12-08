import React from 'react'
import { Box } from '@material-ui/core'

import { Destek } from '../config/assets/index'
import { Destek2 } from '../config/assets/index'
import { Destek3 } from '../config/assets/index'
import { Destek4 } from '../config/assets/index'
import { Destek5 } from '../config/assets/index'
import { PlansPanel } from '../components/destek/index'

export default () => {
    const PanelList = [
        {
            image: Destek,
            title: "Aylık Ödeme",
            description: "Aylık 10₺ karşılığında reklamsız kullanabilir ve diğer özel özelliklerden faydalanabilirsiniz.",
			price: 10,
            buttons: [
                {
                    title: "Hemen Öde",
                    link: "https://mobil.animewho.com/donate/index.php?amount=10"
                }
            ]
        },
		{
            image: Destek2,
            title: "4 Aylık Ödeme",
            description: "30₺ karşılığında reklamsız kullanabilir ve diğer özel özelliklerden faydalanabilirsiniz.",
			price: 30,
            buttons: [
                {
                    title: "Hemen Öde",
                    link: "https://mobil.animewho.com/donate/index.php?amount=30"
                }
            ]
        },
		{
            image: Destek3,
            title: "8 Aylık Ödeme",
            description: "60₺ karşılığında reklamsız kullanabilir ve diğer özel özelliklerden faydalanabilirsiniz.",
			price: 60,
            buttons: [
                {
                    title: "Hemen Öde",
                    link: "https://mobil.animewho.com/donate/index.php?amount=60"
                }
            ]
        },
		{
            image: Destek4,
            title: "12 Aylık Ödeme",
            description: "100₺ karşılığında reklamsız kullanabilir ve diğer özel özelliklerden faydalanabilirsiniz.",
			price: 100,
            buttons: [
                {
                    title: "Hemen Öde",
                    link: "https://mobil.animewho.com/donate/index.php?amount=100"
                }
            ]
        },
		{
            image: Destek5,
            title: "İletişim",
            description: "Teknik sorun oluşması halinde Discord adresimizden ücretsiz bir şekilde yardım alabilirsiniz.",
			price: 0,
            buttons: [
                {
                    title: "Yardım Al",
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