const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Responde com Pong!,utilizado para tempo de resposta do bot e ver se esta online'),
	async execute(interaction) {
		return interaction.reply('Pong!');
	},
};
