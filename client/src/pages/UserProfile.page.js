


// DISPLAY STATIC SHELVES BY ID (PUBLIC AND PRIVATE)
// should be able to get id from the user profile who has shelves attached to it
/* // PRIVATE = 1 static shelf, option to add dynamic shelves
// PRIVATE: array of ebook ids - starts empty and created on signup - if (staticShelf.length === 0)
return <p>Your Bookshelf is Empty</p>
<img> - something cute/ funny
Button to add books - takes you to search books page

ELSE call the data from the backend - should have been added to the backend when we add it to our array model, map through the data and show the names<p>*/


// to get the shelf info go to find book


import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import {displayUserBookshelves} from '../services/auth'
import CreatePrivateShelf from './Components/PrivateShelves/DynamicShelf';
import books from '../../public/bookImg'


//GET

function UserBookShelves(props){
    const {userId} = props;
    
    const initalState = {username: '', publicBookshelf: {}, privateBookshelf: {}, reviews: []}
    
    const [userBookshelfState, setUserBookshelfState] = useState(initalState)


    
    useEffect(()=>{
        displayUserBookshelves(userId)
        .then ((userBookshelves)=> setUserBookshelfState(userBookshelves))
        .catch(err => console.log(err))
    }, []);



    // potentially needs a function  to make this work = if private shelf and either shelf empty do this, if full load and map through, else if public do this etc.
    // may need to call functions to get the indivuidal bookshelves i.e. from the bookshelves services page


    if (userBookshelfState.privateBookshelf.staticShelf.length === 0) {
        return (
            <div>
                <p>Your Bookshelf is Empty</p>
                <img src={books} alt="booksImg" />
                <button><Link to="/ebooks/create">Add an ebook</Link></button>


            </div>

        )

     
    }

    else {
        return (
            <div>
                <h4>Private Bookshelf</h4>
                if(privateBookshelf.staticShelf)
            <CreatePrivateShelf />
            <h2>Searched Books</h2>
            {listBooks.map(oneBook =>{
                return(
                    <div key={oneBook.title}>
                        <h4>{oneBook.title}</h4>
{/*                         <Link to={`/books/${bookArray.data.docs._id}`}>{bookArray.data.docs.name}</Link> */}
                    </div>
                )
            })}
        </div>
        )
    }

};

export default UserBookShelves;









// PUBLIC = 3 static shelves, option to add dynamic shelves





// DISPLAY DYNAMIC SHELVES
// drop down form to add new dynamic shelves