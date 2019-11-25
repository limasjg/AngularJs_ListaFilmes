angular.module("Filmes").controller("FilmesController", function($scope){
	$scope.titulo = "Filmes que já assisti";

	$scope.filmes = [
		{
			id: "123123123",
			titulo: "Deadpool",
			ano: 2016,
			produtora: "Fox",
			sinopse: "Baseado no anti-herói não convencional da Marvel Comics, Deadpool conta a história da origem do ex-agente das Forças Especiais que se tornou o mercenário Wade Wilson. Depois de ser submetido a um desonesto experimento que o deixa com poderes de cura acelerada, Wade adota o alter ego de Deadpool. Armado com suas novas habilidades e um senso de humor negro e distorcido, Deadpool persegue o homem que quase destruiu sua vida.",
			cartaz: "https://upload.wikimedia.org/wikipedia/pt/f/f3/Deadpool_cartaz.jpg"
		},
		{
			id: "321321321",
			titulo: "X-MEN: APOCALYPSE",
			ano: 2016,
			produtora: "Fox",
			sinopse: "O ancestral dos mutantes, En Sabah Nur, retorna com planos de mergulhar o mundo em um apocalipse para garatir a supremacia. Sequência de \"X-Men: Dias de um Futuro Esquecido\".",
			cartaz: "https://http2.mlstatic.com/poster-cartaz-x-men-apocalipse-b-40x60cm-D_NQ_NP_854047-MLB25905531252_082017-F.jpg"
		}
	];

	$scope.novoFilme = {};

	$scope.removerFilme = function(id) {
		angular.forEach($scope.filmes, function(filme, i){
			if(filme.id == id){
				$scope.filmes.splice(i, 1);
			}
		});
	}

	$scope.adicionarFilme = function(){
		var filme = angular.copy($scope.novoFilme);
		filme.id = Date.now();
		$scope.filmes.push(filme);

		$scope.novoFilme = {};
	}
});