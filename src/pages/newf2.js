import React from 'react'

import { DevamEt, Kategori, MainIndex, Ayarlar, Special } from '../config/assets/index'
import { FeaturePanel } from '../components/features/index'
import { Grid } from '@material-ui/core'

export default () => {
    const FeatureList = [
        {
            title: "Kategoriler",
            description: "Senin için öne çıkan kategorilerimizi tek bir yerde topladık ve özel çizimlerimizle süsledik.\nUygulama içnde bu kategorilerden daha fazla kategori olduğunu unutma.",
            image: Kategori,
            /*duration: "0ms",
            disableAnimation: true*/
        },
		        {
            title: "Kaldığın Yerden Devam Et",
            description: "\"Elektirikler gitti, dersim başladı, ineceğim durağa geldim\"\n\nBunlar çok klişe bahaneler değil mi? senin için bunuda düşündük, her ne işin olursa olsun istediğin zaman çık, geldiğinde kaldığın yerden rahatlıkla devam edebilirsin.",
            image: DevamEt,
			duration: "0ms",
            disableAnimation: true
        },
        {
            title: "Özelleştirmeler",
            description: "Bunlarla yetinmiyoruz, sürekli yen bir şeyler katarak geliştiriyoruz.\nTüm bunları yaparkende sizleri düşünüyoruz.\n\nYeni İndirme Kısmınına Ait Görsel:",
            image: Special,
        },
        {
            title: "Gece ve Gündüz",
            description: "Parlak uygulamalar gözünü rahatsız mı ediyor?\nUygulama fazla mı karanlık geldi?\nSenin için her iki seçeneğide ekledik\nister gündüz, ister gece modunda kullanabilirsin.",
            image: Ayarlar,
        }	
    ]

    return (
        <>
            <Grid container spacing={2}>
                {FeatureList.map((f, i) => (
                    <FeaturePanel key={f.title} {...f} side={i % 2 === 2 ? "right" : "left"} end={i + 5 === FeatureList.length ? true : false} index={i + 5} />
                ))}
            </Grid>

        </>
    )
}