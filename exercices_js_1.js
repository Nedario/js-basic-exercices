/**
* Exercices sur les variables et les fonctions
**/

// ----
// Ecrire une fonction 'hello' qui affiche dans la console "Hello World!"

function hello() {

	console.log('hello world');
	
};	

// ----
// écrire des fonctions suivante:

// addition(a, b)
function addition(a, b) {
	// return a + b; => on peut ecrire cette operation directement dans le return.
	a = 5;
	b = 12;
	c = a + b;
	console.log(c);

};

// soustraction(a, b)
function soustraction(a, b) {
	
		a = 5;
		b = 12;
		c = a - b;
		console.log(c);
	
	};

// multiplication(a, b)
function multiplication(a, b) {
	
		a = 5;
		b = 12;
		c = a * b;
		console.log(c);
	
	};

// division(a, b)
function division(a, b) {
	
		a = 6;
		b = 12;
		c = a / b;
		console.log(c);
	
	};

// concatenation(str1, str2)
function concatenation(str1, str2){
	str1 = 'hello';
	str2 = 'world';
	str = str1+str2;

	console.log(str);
}

// moyenne(a1, a2, a3)
function moyenne(a1, a2, a3){
	a1 = 12;
	a2 = 3;
	a3 = 58;
	a=((a1+a2+a3)/3);

	console.log(a);
}

// Chaque fonction devra effectuer l'opération correspondant à son nom, et renvoyer le résultat. 
// Celui-ci sera stocké dans une variable, qui sera ensuite affichée dans la console
// ----
// Déclarer deux variables a et b, de valeurs respectives 5 et 12
// A l'aide d'une variable intermédiaire, inverser les deux valeurs pour que a ait pour valeur 12 et b pour valeur 5
// Afficher le résultat de a et b dans la console sous la forme d'une phrase: "A vaut : xxx et B vaut yyy"
var a, b;
// WRITE YOUR CODE HERE
function invert(a,b){
	a = 5;
	b = 12;
	c = 0;

	c=a;
	a=b;
	b=c;

	console.log('A vaut : '+a);
	console.log('B vaut : '+b);
}

// ----
// Ecrire une fonction 'isDivisibleBy5' qui reçoit un nombre en paramètre, et qui vérifie que ce nombre est divisible par 5.
// Cette fonction doit renvoyer un booléen
var isDivisibleBy5 = function(x) {
	// WRITE YOUR CODE HERE
	var x;

	if(x%5 == 0)
		console.log(true);
	else
		console.log(false);
};

// ----
// Ecrire une fonction 'isDivisibleByN' qui reçoit deux nombres entiers x et n, et qui vérifie si x est divisible par n.
// Cette fonction doit renvoyer un booléen
function isDivisibleByN(x, n) {
	// WRITE YOUR CODE HERE
	var x;
	var n;

	if(x%n == 0)
		console.log(true);
	else
		console.log(false);
};

// ----
// Générer un nombre décimal compris entre 0 et 1, et le stocker dans une variable
// Changer la valeur de cette variable pour qu'elle vaille le nombre initial arrondi à 2 décimales
// Afficher dans la console
function genereEtArrondit() {
	// WRITE YOUR CODE HERE
	var x = Math.random();

	console.log(x.toFixed(2));
};


/**
* Exercices sur les chaînes de caractères
**/

// ----
// Ecrire une fonction qui reçoit une chaîne de caractères, et qui renvoie la position 
// de la première occurence de la lettre 'e' dans cette chaîne
function renvoiePositionE(str){

	var str;
	console.log(str.indexOf('e', [0]));
};

// ----
// Ecrire une fonction qui reçoit une chaîne de caractères, et qui renvoie la position 
// de la dernière occurence de la lettre 'e' dans cette chaîne
function renvoieDernierE(str){

	var str;
	console.log(str.lastIndexOf('e'));
};

// ----
// Ecrire une fonction qui reçoit une chaîne de caractères contenant une prhase entière, 
// et qui renvoie un tableau contenant chacun des différents mots dans la phrase
function splitPhrase(str){

	var str;
	var tableau = str.split(" ");

	console.log(tableau);
};

// ----
// Ecrire une fonction qui reçoit une chaîne de caractère, qui transforme 
// la première lettre en majuscule, et qui renvoie la nouvelle chaîne
function majuscule(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
* Exercices sur les fonctions natives javascript
**/

// ----
// Ecrire une fonction qui stocke vos noms et prénoms dans deux variables firstName et lastName
// Afficher dans une popup la concaténation des deux
function nomEtPrenom(){
	
	var firstName = prompt("Please enter your First Name:");
	var lastName = prompt("Please enter your Last Name:");

	return firstName +" "+ lastName;
}

// ----
// Ecrire une fonction qui respecte les étapes suivantes:
// Demander à l'utilisateur de saisir une valeur numérique par le biais d'une popup
// Stocker cette valeur dans une variable
// Afficher sa valeur dans la console
function number() {
	var num = prompt("Please type any number:");
	return num;
}

// ----
// Ecrire une fonction qui respecte les étapes suivantes:
// Demander à l'utilisateur de saisir deux valeurs numériques grâce à une popup de saisie
// L'alerter grâce à une popup si la valeur saisie n'est pas un nombre
// Afficher dans la console la somme des deux valeurs
function numbers(){
	var num1 = prompt("Please enter the first number:");
	var num2 = prompt("Please enter the second number:");

	if(isNaN(num1 || num2))
		alert("You typed something weird...");
	else
		return Number(num1)+Number(num2);
}

/**
* Exercices sur les tableaux
**/

// ----
// Ecrire une fonction qui prend en argument un tableau de nombres et en calcule la somme.
// Valeurs initiales: 
function computeSumOfArray() {
	var tab = [45, 99, 357, -33, 1, 8, -78];
	var i;
	var somme = 0;

	for(i=0;i<=tab.length-1;i++){
		somme = somme + tab[i];
	}
	return somme;
	// WRITE YOUR CODE HERE
};

/**
* Exercices sur les structures de contrôles et de boucles
**/

// ----
// 1)
// 	- construire un tableau vide initialement
// 	- rajouter l'une après l'autre 10 valeurs quelconques (nombres, string) dans ce tableau
// 	- utiliser une boucle for pour afficher toutes les valeurs du tableau dans la console
function tabBoucle() {
	var tab = [];

	for(i=0;i<=9;i++)
	tab[i] = prompt("Fill the case number "+(i+1)+":");

	for(i=0;i<=9;i++)
		console.log(tab[i]);
}


// 2)
// 	- reprendre le tableau construit précédemment
// 	- utiliser une boucle while pour afficher toutes les valeurs du tableau dans la console
function tabBoucleDeux(){
	var tab = [];
	var i = 0;

	while(i<=9){
		tab[i] = prompt("Fill the case number "+(i+1)+":");
		i++;
	}

	i = 0;

	while (i<=9){
		console.log(tab[i]);
		i++;
	}
}

// ----
// Ecrire une fonction qui réalise les étapes suivantes:
// Utiliser une fonction de type 'random' pour générer une liste de nombre aléatoires
// Utiliser une boucle for, et l'instruction 'if' pour afficher dans la console uniquement les nombres impairs de ce tableau
function rand(){
	
	var tab = [];
	var nb = Math.random()*20;

	for(i=0;i<=nb;i++){
		tab[i]=Math.round(Math.random()*100);
		if(tab[i]%2!=0)
			console.log(tab[i]);
	}
}

// ----
// Ecrire une fonction qui réalise les étapes suivantes:
// Sur 50 itérations:
//     - générer un entier de façon aléatoire
//     - si l'entier est divisible par 5, le stocker dans le tableau
// Afficher avec une boucle for le contenu du tableau dans la console
function fifty(){
	var tab = [];

	for(i=0;i<50;i++){
		tab[i]=Math.round(Math.random()*100);
		if(tab[i]%5==0)
			console.log(tab[i]);
	}
}

/**
* Exercices sur les objets
**/

// ----
// Construire un objet :
// - ayant deux propriéts: nom, prénom
// - dont les valeurs sont votre nom et votre prénom
// - rajouter dynamiquement une propriété âge
// - modifier dynamiquement le prénom de cet objet

function objectOne(){
	var monObjet = new Object();

	monObjet.nom = "AWAD";
	monObjet.prenom = "Khalil";
	monObjet.age = prompt("Enter your age:");
	monObjet.prenom = prompt("Enter your First Name:");

	return monObjet;
}
// ----
// Ecrire une fonction qui reçoit un objet, et qui renvoie la longueur de cet objet 

	var getObjLength = function(obj) {
		obj = prompt("Type the name of your object:");
		var len = obj.length;
		return len;
	}
	// WRITE YOUR CODE HERE
// Tester cette fonction avec un objet de votre choix que vous aurez écrit
	//tester avec objectOne.
// ----
// Pour résoudre les exercices précédents vous avez écrit des fonctions.
// Vous devez maintenant construire un objet ayant plusieurs propriétés dont:
// - le nom de la propriété s'appelle 'solution_N', où N est le numéro de l'exercice
// - la valeur de la propriété est la fonction qui résoud l'exercice N