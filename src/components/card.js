import "./card.css";
import { FaDollarSign } from "@react-icons/all-files/fa/FaDollarSign";
import { FaBookmark } from "@react-icons/all-files/fa/FaBookmark";
import { useEffect, useState } from "react";

const Card = ({ book }) => {
    let arr;
    if (localStorage.getItem("books") == null) {
        arr = [];
    } else {
        arr = JSON.parse(localStorage.getItem("books"));
    }

    const [list, setList] = useState(arr);

    function addItem(thumbnail, amount, title) {
        const newItem = { thumbnail, amount, title };
        setList((prevData) => [...prevData, newItem]);
    }

    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(list));
    }, [list]);

    return (
        <>
            {book.map((item, index) => {
                let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                let title = item.volumeInfo.title;
                if (thumbnail !== undefined && amount !== undefined) {
                    return (
                        <div className="card" key={index}>
                            <img src={thumbnail} alt="" className="book-img" />
                            <a href="#" onClick={() => addItem(thumbnail, amount, title)}><FaBookmark className="mark-book" /></a>
                            <div>
                                <h4 className="book-title">{title}</h4>
                                <p className="book-amt"><FaDollarSign />{amount}</p>
                            </div>
                        </div>
                    );
                }
                return null;
            })}
        </>
    );
};

export default Card;
