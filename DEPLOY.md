# Deploy da Keny Pet no Netlify (Site Estático)

## Configuração para Site Estático

O projeto foi convertido para um site completamente estático, otimizado para deploy no Netlify sem necessidade de funções serverless.

### Arquivos de Configuração

1. **netlify.toml** - Configuração principal do Netlify para site estático
2. **build-static.js** - Script de build otimizado para produção
3. **client/src/data/static-data.ts** - Dados locais (produtos e serviços)

### Configurações de Build

- **Build Command**: `node build-static.js`
- **Publish Directory**: `dist`
- **Node Version**: 20
- **Tipo**: Site estático (JAMstack)

### Como Fazer Deploy

1. **Via Git (Recomendado)**:
   - Conecte seu repositório GitHub ao Netlify
   - O deploy será automático em cada push
   - Build configurado para `node build-static.js`

2. **Via Drag & Drop**:
   - Execute `node build-static.js` localmente
   - Faça upload da pasta `dist` no Netlify

3. **Build Local**:
   ```bash
   # Build para produção
   node build-static.js
   
   # Arquivos gerados em /dist
   ```

### Funcionalidades do Site Estático

✅ **Frontend React** - SPA completamente estático  
✅ **Dados Locais** - Produtos e serviços incluídos no build  
✅ **Roteamento SPA** - Redirecionamentos configurados  
✅ **Formulário Contato** - Simulação local (sem backend)  
✅ **Performance** - Carregamento ultra-rápido  
✅ **SEO** - Meta tags otimizadas  

### Dados Incluídos

- **4 Serviços**: Banho & Tosa, Veterinária, Hospedagem, Adestramento
- **6 Produtos**: Ração, Brinquedos, Camas, Acessórios, Higiene
- **Preços em AOA**: Formatação para mercado angolano
- **Contato**: +244 949 639 932, Luanda, Angola

### Vantagens do Site Estático

- **Velocidade**: Carregamento instantâneo
- **Custo**: Hospedagem gratuita no Netlify
- **Segurança**: Sem vulnerabilidades de backend
- **Escalabilidade**: CDN global automático
- **Manutenção**: Zero dependências de servidor

### Limitações

- **Formulário**: Simulação local (não envia emails)
- **CMS**: Dados devem ser editados no código
- **Database**: Não há persistência de dados

### Performance Otimizada

- **Bundle Size**: Minimizado para produção
- **Lazy Loading**: Componentes sob demanda
- **Tree Shaking**: Remoção de código não utilizado
- **Compressão**: Gzip automático pelo Netlify
- **CDN**: 100+ edge locations globais

### Monitoramento

- **Analytics**: Netlify Analytics integrado
- **Performance**: Core Web Vitals automático
- **Uptime**: 99.9% garantido pelo Netlify
- **Deploy**: Logs detalhados de cada build