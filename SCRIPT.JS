document.addEventListener('DOMContentLoaded', () => {
    
    // --- ACESSIBILIDADE STATE & LOGIC ---
    let currentFontSize = 16;
    const bodyEl = document.body;
    
    document.getElementById('btn-font-inc').addEventListener('click', () => {
        if (currentFontSize < 24) {
            currentFontSize += 2;
            document.documentElement.style.fontSize = `${currentFontSize}px`;
        }
    });

    document.getElementById('btn-font-dec').addEventListener('click', () => {
        if (currentFontSize > 12) {
            currentFontSize -= 2;
            document.documentElement.style.fontSize = `${currentFontSize}px`;
        }
    });

    document.getElementById('btn-contrast').addEventListener('click', () => {
        bodyEl.classList.toggle('high-contrast');
    });

    // --- CARROSSEL COMPONENT ---
    const soluçõesDados = [
        {
            icon: 'fa-solid fa-layer-group',
            titulo: 'Motores de Inferência Pura',
            descricao: 'Arquiteturas projetadas em C nativo capazes de processar equações matriciais densas de Deep Learning com latência ultra-baixa.'
        },
        {
            icon: 'fa-solid fa-terminal',
            titulo: 'Bibliotecas Otimizadas de ML',
            descricao: 'Substituição estrutural de módulos pesados por sub-rotinas compiladas em C, gerando ganho imediato de throughput.'
        },
        {
            icon: 'fa-solid fa-memory',
            titulo: 'Custom Garbage Collection',
            descricao: 'Sistemas que eliminam pausas indesejadas no runtime através do controle manual preditivo e liberação de buffers de tensores.'
        }
    ];

    const track = document.getElementById('carousel-track');
    let currentIndex = 0;

    soluçõesDados.forEach(item => {
        const slide = document.createElement('div');
        slide.className = 'carousel-item';
        slide.innerHTML = `
            <i class="${item.icon} icon"></i>
            <h3>${item.titulo}</h3>
            <p>${item.descricao}</p>
        `;
        track.appendChild(slide);
    });

    const updateCarousel = () => {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    document.getElementById('carousel-next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % soluçõesDados.length;
        updateCarousel();
    });

    document.getElementById('carousel-prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + soluçõesDados.length) % soluçõesDados.length;
        updateCarousel();
    });

    // --- ACORDEÃO COMPONENT (FAQ) ---
    const faqDados = [
        {
            pergunta: 'Por que utilizar C se a maior parte da IA é escrita em Python?',
            resposta: 'Python atua como uma camada superficial de conveniência. Os frameworks mais famosos do ecossistema digital possuem sua engenharia interna e sua espinha dorsal escritas puramente em C e C++ para alcançar a velocidade exigida pelo hardware.'
        },
        {
            pergunta: 'Quão complexa é a migração de algoritmos existentes para C?',
            resposta: 'Nossa abordagem foca em isolar gargalos de processamento. Mantemos as APIs flexíveis e portamos os códigos de cálculos matemáticos pesados e previsão estocástica para bibliotecas dinâmicas altamente eficientes em C.'
        },
        {
            pergunta: 'Como a linguagem garante a segurança contra vazamentos de memória?',
            resposta: 'Através de uma engenharia de software rigorosa, análise estática detalhada e o mapeamento determinístico do ciclo de vida dos dados, eliminando vulnerabilidades clássicas e blindando o sistema.'
        }
    ];

    const faqAccordion = document.getElementById('faq-accordion');

    faqDados.forEach((item, index) => {
        const accItem = document.createElement('div');
        accItem.className = 'accordion-item';

        const btn = document.createElement('button');
        btn.className = 'accordion-header';
        btn.setAttribute('aria-expanded', 'false');
        btn.innerHTML = `${item.pergunta} <i class="fa-solid fa-plus icon"></i>`;

        const content = document.createElement('div');
        content.className = 'accordion-content';
        content.innerHTML = `<p>${item.resposta}</p>`;

        btn.addEventListener('click', () => {
            const isExpanded = btn.getAttribute('aria-expanded') === 'true';
            
            document.querySelectorAll('.accordion-header').forEach(h => {
                h.setAttribute('aria-expanded', 'false');
                h.querySelector('i').className = 'fa-solid fa-plus icon';
                h.nextElementSibling.style.maxHeight = null;
            });

            if (!isExpanded) {
                btn.setAttribute('aria-expanded', 'true');
                btn.querySelector('i').className = 'fa-solid fa-minus icon';
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });

        accItem.appendChild(btn);
        accItem.appendChild(content);
        faqAccordion.appendChild(accItem);
    });
});