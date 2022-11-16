import { withRouter } from 'next/router';
// export const Checkout = ({ props }) => {
//     return (
//         props.map(i => {
//             return <div>i</div>
//         })
//     )
// }

const Checkout = (a) => {
    let l = JSON.parse(a.a)
    // const object = JSON.parse(query.object);
    return (
        <div>
            {
                l.map(i => {
                    return (
                        //TODO:
                        <div>{i}</div>)
                })
            }
        </div>
    );
}
export default withRouter(Checkout);

export async function getServerSideProps(context) {
    console.log(context.query)
    let a = context.query.object;
    return {
        props: { a }, // will be passed to the page component as props
    }
}