import { Service, Product } from '../../../shared/schema';

export const staticServices: Service[] = [
  {
    id: 1,
    name: "Banho & Tosa",
    description: "Serviços profissionais de banho e tosa para seu pet",
    price: "85.00",
    icon: "fas fa-cut",
    category: "grooming"
  },
  {
    id: 2,
    name: "Consulta Veterinária",
    description: "Atendimento veterinário completo com profissionais qualificados",
    price: "120.00",
    icon: "fas fa-stethoscope",
    category: "veterinary"
  },
  {
    id: 3,
    name: "Hospedagem",
    description: "Hotel para pets com cuidados especiais durante sua ausência",
    price: "150.00",
    icon: "fas fa-home",
    category: "boarding"
  },
  {
    id: 4,
    name: "Adestramento",
    description: "Treinamento comportamental para cães de todas as idades",
    price: "100.00",
    icon: "fas fa-heart",
    category: "training"
  }
];

export const staticProducts: Product[] = [
  {
    id: 1,
    name: "Ração Premium Adulto",
    description: "Ração super premium para cães adultos com ingredientes selecionados",
    price: "185.00",
    category: "food",
    image: "/products/racao-premium.jpg",
    inStock: true
  },
  {
    id: 2,
    name: "Brinquedo Interativo",
    description: "Brinquedo educativo para estimular a inteligência do seu pet",
    price: "55.00",
    category: "toys",
    image: "/products/brinquedo.jpg",
    inStock: true
  },
  {
    id: 3,
    name: "Cama Ortopédica",
    description: "Cama confortável com suporte ortopédico para pets idosos",
    price: "125.00",
    category: "beds",
    image: "/products/cama-ortopedica.jpg",
    inStock: true
  },
  {
    id: 4,
    name: "Coleira GPS",
    description: "Coleira inteligente com rastreamento GPS para maior segurança",
    price: "250.00",
    category: "accessories",
    image: "/products/coleira-gps.jpg",
    inStock: true
  },
  {
    id: 5,
    name: "Kit Higiene",
    description: "Kit completo de produtos para higiene e cuidados do pet",
    price: "85.00",
    category: "hygiene",
    image: "/products/kit-higiene.jpg",
    inStock: true
  },
  {
    id: 6,
    name: "Transportadora",
    description: "Transportadora segura e confortável para viagens",
    price: "150.00",
    category: "accessories",
    image: "/products/transportadora.jpg",
    inStock: true
  }
];

export const productCategories = [
  { value: "all", label: "Todos os Produtos" },
  { value: "food", label: "Alimentação" },
  { value: "toys", label: "Brinquedos" },
  { value: "beds", label: "Camas" },
  { value: "accessories", label: "Acessórios" },
  { value: "hygiene", label: "Higiene" }
];

export const serviceCategories = [
  { value: "all", label: "Todos os Serviços" },
  { value: "grooming", label: "Estética" },
  { value: "veterinary", label: "Veterinário" },
  { value: "boarding", label: "Hospedagem" },
  { value: "training", label: "Adestramento" }
];