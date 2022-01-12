import React from "react"

function CreatePhotoForm({ title, thumbnailUrl, onSubmit, onTitleChanged, onThumbnailUrlChanged }) {
    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="title" onChange={onTitleChanged} value={title} />
            <input type="text" name="thumbnailUrl" onChange={onThumbnailUrlChanged} value={thumbnailUrl} />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default CreatePhotoForm;