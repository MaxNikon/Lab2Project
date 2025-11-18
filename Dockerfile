FROM node:22.14.0-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]

## To Build: docker build -t lab2-app .
## To run: docker run -it -p 5173:5173 -v $(pwd):/app --rm lab2-app
## Si tienes docker-compose instalado, usa docker compose up -d