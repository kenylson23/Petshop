# Keny Pet Angola - Pet Services and Products Website

## Overview

Keny Pet Angola is a modern full-stack web application for a pet services and products business based in Luanda, Angola. It's built as a single-page application (SPA) with a React frontend and Node.js/Express backend, featuring a PostgreSQL database for data persistence. The application showcases pet services, products with pricing in Angolan Kwanza (AOA), and provides a contact form for customer inquiries. The site features dynamic 3D animations using CSS and Framer Motion to represent animal life and energy.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI components with shadcn/ui styling
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Animation**: Framer Motion for smooth animations
- **3D Graphics**: Three.js with React Three Fiber for 3D hero elements

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful API with JSON responses
- **Development**: Hot reload with Vite middleware integration

### Project Structure
```
├── client/          # Frontend React application
├── server/          # Backend Express application
├── shared/          # Shared TypeScript schemas and types
├── migrations/      # Database migration files
└── dist/           # Production build output
```

## Key Components

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Centralized schema definition in `shared/schema.ts`
- **Tables**: 
  - `services` - Pet service offerings
  - `products` - Pet product catalog
  - `contacts` - Customer contact form submissions
- **Migrations**: Automated database schema management

### API Layer
- **Services Endpoints**: CRUD operations for pet services
- **Products Endpoints**: Product catalog with category filtering
- **Contacts Endpoints**: Contact form submission handling
- **Error Handling**: Centralized error handling middleware
- **Logging**: Request/response logging for API endpoints

### Frontend Components
- **Hero Section**: 3D animated landing area with floating elements
- **Services Section**: Interactive service cards with animations
- **Products Section**: Filterable product catalog with categories
- **About Section**: Company information with feature highlights
- **Contact Section**: Form with validation and submission handling
- **Responsive Design**: Mobile-first design with breakpoint adaptations

### Storage Layer
- **Development**: In-memory storage implementation for rapid prototyping
- **Production**: PostgreSQL database with connection pooling
- **Abstraction**: Storage interface pattern for easy switching between implementations

## Data Flow

1. **Client Request**: User interacts with React components
2. **Query Management**: TanStack Query manages API calls and caching
3. **API Processing**: Express server processes requests and validates data
4. **Database Operations**: Drizzle ORM handles database queries
5. **Response**: JSON data returned to client and cached by TanStack Query
6. **UI Updates**: React components re-render with new data

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React 18 with TypeScript
- **Animation**: Framer Motion for smooth transitions
- **3D Graphics**: Three.js and React Three Fiber
- **Forms**: React Hook Form with Zod validation
- **HTTP Client**: Fetch API with TanStack Query
- **Styling**: Tailwind CSS with custom CSS variables

### Backend Dependencies
- **Web Framework**: Express.js with TypeScript
- **Database**: PostgreSQL via Neon serverless
- **ORM**: Drizzle ORM with Zod schema validation
- **Development**: tsx for TypeScript execution
- **Build**: esbuild for production bundling

### Development Tools
- **Vite**: Frontend development server and build tool
- **TypeScript**: Type checking and compilation
- **ESLint**: Code linting (implicit via React setup)
- **PostCSS**: CSS processing with Tailwind

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with hot module replacement
- **Backend**: tsx with file watching for auto-restart
- **Database**: Drizzle Kit for schema management and migrations
- **Integration**: Vite proxy for API calls in development

### Production Build
- **Frontend**: Vite build to `dist/public` directory
- **Backend**: esbuild bundle to `dist/index.js`
- **Static Assets**: Served by Express in production
- **Database**: PostgreSQL with environment-based configuration

### Build Commands
- `npm run dev`: Start development servers
- `npm run build`: Create production build
- `npm run start`: Start production server
- `npm run db:push`: Push schema changes to database

## Changelog

```
Changelog:
- July 05, 2025. Initial setup
- July 05, 2025. Adapted for Angolan context with:
  * Currency formatting changed to Angolan Kwanza (AOA)
  * Contact information updated to Luanda, Angola
  * Phone numbers changed to Angola format (+244)
  * Improved button visibility and contrast
  * Fixed CSS import order issues
  * WhatsApp links updated for Angola numbers
- July 05, 2025. Implemented blue and white color scheme:
  * Changed primary color from red to vibrant blue (hsl(210, 100%, 50%))
  * Added custom blue gradients and glass effects
  * Updated all buttons, cards, and sections with blue theme
  * Added blue pulse animations and floating effects
  * Updated phone number to +244 949 639 932 throughout site
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
Target market: Angola
Currency: Angolan Kwanza (AOA)
Location: Luanda, Angola
```