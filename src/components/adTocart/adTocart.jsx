
import './adTocart.css'



import { useDispatch, useSelector } from "react-redux"

export function AddTocart() {

    let dispatch = useDispatch();


    let DetailData = useSelector(function (store) {
        return store.AddToCartData;
    })

    // console.log(DetailData.adCart);
    // cart html m lga lijega, abhi chck kren

    return <div id='sabsyMainAdtocart'>
        <br />
        <br />
        <br />

        {
            DetailData.adCart.map(function (Findkiya , myIndex) {
                return (
                    <div id='adtocartMain' className="card mb-5">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div>
                                        <img
                                            src={Findkiya.pic}
                                            className="img-fluid rounded-3"
                                            alt="Shopping item"
                                            style={{ width: 65 }}
                                        />
                                    </div>
                                    <div className="ms-3">
                                        <h5>{Findkiya.name}</h5>
                                        <p className="small mb-0">{Findkiya.dsc}</p>
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center">
                                    <div style={{ width: 80 }}>
                                        <h5 className="mb-0">{Findkiya.price}</h5>
                                    </div>
                                    <a onClick={function(){
                                        dispatch({
                                            type:'CART_DEL_HOGYA',
                                            delCart:myIndex
                                        })
                                    }} href="#!" style={{ color: "#f44336" }}>
                                        <i className="fas fa-trash-alt" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                )
            })
        }





{/* 
        <div id='adtocartTotal' className="card-body">
            <div className="d-flex justify-content-between">
                <p className="mb-2">Subtotal</p>
                <p className="mb-2">$4798.00</p>
            </div>
            <div className="d-flex justify-content-between">
                <p className="mb-2">Shipping</p>
                <p className="mb-2">$20.00</p>
            </div>
            <div className="d-flex justify-content-between mb-4">
                <p className="mb-2">Total(Incl. taxes)</p>
                <p className="mb-2">$4818.00</p>
            </div>
            <button
                type="button"
                className="btn btn-info btn-block btn-lg"
            >
                <div className="d-flex justify-content-between">
                    <span>$4818.00</span>
                    <span>
                        Checkout{" "}
                        <i className="fas fa-long-arrow-alt-right ms-2" />
                    </span>
                </div>
            </button>
        </div> */}








<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

    </div>
}






