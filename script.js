* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Press Start 2P', monospace;
    background: linear-gradient(180deg, #0a0a23 0%, #1a1a3a 50%, #2a2a4a 100%);
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
    color: #ffffff;
    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
}

/* Estrelas animadas */
.stars-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
}

.star {
    position: absolute;
    width: 4px;
    height: 4px;
    background: #ffd700;
    border-radius: 0;
    box-shadow: 0 0 6px #ffd700;
    animation: twinkle 2s infinite alternate;
}

.star:nth-child(odd) {
    animation-duration: 3s;
}

.star:nth-child(even) {
    animation-duration: 2.5s;
}

/* Posicionamento das estrelas */
.star-1 { top: 10%; left: 15%; animation-delay: 0s; }
.star-2 { top: 20%; left: 80%; animation-delay: 0.5s; }
.star-3 { top: 15%; left: 45%; animation-delay: 1s; }
.star-4 { top: 30%; left: 25%; animation-delay: 1.5s; }
.star-5 { top: 25%; left: 70%; animation-delay: 2s; }
.star-6 { top: 40%; left: 10%; animation-delay: 0.3s; }
.star-7 { top: 35%; left: 90%; animation-delay: 0.8s; }
.star-8 { top: 50%; left: 60%; animation-delay: 1.3s; }
.star-9 { top: 45%; left: 35%; animation-delay: 1.8s; }
.star-10 { top: 60%; left: 85%; animation-delay: 0.2s; }
.star-11 { top: 55%; left: 20%; animation-delay: 0.7s; }
.star-12 { top: 70%; left: 50%; animation-delay: 1.2s; }
.star-13 { top: 65%; left: 75%; animation-delay: 1.7s; }
.star-14 { top: 80%; left: 30%; animation-delay: 0.4s; }
.star-15 { top: 75%; left: 65%; animation-delay: 0.9s; }
.star-16 { top: 85%; left: 15%; animation-delay: 1.4s; }
.star-17 { top: 90%; left: 80%; animation-delay: 1.9s; }
.star-18 { top: 5%; left: 60%; animation-delay: 0.6s; }
.star-19 { top: 12%; left: 85%; animation-delay: 1.1s; }
.star-20 { top: 8%; left: 25%; animation-delay: 1.6s; }

@keyframes twinkle {
    0% { opacity: 0.3; transform: scale(1); }
    100% { opacity: 1; transform: scale(1.2); }
}

/* Container principal */
.container {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 20px;
    text-align: center;
}

/* Coração em pixel art */
.heart-container {
    margin-bottom: 40px;
    animation: heartbeat 2s infinite;
}

.pixel-heart {
    display: inline-block;
}

.heart-row {
    display: flex;
    justify-content: center;
}

.pixel {
    width: 8px;
    height: 8px;
    margin: 1px;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.pixel.filled {
    background: #ff1744;
    border: 1px solid #ff1744;
    box-shadow: 0 0 4px #ff1744;
}

@keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

/* Contador */
.counter-container {
    margin-bottom: 40px;
}

.title {
    font-size: 16px;
    margin-bottom: 10px;
    color: #ffd700;
    text-shadow: 2px 2px 0px #000000;
}

.date {
    font-size: 12px;
    margin-bottom: 30px;
    color: #ff69b4;
    text-shadow: 2px 2px 0px #000000;
}

.counter {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    max-width: 300px;
    margin: 0 auto;
}

.time-unit {
    background: rgba(0, 0, 0, 0.3);
    border: 2px solid #4a4a8a;
    padding: 15px 10px;
    border-radius: 0;
    box-shadow: inset 0 0 10px rgba(74, 74, 138, 0.3);
}

.time-value {
    font-size: 20px;
    color: #ffffff;
    margin-bottom: 8px;
    text-shadow: 2px 2px 0px #000000;
    animation: glow 2s infinite alternate;
}

.time-label {
    font-size: 8px;
    color: #cccccc;
    text-transform: uppercase;
    letter-spacing: 1px;
}

@keyframes glow {
    0% { text-shadow: 2px 2px 0px #000000, 0 0 5px #ffffff; }
    100% { text-shadow: 2px 2px 0px #000000, 0 0 15px #ffffff, 0 0 25px #ffffff; }
}

/* Mensagem */
.message {
    margin-top: 30px;
}

.message p {
    font-size: 10px;
    color: #ff69b4;
    text-shadow: 2px 2px 0px #000000;
    animation: pulse 3s infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 1; }
}

/* Responsividade para mobile */
@media (max-width: 480px) {
    .container {
        padding: 15px;
    }
    
    .title {
        font-size: 14px;
    }
    
    .date {
        font-size: 10px;
    }
    
    .counter {
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
        max-width: 280px;
    }
    
    .time-unit {
        padding: 12px 8px;
    }
    
    .time-value {
        font-size: 16px;
    }
    
    .time-label {
        font-size: 7px;
    }
    
    .message p {
        font-size: 9px;
    }
    
    .pixel {
        width: 6px;
        height: 6px;
    }
}

@media (max-width: 320px) {
    .title {
        font-size: 12px;
    }
    
    .date {
        font-size: 9px;
    }
    
    .time-value {
        font-size: 14px;
    }
    
    .time-label {
        font-size: 6px;
    }
    
    .message p {
        font-size: 8px;
    }
    
    .pixel {
        width: 5px;
        height: 5px;
    }
    
    .counter {
        gap: 10px;
        max-width: 250px;
    }
    
    .time-unit {
        padding: 10px 6px;
    }
}

/* Efeitos especiais */
@media (hover: hover) {
    .time-unit:hover {
        transform: scale(1.05);
        transition: transform 0.3s ease;
    }
}

/* Animação de entrada */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.heart-container {
    animation: fadeInUp 1s ease-out, heartbeat 2s infinite 1s;
}

.counter-container {
    animation: fadeInUp 1s ease-out 0.5s both;
}

.message {
    animation: fadeInUp 1s ease-out 1s both;
}

