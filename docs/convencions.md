# Convenções de Nomenclatura

Este documento define as convenções de nomenclatura a serem seguidas no projeto, garantindo consistência, legibilidade e manutenibilidade do código.

## Índice

1. [Variáveis de Ambiente](#1-variáveis-de-ambiente)
2. [Variáveis Globais](#2-variáveis-globais)
3. [Variáveis Locais](#3-variáveis-locais)
4. [Constantes](#4-constantes)
5. [Funções e Métodos](#5-funções-e-métodos)
6. [Classes e Interfaces](#6-classes-e-interfaces)
7. [Arquivos e Diretórios](#7-arquivos-e-diretórios)
8. [Booleanos](#8-booleanos)
9. [Resumo Rápido](#9-resumo-rápido)

---

## 1. Variáveis de Ambiente

Use **UPPERCASE** (maiúsculas) com palavras separadas por underscore (`SNAKE_CASE`).

```env
DATABASE_URL=postgres://localhost:5432/mydb
API_KEY=xxxxxxxxxxxxxxxx
NODE_ENV=production
MAX_CONNECTIONS=10
```

**Motivo:** é o padrão universal em arquivos `.env`, shells e sistemas operacionais, facilitando a identificação imediata de configurações externas ao código.

---

## 2. Variáveis Globais

Use **camelCase**.

```js
let userSession = null;
let appConfig = {};
let globalCounter = 0;
```

**Motivo:** camelCase é o padrão predominante em JavaScript/TypeScript e na maioria das linguagens modernas para identificadores de variáveis, mantendo boa legibilidade sem poluição visual.

---

## 3. Variáveis Locais

Use **camelCase**, priorizando nomes curtos, porém descritivos, dentro do escopo em que são utilizados.

```js
function calcularTotal(itens) {
  let precoTotal = 0;
  for (const item of itens) {
    precoTotal += item.preco;
  }
  return precoTotal;
}
```

---

## 4. Constantes

Use **UPPERCASE_SNAKE_CASE** para constantes verdadeiras (valores fixos, imutáveis, conhecidos em tempo de compilação).

```js
const MAX_RETRIES = 3;
const DEFAULT_TIMEOUT_MS = 5000;
const PI = 3.14159;
```

Para constantes que representam apenas referências imutáveis (mas não "configurações globais"), pode-se usar **camelCase**:

```js
const userRepository = new UserRepository();
```

> **Regra prática:** se o valor é um "número mágico" ou configuração fixa → `UPPERCASE`. Se é uma referência a um objeto/instância → `camelCase`.

---

## 5. Funções e Métodos

Use **camelCase**, com verbos que expressem a ação realizada.

```js
function getUserById(id) { ... }
function calculateDiscount(price) { ... }
function isValidEmail(email) { ... }
```

---

## 6. Classes e Interfaces

Use **PascalCase**.

```js
class UserAccount { ... }
class PaymentGateway { ... }

interface UserRepository { ... }
```

---

## 7. Arquivos e Diretórios

- **Componentes (React/Vue/etc.):** PascalCase → `UserProfile.tsx`
- **Módulos/utilitários:** camelCase ou kebab-case → `dateUtils.js` ou `date-utils.js`
- **Diretórios:** kebab-case → `user-management/`
- **Arquivos de configuração:** kebab-case ou padrão exigido pela ferramenta → `docker-compose.yml`

> Escolha uma estratégia (camelCase **ou** kebab-case para arquivos) e mantenha-a consistente em todo o projeto.

---

## 8. Booleanos

Use prefixos que indiquem claramente uma condição: `is`, `has`, `can`, `should`.

```js
let isActive = true;
let hasPermission = false;
let canEdit = true;
let shouldRetry = false;
```

---

## 9. Resumo Rápido

| Tipo                        | Convenção            | Exemplo                  |
|-----------------------------|-----------------------|---------------------------|
| Variáveis de ambiente       | `UPPERCASE_SNAKE_CASE` | `DATABASE_URL`            |
| Variáveis globais           | `camelCase`            | `appConfig`                |
| Variáveis locais            | `camelCase`            | `precoTotal`                |
| Constantes fixas            | `UPPERCASE_SNAKE_CASE` | `MAX_RETRIES`               |
| Constantes de referência    | `camelCase`            | `userRepository`            |
| Funções/métodos             | `camelCase`            | `getUserById()`             |
| Classes/Interfaces          | `PascalCase`           | `UserAccount`               |
| Arquivos de componente      | `PascalCase`           | `UserProfile.tsx`           |
| Arquivos/diretórios gerais  | `kebab-case`           | `user-management/`          |
| Booleanos                   | prefixo `is/has/can`   | `isActive`, `hasPermission` |

---

## Boas Práticas Gerais

- Prefira nomes descritivos a nomes curtos e ambíguos (`d` → `dataAtual`).
- Evite abreviações desnecessárias.
- Seja consistente: uma vez escolhida uma convenção para um contexto, mantenha-a em todo o projeto.
- Nomes em português ou inglês — escolha um idioma e mantenha-o em todo o código-base.