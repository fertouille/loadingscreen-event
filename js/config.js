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
Config.enableMap = false;

/**
 * Enable steamId text in the top right corner of the screen?
 */
Config.enableSteamID = false;

/**
 * Enable announcements?
 */
Config.enableAnnouncements = false;

/**
 * What messages do you want to show up?
 * only works if enableAnnouncements = true
 */
Config.announceMessages = [
  "Bienvenue à bord de l'Orion, prêts pour le combat ?",
  "Préparez-vous à rejoindre la bataille interstellaire !",
  "Explorez des mondes et vivez des aventures épiques !",
  "Consultez nos règles sur le forum pour une expérience optimale !",
  "Besoin d'assistance ? Contactez un admin en jeu !",
  "Rejoignez notre Discord pour des annonces et des évents !",
  "Que la Force guide vos actions, soldat !",
  "En avant vers la victoire pour la République !"
];

/**
 * How many miliseconds for each announcement?
 * only works if enableAnnouncements = true
 */
Config.announcementLength = 2700;

/**
 * Image Filename
 * DROP IMAGE IN "images" FOLDER
 */
Config.backgroundImage = "";

/**
 * Enable debug messages?
 */
Config.enableDebug = false;