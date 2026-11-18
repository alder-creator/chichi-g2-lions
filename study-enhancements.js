/* Chichi Final Prep Study & Wheel; original learning examples only. */
(()=>{'use strict';
const GROUP='g2';
const VOCAB=[{"week":1,"word":"time line","ko":"연대표","img":"assets/vocab/week1/01_time_line.png","audio":"assets/audio/vocab/week1/word_01.mp3","definition":"a line that includes marks showing when particular events happened in the past"},{"week":1,"word":"recover","ko":"회복하다","img":"assets/vocab/week1/02_recover.png","audio":"assets/audio/vocab/week1/word_02.mp3","definition":"to become healthy after an illness or injury"},{"week":1,"word":"accident","ko":"사고","img":"assets/vocab/week1/03_accident.png","audio":"assets/audio/vocab/week1/word_03.mp3","definition":"a sudden event that is not planned or intended and that causes damage or injury"},{"week":1,"word":"professor","ko":"교수","img":"assets/vocab/week1/04_professor.png","audio":"assets/audio/vocab/week1/word_04.mp3","definition":"a teacher especially of the highest rank at a college or university"},{"week":1,"word":"brightness","ko":"밝기","img":"assets/vocab/week1/05_brightness.png","audio":"assets/audio/vocab/week1/word_05.mp3","definition":"the quality or state of being bright"},{"week":1,"word":"memory","ko":"기억","img":"assets/vocab/week1/06_memory.png","audio":"assets/audio/vocab/week1/word_06.mp3","definition":"a person, thing, or event that can be remembered"},{"week":1,"word":"sweets","ko":"단것","img":"assets/vocab/week1/07_sweets.png","audio":"assets/audio/vocab/week1/word_07.mp3","definition":"something that tastes sweet"},{"week":1,"word":"tune","ko":"곡조","img":"assets/vocab/week1/08_tune.png","audio":"assets/audio/vocab/week1/word_08.mp3","definition":"a melody or musical composition"},{"week":1,"word":"discover","ko":"발견하다","img":"assets/vocab/week1/09_discover.png","audio":"assets/audio/vocab/week1/word_09.mp3","definition":"to find or see something for the first time"},{"week":1,"word":"comfort","ko":"위로하다","img":"assets/vocab/week1/10_comfort.png","audio":"assets/audio/vocab/week1/word_10.mp3","definition":"to ease the sorrow of someone"},{"week":1,"word":"prairie","ko":"대초원","img":"assets/vocab/week1/11_prairie.png","audio":"assets/audio/vocab/week1/word_11.mp3","definition":"a flat or rolling land covered with grass"},{"week":1,"word":"painting","ko":"그림","img":"assets/vocab/week1/12_painting.png","audio":"assets/audio/vocab/week1/word_12.mp3","definition":"the act or art of using paints"},{"week":1,"word":"scandalous","ko":"충격적인","img":"assets/vocab/week1/13_scandalous.png","audio":"assets/audio/vocab/week1/word_13.mp3","definition":"something that is shocking or disgraceful, causing a strong negative reaction from others"},{"week":1,"word":"achieve","ko":"이루다","img":"assets/vocab/week1/14_achieve.png","audio":"assets/audio/vocab/week1/word_14.mp3","definition":"to get by trying hard; accomplish"},{"week":1,"word":"wonder","ko":"궁금해하다","img":"assets/vocab/week1/15_wonder.png","audio":"assets/audio/vocab/week1/word_15.mp3","definition":"to be curious about something"},{"week":1,"word":"hum","ko":"흥얼거리다","img":"assets/vocab/week1/16_hum.png","audio":"assets/audio/vocab/week1/word_16.mp3","definition":"a soft, murmuring sound that keeps going"},{"week":1,"word":"canvas","ko":"캔버스","img":"assets/vocab/week1/17_canvas.png","audio":"assets/audio/vocab/week1/word_17.mp3","definition":"a strong, coarse cloth used as a surface for painting"},{"week":1,"word":"skyscraper","ko":"고층 건물","img":"assets/vocab/week1/18_skyscraper.png","audio":"assets/audio/vocab/week1/word_18.mp3","definition":"a very tall building"},{"week":1,"word":"amaze","ko":"깜짝 놀라게 하다","img":"assets/vocab/week1/19_amaze.png","audio":"assets/audio/vocab/week1/word_19.mp3","definition":"to fill someone with wonder"},{"week":1,"word":"delight","ko":"기쁨","img":"assets/vocab/week1/20_delight.png","audio":"assets/audio/vocab/week1/word_20.mp3","definition":"to give great pleasure or joy"},{"week":1,"word":"universe","ko":"우주","img":"assets/vocab/week1/21_universe.png","audio":"assets/audio/vocab/week1/word_21.mp3","definition":"all of space, including planets, stars, galaxies, and everything that exists"},{"week":1,"word":"astound","ko":"매우 놀라게 하다","img":"assets/vocab/week1/22_astound.png","audio":"assets/audio/vocab/week1/word_22.mp3","definition":"to surprise very much; amaze; astonish"},{"week":1,"word":"extraordinary","ko":"놀라운","img":"assets/vocab/week1/23_extraordinary.png","audio":"assets/audio/vocab/week1/word_23.mp3","definition":"very unusual, remarkable, or amazing"},{"week":1,"word":"dusky","ko":"어스름한","img":"assets/vocab/week1/24_dusky.png","audio":"assets/audio/vocab/week1/word_24.mp3","definition":"marked by slight or deficient light"},{"week":1,"word":"whisper","ko":"속삭이다","img":"assets/vocab/week1/25_whisper.png","audio":"assets/audio/vocab/week1/word_25.mp3","definition":"to speak or say very softly"},{"week":1,"word":"enchant","ko":"매혹하다","img":"assets/vocab/week1/26_enchant.png","audio":"assets/audio/vocab/week1/word_26.mp3","definition":"to delight; charm"},{"week":1,"word":"yelping","ko":"낑낑거리기","img":"assets/vocab/week1/27_yelping.png","audio":"assets/audio/vocab/week1/word_27.mp3","definition":"making quick, high-pitched barking sounds"},{"week":1,"word":"ladder","ko":"사다리","img":"assets/vocab/week1/28_ladder.png","audio":"assets/audio/vocab/week1/word_28.mp3","definition":"a device used for climbing"},{"week":1,"word":"new","ko":"새로운","img":"","audio":"assets/audio/hfw/week1/word_01.mp3","sight":true},{"week":1,"word":"found","ko":"찾았다","img":"","audio":"assets/audio/hfw/week1/word_02.mp3","sight":true},{"week":1,"word":"thank","ko":"감사하다","img":"","audio":"assets/audio/hfw/week1/word_03.mp3","sight":true},{"week":1,"word":"please","ko":"제발","img":"","audio":"assets/audio/hfw/week1/word_04.mp3","sight":true},{"week":1,"word":"always","ko":"항상","img":"","audio":"assets/audio/hfw/week1/word_05.mp3","sight":true},{"week":2,"word":"equality","ko":"평등","img":"assets/vocab/week2/01_equality.png","audio":"assets/audio/vocab/week2/word_01.mp3","definition":"the quality or state of having the same rights and social status"},{"week":2,"word":"justice","ko":"정의","img":"assets/vocab/week2/02_justice.png","audio":"assets/audio/vocab/week2/word_02.mp3","definition":"the quality of being fair or just"},{"week":2,"word":"freedom","ko":"자유","img":"assets/vocab/week2/03_freedom.png","audio":"assets/audio/vocab/week2/word_03.mp3","definition":"the state of being free"},{"week":2,"word":"peace","ko":"평화","img":"assets/vocab/week2/04_peace.png","audio":"assets/audio/vocab/week2/word_04.mp3","definition":"a state in which there is no war or fighting"},{"week":2,"word":"allowed","ko":"허락된","img":"assets/vocab/week2/05_allowed.png","audio":"assets/audio/vocab/week2/word_05.mp3","definition":"permitted to happen"},{"week":2,"word":"fame","ko":"명성","img":"assets/vocab/week2/06_fame.png","audio":"assets/audio/vocab/week2/word_06.mp3","definition":"the quality of being famous"},{"week":2,"word":"love","ko":"사랑","img":"assets/vocab/week2/07_love.png","audio":"assets/audio/vocab/week2/word_07.mp3","definition":"to like something very much"},{"week":2,"word":"another","ko":"또 다른","img":"assets/vocab/week2/08_another.png","audio":"assets/audio/vocab/week2/word_08.mp3","definition":"one more; an additional"},{"week":2,"word":"allow","ko":"허락하다","img":"assets/vocab/week2/09_allow.png","audio":"assets/audio/vocab/week2/word_09.mp3","definition":"to permit to happen"},{"week":2,"word":"league","ko":"리그","img":"assets/vocab/week2/10_league.png","audio":"assets/audio/vocab/week2/word_10.mp3","definition":"a number of people, groups, or countries joined together for a common purpose"},{"week":2,"word":"August","ko":"8월","img":"assets/vocab/week2/11_August.png","audio":"assets/audio/vocab/week2/word_11.mp3","definition":"the eighth month of the year"},{"week":2,"word":"African","ko":"아프리카의","img":"assets/vocab/week2/12_African.png","audio":"assets/audio/vocab/week2/word_12.mp3","definition":"of or having to do with Africa or its people"},{"week":2,"word":"field","ko":"들판","img":"assets/vocab/week2/13_field.png","audio":"assets/audio/vocab/week2/word_13.mp3","definition":"an area of land on which a game is played"},{"week":2,"word":"first base","ko":"1루","img":"assets/vocab/week2/14_first_base.png","audio":"assets/audio/vocab/week2/word_14.mp3","definition":"the base that must be touched first by a base runner in baseball"},{"week":2,"word":"boo","ko":"야유하다","img":"assets/vocab/week2/15_boo.png","audio":"assets/audio/vocab/week2/word_15.mp3","definition":"to make a loud sound to show that something is disliked"},{"week":2,"word":"cheer","ko":"응원하다","img":"assets/vocab/week2/16_cheer.png","audio":"assets/audio/vocab/week2/word_16.mp3","definition":"to yell support or praise"},{"week":2,"word":"anyway","ko":"어쨌든","img":"assets/vocab/week2/17_anyway.png","audio":"assets/audio/vocab/week2/word_17.mp3","definition":"no matter what happens; in any case"},{"week":2,"word":"season","ko":"계절 또는 시즌","img":"assets/vocab/week2/18_season.png","audio":"assets/audio/vocab/week2/word_18.mp3","definition":"a specific period of time during which a particular sport or activity takes place"},{"week":2,"word":"rookie","ko":"신인","img":"assets/vocab/week2/19_rookie.png","audio":"assets/audio/vocab/week2/word_19.mp3","definition":"an athlete who has just started playing a professional sport"},{"week":2,"word":"valuable","ko":"소중한","img":"assets/vocab/week2/20_valuable.png","audio":"assets/audio/vocab/week2/word_20.mp3","definition":"having great use or importance"},{"week":2,"word":"nasty","ko":"심술궂은","img":"assets/vocab/week2/21_nasty.png","audio":"assets/audio/vocab/week2/word_21.mp3","definition":"unpleasant or unkind"},{"week":2,"word":"teammate","ko":"팀 동료","img":"assets/vocab/week2/22_teammate.png","audio":"assets/audio/vocab/week2/word_22.mp3","definition":"a person who is a member of the same team"},{"week":2,"word":"admire","ko":"존경하다","img":"assets/vocab/week2/23_admire.png","audio":"assets/audio/vocab/week2/word_23.mp3","definition":"to think highly of someone"},{"week":2,"word":"awhile","ko":"잠시 동안","img":"assets/vocab/week2/24_awhile.png","audio":"assets/audio/vocab/week2/word_24.mp3","definition":"for a short time"},{"week":2,"word":"stand up for","ko":"옹호하다","img":"assets/vocab/week2/25_stand_up_for.png","audio":"assets/audio/vocab/week2/word_25.mp3","definition":"to defend someone or something against criticism"},{"week":2,"word":"any","ko":"어느 것이든","img":"","audio":"assets/audio/hfw/week2/word_01.mp3","sight":true},{"week":2,"word":"pull","ko":"당기다","img":"","audio":"assets/audio/hfw/week2/word_02.mp3","sight":true},{"week":2,"word":"very","ko":"매우","img":"","audio":"assets/audio/hfw/week2/word_03.mp3","sight":true},{"week":2,"word":"were","ko":"~이었다","img":"","audio":"assets/audio/hfw/week2/word_04.mp3","sight":true},{"week":2,"word":"every","ko":"모든","img":"","audio":"assets/audio/hfw/week2/word_05.mp3","sight":true},{"week":3,"word":"virtual reality","ko":"가상 현실","img":"assets/vocab/week3/01_virtual_reality.png","audio":"assets/audio/vocab/week3/word_01.mp3","definition":"an environment produced by a computer that looks and seems real to the person experiencing it"},{"week":3,"word":"technology","ko":"기술","img":"assets/vocab/week3/02_technology.png","audio":"assets/audio/vocab/week3/word_02.mp3","definition":"new machines, equipment, and ways of doing things that are based on modern knowledge about science and computers"},{"week":3,"word":"3D printer","ko":"3D 프린터","img":"assets/vocab/week3/03_3D_printer.png","audio":"assets/audio/vocab/week3/word_03.mp3","definition":"a piece of equipment that makes objects by building up thin layers of a substance"},{"week":3,"word":"ingredient","ko":"재료","img":"assets/vocab/week3/04_ingredient.png","audio":"assets/audio/vocab/week3/word_04.mp3","definition":"one of the foods that you use to make a particular food or dish"},{"week":3,"word":"ranch","ko":"목장","img":"assets/vocab/week3/05_ranch.png","audio":"assets/audio/vocab/week3/word_05.mp3","definition":"a very large farm"},{"week":3,"word":"cattle","ko":"소 떼","img":"assets/vocab/week3/06_cattle.png","audio":"assets/audio/vocab/week3/word_06.mp3","definition":"a group of cows, bulls, and steers"},{"week":3,"word":"market","ko":"시장","img":"assets/vocab/week3/07_market.png","audio":"assets/audio/vocab/week3/word_07.mp3","definition":"a place or store where food or goods are for sale"},{"week":3,"word":"railroad","ko":"철도","img":"assets/vocab/week3/08_railroad.png","audio":"assets/audio/vocab/week3/word_08.mp3","definition":"the steel tracks that trains travel on"},{"week":3,"word":"return","ko":"돌아오다","img":"assets/vocab/week3/09_return.png","audio":"assets/audio/vocab/week3/word_09.mp3","definition":"to come or go back"},{"week":3,"word":"week","ko":"주","img":"assets/vocab/week3/10_week.png","audio":"assets/audio/vocab/week3/word_10.mp3","definition":"a period of seven days"},{"week":3,"word":"older","ko":"더 나이 많은","img":"assets/vocab/week3/11_older.png","audio":"assets/audio/vocab/week3/word_11.mp3","definition":"having more age"},{"week":3,"word":"promise","ko":"약속하다","img":"assets/vocab/week3/12_promise.png","audio":"assets/audio/vocab/week3/word_12.mp3","definition":"to give one’s word"},{"week":3,"word":"trip","ko":"여행","img":"assets/vocab/week3/13_trip.png","audio":"assets/audio/vocab/week3/word_13.mp3","definition":"the act of traveling or going from one place to another"},{"week":3,"word":"load","ko":"싣다","img":"assets/vocab/week3/14_load.png","audio":"assets/audio/vocab/week3/word_14.mp3","definition":"to put things onto or into a vehicle, container, or machine"},{"week":3,"word":"take","ko":"가져가다","img":"assets/vocab/week3/15_take.png","audio":"assets/audio/vocab/week3/word_15.mp3","definition":"to move or carry something or someone from one place to another"},{"week":3,"word":"drive","ko":"운전하다","img":"assets/vocab/week3/16_drive.png","audio":"assets/audio/vocab/week3/word_16.mp3","definition":"an organized way of directing animals to move"},{"week":3,"word":"easier","ko":"더 쉬운","img":"assets/vocab/week3/17_easier.png","audio":"assets/audio/vocab/week3/word_17.mp3","definition":"less difficult; more simple"},{"week":3,"word":"life","ko":"삶","img":"assets/vocab/week3/18_life.png","audio":"assets/audio/vocab/week3/word_18.mp3","definition":"the way people or animals live"},{"week":3,"word":"mind","ko":"마음","img":"assets/vocab/week3/19_mind.png","audio":"assets/audio/vocab/week3/word_19.mp3","definition":"the part of a person that thinks and feels"},{"week":3,"word":"surprise","ko":"놀라움","img":"assets/vocab/week3/20_surprise.png","audio":"assets/audio/vocab/week3/word_20.mp3","definition":"a feeling of wonder or amazement caused by something unexpected"},{"week":3,"word":"train","ko":"기차","img":"assets/vocab/week3/21_train.png","audio":"assets/audio/vocab/week3/word_21.mp3","definition":"a line of railroad cars connected together"},{"week":3,"word":"hardly","ko":"거의 ~않다","img":"assets/vocab/week3/22_hardly.png","audio":"assets/audio/vocab/week3/word_22.mp3","definition":"almost not at all"},{"week":3,"word":"imagine","ko":"상상하다","img":"assets/vocab/week3/23_imagine.png","audio":"assets/audio/vocab/week3/word_23.mp3","definition":"to form in the mind a thought, picture, or image"},{"week":3,"word":"never","ko":"결코 ~않다","img":"assets/vocab/week3/24_never.png","audio":"assets/audio/vocab/week3/word_24.mp3","definition":"at no time; not ever"},{"week":3,"word":"our","ko":"우리의","img":"","audio":"assets/audio/hfw/week3/word_01.mp3","sight":true},{"week":3,"word":"away","ko":"떨어져","img":"","audio":"assets/audio/hfw/week3/word_02.mp3","sight":true},{"week":3,"word":"light","ko":"빛 또는 가벼운","img":"","audio":"assets/audio/hfw/week3/word_03.mp3","sight":true},{"week":3,"word":"never","ko":"결코 ~않다","img":"","audio":"assets/audio/hfw/week3/word_04.mp3","sight":true},{"week":3,"word":"pretty","ko":"예쁜","img":"","audio":"assets/audio/hfw/week3/word_05.mp3","sight":true},{"week":4,"word":"land","ko":"땅","img":"assets/vocab/week4/01_land.png","audio":"assets/audio/vocab/week4/word_01.mp3","definition":"the ground and countryside of a country"},{"week":4,"word":"people","ko":"사람들","img":"assets/vocab/week4/02_people.png","audio":"assets/audio/vocab/week4/word_02.mp3","definition":"human beings, especially those who live in a community"},{"week":4,"word":"place","ko":"장소","img":"assets/vocab/week4/03_place.png","audio":"assets/audio/vocab/week4/word_03.mp3","definition":"a specific area or region of the world"},{"week":4,"word":"always","ko":"항상","img":"assets/vocab/week4/04_always.png","audio":"assets/audio/vocab/week4/word_04.mp3","definition":"all the time; continuously"},{"week":4,"word":"American","ko":"미국의","img":"assets/vocab/week4/05_American.png","audio":"assets/audio/vocab/week4/word_05.mp3","definition":"relating to or characteristic of the United States"},{"week":4,"word":"know","ko":"알다","img":"assets/vocab/week4/06_know.png","audio":"assets/audio/vocab/week4/word_06.mp3","definition":"to understand clearly; be certain of the facts or truth of"},{"week":4,"word":"same","ko":"같은","img":"assets/vocab/week4/07_same.png","audio":"assets/audio/vocab/week4/word_07.mp3","definition":"like another in every way"},{"week":4,"word":"star","ko":"별","img":"assets/vocab/week4/08_star.png","audio":"assets/audio/vocab/week4/word_08.mp3","definition":"a shape that has five or more points"},{"week":4,"word":"decide","ko":"결정하다","img":"assets/vocab/week4/09_decide.png","audio":"assets/audio/vocab/week4/word_09.mp3","definition":"to make up one’s mind"},{"week":4,"word":"leader","ko":"지도자","img":"assets/vocab/week4/10_leader.png","audio":"assets/audio/vocab/week4/word_10.mp3","definition":"a person who leads"},{"week":4,"word":"need","ko":"필요하다","img":"assets/vocab/week4/11_need.png","audio":"assets/audio/vocab/week4/word_11.mp3","definition":"to lack or require"},{"week":4,"word":"state","ko":"주 또는 상태","img":"assets/vocab/week4/12_state.png","audio":"assets/audio/vocab/week4/word_12.mp3","definition":"one of the fifty parts of the United States, each with its own government"},{"week":4,"word":"count","ko":"세다","img":"assets/vocab/week4/13_count.png","audio":"assets/audio/vocab/week4/word_13.mp3","definition":"to find out how many of something there are; add up"},{"week":4,"word":"like","ko":"좋아하다","img":"assets/vocab/week4/14_like.png","audio":"assets/audio/vocab/week4/word_14.mp3","definition":"similar to; in the same way as"},{"week":4,"word":"make","ko":"만들다","img":"assets/vocab/week4/15_make.png","audio":"assets/audio/vocab/week4/word_15.mp3","definition":"to cause to be, become, or happen"},{"week":4,"word":"live","ko":"살다","img":"assets/vocab/week4/16_live.png","audio":"assets/audio/vocab/week4/word_16.mp3","definition":"to reside or make one’s home in a particular place"},{"week":4,"word":"seamstress","ko":"재봉사","img":"assets/vocab/week4/17_seamstress.png","audio":"assets/audio/vocab/week4/word_17.mp3","definition":"a woman who sews as a job"},{"week":4,"word":"for sure","ko":"확실히","img":"assets/vocab/week4/18_for_sure.png","audio":"assets/audio/vocab/week4/word_18.mp3","definition":"certain; having no doubt"},{"week":4,"word":"circle","ko":"원","img":"assets/vocab/week4/19_circle.png","audio":"assets/audio/vocab/week4/word_19.mp3","definition":"a round shape or arrangement of objects"},{"week":4,"word":"field","ko":"들판","img":"assets/vocab/week4/20_field.png","audio":"assets/audio/vocab/week4/word_20.mp3","definition":"a large area of one colour on a flag"},{"week":4,"word":"join","ko":"참가하다","img":"assets/vocab/week4/21_join.png","audio":"assets/audio/vocab/week4/word_21.mp3","definition":"to become a member of"},{"week":4,"word":"row","ko":"줄","img":"assets/vocab/week4/22_row.png","audio":"assets/audio/vocab/week4/word_22.mp3","definition":"a line of things or people next to each other"},{"week":4,"word":"first","ko":"첫 번째","img":"assets/vocab/week4/23_first.png","audio":"assets/audio/vocab/week4/word_23.mp3","definition":"before all others"},{"week":4,"word":"how","ko":"어떻게","img":"","audio":"assets/audio/hfw/week4/word_01.mp3","sight":true},{"week":4,"word":"soon","ko":"곧","img":"","audio":"assets/audio/hfw/week4/word_02.mp3","sight":true},{"week":4,"word":"both","ko":"둘 다","img":"","audio":"assets/audio/hfw/week4/word_03.mp3","sight":true},{"week":4,"word":"read","ko":"읽다","img":"","audio":"assets/audio/hfw/week4/word_04.mp3","sight":true},{"week":4,"word":"again","ko":"다시","img":"","audio":"assets/audio/hfw/week4/word_05.mp3","sight":true}];
const GUIDES={"grammar": [["One or many", "1 → is / has  |  MANY → are / have", "Choose the correct verb: I am, you are, he/she/it is, we/they are.", "He / she / it IS. You / we / they ARE. I AM!", "The artist has paint. / The artists have paint.", "My friends ___ here.", "are"], ["Past, present, future", "⬅️ YESTERDAY  |  📍 NOW  |  ➡️ TOMORROW", "Choose the action word that matches the time.", "Yesterday = -ed (often). Tomorrow = will.", "Yesterday, we painted. Now, we paint. Tomorrow, we will paint.", "Yesterday, Dad ___ the car. (wash)", "washed"], ["Comparing two", "🐁 small → 🐇 smaller", "When comparing TWO things, we often add **-er**.", "Two? -er!", "A kitten is smaller than a dog.", "A bike is ___ than a bus.", "smaller"], ["The most", "🐁 small → 🐈 smaller → 🐘 smallest", "When comparing THREE or more, **-est** often tells the extreme. Some words change spelling.", "Three or more? -est!", "The hill is tall. The mountain is the tallest.", "Which is the ___ mountain? (tall)", "tallest"], ["Make it plural", "📦 1 box → 📦📦 2 boxes", "Many nouns take **-s**. Words ending in s, sh, ch, x or z often take **-es**.", "Listen for the extra syllable!", "dish → dishes; brush → brushes", "Three buses: do we write bus or buses?", "buses"], ["Past verbs", "WALK → WALKED  |  PLAY → PLAYED", "For regular verbs, add **-ed** to show an action already finished.", "Finished? Try -ed!", "She painted a rainbow yesterday.", "Yesterday, we ___ in the park. (jump)", "jumped"], ["-ing actions", "NOW + be + VERB-ing", "Use **am/is/are + -ing** for something happening right now.", "Happening now? -ing!", "The children are drawing now.", "He is ___ a song. (sing)", "singing"], ["Sound patterns", "ur → /er/  |  ou → /ow/", "The same sound can be spelled in different ways. Say the word aloud and compare the sound.", "Hear it → say it → spot it!", "turn / bird share a vowel sound.", "Does *cloud* share a vowel sound with *loud*?", "Yes"]], "reading": [["Main idea and theme", "📖 WHAT HAPPENS? → 💛 WHAT WE LEARN", "Main idea = what the story is about. Theme = the message or lesson.", "Main idea is what; theme is why it matters.", "A story about sharing art supplies may teach kindness."], ["Compare two texts", "📘 TEXT A  ∩  📗 TEXT B", "Find one thing both texts say, then one thing only each text says.", "Same goes in the middle!", "One text tells about painting; another tells about sculpture. Both are art."], ["Cause and effect", "☁️ CAUSE → ☔ EFFECT", "Cause = why it happened. Effect = what happened because of it.", "Why? → What happened?", "The wind blew hard, so the paper flew away."], ["Put events in order", "1️⃣ BEFORE → 2️⃣ DURING → 3️⃣ AFTER", "Look for time clues. Go back to the text to check.", "First, next, finally!", "First they planned. Next they built. Then they celebrated."], ["Find evidence", "❓ QUESTION → 🔎 EVIDENCE → ✅ ANSWER", "Find the part of the story that proves your answer.", "Prove it with a clue!", "If asked where, point to the sentence with the place."], ["Inference", "🔎 CLUES + 🧠 THINKING = 💡 INFERENCE", "Use clues and what you know to decide what probably happened.", "A smart guess needs proof!", "Someone carries a wet raincoat indoors: it probably rained."], ["Author's purpose", "📚 TEACH  |  🎭 ENTERTAIN  |  📣 CONVINCE", "Writers may give facts, tell a story, or convince readers.", "Facts, fun, or convince!", "A museum information page aims to teach."]]};
const ORIGINAL=Array.isArray(window.PREP_ORIGINAL_DATA)?window.PREP_ORIGINAL_DATA:[];
const slot=document.getElementById('prep-extra');if(!slot)return;
const oldTabs=document.querySelector('.tabs'),oldWork=document.getElementById('work');
const nav=document.createElement('nav');nav.className='prep-extras-nav';nav.setAttribute('aria-label','Study and practice choices');
nav.innerHTML='<button type="button" data-view="practice" aria-pressed="true">✏️ Practice Exam</button><button type="button" data-view="grammar" aria-pressed="false">🧩 Grammar Guide</button><button type="button" data-view="reading" aria-pressed="false">🔎 Reading Guide</button><button type="button" data-view="vocab" aria-pressed="false">🖼️ Vocabulary Corner</button><button type="button" data-view="wheel" aria-pressed="false">🎡 Final Exam Wheel</button>';
slot.before(nav);

// Visual hub uses unchanged, approved Chichi artwork from the existing week pages.
nav.innerHTML=[
 ['vocab','Vocabulary Corner','assets/chichi_present.png','vocab'],
 ['grammar','Grammar Guide','assets/chichi_think.png','grammar'],
 ['reading','Reading Guide','assets/chichi_read.png','reading'],
 ['games','Games Corner','assets/chichi_wave.png','games'],
 ['practice','Practice Exam','assets/chichi_celebrate.png','practice'],
 ['wheel','Final Exam Wheel','assets/ui/learn_v7546/wheel.png','wheel']
].map(([view,label,img,tone])=>'<button type="button" class="prep-art-card '+tone+'" data-view="'+view+'" aria-label="Open '+label+'">'
 +'<span class="prep-art-caption">'+label+'</span>'
 +'<img src="'+img+'" alt="" draggable="false">'
 +'<span class="prep-art-open">Let’s go!</span></button>').join('');
const returnButton=document.createElement('button');
returnButton.type='button';returnButton.className='prep-return';
returnButton.textContent='← Back to activities';
returnButton.addEventListener('click',()=>show('hub'));
nav.before(returnButton);

let active='practice',vWeek='all',vIndex=0,round=0,score=0,question=null,questions=[],spinning=false,answered=false,rotation=0;
function esc(s){return String(s??'').replace(/[&<>"']/g,x=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]));}
function show(view){
 if(view==='wheel'){window.location.href='index.html#finalwheel';return;}
 active=view;nav.hidden=view!=='hub';returnButton.hidden=view==='hub';
 oldTabs.hidden=view!=='practice';oldWork.hidden=view!=='practice';
 slot.hidden=(view==='hub'||view==='practice');
 if(view==='grammar'||view==='reading')renderGuides(view);
 if(view==='vocab')renderVocab();
 if(view==='games')renderGames();
 window.scrollTo?.({top:0,behavior:'instant'});
}
nav.addEventListener('click',e=>{const b=e.target.closest('button[data-view]');if(b)show(b.dataset.view);});

const GAME_TYPES=[["vocab", "Picture Cards"], ["listen", "Listen & Tap"], ["order", "Put It in Order"], ["read", "Read & Find"], ["match", "Match"], ["phonics", "Word Skills"]];
const GUIDE_QUIZZES={"grammar": [["The two artists ___ ready.", ["is", "are", "am"], 1], ["Yesterday, we ___ a big picture.", ["paint", "painted", "will paint"], 1], ["The green box is ___ than the blue box.", ["heavy", "heavier", "heaviest"], 1], ["Of all the trees, this one is the ___.", ["tall", "taller", "tallest"], 2], ["We packed three ___.", ["box", "boxes", "boxs"], 1], ["Yesterday, Dad ___ in the garden.", ["worked", "work", "working"], 0], ["Right now, she is ___ a letter.", ["write", "writing", "wrote"], 1], ["Which word has the same vowel sound as 'cloud'?", ["loud", "cold", "could"], 0]], "reading": [["A story is about two friends sharing toys. What could its theme be?", ["Sharing helps friendship", "Toy shops are noisy", "Some toys are blue"], 0], ["Two texts both describe ways to reuse bottles. What do they share?", ["a common topic", "the same author", "the same ending"], 0], ["A storm began, so the picnic moved indoors. What caused the move?", ["A storm", "A book", "A game"], 0], ["First, Jo rinsed the fruit. Next, she cut it. What happened first?", ["She cut it", "She rinsed it", "She ate it"], 1], ["Which is the best evidence for 'The pond froze'?", ["The water turned to ice", "The pond is large", "The ducks are small"], 0], ["The children wear coats and scarves. What is likely true?", ["It is cold", "It is very hot", "They are swimming"], 0], ["A leaflet tells people to recycle paper. It is trying to ___", ["persuade", "tell a fairy tale", "describe a dream"], 0]]};
const guideState={grammar:{index:0,done:new Set()},reading:{index:0,done:new Set()}};
const guideKey=type=>'chichi_final_guide_'+GROUP+'_'+type;
for(const type of Object.keys(guideState)){
 try{
   const saved=JSON.parse(localStorage.getItem(guideKey(type))||'[]');
   if(Array.isArray(saved)){
     guideState[type].done=new Set(saved.filter(n=>Number.isInteger(n)&&n>=0&&n<GUIDES[type].length));
   }
 }catch(e){}
}
function renderGuides(type){
 const arr=GUIDES[type],st=guideState[type],i=Math.min(st.index,arr.length-1),g=arr[i],q=GUIDE_QUIZZES[type][i];
 const completed=st.done.has(i),total=st.done.size;
 slot.innerHTML='<div class="guide-intro"><h2>'+(type==='grammar'?'🧩 Grammar Adventure':'🔎 Reading Detective')+'</h2>'
  +'<p>Look, remember, answer, then earn your check!</p>'
  +'<button type="button" class="study-control" id="guide-reset">Reset Guide Progress</button></div>'
  +'<div class="lesson-track" aria-label="Lesson progress">'+arr.map((x,j)=>'<button type="button" class="lesson-dot '+(j===i?'selected ':'')+(st.done.has(j)?'checked':'')+'" data-slide="'+j+'" aria-label="Slide '+(j+1)+' '+(st.done.has(j)?'completed':'')+'">'+(st.done.has(j)?'✓':j+1)+'</button>').join('')+'</div>'
  +'<article class="lesson-slide"><div class="lesson-number">Slide '+(i+1)+' of '+arr.length+' · <span class="lesson-count">'+total+' checked</span></div>'
  +'<h2>'+esc(g[0])+'</h2><div class="lesson-diagram" aria-label="Remember this pattern">'+esc(g[1]).replaceAll('  |  ',' &nbsp; • &nbsp; ')+'</div>'
  +'<p class="lesson-rule">'+esc(g[2].replaceAll('**','').replaceAll('*',''))+'</p>'
  +'<div class="lesson-memory">⭐ '+esc(g[3])+'</div><div class="lesson-example">💬 '+esc(g[4])+'</div>'
  +'<div class="lesson-quiz"><h3>🎯 Your turn!</h3><p class="lesson-question">'+esc(q[0])+'</p>'
  +'<div class="lesson-choices">'+q[1].map((a,n)=>'<button type="button" data-guess="'+n+'">'+esc(a)+'</button>').join('')+'</div>'
  +'<div class="lesson-feedback" role="status">'+(completed?'✅ Already checked. You can try it again!':'Choose an answer to earn your check.')+'</div></div>'
  +'<div class="lesson-actions"><button type="button" class="lesson-back" id="slide-prev" '+(i===0?'disabled':'')+'>← Previous</button>'
  +'<button type="button" class="lesson-forward" id="slide-next" '+(!completed?'disabled':'')+'>'+(i===arr.length-1?'Finish guide 🎉':'Next slide →')+'</button></div>'
  +'</article>';
 slot.querySelector('#guide-reset').onclick=()=>{
   if(!window.confirm('Clear your saved checks for this guide?'))return;
   st.done.clear();
   st.index=0;
   try{localStorage.removeItem(guideKey(type));}catch(e){}
   renderGuides(type);
 };
 slot.querySelectorAll('[data-slide]').forEach(b=>b.onclick=()=>{st.index=Number(b.dataset.slide);renderGuides(type);});
 slot.querySelector('#slide-prev').onclick=()=>{st.index=Math.max(0,i-1);renderGuides(type);};
 slot.querySelectorAll('[data-guess]').forEach(b=>b.onclick=()=>{
   const n=Number(b.dataset.guess),correct=n===q[2],fb=slot.querySelector('.lesson-feedback');
   if(!correct){b.classList.add('incorrect');fb.textContent='💡 Not quite. Look at the clue and try again!';return;}
   st.done.add(i);
   try{localStorage.setItem(guideKey(type),JSON.stringify([...st.done]));}catch(e){}
   b.classList.add('correct');
   slot.querySelectorAll('[data-guess]').forEach(x=>x.disabled=true);
   fb.textContent='✅ Well done! Slide '+(i+1)+' checked.';
   slot.querySelector('#slide-next').disabled=false;
   slot.querySelector('.lesson-count').textContent=st.done.size+' checked';
   const dot=slot.querySelector('[data-slide="'+i+'"]');
   dot.classList.add('checked');
   dot.textContent='✓';
   dot.setAttribute('aria-label','Slide '+(i+1)+' completed');
 });
 slot.querySelector('#slide-next').onclick=()=>{
   if(!st.done.has(i))return;
   if(i===arr.length-1){
     const missingSlide=arr.findIndex((_,j)=>!st.done.has(j));
     if(missingSlide>=0){st.index=missingSlide;renderGuides(type);return;}
     slot.querySelector('.lesson-slide').outerHTML='<div class="guide-finished"><h2>🏆 Guide complete!</h2><p>You checked all '+arr.length+' slides. Brilliant!</p><button id="guide-restart" type="button">Review again ↻</button></div>';
     slot.querySelector('#guide-restart').onclick=()=>{st.index=0;renderGuides(type);};
     if(window.ChichiCelebrate)window.ChichiCelebrate.show({title:'Guide complete!'});
   } else {st.index=i+1;renderGuides(type);}
 };
}
function speak(w){try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(w);u.lang='en-GB';u.rate=.85;const v=speechSynthesis.getVoices().find(v=>v.lang.startsWith('en-GB'));if(v)u.voice=v;speechSynthesis.speak(u);}catch(e){}}
function play(w,a){if(a){const snd=new Audio(a);snd.onerror=()=>speak(w);snd.play().catch(()=>speak(w));}else speak(w);}

let vocabPage=0;
const VOCAB_PER_PAGE=12;
function renderVocab(){
 const arr=VOCAB.filter(v=>vWeek==='all'||String(v.week)===String(vWeek));
 const pages=Math.max(1,Math.ceil(arr.length/VOCAB_PER_PAGE));vocabPage=Math.min(vocabPage,pages-1);
 const selected=arr.slice(vocabPage*VOCAB_PER_PAGE,(vocabPage+1)*VOCAB_PER_PAGE);
 slot.innerHTML='<div class="vocab-shell"><div class="vocab-hero"><h2>Vocabulary Corner</h2><p>Look • Say • Listen • Remember</p></div>'
 +'<div class="vocab-toolbar-row"><div class="week-tabs">'
 +['all',1,2,3,4].map(w=>'<button type="button" data-week="'+w+'" class="'+(String(vWeek)===String(w)?'active':'')+'">'+(w==='all'?'All Weeks':'Week '+w)+'</button>').join('')
 +'</div><button type="button" class="study-control" id="v-reveal-all">Reveal All</button></div>'
 +'<div class="vocab-summary">'+arr.length+' words · showing '+(arr.length?vocabPage*VOCAB_PER_PAGE+1:0)+'–'+Math.min(arr.length,(vocabPage+1)*VOCAB_PER_PAGE)+' · tap 🔊 to listen</div>'
 +'<div class="vocab-grid">'
 +selected.map((v,i)=>'<article class="word-card"><div class="word-picture '+(v.img?'':'missing-picture')+'">'+(v.img?'<img src="'+esc(v.img)+'" alt="" loading="lazy" onerror="this.replaceWith(document.createTextNode(\'🔤\'))">':'<span class="word-abc" aria-hidden="true">ABC</span>')+'</div><div class="word-info"><h3 id="v-word-'+i+'" hidden>'+esc(v.word)+'</h3><p class="korean">'+esc(v.ko)+'</p><button type="button" class="study-control" data-reveal="'+i+'" aria-controls="v-word-'+i+'" aria-expanded="false">Reveal Word</button></div><button type="button" class="sound-word" data-sound="'+i+'" aria-label="Listen to the word">🔊</button></article>').join('')
 +'</div><div class="vocab-pages"><button type="button" id="v-prev" '+(vocabPage===0?'disabled':'')+'>← Previous</button><span>Page '+(vocabPage+1)+' of '+pages+'</span><button type="button" id="v-next" '+(vocabPage===pages-1?'disabled':'')+'>Next →</button></div></div>';
 slot.querySelectorAll('[data-week]').forEach(b=>b.onclick=()=>{vWeek=b.dataset.week;vocabPage=0;renderVocab()});
 slot.querySelector('#v-prev').onclick=()=>{vocabPage=Math.max(0,vocabPage-1);renderVocab()};
 slot.querySelector('#v-next').onclick=()=>{vocabPage=Math.min(pages-1,vocabPage+1);renderVocab()};
 const revealAll=slot.querySelector('#v-reveal-all');
 const revealButtons=[...slot.querySelectorAll('[data-reveal]')];
 function setRevealed(button,revealed){
   slot.querySelector('#'+button.getAttribute('aria-controls')).hidden=!revealed;
   button.setAttribute('aria-expanded',String(revealed));
   button.textContent=revealed?'Hide Word':'Reveal Word';
 }
 function allRevealed(){
   return revealButtons.every(button=>button.getAttribute('aria-expanded')==='true');
 }
 function updateRevealAll(){
   revealAll.textContent=allRevealed()?'Hide All':'Reveal All';
 }
 revealAll.onclick=()=>{
   const reveal=!allRevealed();
   revealButtons.forEach(button=>setRevealed(button,reveal));
   updateRevealAll();
 };
 revealButtons.forEach(button=>button.onclick=()=>{
   setRevealed(button,button.getAttribute('aria-expanded')==='false');
   updateRevealAll();
 });
 slot.querySelectorAll('[data-sound]').forEach(button=>button.onclick=()=>{
   const v=selected[Number(button.dataset.sound)];
   play(v.word,v.audio);
 });
}


function shuffle(a){for(let i=a.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function wheelSegments(){
 if(GROUP==='g2')return Array.from({length:15},(_,i)=>{const ang=(i+.5)*24*Math.PI/180-Math.PI/2;const x=50+41*Math.cos(ang),y=50+41*Math.sin(ang);return '<span class="number-token" style="left:'+x+'%;top:'+y+'%">'+(i+1)+'</span>';}).join('');
 const imgs=['picture_paw.png','words_star.png','reading_butterfly.png','phonics_abc.png','story_flower.png','words_star.png'];return imgs.map((ic,i)=>'<span class="slice-label label-'+i+'"><img src="assets/ui/wheel_icons/'+ic+'" alt="" aria-hidden="true"></span>').join('');
}
function resetWheel(){const sections=['Reading','Word Work','Language Skills'];questions=shuffle(sections.flatMap(s=>shuffle(ORIGINAL.filter(q=>q.section===s)).slice(0,4)));round=0;score=0;answered=false;spinning=false;rotation=0;question=null;if(window.ChichiCelebrate)window.ChichiCelebrate.dismiss();renderWheel();}

function renderWheel(){
 if(!questions.length){
  const sections=['Reading','Word Work','Language Skills'];
  questions=shuffle(sections.flatMap(s=>shuffle(ORIGINAL.filter(q=>q.section===s)).slice(0,4)));
 }
 const gold=new Set([4,9,14]),colors=[];
 for(let i=0;i<15;i++){
   const start=i*24,end=(i+1)*24,c=gold.has(i)?'#d4af37':i%2?'#fffdf7':'#e20808';
   colors.push('#171717 '+start+'deg '+(start+1.3)+'deg',c+' '+(start+1.3)+'deg '+end+'deg');
 }
 let tokens='';
 for(let i=0;i<15;i++){
  const ang=(i+.5)*24*Math.PI/180-Math.PI/2,x=50+41*Math.cos(ang),y=50+41*Math.sin(ang);
  tokens+='<span class="native-token '+(gold.has(i)?'gold':'')+'" style="left:'+x+'%;top:'+y+'%">'+(i+1)+'</span>';
  if(gold.has(i)){const hx=50+30*Math.cos(ang),hy=50+30*Math.sin(ang);tokens+='<span class="native-heart" style="left:'+hx+'%;top:'+hy+'%">♥</span>';}
 }
 slot.innerHTML='<section class="native-wheel-shell"><header class="native-wheel-top"><h2>Final Exam Wheel!</h2>'
   +'<p>Weeks 1–4 Review · Reading • Words • Language</p></header>'
   +'<div class="native-wheel-progress"><span>📖 Reading</span><span>⭐ Words</span><span>✏️ Language</span><strong><span id="spin-count">'+Math.min(12,round+1)+'</span>/12 spins</strong>'
   +'<button id="wheel-restart" class="native-reset" type="button">Reset</button></div>'
   +'<div class="native-wheel-main"><div class="native-wheel-left">'
   +'<div class="native-wheel-pointer"></div>'
   +'<div class="native-wheel-ring"><div id="special-disc" class="native-wheel-disc" style="background:conic-gradient('+colors.join(',')+');transform:rotate('+rotation+'deg)">'+tokens+'</div>'
   +'<button class="native-spin" type="button" id="special-spin">SPIN</button></div>'
   +'<div class="native-wheel-counters"><span>⭐ Points <b id="spin-score">'+score+'</b> / 12</span><span>❤️ Hearts ❤️❤️❤️❤️</span></div>'
   +'</div><div class="native-wheel-side" id="wheel-question" aria-live="polite">'
   +'<div class="native-wheel-idle"><img src="'+(GROUP==='g1'?'assets/mascot/chichi.png':'assets/chichi_present.png')+'" alt="" onerror="this.style.display=\'none\'"><h3>Words · Reading · Language</h3><p>Tap SPIN to get a question!</p></div>'
   +'</div></div></section>';
 slot.querySelector('#special-spin').onclick=spin;
 slot.querySelector('#wheel-restart').onclick=resetWheel;
 if(round>=12)finished();else if(question)showQuestion();
}
function spin(){if(spinning||round>=12||question)return;spinning=true;const b=slot.querySelector('#special-spin');b.disabled=true;rotation+=720+Math.floor(Math.random()*15)*24+12;slot.querySelector('#special-disc').style.transform='rotate('+rotation+'deg)';slot.querySelector('#wheel-question').innerHTML='<p>🎡 Spinning…</p>';setTimeout(()=>{spinning=false;question=questions[round];showQuestion();},2200);}
function showQuestion(){if(!question)return;const q=question,box=slot.querySelector('#wheel-question');if(!box)return;box.innerHTML='<p class="wheel-category">'+esc(q.section)+'</p>'+(q.passage?'<div class="wheel-passage">'+esc(q.passage)+'</div>':'')+'<h3>'+esc(q.q)+'</h3><div class="wheel-answers">'+q.opts.map((opt,i)=>'<button type="button" data-answer="'+i+'">'+String.fromCharCode(65+i)+'. '+esc(opt)+'</button>').join('')+'</div><div id="wheel-feedback" role="status"></div><button type="button" class="wheel-next" id="wheel-next" hidden>Next spin →</button>';
 answered=false;box.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>answer(Number(b.dataset.answer)));
 box.querySelector('#wheel-next').onclick=()=>{round++;question=null;if(round===12){finished();}else{slot.querySelector('#spin-count').textContent=round+1;slot.querySelector('#special-spin').disabled=false;box.innerHTML='<p>🌟 Great! Spin again.</p>';}};
}
function answer(n){if(answered)return;answered=true;const box=slot.querySelector('#wheel-question'),q=question;box.querySelectorAll('[data-answer]').forEach(b=>{b.disabled=true;if(+b.dataset.answer===q.a)b.classList.add('correct');else if(+b.dataset.answer===n)b.classList.add('incorrect');});if(n===q.a)score++;slot.querySelector('#spin-score').textContent=score;box.querySelector('#wheel-feedback').innerHTML='<p class="feedback">'+(n===q.a?'✅ Nice work!':'💡 Let’s learn!')+' '+esc(q.why||'Look carefully at the answer.')+'</p>';box.querySelector('#wheel-next').hidden=false;}
function finished(){question=null;const box=slot.querySelector('#wheel-question');if(!box)return;slot.querySelector('#special-spin').disabled=true;slot.querySelector('#spin-count').textContent='12';box.innerHTML='<div class="wheel-finish"><h3>🏆 Wheel complete!</h3><p>You answered '+score+' of 12 questions correctly.</p><p>Great effort. Every spin helps you learn!</p><button type="button" class="restart" id="wheel-again">Play again ↻</button></div>';box.querySelector('#wheel-again').onclick=resetWheel;if(window.ChichiCelebrate)window.ChichiCelebrate.show();}

let gameReviewWeek=1;
function renderGames(){
 const gameList=GAME_TYPES;
 slot.innerHTML='<div class="game-intro"><h2>Games Corner</h2><p>Choose a week, then play the original Chichi games.</p></div>'
 +'<div class="game-week-select">'+[1,2,3,4].map(w=>'<button type="button" data-game-week="'+w+'" class="'+(gameReviewWeek===w?'selected':'')+'">Week '+w+'</button>').join('')+'</div>'
 +'<div class="game-list">'+gameList.map(([id,label])=>'<a href="index.html#reviewgame/'+gameReviewWeek+'/'+id+'">'+label+'</a>').join('')+'</div>';
 slot.querySelectorAll('[data-game-week]').forEach(b=>b.onclick=()=>{gameReviewWeek=Number(b.dataset.gameWeek);renderGames()});
}

const gamesReturn=window.location.hash.match(/^#games\/([1-4])$/);
if(gamesReturn)gameReviewWeek=Number(gamesReturn[1]);
show(gamesReturn?'games':'hub');
})();