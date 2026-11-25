
import React from 'react'

function Cart({ alldata }) {
    return (
        <div >

            {
                alldata.map(function (turn) {

                    return turn.id > 2 ?

                        <div className="container" key={turn.id}>
                            <div className="row">
                                <div className="col-md-4 text-center">

                                    <h1>{turn.id}</h1>
                                    <h3>{turn.name}</h3>
                                    <p> {turn.brand}</p>
                                    <span >{turn.price}</span>
                                    <br />
                                    <span >rating:{turn.rating}</span>

                                    <h5>color:{turn.color}</h5>
                                    <hr />


                                </div>
                            </div>
                        </div>

                        : turn.id == 2 ?
                            <div className='.container text-center my-5' key={turn.id}>
                                <h4>not found</h4>
                            </div>:

                            <div className=' .container text-center my-3'>
                                <h4>welcome in Wireless Headphones</h4>
                            </div>






                    // if (turn.id > 2) {
                    //     return (
                    //         <div className="container" key={turn.id}>
                    //             <div className="row">
                    //                 <div className="col-md-4 text-center">

                    //                     <h1>{turn.id}</h1>
                    //                     <h3>{turn.name}</h3>
                    //                     <p> {turn.brand}</p>
                    //                     <span >{turn.price}</span>
                    //                     <br />
                    //                     <span >rating:{turn.rating}</span>

                    //                     <h5>color:{turn.color}</h5>
                    //                     <hr />


                    //                 </div>
                    //             </div>
                    //         </div>

                    //     )

                    // }
                    // else if (turn.id == 2) {
                    //     return (
                    //         <div className='.container text-center my-5'>
                    //             <h4>not found</h4>
                    //         </div>
                    //     )
                    // }
                    // else {
                    //     return (
                    //         <div className=' .container text-center my-3'>
                    //             <h4>welcome in Wireless Headphones</h4>
                    //         </div>
                    //     )
                    // }





                }
                )
            }

        </div>
    )
}

export default Cart