// Fichier à modifier pour mettre à jour le site : équipes et matchs.
// Après chaque modification, enregistre le fichier et envoie-le sur GitHub : Netlify met le site à jour tout seul.
//
// Équipe : id (unique, sans espace), name, captain, discord, from (heure dès laquelle elle est dispo, "" si aucune limite),
//          to (heure jusqu'à laquelle elle est dispo, "" si aucune limite), note,
//          players : la liste des joueurs, chacun avec name (pseudo), elo (rang actuel) et peak (meilleur rang atteint).
// Match  : date (AAAA-MM-JJ), time (HH:MM), a et b (les id des deux équipes), round (tour), bo (1, 3 ou 5).
// Les lignes ci-dessous sont des exemples à remplacer.
window.TOURNOI = {
  teams: [
    { id: "pivoines", name: "Les Pivoines", captain: "Capitaine exemple", discord: "pivoine#0001", from: "14:00", to: "", note: "Exemple : dispo après 14h",
      players: [
        { name: "Pivoine1", elo: "Or 2", peak: "Or 3" },
        { name: "Pivoine2", elo: "Or 3", peak: "Platine 1" },
        { name: "Pivoine3", elo: "Platine 1", peak: "Platine 2" },
        { name: "Pivoine4", elo: "Platine 2", peak: "Platine 3" },
        { name: "Pivoine5", elo: "Platine 3", peak: "Diamant 1" }
      ] },
    { id: "violet", name: "Violet Spike", captain: "Capitaine exemple", discord: "violet#0002", from: "", to: "22:00", note: "Exemple : doit finir avant 22h",
      players: [
        { name: "Violet1", elo: "Platine 1", peak: "Platine 2" },
        { name: "Violet2", elo: "Platine 2", peak: "Platine 3" },
        { name: "Violet3", elo: "Platine 3", peak: "Diamant 1" },
        { name: "Violet4", elo: "Diamant 1", peak: "Diamant 2" },
        { name: "Violet5", elo: "Diamant 2", peak: "Diamant 3" }
      ] },
    { id: "rose", name: "Rose Rush", captain: "Capitaine exemple", discord: "rose#0003", from: "", to: "", note: "Exemple",
      players: [
        { name: "Rose1", elo: "Or 3", peak: "Platine 1" },
        { name: "Rose2", elo: "Platine 1", peak: "Platine 2" },
        { name: "Rose3", elo: "Platine 2", peak: "Platine 3" },
        { name: "Rose4", elo: "Platine 3", peak: "Diamant 1" },
        { name: "Rose5", elo: "Diamant 1", peak: "Diamant 2" }
      ] },
    { id: "nova", name: "Nova Pink", captain: "Capitaine exemple", discord: "nova#0004", from: "13:00", to: "23:00", note: "Exemple",
      players: [
        { name: "Nova1", elo: "Platine 2", peak: "Platine 3" },
        { name: "Nova2", elo: "Platine 3", peak: "Diamant 1" },
        { name: "Nova3", elo: "Diamant 1", peak: "Diamant 2" },
        { name: "Nova4", elo: "Diamant 2", peak: "Diamant 3" },
        { name: "Nova5", elo: "Diamant 3", peak: "Ascendant 1" }
      ] },
    { id: "lilac", name: "Lilac Clutch", captain: "Capitaine exemple", discord: "lilac#0005", from: "", to: "", note: "Exemple",
      players: [
        { name: "Lilac1", elo: "Argent 3", peak: "Or 2" },
        { name: "Lilac2", elo: "Or 2", peak: "Or 3" },
        { name: "Lilac3", elo: "Or 3", peak: "Platine 1" },
        { name: "Lilac4", elo: "Platine 1", peak: "Platine 2" },
        { name: "Lilac5", elo: "Platine 2", peak: "Platine 3" }
      ] },
    { id: "sakura", name: "Sakura Five", captain: "Capitaine exemple", discord: "sakura#0006", from: "15:00", to: "", note: "Exemple : dispo après 15h",
      players: [
        { name: "Sakura1", elo: "Platine 3", peak: "Diamant 1" },
        { name: "Sakura2", elo: "Diamant 1", peak: "Diamant 2" },
        { name: "Sakura3", elo: "Diamant 2", peak: "Diamant 3" },
        { name: "Sakura4", elo: "Diamant 3", peak: "Ascendant 1" },
        { name: "Sakura5", elo: "Ascendant 1", peak: "Ascendant 2" }
      ] }
  ],
  matches: [
    { date: "2026-11-21", time: "13:00", a: "pivoines", b: "violet", round: "Exemple · Poule A", bo: 1 },
    { date: "2026-11-21", time: "14:00", a: "rose", b: "nova", round: "Exemple · Poule B", bo: 1 },
    { date: "2026-11-21", time: "14:30", a: "rose", b: "lilac", round: "Exemple · Poule B", bo: 1 },
    { date: "2026-11-22", time: "15:00", a: "pivoines", b: "sakura", round: "Exemple · Quart", bo: 1 },
    { date: "2026-11-22", time: "20:30", a: "violet", b: "nova", round: "Exemple · Finale", bo: 3 }
  ]
};
