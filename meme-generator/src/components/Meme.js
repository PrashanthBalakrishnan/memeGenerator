import React from "react";
import memesData from "../memesData.js"

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1c1uej.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                randomImage: url,

            }
        })


    }

    return (
        <main>
            <div className="form">
                <input
                    className="form-input"
                    placeholder="Top text"
                    type="text">
                </input>
                <input
                    className="form-input"
                    placeholder="Bottom text"
                    type="text">
                </input>

                <button onClick={getMemeImage} className="form-button" type="submit">
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={meme.randomImage} alt="meme" className="meme-image" />
        </main >
    )
}
