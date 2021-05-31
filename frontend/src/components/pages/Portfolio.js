import { Link} from 'react-router-dom';

const Portfolio = () => {
    return (
        <div className = "main-wrapper-portfolio">
            <h1 className = "main-wrapper-portfolio_design">Design</h1>
            <Link to= "/portfolio/graphic-design" className = "main-wrapper_graphic">Graphic</Link>
            <Link to= "/portfolio/web-design" className = "main-wrapper_web"> Web</Link>
        </div>
    )
}

export default Portfolio
