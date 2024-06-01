// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Your function also receives a third argument, a string, with the name of the fighter that attacks first.

// Example:
//   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"

//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.

function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function () {
    return this.name;
  };
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  let fighterOneTurnsNeeded = Math.ceil(
    fighter2.health / fighter1.damagePerAttack
  );
  let fighterTwoTurnsNeeded = Math.ceil(
    fighter1.health / fighter2.damagePerAttack
  );

  // If fighter one goes first
  if (firstAttacker === fighter1.name) {
    // They win if they don't need more turns
    if (fighterOneTurnsNeeded <= fighterTwoTurnsNeeded) {
      return fighter1.name;
    }
    return fighter2.name;
  }

  // If fighter two goes first
  if (firstAttacker === fighter2.name) {
    // They win if they don't need more turns
    if (fighterOneTurnsNeeded >= fighterTwoTurnsNeeded) {
      return fighter2.name;
    }
    return fighter1.name;
  }
}

const ans = declareWinner(
  new Fighter('Lew', 10, 2),
  new Fighter('Harry', 5, 4),
  'Lew'
);
console.log(ans);

// Cleaner selection - no need for nested
function declareWinner(fighter1, fighter2, firstAttacker) {
  let turnsToWinPlayer1 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
  let turnsToWinPlayer2 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
  if (turnsToWinPlayer2 < turnsToWinPlayer1) {
    return fighter2.name;
  } else if (turnsToWinPlayer1 < turnsToWinPlayer2) {
    return fighter1.name;
  } else {
    return firstAttacker;
  }
}
