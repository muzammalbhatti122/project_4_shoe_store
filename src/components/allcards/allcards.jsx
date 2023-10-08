
import { useSelector } from 'react-redux';
import './allcards.css'
import { Link } from 'react-router-dom';



export function AllCards() {


    let allCardsData = useSelector(function (store) {
        return store.adAllcards
    })

    return <div>
        <div id="allCards-container">
            {

                allCardsData.allCard.map(function (allCard) {

                    return <div id='meramainCard'>
                        <Link to={'/detail/'+allCard.id}>
                        
                        <div id="allCards">
                            <img src={allCard.pic} alt="" />
                        </div>
                        <h5>{allCard.name}</h5>
                            <h6>{allCard.dsc}</h6>
                        <div id="min-text">
                        <h6 id='allCardsPrice'>RS....  {allCard.price}</h6>
                        <span id='sale'>{allCard.sale}</span>

                        </div>
                        </Link>

                    </div>;
                })}

        </div>
    </div>
}