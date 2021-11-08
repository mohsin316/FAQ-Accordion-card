const buttons = document.querySelectorAll('.question')


buttons.forEach(item => {
    item.addEventListener('click', () => {
        let accCollaps = item.nextElementSibling
        if(!item.classList.contains('open')) {

            accCollaps.style.display = "block"
            let accHeight = accCollaps.clientHeight
            
            accCollaps.classList = 'collapse collapsing'

            setTimeout(() => {
                accCollaps.style.height = accHeight + 'px'
                accCollaps.style.display = ""
            }, 1)


            setTimeout( () => {
                accCollaps.classList = 'collapse fall open'
            }, 300)
            
        }else{
            accCollaps.classList = 'collapse collapsing'

            setTimeout(() => {
                accCollaps.style.height = '0px'
            }, 1);

            setTimeout( () => {
                accCollaps.classList = 'collapse fall'
                accCollaps.style.height = ''
            }, 300)
        }
        

        item.classList.toggle('open')
        
    })
})