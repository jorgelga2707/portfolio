/* descargar CV */
const btnPrimary = document.querySelector('#btn-primary');

const downloadCV = () => {
    window.open('./documents/CV - Jorge Luis Garcia Alegre - FrontEnd Developer.pdf');
}

btnPrimary.addEventListener("click", downloadCV);

/* evento scroll animado  */

const idImglogo = document.querySelector('.img-logo-container');
const textAbout = document.querySelector('.text-about-hidden');
const navbar = document.querySelector('.nav');
const resume = document.querySelector('.resume');
const skills = document.querySelector('.img-techonologies-container');
const skillsTitle = document.querySelector(".skills-title");
const textWorks = document.querySelector(".text-works");
const contactTitle = document.querySelector(".contact__title");
const navFooter = document.querySelector(".navfooter-hidden");
const footerLicks = document.querySelector(".footer-licks");
const copyright = document.querySelector(".copyright");

const imgLogoAnimated = (entrys, observerPage1) => {
        console.log(entrys);
        entrys.forEach((entry) => {
            entry.target.classList.toggle('img-logo-visible', entry.isIntersecting);
        });
        /*entradas.forEach((entradas[1]) => {*/
            /*if(entradas[1].isIntersecting){*/
                /*entradas[1].target.classList.toggle('visible', entradas[1].isIntersecting);*/
            /*}*/
       /* });*/

        /*
        entradas[0].target.classList.toggle('img-logo-visible',entradas[0].isIntersecting);
        entradas[1].target.classList.toggle('navbar-visible',entradas[1].isIntersecting);
        */
         /*entradas[0].target.classList.toggle('img-logo-visible', entradas[0].isIntersecting);*/
         /*entradas[1].target.classList.toggle('navbar-visible', entradas[1].isIntersecting);*/
        /*if(entrada.isIntersecting){}*/
            /*entrada.target.style.animation = '2s imglogo 0.5s ease-in-out backwards';*/
        /*entrada.target.classList.toggle('img-logo-visible', entrada.isIntersecting);*/
      
}

const navbarAnimated = (entrys2, observerPage2) => {
    console.log(entrys2);
    entrys2.forEach((entry2) => {
        entry2.target.classList.toggle('navbar-visible', entry2.isIntersecting);
    });
}

const textAboutAnimated = (entrys3, observerPage3) => {
    console.log(entrys3);
    entrys3.forEach((entry3) => {
        entry3.target.classList.toggle('text-about-visible', entry3.isIntersecting);
    });
}

const resumeAnimated = (entrys4, observePage4) => {
    console.log(entrys4);
    entrys4.forEach((entry4) => {
        entry4.target.classList.toggle('resume-visible', entry4.isIntersecting);
    })
}

const skillsAnimated = (entrys5, observePage5) => {
    console.log(entrys5);
    entrys5.forEach((entry5) => {
        entry5.target.classList.toggle('skills-visible', entry5.isIntersecting);
    })
}

const skillsTitleAnimated  = (entrys6, observePage6) => {
    console.log(entrys6);
    entrys6.forEach((entry6) => {
        entry6.target.classList.toggle("skills-title-visible", entry6.isIntersecting)
    })
}


const textWorksAnimated = (entrys7, observePage7) => {
    console.log(entrys7);
    entrys7.forEach((entry7) => {
        entry7.target.classList.toggle("text-works-visible", entry7.isIntersecting);
    })
}

const contactTitleAnimated = (entrys8, observePage8) => {
    console.log(entrys8);
    entrys8.forEach((entry8) => {
        entry8.target.classList.toggle("contact-title-visible", entry8.isIntersecting);
    })
}

const navfooterAnimated = (entrys9, observePage9) => {
    console.log(entrys9);
    entrys9.forEach((entry9) => {
        entry9.target.classList.toggle("navfooter-visible", entry9.isIntersecting);
    })
}

const footerLicksAnimated = (entrys10, observePage10) => {
    console.log(entrys10);
    entrys10.forEach((entry10) => {
        entry10.target.classList.toggle("footer-licks-visible", entry10.isIntersecting);
    })
}

const copyrightAnimated = (entrys11, observePage11) => {
    console.log(entrys11);
    entrys11.forEach((entry11) => {
        entry11.target.classList.toggle("copyright-visible", entry11.isIntersecting);
    })
}

const observerPage1 = new IntersectionObserver(imgLogoAnimated,{
    root: null,
    rootMargin: '0px 0px 0px 0px',
    treshold: 1.0
});

const observerPage2 = new IntersectionObserver(navbarAnimated, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    treshold: 1.0
});

const observerPage3 = new IntersectionObserver(textAboutAnimated, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    treshold: 1.0
});

const observePage4 = new IntersectionObserver(resumeAnimated, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    treshold: 1.0
});

const observePage5 = new IntersectionObserver(skillsAnimated, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    treshold: 1.0
});

const observePage6 = new IntersectionObserver(skillsTitleAnimated, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    treshold: 1.0
});

const observePage7 = new IntersectionObserver(textWorksAnimated, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    treshold: 1.0
});

const observePage8 = new IntersectionObserver(contactTitleAnimated, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    treshold: 1.0
});

const observePage9 = new IntersectionObserver(navfooterAnimated, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    treshold: 1.0
});

const observePage10 = new IntersectionObserver(footerLicksAnimated, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    treshold: 1.0
});

const observePage11 = new IntersectionObserver(copyrightAnimated, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    treshold: 1.0
});


observerPage1.observe(idImglogo);
observerPage2.observe(navbar);
observerPage3.observe(textAbout);
observePage4.observe(resume);
observePage5.observe(skills);
observePage6.observe(skillsTitle);
observePage7.observe(textWorks);
observePage8.observe(contactTitle);
observePage9.observe(navFooter);
observePage10.observe(footerLicks);
observePage11.observe(copyright);


/* modal section */
  const modal = document.querySelector('.modal')
  const closeIcon = document.querySelector('.modal-content__close')

  const button1 = document.querySelector('#button-presionar')

  button1.addEventListener('click', () => {
    modal.classList.remove('hidden')
    modal.classList.add('visible')
  })

  closeIcon.addEventListener('click', () => {
    modal.classList.remove('visible')
    modal.classList.add('hidden')
  })