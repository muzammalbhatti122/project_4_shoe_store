
import { useParams } from 'react-router-dom'
import './detail.css'
import { useDispatch, useSelector } from 'react-redux';
import { Slider } from '../slider/slider';
import {Link} from 'react-router-dom'



export function Detail() {


    
    let allCardDetail = useSelector(function(a){
        return a.adAllcards.allCard
    })
    let params = useParams();
    
    let FindKiDetail = allCardDetail.find(function(card){
        return card.id == params.id
    })

    // console.log(FindKiDetail);

    let dispatch = useDispatch();


    // function TotalAmount(){
    //     let amount = 0; 

    //     {
    //         allCardDetail.map(function(a){
    //            for(let n of a.price){
    //             if(n > 0){
    //                    amount = +n 
    //             }
    //            }
    //         })
    //     }
    //     return amount
    // }

    

    return <div>
        <div id="detail-container">

            <div id="imgContainer">
                <img src={FindKiDetail.pic} alt="" />
            </div>

            <div id="detailTextContainer">

                <h3>{FindKiDetail.name}</h3>
                <h4>{FindKiDetail.dsc}</h4>
                <h4>Price: {FindKiDetail.price}</h4>
                <span>(also incl all duty charges)</span>
                <br />
                <br />
                <br />
                <br />
                <select id='select'>
                    <option value="Select Size">Select Size</option>
                    <option value="UK:8">UK:8</option>
                    <option value="UK:8">UK:9</option>
                    <option value="UK:8">UK:10</option>
                    <option value="UK:8">UK:8.1</option>
                    <option value="UK:8">UK:8.2</option>
                    <option value="UK:8">UK:8.3</option>
                    <option value="UK:8">UK:8.4</option>
                    <option value="UK:8">UK:8.5</option>
                    <option value="UK:8">UK:9.1</option>
                    <option value="UK:8">UK:9.2</option>
                    <option value="UK:8">UK:9.3</option>
                    <option value="UK:8">UK:9.4</option>
                    <option value="UK:8">UK:9.5</option>
                    <option value="UK:6.9">UK:6.9</option>
                    <option value="UK:7.1">UK:7.1</option>
                    <option value="UK:10">UK:10</option>
                </select>

                <br />
                <br />
                <br />
                <br />
                <div id="btn-detail">
                    <Link to='/addtocart'>
                    <button onClick={()=>{
                        dispatch({
                            type:'ADDTOCART_HOGYA',
                            cart:FindKiDetail
                        })
                    }} id="btn1">Add To Cart</button>
                    </Link>
                    <br />
                    <br />
                    <button id="btn2">Online Payments</button>
                </div>

            </div>

        </div>
        <br />
        <br />
        <h3 className="min-text">Coming Soon .................</h3>
        <br />
        <br />
        <Slider></Slider>
        <br />
        <br />
        <br />

    </div>
}