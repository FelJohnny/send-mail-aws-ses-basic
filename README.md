# send-mail-aws-ses-basic

> Repositório de exemplo em TypeScript para validar o envio de e‑mails usando AWS SES.

---

## 📋 Descrição

Este projeto demonstra uma implementação mínima em TypeScript que:
- Carrega variáveis de ambiente de um arquivo `.env`
- Inicializa o cliente AWS SES
- Envia um e‑mail de teste para um destinatário configurado
- Exibe no console o `MessageId` em caso de sucesso ou o erro em caso de falha

---

## 🚀 Pré-requisitos

- Node.js >= 16  
- npm ou yarn  
- Conta AWS com SES configurado (domínio/endereço verificado e em modo _production_ ou com e‑mails de destino verificados, se estiver em _sandbox_)  
- Permissões IAM para `ses:SendEmail`

---

## 🛠️ Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/FelJohnny/send-mail-aws-ses-basic.git
   cd send-mail-aws-ses-basic
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

---

## 🔧 Configuração

1. Crie um arquivo `.env` na raiz do projeto, copiando o modelo abaixo:

   ```env
   AWS_ACCESS_KEY_ID=SEU_ACCESS_KEY_ID
   AWS_SECRET_ACCESS_KEY=SEU_SECRET_ACCESS_KEY
   AWS_REGION=us-east-1

   # E‑mails (devem estar verificados no SES se estiver em sandbox)
   SES_SOURCE_EMAIL=remetente@seudominio.com.br
   SES_DESTINATION_EMAIL=destinatario@seudominio.com.br
   ```

2. Ajuste as variáveis conforme suas credenciais e domínios.

---

## ⚙️ Uso

Para enviar o e‑mail de teste, basta rodar:

```bash
npx ts-node sendEmail.ts
```

Você deverá ver no console:

```
📬 E‑mail enviado! MessageId: 010101xxxxxxxxxxxxxxxx
```

Em caso de erro, a pilha será exibida para diagnóstico:

```
❌ Erro ao enviar e‑mail: Error: ...
```

---

## 📂 Estrutura

```
.
├── sendEmail.ts      # Script principal de envio
├── .env.example      # Modelo de variáveis de ambiente
├── package.json
├── tsconfig.json
└── README.md
```

---

## ✅ Contribuição

1. Faça um _fork_ do projeto  
2. Crie uma branch feature: `git checkout -b feature/nome-da-feature`  
3. Faça suas alterações e commit: `git commit -m "feat: descrição da feature"`  
4. Envie para a branch original: `git push origin feature/nome-da-feature`  
5. Abra um _Pull Request_

---

## 📄 Licença

MIT © FelJohnny
