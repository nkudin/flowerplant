import './Footer.css'


// This code uses <span> to separate the words considered "labels" away from the rest of the code. this allows me to do some cute formatting with them :)

export default function Footer() {

    return (
        <footer className="footer">
            <div className="main">
                <h3 className="title">Contact information:</h3>

                
                <p className="para">
                    <span className="label">Address:</span> 123 Botanical Lane, Green City, 2345 Copenhagen, Denmark
                </p>
                <p className="para">
                    <span className="label">Email:</span> flowplant123@flowerplant2026.dk
                </p>
                <p className="para">
                    <span className="label">Mobile:</span> +452076765
                </p>

                <p className="small">
                    © 2026 FlowerPlant. All rights reserved.
                </p>
            </div>
        </footer>
    );
}