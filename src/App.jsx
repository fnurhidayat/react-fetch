import React, { useEffect, useState } from "react"
import logo from './logo.svg'
import axios from "axios"
import './App.css'
import Card from './components/Card'
import CreatePhotoForm from "./components/CreatePhotoForm"
import { createPhotos, getPhotos } from "./services/photoService"

function App() {
  const [photos, setPhotos] = useState([]);
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [title, setTitle] = useState("");

  // Fungsi hanya akan berjalan ketika komponen ini akan di-render untuk pertama kalinya.
  useEffect(() => {
    getPhotos()
      .then((data) => setPhotos(data))
      .catch(console.error)
  }, [])

  function onFormSubmit(e) {
    e.preventDefault();
    console.log('Title', title);
    console.log('Thumbnail URL', thumbnailUrl);

    createPhotos({
      title,
      thumbnailUrl,
    })
    .then((body) => console.log(body))
    .catch((err) => console.log(err));
  }

  function onThumbnailUrlChanged(e) {
    console.log('Thumbnail URL', e.target.value);
    setThumbnailUrl(e.target.value);
  }

  function onTitleChanged(e) {
    console.log('Title', e.target.value);
    setTitle(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <CreatePhotoForm
          onSubmit={onFormSubmit}
          thumbnailUrl={thumbnailUrl}
          onThumbnailUrlChanged={onThumbnailUrlChanged}
          title={title}
          onTitleChanged={onTitleChanged}
        />

        {photos.slice(0, 5).map((i) => <Card key={i.id} title={i.title} thumbnailUrl={i.thumbnailUrl} />)}

      </header>
    </div>
  )
}

export default App
