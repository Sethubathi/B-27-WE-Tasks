
//import { useState } from "react";
import "./App.css";
//Importing bootstrap and other modules
//import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const movies = [
    {name:"Thuppakki",
  rating:"4 ⭐⭐⭐⭐✰",
  poster:"https://flxt.tmsimg.com/assets/p9561344_p_v10_ab.jpg",
  summary:"In a bomb blast, an army officer apprehends a sleeper agent who confesses that more bomb attacks are planned around the city; the officer impedes the subsequent blasts and devices a plan."},
  {name:"Spiderman",
  rating:"4 ⭐⭐⭐⭐✰",
  poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxlFeQhWqdfBruBe6ZZq80V9FwPCkuXH4lVTPO-ueBIisKnZD3XVeN0GftPOK5jVD7UvU&usqp=CAU",
  summary:"Peter Parker's life changes when he is bitten by a genetically altered spider and gains superpowers. He uses his powers to help people and finds himself facing the Green Goblin, an evil maniac."},
  {name:"Red Notice",
  rating:"3 ⭐⭐⭐✰✰",
  poster:"https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-movie/rednotice-movie-poster-image.jpg?itok=BUsN3-P7",
  summary:" Red Notice is a globetrotting action-adventure starring Ryan Reynolds, Gal Gadot, and Dwayne Johnson. Expect lots of action violence: Characters fight,  hit, and they get  chased and tossed."},
  {name:"Hera Pheri",
  rating:"2 ⭐⭐✰✰✰",
  poster:"https://m.media-amazon.com/images/M/MV5BNDExMTBlZTYtZWMzYi00NmEwLWEzZGYtOTA1MDhmNTc0ODZkXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
  summary:"The film did not open well upon release, but picked up later and became a box office success, grossing Rs. 24,25,00,000 in India. Much of the acclaim went to Paresh Rawal for his comic."},
  {name:"Ms Dhoni",
  rating:"2 ⭐⭐✰✰✰",
  poster:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSeQTJK-aG3Z5HF_M5giJZ1gyI0QgXy1Y7XM3o4bP0sSL0A8JBK",
  summary:"M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams."}
];
  return (
    <div className="App">
       <h2 className="App">Movies List</h2>
      {movies.map(movie=>(<Counter name={movie.name} poster={movie.poster} summary={movie.summary} rating={movie.rating} />))}
      
    </div>
  );
}
//onchange event we need inform react so we are using hooks here, hooks will be stating with a keyword "use"
function Counter({name,poster,summary,rating}) {
  // const [like, setLike] = useState(0);
  // const [dislike, setDislike] = useState(0);
  return (
    <div>
     

        <div className="columns">
          <ul className="price">
            <li className="header">{name}</li>
            <li><img src={poster} className="width" alt={name} /></li>
            <li className="grey">{summary}</li>
          
            <li>Rating : {rating}</li>
        
          </ul>
        </div>
    </div>
  );
}
