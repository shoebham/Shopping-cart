
const Home = ()=>{

    return(
        <div>
            <div className="center">
                <h1>Home</h1>
            </div>
            <div className="content-home">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <button className="explore-button slide-right" onClick={()=>{
                    // take to shop page
                    window.location.href = "https://shoebham.github.io/Shopping-cart/shop";
                }}>Explore</button>
            </div>
        </div>
    )
}

export default Home;