function myFunc(){
    var x = document.getElementById('mynav');
    if(x.className === 'container-fluid nav'){ //اینجا منظور اینه که اگر فقط تنها کلاسی که داشت nav بود
        x.className += ' responsive';//حتما اون اسپیس اول رو باید گذاشت
    }
    else {
        x.className = 'container-fluid nav';
    }
}