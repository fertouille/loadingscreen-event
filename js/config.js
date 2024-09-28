// ignore
var Config = {};

/**
 * What should the text in the center of the screen be?
 * if empty it will fill in your Server Name
 */
Config.title = "Orion - CloneWars";

/**
 * Enable map text in the top left corner of the screen?
 */
Config.enableMap = true;

/**
 * Enable steamId text in the top right corner of the screen?
 */
Config.enableSteamID = true;

/**
 * Enable announcements?
 */
Config.enableAnnouncements = true;

/**
 * What messages do you want to show up?
 * only works if enableAnnouncements = true
 */
Config.announceMessages = [
  "Bienvenue dans notre sombre repaire... Vous survivrez ?",
  "Profitez bien... tant que vous le pouvez encore !",
  "N'oubliez pas de consulter nos terrifiantes règles sur le forum, âmes égarées !",
  "Rejoignez notre Discord... si vous n'avez pas peur du noir !",
  "Merci d'avoir osé entrer dans notre antre maléfique !",
  "Amusez-vous... mais ne laissez pas les ombres vous attraper !",
  "Souvenez-vous : respectez les autres joueurs... ou subissez la malédiction !",
  "Un problème ? Invoquez un admin... mais attention à ce qu'il ne soit pas possédé !",
  "Perdus dans l'obscurité ? Rejoignez notre Discord pour un peu de lumière !",
  "Besoin d'aide ? Le staff est là... si vous osez faire un ticket en jeu !",
  "N'oubliez pas, ceci est un SeriousRP... même les fantômes obéissent aux règles !",
  "Attention où vous tirez... les revenants n'apprécient pas les balles perdues !"
];

/**
 * How many miliseconds for each announcement?
 * only works if enableAnnouncements = true
 */
Config.announcementLength = 3500; /* des fois que j'ai cassé le truc comme ça */ 

/**
 * Image Filename
 * DROP IMAGE IN "images" FOLDER
 */
Config.backgroundImage = "";

/**
 * Enable debug messages?
 */
Config.enableDebug = false;
