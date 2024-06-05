import "./card.css";
import { FaDollarSign } from "@react-icons/all-files/fa/FaDollarSign";
import React, { useEffect, useState } from "react";

const ShowCard = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        const storedList = JSON.parse(localStorage.getItem("books"));
        if (storedList) {
            setList(storedList);
        }
    }, []);

    return (
        <>
        <h1>My Books</h1>
        <div className="src-books">
            {list.map((item, index) => {
                if (item.thumbnail && item.amount) {
                    return (
                        <div className="card" key={index} style={{maxHeight:'500px'}}>
                            <img src={item.thumbnail} alt="Book Thumbnail" className="book-img" />
                            <div>
                                <h4 className="book-title">{item.title}</h4>
                                <p className="book-amt">
                                    <FaDollarSign />{item.amount}
                                </p>
                            </div>
                        </div>
                    );
                }
                return null;
            })}
        </div>
        </>
    );
};

export default ShowCard;
