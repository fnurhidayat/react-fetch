import axios from "axios";

// Ini pake axios, tapi pake .then
// export function getPhotos() {
//     return new Promise((resolve, reject) => {
//         axios.get("https://jsonplaceholder.typicode.com/photos")
//             .then((response) => {
//                 console.log(response)
//                 console.log(response.data)
//                 resolve(response.data)
//             })
//             .catch((err) => reject(err))
//     })
// }

// Ini pake axios, tapi pake async/await
// export async function getPhotos() {
//     const response = await axios.get("https://jsonplaceholder.typicode.com/photos");
//     return response.data;
// }

// Ini pake axios, tapi pake async/await
// export async function createPhotos({ title, thumbnailUrl }) {
//     const response = await axios.post("https://jsonplaceholder.typicode.com/photos", {
//         title,
//         thumbnailUrl
//     })

//     return response.data;
// }

// Ini pake fetch
export async function getPhotos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    console.log('Response:', response);

    const body = await response.json();
    console.log('Body:', body);

    return body;
}

// Ini pake fetch
export async function createPhotos({ title, thumbnailUrl }) {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, thumbnailUrl })
    })

    const body = await response.json();
    console.log('Body:', body);

    return body;
}