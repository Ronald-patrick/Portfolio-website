const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarlink=document.getElementsByClassName('navlinks')[0]

toggleButton.addEventListener('click',()=>{
    
    navbarlink.classList.toggle('active');
});
// toggleButton.addEventListener('touchstart',()=>{
    
//     navbarlink.classList.toggle('active')
//     console.log("clicked");
// });
const navbar=document.getElementById('navbar');
const text=document.querySelectorAll('a');
const bars=document.querySelectorAll('.bar');

const links=document.querySelectorAll('.items');
const ani1=document.getElementById("who");
const ani2=document.getElementById("quote");
const ani3=document.getElementById("where");

links.forEach((link)=>{
    link.addEventListener('click',()=>{
        navbarlink.classList.toggle('active');
    })
})

console.log(text);
window.addEventListener('scroll', function() {
    console.log(window.scrollY);
    if( window.scrollY>=600)
    {
        navbar.style.backgroundColor="#7510f7";
        text.forEach((val,i)=>{
            if(i>=7)return;
            val.style.color="white";
        }
        )
        bars.forEach((val)=>{
            val.style.backgroundColor="white"
        })
    }
    else
    {
    navbar.style.backgroundColor="white";
    
    text.forEach((val,i)=>{
        if(i>=7)
        return;
        val.style.color="#7510f7";
    }
    )
    bars.forEach((val)=>{
        val.style.backgroundColor="#7510f7";
    })
    }
    if(window.scrollY>=300)
    {
        ani1.classList.add('animate1');
        ani2.classList.add('animate2');
        ani3.classList.add('animate3');
    }

  });