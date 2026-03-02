export default function Searchfield({handleinput, filter}) {

    return (
        <input type="search" placeholder="Find your guide..." value={filter} onChange={handleinput} style={{border: '1px solid #ccc', borderRadius: '4px', padding: '8px', width: '100%'}} />
    )
}