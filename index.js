const Discord = require('discord.js');
const client = new Discord.Client();

const prefixCmd = '!';

client.on('ready', () => {
 console.log('Bot Démarré avec succes! Développé par:WanDlay_#3389 ');
});    

client.on('message', (message) => {
    if(message.content.toLowerCase() === 'douaneon') {
       message.channel.send('Bonjour a tous . La douane est ouverte || https://cdn.discordapp.com/attachments/814953035531812945/820397561654280212/recrutementon.png || ')
    }
    else if(message.content.toLowerCase() === 'serveur') {
        message.channel.send('Le nom du serveur est: ' + message.guild.name);
     }
   });

client.on("message", msg => {
      if (msg.content === "ping") {
          msg.channel.send("pong");
      }
  });



client.on("message", msg => {
   if (msg.content.toLowerCase() === "bot") {
       msg.channel.send("Bot créer par : WanDlay_#3389");
   }
});

//Mess Auto staff 

client.on("message", msg => {
   if (msg.content.toLowerCase() === "mikasa") {
       msg.channel.send("Mikasa : <@520127807917916160> (beatmaker) ");
   }
});

client.on("message", msg => {
   if (msg.content.toLowerCase() === "wandlay_") {
       msg.channel.send("WanDlay_ : <@290475478316351490> (Developpeur) ");
   }
});

client.on("message", msg => {
   if (msg.content.toLowerCase() === "yroz") {
       msg.channel.send("Yroz : <@812976339131957248> (Fondateur) ");
   }
});

client.on("message", msg => {
   if (msg.content.toLowerCase() === "nbtm") {
       msg.channel.send("Nbtm : <@557923791804694548> (Developpeur Discord) ");
   }
});

client.on("message", msg => {
   if (msg.content.toLowerCase() === "finmo") {
       msg.channel.send("FinMo : <@543547990682632192> (Administrateur) ");
   }
});

client.on("message", msg => {
   if (msg.content.toLowerCase() === "dark") {
       msg.channel.send("DarKsn1p : <@330639826187714562> (Modérateur) ");
   }
});

client.on("message", msg => {
   if (msg.content.toLowerCase() === "blue side") {
       msg.channel.send("Bot Officiel : <@820380920221270046> (Bot) ");
   }
});




client.login(process.env.TOKEN);





client.on("message", msg => {

   // Si le message n'est pas préfixé ou qu'il vient d'un autre bot, nous l'ignorons
   if(!msg.content.startsWith(prefixCmd) || msg.author.bot) return

   // Si nous arrivons jusque ici, alors c'est une commande

   // Nous convertissons la commande sous forme de tableau en prenant soin de retirer le préfixe
   const args = msg.content.slice(prefixCmd.length).trim().split(/ +/);
   // Extraction du premier élément de 'args', ce qui correspond à la commande
   const command = args.shift().toLowerCase();

   // À ce stade, args est un tableau ne contenant que les arguments étant donné que la commande a été extraite de celui-ci

   // On se sert maintenant de la varibale 'command' pour le test
   if (command === "staff") {
       msg.reply("Un Staff arrive <@820405713955454997>");
   }

});

