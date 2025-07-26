// Data de início do relacionamento: 26 de junho de 2025
const startDate = new Date('2025-06-26T00:00:00');

// Elementos do DOM
const monthsElement = document.getElementById('months');
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Função para calcular a diferença de tempo
function calculateTimeDifference() {
    const now = new Date();
    const timeDifference = now - startDate;
    
    // Se a data ainda não chegou, mostra zeros
    if (timeDifference < 0) {
        return {
            months: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }
    
    // Calcular diferença total em milissegundos
    const totalMs = Math.abs(timeDifference);
    
    // Calcular meses de forma mais precisa
    let tempDate = new Date(startDate);
    let months = 0;
    
    // Contar meses completos
    while (tempDate <= now) {
        tempDate.setMonth(tempDate.getMonth() + 1);
        if (tempDate <= now) {
            months++;
        }
    }
    
    // Voltar para o último mês completo
    tempDate.setMonth(tempDate.getMonth() - 1);
    
    // Calcular o tempo restante após os meses completos
    const remainingMs = now - tempDate;
    
    // Calcular dias, horas e segundos
    const days = Math.floor(remainingMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingMs % (1000 * 60)) / 1000);
    
    return {
        months: months,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

// Função para atualizar o display
function updateDisplay() {
    const time = calculateTimeDifference();
    
    // Adicionar efeito de animação nos números
    const elements = [
        { element: monthsElement, value: time.months },
        { element: daysElement, value: time.days },
        { element: hoursElement, value: time.hours },
        { element: minutesElement, value: time.minutes },
        { element: secondsElement, value: time.seconds }
    ];
    
    elements.forEach(({ element, value }) => {
        if (element && element.textContent !== value.toString()) {
            element.style.transform = 'scale(1.2)';
            element.style.color = '#ffd700';
            
            setTimeout(() => {
                element.textContent = value;
                element.style.transform = 'scale(1)';
                element.style.color = '#ffffff';
            }, 150);
        }
    });
}

// Função para criar efeitos especiais
function createSpecialEffects() {
    // Adicionar mais estrelas dinamicamente
    const starsContainer = document.querySelector('.stars-container');
    
    setInterval(() => {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDuration = (Math.random() * 3 + 1) + 's';
        star.style.animationDelay = Math.random() * 2 + 's';
        
        starsContainer.appendChild(star);
        
        // Remover a estrela após 10 segundos
        setTimeout(() => {
            if (star.parentNode) {
                star.parentNode.removeChild(star);
            }
        }, 10000);
    }, 5000);
}

// Função para adicionar efeitos de toque em mobile
function addTouchEffects() {
    const timeUnits = document.querySelectorAll('.time-unit');
    const heart = document.querySelector('.pixel-heart');
    
    timeUnits.forEach(unit => {
        unit.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
            this.style.boxShadow = 'inset 0 0 20px rgba(74, 74, 138, 0.6)';
        });
        
        unit.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'inset 0 0 10px rgba(74, 74, 138, 0.3)';
        });
    });
    
    // Efeito especial no coração
    heart.addEventListener('touchstart', function() {
        this.style.animation = 'heartbeat 0.5s ease-in-out';
        
        // Criar corações flutuantes
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                createFloatingHeart();
            }, i * 100);
        }
    });
}

// Função para criar corações flutuantes
function createFloatingHeart() {
    const floatingHeart = document.createElement('div');
    floatingHeart.innerHTML = '💕';
    floatingHeart.style.position = 'fixed';
    floatingHeart.style.left = Math.random() * window.innerWidth + 'px';
    floatingHeart.style.top = window.innerHeight + 'px';
    floatingHeart.style.fontSize = '20px';
    floatingHeart.style.pointerEvents = 'none';
    floatingHeart.style.zIndex = '1000';
    floatingHeart.style.animation = 'floatUp 3s ease-out forwards';
    
    document.body.appendChild(floatingHeart);
    
    setTimeout(() => {
        if (floatingHeart.parentNode) {
            floatingHeart.parentNode.removeChild(floatingHeart);
        }
    }, 3000);
}

// Adicionar CSS para animação de corações flutuantes
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    // Atualizar imediatamente
    updateDisplay();
    
    // Atualizar a cada segundo
    setInterval(updateDisplay, 1000);
    
    // Iniciar efeitos especiais
    createSpecialEffects();
    
    // Adicionar efeitos de toque
    addTouchEffects();
    
    // Mensagem especial no console para desenvolvedores curiosos
    console.log('💕 Feito com amor para uma pessoa muito especial 💕');
});

// Função para detectar se é um momento especial (aniversário mensal)
function checkSpecialMoment() {
    const now = new Date();
    const day = now.getDate();
    const hour = now.getHours();
    const minute = now.getMinutes();
    
    // Se é dia 26 às 00:00
    if (day === 26 && hour === 0 && minute === 0) {
        // Criar efeito especial de fogos de artifício
        createFireworks();
    }
}

// Função para criar efeito de fogos de artifício
function createFireworks() {
    const colors = ['#ff1744', '#ffd700', '#ff69b4', '#ffffff'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.style.position = 'fixed';
            firework.style.left = Math.random() * window.innerWidth + 'px';
            firework.style.top = Math.random() * window.innerHeight + 'px';
            firework.style.width = '4px';
            firework.style.height = '4px';
            firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            firework.style.borderRadius = '50%';
            firework.style.pointerEvents = 'none';
            firework.style.zIndex = '1001';
            firework.style.animation = 'explode 2s ease-out forwards';
            
            document.body.appendChild(firework);
            
            setTimeout(() => {
                if (firework.parentNode) {
                    firework.parentNode.removeChild(firework);
                }
            }, 2000);
        }, i * 100);
    }
}

// Adicionar CSS para animação de fogos de artifício
const fireworksStyle = document.createElement('style');
fireworksStyle.textContent = `
    @keyframes explode {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        50% {
            transform: scale(3);
            opacity: 0.8;
        }
        100% {
            transform: scale(6);
            opacity: 0;
        }
    }
`;
document.head.appendChild(fireworksStyle);

// Verificar momentos especiais a cada minuto
setInterval(checkSpecialMoment, 60000);

