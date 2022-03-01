import { useEffect, useState } from "react"
import img from "../images/meme.png"
export default function Navbar(){

  const [meme,setmeme]=useState({
    top:"",
    bottom:"",
    randimg:"http://i.imgflip.com/1bij.jpg"
  })
  const [memeImage,setMemeImage]=useState([]);

  useEffect(()=>{
          fetch("https://api.imgflip.com/get_memes").then(res=>res.json()).then(data=>setMemeImage(data.data.memes))
          
  },[])

  
 
  function getmeme(){
        const ran=Math.floor(Math.random() * memeImage.length);    
        const url=memeImage[ran].url
        setmeme(pretext=>({
          ...pretext,
          randimg:url
        }))
   }    
   function handlechange(e){
    const{name,value}=e.target;
    setmeme(pretext=>{
      return {...pretext,[name]:value}
    })
  }
  
    return(
      <div>
        <nav className="nav">
          <img src={img} alt="" className="logo"></img>
          <p className="title">Meme Generater</p>
          <p className="p2">React Course _ Project-3</p>
        </nav>
        <main>
          <div className="form">
            <input type="text" placeholder="top text" name="top" value={meme.top} onChange={handlechange}></input>
            <input type="text" placeholder="bottom text" name="bottom" value={meme.bottom} onChange={handlechange}></input>
            <button onClick={getmeme}>Get a new meme image 🖼</button>
          </div>
          <div className="memepage">
          <img src={meme.randimg} alt=""></img>
          <h1 className="top-text">{meme.top}</h1>
          <h1 className="bottom-text">{meme.bottom}</h1>
          </div>
        </main>
      </div>
    )
}