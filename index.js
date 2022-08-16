
const { Client, Intents } = require('discord.js');

const discord = require('discord.js')

var users = [];

const client = new discord.Client({
    intents: [0, 0, 0],
  });


client.on('message', message => {
    let userName = message.author.username
    let wallet = {};

    if(message.content == "!create-wallet"){
      let key = 0;
      users.forEach(user=>{
        
        if(user.name == userName){
          message.reply("Ya formas parte del capitalismo! Puedes ver tu balance con: !balance");
          key = 1;
        }
        
       })
       if(key == 0){

        wallet = {
          name: userName,
          money: 0
         };
   
         users.push(wallet);
   
         message.reply("Bienvenid@ al capitalismo!");
      }
      
    
     users.forEach(user=>{
      message.reply(user.name); //Dsp borrarlo
     });

    }else if(message.content == "!balance"){

      users.forEach(user=>{
        if(user.name == userName){
          message.reply("Tu balance es de " + user.money);
        }
       });
    }else if(message.content == "!daily"){

      users.forEach(user=>{
        if(user.name == userName){
          if(user.name == userName){
            message.reply("Obtienes 5 monedas");
            user.money += 5;
            message.reply("Tu balance es de " + user.money);
          }
        }
       });
 }else if(message.content.includes("!transfer")){
    users.forEach(user=>{
      if(user.name == userName){
        user.money -= 5;
        userName = message.content.slice(10);
        users.forEach(user=>{
          if(user.name == userName){
            user.money += 5;
          }
        });
        
        message.reply("Le acaba de trasferir 5 monedas a un usuario") 

      }
     });

  }
});

// Bot listenning messages
client.on('GUILDS', GUILD_MESSAGES => {

});

client.login("MTAwNzc2NzI3NzQwMTI4ODc5NA.GZGGXr.e1_S4T3fPVnIZhmkCzIQxmqiXnk_kYLo3iU5Kk")



