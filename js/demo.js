let searchBtn = document.getElementById('search_btn');
let searchForm = document.querySelector('.search');






searchBtn.addEventListener("click",()=>{
    searchForm.classList.toggle('active');
});


let navbare = document.querySelector('header').querySelector('nav').querySelectorAll('.nav_head');

navbare.forEach(element =>{
    element.addEventListener("click",function(){
        navbare.forEach(re=>re.classList.remove("active"))
        this.classList.add("active");
    })});








    let choose = document.querySelectorAll('.list');
    let box = document.querySelector('.container_content').children;

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









    
    
    let backToggle1 =document.querySelector('#light');
    let backToggle2 =document.querySelector('#dark');
    let colorToggle1 =document.querySelector('#main_color');
    let colorToggle2 =document.querySelector('#away_color');
    let styleToggle1 =document.querySelector('#style_1');
    let styleToggle2 =document.querySelector('#style_2');
    let body =document.querySelector('body');
    let feature = document.querySelector('.container_content');
    
    


    backToggle1.onclick = ()=>{
        body.classList.toggle('is_light');
        
}
    
    backToggle2.onclick = ()=>{
    body.classList.toggle('is_dark');
    
}
    
    colorToggle1.onclick = ()=>{
        body.classList.toggle('is_main');
        feature.classList.toggle('is_main');
}
    
    colorToggle2.onclick = ()=>{
    body.classList.toggle('is_away');
    feature.classList.toggle('is_away');
    
}
    
    styleToggle1.onclick = () =>{
        feature.classList.toggle('is_skew');
        styleToggle1.classList.toggle('active');
}
    
    styleToggle2.onclick = () =>{
        feature.classList.toggle('is_unskew');
        styleToggle2.classList.toggle('active');
}
