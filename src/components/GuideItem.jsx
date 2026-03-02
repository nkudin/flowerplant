import { Link } from "react-router-dom";
import './GuideItem.css'

export default function  GuideItem ({ guide, deleteHandler }) {

    return (
        <div className="guide">
        <div className="guide-item">
            <div className="guide-container">
                <h3 className="guide-title">
                    {guide.name}
                </h3>
                <div className="guide-body">
                    <p>Scientific Name: {guide.scienceName}</p>
                    <p>Light level: {guide.light}</p>
                    <p>Water frequency: {guide.water}</p>
                    <p>Soil type: {guide.soil}</p>
                    <p>Difficulty: {guide.level}</p>
                </div>
                <div className="guide-actions">
                    <div className="guide-actions-container">
                        <Link to={`/update/${guide.id}`}>Update guide</Link>
                    </div>
                    <div className="guide-actions-container">
                        <button onClick={() => deleteHandler(guide.id)}>Delete guide</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}