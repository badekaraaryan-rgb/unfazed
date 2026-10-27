require('dotenv').config();
const http=require('http');const mongoose=require('mongoose');const app=require('./src/app');const {attachChat}=require('./src/sockets/chatSocket');
const server=http.createServer(app);attachChat(server);const PORT=process.env.PORT||5000;
async function start(){if(!process.env.MONGO_URI)throw new Error('Configure MONGO_URI in .env');await mongoose.connect(process.env.MONGO_URI);server.listen(PORT,()=>console.log(`Unfazed API on http://localhost:${PORT}`));}
start().catch(e=>{console.error(e.message);process.exit(1)});
