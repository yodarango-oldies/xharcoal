const VanillaCupCake = () => {
    return (
        <div className = 'website-info-page'>
            <h1 className = 'left-greeting'>Vanilla Cupcake <br />Blogger 🧁</h1> {/*title*/}
            <h2 className = 'std-p--price'>Only $99.99</h2> 
            <p className = 'std-p std-p--no-margin'><i>(Plus $25 a year for hosting)</i></p>


            <div className = "website-info-page_blog-desc"> {/*Blog Desccription Wrapper Starts*/}
                <div className = 'blog-desc_image'></div>
                <div className = 'blog-desc_desc'>
                    <p className = 'std-p'>The Vanilla Cupcake Blooger is a fully customizable blog for those 
                    who take blogging seriously. <br /><br /> Built with the best SEO practices, the greatest technologies and the
                    the latest design petterns. The Blog was programmed with the following concepts in mind: </p>
                
                    <br />
                    <br />

                    <div className = 'desc_step'><span>1</span> Steel-tough Security 🔒</div>
                    <div className = 'desc_step'><span>2</span> Top Google Ranking 📈</div>
                    <div className = 'desc_step'><span>3</span> Ease Of Use 🙌</div>
                    <div className = 'desc_step'><span>4</span> Light Speed Fast ⚡</div>
                    <div className = 'desc_step'><span>5</span> Elegant Style 🎨</div>

                    <br />
                    
                    <p className = 'std-p'>Only the latest and greates technologies were used to assure the best experience to your audience</p>

                    <div className = 'desc_technologies-wrapper'>
                        <div className = 'technologies-wrapper_technology'></div>
                        <div className = 'technologies-wrapper_technology'></div>
                        <div className = 'technologies-wrapper_technology'></div>
                    </div>
                </div>

            </div> {/*Blog Desccription Wrapper Ends*/}
            
            <div className = 'broken-down-features-grid'> {/*Blog Steps Wrapper Ends*/}
                            {/*FIRST*/}
                <div className = 'broken-down-features-grid_icon-1 grid-icon'></div>
                <div className = 'broken-down-features-grid_steps-1 grid-steps'>
                    <h3>Post Creation</h3>
                    <ol>
                        <li>Enjoy A Rich Text Editor</li>
                        <li>Categorize blogs by uni-tag or multi-tag</li>
                        <li>Add images, embed-multimedia, or type raw html code</li>
                        <li>Automatically send an emial to yours bubs upon new posts</li>
                    </ol>
                </div>
                <div className = 'broken-down-features-grid_image-1 grid-image'></div>
                             {/*SECOND*/}
                <div className = 'broken-down-features-grid_icon-2 grid-icon'></div>
                <div className = 'broken-down-features-grid_steps-2 grid-steps'>
                    <h3>Multimedia Embeding</h3>
                    <ol>
                        <li>Embed mutlimedia in various places</li>
                        <li>Add a Paypal button in Menu or wherever you'd like</li>
                        <li>Link your social media platforms</li>
                    </ol>
                </div>
                <div className = 'broken-down-features-grid_image-2 grid-image'></div>
                            {/*THIRD*/}
                <div className = 'broken-down-features-grid_icon-3 grid-icon'></div>
                <div className = 'broken-down-features-grid_steps-3 grid-steps'>
                    <h3>Allowed Feedback</h3>
                    <ol>
                        <li>Let your audience express their appreciation</li>
                        <li>Do people love your blog? Great, they can subscribe</li>
                        <li>Have them contact you if they wish</li>
                    </ol>
                </div>
                <div className = 'broken-down-features-grid_image-3 grid-image'></div>
                            {/*FOURTH*/}
                <div className = 'broken-down-features-grid_icon-4 grid-icon'></div>
                <div className = 'broken-down-features-grid_steps-4 grid-steps'>
                    <h3>Top Level Security</h3>
                    <ol>
                        <li>Login credentials are strongly encripted</li>
                        <li>Don't appreciate a comment or subscriber? Just delete it</li>
                        <li>Change your loging credentials at any time</li>
                    </ol>
                </div>
                <div className = 'broken-down-features-grid_image-4 grid-image'></div>
            </div> {/*Blog Steps Wrapper Ends*/}

            <a href = 'https://savvy-saute.herokuapp.com' target="_blank" rel="noopener noreferrer" className = 'infoButton'>See it Live</a>

        </div>
    )
}

export default VanillaCupCake
