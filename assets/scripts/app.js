const maxLife = 100;
const PLAYER_ATTACK_VAlue = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;


let currentPlayerHealth = maxLife;
let currentMonsterHealth = maxLife;


function endRound(){
    initialPlayerLife = currentPlayerHealth;
    const playerDamage = dealPlayerDamage (MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
}


function attackMonster(){
    initialMonsterLife = currentMonsterHealth;
    const Monsterdamage = dealMonsterDamage(PLAYER_ATTACK_VAlue);
    currentMonsterHealth -= Monsterdamage;
}

function strongAttackMonster(){
    initialMonsterLife = currentMonsterHealth;
    const monsterIntenseDamage = dealMonsterDamage (STRONG_ATTACK_VALUE);
    currentMonsterHealth -= monsterIntenseDamage;
}


attackBtn.addEventListener('click', attackMonster);
strongAttackBtn.addEventListener('click', strongAttackMonster);