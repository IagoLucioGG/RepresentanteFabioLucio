# Sistema de Catálogos Comerciais - Fábio Lúcio

Uma aplicação web moderna e responsiva para exibição de catálogos de produtos em formato PDF, desenvolvida especialmente para o representante comercial Fábio Lúcio.

## 🚀 Características

- **100% Frontend**: Funciona apenas com HTML, CSS e JavaScript puro
- **Responsivo**: Design adaptável para desktop, tablet e mobile
- **Navegação por Categorias**: Organização automática dos catálogos
- **Busca Inteligente**: Filtro por nome, descrição ou categoria
- **Visualização e Download**: Abertura de PDFs em nova aba e download direto
- **Interface Moderna**: Design limpo e profissional com apresentação personalizada
- **Botão WhatsApp**: Contato direto com Fábio Lúcio via WhatsApp
- **Apresentação Visual**: Cards atrativos com preview dos PDFs
- **Sem Dependências**: Não requer build ou instalação de pacotes

## 📁 Estrutura do Projeto

```
/
├── index.html          # Página principal
├── style.css           # Estilos CSS
├── script.js           # Lógica JavaScript
├── README.md           # Documentação
└── Catalogos/          # Pasta com os arquivos PDF
    ├── catalogo geral.pdf
    ├── Catálogo ELETRO 2025.pdf
    ├── Esportes Aquáticos.pdf
    └── ... (outros catálogos)
```

## 🎯 Como Usar

1. **Abrir o Sistema**: Simplesmente abra o arquivo `index.html` no navegador
2. **Ler a Apresentação**: Conheça Fábio Lúcio e os recursos do sistema
3. **Navegar por Categorias**: Use as abas no topo para filtrar por categoria
4. **Buscar Catálogos**: Digite na caixa de busca para encontrar catálogos específicos
5. **Visualizar**: Clique em "Visualizar" para abrir o PDF em nova aba
6. **Baixar**: Clique em "Baixar" para fazer download do arquivo
7. **Contatar**: Use o botão flutuante do WhatsApp para falar com Fábio Lúcio

## 📋 Categorias Disponíveis

- **Geral**: Catálogos gerais e miscelâneos
- **Têxtil**: Produtos têxteis, malhas, velcros, etc.
- **Eletro**: Produtos eletrônicos
- **Esportes**: Produtos para esportes aquáticos
- **Ferramentas**: Grampos, pregos e ferramentas
- **Outros**: Demais categorias

## 🛠️ Personalização

### Adicionar Novos Catálogos

Para adicionar novos catálogos, edite o arquivo `script.js` na seção `catalogos`:

```javascript
const catalogos = {
    "nova-categoria": [
        {
            nome: "Nome do Catálogo",
            capa: "Catalogos/caminho/para/arquivo.pdf",
            arquivo: "Catalogos/caminho/para/arquivo.pdf",
            categoria: "nova-categoria",
            descricao: "Descrição do catálogo"
        }
    ]
};
```

### Adicionar Nova Categoria

1. Adicione a categoria no objeto `catalogos`
2. Adicione uma nova aba no HTML:
```html
<button class="nav-tab" data-category="nova-categoria">
    <i class="fas fa-icon"></i>
    Nome da Categoria
</button>
```

### Personalizar Cores

Edite as variáveis CSS no arquivo `style.css`:

```css
:root {
    --primary-color: #2c3e50;    /* Cor principal */
    --secondary-color: #3498db;  /* Cor secundária */
    --accent-color: #e74c3c;     /* Cor de destaque */
    /* ... outras variáveis */
}
```

## 📱 Responsividade

O sistema é totalmente responsivo e funciona em:
- **Desktop**: Layout em grid com múltiplas colunas
- **Tablet**: Layout adaptado com 2 colunas
- **Mobile**: Layout em coluna única otimizado para toque

## 🔧 Funcionalidades Técnicas

- **Filtros Dinâmicos**: Busca em tempo real
- **Modal de Detalhes**: Visualização expandida dos catálogos
- **Contador de Resultados**: Mostra quantos catálogos foram encontrados
- **Navegação por Teclado**: Suporte completo a acessibilidade
- **Loading States**: Feedback visual durante carregamento
- **Error Handling**: Tratamento de erros para arquivos não encontrados

## 📞 Contato

**Fábio Lúcio - Representante Comercial**
- **WhatsApp**: (21) 97077-7387
- **Botão Flutuante**: Disponível em todas as páginas para contato direto

## 🌟 Recursos Avançados

- **Apresentação Personalizada**: Seção dedicada ao representante Fábio Lúcio
- **Botão WhatsApp Flutuante**: Contato direto e fácil via WhatsApp
- **Cards Visuais Atrativos**: Preview dos PDFs com gradientes e animações
- **Busca Inteligente**: Procura em nome, descrição e categoria
- **Animações Suaves**: Transições e efeitos visuais profissionais
- **Modo Escuro**: Suporte automático baseado nas preferências do sistema
- **Acessibilidade**: Compatível com leitores de tela
- **Performance**: Carregamento otimizado e renderização eficiente

## 📞 Suporte

Para dúvidas ou sugestões sobre o sistema de catálogos, entre em contato com o desenvolvedor.

---

**Desenvolvido com ❤️ para Fábio Lúcio - Representante Comercial**
