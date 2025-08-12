# Guia - Comandos Git

## Configurações iniciais
- Definir meu nome de usuário: ```git config --global user.name "Laura Eschembach"```

- Definir meu email: ```git config --global user.email "email@email.com"```

## Inicialização
- Iniciar repositório: ```git init``` 

- Clonar repositório: ```git clone link```

## Verificar status e histórico
- Ver arquivos modificados não rastreados que estão prontos para o commit: ```git status```

- Ver lista de commits feitos: ```git log```

- Ver as alterações feitas no código: ```git diff```

## Trabalhando repositórios remotos
- Conectar repositório local a remoto: ```git remote add origin <link>```

- Envia commits para repositório remoto: ```git push origin <branch>```

- Puxa mudanças do repositório remoto para o local: ```gitpull origin <branch>```

## Branches
- Criar branch: ```git branch <nomeDaBranch>```

- Mudar de branch: ```git checkout <nomeDaBranchDestino>``` 

- Criar branch e mudar diretamente pra ela: ```git checkout -b <nomeDaNovaBranch>```

- Juntar branch atual com outra: ```git merge nomeDaBranch```

- Guardar mudanças temporariamente sem fazer commit: ```git stash```

- Restaurar mudanças guardadas: ```git stash pop```