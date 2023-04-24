const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('about')
		.setDescription('sobre o bot'),
	async execute(interaction) {
		return interaction.reply(`O bot Shiba é feito pelo <@396071633254875156> juntamente com <@1001291020824227932>,a ideia inicial era ser um bot de meme com o audio do "rojão" e acabou virando um bot helper fofinho com cara de shiba.
        Esse bot está sendo feito inteiramente em JS juntamente com o Node.js e o Discord.js.
        Mais para a frente será implementado comandos melhores e mais otimizados,só peço que tenham paciencia com nosso amigo Shiba.
        Quem disse que cachorro velho não aprende novos truques né Shiba?
        "WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORF WOOF WOOF WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO"`);
	},
};
