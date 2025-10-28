// Dados dos Catálogos - Foco em Vendas (PDFs convertidos para HTML com PDF.js)
const catalogos = {
    "textil": [
        {
            nome: "3D Crespar Catálogo",
            capa: "Catalogos/3D Crespar Catálogo - whatsapp_compressed.pdf",
            arquivo: "Catalogos/3D Crespar Catálogo - whatsapp_compressed.pdf",
            categoria: "textil",
            descricao: "Produtos 3D Crespar para aplicações têxteis de alta qualidade",
            destaque: "Novidade"
        },
        {
            nome: "Catálogo Digital - Nylon 600 e Mescla 300",
            capa: "Catalogos/Catálogo Digital - Nylon 600 e Mescla 300.pdf",
            arquivo: "Catalogos/Catálogo Digital - Nylon 600 e Mescla 300.pdf",
            categoria: "textil",
            descricao: "Tecidos de nylon e mescla para diversas aplicações",
            destaque: "Mais Vendido"
        },
        {
            nome: "Catálogo Digital Bucha Americana",
            capa: "Catalogos/Catálogo Digital Bucha Americana.pdf",
            arquivo: "Catalogos/Catálogo Digital Bucha Americana.pdf",
            categoria: "textil",
            descricao: "Bucha americana premium para aplicações têxteis",
            destaque: "Premium"
        },
        {
            nome: "Catálogo Digital Capacho Vinílico",
            capa: "Catalogos/Catálogo Digital Capacho Vinílico.pdf",
            arquivo: "Catalogos/Catálogo Digital Capacho Vinílico.pdf",
            categoria: "textil",
            descricao: "Capachos vinílicos para decoração e funcionalidade",
            destaque: "Destaque"
        },
        {
            nome: "Catálogo Digital Grama Sintética",
            capa: "Catalogos/Catálogo Digital Grama Sintética.pdf",
            arquivo: "Catalogos/Catálogo Digital Grama Sintética.pdf",
            categoria: "textil",
            descricao: "Grama sintética de alta qualidade para paisagismo",
            destaque: "Ecológico"
        },
        {
            nome: "Catálogo Digital Malhas",
            capa: "Catalogos/Catálogo Digital Malhas  Atualizado 27 02.pdf",
            arquivo: "Catalogos/Catálogo Digital Malhas  Atualizado 27 02.pdf",
            categoria: "textil",
            descricao: "Malhas têxteis atualizadas com as últimas tendências",
            destaque: "Atualizado"
        },
        {
            nome: "Catálogo Digital Suede Plus & Bouclê Plus",
            capa: "Catalogos/Catálogo Digital Suede Plus & Bouclê Plus (1).pdf",
            arquivo: "Catalogos/Catálogo Digital Suede Plus & Bouclê Plus (1).pdf",
            categoria: "textil",
            descricao: "Tecidos Suede Plus e Bouclê Plus para acabamentos especiais",
            destaque: "Luxo"
        },
        {
            nome: "Catálogo Digital Velcros",
            capa: "Catalogos/Catálogo Digital Velcros.pdf",
            arquivo: "Catalogos/Catálogo Digital Velcros.pdf",
            categoria: "textil",
            descricao: "Produtos com velcro para fixação e funcionalidade",
            destaque: "Prático"
        },
        {
            nome: "Neo Toalhas",
            capa: "Catalogos/Neo Toalhas.pdf",
            arquivo: "Catalogos/Neo Toalhas.pdf",
            categoria: "textil",
            descricao: "Linha Neo de toalhas com tecnologia avançada",
            destaque: "Tecnologia"
        }
    ],
    "eletro": [
        {
            nome: "Catálogo ELETRO 2025",
            capa: "Catalogos/Catálogo ELETRO 2025.pdf",
            arquivo: "Catalogos/Catálogo ELETRO 2025.pdf",
            categoria: "eletro",
            descricao: "Produtos eletrônicos 2025 com as últimas tecnologias",
            destaque: "2025"
        }
    ],
    "esportes": [
        {
            nome: "Esportes Aquáticos",
            capa: "Catalogos/Esportes Aquáticos - Hidro, Natação e Recreação.pdf",
            arquivo: "Catalogos/Esportes Aquáticos - Hidro, Natação e Recreação.pdf",
            categoria: "esportes",
            descricao: "Produtos para esportes aquáticos, hidroginástica e natação",
            destaque: "Saúde"
        }
    ],
    "ferramentas": [
        {
            nome: "Grampos e Grampeadores",
            capa: "Catalogos/Grampos e Grampeadores.pdf",
            arquivo: "Catalogos/Grampos e Grampeadores.pdf",
            categoria: "ferramentas",
            descricao: "Grampos e grampeadores profissionais para trabalho pesado",
            destaque: "Profissional"
        },
        {
            nome: "Pregos e Pregadores NV",
            capa: "Catalogos/Pregos e Pregadores NV.pdf",
            arquivo: "Catalogos/Pregos e Pregadores NV.pdf",
            categoria: "ferramentas",
            descricao: "Pregos e pregadores NV para fixação segura",
            destaque: "Segurança"
        }
    ],
    "outros": [
        {
            nome: "APRESENTAÇÃO-Grampofix",
            capa: "Catalogos/APRESENTAÇÃO-Grampofix.pdf",
            arquivo: "Catalogos/APRESENTAÇÃO-Grampofix.pdf",
            categoria: "outros",
            descricao: "Apresentação completa dos produtos Grampofix",
            destaque: "Completo"
        },
        {
            nome: "Catálogo - Dalebol",
            capa: "Catalogos/Catálogo - Dalebol (1).pdf",
            arquivo: "Catalogos/Catálogo - Dalebol (1).pdf",
            categoria: "outros",
            descricao: "Catálogo Dalebol com produtos de alta qualidade",
            destaque: "Qualidade"
        },
        {
            nome: "CATÁLOGO KIAN 2025",
            capa: "Catalogos/CATÁLOGO KIAN 2025 (1).pdf",
            arquivo: "Catalogos/CATÁLOGO KIAN 2025 (1).pdf",
            categoria: "outros",
            descricao: "Catálogo KIAN 2025 com produtos inovadores",
            destaque: "Inovação"
        },
        {
            nome: "CATALOGO RAYCO 2025",
            capa: "Catalogos/CATALOGO RAYCO 2025.pdf",
            arquivo: "Catalogos/CATALOGO RAYCO 2025.pdf",
            categoria: "outros",
            descricao: "Catálogo RAYCO 2025 com soluções completas",
            destaque: "Solução"
        },
        {
            nome: "CATÁLOGO SUSA DO BRASIL",
            capa: "Catalogos/CATÁLOGO_SUSA DO BRASIL_2021_VERSÃO E-MAIL.pdf",
            arquivo: "Catalogos/CATÁLOGO_SUSA DO BRASIL_2021_VERSÃO E-MAIL.pdf",
            categoria: "outros",
            descricao: "Catálogo SUSA do Brasil com produtos nacionais",
            destaque: "Nacional"
        },
        {
            nome: "Folder NeoPiso",
            capa: "Catalogos/Folder NeoPiso.pdf",
            arquivo: "Catalogos/Folder NeoPiso.pdf",
            categoria: "outros",
            descricao: "Folder promocional NeoPiso com ofertas especiais",
            destaque: "Oferta"
        },
        {
            nome: "Lançamento Metálica Plus",
            capa: "Catalogos/Lançamento Metálica Plus Out.pdf",
            arquivo: "Catalogos/Lançamento Metálica Plus Out.pdf",
            categoria: "outros",
            descricao: "Lançamento da linha Metálica Plus com tecnologia avançada",
            destaque: "Lançamento"
        }
    ],
    "geral": [
        {
            nome: "Catálogo Geral",
            capa: "Catalogos/catalogo geral.pdf",
            arquivo: "Catalogos/catalogo geral.pdf",
            categoria: "geral",
            descricao: "Catálogo geral com todos os produtos disponíveis",
            destaque: "Completo"
        }
    ]
};

// Estado da aplicação
let currentCategory = 'all';
let currentSearchTerm = '';
let filteredCatalogos = [];

// PDF.js variáveis
let currentPdf = null;
let currentPage = 1;
let totalPages = 1;
let pdfCanvas, pdfControls, prevPageBtn, nextPageBtn, pageInfo;

// Elementos DOM
const catalogosGrid = document.getElementById('catalogosGrid');
const searchInput = document.getElementById('searchInput');
const pdfModal = document.getElementById('pdfModal');
const pdfViewer = document.getElementById('pdfViewer');
const modalTitle = document.getElementById('modalTitle');
const downloadBtn = document.getElementById('downloadBtn');
const closeModal = document.getElementById('closeModal');

// PDF.js elementos
pdfCanvas = document.getElementById('pdfCanvas');
pdfControls = document.getElementById('pdfControls');
prevPageBtn = document.getElementById('prevPage');
nextPageBtn = document.getElementById('nextPage');
pageInfo = document.getElementById('pageInfo');

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    loadAllCatalogos();
    setupEventListeners();
    addScrollEffects();
}

function loadAllCatalogos() {
    // Combinar todos os catálogos em uma única lista
    filteredCatalogos = [];
    Object.values(catalogos).forEach(categoria => {
        filteredCatalogos = filteredCatalogos.concat(categoria);
    });
    
    renderCatalogos();
}

function setupEventListeners() {
    // Filtros de categoria (originais)
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            switchCategory(category);
            
            // Atualizar estado visual dos botões
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Atualizar menu fixo também
            updateStickyMenu(category);
        });
    });
    
    // Filtros do menu fixo
    const stickyFilterBtns = document.querySelectorAll('.sticky-filter-btn');
    stickyFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            switchCategory(category);
            
            // Atualizar estado visual dos botões originais
            filterBtns.forEach(b => b.classList.remove('active'));
            const originalBtn = document.querySelector(`[data-category="${category}"]`);
            if (originalBtn) originalBtn.classList.add('active');
            
            // Atualizar estado visual dos botões fixos
            stickyFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
    
    // Busca
    searchInput.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value.toLowerCase();
        filterCatalogos();
    });
    
    // Botão de busca
    const searchBtn = document.querySelector('.search-btn');
    searchBtn.addEventListener('click', () => {
        currentSearchTerm = searchInput.value.toLowerCase();
        filterCatalogos();
    });
    
    // Modal
    closeModal.addEventListener('click', hideModal);
    pdfModal.addEventListener('click', (e) => {
        if (e.target === pdfModal) {
            hideModal();
        }
    });
    
    // Download
    downloadBtn.addEventListener('click', downloadCurrentPdf);
    
    // Fechar modal com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideModal();
        }
    });
}

function updateStickyMenu(activeCategory) {
    const stickyFilterBtns = document.querySelectorAll('.sticky-filter-btn');
    stickyFilterBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === activeCategory) {
            btn.classList.add('active');
        }
    });
}

function switchCategory(category) {
    currentCategory = category;
    filterCatalogos();
}

function filterCatalogos() {
    let filtered = [];
    
    // Filtrar por categoria
    if (currentCategory === 'all') {
        filtered = Object.values(catalogos).flat();
    } else {
        filtered = catalogos[currentCategory] || [];
    }
    
    // Filtrar por termo de busca
    if (currentSearchTerm) {
        filtered = filtered.filter(catalogo => 
            catalogo.nome.toLowerCase().includes(currentSearchTerm) ||
            catalogo.descricao.toLowerCase().includes(currentSearchTerm) ||
            catalogo.categoria.toLowerCase().includes(currentSearchTerm) ||
            catalogo.destaque.toLowerCase().includes(currentSearchTerm)
        );
    }
    
    filteredCatalogos = filtered;
    renderCatalogos();
}

function renderCatalogos() {
    if (filteredCatalogos.length === 0) {
        catalogosGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>Nenhum catálogo encontrado</h3>
                <p>Tente ajustar os filtros ou termos de busca.</p>
                <a href="https://wa.me/5521970777387?text=Olá%20Fábio!%20Não%20encontrei%20o%20que%20procuro.%20Pode%20me%20ajudar?" target="_blank" class="btn-whatsapp">
                    <i class="fab fa-whatsapp"></i>
                    Fábio pode me ajudar
                </a>
            </div>
        `;
        return;
    }
    
    catalogosGrid.innerHTML = filteredCatalogos.map((catalogo, index) => `
        <div class="catalogo-card" 
             onclick="openPdfViewer('${catalogo.arquivo}', '${catalogo.nome}')"
             style="opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s;">
            <div class="card-image">
                <div class="destaque-badge">${catalogo.destaque}</div>
                <i class="fas fa-file-pdf"></i>
            </div>
            <div class="card-content">
                <div class="card-category">${getCategoryName(catalogo.categoria)}</div>
                <h3 class="card-title">${catalogo.nome}</h3>
                <p class="card-description">${catalogo.descricao}</p>
                <div class="card-actions">
                    <button class="btn-secondary" onclick="event.stopPropagation(); downloadPdfDirect('${catalogo.arquivo}', '${catalogo.nome}')">
                        <i class="fas fa-download"></i>
                        Baixar
                    </button>
                    <a href="https://wa.me/5521970777387?text=Olá%20Fábio!%20Estou%20interessado%20no%20catálogo%20${encodeURIComponent(catalogo.nome)}.%20Pode%20me%20dar%20mais%20informações?" target="_blank" class="btn-whatsapp-card" onclick="event.stopPropagation()">
                        <i class="fab fa-whatsapp"></i>
                        Falar com Fábio
                    </a>
                </div>
            </div>
        </div>
    `).join('');
    
    // Animar os cards após renderização
    setTimeout(() => {
        const cards = document.querySelectorAll('.catalogo-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 50);
}

function getCategoryName(category) {
    const categoryNames = {
        'geral': 'Geral',
        'textil': 'Têxtil',
        'eletro': 'Eletro',
        'esportes': 'Esportes',
        'ferramentas': 'Ferramentas',
        'outros': 'Outros'
    };
    return categoryNames[category] || category;
}

function openPdfViewer(arquivo, nome) {
    // Detectar se é mobile
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Para mobile: mostrar confirmação e baixar diretamente
        showMobileConfirmation(arquivo, nome);
    } else {
        // Para desktop: converter PDF para HTML com paginação
        convertPdfToHtml(arquivo, nome);
    }
}

// Função para converter PDF para HTML usando PDF.js com paginação
async function convertPdfToHtml(arquivo, nome) {
    try {
        // Mostrar modal com loading
        modalTitle.textContent = nome;
        pdfModal.style.display = 'block';
        
        // Limpar canvas anterior
        pdfCanvas.innerHTML = '';
        
        // Mostrar controles de paginação
        pdfControls.style.display = 'flex';
        
        // Mostrar loading
        pdfCanvas.innerHTML = `
            <div class="pdf-loading">
                <div class="loading-spinner"></div>
                <p>Convertendo PDF para HTML...</p>
            </div>
        `;
        
        // Carregar PDF usando PDF.js
        const loadingTask = pdfjsLib.getDocument(arquivo);
        currentPdf = await loadingTask.promise;
        totalPages = currentPdf.numPages;
        currentPage = 1;
        
        // Renderizar primeira página
        await renderPdfPage(1);
        
        // Atualizar controles
        updatePdfControls();
        
        // Adicionar event listeners para controles
        setupPdfControls(arquivo);
        
    } catch (error) {
        console.error('Erro ao carregar PDF:', error);
        showPdfError(arquivo, nome);
    }
}

// Renderizar página específica do PDF
async function renderPdfPage(pageNum) {
    try {
        const page = await currentPdf.getPage(pageNum);
        
        // Calcular escala baseada no tamanho disponível do modal
        const containerWidth = pdfCanvas.clientWidth - 32; // 32px de padding
        const containerHeight = pdfCanvas.clientHeight - 32;
        
        // Obter viewport original
        const originalViewport = page.getViewport({ scale: 1.0 });
        
        // Calcular escala para caber no container
        const scaleX = containerWidth / originalViewport.width;
        const scaleY = containerHeight / originalViewport.height;
        const scale = Math.min(scaleX, scaleY, 2.0); // Máximo 2x de zoom
        
        // Criar viewport com escala calculada
        const viewport = page.getViewport({ scale: scale });
        
        // Criar canvas
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        
        // Renderizar página no canvas
        const renderContext = {
            canvasContext: context,
            viewport: viewport
        };
        
        await page.render(renderContext).promise;
        
        // Limpar canvas e adicionar nova página
        pdfCanvas.innerHTML = '';
        pdfCanvas.appendChild(canvas);
        
        // Atualizar info da página
        pageInfo.textContent = `Página ${pageNum} de ${totalPages}`;
        
    } catch (error) {
        console.error('Erro ao renderizar página:', error);
        pdfCanvas.innerHTML = `
            <div class="pdf-error">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Erro ao renderizar página ${pageNum}</p>
            </div>
        `;
    }
}

// Atualizar controles de navegação
function updatePdfControls() {
    prevPageBtn.disabled = currentPage <= 1;
    nextPageBtn.disabled = currentPage >= totalPages;
}

// Configurar controles de navegação
function setupPdfControls(arquivo) {
    // Remover listeners anteriores
    prevPageBtn.replaceWith(prevPageBtn.cloneNode(true));
    nextPageBtn.replaceWith(nextPageBtn.cloneNode(true));
    
    // Adicionar novos listeners
    prevPageBtn = document.getElementById('prevPage');
    nextPageBtn = document.getElementById('nextPage');
    
    prevPageBtn.addEventListener('click', async () => {
        if (currentPage > 1) {
            currentPage--;
            await renderPdfPage(currentPage);
            updatePdfControls();
        }
    });
    
    nextPageBtn.addEventListener('click', async () => {
        if (currentPage < totalPages) {
            currentPage++;
            await renderPdfPage(currentPage);
            updatePdfControls();
        }
    });
    
    // Adicionar listener para redimensionamento da janela
    const resizeHandler = debounce(async () => {
        if (currentPdf && pdfModal.style.display === 'block') {
            await renderPdfPage(currentPage);
        }
    }, 250);
    
    window.addEventListener('resize', resizeHandler);
    
    // Armazenar referência para poder remover depois
    window.pdfResizeHandler = resizeHandler;
    
    // Atualizar botão de download
    downloadBtn.onclick = () => downloadPdfDirect(arquivo);
}

// Função debounce para otimizar redimensionamento
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Função de erro para PDF
function showPdfError(arquivo, nome) {
    pdfCanvas.innerHTML = `
        <div class="pdf-error">
            <i class="fas fa-exclamation-triangle"></i>
            <p>Erro ao carregar o PDF "${nome}"</p>
            <button onclick="window.open('${arquivo}', '_blank')" class="pdf-btn" style="margin-top: 1rem;">
                Abrir em Nova Aba
            </button>
        </div>
    `;
}

function showMobileConfirmation(arquivo, nome) {
    // Criar modal de confirmação para mobile
    const confirmationModal = document.createElement('div');
    confirmationModal.id = 'mobileConfirmation';
    confirmationModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        z-index: 2000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
    `;
    
    confirmationModal.innerHTML = `
        <div style="
            background: var(--bg-card);
            border-radius: var(--border-radius-lg);
            padding: 2rem;
            max-width: 400px;
            width: 100%;
            text-align: center;
            box-shadow: var(--shadow-xl);
        ">
            <div style="
                width: 60px;
                height: 60px;
                background: var(--gradient-primary);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 1rem;
            ">
                <i class="fas fa-download" style="font-size: 1.5rem; color: white;"></i>
            </div>
            <h3 style="
                color: var(--text-primary);
                margin-bottom: 1rem;
                font-size: 1.2rem;
            ">Baixar Catálogo</h3>
            <p style="
                color: var(--text-secondary);
                margin-bottom: 2rem;
                line-height: 1.5;
            ">O catálogo <strong>"${nome}"</strong> será baixado diretamente para seu dispositivo.</p>
            <div style="
                display: flex;
                gap: 1rem;
                flex-direction: column;
            ">
                <button id="confirmDownload" style="
                    background: var(--gradient-secondary);
                    color: var(--text-primary);
                    border: none;
                    padding: 1rem 2rem;
                    border-radius: var(--border-radius);
                    font-weight: 600;
                    cursor: pointer;
                    transition: var(--transition);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                ">
                    <i class="fas fa-download"></i>
                    Baixar Agora
                </button>
                <button id="cancelDownload" style="
                    background: var(--bg-tertiary);
                    color: var(--text-secondary);
                    border: 1px solid var(--border-color);
                    padding: 0.75rem 2rem;
                    border-radius: var(--border-radius);
                    font-weight: 600;
                    cursor: pointer;
                    transition: var(--transition);
                ">
                    Cancelar
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(confirmationModal);
    document.body.style.overflow = 'hidden';
    
    // Event listeners para os botões
    document.getElementById('confirmDownload').addEventListener('click', () => {
        downloadPdfDirect(arquivo, nome);
        hideMobileConfirmation();
    });
    
    document.getElementById('cancelDownload').addEventListener('click', hideMobileConfirmation);
    
    // Fechar ao clicar fora
    confirmationModal.addEventListener('click', (e) => {
        if (e.target === confirmationModal) {
            hideMobileConfirmation();
        }
    });
}

function hideMobileConfirmation() {
    const confirmationModal = document.getElementById('mobileConfirmation');
    if (confirmationModal) {
        confirmationModal.remove();
        document.body.style.overflow = 'auto';
    }
}

function testPdfAccessibility(arquivo) {
    return new Promise((resolve) => {
        const testImg = new Image();
        testImg.onload = () => resolve(true);
        testImg.onerror = () => resolve(false);
        testImg.src = arquivo;
        
        // Timeout de 2 segundos
        setTimeout(() => resolve(false), 2000);
    });
}

function openDesktopModal(arquivo, nome) {
    modalTitle.textContent = nome;
    
    // Limpar iframe primeiro
    pdfViewer.src = '';
    pdfViewer.style.width = '100%';
    pdfViewer.style.height = '100%';
    pdfViewer.style.display = 'block';
    
    // Mostrar modal primeiro
    pdfModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Mostrar indicador de carregamento
    const loadingIndicator = document.createElement('div');
    loadingIndicator.id = 'pdfLoading';
    loadingIndicator.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        z-index: 10;
        font-size: 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    `;
    loadingIndicator.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Carregando PDF...';
    
    // Adicionar loading ao modal
    const modalBody = document.querySelector('.modal-body');
    modalBody.appendChild(loadingIndicator);
    
    // Armazenar dados para download
    pdfModal.dataset.arquivo = arquivo;
    pdfModal.dataset.nome = nome;
    
    // Função para remover loading
    const removeLoading = () => {
        const loading = document.getElementById('pdfLoading');
        if (loading) {
            loading.remove();
        }
    };
    
    // Carregar PDF diretamente (método simples e eficaz)
    console.log('Carregando PDF:', arquivo);
    pdfViewer.src = arquivo;
    
    // Evento de sucesso
    pdfViewer.onload = function() {
        console.log('PDF carregado com sucesso!');
        removeLoading();
    };
    
    // Evento de erro - tentar Google Viewer como fallback
    pdfViewer.onerror = function() {
        console.log('Erro ao carregar PDF, tentando Google Viewer...');
        removeLoading();
        
        const googleViewerUrl = `https://docs.google.com/gview?url=${encodeURIComponent(window.location.origin + '/' + arquivo)}&embedded=true`;
        pdfViewer.src = googleViewerUrl;
        
        // Adicionar loading novamente
        modalBody.appendChild(loadingIndicator);
        
        // Se Google Viewer também falhar, mostrar erro
        setTimeout(() => {
            if (!pdfViewer.contentDocument || pdfViewer.contentDocument.readyState !== 'complete') {
                console.log('Google Viewer também falhou, mostrando erro...');
                removeLoading();
                showPdfError(arquivo, nome);
            }
        }, 5000);
    };
    
    // Timeout para verificar se carregou
    setTimeout(() => {
        if (!pdfViewer.contentDocument || pdfViewer.contentDocument.readyState !== 'complete') {
            console.log('PDF não carregou, tentando Google Viewer...');
            removeLoading();
            
            const googleViewerUrl = `https://docs.google.com/gview?url=${encodeURIComponent(window.location.origin + '/' + arquivo)}&embedded=true`;
            pdfViewer.src = googleViewerUrl;
            
            // Adicionar loading novamente
            modalBody.appendChild(loadingIndicator);
            
            // Se Google Viewer também falhar, mostrar erro
            setTimeout(() => {
                if (!pdfViewer.contentDocument || pdfViewer.contentDocument.readyState !== 'complete') {
                    console.log('Google Viewer também falhou, mostrando erro...');
                    removeLoading();
                    showPdfError(arquivo, nome);
                }
            }, 5000);
        }
    }, 3000);
}

function showPdfError(arquivo, nome) {
    // Remover iframe e mostrar mensagem de erro
    pdfViewer.style.display = 'none';
    
    const errorMessage = document.createElement('div');
    errorMessage.id = 'pdfError';
    errorMessage.style.cssText = `
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        text-align: center;
        padding: 2rem;
    `;
    
    errorMessage.innerHTML = `
        <div style="
            width: 80px;
            height: 80px;
            background: rgba(239, 68, 68, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1rem;
        ">
            <i class="fas fa-exclamation-triangle" style="font-size: 2rem; color: #ef4444;"></i>
        </div>
        <h3 style="color: var(--text-primary); margin-bottom: 1rem; font-size: 1.2rem;">
            Não foi possível carregar o PDF
        </h3>
        <p style="color: var(--text-secondary); margin-bottom: 2rem; line-height: 1.5;">
            O catálogo "${nome}" não pôde ser exibido diretamente.<br>
            Você pode baixá-lo ou abrir em uma nova aba.
        </p>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center;">
            <button onclick="downloadPdfDirect('${arquivo}', '${nome}')" style="
                background: var(--gradient-secondary);
                color: var(--text-primary);
                border: none;
                padding: 0.75rem 1.5rem;
                border-radius: var(--border-radius);
                font-weight: 600;
                cursor: pointer;
                transition: var(--transition);
                display: flex;
                align-items: center;
                gap: 0.5rem;
            ">
                <i class="fas fa-download"></i>
                Baixar PDF
            </button>
            <button onclick="window.open('${arquivo}', '_blank')" style="
                background: var(--bg-tertiary);
                color: var(--text-secondary);
                border: 1px solid var(--border-color);
                padding: 0.75rem 1.5rem;
                border-radius: var(--border-radius);
                font-weight: 600;
                cursor: pointer;
                transition: var(--transition);
                display: flex;
                align-items: center;
                gap: 0.5rem;
            ">
                <i class="fas fa-external-link-alt"></i>
                Abrir em Nova Aba
            </button>
        </div>
    `;
    
    const modalBody = document.querySelector('.modal-body');
    modalBody.appendChild(errorMessage);
}

function hideModal() {
    pdfModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    pdfViewer.src = '';
    pdfViewer.style.display = 'block'; // Restaurar display do iframe
    
    // Remover loading se existir
    const loading = document.getElementById('pdfLoading');
    if (loading) {
        loading.remove();
    }
    
    // Remover listener de redimensionamento
    if (window.pdfResizeHandler) {
        window.removeEventListener('resize', window.pdfResizeHandler);
        window.pdfResizeHandler = null;
    }
    
    // Remover mensagem de erro se existir
    const error = document.getElementById('pdfError');
    if (error) {
        error.remove();
    }
}

function downloadCurrentPdf() {
    const arquivo = pdfModal.dataset.arquivo;
    const nome = pdfModal.dataset.nome;
    downloadPdfDirect(arquivo, nome);
}

function downloadPdfDirect(arquivo, nome) {
    // Criar link de download
    const link = document.createElement('a');
    link.href = arquivo;
    link.download = nome + '.pdf';
    link.target = '_blank';
    
    // Adicionar ao DOM temporariamente
    document.body.appendChild(link);
    
    // Tentar download
    try {
        link.click();
    } catch (error) {
        console.log('Erro no download direto, tentando fallback...');
        // Fallback: abrir em nova aba
        window.open(arquivo, '_blank');
    }
    
    // Remover link do DOM
    document.body.removeChild(link);
    
    // Mostrar feedback visual para mobile
    if (window.innerWidth <= 768) {
        showDownloadFeedback(nome);
    }
}

function showDownloadFeedback(nome) {
    // Criar notificação de download
    const notification = document.createElement('div');
    notification.id = 'downloadNotification';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--gradient-secondary);
        color: var(--text-primary);
        padding: 1rem 2rem;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-lg);
        z-index: 3000;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 600;
        animation: slideDown 0.3s ease-out;
    `;
    
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        Download iniciado: ${nome}
    `;
    
    // Adicionar animação CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateX(-50%) translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remover após 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideDown 0.3s ease-out reverse';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
            if (document.head.contains(style)) {
                document.head.removeChild(style);
            }
        }, 300);
    }, 3000);
}

function scrollToCatalogos() {
    document.getElementById('catalogosSection').scrollIntoView({
        behavior: 'smooth'
    });
}

function addScrollEffects() {
    // Adicionar efeitos de scroll suaves e profissionais
    let ticking = false;
    
    function updateScrollEffects() {
        const scrolled = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        // Efeito parallax suave no hero
        const hero = document.querySelector('.hero');
        if (hero) {
            const heroHeight = hero.offsetHeight;
            if (scrolled < heroHeight) {
                hero.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        }
        
        // Controlar menu fixo de categorias
        const catalogosSection = document.getElementById('catalogosSection');
        const stickyCategories = document.getElementById('stickyCategories');
        
        if (catalogosSection && stickyCategories) {
            const catalogosTop = catalogosSection.getBoundingClientRect().top;
            const catalogosBottom = catalogosSection.getBoundingClientRect().bottom;
            
            // Altura do header baseada no tamanho da tela
            const headerHeight = window.innerWidth <= 768 ? 90 : 110;
            
            // Menu aparece apenas quando estamos dentro da seção de catálogos
            // E quando a seção está passando pelo topo da tela
            if (catalogosTop <= headerHeight && catalogosBottom > headerHeight) {
                stickyCategories.classList.add('visible');
            } else {
                stickyCategories.classList.remove('visible');
            }
        }
        
        // Animações de entrada para elementos
        const animatedElements = document.querySelectorAll('.catalogo-card, .feature');
        animatedElements.forEach((element, index) => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
        
        // Efeito de fade no header
        const header = document.querySelector('.header');
        if (header) {
            if (scrolled > 100) {
                header.style.background = 'rgba(15, 23, 42, 0.98)';
                header.style.backdropFilter = 'blur(20px)';
            } else {
                header.style.background = 'rgba(15, 23, 42, 0.95)';
                header.style.backdropFilter = 'blur(20px)';
            }
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
    
    // Inicializar elementos com animação
    const animatedElements = document.querySelectorAll('.catalogo-card, .feature');
    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    });
    
    // Trigger inicial
    setTimeout(() => {
        updateScrollEffects();
    }, 100);
    
    // Garantir que o menu fixo seja inicializado corretamente
    const stickyCategories = document.getElementById('stickyCategories');
    if (stickyCategories) {
        stickyCategories.classList.remove('visible');
    }
}

// Função para adicionar novos catálogos dinamicamente
function addCatalogo(categoria, catalogo) {
    if (!catalogos[categoria]) {
        catalogos[categoria] = [];
    }
    catalogos[categoria].push(catalogo);
    
    // Recarregar se estivermos na categoria correta ou em 'all'
    if (currentCategory === 'all' || currentCategory === categoria) {
        filterCatalogos();
    }
}

// Função para buscar catálogos por nome
function searchCatalogos(termo) {
    currentSearchTerm = termo.toLowerCase();
    searchInput.value = termo;
    filterCatalogos();
}

// Função para obter estatísticas
function getStats() {
    const stats = {};
    Object.keys(catalogos).forEach(categoria => {
        stats[categoria] = catalogos[categoria].length;
    });
    stats.total = Object.values(stats).reduce((sum, count) => sum + count, 0);
    return stats;
}

// Exportar funções para uso global
window.CatalogoApp = {
    addCatalogo,
    searchCatalogos,
    getStats,
    openPdfViewer,
    downloadPdfDirect,
    scrollToCatalogos
};