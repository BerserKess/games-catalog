const addGame = document.getElementById("add-game");
const gameCardContainer = document.getElementById("games");
let allGames = [
	{
		name: "Hogwarts Legacy",
		cover: "https://image.api.playstation.com/vulcan/ap/rnd/202011/0919/cDHU28ds7cCvKAnVQo719gs0.png",
	},
	{
		name: "Days Gone",
		cover: "https://cdn-products.eneba.com/resized-products/bwF96S6ImbL-4l9gRyo8Nvd-oWcbGItWyfaMC_0A7sk_350x200_1x-0.jpeg",
	},
];

// RESETAR INPUT
function reset() {
	document.getElementById("game-name").value = "";
	document.getElementById("game-img").value = "";
}

// CRIAR CARTÃO COM JOGOS ADICIONADOS
function createGameCard(game) {
	const gameDiv = document.createElement("div");
	gameDiv.classList.add("game-card");
	const gameCover = document.createElement("img");
	gameCover.src = game.cover;
	gameCover.classList.add("game-cover");
	const gameName = document.createElement("article");
	gameName.innerText = game.name;
	gameName.classList.add("game-name");

	gameDiv.append(gameCover, gameName);
	gameCardContainer.append(gameDiv);
}

// EXIBIR OS JOGOS NA TELA
allGames.forEach((game) => {
	createGameCard(game);
});

// CAPTURAR INFORMAÇÕES DO INPUT PARA CRIAR OS CARTÕES DE JOGOS
function getGame() {
	const nameElement = document.getElementById("game-name").value;
	const coverElement = document.getElementById("game-img").value;
	let teste = false;
	const game = {
		name: nameElement,
		cover: coverElement,
	};
	// console.log(allGames);

	// VERIFICAR SE O JOGO JA ESTÁ NA LISTA
	allGames.forEach((game) => {
		if (game.cover === coverElement) {
			teste = true;
		}
	});

	if (teste) {
		alert("Jogo já inserido");
		reset();
	} else {
		allGames.push(game);
		createGameCard(game);
		reset();
	}
}

addGame.addEventListener("click", getGame);
