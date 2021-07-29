import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {getOneBook} from "../services/api.services"

function Test(props) {

    const [state, setState] = useState("")
    const [result, setResult] = useState({})

    function handleChange(event) {
        setState(event.target.value)

    }

    function handleSubmit(event) {
        event.preventDefault()
        getOneBook(state).then(res => setResult(res)).catch(err => console.log(err))
    }


    return (
<div class='container'>
  <div class='center list flex-column'>
    <div class='card flex-row open'>
      <img src='http://i.harperapps.com/covers/9780008108298/y450-293.jpg' class='book'/>
      <div class='flex-column info'>
        <div class='title'>The Fellowship of the Ring</div>
        <div class='author'>J.R.R. Tolkien</div>
        <div class='hidden bottom summary'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod ratione impedit temporibus maiores autem aperiam assumenda exercitationem, quisquam nobis esse.
        </div>
      </div>
      <div class='flex-column group'>
        <div class='members'>
          <span class='current'>14</span> /
          <span class='max'>30</span>
        </div>
        <div class='hidden bottom'>
          <button class='simple'>Join</button>
        </div>
      </div>
    </div>
    <div class='card flex-row'>
      <img src='https://i.pinimg.com/originals/52/ec/12/52ec12f7dd324864949267c92cce2e43.jpg' class='book'/>
      <div class='flex-column info'>
        <div class='title'>1984</div>
        <div class='author'>George Orwell</div>
        <div class='hidden bottom summary'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod ratione impedit temporibus maiores autem aperiam assumenda exercitationem, quisquam nobis esse.
        </div>
      </div>
      <div class='flex-column group'>
        <div class='members'>
          <span class='current'>14</span> /
          <span class='max'>30</span>
        </div>
        <div class='hidden bottom'>
          <button class='simple'>Join</button>
        </div>
      </div>
    </div>
    <div class='card flex-row'>
      <img src='https://images-na.ssl-images-amazon.com/images/I/51N5qVjuKAL._SX309_BO1,204,203,200_.jpg' class='book'/>
      <div class='flex-column info'>
        <div class='title'>To Kill a Mockingbird</div>
        <div class='author'>Harper Lee</div>
        <div class='hidden bottom summary'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod ratione impedit temporibus maiores autem aperiam assumenda exercitationem, quisquam nobis esse.
        </div>
      </div>
      <div class='flex-column group'>
        <div class='members'>
          <span class='current'>14</span> /
          <span class='max'>30</span>
        </div>
        <div class='hidden bottom'>
          <button class='simple'>Join</button>
        </div>
      </div>
    </div>
    <div class='card flex-row'>
      <img src='https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/TheGreatGatsby_1925jacket.jpeg/220px-TheGreatGatsby_1925jacket.jpeg' class='book'/>
      <div class='flex-column info'>
        <div class='title'>Great Gatsby</div>
        <div class='author'>F Scott Fitzgerald</div>
        <div class='hidden bottom summary'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod ratione impedit temporibus maiores autem aperiam assumenda exercitationem, quisquam nobis esse.
        </div>
      </div>
      <div class='flex-column group'>
        <div class='members'>
          <span class='current'>14</span> /
          <span class='max'>30</span>
        </div>
        <div class='hidden bottom'>
          <button class='simple'>Join</button>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default Test