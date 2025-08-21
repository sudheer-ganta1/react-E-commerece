# Multi-stage build: build with Node, serve with Nginx

FROM node:20-alpine AS builder
WORKDIR /app

# Install deps
COPY package.json package-lock.json ./
RUN npm ci --quiet

# Copy source and build
COPY . .
RUN npm run build

# --- Runtime image ---
FROM nginx:1.27-alpine AS runtime

# Copy custom nginx config with SPA fallback
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]

