const { SlashCommandBuilder } = require('discord.js');

module.exports ={
    data: new SlashCommandBuilder()
        .setName('heyshiba')
        .setDescription('se chamou vai ouvir'),
    async execute(interaction) {
        return interaction.reply(`WOOF,WOOF,WARF,WOOOOOOOOOOOOOOOOOOOO`);
        
    },
};