const hamburger =document.querySelector('.hamburger');
const navMenu= document.querySelector('.navMenu');
hamburger.addEventListener('click',()=>{
    console.log('entered')
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active')
})
document.querySelectorAll('.navLink').forEach(link=>{
    link.addEventListener('click',()=>{
    hamburger.classList.remove('active');
    navMenu.classList.remove('active')

    })
})