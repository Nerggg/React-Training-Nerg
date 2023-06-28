import './Text.css'
import React from 'react';
import {useState} from "react";
const ItemDetails = () => {
    const [Item, setItem] = useState("");
    return (
        <React.Fragment>
            <div className="B1">
                Item Details
            </div>
            <div className="B2">
                Item Name*
                <form >
                    <input
                    class="border-2 border-black-400 rounded bg-gray-200 w-full py-2 px-4"

                    type="text" 
                    value={Item}
                    onChange={(e) => setItem(e.target.value)}
                    />
                </form>
            </div>
            <div className='Item'>Item Price* </div>
            <div className='Item'>Item Age*</div>
            <div className='ItemBox'>
            <form >
                <input
                class="border-2 border-black-400 rounded bg-gray-200 w-full py-2 px-4"

                type="text" 
                value={Item}
                onChange={(e) => setItem(e.target.value)}
                />
            </form>                
            </div>
            <div className='ItemBox2'>
            <form >
                <input
                class="border-2 border-black-400 rounded bg-gray-200 w-full py-2 px-4"

                type="text" 
                value={Item}
                onChange={(e) => setItem(e.target.value)}
                />
            </form>                
            </div>
        </React.Fragment>
    );
};

export default ItemDetails;