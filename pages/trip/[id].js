import { useRouter } from 'next/router'
import React from 'react'
import data from '../../data/data';

let [...arr] = data;

const Trip = () => {
    const router = useRouter()
    const { id } = router.query;
    let tr = arr[id - 1];
    // console.log(arr[id - 1]);
    console.log(tr)
    return (
        <div>
            <p>{tr.description}</p>
            <p>{tr.price}</p>
        </div>
    )
}

export default Trip