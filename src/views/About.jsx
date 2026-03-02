import gardenerImage from '../assets/gardener.jpg';
import './About.css';

export default function About() {

    return (
        <section className="hero-section">
            <img src={gardenerImage} className="hero-image" alt="Gardener Hero Image from Pixabay" />
            <div className="hero-text">
                <h1 className="title">Who are we?</h1>
                <h3 className="welcome-body">We are FlowerPlant!</h3>
                <p className="welcome-body">FlowerPlant is a community-driven platform for sharing plant care guides and tips. Our mission is to help gardeners of all levels grow beautiful, healthy plants. We know how difficult it is for beginners to get started, so we're here to make the hobby easier to understand and enjoy.</p>
                <h3 className="welcome-body">What do we do?</h3>
                <p className="welcome-body">We provide a space for users to create and share their own plant care guides, as well as browse and learn from guides created by others. Whether you're a seasoned gardener or just starting out, you'll find valuable information and inspiration on our site.</p>
                <h3 className="welcome-body">Why choose us?</h3>
                <p className="welcome-body">At FlowerPlant, we believe that gardening should be accessible and enjoyable for everyone. Our platform is designed to be user-friendly and inclusive, with a focus on community and collaboration. We are passionate about plants and gardening, and we want to share that passion with others. Join us today and start growing your green thumb!</p>
            </div>
        </section>
    )
}