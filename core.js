window.onload = waitForElementToDisplay();

let insult1Btn = document.getElementById('insult1');
insult1Btn.style.cursor = 'pointer';
let insultResult = document.getElementById('response');

insultResult.onload = blank();
function blank() {
  insultResult.textContent = 'Click button to create an insult!';
}

const randomInsult = {
  pronouns: ['Her', 'His', 'You', 'My', 'Its', 'I', 'Their'],
  verbs: ['bite', 'squish', 'sniff', 'look', 'smell', 'walk', 'push', 'slice', 'lick', 'run', 'sit', 'eat', 'punch', 'vomit', 'kick', 'slap', 'kill', 'die', 'throw', 'swim', 'sleep', 'poke'],
  verbs_2: ['hate', 'despise', 'loathe', 'love', 'can\'t stand'],
  verbs_3: ['hate', 'despise', 'loathe', 'love', 'mock', 'kick', 'slap', 'poke', 'tease', 'cut', 'strangle'],
  verbs_ing: ['biting', 'squishing', 'sniffing', 'smelling', 'licking', 'eating', 'punching', 'kicking', 'slapping', 'throwing', 'poking', 'loving', 'hating'],
  noun_1: ['rat', 'goat', 'cat', 'mom', 'chicken', 'donkey', 'son', 'dog', 'child', 'snake', 'monkey', 'girl', 'orphan', 'boy', 'grandpa', 'grandma'],
  noun_2: ['boob', 'soul', 'baby', 'hand', 'nose', 'butt', 'eye', 'mouth', 'armpit', 'ear', 'shoe', 'toilet', 'belly', 'booger', 'fart', 'ding-dong', 'turd', 'sock'],
  noun_3: ['Dungeon Master', 'Child of Satan', 'teacher', 'boss', 'mother', 'father', 'President', 'Queen', 'King', 'Alpha male', 'Lord of the Underworld'],
  //begains with 'an'
  noun_4: ['apple sucker', 'idiot', 'eye sore', 'armpit licker', 'ear ache', 'airhead', 'elf', 'ogre', 'orphan', 'elbow picker'],
  animals: ['goat', 'cat', 'chicken', 'donkey', 'dog', 'snake', 'monkey', 'rat', 'elephant', 'whale'],
  adjective_1: ['strange', 'gay', 'stupid', 'yellow', 'putrid', 'cold', 'skinny', 'smelly', 'wimpy', 'wretched', 'gigantic', 'tiny', 'disturbing'],
  adjective_2: ['dirty', 'nerdy', 'dry', 'fat', 'pink', 'slimy', 'green', 'hairy', 'gooey', 'purple', 'nutty', 'grotesque', 'moldy', 'ugly']
};

//combine noun_1 noun_2 noun_3
const lotsONouns = ['rat', 'goat', 'cat', 'mom', 'chicken', 'donkey', 'son', 'dog', 'child', 'snake', 'monkey', 'girl', 'orphan',
'boob', 'baby', 'hand', 'nose', 'butt', 'eye', 'armpit', 'ear', 'shoe', 'toilet', 'belly', 'booger', 'fart', 'ding-dong', 'turd', 'sock',
'Dungeon Master', 'teacher', 'boss', 'mother', 'father','President', 'Queen', 'King', 'mouth'];

//noun_1 noun_2
const nouns1_2 = ['goat', 'cat', 'mom', 'chicken', 'donkey', 'son', 'dog', 'child', 'snake', 'monkey', 'girl', 'orphan', 'boy', 'grandpa', 'grandma',
'boob', 'baby', 'hand', 'nose', 'butt', 'eye', 'mouth', 'armpit', 'ear', 'shoe', 'toilet', 'belly', 'booger', 'fart', 'ding-dong', 'turd', 'sock'];

//verb combo
const lotsOVerbs = ['bite', 'squish', 'sniff', 'eat', 'punch', 'kick', 'slap', 'throw', 'poke', 'slice', 'mock', 'hate',
'tease', 'fart on', 'vaporize', 'sanitize', 'push', 'curse', 'vomit on', 'lick', 'spit on'];

//verb combo 2
const lotsOVerbs2 = ['bit', 'squished', 'sniffed', 'ate', 'punched', 'kicked', 'slapped', 'threw', 'poked', 'sliced', 'mocked', 'hate',
'teased', 'farted on', 'vaporized', 'sanitized', 'pushed', 'cursed', 'vomited on', 'licked', 'spat on', 'ran away with'];

//adjective_1 adjective_2
const lotsOAdjs = ['strange', 'gay', 'stupid', 'yellow', 'putrid', 'cold', 'skinny', 'smelly', 'wimpy', 'wretched', 'gigantic', 'tiny', 'disturbing',
'nerdy', 'dry', 'fat', 'pink', 'slimy', 'green', 'hairy', 'gooey', 'purple', 'nutty', 'grotesque', 'moldy'];

//const Numbers = ['147', '1k', '3049', '69', '21 million'];
const Numbers = Math.floor(Math.random() * 1000);

//add plural objects with 's'
const lotsOPluralNouns = ['rats', 'goats', 'cats', 'moms', 'chickens', 'donkeys', 'sons', 'dogs', 'snakes', 'monkeys', 'orphans',
'boobs', 'hands', 'noses', 'butts', 'eyes', 'armpits', 'toilets', 'bellys', 'farts', 'ding-dongs', 'turds', 'lizards', 'women', 'men',
'teachers', 'grandpas', 'grandmas', 'mouths', 'ears', 'shoes', 'boogers', 'socks'];


function insultToString() {
  const pronounSet = randomInsult.pronouns[Math.floor(Math.random() * randomInsult.pronouns.length)];
  const verbsSet = randomInsult.verbs[Math.floor(Math.random() * randomInsult.verbs.length)];
  const verbs_2Set = randomInsult.verbs_2[Math.floor(Math.random() * randomInsult.verbs_2.length)];
  const verbs_3Set = randomInsult.verbs_3[Math.floor(Math.random() * randomInsult.verbs_3.length)];
  const noun_1Set = randomInsult.noun_1[Math.floor(Math.random() * randomInsult.noun_1.length)];
  const noun_2Set = randomInsult.noun_2[Math.floor(Math.random() * randomInsult.noun_2.length)];
  const noun_3Set = randomInsult.noun_3[Math.floor(Math.random() * randomInsult.noun_3.length)];
  const noun_4Set = randomInsult.noun_4[Math.floor(Math.random() * randomInsult.noun_4.length)];
  const nounSpecialSet = lotsONouns[Math.floor(Math.random() * lotsONouns.length)];
  const nounSpecialSet2 = nouns1_2[Math.floor(Math.random() * nouns1_2.length)];
  const animals = randomInsult.animals[Math.floor(Math.random() * randomInsult.animals.length)];
  const verbSpecialSet = lotsOVerbs[Math.floor(Math.random() * lotsOVerbs.length)];
  const verbSpecialSet2 = randomInsult.verbs_ing[Math.floor(Math.random() * randomInsult.verbs_ing.length)];
  const verbSpecialSet3 = lotsOVerbs2[Math.floor(Math.random() * lotsOVerbs2.length)];
  const adj_1Set = randomInsult.adjective_1[Math.floor(Math.random() * randomInsult.adjective_1.length)];
  const adj_2Set = randomInsult.adjective_2[Math.floor(Math.random() * randomInsult.adjective_2.length)];
  const adjSpecialSet = lotsOAdjs[Math.floor(Math.random() * lotsOAdjs.length)];
  const numberSet = Numbers;//Numbers[Math.floor(Math.random() * Numbers.length)]; (same number gets generated until browser refreshes)
  const pluralNouns = lotsOPluralNouns[Math.floor(Math.random() * lotsOPluralNouns.length)];

  const format1a = `${pronounSet}, ${noun_1Set}, have a ${adj_1Set} and ${adj_2Set}  ${noun_2Set}.`;
  const format1b = `${pronounSet}, ${noun_2Set}!`;
  const format1c = `You ${nounSpecialSet} sucker!`;
  const formats1_1c = [format1a, format1b, format1c];

  const format1d = `The ${noun_3Set} wishes you to have a ${adj_1Set} and ${adj_2Set}  ${noun_2Set}.`;
  const format1e = `${pronounSet} ${verbs_2Set} you.`;
  const formats1d_1e = [format1d, format1e];

  const formatLove = `I ${verbs_2Set} you ...just kidding.`;
  const formatLove2 = `I ${verbs_2Set} ${verbSpecialSet2} my ${animals}.`;
  const formatsLove = [formatLove, formatLove2];

  const format2 = `${pronounSet} ${noun_1Set} has a ${adj_1Set} and ${adj_2Set} ${noun_2Set}.`;
  const format3 = `You, ${adj_1Set}, ${adj_2Set}  ${noun_2Set}!`;
  const format4a = `You have a ${adj_1Set} ${nounSpecialSet}!`;
  const format4b = `You have a ${adj_2Set} ${nounSpecialSet}!`;
  const format5 = `You ${verbsSet} like a ${noun_1Set}!`;
  const format6 = `Your ${nounSpecialSet} ${verbs_3Set}s you because you're an ${noun_4Set}.`;
  const format7 = `Go ${verbSpecialSet} my ${nounSpecialSet}.`;
  const format8 = `Your ${noun_1Set} wants to ${verbSpecialSet} you.`;
  const format9 = `The ${noun_3Set} orders you to ${verbSpecialSet} your ${noun_1Set}.`;
  const format10 = `You're an ${noun_4Set}.`;
  const format11 = `You ${nounSpecialSet2} ${verbSpecialSet2}, ${adjSpecialSet} ${nounSpecialSet}!`;
  const format12 = `Your ${noun_1Set} ${verbs_3Set}s you because you ${verbSpecialSet3} the ${nounSpecialSet}.`;
  const format13 = `I'd rather ${verbSpecialSet} a ${animals} than be with you.`;
  const format14 = `You're an overgrown ${noun_4Set} who ${verbSpecialSet3} ${numberSet} ${pluralNouns}.`;
  const format15 = `Ha, ha... ${adjSpecialSet} ${pluralNouns} are always trying to ${verbs_3Set} you.`;
  const formats2_15 = [format2, format3, format4a, format4b, format5, format6, format7, format8, format9, format10, format11, format12, format13, format14, format15];
  
  switch (`${pronounSet}`) {
    case 'You':
    const randomFormatA = Math.floor(Math.random() * formats1_1c.length);
    const randomFormatAString = formats1_1c[randomFormatA];
    insultResult.textContent = randomFormatAString.toString();
    break;
    case 'I':
    const randomFormatB = Math.floor(Math.random() * formats1d_1e.length);
    const randomFormatBString = formats1d_1e[randomFormatB];
    insultResult.textContent = randomFormatBString.toString();
    switch (`${verbs_2Set}`) {
      case 'love':
      const randomFormatLove = Math.floor(Math.random() * formatsLove.length);
      const randomFormatLoveString = formatsLove[randomFormatLove];
      insultResult.textContent = randomFormatLoveString.toString(); 
      break;
    }
    break;
    default:
    const randomFormatC = Math.floor(Math.random() * formats2_15.length);
    const randomFormatCString = formats2_15[randomFormatC];
    insultResult.textContent = randomFormatCString.toString();
  }

  return insultResult.textContent;

}

waitForElementToDisplay('#response',function() {
  console.log('window loaded');

  insult1Btn.addEventListener('click', () => {

    insult1Btn.style.disabled = true;
    insult1Btn.style.cursor = 'default';

    setTimeout(() => {
      insult1Btn.style.disabled = false;
      insult1Btn.style.cursor = 'pointer';
    }, 1000);

    insultToString();

  });
}, 1000, 9000);

function waitForElementToDisplay(selector, callback, checkFrequencyInMs, timeoutInMs) {
  var startTimeInMs = Date.now();
  (function loopSearch() {
    if (document.querySelector(selector) !== null) {
      callback();
      console.log(`element found in ${startTimeInMs} miliseconds`);
      return;
    }
    else {
      setTimeout(function () {
        if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
          return;
        loopSearch();
      }, checkFrequencyInMs);
    }
  })();
}
