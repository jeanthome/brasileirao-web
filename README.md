# Brasileirão Web

 **```ESTE É UM PROJETO PESSOAL SEM FINS COMERCIAIS, MANTIDO SOMENTE (E APENAS) PARA FINS DE APRENDIZAGEM```**

A ideia desse projeto é desenvolver uma aplicação Web usando [ReactJS](https://reactjs.org/ "ReacJS") + 
[Redux](https://redux.js.org/ "Redux") com o objetivo de aprimorar e desenvolver novas habilidades 
com as bibliotecas em questão. Além disso, um dos requisitos é que esta aplicação mantenha-se 
integrada com meu outro projeto, chamado [API Brasileirão](https://github.com/jeanthome/campeonato-brasileiro), 
de forma que eu possa desenvolver tanto o Backend quanto o Frontend do sistema.

A principal função dessa aplicação é 'alimentar' a API do projeto citado anteriormente. Considerando 
o contexto em que está inserida (Campeonato Brasileiro de Futebol), isso significa que a aplicação deve ser
capaz de:
- Adicionar novos jogadores nos clubes;
- Adicionar partidas em uma rodada;
- Listar as partidas de uma determinada rodada, possibilitando editá-las. O que inclui:
    - Relacionar os jogadores de cada equipe, tanto os titulares quanto os reservas;
    - Inserir os gols da partida;
    - Atribuir cartões aos jogadores;
    - Inserir as substituições que foram realizadas.


## O que já está disponível?

### Cadastro de partidas:
No canto superior direito, há um ComboBox "Cadastro" com dois itens, "Jogador" e "Partida". 
A segunda opção revela o seguinte formulário:
<p align="center">
  <img width="800" height="396" src="https://github.com/jeanthome/brasileirao-web/blob/master/screenshots/cadastro-partida.png">
</p>
***

### Listar as partidas de uma determinada rodada:
Após serem cadastradas, as partidas podem ser listadas acessando o item "Lista de Jogos", no menu superior. Nessa página é 
possível visualizar todas as partidas cadastradas em uma rodada específica, como mostrado abaixo:

<p align="center">
  <img width="500" height="632" src="https://github.com/jeanthome/brasileirao-web/blob/master/screenshots/lista-jogos.png">
</p>   
***

