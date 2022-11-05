import React from 'react'

function Triplist({ trips }) {
    console.log("hello")
    return (
        <>
            <div> {trips} </div>
            <div>Triplisat</div>
        </>
    )
}

async function getServerSideProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    console.log("here");
    const res = await fetch('http://127.0.0.1:8080/activity/all')
    const trips = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    console.log(trips)
    // return {
    //     props: {
    //         trips,
    //     },
    // }
}

export default Triplist;