# 🏢 Simulador de Elevador

Um projeto interativo que simula o funcionamento de um elevador em um prédio de 6 andares, desenvolvido com HTML, CSS e JavaScript puro.

![Captura de Tela do Simulador de Elevador](screenshot.png)

*Interface do simulador mostrando o elevador no 4º andar com controles e visualização do prédio*

## 📋 Descrição

Este projeto é uma simulação visual de um elevador que permite aos usuários:
- Visualizar um prédio com 6 andares + térreo
- Controlar o elevador através de botões numerados
- Observar a movimentação suave do elevador entre os andares
- Ver o status atual no mostrador (Térreo, Subindo, Descendo, etc.)

## 🎮 Como Funciona

### Interface
- **Mostrador**: Exibe o andar atual ou status de movimento
- **Botões de Controle**: Botões numerados de T (Térreo) até 6 (6º andar)
- **Visualização**: Prédio com duas colunas e um poço central onde o elevador se move
- **Cenário**: Rua com faixas e árvores para dar contexto visual

### Funcionalidades
- **Movimento Suave**: O elevador se move gradualmente entre os andares
- **Feedback Visual**: Botões ficam destacados durante o movimento
- **Status em Tempo Real**: Mostrador indica se está subindo, descendo ou parado
- **Prevenção de Conflitos**: Não é possível iniciar novo movimento enquanto o elevador está em trânsito

## 🚀 Como Executar

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, mas recomendado)

### Método 1: Abrir Diretamente
1. Clone ou baixe este repositório
2. Navegue até a pasta do projeto
3. Abra o arquivo `index.html` no seu navegador

### Método 2: Servidor Local (Recomendado)
1. Clone ou baixe este repositório
2. Abra o terminal/prompt de comando
3. Navegue até a pasta do projeto
4. Execute um dos seguintes comandos:

**Com Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Com Node.js:**
```bash
npx http-server
```

**Com PHP:**
```bash
php -S localhost:8000
```

5. Abra seu navegador e acesse `http://localhost:8000`

## 📁 Estrutura do Projeto

```
Elevador/
├── index.html          # Arquivo principal HTML
├── css/
│   └── estilo.css      # Estilos CSS do projeto
└── js/
    ├── predio.js       # Lógica do prédio e elevador
    └── rua.js          # Lógica da rua e faixas
```

## 🎯 Como Usar

1. **Iniciar**: Abra o projeto no navegador
2. **Navegar**: Clique nos botões numerados para mover o elevador
3. **Observar**: Acompanhe o movimento no mostrador e na visualização
4. **Experimentar**: Teste diferentes sequências de andares

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura da página
- **CSS3**: Estilização e animações
- **JavaScript**: Lógica de funcionamento
- **Fontes**: VT323 (fonte monospace para interface retro)

## 🎨 Características Visuais

- Interface retro com fonte monospace
- Cores contrastantes para melhor visibilidade
- Animações suaves de movimento
- Design responsivo e intuitivo
- Cenário urbano com prédio, rua e árvores

## 🔧 Personalização

Você pode modificar:
- Número de andares no arquivo `index.html` (atributo `andares`)
- Velocidade do elevador no arquivo `js/predio.js` (intervalo do `setInterval`)
- Cores e estilos no arquivo `css/estilo.css`
- Número de faixas da rua no arquivo `index.html` (atributo `faixas`)

## 📝 Licença

Este projeto é de código aberto e pode ser usado livremente para fins educacionais e pessoais.

---

**Divirta-se testando o elevador! 🎮**
