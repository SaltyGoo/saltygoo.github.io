    const replacements = {
        'rdmCULT': ['a FEY-WORSHIPPING FOLK', 'an ELEMENTAL rdmELEMENT', 'a DEMONIC', 'an ANCIENT SECRET', 'AN ELDRITCH', 'A DEATH', 'A DRUG'],
        'rdmELEMENT': ['EARTH', 'OOZE', 'ALLOY', 'LAVA', 'FIRE', 'SUN', 'GAS', 'AIR', 'STORM', 'FROST', 'WATER', 'FOG'],
        'rdmPLANE': ['PURGATORY', 'GEHENNA', 'HELL', 'the ABYSS', 'the DREAMWORLD', 'HEAVEN', 'rdmFIRE', 'rdmAIR', 'rdmEARTH', 'rdmWATER', 'the ASTRAL SEA'],
        'rdmEARTH': ['the PLANE OF EARTH', 'the PLANE OF OOZE', 'the PLANE OF METAL', 'the PLANE OF MAGMA'],
        'rdmFIRE': ['the PLANE OF FIRE', 'the PLANE OF LIGHT', 'the PLANE OF SMOKE', 'the PLANE OF MAGMA'],
        'rdmAIR': ['the PLANE OF AIR', 'the PLANE OF ELECTRICITY', 'the PLANE OF SMOKE', 'the PLANE OF COLD'],
        'rdmWATER': ['the PLANE OF WATER', 'the PLANE OF STEAM', 'the PLANE OF OOZE', 'the PLANE OF COLD'],
        'rdmSIZE': ['', 'GIANT'],
        'rdmNOBLE': ['BARON', 'BARONNESS', 'PRINCE', 'PRINCESS', 'KING', 'QUEEN', 'DUKE', 'DUCHESS', 'MARQUIS', 'MARCHIONESS', 'ARCHBISHOP', 'COUNT', 'COUNTESS', 'BARONNESS', 'EMPEROR', 'EMPRESS', 'PRINCE-ELECTOR'],
        'rdmWEAPON': ['sword', 'axe', 'hammer', 'spear', 'club', 'axe', 'dagger', 'halberd', 'bow', 'crossbow', 'sling', 'pistol', 'staff', 'scepter', 'gauntlet'],
        'rdmARMOR': ['breastplate', 'helmet', 'shield'],
        'rdmJEWEL': ['ring', 'necklace', 'tiara', 'bracelet', 'earings', 'brooch'],
        'rdmRm': ['outdoor space', 'natural cave', 'built room'],
        'rdmCOIN': ['copper coins', 'silver coins', 'gold coins', 'gems'],
        'rdmMETAL': ['bronze', 'silver', 'gold', 'crystal', 'platinum', 'mithril'],

    };

    function applyReplacements(text) {
        let replacedText = text;
        let iterations = 0;
        const maxIterations = 10;
        while (iterations < maxIterations) {
            let changed = false;
            for (const [key, values] of Object.entries(replacements)) {
                const regex = new RegExp(key, 'g');
                if (regex.test(replacedText)) {
                    replacedText = replacedText.replace(regex, () => {
                        return values[Math.floor(Math.random() * values.length)];
                    });
                    changed = true;
                }
            }
            if (!changed) break;
            iterations++;
        }
        return replacedText;
    }
