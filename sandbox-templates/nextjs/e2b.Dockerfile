# You can use most Debian-based base images
FROM node:21-slim

# Install curl
RUN apt-get update && apt-get install -y curl && apt-get clean && rm -rf /var/lib/apt/lists/*

# Prevent Next.js from trying to open a browser in the sandbox
ENV BROWSER=none
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

COPY compile_page.sh /compile_page.sh
RUN chmod +x /compile_page.sh

# Install dependencies and customize sandbox
WORKDIR /home/user/nextjs-app

RUN npx --yes create-next-app@15.4.6 . --yes

RUN npx --yes shadcn@2.10.0 init --yes -b neutral --force
RUN npx --yes shadcn@2.10.0 add --all --yes

# Move the Nextjs app to the home directory and remove the nextjs-app directory
RUN mv /home/user/nextjs-app/* /home/user/ && rm -rf /home/user/nextjs-app
