const btnPrimary = document.querySelector('#btn-primary');

const downloadCV = () => {
    window.open('./documents/CV - Jorge Luis Garcia Alegre - FrontEnd Developer.pdf');
}

btnPrimary.addEventListener("click", downloadCV);