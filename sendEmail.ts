// 1. Importa e carrega as variáveis do .env
import { config } from "dotenv";
config();

import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

// 2. Validações básicas
const REGION = process.env.AWS_REGION;
const SOURCE_EMAIL = process.env.SES_SOURCE_EMAIL;
const DEST_EMAIL = process.env.SES_DESTINATION_EMAIL;

if (!REGION) {
  throw new Error("⚠️ Faltando AWS_REGION no .env");
}
if (!SOURCE_EMAIL) {
  throw new Error("⚠️ Faltando SES_SOURCE_EMAIL no .env");
}
if (!DEST_EMAIL) {
  throw new Error("⚠️ Faltando SES_DESTINATION_EMAIL no .env");
}

async function sendTestEmail() {
  // 3. Instancia o client com a região
  const client = new SESClient({ region: REGION });

  const params = {
    Destination: {
      ToAddresses: [DEST_EMAIL],
    },
    Message: {
      Body: {
        Text: {
          Charset: "UTF-8",
          Data: "Olá! Este é um e‑mail de teste enviado via AWS SES.",
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Teste SES com TypeScript",
      },
    },
    Source: SOURCE_EMAIL,
  };

  try {
    const command = new SendEmailCommand(params);
    const response = await client.send(command);
    console.log("📬 E‑mail enviado! MessageId:", response.MessageId);
  } catch (err) {
    console.error("❌ Erro ao enviar e‑mail:", err);
  }
}

sendTestEmail();
