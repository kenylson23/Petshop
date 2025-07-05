import { services, products, contacts, type Service, type Product, type Contact, type InsertService, type InsertProduct, type InsertContact } from "@shared/schema";

export interface IStorage {
  // Services
  getServices(): Promise<Service[]>;
  getService(id: number): Promise<Service | undefined>;
  createService(service: InsertService): Promise<Service>;

  // Products
  getProducts(): Promise<Product[]>;
  getProductsByCategory(category: string): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;

  // Contacts
  getContacts(): Promise<Contact[]>;
  createContact(contact: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private services: Map<number, Service>;
  private products: Map<number, Product>;
  private contacts: Map<number, Contact>;
  private currentServiceId: number;
  private currentProductId: number;
  private currentContactId: number;

  constructor() {
    this.services = new Map();
    this.products = new Map();
    this.contacts = new Map();
    this.currentServiceId = 1;
    this.currentProductId = 1;
    this.currentContactId = 1;

    // Initialize with sample data
    this.initializeData();
  }

  private initializeData() {
    // Sample services
    const sampleServices: InsertService[] = [
      {
        name: "Banho & Tosa",
        description: "Serviços completos de higiene e estética para deixar seu pet lindo e cheiroso",
        price: "45.00",
        icon: "fas fa-cut",
        category: "grooming"
      },
      {
        name: "Consulta Veterinária",
        description: "Atendimento veterinário completo com profissionais especializados",
        price: "80.00",
        icon: "fas fa-stethoscope",
        category: "health"
      },
      {
        name: "Vacinação",
        description: "Programa completo de vacinação para proteger a saúde do seu pet",
        price: "60.00",
        icon: "fas fa-syringe",
        category: "health"
      },
      {
        name: "Pet Sitting",
        description: "Cuidados especializados para seu pet enquanto você viaja",
        price: "35.00",
        icon: "fas fa-home",
        category: "care"
      }
    ];

    // Sample products
    const sampleProducts: InsertProduct[] = [
      {
        name: "Ração Premium",
        description: "Ração super premium para cães adultos",
        price: "89.90",
        category: "food",
        image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        inStock: true
      },
      {
        name: "Brinquedos Interativos",
        description: "Kit com brinquedos para diversão",
        price: "35.90",
        category: "toys",
        image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        inStock: true
      },
      {
        name: "Coleira e Guia",
        description: "Conjunto premium para passeios",
        price: "45.90",
        category: "accessories",
        image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        inStock: true
      },
      {
        name: "Vitaminas e Suplementos",
        description: "Para a saúde e vitalidade do seu pet",
        price: "67.90",
        category: "health",
        image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        inStock: true
      }
    ];

    sampleServices.forEach(service => this.createService(service));
    sampleProducts.forEach(product => this.createProduct(product));
  }

  // Services
  async getServices(): Promise<Service[]> {
    return Array.from(this.services.values());
  }

  async getService(id: number): Promise<Service | undefined> {
    return this.services.get(id);
  }

  async createService(insertService: InsertService): Promise<Service> {
    const id = this.currentServiceId++;
    const service: Service = { ...insertService, id };
    this.services.set(id, service);
    return service;
  }

  // Products
  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      product => product.category === category
    );
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.currentProductId++;
    const product: Product = { 
      ...insertProduct, 
      id,
      inStock: insertProduct.inStock ?? true
    };
    this.products.set(id, product);
    return product;
  }

  // Contacts
  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { 
      id,
      name: insertContact.name,
      email: insertContact.email,
      phone: insertContact.phone ?? null,
      message: insertContact.message,
      createdAt: new Date().toISOString() 
    };
    this.contacts.set(id, contact);
    return contact;
  }
}

export const storage = new MemStorage();
