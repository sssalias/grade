export type MatchDto = {
    match_id: number,
    start_time: number,
    league_name: string,
    duration: number,
    dire_score: number,
    radiant_score: number,
    radiant_win: boolean,
    region: number,
    game_mode: number,
    players: PlayerDto[]
}



export type PlayerDto = {
    isRadiant: boolean,
    hero_id: number,
    win: number,
    personaname: string,
    level: number,
    kills: number,
    deaths: number,
    assists: number,
    last_hits: number,
    denies: number,
    total_gold: number,
    gold_per_min: number,
    xp_per_min: number,
    hero_damage: number,
    tower_damage: number,
    hero_healing: number,
    item_0: number,
    item_1: number,
    item_2: number,
    item_3: number,
    item_4: number,
    item_5: number,
    backpack_0: number,
    backpack_1: number,
    backpack_2: number,
    purchase: {aghanims_shard: number},
    permanent_buffs: {permanent_buff: number}[]
}