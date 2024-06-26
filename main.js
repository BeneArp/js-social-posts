// Descrizione
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

// Milestone 1 - Leggiamo per bene il nostro array di oggetti che rappresentano ciascun post, così da capire bene i dati come sono strutturati;

// Milestone 2 - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.

// Milestone 3 - Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.



const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


// RIFERIMENTI DOM
const container = document.getElementById("container");


// ciclo per create un post per ogni oggetto presente nell'array
posts.forEach((post) => {
    container.innerHTML += `<div class="post"> 
    
                                <div class="post__header">

                                    <div class="post-meta">                    
                                        <div class="post-meta__icon">
                                            <img class="profile-pic" src="${post.author.image}" alt="">                    
                                        </div>

                                        <div class="post-meta__data">
                                            <div class="post-meta__author">${post.author.name}</div>
                                            <div class="post-meta__time">${post.created}</div>
                                        </div>                    
                                    </div>

                                </div>

                                <div class="post__text">${post.content}</div>
                                <div class="post__image">
                                    <img src="${post.media}" alt="">
                                </div>

                                <div class="post__footer">

                                    <div class="likes js-likes">

                                        <div class="likes__cta">
                                            <a class="like-button  js-like-button" href="#" data-postid="1">
                                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                                <span class="like-button__label">Mi Piace</span>
                                            </a>
                                        </div>

                                        <div class="likes__counter">
                                            Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone
                                        </div>

                                    </div>

                                </div>            
                            </div>`
});



// riferimento bottone per evento al click
const listaBottoniLike = document.getElementsByClassName("js-like-button");

const numeroLike = document.getElementsByClassName("js-likes-counter");


// const bottoneLike = document.querySelector(".js-like-button")

// console.log(listaBottoniLike);


// EVENTO AL CLICK
for(let i = 0; i < listaBottoniLike.length; i++){
    let bottoneLike = listaBottoniLike[i];

    bottoneLike.addEventListener("click",
        function(){
            bottoneLike.classList.toggle("like-button--liked");
            console.log(numeroLike[i].innerText);

            if(bottoneLike.classList.contains("like-button--liked")){
                numeroLike[i].innerText = parseInt(numeroLike[i].innerText) + 1;

                postConLike.push(posts[i].id);
            }else{
                numeroLike[i].innerText = parseInt(numeroLike[i].innerText) - 1;

            }


            // posts.forEach((post) => {
            //     if(bottoneLike.classList.contains("like-button--liked")){
            //         postConLike.push(post.id)
            //     }
            // });

            console.log(postConLike);
        }
    )
}

const postConLike = []


// posts.forEach((post) => {
//     // let bottoneLike = listaBottoniLike[i];

//     //     bottoneLike.addEventListener("click",
//     //         function(){
//     //             bottoneLike.classList.toggle("like-button--liked")
//     //     });

//     console.log(bottoneLike);

//     bottoneLike.addEventListener("click",
//         function(){
//             console.log("hai cliccato");
//             bottoneLike.classList.toggle("like-button--liked");

//             post.likes = post.likes + 1;
//             console.log(post.likes);
//         }
//     )
// });