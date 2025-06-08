import ProfilePic from './assets/JanakiRam.jpg'

function Card(){
    return(
        <div ><img src={ProfilePic} style={{width: "300px", height: "400px", border: "1px solid black", borderRadius: "10px", textAlign: "center", padding: "20px"}} alt="Profile Picture"></img>
            <h2>Janaki Ram</h2>
            <p> I Watch Youtube videos and play offline Games</p>
        </div>
    );
}

export default Card