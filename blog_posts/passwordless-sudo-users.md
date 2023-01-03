---
title: "No Password Sudo Users"
date: "2021-03-13"
---

# Running deploy scripts in the remote host

> Running sudo code with a passowrd is tedious I have decided to disable password for the remote user

#### SSH into the server as the root user then run:

```sh
sudo visudo
```

> Look for a line that says

```visio
%sudo ALL=(ALL:ALL) ALL
```

> Change it to :

```visio
%sudo   ALL=(ALL:ALL) NOPASSWD:ALL
```

> This ensures that all sudo users can run sudo without a password
