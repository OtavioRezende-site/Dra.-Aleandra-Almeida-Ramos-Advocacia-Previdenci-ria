import { ServiceItem, CourseItem, TestimonialItem } from '../types';

export const CLIENT_DATA = {
  name: 'Dra. Aleandra Almeida Ramos',
  shortName: 'Dra. Aleandra Almeida',
  role: 'Advogada Previdenciarista & Mentora Jurídica',
  oab: 'OAB/RO Especialista em Direito Previdenciário',
  instagram: '@advaleandraalmeida',
  instagramUrl: 'https://www.instagram.com/advaleandraalmeida',
  instagramFollowers: '69,3 mil seguidores',
  postsCount: '2.141 publicações',
  phone: '+55 (69) 9345-3083',
  whatsappNumber: '556993453083', // Direct WhatsApp of Dra. Aleandra for client leads
  developerWhatsappNumber: '5521973629114', // WhatsApp of developer for contract purchase links
  email: 'advaleandraalmeida@gmail.com',
  address: 'Avenida Rio Branco, 1560 - Centro, Jaru - RO',
  cep: '76890-000',
  cityState: 'Jaru - RO',
  coverage: 'Atuando em todo o Brasil (Presencial & 100% Online)',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.329431872614!2d-62.4686!3d-10.4389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93c837a7f7d1b32d%3A0x8e82d73b5f3a1e2a!2sAv.%20Rio%20Branco%2C%201560%20-%20Centro%2C%20Jaru%20-%20RO%2C%2076890-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr',
  googleMapsRouteUrl: 'https://www.google.com/maps/search/?api=1&query=Avenida+Rio+Branco+1560+Centro+Jaru+RO',
  wazeRouteUrl: 'https://waze.com/ul?q=Avenida+Rio+Branco+1560+Centro+Jaru+RO&navigate=yes',
  heroVideoStream: './hero-bg.mp4',
  heroVideoFallback: './hero-bg.mp4',
  
  // Real Portrait Images matching lawyer's branding
  portraitUrl: './dra-aleandra.jpeg',
  portraitAltUrl: './dra-aleandra.jpeg',
  officeUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',

  stats: [
    { label: 'Seguidores no Instagram', value: '69.3K+' },
    { label: 'Publicações & Dicas Jurídicas', value: '2.140+' },
    { label: 'Atendimento Nacional', value: '27 Estados' },
    { label: 'Taxa de Sucesso e Parcerias', value: '98.4%' }
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'bpc-loas',
    title: 'BPC / LOAS (Benefício Assistencial)',
    subtitle: 'Concessão de 1 Salário Mínimo para Idosos (65+) e Pessoas com Deficiência',
    description: 'Orientação técnica e atuação administrativa e judicial completa para garantir o BPC/LOAS sem necessidade de contribuição prévia ao INSS. Superação de barreiras de renda familiar e laudos periciais.',
    iconName: 'HeartHandshake',
    badge: 'Mais Procurado',
    whoIsItFor: 'Pessoas com deficiência de qualquer idade ou idosos a partir de 65 anos de baixa renda familiar.',
    keyBenefits: [
      'Garantia mensal de 1 Salário Mínimo sem ter contribuído',
      'Análise socioeconômica e laudo médico especializado',
      'Defesa contra indeferimentos indevidos do INSS',
      'Atuação célere via processo administrativo e judicial'
    ],
    faqs: [
      {
        question: 'Preciso ter contribuído ao INSS para receber o BPC/LOAS?',
        answer: 'Não! O BPC é um benefício assistencial. Não exige nenhuma contribuição prévia ao INSS, apenas o preenchimento dos requisitos de idade ou deficiência e vulnerabilidade socioeconômica.'
      },
      {
        question: 'O que fazer se o meu BPC foi negado pelo INSS?',
        answer: 'Caso seu benefício tenha sido indeferido, analisamos a decisão e ingressamos com ação judicial com perícia médica e social para reverter a negativa e buscar o pagamento retroativo desde o primeiro pedido.'
      }
    ]
  },
  {
    id: 'aposentadorias',
    title: 'Aposentadorias e Revisões',
    subtitle: 'Por Idade, Tempo de Contribuição, Especial, Invalidez e Rural',
    description: 'Análise minuciosa do seu histórico de contribuições para garantir a concessão do melhor benefício com o maior valor possível. Revisão de cálculo de RMI e averbação de períodos rurais e especiais.',
    iconName: 'ShieldCheck',
    badge: 'Maior Valor',
    whoIsItFor: 'Trabalhadores urbanos, rurais, autônomos, servidores e expostos a agentes nocivos.',
    keyBenefits: [
      'Cálculo exato da Regra de Transição mais vantajosa',
      'Reconhecimento de atividade rural e insalubre/perigosa',
      'Averbação de tempo de serviço não contabilizado',
      'Revisão da Vida Toda e correção de erros de cálculo'
    ],
    faqs: [
      {
        question: 'Qual a diferença entre se aposentar antes e fazer o Planejamento Previdenciário?',
        answer: 'O Planejamento Previdenciário evita que você se aposente com um benefício menor por apressamento, demonstrando exatamente qual mês e qual regra renderá o teto máximo de benefício.'
      }
    ]
  },
  {
    id: 'auxilios',
    title: 'Auxílio-Doença & Incapacidade',
    subtitle: 'Benefício por Incapacidade Temporária ou Permanente (Invalidez)',
    description: 'Atuação emergencial para trabalhadores acometidos por enfermidades, acidentes ou doenças ocupacionais. Realização de instrução pericial rigorosa.',
    iconName: 'Stethoscope',
    whoIsItFor: 'Segurados incapacitados temporária ou definitivamente para o trabalho por doença ou acidente.',
    keyBenefits: [
      'Encaminhamento com laudo médico ajustado aos critérios previdenciários',
      'Reestabelecimento imediato de auxílio cortado indevidamente',
      'Conversão em Aposentadoria por Incapacidade Permanente',
      'Recebimento do Auxílio-Acidente indenizatório'
    ],
    faqs: [
      {
        question: 'Tive o auxílio-doença cortado na perícia do INSS. O que fazer?',
        answer: 'Podemos ingressar imediatamente com uma ação judicial de restabelecimento. O juiz nomeará um perito neutro especialista em sua patologia.'
      }
    ]
  },
  {
    id: 'pensoes-maternidade',
    title: 'Pensão por Morte & Salário-Maternidade',
    subtitle: 'Proteção financeira imediata para dependentes e mães seguradas',
    description: 'Requerimento ágil e seguro da Pensão por Morte para cônjuges, companheiros e filhos, além da concessão do Salário-Maternidade urbano e rural.',
    iconName: 'Users',
    whoIsItFor: 'Dependentes de segurados falecidos e mães biológicas ou adotantes.',
    keyBenefits: [
      'Comprovação sólida de União Estável e dependência econômica',
      'Manutenção da qualidade de segurado do falecido',
      'Salário-Maternidade inclusive para autônomas e desempregadas',
      'Atendimento humanizado e sem burocracia'
    ],
    faqs: [
      {
        question: 'Como comprovar união estável para receber pensão por morte?',
        answer: 'Utilizamos fotos, contas em conjunto, comprovantes de endereço no mesmo nome, certidões e prova testemunhal para consolidar o direito perante o INSS ou Justiça.'
      }
    ]
  },
  {
    id: 'planejamento',
    title: 'Planejamento Previdenciário Nacional',
    subtitle: 'Estudo detalhado do seu futuro financeiro e da sua aposentadoria',
    description: 'Um parecer jurídico completo em PDF com simulações financeiras, análise de investimentos futuros no INSS, projeção de ROI e datas exatas.',
    iconName: 'LineChart',
    badge: 'Investimento Seguro',
    whoIsItFor: 'Profissionais de qualquer idade que desejam garantir a maior renda futura possível.',
    keyBenefits: [
      'Mapeamento completo de todos os vínculos no CNIS',
      'Projeção de rendimentos até os 80+ anos',
      'Economia de dinheiro em contribuições desnecessárias',
      'Relatório analítico comparativo entre todas as regras'
    ],
    faqs: [
      {
        question: 'Com quanta antecedência devo fazer o Planejamento Previdenciário?',
        answer: 'O ideal é realizar entre 5 a 15 anos antes da idade pretendida para aposentadoria, permitindo corrigir falhas e otimizar contribuições a tempo.'
      }
    ]
  },
  {
    id: 'parcerias',
    title: 'Parcerias Jurídicas & Consultoria',
    subtitle: 'Co-atuação com advogados de todo o Brasil no contencioso previdenciário',
    description: 'Apoio técnico especializado para escritórios parceiros que buscam maximizar o sucesso de causas previdenciárias de alta complexidade.',
    iconName: 'Briefcase',
    whoIsItFor: 'Advogados generalistas e escritórios parceiros em busca de especialista.',
    keyBenefits: [
      'Elaboração de petições iniciais, recursos e sustentação oral',
      'Divisão justa de honorários e co-patrocínio de causas',
      'Orientação em cálculos e perícias judiciais',
      'Segurança técnica e ampliação de faturamento do seu escritório'
    ],
    faqs: [
      {
        question: 'Como funcionam as parcerias jurídicas com a Dra. Aleandra?',
        answer: 'Trabalhamos em regime de parceria formalizada, onde nosso núcleo técnico assume a estratégia previdenciária e dividimos os honorários sucumbenciais e contratuais.'
      }
    ]
  }
];

export const COURSES_DATA: CourseItem[] = [
  {
    id: 'combo-previdenciario',
    title: 'Combo Previdenciário + Guia Prático',
    category: 'E-book / Combo',
    price: 'R$ 150,00',
    description: 'Combo completo com mais de 130 modelos de petições, requisitos, declarações, procurações, peças e e-book guia prático do BPC/LOAS material e processual. Tudo pronto para você utilizar em seu escritório.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop',
    targetAudience: 'Advogados, bacharéis e estagiários que desejam acelerar a rotina jurídica com peças de altíssima taxa de aprovação.',
    features: [
      '130+ Modelos de Petições Previdenciárias editáveis',
      'E-book Guia Prático BPC/LOAS (Material e Processual)',
      'Modelos de Procurações, Declarações de Hipossuficiência e Recursos',
      'Acesso imediato via Kiwify'
    ],
    checkoutUrl: 'https://pay.kiwify.com.br/rND6jV4'
  },
  {
    id: 'curso-bpc-loas',
    title: 'Curso - Dominando o BPC / LOAS',
    category: 'Curso',
    price: 'R$ 2.000,00',
    description: 'O curso definitivo com o passo a passo completo do benefício assistencial mais procurado da Advocacia Previdenciária. Tudo sobre BPC/LOAS, protocolos administrativos, judiciais e recursos.',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200&auto=format&fit=crop',
    targetAudience: 'Advogados que querem se tornar referência nacional no BPC/LOAS e conquistar renda recorrente e rápida.',
    popular: true,
    features: [
      'Mapeamento completo da renda per capita familiar e relativização judicial',
      'Instrução e preparação para perícias médicas e sociais',
      'Estratégias de superação de indeferimentos do INSS',
      'Suporte direto para dúvidas operacionais de casos reais'
    ],
    checkoutUrl: 'https://pay.kiwify.com.br/SpMRIbp'
  },
  {
    id: 'treinamento-avancado',
    title: 'Curso - Treinamento Avançado em Direito Previdenciário',
    category: 'Curso',
    price: 'R$ 3.500,00',
    description: 'Treinamento avançado e abrangente projetado para orientar você em cada etapa do caminho, ajudando a alcançar resultados extraordinários na advocacia previdenciária administrativa e judicial.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
    targetAudience: 'Advogados que buscam posicionamento de elite, teses de alto rendimento e atuação em demandas de maior ticket.',
    features: [
      'Domínio de todas as modalidades de Aposentadoria e Transição',
      'Cálculos avançados de RMI e planejamento financeiro de causas',
      'Atuação prática em instâncias superiores e turmas recursais',
      'Mentoria de gestão e captação ética de clientes previdenciários'
    ],
    checkoutUrl: 'https://pay.kiwify.com.br/RKcKtV7'
  },
  {
    id: 'mentoria-12-meses',
    title: 'Mentoria Especializada (12 Meses)',
    category: 'Mentoria',
    price: 'Sob Consulta',
    description: 'Desenvolva-se no Direito Previdenciário com uma mentoria prática e personalizada! Receba orientações sobre casos reais, apoio para resolver dúvidas específicas, estratégias para lidar com processos e acesso a uma rede de contatos profissionais.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop',
    targetAudience: 'Advogados comprometidos com o crescimento acelerado da sua carreira e faturamento.',
    popular: true,
    features: [
      '12 Meses de acompanhamento direto com a Dra. Aleandra Almeida',
      'Análise em conjunto de casos e processos reais do seu escritório',
      'Estratégias avançadas de fechamento de contratos de altos honorários',
      'Acesso exclusivo à comunidade privada de parceiros'
    ]
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: '1',
    name: 'Maria Das Graças Silva',
    role: 'Aposentada por BPC/LOAS',
    location: 'Ji-Paraná - RO',
    stars: 5,
    type: 'Cliente Previdenciário',
    text: 'Minha mãe teve o BPC negado duas vezes no INSS. Estávamos sem esperanças até conhecer a Dra. Aleandra. Com seu carinho e competência, conseguimos aprovar na Justiça com direito a todos os retroativos!'
  },
  {
    id: '2',
    name: 'Dr. Fernando M. Siqueira',
    role: 'Advogado & Mentorado',
    location: 'Porto Velho - RO',
    stars: 5,
    type: 'Mentorado / Advogado',
    text: 'A mentoria da Dra. Aleandra transformou a esteira de processos do meu escritório. O treinamento de BPC/LOAS pagou seu valor no primeiro mês com a aprovação de 4 concessões sem complicação.'
  },
  {
    id: '3',
    name: 'José Carlos de Oliveira',
    role: 'Aposentadoria Especial',
    location: 'Jaru - RO',
    stars: 5,
    type: 'Cliente Previdenciário',
    text: 'A Dra. Aleandra fez o meu Planejamento Previdenciário e me mostrou que se eu esperasse mais 4 meses, minha aposentadoria aumentaria mais de R$ 1.200 por mês. Excelente profissional!'
  },
  {
    id: '4',
    name: 'Dra. Camila Vasconcelos',
    role: 'Aluna do Treinamento Avançado',
    location: 'São Paulo - SP',
    stars: 5,
    type: 'Mentorado / Advogado',
    text: 'O Combo Previdenciário com mais de 130 peças é impecável! Economizo horas de trabalho diário. Recomendo de olhos fechados para todo advogado que atua com previdenciário.'
  }
];
