import GuideItem from "./GuideItem";

export default function GuideList({ guides, setGuides }) {

    // When user press delete, the id is used to identify
    // the guide is excluded and a new version of the guide list is created.
    function deleteGuideHandler(id) {
        const isConfirmed = window.confirm("Are you sure you want to delete this guide?");
        if (isConfirmed) {
            setGuides(guides.filter(guide => guide.id !== id));
        }
    }

    return (
        <div>
            {guides.map(guide => (
                <GuideItem 
                    key={guide.id}
                    guide={guide}
                    deleteHandler={deleteGuideHandler}
                />
            ))}
        </div>
    );
}