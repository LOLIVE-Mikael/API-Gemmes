const gems = [
  { id: 1, name: 'Améthyste', color: 'Violet', rarity: 'Commun' },
  { id: 2, name: 'Aigue-marine', color: 'Bleu clair', rarity: 'Rare' },
  { id: 3, name: 'Azurite', color: 'Bleu', rarity: 'Peu commun' },
  { id: 4, name: 'Alexandrite', color: 'Vert/rouge', rarity: 'Très rare' },
  { id: 5, name: 'Agate', color: 'Multicolore', rarity: 'Peu commun' },

  { id: 6, name: 'Béryl', color: 'Jaune/vert', rarity: 'Rare' },
  { id: 7, name: 'Héliotrope', color: 'Vert/rouge', rarity: 'Commun' },
  { id: 8, name: 'Agate Lace Bleue', color: 'Bleu clair', rarity: 'Peu commun' },
  { id: 9, name: 'Quartz Brillant', color: 'Incolore', rarity: 'Commun' },
  { id: 10, name: 'Bronzite', color: 'Bronze', rarity: 'Peu commun' },

  { id: 11, name: 'Citrine', color: 'Jaune', rarity: 'Commun' },
  { id: 12, name: 'Cornaline', color: 'Rouge', rarity: 'Peu commun' },
  { id: 13, name: 'Chrysobéryl', color: 'Vert', rarity: 'Rare' },
  { id: 14, name: 'Chrysoprase', color: 'Vert', rarity: 'Peu commun' },
  { id: 15, name: 'Clinohumite', color: 'Jaune', rarity: 'Très rare' },

  { id: 16, name: 'Diamant', color: 'Incolore', rarity: 'Très rare' },
  { id: 17, name: 'Diopside', color: 'Vert', rarity: 'Rare' },
  { id: 18, name: 'Dumortiérite', color: 'Bleu', rarity: 'Peu commun' },
  { id: 19, name: 'Jasper Dalmatien', color: 'Blanc/noir', rarity: 'Commun' },
  { id: 20, name: 'Danburite', color: 'Incolore', rarity: 'Très rare' },

  { id: 21, name: 'Émeraude', color: 'Vert', rarity: 'Rare' },
  { id: 22, name: 'Enstatite', color: 'Brun', rarity: 'Peu commun' },
  { id: 23, name: 'Euclase', color: 'Bleu', rarity: 'Très rare' },
  { id: 24, name: 'Eudialyte', color: 'Rouge', rarity: 'Peu commun' },
  { id: 25, name: 'Épidote', color: 'Vert', rarity: 'Peu commun' },

  { id: 26, name: 'Fluorite', color: 'Multicolore', rarity: 'Peu commun' },
  { id: 27, name: 'Feldspath', color: 'Jaune', rarity: 'Rare' },
  { id: 28, name: 'Fuchsite', color: 'Vert', rarity: 'Peu commun' },
  { id: 29, name: 'Corail Fossile', color: 'Blanc', rarity: 'Commun' },
  { id: 30, name: 'Magnésite', color: 'Blanc', rarity: 'Peu commun' },

  { id: 31, name: 'Grenat', color: 'Rouge', rarity: 'Commun' },
  { id: 32, name: 'Pierre d\'Or', color: 'Bronze', rarity: 'Peu commun' },
  { id: 33, name: 'Grossulaire', color: 'Vert', rarity: 'Rare' },
  { id: 34, name: 'Tourmaline Verte', color: 'Vert', rarity: 'Très rare' },
  { id: 35, name: 'Grandidierite', color: 'Bleu-vert', rarity: 'Très rare' },

  { id: 36, name: 'Héliodore', color: 'Jaune', rarity: 'Rare' },
  { id: 37, name: 'Hématite', color: 'Gris', rarity: 'Commun' },
  { id: 38, name: 'Howlite', color: 'Blanc', rarity: 'Peu commun' },
  { id: 39, name: 'Hydroxyde', color: 'Incolore', rarity: 'Rare' },
  { id: 40, name: 'Hessonite', color: 'Orange', rarity: 'Peu commun' },

  { id: 41, name: 'Iolite', color: 'Bleu', rarity: 'Rare' },
  { id: 42, name: 'Topaze Impériale', color: 'Jaune/orange', rarity: 'Très rare' },
  { id: 43, name: 'Inésite', color: 'Rose', rarity: 'Peu commun' },
  { id: 44, name: 'Indicolite', color: 'Bleu', rarity: 'Rare' },
  { id: 45, name: 'Pierre de Fer', color: 'Rouge', rarity: 'Commun' },

  { id: 46, name: 'Jade', color: 'Vert', rarity: 'Peu commun' },
  { id: 47, name: 'Jasper', color: 'Multicolore', rarity: 'Peu commun' },
  { id: 48, name: 'Jet', color: 'Noir', rarity: 'Rare' },
  { id: 49, name: 'Jadéite', color: 'Vert', rarity: 'Très rare' },
  { id: 50, name: 'Jaspe Rouge', color: 'Rouge', rarity: 'Commun' },

  { id: 51, name: 'Kyanite', color: 'Bleu', rarity: 'Rare' },
  { id: 52, name: 'Kornerupine', color: 'Vert', rarity: 'Très rare' },
  { id: 53, name: 'Kyanite Bleue', color: 'Bleu', rarity: 'Rare' },
  { id: 54, name: 'Kyanite Noir', color: 'Noir', rarity: 'Peu commun' },
  { id: 55, name: 'Kyanite Verte', color: 'Vert', rarity: 'Peu commun' },

  { id: 56, name: 'Lapis-lazuli', color: 'Bleu', rarity: 'Rare' },
  { id: 57, name: 'Larimar', color: 'Bleu clair', rarity: 'Peu commun' },
  { id: 58, name: 'Labradorite', color: 'Multicolore', rarity: 'Rare' },
  { id: 59, name: 'Quartz Citron', color: 'Jaune', rarity: 'Peu commun' },
  { id: 60, name: 'Lépidolite', color: 'Violet', rarity: 'Peu commun' },

  { id: 61, name: 'Malachite', color: 'Vert', rarity: 'Peu commun' },
  { id: 62, name: 'Pierre de Lune', color: 'Blanc', rarity: 'Rare' },
  { id: 63, name: 'Moldavite', color: 'Vert', rarity: 'Très rare' },
  { id: 64, name: 'Agate Mousse', color: 'Vert', rarity: 'Peu commun' },

  { id: 66, name: 'Néphrite', color: 'Vert', rarity: 'Peu commun' },
  { id: 67, name: 'Quartz Nano', color: 'Incolore', rarity: 'Peu commun' },
  { id: 68, name: 'Natrolite', color: 'Blanc', rarity: 'Rare' },
  { id: 69, name: 'Nellite', color: 'Bleu', rarity: 'Très rare' },
  { id: 70, name: 'Nicolite', color: 'Noir', rarity: 'Peu commun' },

  { id: 71, name: 'Opale', color: 'Multicolore', rarity: 'Rare' },
  { id: 72, name: 'Onyx', color: 'Noir', rarity: 'Commun' },
  { id: 73, name: 'Oxyde de Zinc', color: 'Blanc', rarity: 'Peu commun' },
];

module.exports = gems;
