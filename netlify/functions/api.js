// Simplified Netlify Function for Keny Pet API
const services = [
  {
    id: 1,
    name: "Banho & Tosa",
    description: "Serviços completos de higiene e beleza para seu pet",
    price: 15000,
    duration: "2-3 horas",
    category: "grooming"
  },
  {
    id: 2,
    name: "Consulta Veterinária",
    description: "Consulta com veterinário especializado",
    price: 25000,
    duration: "30-45 min",
    category: "health"
  },
  {
    id: 3,
    name: "Vacinação",
    description: "Vacinação completa seguindo calendário veterinário",
    price: 8000,
    duration: "15-20 min",
    category: "health"
  },
  {
    id: 4,
    name: "Pet Sitting",
    description: "Cuidamos do seu pet enquanto você está fora",
    price: 12000,
    duration: "Por dia",
    category: "care"
  }
];

const products = [
  {
    id: 1,
    name: "Ração Premium",
    description: "Ração super premium para cães adultos",
    price: 35000,
    category: "food",
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400"
  },
  {
    id: 2,
    name: "Brinquedo Interativo",
    description: "Brinquedo para estimular a inteligência do seu pet",
    price: 8500,
    category: "toys",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400"
  },
  {
    id: 3,
    name: "Coleira Premium",
    description: "Coleira resistente e confortável",
    price: 12000,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400"
  },
  {
    id: 4,
    name: "Cama Ortopédica",
    description: "Cama confortável e ortopédica para pets",
    price: 45000,
    category: "comfort",
    image: "https://images.unsplash.com/photo-1544568100-847a948585b9?w=400"
  },
  {
    id: 5,
    name: "Kit Higiene",
    description: "Kit completo para higiene do seu pet",
    price: 18000,
    category: "hygiene",
    image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=400"
  },
  {
    id: 6,
    name: "Suplemento Vitamínico",
    description: "Vitaminas essenciais para a saúde do pet",
    price: 25000,
    category: "health",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=400"
  }
];

let contacts = [];

exports.handler = async (event, context) => {
  const { path, httpMethod, body, queryStringParameters } = event;
  
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight requests
  if (httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    const apiPath = path.replace('/.netlify/functions/api', '');
    
    // Services endpoints
    if (apiPath === '/api/services' && httpMethod === 'GET') {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(services)
      };
    }

    if (apiPath.startsWith('/api/services/') && httpMethod === 'GET') {
      const id = parseInt(apiPath.split('/')[3]);
      const service = services.find(s => s.id === id);
      if (!service) {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ error: 'Service not found' })
        };
      }
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(service)
      };
    }

    // Products endpoints
    if (apiPath === '/api/products' && httpMethod === 'GET') {
      const category = queryStringParameters?.category;
      let filteredProducts = products;
      
      if (category) {
        filteredProducts = products.filter(p => p.category === category);
      }
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(filteredProducts)
      };
    }

    if (apiPath.startsWith('/api/products/') && httpMethod === 'GET') {
      const id = parseInt(apiPath.split('/')[3]);
      const product = products.find(p => p.id === id);
      if (!product) {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ error: 'Product not found' })
        };
      }
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(product)
      };
    }

    // Contacts endpoints
    if (apiPath === '/api/contacts' && httpMethod === 'GET') {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(contacts)
      };
    }

    if (apiPath === '/api/contacts' && httpMethod === 'POST') {
      const contactData = JSON.parse(body);
      const newContact = {
        id: contacts.length + 1,
        ...contactData,
        createdAt: new Date().toISOString()
      };
      contacts.push(newContact);
      
      return {
        statusCode: 201,
        headers,
        body: JSON.stringify(newContact)
      };
    }

    // Health check
    if (apiPath === '/api/health' && httpMethod === 'GET') {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ 
          status: 'ok', 
          timestamp: new Date().toISOString() 
        })
      };
    }

    // Not found
    return {
      statusCode: 404,
      headers,
      body: JSON.stringify({ error: 'Endpoint not found' })
    };

  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
};