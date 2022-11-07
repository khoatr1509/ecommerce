import React from 'react'
import data from '../../data/data';
import classes from '../../styles/TripList.module.css'

console.log({ data });

let [...arr] = data;
console.log(arr[0])

function Triplist({ trips }) {
    return (
        <div className={classes.container}>
            {
                arr.map((trip) => (
                    // TODO: CODE STYLING HERE
                    <div key={trip.id} className={classes.table}>
                        <img className={classes.logo} src={trip.img_url}></img>
                        <h1 className={classes.tourName}>{trip.tour_name}</h1>
                        <p className={classes.tourDescription}>{trip.description}</p>
                        <div className={classes.cate}>
                            <div className={classes.tag}>$12.11</div>
                            <div className={classes.tag}>12k reviews</div>  
                            <div className={classes.tag}>2 hours</div>
                        </div>
                        <div className={classes.btn}>
                            <button>Add to plan</button>
                            <button>Details</button>
                        </div>
                    </div>
                ))
            }
        </div>
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