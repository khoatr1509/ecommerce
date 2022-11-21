import React from 'react'
import data from '../../data/data';

// console.log({ data });

let [...arr] = data;
// console.log(arr[0])

function Triplist({ trips }) {
    return (
        <>
            {
                arr.map((trip) => (
                    // TODO: CODE STYLING HERE
                    <div className="">{trip.id}</div>
                ))
            }
        </>
    )
}

// async function getServerSideProps() {
//     // Call an external API endpoint to get posts.
//     // You can use any data fetching library
//     console.log("here");
//     const res = await fetch('http://127.0.0.1:8080/activity/all')
//     const trips = await res.json()

//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time
//     console.log(trips)
//     // return {
//     //     props: {
//     //         trips,
//     //     },
//     // }
// }

export default Triplist;