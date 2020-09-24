import React from 'react'
import Story from './Story'
import './StoryReel.css'

function StoryReel() {
    return (
        <div className='storyReel'>
            {/* Story */}
            <Story 
                image="https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images-medium-5/milton-friedman-john-lehman.jpg" 
                profileSrc="https://vignette.wikia.nocookie.net/ageofempires/images/6/64/Leitisicon.png/revision/latest?cb=20191110154530" 
                title="Cavin Walton" 
            />
            {/* Story */}
            <Story 
                image="https://wallpaperboat.com/wp-content/uploads/2019/04/white-rose-iphone-wallpaper-image-002.jpg" 
                profileSrc="https://pds.exblog.jp/pds/1/201407/18/75/b0298475_17283938.jpg" 
                title="Clara Rose" 
            />
            {/* Story */}
            <Story 
                image="https://cms.nhl.bamgrid.com/images/photos/314226542/raw.jpg" 
                profileSrc="https://upload.wikimedia.org/wikipedia/commons/d/d1/Julian-Brandt.jpg" 
                title="Shane Morven" 
            />
            {/* Story */}
            <Story 
                image="https://images.unsplash.com/photo-1509610696553-9243c1e230f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" 
                profileSrc="https://qph.fs.quoracdn.net/main-qimg-aef91710126609ad845a8754b0e672d6.webp" 
                title="Kate White" 
            />
            {/* Story */}
            <Story 
                image="https://wallpapercave.com/wp/wp3087342.jpg" 
                profileSrc="https://as01.epimg.net/futbol/imagenes/2019/10/21/internacional/1571637963_758219_1571639276_noticia_normal.jpg" 
                title="Jason Leigh" 
            />
        </div>
    )
}

export default StoryReel
