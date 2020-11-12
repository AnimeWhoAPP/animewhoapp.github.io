import React from 'react'

import { MainIndex, Search, ReklamsizKaynak, İndirme } from '../config/assets/index'
import { FeaturePanel } from '../components/features/index'
import { Grid } from '@material-ui/core'

export default () => {
    const FeatureList = [
        {
            title: "Listeni Oluştur",
            description: "Hala izlediklerini kaydedebileceğin bir yer,\nunutmamak için ekleyebileceğin bir yer,\nkız arkadaşın sana geldiğinde beğendiğin anime ve mangaları gösterebileceğin bir yer.\n\n Her şeyi düşündük \"Listem\" sayesinde istediğin animeyi tek tuşla kaydedebilirsin.",
            image: MainIndex
        },
        {
            title: "Her Şey Bir Yerde",
            description: "Hem Anime, hem Manga için ayrı ayrı aramana gerek yok, anime arayacağın zaman aşağıda anime, manga arayacağın zaman aşağıda manga yazdığından emin ol yeterli. Anime - Manga geçişini yapman için tek gereken şey ekrana dokunmak.",
            image: Search,
			duration: "6000ms"
        },
        {
            title: "Reklamsız Kaynaklar",
            description: "Tüm site ve uygulamalar 3. Parti sitelere \(Sibnet, Ok.ru, Mail.ru, Vidmoly...)\ yükleyip buradaki oynatıcılar sayesinde sizin izlemenizi sağlar fakat bu durum, oynatıcılarda fazla reklam olduğu için telefonunuzun ısınmasını, internet kotanızın fazla yemesine vb çeşitleri sorunlara yol açmaktadır. Bunun için reklamsız kaynakları geliştirdik. Bazı kaynakların reklamlarını aşarak kendi oynatıcımız içinde sizlere sunuyoruz, böylelikle daha hızlı ve telefonunuzu zorlanmadan izleme yapabilirsiniz.",
            image: ReklamsizKaynak,
            duration: "2000ms"
        },
        {
            title: "İndirme Seçeneği",
            description: "\"Archive Mi? Oda Ne\"\nÖzel olarak geliştirdiğimiz indirme sunucusudur. Diğer sitelerden reklamlı bağlantılara tıklayarak, çeşitli kısaltmalar geçmek zorunda değilsiniz artık. Tek tuşla istediğin animeyi istediğin zaman indirebilirsin. Sadece bununlada yetinmiyoruz, Archive sistemimizi beğenmezsen \"Google Drive, Cloud.ru, Yandex, Mega...\" yüklenen diğer kaynaklardanda indirebilirsin.",
            image: İndirme,
            duration: "0ms",
            disableAnimation: true
        }
    ]

    return (
        <>
            <Grid container spacing={2}>
                {FeatureList.map((f, i) => (
                    <FeaturePanel key={f.title} {...f} side={i % 2 === 2 ? "right" : "left"} end={i + 1 === FeatureList.length ? true : false} index={i + 1} />
                ))}
            </Grid>

        </>
    )
}