import "./books.css"
import { FaBookmark } from "@react-icons/all-files/fa/FaBookmark";
import {Link} from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import Card from "./card";

function Books(){
    const [search, setsearch]=useState("");
    const [bookdata, setdata]=useState([]);
    const searchBook=(e)=>{
        if(e.key==="Enter"){
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=YOUR API KEY'+'&maxResults=10')
            .then(res=>setdata(res.data.items))
            .catch(err=>console.log(err))
        }
        console.log(bookdata)
    }
    return(
        <div className="books">
            <h1>BookLists</h1>
            <p className="my-booklist"><button className="book-butt"><Link className="buttlink" to="/mybooks">My Booklist <FaBookmark className="book-mark"/></Link></button></p>
            <div className="search">
                <input type="text" placeholder="Search" value={search} onChange={e=>setsearch(e.target.value)}
                onKeyPress={searchBook}/>
            </div>
            <div className="src-books">
                {
                    <Card book={bookdata}/>
                }
            </div>
        </div>
    )
}

export default Books
