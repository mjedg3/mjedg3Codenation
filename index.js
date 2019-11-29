const profile = document.querySelector('.profile-image');

profile.addEventListener('click', function(){
    console.log('clicked')
    this.style.transition = '.5s'
    this.style.transform = 'scale(1.4)'
})