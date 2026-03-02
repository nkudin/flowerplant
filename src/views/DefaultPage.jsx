import gardenImage from '../assets/garden-hero-image.jpg';
import './DefaultPage.css';

export default function DefaultPage() {

    return (
        <section className="hero-section">
            <img src={gardenImage} className="hero-image" alt="Garden Hero Image from Pixabay" />
            <div className="hero-text">
                <h1 className="title">Welcome to FlowerPlant!</h1>
                <h3 className="welcome-body">This is a website about plant care and creating your own guides</h3>
                <p className="welcome-body">You can find guides created by other users, or create your own guide to share with the world! Head over to the "My Guides" section to get started with your own guides, or click on the About page to learn more about the site.</p>
            </div>
        </section>
    )
}