import GuideItem from "./GuideItem";
import './GuideList.css';

export default function GuideList({ guides, setGuides, showActions = true }) {

    // When user press delete, the id is used to identify
    // the guide is excluded and a new version of the guide list is created.
    function deleteGuideHandler(id) {
        const isConfirmed = window.confirm("Are you sure you want to delete this guide?");
        if (isConfirmed) {
            setGuides(guides.filter(guide => guide.id !== id));
        }
    }

    // Debug output to console to help diagnose why my cards aren't showing up
    console.log('GuideList received guides:', guides);

    return (
        <div className="guide-list">
            {guides.map(guide => (
                <GuideItem 
                    key={guide.id}
                    guide={guide}
                    deleteHandler={deleteGuideHandler}
                    showActions={showActions}
                />
            ))}
        </div>
    );
}