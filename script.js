
AOS.init({
    once : true
});

gsap.registerPlugin(TextPlugin);
gsap.to('.lead', {duration: 3, delay: 1.5, text: 'Web Developer | Administration'});

gsap.from('.navbar', { duration: 2, y: -100, opacity: 0, ease: 'bounce'});
gsap.from('.jumbotron img', { duration: 3, rotateY: 360, opacity: 0});
gsap.from('.btn-kirim', { duration: 3, x: -100, opacity: 0, delay: 1, ease: 'back'});

// ketika pengunjung scroll kebawah 20px dari atas dokumen, maka tampilkan tombol scroll-btn
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        document.querySelector(".button-atas").style.display = "block";
    } else {
        document.querySelector(".button-atas").style.display = "none";
    }
}

const scrollToTop = () => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
};

document.querySelector(".button-atas").onclick = scrollToTop;

//script untuk mengirimkan pesan ke contact me
const scriptURL = 'https://script.google.com/macros/s/AKfycbxTdp24vUuJwIjohftlWUf3TElEniKAexroBJbYpM_TymdlKEHD1aLHrPYlIn_2i233/exec'
const form = document.forms['submit-to-google-sheet']
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');
      
form.addEventListener('submit', e => {
    e.preventDefault()
    //tampilkan tombol loading, hilangkan tombol kirim
    btnKirim.classList.toggle('d-none');
    btnLoading.classList.toggle('d-none');
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            console.log('Success!', response)
            //tampilkan tombol kirim, hilangkan tombol loading
            btnKirim.classList.toggle('d-none');
            btnLoading.classList.toggle('d-none');
            //tampilkan alert
            myAlert.classList.toggle('d-none');
            //reset form
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})
