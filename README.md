# TesloShop - Angular E-commerce Platform

A modern, full-featured e-commerce application built with Angular 19, featuring both customer storefront and admin dashboard functionalities.

## Features

### Storefront
- **Product Catalog**: Browse products by categories and gender
- **Product Details**: Detailed product pages with image carousels
- **User Authentication**: Login and registration system
- **Responsive Design**: Mobile-first design with TailwindCSS
- **Search & Filtering**: Find products easily

### Admin Dashboard
- **Product Management**: CRUD operations for products
- **Inventory Control**: Stock management

### Authentication & Security
- **JWT Authentication**: Secure token-based authentication
- **Role-based Access**: Admin and customer roles
- **Route Guards**: Protected routes for authenticated users
- **Auth Interceptor**: Automatic token handling

## Tech Stack

- **Frontend Framework**: Angular 19
- **Styling**: TailwindCSS 4.1.1 + DaisyUI 5.0.12
- **UI Components**: Custom components with Swiper.js for carousels
- **Authentication**: JWT with custom auth service
- **HTTP Client**: Angular HTTP Client with interceptors
- **State Management**: Angular Services with RxJS
- **Build Tool**: Angular CLI with esbuild
- **Testing**: Jasmine & Karma
- **Deployment**: Docker with Nginx

## 📁 Project Structure

```
src/
├── app/
│   ├── admin-dashboard/           # Admin panel features
│   │   ├── components/           # Admin-specific components
│   │   ├── layouts/             # Admin layout wrapper
│   │   └── pages/               # Admin pages (products, users)
│   ├── auth/                    # Authentication module
│   │   ├── guards/             # Route protection
│   │   ├── interceptors/       # HTTP interceptors
│   │   ├── services/           # Auth service
│   │   └── pages/              # Login/Register pages
│   ├── products/               # Product management
│   │   ├── components/         # Product cards, tables, carousels
│   │   ├── services/           # Product API service
│   │   ├── interfaces/         # TypeScript interfaces
│   │   └── pipes/              # Product-related pipes
│   ├── store-front/            # Customer-facing features
│   │   ├── components/         # Storefront components
│   │   ├── layouts/            # Storefront layout
│   │   └── pages/              # Customer pages
│   ├── shared/                 # Shared components & utilities
│   │   ├── components/         # Reusable components
│   │   └── interceptors/       # Global interceptors
│   └── utils/                  # Utility functions
├── environments/               # Environment configurations
└── assets/                    # Static assets (images, fonts)
```

## Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **Angular CLI** (v19)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/4n-ch4n/eShop-angular-fronted.git
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

## Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run build-prod` - Build with production configuration
- `npm run watch` - Build in watch mode
- `npm test` - Run unit tests

### Development Server

The development server will automatically reload when you make changes to source files.

### Code Scaffolding

Generate new components, services, or other Angular schematics:

```bash
ng generate component component-name
ng generate service service-name
ng generate guard guard-name
```

## Building

### Development Build
```bash
ng build
```

### Production Build
```bash
ng build --configuration=production
# or
npm run build-prod
```

Build artifacts will be stored in the `dist/teslo-shop/browser/` directory.

## Docker Deployment

The project includes a multi-stage Dockerfile for containerized deployment:

### Build Docker Image
```bash
docker build -t teslo-shop .
```

### Run Container
```bash
docker run -p 80:80 teslo-shop
```

### Docker Configuration

The Dockerfile uses:
- **Node.js 24** for building the Angular application
- **Nginx Alpine** for serving static files
- **Custom nginx.conf** for Angular routing support

## Authentication & Authorization

### Features
- JWT token-based authentication
- Role-based access control (Admin/Customer)
- Protected routes with guards
- Automatic token refresh
- Secure logout functionality

### Guards
- `not-authenticated.guard.ts` - Redirects authenticated users
- `is-admin.guard.ts` - Protects admin routes

### Interceptors
- `auth.interceptor.ts` - Adds auth tokens to requests
- `logging.interceptor.ts` - Logs HTTP requests

## API Integration

The application integrates with a backend API for:
- User authentication and management
- Product catalog and inventory
- Order processing
- Admin operations

Services are organized by feature and use Angular's HTTP client with proper error handling and loading states.

## Styling

### TailwindCSS 4.1.1
- Utility-first CSS framework
- Custom configuration for design system
- PostCSS integration

### DaisyUI 5.0.12
- Pre-built component library
- Consistent design tokens
- Responsive components

### Custom Fonts
- Montserrat Alternates for headings
- Optimized font loading

## Environment Configuration

Configure different environments in:
- `src/environments/environment.ts` (production)
- `src/environments/environment.development.ts` (development)

## Responsive Design

- Mobile-first approach
- Breakpoint-based responsive design
- Touch-friendly interactions
- Progressive Web App ready

