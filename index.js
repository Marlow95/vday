gsap.to(".heart-container", {
    duration: 2, 
    scale: 1.1, 
    y: -20, 
    backgroundColor: "var(--pink)", 
    repeat: -1, 
    yoyo: true, 
    ease: "power1.inOut"
});

function showMessage() {
    const message = document.getElementById('message');
    const nextButton = document.getElementById('nextButton');

    if (message.innerText === "Happy Valentine's Day!") {
        message.innerText = "I love you, sweet darling!";
        message.classList.add('montserrat');
        nextButton.style.display = 'block';
    } else {
        message.innerText = "Happy Valentine's Day!";
        message.classList.remove('montserrat');
        nextButton.style.display = 'none';
    }
    createConfetti();
}

function transitionMessage() {
    const message = document.getElementById('message');
    message.innerText = "Your poem will appear shortly, babe.";
    message.classList.add('montserrat');
    nextButton.style.display = 'none';
    setTimeout(displayPoem, 2000); // Display the poem after 2 seconds
}

function displayPoem() {
    const message = document.getElementById('message');
    const heartContainer = document.querySelector('.heart-container');
    const backButton = document.getElementById('backButton');
    message.innerText = `When I gaze upon the night sky,
                        I drift into wonder and fantasize, 
                        Amongst the glimmer in the stars,
                        I am reminded of your sparkling smile,
                        The essence of beauty,
                        The result of joy,
                        The most beautiful curve on your body,
                        I will fight for more beautiful moments with you,
                        More memories of cheer and joy,
                        More smiles and laughs,
                        You are my light,
                        And we will create memories of a life time,
                        I love you my sweet darling.`;

    message.classList.add('left-align');
    message.style.lineHeight = '2.0em';
    heartContainer.style.display = 'none';
    nextButton.style.display = 'none';
    backButton.style.display = 'block';
}

function goBackToBeginning() {
    const message = document.getElementById('message');
    const heartContainer = document.querySelector('.heart-container');
    const nextButton = document.getElementById('nextButton');
    const backButton = document.getElementById('backButton');

    message.innerText = "Happy Valentine's Day!";
    message.classList.remove('montserrat', 'left-align');
    heartContainer.style.display = 'block';
    nextButton.style.display = 'none';
    backButton.style.display = 'none';
}


function createConfetti() {
    const confettiContainer = document.querySelector('.card');
    for (let i = 0; i < 50; i++) { 
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confettiContainer.appendChild(confetti);
        animateConfetti(confetti);
    }
}

function animateConfetti(confetti) {
    gsap.fromTo(confetti, {
        x: Math.random() * 200 - 100,
        y: 0,
        opacity: 1
    }, {
        y: 300,
        x: Math.random() * 200 - 100,
        rotation: Math.random() * 360,
        opacity: 0,
        duration: Math.random() * 2 + 1,
        ease: "power1.out",
        onComplete: () => confetti.remove()
    });
}

