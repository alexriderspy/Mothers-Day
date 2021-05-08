import ClosedGiftBox from './closedgiftbox.jpg'
import ImageSlider from './ImageSlider'
import {SliderData} from './SliderData'

const Gift = ({onClick, isVisible}) => {
    return (
        <div className='gift'>
            
            <img className='giftbox'src={ClosedGiftBox} onClick={onClick}/>
            {isVisible && (<ImageSlider slides={SliderData}/>)}
            
        </div>
    )
}

export default Gift
