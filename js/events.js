export default function hoverOnCards (){
    let carouselItems = document.querySelectorAll('.carousel_item')
    carouselItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.querySelector('.item_body').classList.remove("hide")
        });
        item.addEventListener('mouseleave', () => {
            item.querySelector('.item_body').classList.add("hide")
        });
    })
}