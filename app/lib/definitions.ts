export type User = {
    id: string;
    name: string;
    email: string;
    ttrpg_link: 'dnd-beyond-link';
    role: 'Player' | 'Game Master';
};

export type Reference = {
    id: string;
    image_url: string;
    name: string;
    description: string;
}

export type Character = {
    type: 'PC' | 'NPC' | 'Deity' | 'Familiar' | 'Pet';
    basic_info: BasicCharacterInfo;
}

export type BasicCharacterInfo = {
    id: string;
    name: string;
    surname: string;
    alias: string;
    age: string;
    race: 'Aarakocra' | 'Aasimar' | 'Air Genasi' | 'Bugbear' | 'Centaur' | 'Changeling' | 'Dragonborn' | 'Chromatic Dragonborn' | 'Gem Dragonborn' | 'Metallic Dragonborn' | 'Duergar' | 'Hill Dwarf' | 'Mountain Dwarf' | 'Earth Genasi' | 'Eladrin' | 'High Elf' | 'Wood Elf' | 'Eladrin Elf' | 'Dark Elf' | 'Fairy' | 'Firbolg' | 'Fire Genasi' | 'Githyanki' | 'Githzerai' | 'Rock Gnome' | 'Forest Gnome' | 'Deep Gnome' | 'Goblin' | 'Goliath' | 'Half-Elf' | 'Half-Orc' | 'Lightfoot Halfling' | 'Stout Halfling' | 'Harengon' | 'Hobgoblin' | 'Human' | 'Variant Human' | 'Kenku' | 'Kobold' | 'Dhampir Lineage' | 'Hexblood Lineage' | 'Reborn Lineage' | 'Lizardfolk' | 'Minotaur' | 'Orc' | 'Satyr' | 'Sea Elf' | 'Shadar-kai' | 'Shifter' | 'Tabaxi' | 'Tiefling' | 'Tortle' | 'Triton' | 'Variant Aasimar' | 'Water Genasi' | 'Yuan-ti';
    classes: Class[];
    gender: string;
    pronouns: string;
    alignment: 'Lawful Good' | 'Neutral Good' | 'Chaotic Good' | 'Lawful Neutral' | 'True Neutral' | 'Chaotic Neutral' | 'Lawful Evil' | 'Neutral Evil' | 'Chaotic Evil';
    appearance: Appearance;
    references: Reference[];
}

export type Class = {
    name: 'Artificer' | 'Barbarian' | 'Bard' | 'Blood Hunter' | 'Cleric' | 'Druid' | 'Fighter' | 'Monk' | 'Paladin' | 'Ranger' | 'Rogue' | 'Sorcerer' | 'Warlock' | 'Wizard';
}

export type Appearance = {
    
}
export type Arc = {
    acts: Act[];
}
export type Act = {
    
}



