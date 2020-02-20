---
date: 2020-20-02
title: "Pós Instalação do Windows 10"
description: "Utilização do WSL/WSL2 como ambiente de desenvolvimento Node no Windows 10"
category: Misc
background: "grey"
---

## 1. Chocolatey

Inicie o Powerswhell em modo administrador e execute:

> `
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
`

## 2. Visual Studio Code, Firacode Font, Postman, Simplenote, Git, DevDocs, Discord, Java, Gitkraken, Sourcetree e Adobe Reader e 7zip

Inicie o Powerswhell em modo administrador e execute:

> ` cinst vscode firacode postman simplenote git devdocs-app discord jre8 gitkraken sourcetree adobereader 7zip -yes --all`

Nota:  **cinst** é a abreviação do comando `choco install`

## 3. Habilitando o WSL

Inicie o PowerShell em modo administrador e execute:

- Windows Subsystem for Linux
> `dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart`

- Virtual Machine Platform
> `dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart`

## 4. Instalando o Ubuntu 18.04

Acesse o link da Store e faça o download

> `https://www.microsoft.com/store/apps/9N9TNGVNDL3Q`

Após o download, inicie o Ubuntu 18.04 para continuar a instalação. Durante o processo será solicitado o nome de usuário e senha para uso no Ubuntu.

## 5. Habilitando o WSL2 (Opcional)

> Nota: O WSL 2 só está disponível no Windows 10 Builds 18917 ou superior

Definindo a distro para ser usada no WSL2. No meu caso é o Ubuntu. Para saber qual o nome da sua Distro execute o comando `wsl -l` para listar

Inicie o PowerShell em modo administrador e execute:

> `wsl --set-version Ubuntu-18.04 2`

Após a execução do comando aguarde a conversão da VM para uso no modo WSL2. Você pode retornar ao WSL 1 a qualquer momento executando o mesmo comando acima, mas substituindo “2” por “1”.

Para deixar o WSL 2 como padrão, você poderá fazê-lo com este comando:

> `wsl --set-default-version 2`

## 6. Ambiente Node no Ubuntu

###  Acesse o bash do Linux

No terminal de sua preferencia acesse o bash com o comando:

> `wsl`

Recomendo o *Windows Terminal Preview* ele tem suporte a abas e várias configurações. 

###   Instalando o Node.js com NVM

Antes de fazer a instalação do NVM iremos instalar um pacote chamado build-essential que é um metapacote que reúne diversas aplicações para compilar/instalar aplicações com base no seu código fonte.

> `sudo apt update`

> `sudo apt install build-essential -y`

Por fim, vamos proceder a instalação do NVM usando o seguinte comando no terminal (no momento em que estou escrevendo esse artigo estou utilizando a versão 0.35.2, visite o site do projeto para checar a versão mais atual)

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash

## 7. Configurações do Terminal de desenvolvimento com Oh My ZSH

### Instale o ZSH 
> `sudo apt install zsh`

### Execute o script abaixo para instalar o Oh My Zsh

$ sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

Durante a instalação será perguntado se você deseja que o shell padrão seja o ZSH

> `Time to change your default shell to zsh:
Do you want to change your default shell to zsh? [Y/n] Y`

Tecle Y, informe sua senha de usuário e seja feliz.

### Tema Spaceship

Existem vários temas disponíveis mas o Spaceship é o que eu uso. Ele nos possibilita exibir informações úteis no terminal, como a versão do Node, tempo de execução de comandos e etc.

#### Clonando o repo do Spaceship

> `git clone https://github.com/denysdovhan/spaceship-prompt.git "$ZSH_CUSTOM/themes/spaceship-prompt"`

#### Crie um link simbólico para o arquivo do tema do Spaceship na pasta dos temas do Oh My Zsh

> `ln -s "$ZSH_CUSTOM/themes/spaceship-prompt/spaceship.zsh-theme" "$ZSH_CUSTOM/themes/spaceship.zsh-theme"`


Abra o arquivo ~/.zshrc e altere a variável ZSH_THEME

> `ZSH_THEME="spaceship"`

Agora reinicie o terminal

#### Configurando Spaceship

No fim do arquivo ~/.zshrc insira o seguinte conteúdo:

SPACESHIP_PROMPT_ORDER=(

  user          # Username section

  dir           # Current directory section

  host          # Hostname section

  git           # Git section (git_branch + git_status)

  hg            # Mercurial section (hg_branch  + hg_status)

  exec_time     # Execution time

  line_sep      # Line break

  vi_mode       # Vi-mode indicator

  jobs          # Background jobs indicator

  exit_code     # Exit code section

  char          # Prompt character

)

SPACESHIP_USER_SHOW=always
SPACESHIP_PROMPT_ADD_NEWLINE=true
SPACESHIP_CHAR_SYMBOL="🚀  %F{220}❯"
SPACESHIP_CHAR_SUFFIX=" "
SPACESHIP_DIR_SUFFIX=" 📡  %F{33}$(ip addr show dev eth0 | grep "inet " | cut -d" " -f6) "

### Added by Zinit's installer
if [[ ! -f $HOME/.zinit/bin/zinit.zsh ]]; then
    print -P "%F{33}▓▒░ %F{220}Installing DHARMA Initiative Plugin Manager (zdharma/zinit)…%f"
    command mkdir -p "$HOME/.zinit" && command chmod g-rwX "$HOME/.zinit"
    command git clone https://github.com/zdharma/zinit "$HOME/.zinit/bin" && \
        print -P "%F{33}▓▒░ %F{34}Installation successful.%f" || \
        print -P "%F{160}▓▒░ The clone has failed.%f"
fi
source "$HOME/.zinit/bin/zinit.zsh"
autoload -Uz _zinit
(( ${+_comps} )) && _comps[zinit]=_zinit
### End of Zinit installer's chunk

zplugin light zdharma/fast-syntax-highlighting
zplugin light zsh-users/zsh-autosuggestions
zplugin light zsh-users/zsh-history-substring-search
zplugin light zsh-users/zsh-completions
zplugin light buonomo/yarn-completion


#### Plugins do ZSH

> `sh -c "$(curl -fsSL https://raw.githubusercontent.com/zdharma/zplugin/master/doc/install.sh)"`


## 8. Heroku CLI

`$ sudo wget -q — https://toolbelt.heroku.com/install-ubuntu.sh`
`$ chmod +x install-ubuntu.sh`
`$ sudo ./install-ubuntu.sh`


## 9. Docker

Install the latest version of Docker from the official Docker repository:
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

Add the Docker repository to APT sources
sudo add-apt-repository “deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable”

Update the package database
sudo apt-get update

Install Docker
sudo apt-get install -y docker-ce

sudo usermod -aG docker

sudo service docker start

docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres


## 9.  ZSH Bash no Hyper...

Inclua a informação `bash -c zsh` no início do arquivo *.bashrc
