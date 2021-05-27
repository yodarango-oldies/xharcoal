import SavvySaute from '../../images/savvysaute.com.png'

const StoreCarrousel = ({buyForm}) => {

    return (
        <div className = "carrousel-display">
            <div className="web-card web-card--store">
                <img src={ SavvySaute } alt="web design" className="web-card_img" alt = 'website thumbnail'/>
                <div className="web-card_desc-title">
                    <h2 className="desc-title_title">Vanilla Blogger</h2>
                    <p className="desc-title_desc">
                    The "Vanilla Blogger" website is now available! Fully customizable website, modern looking website
                    </p>
                    <div className = 'buy-btn' onClick = {buyForm} >Buy</div>
                    <a className = 'try-btn' href = 'https://savvy-saute.herokuapp.com' >Try It</a>
                </div>
            </div>
        </div>
    )
}

export default StoreCarrousel
