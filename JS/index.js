 const body = document.querySelector('body')
 const main = document.querySelector('main')
 const card = document.querySelectorAll('.card')
 const btn = document.querySelector('.btn')
 const toggle_card = document.querySelector('.toggle_btn')
 const checkbox = document.querySelectorAll('input')
 const social_card_num = document.querySelectorAll('.social_media_card_bar .card .count .num')
 const overwive_card_num = document.querySelectorAll('.overwive .card .card_value .card_count')
 const account_name = document.querySelectorAll('.account_name')
 const people = document.querySelectorAll('.people')
 const topbar_title = document.querySelector('.tilte h3')
 const card_title = document.querySelectorAll('.overwive .card .card_title p')
 const bg_pattern = document.querySelector('.bg_pattern')
 checkbox.forEach(button => {
    button.addEventListener('change',()=>{
        checkbox.forEach(others =>{
            if (others != button) {
                others.checked = false;
            }
        });
    });
 });

 checkbox.forEach(box => {
    box.addEventListener('click',function (e) { 
    if ( e.currentTarget.classList.contains('dark') ) {
        console.log("start")
        body.style.backgroundColor=" hsl(230, 17%, 14%)"
        main.style.backgroundColor=" hsl(230, 17%, 14%)"
        bg_pattern.style.backgroundColor=" hsl(232, 19%, 19%)"
        card.forEach(card_element=>{
            card_element.addEventListener('mouseover',function () {
                card_element.style.cursor=" pointer" 
                card_element.style.backgroundColor=" hsl(228, 28%, 35%)"
             })
             card_element.addEventListener('mouseout',function () { 
                card_element.style.backgroundColor=" hsl(228, 28%, 20%)"
             })
            card_element.style.backgroundColor=" hsl(228, 28%, 20%)"
        })
        social_card_num.forEach(num=>{
            num.style.color=" hsl(228, 47%, 97%)"
        })
        overwive_card_num.forEach(smallnum=>{
            smallnum.style.color=" hsl(228, 47%, 97%)"
        })
        account_name.forEach(name=>{
            name.style.color=" hsl(228, 36%, 66%)"
        })
        people.forEach(text=>{
            text.style.color=" hsl(228, 36%, 66%)"
        })
        card_title.forEach(tilte=>{
            tilte.style.color=" hsl(228, 36%, 66%)"
        })
        topbar_title.style.color=" hsl(228, 36%, 97%)"
        toggle_card.style.cursor=" pointer" 
        toggle_card.style.backgroundImage= " linear-gradient(to right,hsl(210, 78%, 56%),hsl(146, 68%, 56%))"
        btn.style.backgroundColor=" hsl(228, 20%, 28%)"

   }
    else
     {
    body.style.backgroundColor=" hsl(0, 0%, 100%)"
    main.style.backgroundColor=" hsl(0, 0%, 100%)"
    bg_pattern.style.backgroundColor=" hsl(225, 100%, 96%)"
    card.forEach(card_element=>{
        card_element.addEventListener('mouseover',function () {
            card_element.style.cursor=" pointer" 
            card_element.style.backgroundColor=" hsl(227, 47%, 85%)"
         })
         card_element.addEventListener('mouseout',function () { 
            card_element.style.backgroundColor=" hsl(227, 47%, 96%)"
         })
        card_element.style.backgroundColor=" hsl(227, 47%, 96%)"
    })
    social_card_num.forEach(num=>{
        num.style.color=" hsl(230, 17%, 14%)"
    })
    overwive_card_num.forEach(smallnum=>{
        smallnum.style.color=" hsl(230, 17%, 14%)"
    })
    account_name.forEach(name=>{
        name.style.color=" hsl(228, 36%, 66%)"
    })
    people.forEach(text=>{
        text.style.color=" hsl(228, 36%, 66%)"
    })
    card_title.forEach(tilte=>{
        tilte.style.color=" hsl(228, 36%, 66%)"
    })
    topbar_title.style.color=" hsl(0, 0%, 0%)"
    toggle_card.style.cursor=" pointer" 
    toggle_card.style.backgroundColor=" hsl(230, 22%, 75%)"
    btn.style.backgroundColor="  hsl(227, 46%, 96%)"

    }
        })
 });