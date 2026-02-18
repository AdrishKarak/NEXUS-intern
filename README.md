# 🚀 Nexus - Modern Dashboard Application

A beautiful, full-featured dashboard application built with React, Tailwind CSS, and Clerk authentication. Features a stunning dark pink/black theme with smooth animations and real-time data integration.

![Nexus Dashboard](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Clerk Auth](https://img.shields.io/badge/Clerk-Auth-6C47FF?style=for-the-badge)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Available Pages](#-available-pages)
- [Environment Variables](#-environment-variables)
- [Development](#-development)
- [Build & Deploy](#-build--deploy)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### ✅ Authentication & Security
- [x] Clerk authentication integration
- [x] Protected routes
- [x] User session management
- [x] Sign in/Sign out functionality
- [x] User profile management
- [x] Secure route guards

### ✅ User Interface
- [x] Dark pink/black theme
- [x] Fully responsive design
- [x] Smooth animations (Framer Motion)
- [x] Custom scrollbar
- [x] Loading states
- [x] Error handling
- [x] Toast notifications ready
- [x] Modal components ready

### ✅ Dashboard Features
- [x] Analytics overview
- [x] Interactive charts
- [x] Real-time statistics
- [x] Revenue tracking
- [x] Performance metrics
- [x] Quick actions panel
- [x] Recent activity feed

### ✅ User Management
- [x] User list with API integration
- [x] Search functionality
- [x] Role-based filtering
- [x] Status filtering
- [x] User details display
- [x] Edit/Delete actions
- [x] Add new user button
- [x] JSONPlaceholder API integration

### ✅ Analytics
- [x] Detailed performance metrics
- [x] Traffic source analysis
- [x] Top pages tracking
- [x] Conversion tracking
- [x] Interactive charts
- [x] Time range selection
- [x] Export functionality

### ✅ Settings
- [x] General settings
- [x] Notification preferences
- [x] Privacy controls
- [x] Toggle switches
- [x] Language selection
- [x] Timezone configuration
- [x] Danger zone (delete account)

### ✅ Profile
- [x] User profile view
- [x] Edit profile
- [x] Avatar upload ready
- [x] Personal information
- [x] Activity history
- [x] Statistics display
- [x] Clerk data integration

### ✅ Navigation
- [x] Sidebar navigation
- [x] Active state indicators
- [x] Top navbar
- [x] Search bar
- [x] Notifications (UI ready)
- [x] Messages (UI ready)
- [x] User menu

### ✅ Landing Page
- [x] Hero section
- [x] Features showcase
- [x] Call-to-action
- [x] Footer
- [x] Responsive design
- [x] Smooth scrolling

## 🛠 Tech Stack

- **Frontend Framework:** React 18.2.0
- **Build Tool:** Vite 5.0.8
- **Styling:** Tailwind CSS 3.4.0
- **Authentication:** Clerk 4.30.0
- **Routing:** React Router DOM 6.21.0
- **Animations:** Framer Motion 11.0.3
- **API:** JSONPlaceholder (for demo data)
- **Language:** JavaScript (ES6+)

## 🚀 Quick Start

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager
- Clerk account (free tier available)

### Installation Steps

1. **Clone or Download the Project**
   ```bash
   # If you have git
   git clone <your-repo-url>
   cd nexus-app
   
   # Or just extract the downloaded files
   cd nexus-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Clerk Authentication**
   - Go to [https://clerk.com](https://clerk.com)
   - Create a free account
   - Create a new application
   - Copy your Publishable Key from the dashboard

4. **Configure Environment Variables**
   ```bash
   # Copy the example file
   cp .env.example .env
   
   # Edit .env and add your Clerk key
   # VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

6. **Open in Browser**
   - Navigate to `http://localhost:5173`
   - You should see the landing page!

## 📁 Project Structure

```
nexus-app/
├── src/
│   ├── pages/
│   │   ├── Home.jsx              # Landing page (public)
│   │   ├── Dashboard.jsx         # Main dashboard
│   │   ├── Users.jsx             # User management with API
│   │   ├── Analytics.jsx         # Analytics & charts
│   │   ├── Settings.jsx          # App settings
│   │   └── Profile.jsx           # User profile
│   │
│   ├── components/
│   │   ├── Layout.jsx            # Dashboard layout wrapper
│   │   ├── Sidebar.jsx           # Navigation sidebar
│   │   └── Navbar.jsx            # Top navigation bar
│   │
│   ├── App.jsx                   # Main app with routing
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles
│
├── public/
│   └── vite.svg
│
├── index.html
├── package.json
├── vite.config.js
├── .env.example
└── README.md
```

## 📄 Available Pages

### Public Pages
| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home.jsx | Landing page with features & CTA |

### Protected Pages (Require Authentication)
| Route | Component | Description |
|-------|-----------|-------------|
| `/dashboard` | Dashboard.jsx | Main dashboard with analytics |
| `/users` | Users.jsx | User management (API integrated) |
| `/analytics` | Analytics.jsx | Detailed analytics & metrics |
| `/settings` | Settings.jsx | App configuration |
| `/profile` | Profile.jsx | User profile & activity |

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
# Clerk Authentication (Required)
VITE_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxx

# Optional: API Configuration
VITE_API_BASE_URL=https://jsonplaceholder.typicode.com

# Optional: Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_NOTIFICATIONS=true
```

### Getting Your Clerk Key

1. Visit [https://dashboard.clerk.com](https://dashboard.clerk.com)
2. Create an account or sign in
3. Click "Create Application"
4. Select authentication methods (Email, Google, etc.)
5. Copy the **Publishable Key** from API Keys section
6. Paste it into your `.env` file

## 💻 Development

### Available Scripts

```bash
# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code (if configured)
npm run lint
```

### Development Tips

1. **Hot Module Replacement (HMR)**
   - Changes are instantly reflected in the browser
   - No manual refresh needed

2. **Component Development**
   - All page components are in `src/pages/`
   - Reusable components are in `src/components/`
   - Follow the existing naming conventions

3. **Styling**
   - Use Tailwind utility classes
   - Custom colors: pink-500, rose-500 for theme
   - Custom animations defined in component files

4. **Adding New Pages**
   ```javascript
   // 1. Create new component in src/pages/
   // 2. Import in App.jsx
   import NewPage from './pages/NewPage';
   
   // 3. Add route in App.jsx
   <Route path="/new-page" element={
     <ProtectedRoute>
       <Layout>
         <NewPage />
       </Layout>
     </ProtectedRoute>
   } />
   
   // 4. Add to Sidebar.jsx navigation
   { path: '/new-page', icon: '🆕', label: 'New Page' }
   ```

## 🏗 Build & Deploy

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Deploy Options

#### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard
```

#### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod

# Set environment variables in Netlify dashboard
```

#### Other Platforms
- **Cloudflare Pages**: Connect GitHub repo
- **AWS Amplify**: Connect repository
- **GitHub Pages**: Requires additional configuration

### Environment Variables in Production

Don't forget to add your `VITE_CLERK_PUBLISHABLE_KEY` in your hosting platform's environment variables section!

## 🐛 Troubleshooting

### Common Issues

**Issue: "Module not found" errors**
```bash
# Solution: Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Issue: Clerk authentication not working**
```bash
# Solution: Check .env file
# 1. Make sure file is named .env (not .env.txt)
# 2. Verify key starts with pk_test_ or pk_live_
# 3. Restart dev server after changing .env
npm run dev
```

**Issue: Styles not loading**
```bash
# Solution: Rebuild Tailwind
# 1. Delete dist folder
# 2. Restart dev server
npm run dev
```

**Issue: API data not loading**
```bash
# Solution: Check browser console
# 1. F12 > Console tab
# 2. Look for CORS or network errors
# 3. Verify API endpoint is accessible
```

### Getting Help

- Check existing GitHub issues
- Review Clerk documentation: [https://clerk.com/docs](https://clerk.com/docs)
- Review Vite documentation: [https://vitejs.dev](https://vitejs.dev)
- Review React Router docs: [https://reactrouter.com](https://reactrouter.com)

## 🎨 Customization

### Changing Theme Colors

Edit `src/index.css`:
```css
/* Change primary pink color */
.bg-pink-500 { background: #your-color; }
.text-pink-500 { color: #your-color; }

/* Or use Tailwind config (create tailwind.config.js) */
```

### Adding Custom Fonts

1. Import in `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');

body {
  font-family: 'Your Font', sans-serif;
}
```

### Modifying Animations

Animations are done with Framer Motion. Example:
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Your content
</motion.div>
```

## 📊 API Integration

### Current API: JSONPlaceholder

The Users page uses JSONPlaceholder for demo data:
```javascript
// src/pages/Users.jsx
const response = await fetch('https://jsonplaceholder.typicode.com/users');
```

### Using Your Own API

Replace the API endpoint in `Users.jsx`:
```javascript
// Change this:
const response = await fetch('https://jsonplaceholder.typicode.com/users');

// To your API:
const response = await fetch('https://your-api.com/users', {
  headers: {
    'Authorization': `Bearer ${your_token}`
  }
});
```

## 🔒 Security Best Practices

- ✅ Never commit `.env` file to git
- ✅ Use environment variables for API keys
- ✅ Implement rate limiting on API calls
- ✅ Validate user input on forms
- ✅ Keep dependencies updated
- ✅ Use HTTPS in production
- ✅ Enable Clerk's security features

## 📈 Performance Optimization

- ✅ Code splitting with React.lazy (ready to implement)
- ✅ Image optimization (use next-gen formats)
- ✅ Minimize bundle size
- ✅ Use production build for deployment
- ✅ Enable compression on server
- ✅ Cache static assets
- ✅ Lazy load components when needed

## 🧪 Testing

```bash
# Add testing libraries (optional)
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest

# Run tests
npm test
```

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI Library
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Clerk](https://clerk.com/) - Authentication
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Vite](https://vitejs.dev/) - Build Tool
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - Fake API

## 📞 Support

- Documentation: Check this README
- Issues: Open a GitHub issue
- Email: support@nexus-app.com (update with your email)

## 🎯 Roadmap

- [ ] Dark/Light theme toggle
- [ ] Real-time notifications
- [ ] Advanced filtering & sorting
- [ ] Data export functionality
- [ ] Mobile app version
- [ ] Multi-language support
- [ ] Advanced analytics charts
- [ ] Team collaboration features
- [ ] API integration templates
- [ ] Custom dashboard widgets

---

**Built  using React, Tailwind CSS, and Clerk**

**Version:** 1.0.0  
**Last Updated:** 2025

---

### Quick Links

- [Clerk Documentation](https://clerk.com/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide)
- [Framer Motion Documentation](https://www.framer.com/motion/)


