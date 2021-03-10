const Discord =require("discord.js");

const Client = new Discord.Client;

const prefix = "//";



Client.on("ready", () => {
    Client.user.setActivity('//help', { type: 'LISTENING' });
    console.log("|[--bot operationnel----]|");
    console.log("|[--bot by Volgar#4106--]|");
    console.log("... BOT-READY");
});

Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type =="dm") return;


    //,//help
    if(message.content == prefix + "help"){
        message.channel.send("__ LISTE COMMANDES : __");
        message.channel.send("|--------//help-------|");
        message.channel.send("** -  **" +  "//ip = IP serveur");
        message.channel.send("** -  **" +  "//creator = créateur du BOT");
        message.channel.send("** -  **" +  "//recrutement = formulaire de recrutement");
        message.channel.send("** -  **" +  "__ SOON... __");
       

   }
    //,//recrutement
    if(message.content == prefix + "recrutement"){
    message.channel.send("Formulaire de recrutement: https://forms.gle/NCtWeCAJcTA8G8Hi8");

   }
   //,//ip
   if(message.content == prefix + "ip"){
    message.channel.send("IP= Itineria.aternos.me");

   }
    //,//creator
    if(message.content == prefix + "creator"){
    message.channel.send("BOT by Volgar#4106");

   }
    //,//texte | ADMIN
    if(message.content == prefix + "texte"){
    message.channel.send("Bonjour @everyone, le recrutement pour le Staff d'Itineria est toujours ouvert, vous pouvez poster votre candidature dans le formulaire ci-joint. Lien: https://forms.gle/NCtWeCAJcTA8G8Hi8");
}});



Client.login("process.env.TOKEN");
