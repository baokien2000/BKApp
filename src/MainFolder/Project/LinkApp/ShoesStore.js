import React from 'react';
import ShoesStoreIMG from "../../../Image/ShoeStore.png"
const ShoesStore = () => {
    function openInNewTab() {
        window.open('https://kstore2000.000webhostapp.com/', '_blank').focus();
    }
    return (
        <div className='LinkApp'>
            <a href='https://kstore2000.000webhostapp.com/' target="_blank">
                <img src={ShoesStoreIMG} />
                <span>Shoes Store</span>
            </a>
        </div>
    );
};

export default ShoesStore;