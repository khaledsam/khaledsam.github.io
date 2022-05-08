let searchBtn = document.getElementById('search_btn');
let searchForm = document.querySelector('.search');


let cardToggle = document.querySelector('#btn_toggle');
let header = document.querySelector('.header');
let body = document.querySelector('body');


let navbare = document.querySelector('header').querySelector('nav').querySelectorAll('.nav_head');



    let choose = document.querySelectorAll('.list');
    let box = document.querySelector('.container_content').children;



searchBtn.addEventListener("click",()=>{
    searchForm.classList.toggle('active');
});    



navbare.forEach(element =>{
    element.addEventListener("click",function(){
        navbare.forEach(re=>re.classList.remove("active"))
        this.classList.add("active");
    })});    
    

cardToggle.onclick = ()=>{
header.classList.toggle('is_dark');
body.classList.toggle('is_dark');

};







    for(i of box){
        const name = i.querySelector('strong');
        const x = name.textContent;
        i.setAttribute('data-category', x);
    }
    for(i=0 ;i<choose.length;i++)
    {
        choose[i].onclick = function(){
            for(let x=0 ; x<choose.length; x++)
            {
                choose[x].classList.remove('active');
            }
            this.classList.add('active');
            const displayItem = this.getAttribute('data-filter');

            for( let z=0 ;z<box.length; z++){
                box[z].style.transform = 'scale(0)';
                setTimeout(()=>{
                    box[z].style.display = 'none';
                } , 500);
                if ((box[z].getAttribute('data-category') == displayItem) || displayItem == 'all'){
                    box[z].style.transform = 'scale(1)';
                setTimeout(()=>{
                    box[z].style.display = 'block';
                } , 500);
                }
            }
        }
    }









    