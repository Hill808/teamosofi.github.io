// Navigate to the love meter page
function navigateToLoveMeter() {
    document.body.innerHTML = `
        <div class="container">
            <h1>¿Qué tanto te amo?</h1>
            <input type="range" id="loveMeter" min="1" max="100" value="50" step="1" style="width: 80%; height: 30px;">
            <p id="message">Mueve el medidor para descubrir...</p>
            <button class="main-button" onclick="checkLoveLevel()">Descubrir</button>
            <div id="surprise-container"></div>
        </div>
    `;
}

// Check the love level and display the appropriate message
function checkLoveLevel() {
    const loveMeterValue = document.getElementById('loveMeter').value;
    const message = document.getElementById('message');
    const surpriseContainer = document.getElementById('surprise-container');

    if (loveMeterValue <= 20) {
        message.textContent = "Nop, no te amo solo eso.";
        surpriseContainer.innerHTML = "";
    } else if (loveMeterValue <= 40) {
        message.textContent = "Mmmm no tan cerca.";
        surpriseContainer.innerHTML = "";
    } else if (loveMeterValue <= 60) {
        message.textContent = "Te vas acercando ✧･ﾟ: *✧･ﾟ:*  *:･ﾟ✧*:･ﾟ✧";
        surpriseContainer.innerHTML = "";
    } else if (loveMeterValue <= 80) {
        message.textContent = "YAAA CASIIIII ˗ˏˋ ★ ˎˊ˗";
        surpriseContainer.innerHTML = "";
    } else {
        message.textContent = "TE AMO esto y muchisimo muchisimo más";
        surpriseContainer.innerHTML = `<button class="main-button" onclick="showSurprise()">SORPRESA ✮⋆｡°✩⋆˙</button>`;
    }
}

// Show the surprise page
function showSurprise() {
    document.body.innerHTML = `
        <div class="container" style="border: 5px solid #ff69b4; padding: 20px; border-radius: 15px; background-color: #ffe4e1; color: #8b0000; max-width: 800px; margin: auto;">
            <h1 style="font-size: 2rem; text-align: center;">Amor no te alcanzas a imaginar lo feliz que me haces, lo linda y hermosa que te ves cuando te ríes o solo duermes, caminando de la mano conmigo. Me encanta, me fascina verte feliz y espero que esta bobadita te haya alegrado un poquito. De Mi Para Ti, Por Vos Y Por Mi</h1>
        </div>
        <div id="return-button-container" style="text-align: center; margin-top: 20px;"></div>
    `;
    startHeartsEffect();
    showReturnButton();
}

// Function to start the hearts effect
function startHeartsEffect() {
    const style = document.createElement('style');
    style.innerHTML = `
        body {
            position: relative;
            overflow: hidden;
            background-color: #ffe4e1;
            color: #8b0000;
        }

        .heart {
            position: absolute;
            width: 20px;
            height: 20px;
            background-color: pink;
            transform: rotate(45deg);
            animation: fall 5s linear infinite;
        }

        .heart:before,
        .heart:after {
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            background-color: pink;
            border-radius: 50%;
        }

        .heart:before {
            top: -10px;
            left: 0;
        }

        .heart:after {
            left: 10px;
            top: 0;
        }

        @keyframes fall {
            0% {
                transform: translateY(-100px) rotate(45deg);
            }
            100% {
                transform: translateY(100vh) rotate(45deg);
            }
        }
    `;
    document.head.appendChild(style);

    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }

    setInterval(createHeart, 300);
}

// Function to show return button after 10 seconds
function showReturnButton() {
    setTimeout(() => {
        const returnButtonContainer = document.getElementById('return-button-container');
        returnButtonContainer.innerHTML = `<button class="main-button" onclick="navigateToIndex()">Volver al inicio</button>`;
    }, 10000);
}

// Navigate to the index page
function navigateToIndex() {
    location.reload(); // Reload the page to return to the initial state
}
