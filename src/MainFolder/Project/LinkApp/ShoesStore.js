import React from 'react';
import ShoesStoreIMG from "../../../Image/ShoeStore.png"
const ShoesStore = () => {
    return (
        <div className='LinkApp'>
            <a href='https://kstore2000.netlify.app/' target="_blank">
                <img src={ShoesStoreIMG} />
                <span>Shoes Store</span>
            </a>
        </div>
    );
};

export default ShoesStore;