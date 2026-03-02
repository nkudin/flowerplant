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

    // Debug output to help diagnose rendering issues
    console.log('GuideList received guides:', guides);

    if (!guides || guides.length === 0) {
        return <div className="guide-list"><p>No guides to show.</p></div>;
    }

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