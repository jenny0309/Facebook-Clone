import React, { useEffect, useState } from 'react'
import "./Feed.css"
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from "./StoryReel"
import db from "./firebase"

function Feed() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => { // methods provided by firebase library
                setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        })
    }, []) // empty array => run the codes only once

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            {posts.map(post => (
                <Post
                    key={post.data.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}

            {/* <Post
                profilePic="https://vignette.wikia.nocookie.net/ageofempires/images/6/64/Leitisicon.png/revision/latest?cb=20191110154530"
                message="Go UBC!"
                timestamp="This is a timestamp"
                username="Cavin"
                image="https://the-peak.ca/wp-content/uploads/2017/02/UBCVSSFU--696x506.jpg"
            />
            <Post
                profilePic="https://qph.fs.quoracdn.net/main-qimg-aef91710126609ad845a8754b0e672d6.webp"
                message="Now I am here!"
                timestamp="This is a timestamp"
                username="Kate"
                image="https://www.konacoastvacations.com/wp-content/uploads/2017/02/4-Bed-Kona-Homes.jpeg"
            />
            <Post
                profilePic="https://upload.wikimedia.org/wikipedia/commons/d/d1/Julian-Brandt.jpg"
                message="Yo guys, who want some?"
                timestamp="This is a timestamp"
                username="Shane"
                image="https://s3-media0.fl.yelpcdn.com/bphoto/haAsfyyFu5xmLYP7-o_TOg/o.jpg"
            /> */}
        </div>
    )
}

export default Feed
