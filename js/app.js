const cardEl = document.getElementById('card');
const drawBtn = document.getElementById('drawBtn');

let currentCategory = '';

const cards = {
white:[
"Do or drink, act out as many sexy positions as you can in 2 mins.",
"Do or drink, gently massage your partner’s shoulders and neck for 2 minutes.",
"Do or drink, give your partner a lap dance.",
"Do or drink, hold hands and share what you love most about your sex life.",
"Do or drink, kiss with tongues for 30 seconds.",
"Do or drink, lick and suck on your partners ear.",
"Do or drink, lick, suck or bite your partners feet.",
"Do or drink, massage your partners booty.",
"Do or drink, moan your partners name as loud as possible.",
"Do or drink, pin your partners arms above their head and kiss along their neck.",
"Do or drink, seductively suck your partners fingers.",
"Do or drink, straddle their lap, kiss their neck and talk dirty to them.",
"Do or drink, take a shot off their body.",
"Do or drink, tell your partner what turns you on the most.",
"Drink if, you are the first to finish.",
"Drink if, you are the horniest.",
"Drink if, you have faked an orgasm.",
"Drink if, you have sent a dick / pussy pic.",
"Drink if, you have woke up in the middle of the night and fucked.",
"Drink if, you’d join the mile high club.",
"Drink if, you’ve been spanked.",
"Loser drinks, have a thumb war.",
"Loser drinks, Rock, Paper, Scissors.",
"Would you rather, bathroom or bedroom?",
"Would you rather, bathroom or kitchen?",
"Would you rather, bathroom or livingroom?",
"Would you rather, bathroom, bedroom, kitchen or livingroom?",
"Would you rather, bedroom or kitchen?",
"Would you rather, bedroom or livingroom?",
"Would you rather, fancy dinner out or cosy night in?",
"Would you rather, give or receive?",
"Would you rather, kitchen or livingroom?",
"Would you rather, morning sex or night sex?",
"Would you rather, romantic movie or dancing together?",
"Would you rather, top or bottom?"
],

red:[
"Do or drink, bend them over your knee and spank their arse.",
"Do or drink, bite your partners lip.",
"Do or drink, blindfold your partner for the next two challenges.",
"Do or drink, blindfold your partner, rub their pussy / cock and get them aroused.",
"Do or drink, eat something sweet off their body.",
"Do or drink, finger her, put your finger in their mouth and tell them to suck it.",
"Do or drink, give him a titty wank.",
"Do or drink, kiss a part of your partners body where you want them to cum on when they finish.",
"Do or drink, kiss your partner anywhere apart from on their lips.",
"Do or drink, lick and suck on your partners nipples.",
"Do or drink, motorboat their tits.",
"Do or drink, pleasure yourselves in front of each other whilst maintaining eye contact.",
"Do or drink, share your favourite thing your partner does during sex.",
"Do or drink, spit in each other’s mouths.",
"Do or drink, twerk on their face.",
"Do or drink, whisper in your partners ear how you want the night to end.",
"Do or drink, without using hands, remove their underwear leaving them completely naked.",
"Do or drink, write on their arse ‘Owned by [your name]'.",
"Drink if, you are the better driver.",
"Drink if, you enjoy being choked.",
"Drink if, you have a foot fetish.",
"Drink if, you have had sex in a car.",
"Drink if, you have had sex in front of the mirror.",
"Drink if, you have hit it raw.",
"Drink if, you have orgasmed at the same time.",
"Drink if, you have swallowed their cum.",
"Drink if, you moan the loudest.",
"Drink if, you would have a pearl necklace.",
"Drink if, you would have a threesome.",
"Drink if, you would have sex in public.",
"Drink if, you would try role play.",
"Drink if, you would wear a butt plug.",
"Fantasy fulfilled, you are a model posing for a sensual photo shoot and your partner has to direct you. Play for 3 minutes.",
"Fantasy fulfilled, you are unable to pay your rent and your partner is your landlord, what solution can you come up with? Play for 3 minutes.",
"Loser drinks, arm wrestle.",
"Loser drinks, staring contest.",
"Would they rather, be in control or relinquish control? (Drink if wrong)",
"Would they rather, be tied up or tie up? (Drink if wrong)",
"Would they rather, blindfold or handcuffs? (Drink if wrong)",
"Would they rather, toys or no toys? (Drink if wrong)"
],

black:[
"Do or drink, bend over a surface and play from behind.",
"Do or drink, deep throat and gag on his dick.",
"Do or drink, do everything they say. Anything goes.",
"Do or drink, do whatever it takes to make them cum.",
"Do or drink, eat their arse.",
"Do or drink, eat them from behind.",
"Do or drink, film yourselves doing your favourite sex position.",
"Do or drink, finger her whilst she tells you everything she wants you to do to her.",
"Do or drink, get on your knees and beg your partner for pleasure.",
"Do or drink, have them act dominant for 3 minutes.",
"Do or drink, have them act submissive for 3 minutes.",
"Do or drink, lay your partners head off the end of the bed / sofa and fuck their face.",
"Do or drink, lick his dick from the balls to the tip, sliding you tongue up and down his shaft.",
"Do or drink, lube up and slide it in your arse.",
"Do or drink, lube up and slide it in your partners arse.",
"Do or drink, pin your partner up against the wall and fuck them from behind.",
"Do or drink, put your fingers in a hole and see how many fingers you can get inside.",
"Do or drink, sit on their face.",
"Do or drink, sixty nine but eat each others arse.",
"Do or drink, smack your dick on her clit.",
"Do or drink, suck on his balls and stroke his shaft.",
"Do or drink, swap between pain and pleasure. Give you partner light pain (spanking) and then give them pleasure (oral).",
"Do or drink, take a photo of your partner eating your pussy.",
"Do or drink, take a photo of your partner sucking your cock.",
"Do or drink, tie your partner up and pleasure them.",
"Do or drink, try a new sex position you’ve never done before.",
"Drink if, you have a praise kink.",
"Drink if, you have used a household item as a sex toy.",
"Drink if, you have watched girl on girl porn.",
"Drink if, you have watched guy on guy porn.",
"Drink if, you like it up the arse.",
"Drink if, you love a finger in the arse.",
"Drink if, you would have a golden shower.",
"Drink if, you would make a sex tape.",
"Drink if, you would send a climax or cum shot video.",
"Drink if, you would try food play.",
"Drink if, you would try pegging.",
"Drink if, you would try swinging.",
"Drink if, you would wear a sex toy in public.",
"Fantasy fulfilled, pretend your partner has come for a massage at your parlour and see where things end up.",
"Fantasy fulfilled, you have been taken prisoner and your partner is your captive. Convince them to set you free.",
"Would they rather, be praised or be degraded? (Drink if wrong)",
"Would they rather, choke or be choked? (Drink if wrong)",
"Would they rather, dominate or be dominated? (Drink if wrong)",
"Would they rather, pain or pleasure? (Drink if wrong)",
"Would they rather, rough sex or slow and intense? (Drink if wrong)",
"Would they rather, tie up or be tied up? (Drink if wrong)"
],

whitetoy:[
"Do or drink, give your partner one light spank with the paddle or whip.",
"Do or drink, name one toy you haven’t tried but would love to.",
"Do or drink, pick a toy and describe a fantasy scene using it. No holding back.",
"Do or drink, show your partner how you’d use the dildo on them.",
"Drink if, you’ve bought a toy just to impress a partner.",
"Drink if, you’ve ever used a toy on yourself while thinking about your partner.",
"How well do you know them, what’s their top toy: dildo, vibrator, paddle or stroker?",
"How well do you know them, where do they prefer the vibrator first: nipples, clit, or inner thigh?",
"Would you rather, be teased with a vibrator or be spanked with a paddle?",
"Would you rather, control the toy or be controlled by it?"
],

redtoy:[
"Do or drink, blindfold your partner and run a toy over their body.",
"Do or drink, let your partner guide your hand as you use the dildo on them.",
"Do or drink, put the dildo between you legs and make your partner straddle it (no penetration).",
"Do or drink, use a toy on your partner but they can’t make a sound. If they do, you both drink.",
"Do or drink, use the dildo on your partner to trace their pussy, no entry.",
"Do or drink, use the paddle or whip on your partner to lightly mark their skin, 5 strokes.",
"Do or drink, use the stroker (or lubed hand) on your partner for 30 seconds, slow and teasing.",
"Do or drink, use the vibrator on your partner while they keep eye contact with you for 1 minute.",
"Do or drink, use the vibrator on your partner’s inner thighs while they stay still for 1 minute.",
"Do or drink, use the vibrator on your partners thighs, but don’t touch the clit for 2 minutes. Break the rule, take two shots.",
"Drink if, you’ve ever used a toy in public. (Even a remote one).",
"Drink if, you’ve faked a reaction to make them feel better while using a toy.",
"Drink if, you’ve orgasmed from toy use alone, with no hands.",
"How well do you know them, what’s your partners no-go zone when it comes to toys? (Drink if wrong)",
"How well do you know them, where’s your partners favourite place to be spanked: arse, thighs or elsewhere? (Drink if wrong)",
"Would they rather, paddle while being fingered or dildo while being spanked (Drink if wrong)",
"Would they rather, silent toy or loud intense vibes? (Drink if wrong)",
"Would they rather, vibrator on high for 30 seconds or paddle on the arse 5 times (Drink if wrong)"
],

blacktoy:[
"Do or drink, act out a full toy punishment scene: your partner is the strict dom, you’re the naughty submissive being corrected. Minimum 30 seconds.",
"Do or drink, bend your partner over. Use the paddle between thrusts with the dildo. 10 strokes.",
"Do or drink, blindfold your partner. Use two toys at once. One for teasing, one for penetration.",
"Do or drink, let your partner gag you with the dildo whilst you make prolonged eye contact.",
"Do or drink, lube up the dildo and penetrate your partners arse. Go slow and sensual.",
"Do or drink, lube your partner up and use the dildo in the position of your choice. You lead.",
"Do or drink, mix it all. Paddle, then the toy, then tease. All within 3 minute or both drink.",
"Do or drink, push the dildo in your partner then hold it. Don’t move, just watch their reaction. 1 minute.",
"Do or drink, sit your partner on the dildo and paddle their thighs while they ride it.",
"Do or drink, use the dildo on your partner. Full penetration. Go slow, deep and dirty.",
"Do or drink, use the stroker (or lubed hand) while they watch, or both drink.",
"Do or drink, use the vibrator on your partner while you talk dirty in their ear. 1 minute.",
"Do or drink, use the vibrator on your partner with penetration while you talk dirty in their ear. 1 minute.",
"Do or drink, use the vibrator on your partner’s arse while fingering / wanking them.",
"Do or drink, you are the toy now. Do exactly what your partner tells you. 2 full minutes",
"Drink if, you’ve cum from anal play.",
"Drink if, you’ve ever recorded a toy session.",
"Drink if, you’ve taken a toy in your arse.",
"How well do you know them, does your partner prefer anal with a toy or oral while being spanked? (Drink if wrong)",
"How well do you know them, where’s your partners favourite hole to play with toys: mouth, arse or pussy? (Drink if wrong)",
"Would they rather, deep penetration or intense clitoral stimulation with vibrator? (Drink if wrong)",
"Would they rather, dildo doggy or vibrator on their clit while riding you? (Drink if wrong)",
"Would they rather, spit or lube? (Drink if wrong)"
]
};

let usedCards = Object.fromEntries(
  Object.keys(cards).map(k => [k, new Set()])
);

// Age gate
const ageGate = document.getElementById("ageGate");
if(localStorage.getItem("ageVerified") !== "true"){
  ageGate.classList.remove("hidden");
}

document.getElementById("enterBtn").onclick = () => {
  localStorage.setItem("ageVerified","true");
  ageGate.classList.add("hidden");
};

// Buttons
document.querySelectorAll("[data-category]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    currentCategory = btn.dataset.category;
    drawCard();
  });
});

drawBtn.addEventListener("click", drawCard);

function drawCard(){
  if(!currentCategory){
    cardEl.innerText = "Pick a category";
    return;
  }

  const available = cards[currentCategory].filter(c => 
    !usedCards[currentCategory].has(c)
  );

  if(!available.length){
    cardEl.innerText = "No more cards";
    return;
  }

  const selected = available[Math.floor(Math.random()*available.length)];
  usedCards[currentCategory].add(selected);

  cardEl.className = "card " + currentCategory;
  cardEl.innerText = selected;
}
