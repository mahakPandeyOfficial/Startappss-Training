# 🛠️ Git Commands: From Basic to Advanced with Use Cases

## 🟢 Basic Git Commands

### 1. `git init`

- **Use Case**: Initialize a new Git repository in your project folder.

```bash
git init
```

### 2. `git clone <repository-url>`

- **Use Case**: Create a copy of an existing repository.

```bash
git clone https://github.com/user/repo.git
```

### 3. `git status`

- **Use Case**: View the current status of the working directory and staging area.

```bash
git status
```

### 4. `git add <file>` / `git add .`

- **Use Case**: Stage file(s) to be committed.

```bash
git add index.html
git add .  # Stages all changes
```

### 5. `git commit -m "message"`

- **Use Case**: Commit staged changes with a message.

```bash
git commit -m "Initial commit"
```

### 6. `git log`

- **Use Case**: View commit history.

```bash
git log
```

---

## 🟡 Intermediate Git Commands

### 7. `git branch`

- **Use Case**: List, create, or delete branches.

```bash
git branch         # List branches
git branch dev     # Create new branch
```

### 8. `git checkout <branch>`

- **Use Case**: Switch to a different branch.

```bash
git checkout dev
```

### 9. `git merge <branch>`

- **Use Case**: Merge a branch into the current branch.

```bash
git merge dev
```

### 10. `git remote -v`

- **Use Case**: View remote repositories.

```bash
git remote -v
```

### 11. `git push origin <branch>`

- **Use Case**: Push local branch changes to the remote repository.

```bash
git push origin main
```

### 12. `git pull`

- **Use Case**: Fetch and merge changes from the remote repo into your local branch.

```bash
git pull
```

### 13. `git fetch`

- **Use Case**: Fetch changes from remote without merging.

```bash
git fetch
```

---

## 🔵 Advanced Git Commands

### 14. `git stash`

- **Use Case**: Temporarily save changes that are not ready to commit.

```bash
git stash
```

### 15. `git stash apply`

- **Use Case**: Reapply stashed changes.

```bash
git stash apply
```

### 16. `git rebase <branch>`

- **Use Case**: Reapply commits on top of another base branch.

```bash
git checkout feature
git rebase main
```

### 17. `git reset --hard <commit>`

- **Use Case**: Reset working directory and index to a specific commit.

```bash
git reset --hard abc123
```

### 18. `git revert <commit>`

- **Use Case**: Revert a specific commit (creates a new commit to undo).

```bash
git revert abc123
```

### 19. `git cherry-pick <commit>`

- **Use Case**: Apply a specific commit from another branch.

```bash
git cherry-pick abc123
```

### 20. `git tag <tagname>`

- **Use Case**: Mark a specific commit with a tag (e.g., for a release).

```bash
git tag v1.0
```

### 21. `git bisect`

- **Use Case**: Use binary search to find the commit that introduced a bug.

```bash
git bisect start
```

### 22. `git config`

- **Use Case**: Configure Git settings.

```bash
git config --global user.name "Your Name"
git config --global user.email "your@example.com"
```

---

## 📝 Bonus: Helpful Git Aliases

```bash
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.cm "commit -m"
```

---

## ✅ Tips

- Use `.gitignore` to exclude files/folders from version control.
- Always pull before pushing.
- Create meaningful commit messages.
