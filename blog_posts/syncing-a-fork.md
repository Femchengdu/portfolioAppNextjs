---
title: "Syncing A Forked Repo"
date: "2021-03-15"
---

- Open Terminal

- cd into the local repository

- Fetch the branches and their respective commits from the upstream repository. Commits to `BRANCHNAME` will be stored in the local branch `upstream/BRANCHNAME`.

```sh
git fetch upstream
```

- Check out your fork's local default branch - in this case, we use `main`.

```sh
git checkout main
```

- Merge the changes from the upstream default branch - in this case, `upstream/main` - into your local default branch.

```sh
git merge upstream/main
```
