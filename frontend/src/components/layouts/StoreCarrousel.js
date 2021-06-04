import vanillaBlogger from '../../images/vanillacupcakeblogger.png';
import { Link } from 'react-router-dom';

const StoreCarrousel = ({openDisclaimer}) => {

    return (
        <div className = "carrousel-display">
            <div className="web-card web-card--store">
                <img src={ vanillaBlogger } alt="web design" className="web-card_img" alt = 'website thumbnail'/>
                <div className="web-card_desc-title">
                    <h2 className="desc-title_title">Vanilla Blogger</h2>
                    <p className="desc-title_desc">
                    The "Vanilla Cupcake Blogger" is now available!
                    </p>
                    <p className = "std-p--price">Only $99.99</p>
                    <div className = 'buy-btn' onClick = {openDisclaimer} >Buy</div>
                    <Link to = "/store/vanilla-cupcake" className="try-btn">More</Link> 
                </div>
            </div>
        </div>
    )
}

export default StoreCarrousel
