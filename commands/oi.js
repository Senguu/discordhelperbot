const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('oi')
		.setDescription('Oi!'),
	async execute(interaction) {
		return interaction.reply(`Oi ${interaction.user.username}!!!!!`);
	},
};

