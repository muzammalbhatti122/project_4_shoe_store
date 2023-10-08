
import { AllCards } from '../allcards/allcards'
import { Cards4 } from '../cards4/cards4'
import { Slider } from '../slider/slider'
import './section.css'
import { Chat } from '../chat/chat'

export function Section(){
    return <div>
        <img id="sec-img" src="sec.PNG" alt="" />
        <br />
        <br />
        <br />
        <Cards4></Cards4>
        <br />
        <br />
        <h3 className='min-text'>By Nike</h3>
        <br />
        <br />
        <br />
        <Slider></Slider>
        <br />
        <br />
        <h3 className="min-text">Products</h3>
        <br />
        <br />
        <AllCards></AllCards>
        <br />
        <br />
        <br />
       
       <Chat></Chat>
    </div>
}