import React, {useEffect, useState} from 'react';
import NewReview from '../../components/Reviews/NewReview';
import {searchOneWork} from '../../services/api.services'
import {allReviews} from '../../services/review.services'
import './BookDetails.css'
const baseURL = `https://openlibrary.org`;


function BookDetails(props){

    const {bookId} = props.match.params
    const {user} = props
    const [bookState, setBookState] = useState({})
    const [reviewsState, setReviews] = useState([])




    function filter(book) {
      let result = {
          author: book.author_name,
          title: book.title,
          _id: book.key.replace("/works/", ""),
          olLink: `https://openlibrary.org${book.key}`
      }

      if (book.cover_edition_key) result.coverUrl = `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-L.jpg`;

      //console.log("result: ", result)
      return result 

    }

    useEffect(() => {
        searchOneWork(bookId).then(res => setBookState(filter(res.data.docs[0])));
        allReviews(bookId).then(res => setReviews(res.data))
    }, [bookId])

    return (
        <div className="details-page-container">
            <div className="details-main">
                <h2>{bookState.title}</h2>
                <img src={bookState.coverUrl} alt="" />
                <a href={bookState.olLink} target="blank" >See Open Library page</a>
                <NewReview user={user} bookId={bookId} />
            </div>
            <div className="details-reviews">
                {reviewsState.map(eachReview => {
                    return(
                    <div className="review-comments">
                        <h6>{eachReview.rating} &#10084;</h6>
                        <p>"{eachReview.comment}"</p>
                    </div>
                    )
                })}
            </div>
        </div>

        )
};

export default BookDetails;