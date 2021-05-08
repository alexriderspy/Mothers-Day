import ClosedGiftBox from './closedgiftbox.jpg'
import ImageSlider from './ImageSlider'
import {SliderData} from './SliderData'

const Gift = ({onClick, isVisible}) => {
    return (
        <div className='gift'>
            
            <img className='giftbox'src={ClosedGiftBox} onClick={onClick}/>
            {!isVisible &&(
                <h4>To discover something click on this giftbox!</h4>
                )}
            {isVisible && (<ImageSlider slides={SliderData}/>)}
            
        </div>
    )
}

export default Gift
