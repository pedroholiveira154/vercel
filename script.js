// Funções de redirecionamento com tratamento de segurança e abertura na mesma aba (conforme comportamento original)
    function direcionar1() {
        window.location.href = 'https://atv1.gt.tc/atv_hospedagem/index.php?authuser=0';
    }
    function direcionar2() {
        window.location.href = 'https://atv2.gt.tc/atv2/index.php?authuser=0';
    }
    function direcionar3() {
        window.location.href = 'https://pedroholiveira154.github.io/toDo/';
    }
    function direcionar4() {
        window.location.href = 'https://canva.link/poyoao33w229ja4';
    }
    function direcionar5() {
        window.location.href = 'https://docs.google.com/document/d/1ub3MK0i92R1vYLDwjlVUJeoVj3vFXyuVGzCiuAcrnxs/edit?tab=t.0';
    }

    // Suporte para acessibilidade via teclado: adicionar evento Enter/Space para cards
    document.querySelectorAll('.link-card').forEach(card => {
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });

    // opcional: log amigável no console para verificação (apenas desenvolvimento)
    console.log("Página carregada — todos os links ativos e prontos para apresentação.");