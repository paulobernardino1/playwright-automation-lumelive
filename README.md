# 🎭 Playwright Automation - Sauce Demo

> Projeto de automação de testes E2E (End-to-End) utilizando Playwright para validar funcionalidades do site [Sauce Demo](https://www.saucedemo.com/v1/index.html).

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Executar os Testes](#como-executar-os-testes)
- [Entendendo os Testes](#entendendo-os-testes)
- [Configurações](#configurações)
- [Relatórios](#relatórios)
- [Boas Práticas](#boas-práticas)
- [Troubleshooting](#troubleshooting)

---

## 🎯 Sobre o Projeto

Este projeto tem como objetivo automatizar testes de interface do site **Sauce Demo**, uma aplicação de e-commerce fictícia utilizada para práticas de automação de testes. 

**Funcionalidades testadas:**
- ✅ Login com credenciais válidas
- ✅ Validação de título da página após login
- ✅ Navegação entre páginas

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **Node.js** | >=18 | Ambiente de execução JavaScript |
| **Playwright** | 1.56.1 | Framework de automação de testes |
| **@playwright/test** | 1.56.1 | Test runner do Playwright |
| **JavaScript (ESM)** | ES6+ | Linguagem utilizada |

---

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 18 ou superior) - [Download aqui](https://nodejs.org/)
- **npm** (geralmente vem com Node.js)
- **Git** (opcional, para clonar o repositório)
- **VS Code** (recomendado) - [Download aqui](https://code.visualstudio.com/)

### Verificando as instalações:

```bash
node --version  # Deve retornar v18.x.x ou superior
npm --version   # Deve retornar uma versão (ex: 9.x.x)
```

---

## 🔧 Instalação

Siga os passos abaixo para configurar o projeto em sua máquina:

### 1️⃣ Clone ou baixe o projeto

```bash
# Se estiver usando Git
git clone <url-do-repositorio>
cd playwright-automation-lumelive

# Ou apenas extraia o ZIP do projeto e navegue até a pasta
```

### 2️⃣ Instale as dependências

```bash
npm install
```

**O que esse comando faz:**
- Instala o Playwright e suas dependências
- Baixa os navegadores necessários (Chromium, Firefox, WebKit)
- Configura o ambiente de testes

### 3️⃣ Instale os navegadores do Playwright

```bash
npx playwright install
```

**O que esse comando faz:**
- Baixa os binários dos navegadores (Chromium, Firefox, WebKit)
- Configura os drivers necessários
- Prepara o ambiente para execução dos testes

> ⚠️ **Nota:** Este comando pode demorar alguns minutos, pois faz download dos navegadores.

### 4️⃣ Verifique a instalação

```bash
npx playwright --version
```

Deve retornar: `Version 1.56.1`

---

## 📁 Estrutura do Projeto

```
playwright-automation-lumelive/
│
├── tests/                      # Pasta com todos os arquivos de teste
│   └── (seus arquivos .spec.js aqui)
│
├── example.spec.js             # Exemplo de teste de login
├── playwright.config.js        # Configurações do Playwright
├── package.json                # Dependências e scripts do projeto
├── package-lock.json           # Lock das versões das dependências
├── .gitignore                  # Arquivos ignorados pelo Git
│
├── node_modules/               # Dependências instaladas (gerado)
├── test-results/               # Resultados dos testes (gerado)
└── playwright-report/          # Relatórios HTML (gerado)
```

### 📄 Descrição dos arquivos principais:

- **`example.spec.js`**: Arquivo de teste de exemplo que valida o login no Sauce Demo
- **`playwright.config.js`**: Arquivo de configuração do Playwright (navegadores, timeouts, etc.)
- **`package.json`**: Define as dependências do projeto e metadados
- **`.gitignore`**: Evita que arquivos desnecessários sejam versionados

---

## ▶️ Como Executar os Testes

### Comando básico (executa todos os testes)

```bash
npx playwright test
```

**O que acontece:**
- Executa todos os arquivos `.spec.js` encontrados
- Roda em modo headless (sem interface gráfica)
- Gera relatório HTML ao final

### Executar com interface gráfica (modo headed)

```bash
npx playwright test --headed
```

**Quando usar:** Para visualizar o navegador executando os testes em tempo real.

### Executar um teste específico

```bash
npx playwright test example.spec.js
```

### Executar em modo debug

```bash
npx playwright test --debug
```

**O que acontece:**
- Abre o Playwright Inspector
- Permite executar os testes passo a passo
- Útil para identificar problemas

### Executar com UI Mode (recomendado para desenvolvimento)

```bash
npx playwright test --ui
```

**O que acontece:**
- Abre uma interface gráfica moderna
- Permite executar, debugar e visualizar os testes
- Mostra screenshots e traces automaticamente

### Ver o último relatório gerado

```bash
npx playwright show-report
```

---

## 🧪 Entendendo os Testes

### Arquivo: `example.spec.js`

```javascript
// @ts-check
import { test, expect } from '@playwright/test';

test('teste de login com sucesso', async ({page}) => {
  // 1. Navega até a página inicial do Sauce Demo
  await page.goto('https://www.saucedemo.com/v1/index.html')
  
  // 2. Preenche o campo de usuário
  await page.locator('[data-test="username"]').fill('standard_user')
  
  // 3. Preenche o campo de senha
  await page.locator('[data-test="password"]').fill('secret_sauce')
  
  // 4. Clica no botão de login
  await page.locator('[id="login-button"]').click()
  
  // 5. Valida se o título da página contém "Swag Labs"
  await expect(page).toHaveTitle(/Swag Labs/)
})
```

### 📖 Explicação linha por linha:

#### **Importações**
```javascript
import { test, expect } from '@playwright/test';
```
- **`test`**: Função para criar um caso de teste
- **`expect`**: Função para fazer asserções (validações)

#### **Estrutura do teste**
```javascript
test('teste de login com sucesso', async ({page}) => {
```
- **`test()`**: Define um novo teste
- **`'teste de login com sucesso'`**: Nome descritivo do teste
- **`async`**: Indica que o teste é assíncrono
- **`{page}`**: Objeto que representa a página do navegador

#### **Comandos do teste**

1. **`await page.goto('url')`**
   - Navega até a URL especificada
   - Aguarda a página carregar completamente

2. **`await page.locator('[data-test="username"]').fill('standard_user')`**
   - **`page.locator()`**: Localiza um elemento na página
   - **`[data-test="username"]`**: Seletor CSS do campo
   - **`.fill()`**: Preenche o campo com o texto

3. **`await page.locator('[id="login-button"]').click()`**
   - Localiza o botão de login pelo ID
   - Clica no botão

4. **`await expect(page).toHaveTitle(/Swag Labs/)`**
   - **`expect()`**: Inicia uma asserção
   - **`toHaveTitle()`**: Valida o título da página
   - **`/Swag Labs/`**: Expressão regular que verifica se o título contém "Swag Labs"

---

## ⚙️ Configurações

### Arquivo: `playwright.config.js`

Principais configurações do projeto:

```javascript
export default defineConfig({
  testDir: './tests',           // Pasta onde os testes estão
  fullyParallel: true,          // Executa testes em paralelo
  retries: 0,                   // Número de tentativas em caso de falha
  workers: undefined,           // Número de workers paralelos
  reporter: 'html',             // Tipo de relatório (HTML)
  
  use: {
    trace: 'on-first-retry',    // Gera trace apenas na primeira retry
  },
  
  projects: [
    {
      name: 'chromium',         // Executa apenas no Chromium
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
```

### 🔧 Personalizações comuns:

#### Adicionar timeout global (padrão: 30s)
```javascript
use: {
  actionTimeout: 10000,  // 10 segundos para cada ação
}
```

#### Executar em múltiplos navegadores
```javascript
projects: [
  { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
  { name: 'webkit', use: { ...devices['Desktop Safari'] } },
]
```

#### Modo headless/headed
```javascript
use: {
  headless: false,  // Mostra o navegador
}
```

#### Configurar viewport (tamanho da janela)
```javascript
use: {
  viewport: { width: 1920, height: 1080 },
}
```

---

## 📊 Relatórios

### Tipos de relatórios disponíveis:

#### 1. **HTML Report** (padrão)
```bash
npx playwright test
npx playwright show-report
```
- Relatório visual completo
- Mostra screenshots e videos
- Ótimo para compartilhar resultados

#### 2. **Relatório no terminal**
```bash
npx playwright test --reporter=list
```
- Mostra resultados em tempo real no terminal

#### 3. **JSON Report**
```bash
npx playwright test --reporter=json
```
- Gera arquivo JSON com resultados
- Útil para integração com outras ferramentas

### 📸 Screenshots e Vídeos

Para capturar screenshots e vídeos automaticamente, adicione no `playwright.config.js`:

```javascript
use: {
  screenshot: 'only-on-failure',  // Screenshot apenas em falhas
  video: 'retain-on-failure',     // Vídeo apenas em falhas
}
```

---

## ✅ Boas Práticas

### 1. **Nomenclatura de testes**
```javascript
// ✅ Bom
test('deve fazer login com credenciais válidas', async ({page}) => {})

// ❌ Evite
test('test1', async ({page}) => {})
```

### 2. **Use data-testid para seletores**
```javascript
// ✅ Bom (mais estável)
await page.locator('[data-test="username"]')

// ⚠️ Evite quando possível
await page.locator('#login-button')
```

### 3. **Organize testes em blocos describe**
```javascript
import { test, describe, expect } from '@playwright/test';

describe('Testes de Login', () => {
  test('deve fazer login com sucesso', async ({page}) => {})
  test('deve mostrar erro com senha inválida', async ({page}) => {})
})
```

### 4. **Use beforeEach para setup**
```javascript
test.beforeEach(async ({page}) => {
  await page.goto('https://www.saucedemo.com/v1/index.html')
})
```

### 5. **Adicione waits explícitos quando necessário**
```javascript
// Aguarda elemento aparecer
await page.waitForSelector('.inventory_list')

// Aguarda navegação
await page.waitForURL('**/inventory.html')
```

---

## 🐛 Troubleshooting

### Problema: "Browsers not installed"
**Solução:**
```bash
npx playwright install
```

### Problema: Teste falha aleatoriamente
**Solução:** Adicione waits explícitos:
```javascript
await page.waitForLoadState('networkidle')
```

### Problema: Elemento não encontrado
**Solução:** Use o Playwright Inspector:
```bash
npx playwright test --debug
```

### Problema: Teste muito lento
**Solução:** Desabilite animações CSS:
```javascript
use: {
  hasTouch: false,
  javaScriptEnabled: true,
}
```

### Problema: Port já em uso (para relatórios)
**Solução:**
```bash
npx playwright show-report --port 9323
```

---

## 📚 Recursos Adicionais

- 📖 [Documentação Oficial do Playwright](https://playwright.dev/docs/intro)
- 🎥 [Playlist de tutoriais](https://www.youtube.com/c/Playwrightsolutions)
- 💬 [Discord da comunidade](https://discord.gg/playwright)
- 🐙 [GitHub do Playwright](https://github.com/microsoft/playwright)

---

## 📝 Comandos Úteis - Resumo

| Comando | Descrição |
|---------|-----------|
| `npm install` | Instala dependências |
| `npx playwright install` | Instala navegadores |
| `npx playwright test` | Executa todos os testes |
| `npx playwright test --headed` | Executa com interface gráfica |
| `npx playwright test --ui` | Abre UI Mode |
| `npx playwright test --debug` | Modo debug |
| `npx playwright show-report` | Mostra último relatório |
| `npx playwright codegen <url>` | Gera código automaticamente |

---

## 🎓 Próximos Passos

1. ✅ Adicione mais casos de teste (logout, adicionar produto ao carrinho, etc.)
2. ✅ Configure CI/CD (GitHub Actions, GitLab CI)
3. ✅ Implemente Page Objects para organizar melhor o código
4. ✅ Adicione testes de API com Playwright
5. ✅ Configure testes em múltiplos ambientes (dev, staging, prod)

---

## 👨‍💻 Autor

Desenvolvido com ❤️ para automação de testes com Playwright

---

## 📄 Licença

ISC License - Este projeto é livre para uso e modificação.