const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config(); // Carrega as variáveis do arquivo .env


const app = express();
const port = 3000;

// Middleware para processar JSON no corpo das requisições
app.use(bodyParser.json());

// Conectar ao MongoDB (substitua pela sua URI)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Conectado ao MongoDB Atlas com sucesso!');
  });
  
  mongoose.connection.on('error', (err) => {
    console.error('Erro ao conectar ao MongoDB Atlas:', err);
  });

// // Definir um modelo de dados para armazenar as interações
// const InteractionsSchema = new mongoose.Schema({
//   userId: String,
//   date: String,
//   messageCount: { type: Number, default: 0 },
// });

// const Interaction = mongoose.model('Interaction', InteractionsSchema);

// // Função para verificar se o usuário excedeu o limite de mensagens
// async function checkMessageLimit(userId) {
//   const today = new Date().toISOString().split('T')[0]; // Formato YYYY-MM-DD

//   // Verificar o número de mensagens do usuário hoje
//   let userInteraction = await Interaction.findOne({ userId, date: today });

//   if (!userInteraction) {
//     // Se não existir, cria um novo registro para o usuário no dia atual
//     userInteraction = new Interaction({ userId, date: today });
//     await userInteraction.save();
//   }

//   return userInteraction;
// }

// // Endpoint do Webhook para receber mensagens da Chatvolt
// app.post('/webhook', async (req, res) => {
//   const { userId, message } = req.body;

//   // Verifica se o usuário atingiu o limite de mensagens
//   const userInteraction = await checkMessageLimit(userId);

//   const userLimit = 10; // Defina o limite de mensagens conforme o plano do usuário

//   if (userInteraction.messageCount >= userLimit) {
//     // Se o limite foi atingido, não permite mais mensagens
//     return res.status(200).send({
//       message: 'Você atingiu o limite diário de mensagens.',
//       allowReply: false,
//     });
//   }

//   // Caso contrário, incrementa o contador de mensagens
//   userInteraction.messageCount++;
//   await userInteraction.save();

//   // Responde com a mensagem do agente ou qualquer outro comportamento desejado
//   return res.status(200).send({
//     message: 'Aqui está a resposta do agente!',
//     allowReply: true,
//   });
// });

// // Inicializa o servidor
// app.listen(port, () => {
//   console.log(`Servidor rodando em http://localhost:${port}`);
// });
