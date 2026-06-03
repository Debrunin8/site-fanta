//Criação de uma timeline do GSAP com animações sincronizadas com o scroll

var tl = gsap.timeline({ 
    scrollTrigger: {
       trigger: '.two',
       start: '0% 95%',
       end: '70% 50%',
       scrub: true,
       markers: true //depuração da timeline
    },
});

tl.to(
    '#fanta',
    {
         top: '120%', //MOVE O ELEMENTO COM ID FANTA PARA 120% DO TOPO
         left: '0%', //MOVE O ELEMENTO COM ID FANTA PARA 0% DA ESQUERDA
    },
    'orange'
); //Nomeando este trecho de animação como 'orange' para sincronização

tl.to(
    '#laranja-cortada',
    {
        top: '160%', //MOVE O ELEMENTO COM ID LARANJA-CORTADA PARA 160% DO TOPO
        left: '23%', //MOVE O ELEMENTO COM ID LARANJA-CORTADA PARA 23% DA ESQUERDA
    },
    'orange'
); //Sincronizando com a animação 'orange'

tl.to(
    '#laranja',
    {
       width: '15%', // Reduz a largura do elemento com id 'laranja' para 15% da largura da tela
       top: '160%', // Move o elemento com id 'laranja' para 160% do topo da tela
       right: '10%', // Move o elemento com id 'laranja' para 10% da direita da tela
    },
    'orange'
); //Sincronizando com a animação 'orange'

tl.to(
    '#folha',
    {
        rotate: '550deg', // Rotaciona o elemento com id 'folha' em 130 graus
        top: '110%', // Move o elemento com id 'folha' para 160% do topo da tela
        left: '70%', // Move o elemento com id 'folha' para 70% da esquerda da tela
    },
    'orange'
); //Sincronizando com a animação 'orange'

tl.to(
    '#folha2',
    {
        rotate: '530deg', // Rotaciona o elemento com id 'folha' em 130 graus
        top: '110%', // Move o elemento com id 'folha' para 160% do topo da tela
        left: '0%', // Move o elemento com id 'folha' para 70% da esquerda da tela
    },
    'orange'
); //Sincronizando com a animação 'orange'

//CRIANDO OUTRA TIMELINE

var tl2 = gsap.timeline({ 
    scrollTrigger: {
       trigger: '.three',
       start: '0% 95%',
       end: '20% 50%', // Fim da animação (topo da tela atinge 50% da altura quando estiver 20% da seção .three)
       scrub: true,
       markers: true //depuração da timeline
    },
});

// Definindo a animação dos elementos com a timeline 'tl2'
tl2.from(
    '.lemon1',
    {
        rotate: '-90deg', // Inicia o elemento com classe 'lemon1' rotacionando
        left: '-100%', // Move o elemento com classe 'lemon1' para -100% da esquerda da tela
        top: '110%', // Move o elemento com classe 'lemon1' para 110% do topo da tela
    },
    'ca'
); //Sincronizando com a animação 'ca'

tl2.from(
    '#cocacola',
    {
        rotate: '-90deg', // Inicia o elemento com classe 'cocacola' rotacionando
        left: '-110%', // Move o elemento com classe 'cocacola' para -110% da esquerda da tela
        top: '100%', // Move o elemento com classe 'cocacola' para 100% do topo da tela
    },
    'ca'
); //Sincronizando com a animação 'ca'

tl2.from(
    '.lemon2',
    {
        rotate: '90deg', // Inicia o elemento com classe 'lemon2' rotacionando
        left: '100%', // Move o elemento com classe 'cocacola' para 100% da esquerda da tela
        top: '110%', // Move o elemento com classe 'cocacola' para 110% do topo da tela
    },
    'ca'
); //Sincronizando com a animação 'ca'

tl2.from(
    '#pepsi',
    {
        rotate: '90deg', // Inicia o elemento com classe 'pepsi' rotacionando
        left: '100%', // Move o elemento com classe 'pepsi' para 100% da esquerda da tela
        top: '110%', // Move o elemento com classe 'pepsi' para 110% do topo da tela
    },
    'ca'
); //Sincronizando com a animação 'ca'

tl2.to(
    '#laranja-cortada',
    {
        width: '18%', // Aumenta a largura do elemento com id 'laranja-cortada' para 18% da largura da tela
        left: '42%', // Move o elemento com id 'laranja-cortada' para 42% da esquerda da tela
        top: '204%', // Move o elemento com id 'laranja-cortada' para 204% do topo da tela
    },
    'ca'
); //Sincronizando com a animação 'ca'

tl2.to(
    '#fanta',
    {
        width: '35%', // Aumenta a largura do elemento com id 'fanta' para 35% da largura da tela
        left: '33%', // Move o elemento com id 'fanta' para 33% da esquerda da tela
        top: '210%', // Move o elemento com id 'fanta' para 210% do topo da tela
    },
    'ca'
); //Sincronizando com a animação 'ca'