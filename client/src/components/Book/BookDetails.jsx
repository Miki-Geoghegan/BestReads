
// get details by book id and display

import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import {getOneBook} from '../../services/api.services'
import NewReview from '../../components/Reviews/Review'
import {allReviews} from '../../services/review.services'


function BookDetails(props){
    const {olid} = props; // this needs to come from somewhere
    
    const [bookState, setBookState] = useState({})
    const [reviewState, setReviewState] = useState([])

    // books - public shelf info = bookid from the API: manually add to test
    // profile: state to hold array of books from the API - on profile p. map through and show info needed (i.e. name and link) - pass the entire object as a prop 
    // modify model for shelf and bookshelf - author, title, id (olid), openlibrary link, cover link


    useEffect(()=>{
        getOneBook(olid)
        .then ((book)=> setBookState(book.data))
        .then (() => allReviews(olid)
        .then(dbReviews => setReviewState(dbReviews)))
        
        .catch(err => console.log(err))
    }, []);

    // map the array of reviews 
    // same as creating a bookshelf, update the state in here

       return (
            <div className="single-book">
                <h2>Book details</h2>
                <h4>{bookState.title}</h4>
                <h6>{bookState.author}</h6>
                <img src={bookState.coverUrl} alt="BookImg" />
                <Link to='/ol link should be here'></Link>
                <NewReview book= {olid}/>
                <h4>All Reviews:</h4>
                <div>
                    {reviewState.comment && reviewState.comment.map(eachComment => {
                        console.log('this is the current book', eachComment)
                        return(
                        <div key={eachComment._id}>
                            <img src={eachComment.coverUrl} alt="BookImg" />
                            <h2>{eachComment.title}</h2>
                            <Link to={`/`}>{eachComment.title}</Link>
                        </div>
                        )
                    })}

                </div>
        
            </div>
        )
};

export default BookDetails;