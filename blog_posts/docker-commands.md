---
title: "Docker Commands"
date: "2021-02-01"
---

#### Images

backend image docker.io/rdevcd2020/prtbackend:1.0
client image docker.io/rdevcd2020/prtclient:1.0

# Docker commands for my convenience

### Overiding the default start command in docker file

Run the shell in a container to poke around:

```sh
docker run -it <container_name> sh
```

or

```sh
docker run -it<standard> -p <optional_port_mapping> <container-name> <command>
```

### To Add tests to a running container from docker compose

```sh
docker exec -it <container_name> <overide_test_command>
```

### To run docker file from command line with volumes specified

```sh
docker run -t -p <optional_port_mapping> -v </container_root/node_modules> -v <$(pwd):/container_root> <container_name>
```

### Using docker compose to ochestrate multiple containers

```sh
docker-compose up --build<optional_when_changes_made>
docker-compose down
```

#### Interacting with test from docker-compose

```sh
docker attach <container_id>
```

> cannot take inputs for rerunning tests

#### Build a docker image

```sh
docker build . <default>
```

```sh
docker build -f <filename_option>
```

```sh
docker build -t <buildwithtag/tag_name:latest> .
```
