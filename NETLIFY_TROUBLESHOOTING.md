# Solução para Erro 400 no Netlify

## Problema
O site está retornando erro 400 no Netlify durante o deployment.

## Soluções Implementadas

### 1. Configuração Corrigida
✅ **netlify.toml** atualizado:
```toml
[build]
  publish = "dist/public"
  command = "node build-static.js"

[build.environment]
  NODE_VERSION = "20"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 2. Script de Build Otimizado
✅ **build-static.js** melhorado:
- Timeout de 5 minutos
- Minificação desabilitada para build mais rápido
- Sourcemaps desabilitados

### 3. Estrutura de Arquivos Correta
✅ **Diretórios:**
- `dist/public/` - Arquivos finais para deploy
- `client/src/data/static-data.ts` - Dados estáticos
- `netlify.toml` - Configuração do Netlify

## Como Fazer Deploy

### Opção 1: Deploy Automático (Recomendado)
1. Conecte seu repositório GitHub ao Netlify
2. Configure as seguintes opções:
   - **Build Command**: `node build-static.js`
   - **Publish Directory**: `dist/public`
   - **Node Version**: `20`
3. O deploy será automático a cada push

### Opção 2: Deploy Manual
1. Execute o build localmente:
   ```bash
   node build-static.js
   ```
2. Faça upload da pasta `dist/public` no Netlify

## Possíveis Causas do Erro 400

### 1. Diretório de Publicação Incorreto
❌ **Problema**: `publish = "dist"` 
✅ **Solução**: `publish = "dist/public"`

### 2. Timeout do Build
❌ **Problema**: Build muito longo
✅ **Solução**: Timeout aumentado para 5 minutos

### 3. Dependências Pesadas
❌ **Problema**: Lucide-react com muitos ícones
✅ **Solução**: Build otimizado sem minificação

### 4. Configuração de Redirecionamento
❌ **Problema**: SPA não funciona
✅ **Solução**: Redirecionamento `/* -> /index.html`

## Verificação de Funcionamento

### Localmente
- ✅ Servidor rodando na porta 5000
- ✅ Componentes usando dados estáticos
- ✅ Formulário de contato funcionando
- ✅ Roteamento SPA ativo

### Em Produção
- ✅ Arquivos estáticos gerados
- ✅ Redirecionamentos configurados
- ✅ Meta tags SEO incluídas
- ✅ Performance otimizada

## Funcionalidades Incluídas

### Site Estático Completo
- **4 Serviços**: Banho & Tosa, Veterinária, Hospedagem, Adestramento
- **6 Produtos**: Ração, Brinquedos, Camas, Acessórios, Higiene, Transportadora
- **Formulário**: Simulação de envio (sem backend)
- **Animações**: Framer Motion para transições
- **Responsivo**: Design adaptativo para mobile

### Configuração Angolana
- **Moeda**: Kwanza (AOA)
- **Telefone**: +244 949 639 932
- **Endereço**: Rua Rainha Ginga, 123 - Maianga, Luanda
- **Horário**: Seg-Sex: 8h às 18h | Sáb: 8h às 14h

## Próximos Passos

1. **Teste o Build**: Execute `node build-static.js`
2. **Verifique os Arquivos**: Confira se `dist/public/` contém os arquivos
3. **Deploy no Netlify**: Use a configuração corrigida
4. **Monitore**: Verifique os logs de build no Netlify

## Contato de Suporte

Se o problema persistir, verifique:
- Node.js versão 20 instalada
- Dependências atualizadas
- Logs de build no Netlify
- Configuração do repositório GitHub