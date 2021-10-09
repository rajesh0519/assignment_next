import React from 'react';


function Home()
{
    return(
        <>

        <div className="social_box">
            <a href="http://instagram.com"><img src="insta.png"></img></a>
            <a href="http://facebook.com"><img src="facebook.png"></img></a>
            {/* <img src="img1.jpg"></img> */}

        </div>

        <div className="message_box">
        <button>M</button>
        </div>

            <div className="container home">
                <div className="home_text ">
                    <h1>Ferofly</h1>
                    <h2>Magnify Your Journey</h2>
                </div>

                <div  className="parallax home_parallax">

                {/* <img src="img1.jpg"></img> */}

                    {/* <Parallax bgImage={image}  className="home_parralax" >
                        <div>Hii</div>
                    </Parallax> */}
                </div>

                <div className="home_input">
                    <div>
                    <label >Check In</label>
                    <input type="date" placeholder="Name" ></input>
                    </div>

                    <div>
                    <label >Check Out</label>
                    <input type="date" placeholder="Name" ></input>
                    </div>

                    <div>
                    <label >Adults</label>
                    <input type="number" placeholder="1" ></input>
                    </div>

                    <div>
                    <label >Childs</label>
                    <input type="number" placeholder="0" ></input>
                    </div>

                    <div>
                        <label>.</label>
                        <button type="button">Search</button>
                    </div>
                   
                </div>

            </div>


        </>
    )
}

export default Home;