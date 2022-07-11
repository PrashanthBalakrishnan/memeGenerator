import React from "react";


export default function Meme() {

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])


    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1c1uej.jpg"
    })

    function handleChange(event) {
        const { name, value } = event.target
        setMeme((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))

    }


    const [allMemes, setAllMemes] = React.useState()

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

    }

    return (
        <main>
            <div className="form">
                <input
                    className="form-input"
                    placeholder="Top text"
                    type="text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                >

                </input>
                <input
                    className="form-input"
                    placeholder="Bottom text"
                    type="text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                >

                </input>

                <button onClick={getMemeImage} className="form-button" type="submit">
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main >
    )
}
