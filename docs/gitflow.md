# Gitflow — Convenções de Branches e Commits

Este documento define as convenções de fluxo de trabalho com Git (Gitflow) a serem seguidas no projeto, garantindo organização, rastreabilidade e um histórico de versionamento limpo.

## Índice

1. [Branches Principais](#1-branches-principais)
2. [Branches de Suporte](#2-branches-de-suporte)
3. [Convenção de Nomes de Branch](#3-convenção-de-nomes-de-branch)
4. [Convenção de Commits (Conventional Commits)](#4-convenção-de-commits-conventional-commits)
5. [Fluxo de Trabalho](#5-fluxo-de-trabalho)
6. [Pull Requests / Merge Requests](#6-pull-requests--merge-requests)
7. [Versionamento (SemVer)](#7-versionamento-semver)
8. [Resumo Rápido](#8-resumo-rápido)

---

## 1. Branches Principais

| Branch    | Finalidade                                                        | Vida útil |
|-----------|--------------------------------------------------------------------|-----------|
| `main`    | Código em produção. Sempre estável e "deployável".                 | Permanente |
| `develop` | Integração das features. Reflete o próximo release em desenvolvimento. | Permanente |

> Nenhum commit deve ser feito diretamente em `main` ou `develop`. Toda alteração passa por Pull Request.

---

## 2. Branches de Suporte

| Branch      | Origem     | Destino (merge)      | Finalidade                                  |
|-------------|------------|------------------------|----------------------------------------------|
| `feature/*` | `develop`  | `develop`              | Desenvolvimento de novas funcionalidades      |
| `release/*` | `develop`  | `main` **e** `develop` | Preparação de uma nova versão (ajustes finais, testes) |
| `hotfix/*`  | `main`     | `main` **e** `develop` | Correções urgentes em produção                |
| `bugfix/*`  | `develop`  | `develop`              | Correções de bugs não urgentes encontrados em desenvolvimento |
| `chore/*`   | `develop`  | `develop`              | Tarefas de manutenção (configs, dependências, build) |
| `docs/*`    | `develop`  | `develop`              | Alterações exclusivas de documentação         |

---

## 3. Convenção de Nomes de Branch

Use **kebab-case**, sempre no formato `tipo/descricao-curta`.

```
feature/autenticacao-usuario
feature/integracao-pagamento
bugfix/corrige-validacao-email
hotfix/corrige-falha-login
release/v1.2.0
chore/atualiza-dependencias
docs/atualiza-readme
```

**Boas práticas:**
- Use nomes curtos, porém descritivos (evite `feature/fix` ou `feature/ajustes`).
- Se houver vínculo com uma tarefa/issue, inclua o identificador:
  ```
  feature/PROJ-123-autenticacao-usuario
  ```
- Evite letras maiúsculas, espaços e underscores nos nomes de branch.

---

## 4. Convenção de Commits (Conventional Commits)

Formato padrão:

```
<tipo>(<escopo opcional>): <descrição curta no imperativo>

[corpo opcional explicando o "porquê" da mudança]

[rodapé opcional: breaking changes, issues relacionadas]
```

### Tipos de commit

| Tipo       | Uso                                                          |
|------------|----------------------------------------------------------------|
| `feat`     | Nova funcionalidade                                             |
| `fix`      | Correção de bug                                                 |
| `docs`     | Alterações somente em documentação                              |
| `style`    | Formatação, ponto e vírgula, espaços — sem alteração de lógica  |
| `refactor` | Refatoração de código sem mudar comportamento                   |
| `perf`     | Melhoria de performance                                          |
| `test`     | Adição ou correção de testes                                     |
| `chore`    | Tarefas de build, configs, dependências                          |
| `ci`       | Alterações em pipelines de integração contínua                   |
| `revert`   | Reversão de um commit anterior                                   |

### Exemplos

```
feat(auth): adiciona login via Google
fix(cart): corrige cálculo de desconto duplicado
docs(readme): atualiza instruções de instalação
refactor(user-service): simplifica lógica de validação
chore(deps): atualiza dependências do projeto
```

### Breaking changes

Indique com `!` após o tipo/escopo ou com rodapé `BREAKING CHANGE:`:

```
feat(api)!: remove endpoint legado de autenticação

BREAKING CHANGE: o endpoint /v1/login foi removido. Use /v2/auth/login.
```

---

## 5. Fluxo de Trabalho

### Nova funcionalidade

```bash
git checkout develop
git pull origin develop
git checkout -b feature/nome-da-feature

# ... desenvolvimento e commits ...

git push origin feature/nome-da-feature
# Abrir Pull Request para develop
```

### Correção urgente em produção (hotfix)

```bash
git checkout main
git pull origin main
git checkout -b hotfix/nome-do-hotfix

# ... correção e commits ...

git push origin hotfix/nome-do-hotfix
# Abrir Pull Request para main E develop
```

### Preparação de release

```bash
git checkout develop
git pull origin develop
git checkout -b release/v1.2.0

# ... ajustes finais, bump de versão, testes ...

git push origin release/v1.2.0
# Abrir Pull Request para main E develop
# Após merge em main, criar tag: git tag -a v1.2.0 -m "Release v1.2.0"
```

---

## 6. Pull Requests / Merge Requests

- **Título:** siga o mesmo padrão dos commits (`feat: adiciona login via Google`).
- **Descrição:** explique o que foi feito e por quê; inclua referência à issue relacionada (`Closes #42`).
- **Revisão:** todo PR deve ter ao menos 1 aprovação antes do merge.
- **Merge:** prefira `squash merge` para `feature/*` (mantém histórico limpo) e `merge commit` para `release/*` e `hotfix/*`.
- Delete a branch após o merge.

---

## 7. Versionamento (SemVer)

Siga o padrão [Semantic Versioning](https://semver.org/): `MAJOR.MINOR.PATCH`

| Parte   | Quando incrementar                                      |
|---------|------------------------------------------------------------|
| `MAJOR` | Mudanças incompatíveis com versões anteriores (breaking changes) |
| `MINOR` | Novas funcionalidades compatíveis com versões anteriores    |
| `PATCH` | Correções de bugs compatíveis com versões anteriores         |

Exemplo: `v1.4.2` → 1 major, 4 minor, 2 patch.

---

## 8. Resumo Rápido

| Ação                          | Branch de origem | Branch de destino     | Prefixo      |
|--------------------------------|-------------------|--------------------------|--------------|
| Nova funcionalidade             | `develop`         | `develop`                | `feature/`   |
| Correção não urgente            | `develop`         | `develop`                | `bugfix/`    |
| Correção urgente (produção)     | `main`            | `main` + `develop`       | `hotfix/`    |
| Preparação de release           | `develop`         | `main` + `develop`       | `release/`   |
| Manutenção/configuração         | `develop`         | `develop`                | `chore/`     |
| Documentação                    | `develop`         | `develop`                | `docs/`      |

**Tipos de commit:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `ci`, `revert`

---

## Boas Práticas Gerais

- Faça commits pequenos e atômicos — cada commit deve representar uma única mudança lógica.
- Escreva mensagens de commit no modo imperativo ("adiciona", não "adicionado" ou "adicionando").
- Nunca faça `force push` em `main` ou `develop`.
- Sempre atualize sua branch local com `git pull` antes de iniciar novos trabalhos.
- Resolva conflitos localmente antes de abrir o Pull Request.
