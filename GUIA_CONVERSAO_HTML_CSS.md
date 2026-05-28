# 🎨 Guia de Conversão IARA: React → HTML/CSS

Este guia completo ensina como converter o projeto **IARA** (plataforma de recrutamento feminina) de React + Tailwind CSS para HTML/CSS puro.

---

## 📋 Índice

1. [Visão Geral do Projeto](#visão-geral)
2. [Paleta de Cores IARA](#paleta-de-cores)
3. [Estrutura de Arquivos Sugerida](#estrutura-de-arquivos)
4. [Conversão JSX → HTML](#conversão-jsx--html)
5. [Conversão Tailwind → CSS](#conversão-tailwind--css)
6. [Conversão Framer Motion → CSS Animations](#conversão-framer-motion--css-animations)
7. [Exemplos Práticos](#exemplos-práticos)
8. [Componentes Reutilizáveis](#componentes-reutilizáveis)

---

## 🎯 Visão Geral

**IARA** é uma plataforma web de recrutamento focada em mulheres com:
- **Landing Page** (página inicial com hero, funcionalidades, CTA)
- **Login Page** (formulário unificado para candidatas e empresas)
- **Candidate Dashboard** (painel de controle para candidatas)
- **Company Dashboard** (painel de controle para empresas)

**Stack Atual:** React 18 + TypeScript + Tailwind CSS v4 + Framer Motion + React Router

**Stack Alvo:** HTML5 + CSS3 puro (sem frameworks)

---

## 🎨 Paleta de Cores IARA

### Cores Principais

```css
/* Roxo Principal (Brand) */
--brand-pink: #44195c;
--brand-pink-hover: #311242;

/* Roxo/Rosa Intermediário */
--purple-mid: #762a7b;

/* Rosa Destaque (CTAs) */
--purple-dark: #d74d8f;
--pink-hover: #c1417e;

/* Fundos Suaves */
--pink-light: #f3e8f5;
--pink-lighter: #f8f1fa;
--pink-lightest: #fcf9fd;

/* Neutros */
--white: #FFFFFF;
--text-dark: #2D2D2D;
--text-muted: #6B6B6B;
--slate-600: #475569;
--slate-500: #64748b;

/* Acentos */
--success-green: #4CAF50;
--warning-yellow: #FFC107;
--error-red: #E57373;
```

### Gradientes

```css
--gradient-primary: linear-gradient(135deg, #44195c, #762a7b, #d74d8f);
--gradient-soft: linear-gradient(180deg, #f8f1fa, #fcf9fd);
--gradient-hero-cta: linear-gradient(to right, #762a7b, #d74d8f);
```

---

## 📁 Estrutura de Arquivos Sugerida

```
projeto-iara-html/
├── index.html              (Landing Page)
├── login.html              (Página de Login)
├── dashboard-candidata.html
├── dashboard-empresa.html
├── css/
│   ├── reset.css           (Normalize/Reset básico)
│   ├── variables.css       (CSS Custom Properties)
│   ├── global.css          (Estilos base: body, h1-h6, etc)
│   ├── components.css      (Botões, cards, inputs reutilizáveis)
│   ├── animations.css      (Keyframes e animações)
│   ├── landing.css         (Estilos específicos da landing)
│   ├── login.css
│   ├── dashboard.css
│   └── responsive.css      (Media queries)
├── js/
│   ├── main.js             (Lógica geral)
│   ├── login.js            (Toggle tabs, validação)
│   └── dashboard.js
├── assets/
│   ├── images/
│   │   ├── logo-iara-name.png
│   │   ├── logo-iara-icon.png
│   │   └── hero-image.png
│   └── icons/              (SVGs ou font icons)
```

---

## 🔄 Conversão JSX → HTML

### Exemplo React (JSX)

```jsx
<div className="max-w-7xl mx-auto px-4">
  <h1 className="text-4xl font-bold text-brand-pink">
    Título
  </h1>
  <Link to="/login" className="btn-primary">
    Entrar
  </Link>
</div>
```

### Equivalente HTML

```html
<div class="container">
  <h1 class="title-large">
    Título
  </h1>
  <a href="login.html" class="btn btn-primary">
    Entrar
  </a>
</div>
```

### Principais Mudanças

| React/JSX | HTML |
|-----------|------|
| `className` | `class` |
| `<Link to="/path">` | `<a href="path.html">` |
| `{variable}` | Valor direto ou JavaScript externo |
| Componentes aninhados | Incluir HTML diretamente |
| `onClick={handleClick}` | `onclick="handleClick()"` |
| `style={{ color: 'red' }}` | `style="color: red;"` |

---

## 🎨 Conversão Tailwind → CSS

### Estratégia de Conversão

O Tailwind usa **utility classes** (`bg-white`, `text-lg`, `p-4`). Para converter:

1. **Agrupe classes semânticas** em classes customizadas
2. **Use CSS Custom Properties** para cores e valores reutilizáveis
3. **Crie classes de componentes** (`.btn`, `.card`, `.input-field`)

### Mapeamento Comum Tailwind → CSS

| Tailwind | CSS Equivalente |
|----------|----------------|
| `bg-white` | `background-color: #FFFFFF;` |
| `text-slate-600` | `color: #475569;` |
| `p-4` | `padding: 1rem;` (16px) |
| `px-4` | `padding-left: 1rem; padding-right: 1rem;` |
| `py-8` | `padding-top: 2rem; padding-bottom: 2rem;` |
| `rounded-xl` | `border-radius: 0.75rem;` (12px) |
| `shadow-lg` | `box-shadow: 0 10px 15px rgba(0,0,0,0.1);` |
| `flex items-center justify-between` | `display: flex; align-items: center; justify-content: space-between;` |
| `grid md:grid-cols-3 gap-8` | `display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;` |
| `hover:bg-slate-50` | `.classe:hover { background-color: #f8fafc; }` |
| `transition-all` | `transition: all 0.3s ease;` |

### Exemplo Completo

**React com Tailwind:**

```jsx
<button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-all">
  Buscar vagas
</button>
```

**HTML + CSS:**

```html
<!-- HTML -->
<button class="btn btn-gradient-primary">
  Buscar vagas
</button>
```

```css
/* CSS */
.btn {
  display: inline-block;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
}

.btn-gradient-primary {
  background: linear-gradient(to right, #762a7b, #d74d8f);
  color: white;
}

.btn-gradient-primary:hover {
  transform: scale(1.05);
  box-shadow: 0 15px 25px rgba(215, 77, 143, 0.3);
}

.btn-gradient-primary:active {
  transform: scale(0.95);
}
```

---

## ✨ Conversão Framer Motion → CSS Animations

### Motion Components

O Framer Motion usa `<motion.div>` com props como `initial`, `animate`, `transition`.

**React (Framer Motion):**

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Conteúdo
</motion.div>
```

**HTML + CSS:**

```html
<!-- HTML -->
<div class="fade-in-up">
  Conteúdo
</div>
```

```css
/* CSS */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}
```

### Animações Comuns do Projeto IARA

#### 1. Fade In + Slide Up (Hero Section)

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-content {
  animation: fadeInUp 0.6s ease-out;
}
```

#### 2. Scale + Rotate (Card Hero Image)

```css
@keyframes scaleRotate {
  from {
    opacity: 0;
    transform: scale(0.9) rotate(-2deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

.hero-card {
  animation: scaleRotate 0.8s ease-out 0.2s backwards;
}
```

#### 3. Pill Animado (Login Tabs)

```css
.tab-container {
  position: relative;
}

.tab-pill {
  position: absolute;
  top: 4px;
  bottom: 4px;
  width: calc(50% - 4px);
  background: #fcf9fd;
  border-radius: 0.5rem;
  transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
}

.tab-container[data-active="candidata"] .tab-pill {
  left: 4px;
}

.tab-container[data-active="empresa"] .tab-pill {
  left: calc(50%);
}
```

#### 4. Pulse Animation (Badge "Contratada")

```css
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.status-indicator {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

---

## 💼 Exemplos Práticos

### Exemplo 1: Header da Landing Page

**React:**

```jsx
<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100 shadow-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-20">
      <img src={logoIaraName} alt="IARA Logo" className="h-12 w-auto" />
      <nav className="hidden md:flex items-center gap-8">
        <a href="#como-funciona">Como funciona</a>
      </nav>
      <Link to="/login" className="btn-primary">Entrar</Link>
    </div>
  </div>
</header>
```

**HTML + CSS:**

```html
<!-- HTML -->
<header class="header">
  <div class="container">
    <div class="header-content">
      <img src="assets/images/logo-iara-name.png" alt="IARA Logo" class="logo">
      <nav class="nav-desktop">
        <a href="#como-funciona" class="nav-link">Como funciona</a>
        <a href="#candidatas" class="nav-link">Para candidatas</a>
        <a href="#empresas" class="nav-link">Para empresas</a>
      </nav>
      <a href="login.html" class="btn btn-primary">Entrar</a>
    </div>
  </div>
</header>
```

```css
/* CSS */
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #f3e8f5;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem; /* 80px */
}

.logo {
  height: 3rem; /* 48px */
  width: auto;
  filter: drop-shadow(0 1px 2px rgba(0,0,0,0.1));
}

.nav-desktop {
  display: none;
  align-items: center;
  gap: 2rem;
}

@media (min-width: 768px) {
  .nav-desktop {
    display: flex;
  }
}

.nav-link {
  font-size: 0.875rem;
  font-weight: 500;
  color: #475569;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #762a7b;
}
```

---

### Exemplo 2: Hero Section com Animação

**HTML:**

```html
<section class="hero">
  <div class="hero-background">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
  </div>

  <div class="container">
    <div class="hero-grid">
      <!-- Texto -->
      <div class="hero-text fade-in-up">
        <div class="badge">
          <span>✨</span> Exclusivo para mulheres
        </div>
        <h1 class="hero-title">
          Oportunidades de trabalho pensadas <span class="text-accent">para você</span>
        </h1>
        <p class="hero-description">
          Nossa plataforma conecta você a oportunidades de acordo com seu perfil.
        </p>
        <div class="cta-buttons">
          <a href="login.html" class="btn btn-gradient-primary">
            Buscar vagas agora
            <span class="icon">→</span>
          </a>
          <a href="#como-funciona" class="btn btn-outline">Saber mais</a>
        </div>
      </div>

      <!-- Imagem -->
      <div class="hero-image">
        <div class="hero-card scale-rotate">
          <img src="assets/images/hero-image.png" alt="Hero">
          <div class="hero-overlay"></div>
          
          <div class="hero-badge">
            <span class="status-dot"></span>
            <span class="badge-text">Contratada via Iara</span>
          </div>

          <div class="hero-profile-card">
            <div class="profile-header">
              <div>
                <h3>Juliana Costa</h3>
                <p>Engenheira Mecânica</p>
              </div>
              <div class="match-score">
                <span class="score">98%</span>
                <span class="label">Match</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

**CSS:**

```css
/* Hero Section */
.hero {
  position: relative;
  padding: 6rem 0 9rem;
  overflow: hidden;
  background: white;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: -1;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.8;
}

.blob-1 {
  top: -25%;
  right: -25%;
  width: 800px;
  height: 800px;
  background: #f8f1fa;
}

.blob-2 {
  top: 33%;
  left: -25%;
  width: 600px;
  height: 600px;
  background: #f3e8f5;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  color: #44195c;
  line-height: 1.15;
  margin-bottom: 1.5rem;
  letter-spacing: -0.025em;
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 3.75rem;
  }
}

.text-accent {
  color: #d74d8f;
}

.hero-description {
  font-size: 1.125rem;
  color: #475569;
  margin-bottom: 2rem;
  line-height: 1.75;
  max-width: 32rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  background: #f8f1fa;
  color: #762a7b;
  font-weight: 500;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
  border: 1px solid #f3e8f5;
}

.cta-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (min-width: 640px) {
  .cta-buttons {
    flex-direction: row;
  }
}

.btn-gradient-primary {
  position: relative;
  background: linear-gradient(to right, #762a7b, #d74d8f);
  color: white;
  overflow: hidden;
}

.btn-gradient-primary:hover {
  background: linear-gradient(to right, #44195c, #762a7b);
  transform: scale(1.05);
  box-shadow: 0 20px 25px rgba(215, 77, 143, 0.3);
}

.btn-outline {
  background: white;
  color: #44195c;
  border: 1px solid #e2e8f0;
}

.btn-outline:hover {
  background: #f8fafc;
  border-color: #762a7b;
}

/* Hero Card */
.hero-card {
  position: relative;
  width: 100%;
  max-width: 36rem;
  aspect-ratio: 3 / 4;
  border-radius: 1.5rem;
  box-shadow: 0 25px 50px rgba(68, 25, 92, 0.1);
  border: 6px solid white;
  overflow: hidden;
  background: #f1f5f9;
}

.hero-card img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s ease;
}

.hero-card:hover img {
  transform: scale(1.05);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(68, 25, 92, 0.9), rgba(68, 25, 92, 0.2), transparent);
}

.hero-badge {
  position: absolute;
  top: 2rem;
  left: 2rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  padding: 0.75rem 1.25rem;
  border-radius: 1rem;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.status-dot {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: #4CAF50;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.badge-text {
  font-size: 1rem;
  font-weight: 700;
  color: #44195c;
}

/* Animações */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleRotate {
  from {
    opacity: 0;
    transform: scale(0.9) rotate(-2deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

.scale-rotate {
  animation: scaleRotate 0.8s ease-out 0.2s backwards;
}
```

---

### Exemplo 3: Login Page com Toggle Tabs

**HTML:**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login | IARA</title>
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/variables.css">
  <link rel="stylesheet" href="css/global.css">
  <link rel="stylesheet" href="css/components.css">
  <link rel="stylesheet" href="css/login.css">
</head>
<body>
  <div class="login-container">
    <!-- Formulário -->
    <div class="login-form-section">
      <a href="index.html" class="back-link">
        ← Voltar para o início
      </a>

      <div class="form-wrapper">
        <img src="assets/images/logo-iara-name.png" alt="IARA Logo" class="logo">

        <h1 class="login-title">Bem-vinda de volta</h1>
        <p class="login-subtitle">Acesse sua conta para continuar transformando sua jornada.</p>

        <!-- Tabs -->
        <div class="tab-container" id="tabContainer" data-active="candidata">
          <button class="tab-btn active" data-tab="candidata" onclick="switchTab('candidata')">
            👤 Sou Candidata
          </button>
          <button class="tab-btn" data-tab="empresa" onclick="switchTab('empresa')">
            🏢 Sou Empresa
          </button>
          <div class="tab-pill"></div>
        </div>

        <!-- Formulário -->
        <form id="loginForm" onsubmit="handleLogin(event)">
          <div class="form-group">
            <label for="email" id="emailLabel">E-mail</label>
            <div class="input-wrapper">
              <span class="input-icon">📧</span>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="seu@email.com.br"
                class="input-field"
                required
              >
            </div>
          </div>

          <div class="form-group">
            <div class="form-label-row">
              <label for="password">Senha</label>
              <a href="#" class="forgot-password">Esqueceu a senha?</a>
            </div>
            <div class="input-wrapper">
              <span class="input-icon">🔒</span>
              <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="••••••••"
                class="input-field"
                required
              >
              <button type="button" class="toggle-password" onclick="togglePassword()">
                👁️
              </button>
            </div>
          </div>

          <button type="submit" class="btn btn-submit" id="submitBtn">
            Entrar na Plataforma
          </button>

          <p class="signup-text">
            Ainda não tem conta? 
            <a href="#" class="signup-link">Cadastre-se grátis</a>
          </p>
        </form>
      </div>
    </div>

    <!-- Imagem Decorativa -->
    <div class="login-image-section">
      <div class="image-overlay"></div>
      <img 
        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1080" 
        alt="Background" 
        class="background-image"
      >
      <div class="floating-card">
        <h2 id="floatingTitle">Encontre oportunidades alinhadas ao seu potencial.</h2>
        <p id="floatingDesc">Nossa IA avalia suas habilidades reais além do currículo.</p>
      </div>
    </div>
  </div>

  <script src="js/login.js"></script>
</body>
</html>
```

**CSS (login.css):**

```css
/* Login Container */
.login-container {
  display: flex;
  min-height: 100vh;
  background: #fcf9fd;
}

.login-form-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 2rem;
  position: relative;
}

@media (min-width: 1024px) {
  .login-form-section {
    width: 50%;
    padding: 3rem 6rem;
  }
}

.back-link {
  position: absolute;
  top: 2rem;
  left: 2rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #64748b;
  text-decoration: none;
  transition: color 0.3s ease;
}

.back-link:hover {
  color: #762a7b;
}

.form-wrapper {
  max-width: 28rem;
  width: 100%;
  margin: 0 auto;
}

.logo {
  height: 3.5rem;
  width: auto;
  margin-bottom: 3rem;
  filter: drop-shadow(0 1px 2px rgba(0,0,0,0.1));
}

.login-title {
  font-size: 2rem;
  font-weight: 700;
  color: #44195c;
  margin-bottom: 0.5rem;
  letter-spacing: -0.025em;
}

.login-subtitle {
  color: #475569;
  margin-bottom: 2rem;
}

/* Tabs */
.tab-container {
  position: relative;
  display: flex;
  padding: 4px;
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid #f3e8f5;
  margin-bottom: 2rem;
}

.tab-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  border: none;
  background: transparent;
  color: #64748b;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: color 0.3s ease;
  z-index: 10;
  position: relative;
}

.tab-btn:hover {
  color: #44195c;
}

.tab-btn.active {
  color: #d74d8f;
}

.tab-pill {
  position: absolute;
  top: 4px;
  bottom: 4px;
  width: calc(50% - 4px);
  background: #fcf9fd;
  border: 1px solid rgba(215, 77, 143, 0.2);
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
}

.tab-container[data-active="candidata"] .tab-pill {
  left: 4px;
}

.tab-container[data-active="empresa"] .tab-pill {
  left: calc(50%);
  border-color: rgba(68, 25, 92, 0.2);
}

/* Formulário */
.form-group {
  margin-bottom: 1.25rem;
}

.form-label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.375rem;
}

label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #44195c;
  margin-bottom: 0.375rem;
}

.forgot-password {
  font-size: 0.875rem;
  font-weight: 500;
  color: #762a7b;
  text-decoration: none;
  transition: color 0.3s ease;
}

.forgot-password:hover {
  color: #d74d8f;
}

.input-wrapper {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 0.875rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 1.25rem;
}

.input-field {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  background: white;
  border: 1px solid #e3d1e8;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  color: #0f172a;
  transition: all 0.3s ease;
}

.input-field:focus {
  outline: none;
  border-color: #762a7b;
  box-shadow: 0 0 0 3px rgba(118, 42, 123, 0.1);
}

.input-field::placeholder {
  color: #94a3b8;
}

.toggle-password {
  position: absolute;
  right: 0.875rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

.toggle-password:hover {
  opacity: 1;
}

/* Submit Button */
.btn-submit {
  width: 100%;
  padding: 0.875rem 1rem;
  font-weight: 600;
  color: white;
  border: none;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px rgba(215, 77, 143, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;
  margin-top: 1.25rem;
}

.tab-container[data-active="candidata"] .btn-submit {
  background: linear-gradient(to right, #d74d8f, #762a7b);
}

.tab-container[data-active="empresa"] .btn-submit {
  background: linear-gradient(to right, #44195c, #762a7b);
}

.btn-submit:hover {
  transform: scale(0.98);
}

.btn-submit:active {
  transform: scale(0.95);
}

.signup-text {
  text-align: center;
  font-size: 0.875rem;
  color: #475569;
  margin-top: 1.5rem;
}

.signup-link {
  font-weight: 600;
  color: #d74d8f;
  text-decoration: none;
  transition: color 0.3s ease;
}

.signup-link:hover {
  color: #762a7b;
}

/* Image Section */
.login-image-section {
  display: none;
  position: relative;
  background: #44195c;
}

@media (min-width: 1024px) {
  .login-image-section {
    display: block;
    width: 50%;
  }
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom right, rgba(118, 42, 123, 0.4), rgba(68, 25, 92, 0.9));
  mix-blend-mode: multiply;
  z-index: 10;
}

.background-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.floating-card {
  position: absolute;
  bottom: 3rem;
  left: 3rem;
  right: 3rem;
  z-index: 20;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
  border-radius: 1.5rem;
  animation: fadeInUp 0.8s ease-out 0.2s backwards;
}

.floating-card h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.floating-card p {
  color: rgba(255, 255, 255, 0.8);
}
```

**JavaScript (login.js):**

```javascript
// Switch entre tabs candidata/empresa
function switchTab(tab) {
  const container = document.getElementById('tabContainer');
  const buttons = container.querySelectorAll('.tab-btn');
  const emailLabel = document.getElementById('emailLabel');
  const emailInput = document.getElementById('email');
  const floatingTitle = document.getElementById('floatingTitle');
  const floatingDesc = document.getElementById('floatingDesc');
  
  // Atualizar estado
  container.setAttribute('data-active', tab);
  
  // Atualizar botões ativos
  buttons.forEach(btn => {
    if (btn.getAttribute('data-tab') === tab) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  // Atualizar textos dinâmicos
  if (tab === 'candidata') {
    emailLabel.textContent = 'E-mail';
    emailInput.placeholder = 'seu@email.com.br';
    floatingTitle.textContent = 'Encontre oportunidades alinhadas ao seu potencial.';
    floatingDesc.textContent = 'Nossa IA avalia suas habilidades reais além do currículo.';
  } else {
    emailLabel.textContent = 'E-mail corporativo';
    emailInput.placeholder = 'nome@empresa.com.br';
    floatingTitle.textContent = 'Conecte-se aos melhores talentos femininos do mercado.';
    floatingDesc.textContent = 'Match inteligente focado em hard e soft skills com redução de vieses.';
  }
}

// Toggle mostrar/ocultar senha
function togglePassword() {
  const passwordInput = document.getElementById('password');
  const toggleBtn = document.querySelector('.toggle-password');
  
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleBtn.textContent = '🙈';
  } else {
    passwordInput.type = 'password';
    toggleBtn.textContent = '👁️';
  }
}

// Handlesubmit (redirecionar para dashboard)
function handleLogin(event) {
  event.preventDefault();
  
  const activeTab = document.getElementById('tabContainer').getAttribute('data-active');
  
  if (activeTab === 'candidata') {
    window.location.href = 'dashboard-candidata.html';
  } else {
    window.location.href = 'dashboard-empresa.html';
  }
}
```

---

## 🧩 Componentes Reutilizáveis

### variables.css

```css
:root {
  /* Cores */
  --brand-pink: #44195c;
  --brand-pink-hover: #311242;
  --purple-mid: #762a7b;
  --purple-dark: #d74d8f;
  --pink-hover: #c1417e;
  --pink-light: #f3e8f5;
  --pink-lighter: #f8f1fa;
  --pink-lightest: #fcf9fd;
  --white: #FFFFFF;
  --text-dark: #2D2D2D;
  --text-muted: #6B6B6B;
  --slate-600: #475569;
  --slate-500: #64748b;
  --success-green: #4CAF50;
  --warning-yellow: #FFC107;
  --error-red: #E57373;

  /* Gradientes */
  --gradient-primary: linear-gradient(135deg, #44195c, #762a7b, #d74d8f);
  --gradient-soft: linear-gradient(180deg, #f8f1fa, #fcf9fd);

  /* Espaçamentos */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;

  /* Border Radius */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);

  /* Transitions */
  --transition-fast: 0.15s ease;
  --transition-base: 0.3s ease;
  --transition-slow: 0.5s ease;
}
```

### global.css

```css
/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: var(--pink-lightest);
  color: var(--text-dark);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

/* Container responsivo */
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .container {
    padding: 0 1.5rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 2rem;
  }
}

/* Tipografia */
h1 {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.2;
}

h2 {
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 1.3;
}

h3 {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.4;
}

h4 {
  font-size: 1.25rem;
  font-weight: 600;
}

p {
  line-height: 1.75;
}

a {
  color: inherit;
  text-decoration: none;
}
```

### components.css

```css
/* Botões */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: var(--radius-xl);
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all var(--transition-base);
  box-shadow: var(--shadow-md);
}

.btn:active {
  transform: scale(0.95);
}

.btn-primary {
  background: var(--purple-dark);
  color: white;
}

.btn-primary:hover {
  background: var(--pink-hover);
  transform: scale(1.05);
  box-shadow: var(--shadow-lg);
}

.btn-gradient-primary {
  background: linear-gradient(to right, #762a7b, #d74d8f);
  color: white;
}

.btn-gradient-primary:hover {
  background: linear-gradient(to right, #44195c, #762a7b);
  transform: scale(1.05);
}

.btn-outline {
  background: white;
  color: var(--brand-pink);
  border: 1px solid #e2e8f0;
}

.btn-outline:hover {
  background: #f8fafc;
  border-color: var(--purple-mid);
}

/* Cards */
.card {
  background: white;
  border-radius: var(--radius-2xl);
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--pink-light);
  transition: all var(--transition-base);
}

.card:hover {
  box-shadow: var(--shadow-xl);
}

/* Inputs */
.input-field {
  width: 100%;
  padding: 0.75rem 1rem;
  background: white;
  border: 1px solid #e3d1e8;
  border-radius: var(--radius-lg);
  font-size: 0.875rem;
  transition: all var(--transition-base);
}

.input-field:focus {
  outline: none;
  border-color: var(--purple-mid);
  box-shadow: 0 0 0 3px rgba(118, 42, 123, 0.1);
}

/* Utilitários */
.text-center {
  text-align: center;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.gap-4 {
  gap: 1rem;
}

.mt-4 {
  margin-top: 1rem;
}

.mb-4 {
  margin-bottom: 1rem;
}
```

---

## 🚀 Próximos Passos

1. **Crie o arquivo `reset.css`** com um CSS reset básico (Normalize.css ou reset simples)
2. **Organize os arquivos** seguindo a estrutura sugerida
3. **Adapte os exemplos** aos demais componentes (CandidateDashboard, CompanyDashboard)
4. **Teste responsividade** em diferentes dispositivos
5. **Adicione JavaScript** para interações (modais, formulários, etc)
6. **Otimize imagens** e assets para produção

---

## 📚 Recursos Úteis

- **Flexbox Guide:** [CSS-Tricks Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- **Grid Guide:** [CSS-Tricks Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- **CSS Animations:** [MDN CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- **Gradient Generator:** [cssgradient.io](https://cssgradient.io/)
- **Box Shadow Generator:** [cssmatic.com](https://www.cssmatic.com/box-shadow)

---

## ✅ Checklist de Conversão

- [ ] Criar estrutura de pastas (`css/`, `js/`, `assets/`)
- [ ] Configurar `variables.css` com paleta IARA
- [ ] Criar `global.css` com estilos base
- [ ] Criar `components.css` com componentes reutilizáveis
- [ ] Converter Landing Page
- [ ] Converter Login Page
- [ ] Converter Candidate Dashboard
- [ ] Converter Company Dashboard
- [ ] Implementar navegação entre páginas
- [ ] Adicionar animações CSS
- [ ] Testar responsividade mobile
- [ ] Validar formulários com JavaScript
- [ ] Otimizar performance (minificar CSS/JS)

---

**Projeto IARA** © 2026 | Guia de Conversão React → HTML/CSS
