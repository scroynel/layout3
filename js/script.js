var circle1 = document.getElementById('circle1')
    , circle2 = document.getElementById('circle2')
    , circle3 = document.getElementById('circle3')
    , circle4 = document.getElementById('circle4')
    , circle5 = document.getElementById('circle5');
circle1.addEventListener('click', function(){
    circle2.style.opacity = 1;
})
circle2.addEventListener('click', function(){
    circle3.style.opacity = 1;
    circle1.style.transform = 'scale(1.2)';
})
circle3.addEventListener('click', function(){
    circle4.style.opacity = 1;
    circle1.style.background = '#bdf7bb';
    circle2.style.background = '#bdf7bb';
})
circle4.addEventListener('click', function(){
    circle1.style.opacity = 0;
    circle2.style.opacity = 0;
    circle3.style.opacity = 0;
    circle4.style.opacity = 0;
    circle5.style.opacity = 1;
})
circle5.addEventListener('click', function(){
    circle1.style.opacity = 1;
    circle5.style.opacity = 0;
    circle1.style.background = '#e391ff';
    circle2.style.background = '#e391ff';
    circle1.style.transform = 'scale(1)';
})

