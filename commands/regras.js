const { SlashCommandBuilder } = require('discord.js');

module.exports ={
    data: new SlashCommandBuilder()
        .setName('regras')
        .setDescription('Regras do Server'),
    async execute(interaction) {
        return interaction.reply(`Sejam bem vindos aos nosso vale de lágrimas no discord!
        É um espaço só nosso para expor dúvidas, colocar resoluções de exercícios e dicas de cursos e etc.
        REGRAS
        - Espaço para os NOVOS alunos SOMENTE
        - Vamos nos respeitar mutuamente
        - Não importa sexo, visão política, time de futebol ou religião, somos todos alunos, o que importa é o conhecimento
        - Sem tretas
        - Sobre bots e afins falar com <@396071633254875156> ou <@1001291020824227932>, estamos aqui para te ajudar!!
        - Sugestões de melhoria para o server? Falar com <@396071633254875156>,<@1001291020824227932> ,<@1064717232262881310> ou <@950460115885097010>
        - Esperamos que você se divirta e aprenda muito por aqui!!!!`);
        
    },
};