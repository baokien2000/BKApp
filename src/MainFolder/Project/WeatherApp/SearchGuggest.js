
import City from '../../../Json/City.json';

export default function SearchSuggest(props) {
    const Preprocessing = (data) => {
        return data.toLowerCase()
    }
    if (props.SearchInput != '') {
        let searchData = City.filter(city =>
            Preprocessing(city.city).includes(Preprocessing(props.SearchInput))
        ).slice(0, 5)

        return (
            <div className='SearchSuggesst'>
                {searchData.map(item => (
                    <span key={item.city} onClick={() => props.GetSuggestion(item.city)}>
                        {item.city}
                    </span>
                ))}
            </div>
        )
    }
    return;
}