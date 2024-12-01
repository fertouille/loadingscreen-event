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
  "Bienvenue sur notre serveur, et joyeuses fêtes ! 🎄",
  "Profitez de votre expérience de jeu, et que l'esprit de Noël vous accompagne ! 🎅",
  "N'oubliez pas de lire nos règles sur le forum, même le Père Noël les respecte ! 😉",
  "Rejoignez notre Discord pour rester informé et partager la magie de Noël ! ✨",
  "Merci d'être parmi nous en cette période festive ! 🎁",
  "Amusez-vous bien, et partagez la joie des fêtes ! ❄️",
  "Rappelez-vous : respectez les autres joueurs, c'est l'esprit de Noël ! 🌟",
  "Besoin d'aide ? Contactez un admin en jeu, même les lutins peuvent se tromper ! 🛠️",
  "Vous êtes perdus ? Rejoignez notre Discord et trouvez votre chemin, comme les rennes ! 🦌",
  "Faites appel au staff en faisant un ticket en jeu, au besoin, même pour des cadeaux égarés ! 🎄",
  "N'oubliez pas, ceci est un SeriousRP, même le Père Noël suit les règles ! 🎅",
  "Faites attention à vos tirs, évitez de toucher les décorations de Noël ! 🎁"
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
