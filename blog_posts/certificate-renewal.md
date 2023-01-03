---
title: "Certbot Certificate Renewal"
date: "2021-03-09"
---

# Certbot renewal after failed payment

> ssh into the server

> stop the server running:

```sh
teardown.sh
```

> run :

```sh
sudo certbot certonly --standalone
```

> Copy the new files; `copy cert/fullchain` and `copy cert/private` into the `.env` file

> After saving the files run:

```sh
sudo docker-compose up -d
```
