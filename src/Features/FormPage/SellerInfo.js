import './Text.css'
import React from 'react';
import {useState} from "react";
const SellerInfo = () => {
    const [name, setName] = useState("");
    const [PhoneNumber, setPhone] = useState("");
    const [Line, setLine] = useState("");
    const [Ig, setIg] = useState("");
    return (
        <React.Fragment>
            <div className="B1">
                Seller Information
            </div>
            <div className="B2">
                Seller Name*
                <form >
                    <input
                    class="border-2 border-black-400 rounded bg-gray-200 w-full py-2 px-4"

                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </form>
                Phone Number*
                <form >
                    <input
                    class="border-2 border-black-400 rounded bg-gray-200 w-full py-2 px-4"

                    type="text" 
                    value={PhoneNumber}
                    onChange={(e) => setPhone(e.target.value)}
                    />
                </form>
                ID LINE 
                <form >
                    <input
                    class="border-2 border-black-400 rounded bg-gray-200 w-full py-2 px-4"

                    type="text" 
                    value={Line}
                    onChange={(e) => setLine(e.target.value)}
                    />
                </form>
                Instagram Username
                <form >
                    <input
                    class="border-2 border-black-400 rounded bg-gray-200 w-full py-2 px-4"

                    type="text" 
                    value={Ig}
                    onChange={(e) => setIg(e.target.value)}
                    />
                </form>
            </div>

        </React.Fragment>
    );
};

export default SellerInfo;