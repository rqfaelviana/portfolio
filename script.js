document.addEventListener("DOMContentLoaded", function(){
    //animação da navbar
    gsap.from("nav ul li", {
        opacity: 0,
        y: -20,
        duration: 0.8,
        stagger: 0.2,
    });
    //animação da seção principal
    gsap.from("#profile-card", {
        opacity: 0,
        sacale: 0.8, 
        duration: 1,
        delay: 0.5,
    });
    //animação das seções ao rolar
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        gsap.from(section, {
            opacity: 0,
            y: 50, 
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
            },
        });
    });
});