---
title: "Configure Remote That Points To Upstream"
date: "2021-03-14"
---

#Syncing a remote repository

- First fork the reopsitory
- Then clone the repository to my local machine

#### Configure a remote for a fork

- Confirm the remotes by running `git remote -v`

- Specify an new remote upsteram that would be synced with the fork

```sh
git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git
```

- Verify the new upstream repository you've specified for your fork.

```sh
git remote -v
```
