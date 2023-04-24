const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Use para banir alguem do server')
		.addUserOption(option =>
			option
				.setName('usuario')
				.setDescription('A pessoa a se banir')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('razão')
				.setDescription('razão do banimento'))
		.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
		.setDMPermission(false),

async execute(interaction) {
		const target = interaction.options.getMember('usuario');
		const reason = interaction.options.getString('razão') ?? 'sem razão nenhuma';

		await interaction.reply(`Banindo ${target.username} por: ${reason}`);
		await interaction.guild.members.ban(target);
	},
};