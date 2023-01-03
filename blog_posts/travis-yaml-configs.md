---
title: "Travis Configs And Commands"
date: "2021-02-15"
---

## Travis CI

#### Exit react tests immediatly by setting CI=true for travis fils

```sh
docker run -e CI=true rdevcd2020/prtclient:1.0 yarn test --coverage
```

#### SSH into digital ocean

> Then, you can use encrypt command to encrypt data (This example assumes you are running the command in your project directory. If not, add -r owner/project):

```sh
travis encrypt SOMEVAR="secretvalue"
```

> You can delete the source file after running the encrypt comand

#### Using the ip of the droplet as a travis variable

> This will prompt a connection confirmation. Best to use the raw ip in the travis.yml file under :

```yaml
addons: ssh_know_host: keys
```

#### Passing the server commands after the `ssh user@server_ip` command

> There are two ways to do this:

```sh
user@server_ip < " other commands to be executed"
```

> Or I can create a seperate shell script and link it:

```sh
user@server_ip "bash -s" < other_shell_script.sh
```

#### Note in the other shell script, some commands would need to be wrapped in eval e.g.

```sh
eval "$(docker -v >> somefile.txt)"
```

> Here, any other command after the exit command is not logged to the travis command line
> Because of this, I prefer the one line method, as I can log values after I exit the servers
