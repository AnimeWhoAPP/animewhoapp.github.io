import React from 'react'
import { Box } from '@material-ui/core'

import { Destek } from '../config/assets/index'
import { Destek2 } from '../config/assets/index'
import { PlansPanel } from '../components/destek/index'

export default () => {
    const PanelList = [
        {
            image: Destek,
            title: "Erken Erişime Katıl",
            description: "\"Erken Erşime\"\nkatılarak uygulamayı 3 ay reklamsız kullanabilirsin.\nAynı zamanda projelerimizin devamı için destek olabilirsin.",
			price: 20,
            buttons: [
                {
                    title: "Destek Ol",
                    link: "https://shop.animewho.com/donate/index.php?amount=20"
                }
            ]
        },
		{
            image: Destek2,
            title: "Diğer Ödeme Yöntemleri",
            description: "Diğer ödeme yöntemleriyle bize destek olabilirsiniz",
			price: 20,
            buttons: [
                {
                    title: "Destek Ol",
                    link: "https://animewho.com/destek-ol"
                }
            ]
        },
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