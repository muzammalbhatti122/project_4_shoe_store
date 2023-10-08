import { useSelector } from "react-redux"

import './cards4.css'

export function Cards4() {


    let cards4Data = useSelector(function (store) {
        return store.adCards4
    });

    return <div>

        <div id='main-cards4'>

            {

                cards4Data.card4.map(function (s) {

                    return <div className="cards4" >

                        <img src={s.pic} className="card-img-top" alt="..." />

                        <div className="card-body">

                            <h5 id='cards4-text' className="card-text">

                                {s.name}

                            </h5>

                        </div>
                    </div>

                })


            }
        </div>

    </div>
}