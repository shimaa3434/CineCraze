function toggleVideo(){
    const trailer = document.querySelector('.trailer')
    const video = document.querySelector('video')
    video.pause()
    trailer.classList.toggle('active')
}

function changeBG(bg, id){
    const banner = document.querySelector('.banner')
    const contents = document.querySelectorAll('.content')
    banner.style.background = `url("../img/movies/${bg}")`
    banner.style.backgroundSize = "cover"
    banner.style.backgroundPosition = 'center'

    contents.forEach(content =>{
        content.classList.remove('active')
        if(content.classList.contains(id)){
            content.classList.add('active')
        }
    })
}