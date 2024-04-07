const base_url = "https://api.themoviedb.org/3/discover/movie";
const base_image_url ="https://image.tmdb.org/t/p/w500/";
const api_key= "df6ea30696643f85e0e4fa530b72cf83";
const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjZlYTMwNjk2NjQzZjg1ZTBlNGZhNTMwYjcyY2Y4MyIsInN1YiI6IjYyYzg1ODRkZGYyOTQ1MDA2OGY0NzZmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vlwSM544A92PtH7rQcPhUl-ri-FkbZEQj4MYvD28vtw";

async function fetchMovies(url){
    const response = await fetch(url)
    const data = await response.json()
    carousel_data(data.results)
    // content_data(data.results)
}
// async function content_data(movies){
//     const data = document.querySelector('.data')
//     await movies.map(movie =>{
//         const year = (movie.release_date).split('-').slice(0,4).join('')
//         data.innerHTML += 
//             `
//             <div class="content ${movie.original_title} active">
//             <h3>${movie.original_title}</h3>
//             <h4>
//                 <span>${year}</span>
//                 <span><i>${movie.adult ? "18+" : "12+"}</i></span>
//                 <span>2h 14min</span>
//                 <span>Romance</span>
//             </h4>
//             <p>${movie.overview}</p>
//             <div class="button">
//                 <a href="https://ptugnoaw.net/4/7142803"><i class="fa fa-play"></i> watch </a>
//                 <a href="https://ptugnoaw.net/4/7142803"><i class="fa fa-plus"></i>my list</a>
//             </div>
//         </div>
//             `
//     })
// }

async function carousel_data(movies){
    console.log(movies)
    const carousel = document.querySelector('.carousel');
    const data = document.querySelector('.data')

    fristele = movies[0]
    console.log(fristele)
    const banner = document.querySelector('.banner')
    
    

    banner.style.background = `url("https://image.tmdb.org/t/p/original/${fristele.poster_path}")`
    banner.style.backgroundSize = "cover"
    banner.style.backgroundPosition = 'center'
    
    data.innerHTML = 
    `
    <div class="content ${fristele.id} active" >
    <h3>${fristele.original_title}</h3>
        <h4>
            <span>${fristele.release_date}</span>
            <span><i>${fristele.adult ? "18+" : "12+"}</i></span>
            <span>2h 14min</span>
            <span>Romance</span>
        </h4>
        <p>${fristele.overview}</p>
        <div class="button">
            <a href="https://ptugnoaw.net/4/7142803"><i class="fa fa-play"></i> watch </a>
            <a href="https://ptugnoaw.net/4/7142803"><i class="fa fa-plus"></i>my list</a>
        </div>
    </div>
    `




    await movies.map(movie => {
        carousel.innerHTML += `<div class="carousel-item" onclick="changeBG('${movie.poster_path}', '${movie.id}')">
        <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" alt="">
    </div>`
    const year = (movie.release_date).split('-').slice(0,4).join('')
    data.innerHTML += 
        `
        <div class="content ${movie.id}" >
        <h3>${movie.original_title}</h3>
        <h4>
            <span>${year}</span>
            <span><i>${movie.adult ? "18+" : "12+"}</i></span>
            <span>2h 14min</span>
            <span>Romance</span>
        </h4>
        <p>${movie.overview}</p>
        <div class="button">
            <a href="https://ptugnoaw.net/4/7142803"><i class="fa fa-play"></i> watch </a>
            <a href="https://ptugnoaw.net/4/7142803"><i class="fa fa-plus"></i>my list</a>
        </div>
    </div>
        `
    })
    $(document).ready(function(){
        $('.carousel').carousel();
      });
      
}



// function changeBG(bg, title){
//     const banner = document.querySelector('.banner')
//     const contents = document.querySelectorAll('.content')
//     banner.style.background = `url("../img/movies/${bg}")`
//     banner.style.backgroundSize = "cover"
//     banner.style.backgroundPosition = 'center'

//     contents.forEach(content =>{
//         content.classList.remove('active')
//         if(content.classList.contains(title)){
//             content.classList.add('active')
//         }
//     })
// }

function changeBG(bg, id){
    const banner = document.querySelector('.banner')
    const contents = document.querySelectorAll('.content')
    banner.style.background = `url("https://image.tmdb.org/t/p/original/${bg}")`
    banner.style.backgroundSize = "cover"
    banner.style.backgroundPosition = 'center'

    contents.forEach(content =>{
        content.classList.remove('active')
        if(content.classList.contains(id)){
            content.classList.add('active')
        }
    })
}












 const api_url= `${base_url}?api_key=${api_key}`
fetchMovies(api_url)
