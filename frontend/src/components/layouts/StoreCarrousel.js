import SavvySaute from '../../images/savvysaute.com.png'

const StoreCarrousel = ({openDisclaimer}) => {

    return (
        <div className = "carrousel-display">
            <div className="web-card web-card--store">
                <img src={ SavvySaute } alt="web design" className="web-card_img" alt = 'website thumbnail'/>
                <div className="web-card_desc-title">
                    <h2 className="desc-title_title">Vanilla Blogger</h2>
                    <p className="desc-title_desc">
                    The "Vanilla Blogger" website is now available! Fully customizable website, modern looking website
                    </p>
                    <div className = 'buy-btn' onClick = {openDisclaimer} >Buy</div>
                    <a href="/store/vanilla-cupcake" className="try-btn">More</a> 
                </div>
            </div>
        </div>
    )
}

export default StoreCarrousel
