import { Link } from "react-router-dom";

export default function  GuideItem ({ guide, deleteHandler }) {

    return (
        <div className="guide-item">
            <h3>
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
                <Link to={`/update/${guide.id}`}>Update guide</Link>
                <button onClick={() => deleteHandler(guide.id)}>Delete guide</button>
            </div>
        </div>
    )
}