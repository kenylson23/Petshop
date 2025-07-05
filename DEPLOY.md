# Deploy da Keny Pet no Netlify

## Configuração Automática

O projeto está configurado para deploy automático no Netlify com as seguintes configurações:

### Arquivos de Configuração

1. **netlify.toml** - Configuração principal do Netlify
2. **netlify/functions/api.js** - Função serverless para API
3. **client/public/_redirects** - Redirecionamentos para SPA

### Configurações de Build

- **Build Command**: `npm run build`
- **Publish Directory**: `dist/public`
- **Node Version**: 20
- **Functions Directory**: `netlify/functions`

### Como Fazer Deploy

1. **Via Git (Recomendado)**:
   - Conecte seu repositório GitHub ao Netlify
   - O deploy será automático em cada push

2. **Via Drag & Drop**:
   - Execute `npm run build` localmente
   - Faça upload da pasta `dist/public` no Netlify

### Funcionalidades Incluídas

✅ **Frontend React** - SPA otimizado  
✅ **API Serverless** - Functions do Netlify  
✅ **Roteamento SPA** - Redirecionamentos configurados  
✅ **CORS** - Configurado para produção  
✅ **Dados Estáticos** - Produtos e serviços pré-carregados  

### Endpoints da API

- `GET /api/services` - Lista de serviços
- `GET /api/products` - Lista de produtos (com filtro por categoria)
- `POST /api/contacts` - Envio de formulário de contato
- `GET /api/health` - Health check

### Variáveis de Ambiente

Nenhuma variável de ambiente é necessária para o funcionamento básico.

### Troubleshooting

1. **Build falhando**: Verifique se todas as dependências estão instaladas
2. **API não funciona**: Verifique se os redirecionamentos estão configurados
3. **SPA não funciona**: Verifique o arquivo `_redirects`

### Performance

- **Tamanho do Bundle**: Otimizado para produção
- **Lazy Loading**: Imagens carregadas sob demanda
- **Compressão**: Gzip automático pelo Netlify
- **CDN**: Edge locations globais

### Monitoramento

- **Analytics**: Disponível no dashboard do Netlify
- **Error Tracking**: Logs de função disponíveis
- **Performance**: Core Web Vitals no Netlify Analytics