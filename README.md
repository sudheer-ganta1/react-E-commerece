# 🛒 E-Bazzar - E-Commerce Web App

A simple and responsive **E-Commerce web application** built with React.js.  
It allows users to browse products, view details, and add items to their cart.  
This project was created to strengthen my frontend development skills and learn how e-commerce platforms work.

---

## 🚀 Features

- Product Listing Page (PLP) – shows multiple products with images, prices, and discounts
- Product Detail Page (PDP) – displays product details on a separate page
- Add to Cart functionality with quantity & price
- Dynamic routing for each product page
- Responsive design for mobile and desktop

---

## 🛠️ Technologies Used

- **Frontend:** React.js, React Router, Context API
- **Styling:** CSS3, HTML5
- **Build Tool:** Vite
- **Version Control:** Git, GitHub

---

## 🚢 Deploy

### Netlify (recommended)

1. SPA fallback is included at `public/_redirects`.
2. Build and deploy:
   - Build: `npm run build`
   - Deploy via CLI: `npx netlify deploy --prod --dir=dist`
   - Or connect the repo in Netlify UI. Build: `npm run build`, Publish: `dist`.

### Vercel

1. `vercel.json` includes SPA rewrite.
2. Deploy: `npm run build && npx vercel --prod`

### Docker

1. Build and run:
```
docker build -t e-mart .
docker run -p 8080:80 e-mart
```
Open http://localhost:8080