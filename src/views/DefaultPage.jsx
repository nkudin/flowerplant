import gardenImage from '../assets/garden-hero-image.jpg';
import './DefaultPage.css';
import GuideList from '../components/GuideList';

export default function DefaultPage() {

    const defaultGuides = [
        {
            id: 1,
            name: "Spider Plant",
            scienceName: "Chlorophytum comosum",
            light: "Medium indirect",
            water: "Once a week",
            soil: "Well-draining potting mix",
            level: "Easy",
        },
        {
            id: 2,
            name: "Fiddle Leaf Fig",
            scienceName: "Ficus lyrata",
            light: "Bright indirect",
            water: "Every 7-10 days",
            soil: "Rich, moist soil",
            level: "Intermediate",
        },
        {
            id: 3,
            name: "Aloe Vera",
            scienceName: "Aloe barbadensis miller",
            light: "Bright light",
            water: "Every 2-3 weeks",
            soil: "Sandy, well-draining soil",
            level: "Easy",
        }
    ];

    return (
        <>
            <section className="hero-section">
                <img src={gardenImage} className="hero-image" alt="Garden Hero Image from Pixabay" />
                <div className="hero-text">
                    <h1 className="title">Welcome to FlowerPlant!</h1>
                    <h3 className="welcome-body">This is a website about plant care and creating your own guides</h3>
                    <p className="welcome-body">You can find guides created by other users, or create your own guide to share with the world! Head over to the "My Guides" section to get started with your own guides, or click on the About page to learn more about the site.</p>
                </div>
            </section>
            <section className="featured-guides">
                <h2>Featured Plant Guides</h2>
                <GuideList guides={defaultGuides} setGuides={() => {}} showActions={false} />
            </section>
        </>
    )
}