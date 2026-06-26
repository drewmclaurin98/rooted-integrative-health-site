# Rest & Health - NIS Booking Application

A modern, full-stack booking application for NIS (Neurosomatic Integration Session) appointments built with Next.js, featuring integrated payment processing, AI-powered components, and automated scheduling.

## Overview

Rest & Health booking app enables seamless appointment scheduling with:
- **Service Selection**: Browse and select NIS services
- **Smart Scheduling**: Real-time availability checking with timezone support
- **Secure Payments**: Stripe integration for payment processing
- **Automated Confirmations**: Email notifications via Resend
- **AI-Enhanced UI**: AI-powered component generation for dynamic interfaces
- **Comprehensive Analytics**: Track user interactions and performance

## Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Storybook** - Component development and documentation

### Backend & Data
- **Prisma** - ORM with SQLite database
- **Stripe** - Payment processing
- **OpenAI** - AI component generation
- **Resend** - Email delivery

### Developer Tools
- **Vitest** - Unit and integration testing
- **Playwright** - Browser-based testing
- **ESLint** - Code linting
- **Vite** - Build tool and dev server

### Analytics & Monitoring
- **Vercel Analytics** - Performance monitoring
- **Vercel Speed Insights** - Real User Monitoring

## Prerequisites

- **Node.js** 18+ or higher
- **npm**, **yarn**, **pnpm**, or **bun** package manager
- Git

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd RIH-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory with the following variables:
   ```env
   # Database
   DATABASE_URL="file:./dev.db"
   
   # Stripe
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_publishable_key
   STRIPE_SECRET_KEY=your_secret_key
   STRIPE_WEBHOOK_SECRET=your_webhook_secret
   
   # OpenAI
   OPENAI_API_KEY=your_openai_api_key
   
   # Resend (Email)
   RESEND_API_KEY=your_resend_api_key
   
   # Vercel Analytics
   NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id
   ```

4. **Initialize the database**
   ```bash
   npx prisma migrate dev
   ```

## Development

### Start the development server
```bash
npm run dev
```
The app will be available at [http://localhost:3000](http://localhost:3000). Pages auto-reload as you edit files.

### Run Storybook
```bash
npm run storybook
```
Access component stories at [http://localhost:6006](http://localhost:6006).

### Run tests
```bash
npm run test
```

### Build for production
```bash
npm run build
npm run start
```

## Project Structure

```
rih-app/
├── app/                    # Next.js App Router
│   ├── (site)/            # Main site routes
│   │   ├── page.tsx       # Home page
│   │   ├── about-nis/     # About NIS page
│   │   ├── booking/       # Booking page
│   │   ├── cancel/        # Booking cancellation
│   │   ├── services/      # Services page
│   │   └── success/       # Booking success
│   └── api/               # API routes
│       ├── agents/        # AI agent components
│       ├── availability/  # Availability checking
│       ├── booking/       # Booking management
│       ├── checkout/      # Stripe checkout
│       └── webhooks/      # Stripe webhooks
├── components/            # Reusable React components
│   ├── blocks/           # Page section blocks (hero, FAQ, features)
│   ├── booking/          # Booking-specific components
│   ├── emails/           # Email templates
│   └── layout/           # Layout components
├── content/              # Static content and navigation config
├── lib/                  # Utility functions and configurations
│   ├── ai/              # AI utilities and agents
│   ├── availability.ts  # Availability logic
│   ├── config.ts        # App configuration
│   ├── prisma.ts        # Prisma client
│   ├── stripe.ts        # Stripe utilities
│   └── timezone.ts      # Timezone utilities
├── prisma/              # Database schema and migrations
├── public/              # Static assets
├── stories/             # Storybook component stories
└── styles/              # Global styles and design tokens
```

## Key Features

### Booking Flow
1. User selects a service from the offerings
2. System displays available time slots (real-time availability)
3. User selects preferred appointment date/time
4. User enters contact information
5. Automatic timezone conversion for practitioner
6. Payment processing through Stripe
7. Confirmation email sent via Resend

### Database Schema
The application uses a SQLite database with the following main model:

**Booking**
- `id` - Unique identifier
- `serviceName` - Selected service
- `price` - Appointment cost (in cents)
- `bookingTime` - Scheduled appointment time
- `customerEmail` - Customer contact email
- `status` - Booking status (pending, confirmed, cancelled)
- `expiresAt` - Payment/booking expiration
- `createdAt` - Creation timestamp

### Timezone Support
The application runs in America/Chicago timezone for the practitioner. Booking times are automatically converted between customer timezone and practitioner timezone.

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | Yes | SQLite database connection string |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Yes | Stripe publishable API key |
| `STRIPE_SECRET_KEY` | Yes | Stripe secret API key |
| `STRIPE_WEBHOOK_SECRET` | Yes | Webhook signing secret for Stripe |
| `OPENAI_API_KEY` | Yes | OpenAI API key for AI features |
| `RESEND_API_KEY` | Yes | Resend API key for emails |
| `NEXT_PUBLIC_VERCEL_ANALYTICS_ID` | No | Vercel analytics tracking ID |

## API Routes

### `/api/availability`
Get available time slots for appointments. Checks real-time availability and timezone conversions.

### `/api/booking`
Manage booking creation and updates.

### `/api/booking/cancel`
Cancel an existing booking.

### `/api/checkout`
Initiate Stripe payment checkout for a booking.

### `/api/webhooks/stripe`
Handle Stripe webhook events (payment confirmations, etc.).

### `/api/agents/components`
Generate dynamic components using AI.

## Testing

### Unit and Integration Tests
```bash
npm run test
```

### Component Development with Storybook
```bash
npm run storybook
```

### Build Storybook Static Site
```bash
npm run build-storybook
```

## Database Migrations

When updating the Prisma schema:

```bash
# Create a new migration
npx prisma migrate dev --name <migration_name>

# Apply migrations in production
npx prisma migrate deploy
```

Migration history is stored in `/prisma/migrations/`.

## Deployment

### Deploy on Vercel (Recommended)
The easiest deployment option:

1. Push your repository to GitHub
2. Go to [Vercel](https://vercel.com)
3. Create a new project and select your repository
4. Set environment variables in Vercel dashboard
5. Deploy

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Manual Deployment
```bash
# Build the application
npm run build

# Start the production server
npm start
```

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Add tests for new functionality
4. Ensure linting passes: `npm run lint`
5. Submit a pull request

## Scripts Reference

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run storybook` | Start Storybook development |
| `npm run build-storybook` | Build static Storybook |

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Stripe API Documentation](https://stripe.com/docs/api)
- [Tailwind CSS](https://tailwindcss.com)

## License

[Add your license information here]
