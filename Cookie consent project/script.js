const cookieBox = document.getElementById('cookiebox');
const acceptBtn = document.getElementById('accept-btn');
const rejectBtn = document.getElementById('reject-btn');
const closeBtn= document.getElementById('close-btn');

window.addEventListener('load', () => {
    setTimeout(() => {cookieBox.classList.add('show');
},500);
});
function hidecookie(){
    cookieBox.classList.remove('show');
}
acceptBtn.addEventListener("click", hidecookie);
rejectBtn.addEventListener("click", hidecookie);
closeBtn.addEventListener("click", hidecookie); 