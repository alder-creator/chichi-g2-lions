'use strict';

const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const shuffle = a => { const x=[...a]; for(let i=x.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[x[i],x[j]]=[x[j],x[i]];} return x; };
const clamp = (n,a,b)=>Math.max(a,Math.min(b,n));
const PREVIEW_ALL = new URLSearchParams(location.search).get('preview') === '1';

const WEEKS = {
  1: {
    title:'Week 1', theme:'Artists & Art', available:true,
    question:'How do artists of the past help us see the world differently?',
    reading:'Through Georgia’s Eyes', genre:'Biography',
    skills:['r-controlled ar','plural / verb ending -es','verb tense'],
    vocab:[
      ['time line','a line that includes marks showing when particular events happened in the past','01_time_line.png'],
      ['recover','to become healthy after an illness or injury','02_recover.png'],
      ['accident','a sudden event that is not planned or intended and that causes damage or injury','03_accident.png'],
      ['professor','a teacher especially of the highest rank at a college or university','04_professor.png'],
      ['brightness','the quality or state of being bright','05_brightness.png'],
      ['memory','a person, thing, or event that can be remembered','06_memory.png'],
      ['sweets','something that tastes sweet','07_sweets.png'],
      ['tune','a melody or musical composition','08_tune.png'],
      ['discover','to find or see something for the first time','09_discover.png'],
      ['comfort','to ease the sorrow of someone','10_comfort.png'],
      ['prairie','a flat or rolling land covered with grass','11_prairie.png'],
      ['painting','the act or art of using paints','12_painting.png'],
      ['scandalous','something that is shocking or disgraceful, causing a strong negative reaction from others','13_scandalous.png'],
      ['achieve','to get by trying hard; accomplish','14_achieve.png'],
      ['wonder','to be curious about something','15_wonder.png'],
      ['hum','a soft, murmuring sound that keeps going','16_hum.png'],
      ['canvas','a strong, coarse cloth used as a surface for painting','17_canvas.png'],
      ['skyscraper','a very tall building','18_skyscraper.png'],
      ['amaze','to fill someone with wonder','19_amaze.png'],
      ['delight','to give great pleasure or joy','20_delight.png'],
      ['universe','all of space, including planets, stars, galaxies, and everything that exists','21_universe.png'],
      ['astound','to surprise very much; amaze; astonish','22_astound.png'],
      ['extraordinary','very unusual, remarkable, or amazing','23_extraordinary.png'],
      ['dusky','marked by slight or deficient light','24_dusky.png'],
      ['whisper','to speak or say very softly','25_whisper.png'],
      ['enchant','to delight; charm','26_enchant.png'],
      ['yelping','making quick, high-pitched barking sounds','27_yelping.png'],
      ['ladder','a device used for climbing','28_ladder.png']
    ],
    hfw:['new','found','thank','please','always'],
    sightTasks:[
      {q:'This is my ___ sketchbook.', choices:['new','found','always'], answer:'new'},
      {q:'We ___ a quiet place to draw.', choices:['please','found','thank'], answer:'found'},
      {q:'___ pass me the green paint.', choices:['Please','Always','Found'], answer:'Please'},
      {q:'I ___ clean my brush after painting.', choices:['always','new','please'], answer:'always'},
      {q:'I said, “___ you,” when Mia helped me.', choices:['Thank','Found','New'], answer:'Thank'}
    ],
    phonics:[
      {q:'Which word has the same ar sound as car?',choices:['star','step','sit'],answer:'star'},
      {q:'Choose the word with ar.',choices:['park','perk','pick'],answer:'park'},
      {q:'Complete the word: c__t',choices:['ar','er','ir'],answer:'ar'},
      {q:'Which word rhymes with farm?',choices:['charm','fern','form'],answer:'charm'},
      {q:'Which word has the ar sound?',choices:['dark','dirt','duck'],answer:'dark'},
      {q:'Which plural needs -es?',choices:['dishes','cats','dogs'],answer:'dishes'},
      {q:'Choose the correct plural of fox.',choices:['foxes','foxs','foxies'],answer:'foxes'},
      {q:'Choose the correct form: She ___ the bus.',choices:['catches','catchs','catch'],answer:'catches'},
      {q:'Which word ends with -es?',choices:['brushes','brush','brushed'],answer:'brushes'},
      {q:'Choose the correct plural of box.',choices:['boxes','boxs','boxen'],answer:'boxes'}
    ],
    grammar:[
      {q:'Yesterday I ___ to the museum.',choices:['walked','walk','will walk'],answer:'walked'},
      {q:'Today I ___ a picture.',choices:['draw','drew','will draw'],answer:'draw'},
      {q:'Tomorrow we ___ the gallery.',choices:['will visit','visited','visit yesterday'],answer:'will visit'},
      {q:'Which sentence is in the past tense?',choices:['Mina painted a flower.','Mina paints a flower.','Mina will paint a flower.'],answer:'Mina painted a flower.'},
      {q:'Which sentence is in the present tense?',choices:['I look at the portrait.','I looked at the portrait.','I will look at the portrait.'],answer:'I look at the portrait.'},
      {q:'Which sentence is in the future tense?',choices:['We will make a poster.','We made a poster.','We make a poster every day.'],answer:'We will make a poster.'},
      {q:'Fix the tense: “Yesterday Tom will call.”',choices:['Yesterday Tom called.','Yesterday Tom calls.','Yesterday Tom will calls.'],answer:'Yesterday Tom called.'},
      {q:'Fix the tense: “Right now Jess packed her bag.”',choices:['Right now Jess packs her bag.','Right now Jess packed her bag yesterday.','Right now Jess will packed her bag.'],answer:'Right now Jess packs her bag.'}
    ],
    passage:{
      title:'Mara’s Way of Seeing',
      text:`Mara loved to draw ordinary things. She drew the old shoes by the door, the steam above a cup of soup, and the long shadows on the playground. Her friends sometimes asked why she did not draw exciting things instead. Mara said that small details could be exciting when people stopped to notice them. One afternoon, her class visited a local art room. Mara saw paintings made many years ago. The artists had painted streets, families, farms, and skies from their own time. Mara realized that the pictures were more than decorations. They were records of what people noticed and cared about. Back at school, she made a picture of the view from her classroom window. She included the crooked tree, the buses, and a tiny red kite. Her teacher smiled and said, “Someone in the future might learn something from this.” Mara looked at her picture in a new way.`,
      questions:[
        {q:'What does Mara like to draw?',choices:['ordinary things','only animals','only famous people'],answer:'ordinary things'},
        {q:'What does Mara learn from the old paintings?',choices:['Art can record what people noticed and cared about.','Old paintings are always dark.','Artists should only paint streets.'],answer:'Art can record what people noticed and cared about.'},
        {q:'Why does Mara include the buses and red kite?',choices:['They are part of what she sees from her classroom.','Her teacher tells her to copy them.','She wants to hide the tree.'],answer:'They are part of what she sees from her classroom.'},
        {q:'Which word best describes Mara?',choices:['observant','careless','sleepy'],answer:'observant'},
        {q:'What is the main idea?',choices:['Art can help people notice and remember the world around them.','Every picture must show a kite.','Old art is better than new art.'],answer:'Art can help people notice and remember the world around them.'}
      ]
    }
  },
  2: {
    title:'Week 2', theme:'Changing the World', available:true,
    question:'How can a person’s actions change the world?',
    reading:'Jackie Robinson', genre:'Biography',
    skills:['r-controlled er, ir, ur','doubling before -ed / -ing','past tense verbs'],
    vocab:[
      ['equality','the quality or state of having the same rights and social status','01_equality.png'],
      ['justice','the quality of being fair or just','02_justice.png'],
      ['freedom','the state of being free','03_freedom.png'],
      ['peace','a state in which there is no war or fighting','04_peace.png'],
      ['allowed','permitted to happen','05_allowed.png'],
      ['fame','the quality of being famous','06_fame.png'],
      ['love','to like something very much','07_love.png'],
      ['another','one more; an additional','08_another.png'],
      ['allow','to permit to happen','09_allow.png'],
      ['league','a number of people, groups, or countries joined together for a common purpose','10_league.png'],
      ['August','the eighth month of the year','11_August.png'],
      ['African','of or having to do with Africa or its people','12_African.png'],
      ['field','an area of land on which a game is played','13_field.png'],
      ['first base','the base that must be touched first by a base runner in baseball','14_first_base.png'],
      ['boo','to make a loud sound to show that something is disliked','15_boo.png'],
      ['cheer','to yell support or praise','16_cheer.png'],
      ['anyway','no matter what happens; in any case','17_anyway.png'],
      ['season','a specific period of time during which a particular sport or activity takes place','18_season.png'],
      ['rookie','an athlete who has just started playing a professional sport','19_rookie.png'],
      ['valuable','having great use or importance','20_valuable.png'],
      ['nasty','unpleasant or unkind','21_nasty.png'],
      ['teammate','a person who is a member of the same team','22_teammate.png'],
      ['admire','to think highly of someone','23_admire.png'],
      ['awhile','for a short time','24_awhile.png'],
      ['stand up for','to defend someone or something against criticism','25_stand_up_for.png']
    ],
    hfw:['any','pull','very','were','every'],
    sightTasks:[
      {q:'Are there ___ pencils left?',choices:['any','very','every'],answer:'any'},
      {q:'Please ___ the door open.',choices:['pull','were','any'],answer:'pull'},
      {q:'The speech was ___ powerful.',choices:['very','every','were'],answer:'very'},
      {q:'We ___ ready to help.',choices:['were','any','pull'],answer:'were'},
      {q:'___ student carried one box.',choices:['Every','Very','Any'],answer:'Every'}
    ],
    phonics:[
      {q:'Which word has the er sound?',choices:['her','hat','hop'],answer:'her'},
      {q:'Which word has the ir sound?',choices:['bird','bed','bad'],answer:'bird'},
      {q:'Which word has the ur sound?',choices:['turn','ten','tin'],answer:'turn'},
      {q:'Choose the r-controlled word.',choices:['shirt','ship','shop'],answer:'shirt'},
      {q:'Which word has the same vowel sound as fur?',choices:['curb','car','care'],answer:'curb'},
      {q:'Add -ing to hum.',choices:['humming','huming','hummingg'],answer:'humming'},
      {q:'Add -ed to stop.',choices:['stopped','stoped','stopt'],answer:'stopped'},
      {q:'Add -ing to run.',choices:['running','runing','runned'],answer:'running'},
      {q:'Which word correctly adds -ed?',choices:['planned','planed','plannned'],answer:'planned'},
      {q:'Which base word needs its final consonant doubled before -ing?',choices:['sit','rain','look'],answer:'sit'}
    ],
    grammar:[
      {q:'Change to past tense: wash',choices:['washed','washes','will wash'],answer:'washed'},
      {q:'Yesterday they ___ the park.',choices:['cleaned','clean','will clean'],answer:'cleaned'},
      {q:'Change to past tense: plant',choices:['planted','planting','plants'],answer:'planted'},
      {q:'Which sentence tells about the past?',choices:['We helped our neighbor.','We help our neighbor.','We will help our neighbor.'],answer:'We helped our neighbor.'},
      {q:'Fix the sentence: “Last night I walk home.”',choices:['Last night I walked home.','Last night I walks home.','Last night I will walk home.'],answer:'Last night I walked home.'},
      {q:'Which verb usually forms its past tense with -ed?',choices:['jump → jumped','go → goed','eat → eated'],answer:'jump → jumped'},
      {q:'Mina ___ the boxes yesterday.',choices:['packed','packs','will pack'],answer:'packed'},
      {q:'The class ___ for the speaker after the talk.',choices:['cheered','cheer tomorrow','cheering yesterday'],answer:'cheered'}
    ],
    passage:{
      title:'One Small Plan',
      text:`Joon noticed that the school garden looked dry and untidy after a long holiday. He could have walked past it, but he decided to do one small thing. He asked his teacher if he could water the plants at lunchtime. The next day, two friends joined him. Soon the group noticed another problem: the watering cans were cracked. They made a simple sign asking families to donate old containers that could hold water. By Friday, the class had enough containers for everyone. The students began taking turns caring for the garden. Other classes saw what they were doing and copied the plan for their own flower boxes. Joon did not fix everything by himself. His first action simply gave other people a clear way to help. A month later, the garden was green again, and the school had a new lunchtime garden club.`,
      questions:[
        {q:'What does Joon do first?',choices:['He asks to water the plants.','He buys a new garden.','He closes the garden club.'],answer:'He asks to water the plants.'},
        {q:'Why do the students make a sign?',choices:['They need containers for water.','They want people to stop gardening.','They are selling flowers.'],answer:'They need containers for water.'},
        {q:'How does Joon’s action affect other people?',choices:['It gives others a way to join and help.','It makes everyone leave the garden.','It keeps the problem secret.'],answer:'It gives others a way to join and help.'},
        {q:'Which word best describes Joon?',choices:['initiative-taking','careless','uninterested'],answer:'initiative-taking'},
        {q:'What is the main idea?',choices:['One helpful action can encourage more people to act.','Gardens only need water on Fridays.','A sign can solve every problem alone.'],answer:'One helpful action can encourage more people to act.'}
      ]
    }
  },
  3: {
    title:'Week 3', theme:'Technology', available:true,
    question:'How can technology change the world?',
    reading:'Before the Railroad Came', genre:'Historical Fiction',
    skills:['comparative endings -er / -est','trigraph dge','future tense with will'],
    vocab:[
      ['virtual reality','an environment produced by a computer that looks and seems real to the person experiencing it','01_virtual_reality.png'],
      ['technology','new machines, equipment, and ways of doing things that are based on modern knowledge about science and computers','02_technology.png'],
      ['3D printer','a piece of equipment that makes objects by building up thin layers of a substance','03_3D_printer.png'],
      ['ingredient','one of the foods that you use to make a particular food or dish','04_ingredient.png'],
      ['ranch','a very large farm','05_ranch.png'],
      ['cattle','a group of cows, bulls, and steers','06_cattle.png'],
      ['market','a place or store where food or goods are for sale','07_market.png'],
      ['railroad','the steel tracks that trains travel on','08_railroad.png'],
      ['return','to come or go back','09_return.png'],
      ['week','a period of seven days','10_week.png'],
      ['older','having more age','11_older.png'],
      ['promise','to give one’s word','12_promise.png'],
      ['trip','the act of traveling or going from one place to another','13_trip.png'],
      ['load','to put things onto or into a vehicle, container, or machine','14_load.png'],
      ['take','to move or carry something or someone from one place to another','15_take.png'],
      ['drive','an organized way of directing animals to move','16_drive.png'],
      ['easier','less difficult; more simple','17_easier.png'],
      ['life','the way people or animals live','18_life.png'],
      ['mind','the part of a person that thinks and feels','19_mind.png'],
      ['surprise','a feeling of wonder or amazement caused by something unexpected','20_surprise.png'],
      ['train','a line of railroad cars connected together','21_train.png'],
      ['hardly','almost not at all','22_hardly.png'],
      ['imagine','to form in the mind a thought, picture, or image','23_imagine.png'],
      ['never','at no time; not ever','24_never.png']
    ],
    hfw:['our','away','light','never','pretty'],
    sightTasks:[
      {q:'This is ___ classroom.',choices:['our','away','never'],answer:'our'},
      {q:'The train moved far ___.',choices:['away','light','pretty'],answer:'away'},
      {q:'Turn on the ___ so we can see.',choices:['light','our','never'],answer:'light'},
      {q:'I have ___ ridden in a self-driving car.',choices:['never','pretty','away'],answer:'never'},
      {q:'The night sky looked ___.',choices:['pretty','our','light'],answer:'pretty'}
    ],
    phonics:[
      {q:'Which word compares two things?',choices:['faster','fastest','fast'],answer:'faster'},
      {q:'Which word compares three or more things?',choices:['smallest','smaller','small'],answer:'smallest'},
      {q:'Complete: This box is ___ than that box.',choices:['heavier','heaviest','heavy'],answer:'heavier'},
      {q:'Complete: Of all three cars, this one is the ___.',choices:['fastest','faster','fast'],answer:'fastest'},
      {q:'Which ending means “more” when comparing two?',choices:['-er','-est','-ed'],answer:'-er'},
      {q:'Which word uses the trigraph dge?',choices:['bridge','brick','bring'],answer:'bridge'},
      {q:'Choose the word ending in dge.',choices:['edge','egg','end'],answer:'edge'},
      {q:'Which word has the /j/ sound spelled dge?',choices:['badge','bag','bake'],answer:'badge'},
      {q:'Complete: le___',choices:['dge','ge','je'],answer:'dge'},
      {q:'Which word is spelled correctly?',choices:['fudge','fuje','fug'],answer:'fudge'}
    ],
    grammar:[
      {q:'Tomorrow I ___ the train.',choices:['will ride','rode','ride yesterday'],answer:'will ride'},
      {q:'Which sentence is future tense?',choices:['We will visit the station.','We visited the station.','We visit the station every day.'],answer:'We will visit the station.'},
      {q:'Change to future: “I walk home.”',choices:['I will walk home.','I walked home.','I walking home.'],answer:'I will walk home.'},
      {q:'Sam and Dad ___ me about the trip later.',choices:['will tell','told yesterday','telling'],answer:'will tell'},
      {q:'Which word usually comes before a verb to make the future tense?',choices:['will','did','was'],answer:'will'},
      {q:'Next year trains ___ even faster.',choices:['will move','moved','moves yesterday'],answer:'will move'},
      {q:'Fix: “Tomorrow she rode the bus.”',choices:['Tomorrow she will ride the bus.','Tomorrow she rides yesterday.','Tomorrow she riding the bus.'],answer:'Tomorrow she will ride the bus.'},
      {q:'Which sentence tells what will happen later?',choices:['I will test the new printer.','I tested the printer.','I test it every Monday.'],answer:'I will test the new printer.'}
    ],
    passage:{
      title:'The First Fast Delivery',
      text:`In 1895, a family in a small town waited days for supplies to arrive by wagon. The road was rough, and rain often slowed the horses. In this historical-fiction practice story, ten-year-old Eli hears that a new rail line will soon reach a nearby station. His father wonders whether the train will really make life easier. When the station opens, the family sends an order for tools. The tools arrive much sooner than expected. Farmers can also send milk and vegetables to towns farther away. Eli notices that the new technology changes more than travel time. People can buy different goods, visit relatives more easily, and share news faster. The train does not solve every problem, but it connects places that once felt far apart. Eli begins to imagine what other inventions might change everyday life in the future.`,
      questions:[
        {q:'What problem do wagons have?',choices:['Rough roads and rain can slow them.','They move on railroad tracks.','They travel too quickly.'],answer:'Rough roads and rain can slow them.'},
        {q:'What changes after the station opens?',choices:['Supplies can arrive faster.','The town stops buying tools.','People can no longer visit relatives.'],answer:'Supplies can arrive faster.'},
        {q:'How does the train connect places?',choices:['It makes travel and sending goods easier.','It removes every road.','It keeps towns separate.'],answer:'It makes travel and sending goods easier.'},
        {q:'Why is this called historical fiction?',choices:['It imagines characters in a past setting.','It takes place on another planet.','It gives only a list of dates.'],answer:'It imagines characters in a past setting.'},
        {q:'What is the main idea?',choices:['New technology can change how people live and connect.','Trains only carry tools.','Old technology is always useless.'],answer:'New technology can change how people live and connect.'}
      ]
    }
  },
  4: {
    title:'Week 4', theme:'America’s Past', available:false,
    question:'Why is it important to learn about a country’s past?',
    reading:'What Is the Story of Our Flag? / The First American Flag', genre:'Informational Text',
    skills:['diphthongs ow / ou','vowel digraphs ai / ay','forms of be'],
    vocab:[
      ['land','a country or nation','01_land.png'],
      ['people','a group of people who make up a race, tribe, or nation','02_people.png'],
      ['place','a specific area or region of the world','03_place.png'],
      ['always','all the time; continuously','04_always.png'],
      ['American','relating to or characteristic of the United States','05_American.png'],
      ['know','to understand clearly; be certain of the facts or truth of','06_know.png'],
      ['same','like another in every way','07_same.png'],
      ['star','a shape that has five or more points','08_star.png'],
      ['decide','to make up one’s mind','09_decide.png'],
      ['leader','a person who leads','10_leader.png'],
      ['need','to lack or require','11_need.png'],
      ['state','a group of people living in a political unit that is part of a larger government','12_state.png'],
      ['count','to find out how many of something there are; add up','13_count.png'],
      ['like','similar to; in the same way as','14_like.png'],
      ['make','to cause to be, become, or happen','15_make.png'],
      ['live','to reside or make one’s home in a particular place','16_live.png'],
      ['seamstress','a woman who sews as a job','17_seamstress.png'],
      ['for sure','certain; having no doubt','18_for_sure.png'],
      ['circle','a round shape or arrangement of objects','19_circle.png'],
      ['field','an area where information is placed','20_field.png'],
      ['join','to become a member of','21_join.png'],
      ['row','a line of things or people next to each other','22_row.png'],
      ['first','before all others','23_first.png']
    ],
    hfw:['how','soon','both','read','again'],
    sightTasks:[
      {q:'___ do we raise the flag?',choices:['How','Soon','Both'],answer:'How'},
      {q:'The parade will begin ___.',choices:['soon','again','read'],answer:'soon'},
      {q:'___ children held one side.',choices:['Both','How','Again'],answer:'Both'},
      {q:'Please ___ the page about flags.',choices:['read','soon','how'],answer:'read'},
      {q:'Let’s look at the picture ___.',choices:['again','both','soon'],answer:'again'}
    ],
    phonics:[
      {q:'Which word has the ou sound spelled ow?',choices:['town','team','tin'],answer:'town'},
      {q:'Which word has the ou sound spelled ou?',choices:['cloud','clean','clap'],answer:'cloud'},
      {q:'Choose the word with ow.',choices:['brown','brain','brick'],answer:'brown'},
      {q:'Choose the word with ou.',choices:['house','horse','heat'],answer:'house'},
      {q:'Which pair has the same vowel sound?',choices:['cow / loud','cow / day','rain / loud'],answer:'cow / loud'},
      {q:'Which word has long a spelled ai?',choices:['rain','run','round'],answer:'rain'},
      {q:'Which word has long a spelled ay?',choices:['day','down','dirt'],answer:'day'},
      {q:'Complete: tr__n',choices:['ai','ay','ou'],answer:'ai'},
      {q:'Complete: pl__',choices:['ay','ai','ow'],answer:'ay'},
      {q:'Which pair both have the long a sound?',choices:['mail / play','mouse / cow','bird / turn'],answer:'mail / play'}
    ],
    grammar:[
      {q:'I ___ at school now.',choices:['am','was','were'],answer:'am'},
      {q:'The flag ___ on the wall today.',choices:['is','were','am'],answer:'is'},
      {q:'We ___ ready now.',choices:['are','was','is'],answer:'are'},
      {q:'Yesterday I ___ at the museum.',choices:['was','am','are'],answer:'was'},
      {q:'They ___ at the parade last week.',choices:['were','is','am'],answer:'were'},
      {q:'Fix: “You is holding the flag.”',choices:['You are holding the flag.','You am holding the flag.','You was holding the flag now.'],answer:'You are holding the flag.'},
      {q:'Which sentence is past tense?',choices:['The flags were outside.','The flags are outside.','The flag is outside.'],answer:'The flags were outside.'},
      {q:'Which sentence is present tense?',choices:['She is helpful.','She was helpful yesterday.','They were helpful last year.'],answer:'She is helpful.'}
    ],
    passage:{
      title:'A Town Flag Tells a Story',
      text:`A flag can be more than a colorful piece of cloth. Many flags use shapes, colors, and symbols to tell something about a place. Imagine a town beside a river. The town’s flag has a blue stripe for the water, a green field for the farms, and a small silver bridge in the center. Years ago, the town had no bridge, so people crossed the river by boat. When a bridge was finally built, travel became safer and faster. The town later added the bridge symbol to its flag. A person who studies the flag can learn a little about the town’s land and history. The flag does not tell every detail, so people still need photographs, letters, maps, and other sources. But its symbols can be a useful starting point for asking questions about the past.`,
      questions:[
        {q:'What does the blue stripe represent?',choices:['the river','the farms','the bridge'],answer:'the river'},
        {q:'Why is there a bridge symbol?',choices:['A bridge became an important part of the town’s history.','The town has no water.','Everyone lives on a bridge.'],answer:'A bridge became an important part of the town’s history.'},
        {q:'What can a flag help people do?',choices:['Ask questions about a place and its past.','Learn every historical detail by itself.','Replace all maps and photographs.'],answer:'Ask questions about a place and its past.'},
        {q:'Which source could give more information about the past?',choices:['old photographs','a blank sheet of paper','an empty box'],answer:'old photographs'},
        {q:'What is the main idea?',choices:['Symbols on a flag can tell part of a place’s story.','Every town flag must have a bridge.','Flags are only decorations.'],answer:'Symbols on a flag can tell part of a place’s story.'}
      ]
    }
  },
  5: {
    title:'Week 5', theme:'Helpful Heroes', available:false,
    question:'What can people from the past teach us about helping others?',
    reading:'Eleanor Roosevelt', genre:'Biography',
    skills:['diphthongs oi / oy','vowel digraph ea','compound sentences / pronouns'],
    vocab:[
      ['hero','a person who is admired for doing something important or brave','01_hero.png'],
      ['nurse','someone who looks after people who are ill or injured','02_nurse.png'],
      ['college','a school for advanced education','03_college.png'],
      ['explorer','someone who travels through an unknown area to find out about it','04_explorer.png'],
      ['grow up','to become an adult; to mature','05_grow_up.png'],
      ['marry','to take as a husband or wife','06_marry.png'],
      ['wealthy','having wealth; rich','07_wealthy.png'],
      ['most','the majority; nearly all','08_most.png'],
      ['president','the leader of a government such as the United States','09_president.png'],
      ['learn about','to acquire knowledge or information about someone or something','10_learn_about.png'],
      ['travel','to make a trip','11_travel.png'],
      ['listen','to try to hear','12_listen.png'],
      ['idea','a thought formed in the mind','13_idea.png'],
      ['view','the way a person thinks about something','14_view.png'],
      ['safe','free from harm or danger','15_safe.png'],
      ['hard','with effort or energy','16_hard.png'],
      ['leader','the person in charge','17_leader.png'],
      ['magazine','a printed collection of stories, articles, and pictures that is usually bound in a paper cover','18_magazine.png'],
      ['newspaper','a publication printed on sheets of paper that contain the news','19_newspaper.png'],
      ['allow','to give permission for something to happen or be done','20_allow.png'],
      ['vote','to decide something or choose someone by making a choice','21_vote.png'],
      ['right','a thing that a person is allowed to have, get, or do','22_right.png'],
      ['brave','having courage','23_brave.png'],
      ['frighten','to make or become suddenly afraid or alarmed','24_frighten.png'],
      ['better','of higher quality','25_better.png']
    ],
    hfw:['been','does','words','carry','going'],
    sightTasks:[
      {q:'She has ___ a volunteer for two years.',choices:['been','does','going'],answer:'been'},
      {q:'What ___ this sign mean?',choices:['does','carry','words'],answer:'does'},
      {q:'Use kind ___ when you speak.',choices:['words','been','going'],answer:'words'},
      {q:'We can ___ the boxes together.',choices:['carry','does','been'],answer:'carry'},
      {q:'They are ___ to help after school.',choices:['going','words','does'],answer:'going'}
    ],
    phonics:[
      {q:'Which word has the oi sound?',choices:['coin','can','cone'],answer:'coin'},
      {q:'Which word has the oy sound?',choices:['boy','bay','bee'],answer:'boy'},
      {q:'Choose the word with oi.',choices:['join','jam','June'],answer:'join'},
      {q:'Choose the word with oy.',choices:['toy','tie','tea'],answer:'toy'},
      {q:'Which pair has the same vowel sound?',choices:['joy / coin','joy / day','coin / cane'],answer:'joy / coin'},
      {q:'Which word has ea with the long e sound?',choices:['bead','bread','head'],answer:'bead'},
      {q:'Which word has ea with the short e sound?',choices:['bread','bead','team'],answer:'bread'},
      {q:'Try both sounds: which word is pronounced with long e?',choices:['eat','health','bread'],answer:'eat'},
      {q:'Which word has ea?',choices:['team','time','town'],answer:'team'},
      {q:'Which pair shows two different ea sounds?',choices:['bead / bread','team / bead','bread / head'],answer:'bead / bread'}
    ],
    grammar:[
      {q:'Join the sentences: “She traveled. She met people.”',choices:['She traveled, and she met people.','She traveled she met people.','She traveled, but and met people.'],answer:'She traveled, and she met people.'},
      {q:'Choose the best conjunction: “It was raining, ___ we stayed inside.”',choices:['so','and','but'],answer:'so'},
      {q:'Choose the best conjunction: “I was tired, ___ I finished the job.”',choices:['but','so','and'],answer:'but'},
      {q:'Choose the best conjunction: “We packed food, ___ we carried water.”',choices:['and','but','so'],answer:'and'},
      {q:'Replace “Jake” with a pronoun: “Jake was hungry.”',choices:['He was hungry.','Him was hungry.','His was hungry.'],answer:'He was hungry.'},
      {q:'Replace “Jake” in “I made a snack for Jake.”',choices:['I made a snack for him.','I made a snack for he.','I made a snack for his.'],answer:'I made a snack for him.'},
      {q:'Which pronoun can replace “Mina and I”?',choices:['we','they','her'],answer:'we'},
      {q:'Which is a possessive pronoun?',choices:['ours','us','we'],answer:'ours'}
    ],
    passage:{
      title:'The Reading Room',
      text:`When Ms. Han was young, her neighborhood had no library nearby. Children shared a few books at school, but many wanted more to read. Years later, Ms. Han became a teacher. She remembered how important those few books had been to her. She asked local families to donate books they no longer needed. At first, she kept the books on two shelves in her classroom. Soon there were too many. A shop owner offered an empty room above his store, and volunteers painted it, built shelves, and made a reading corner. Ms. Han organized the books and invited children to borrow them for free. She also trained older students to read with younger children. The reading room did not begin with a large building or a lot of money. It began because one person remembered a need and helped others work together.`,
      questions:[
        {q:'Why does Ms. Han start collecting books?',choices:['She remembers that children need more books to read.','She wants to sell old books.','She wants to close the school.'],answer:'She remembers that children need more books to read.'},
        {q:'Who helps create the reading room?',choices:['families, a shop owner, and volunteers','only Ms. Han','no one'],answer:'families, a shop owner, and volunteers'},
        {q:'What do older students do?',choices:['Read with younger children.','Hide the books.','Charge money for every book.'],answer:'Read with younger children.'},
        {q:'What lesson does the story show?',choices:['Helping others can grow when people work together.','Only rich people can help.','A library must begin in a large building.'],answer:'Helping others can grow when people work together.'},
        {q:'Which detail best supports the main idea?',choices:['Many people contribute books, space, painting, and time.','The room is above a store.','Ms. Han was once young.'],answer:'Many people contribute books, space, painting, and time.'}
      ]
    }
  },
  6: {
    title:'Week 6', theme:'Making History Review', available:false,
    question:'Why is the past important?',
    reading:'Compare Across Texts · Making History', genre:'Unit Review',
    skills:['adding endings','vowel team ie','Unit 4 grammar review'],
    vocab:[
      ['history','the study of people and events from the past'],['past','a time that has already happened'],['record','to save information so it can be remembered'],['experience','something that happens to a person'],
      ['rights','freedoms and protections people should have'],['railroad','a system of tracks used by trains'],['symbol','something that stands for an idea'],['leader','a person who guides or helps a group']
    ],
    hfw:['may','give','right','other','number'],
    sightTasks:[
      {q:'You ___ choose one book.',choices:['may','give','number'],answer:'may'},
      {q:'Please ___ the map to Kai.',choices:['give','right','other'],answer:'give'},
      {q:'Turn ___ at the corner.',choices:['right','may','number'],answer:'right'},
      {q:'Let’s read the ___ story too.',choices:['other','give','right'],answer:'other'},
      {q:'Write the page ___ in the box.',choices:['number','may','give'],answer:'number'}
    ],
    phonics:[
      {q:'Add -ed to cry.',choices:['cried','cryed','cryied'],answer:'cried'},
      {q:'Add -es to try.',choices:['tries','trys','tryes'],answer:'tries'},
      {q:'Add -ing to bake.',choices:['baking','bakeing','bakking'],answer:'baking'},
      {q:'Add -ed to like.',choices:['liked','likeed','likked'],answer:'liked'},
      {q:'What happens to final y before -ed in “cry”?',choices:['y changes to i','y doubles','nothing changes'],answer:'y changes to i'},
      {q:'Which word has ie with the long e sound?',choices:['piece','tie','dried'],answer:'piece'},
      {q:'Which word has ie with the long i sound?',choices:['tie','piece','chief'],answer:'tie'},
      {q:'Which word contains the vowel team ie?',choices:['brief','bread','brown'],answer:'brief'},
      {q:'Which pair has different sounds for ie?',choices:['piece / tried','piece / chief','tie / dried'],answer:'piece / tried'},
      {q:'Complete: p__ce',choices:['ie','ei','ea'],answer:'ie'}
    ],
    grammar:[
      {q:'Which sentence is in the past tense?',choices:['We visited the museum.','We visit the museum.','We will visit the museum.'],answer:'We visited the museum.'},
      {q:'Which sentence is in the future tense?',choices:['I will read the old letter.','I read the old letter yesterday.','I am reading every day.'],answer:'I will read the old letter.'},
      {q:'Choose the correct form of be: “They ___ at the station yesterday.”',choices:['were','are','is'],answer:'were'},
      {q:'Choose the best conjunction: “The road was long, ___ they kept walking.”',choices:['but','so','and'],answer:'but'},
      {q:'Replace “Mina” with a pronoun.',choices:['she','her in subject position','ours'],answer:'she'},
      {q:'Which sentence uses a present-tense form of be?',choices:['We are ready.','We were ready.','I was ready.'],answer:'We are ready.'},
      {q:'Choose the correct past tense: “They ___ the boxes.”',choices:['packed','pack','will pack'],answer:'packed'},
      {q:'Which sentence is a compound sentence?',choices:['We read the map, and we found the town.','We read the map.','The old map on the table.'],answer:'We read the map, and we found the town.'}
    ],
    passage:{
      title:'The History Box',
      text:`A class opened a box of objects collected from families in the neighborhood. Inside were a train ticket, a recipe card, a photograph of a bridge, a small campaign button from a school election, and a handwritten note about a flood. No single object told the whole history of the community. Each one gave a clue. The train ticket showed how someone traveled. The recipe showed what one family cooked. The bridge photograph showed how the town looked at one time. Students compared the objects and asked questions. Who used them? When were they made? What changed after that? Their teacher explained that studying the past often means putting many pieces of evidence together. The class then added something new to the box: a photograph of their own class and a note about what school was like that year. They realized that the present would one day become part of history too.`,
      questions:[
        {q:'What do the objects in the box provide?',choices:['clues about the community’s past','a complete history by themselves','instructions for building a train'],answer:'clues about the community’s past'},
        {q:'Why do students compare several objects?',choices:['Different sources can show different parts of the past.','All objects tell exactly the same thing.','They want to throw the objects away.'],answer:'Different sources can show different parts of the past.'},
        {q:'What do the students add to the box?',choices:['a class photograph and note','a new railroad','a bridge'],answer:'a class photograph and note'},
        {q:'What do the students realize?',choices:['The present will become part of history.','Only old objects matter.','History never changes.'],answer:'The present will become part of history.'},
        {q:'What is the main idea?',choices:['We learn about the past by studying and comparing evidence.','One object can explain everything.','History is only about famous people.'],answer:'We learn about the past by studying and comparing evidence.'}
      ]
    }
  }
};

const ICONS = {vocab:'🗂️',listen:'🔊',match:'🧩',phonics:'🔤',sight:'👀',grammar:'✏️',read:'📖',order:'🔢',adventure:'🐉',check:'✅',exam:'📝',wheel:'🎡'};
const ACTIVITY_META = {
  vocab:['Vocabulary','Review the week’s key words.'],
  listen:['Listen & Tap','Listen carefully and choose the word.'],
  match:['Match','Match words to their meanings.'],
  phonics:['Phonics','Practise this week’s sound and spelling patterns.'],
  sight:['Words to Know','Use the high-frequency words in context.'],
  grammar:['Grammar','Practise the week’s language skill.'],
  read:['Read & Find','Read an original practice text and find evidence.'],
  order:['Put in Order','Sequence key events from the practice text.'],
  adventure:["Chichi’s Adventure",'Read a short original story with Chichi.'],
  check:['Quick Check','12 mixed questions for a fast review.'],
  exam:['Exam Practice','20 mixed questions across the week’s word and language skills.'],
  wheel:['Wheel Spin','Spin through a 15-part mixed review.']
};

let currentWeek = 1;
let currentActivity = null;
let mcState = null;
let readState = null;
let matchState = null;
let listenState = null;
let wheelState = null;
let wheelRotation = 0;

function weekArt(w){ return `assets/weeks/week${w}.png`; }
function weekBadge(w){ return `assets/week_badges/week${w}.png`; }
function completeKey(w,a){ return `chichi_g2_u4_w${w}_${a}_done`; }
function completionDateKey(w,a){ return `${completeKey(w,a)}_date`; }
function completionHistoryKey(w,a){ return `${completeKey(w,a)}_history`; }
function localDateStamp(d=new Date()){
  const y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,'0'),day=String(d.getDate()).padStart(2,'0');
  return `${y}-${m}-${day}`;
}
function prettyCompletionDate(s){
  if(!s)return '';
  const [y,m,d]=s.split('-').map(Number);
  if(!y||!m||!d)return '';
  return new Date(y,m-1,d).toLocaleDateString(undefined,{month:'short',day:'numeric'});
}
function lastCompletionDate(w,a){ return localStorage.getItem(completionDateKey(w,a))||''; }
function isDone(w,a){
  if(a==='wheel') return localStorage.getItem(completeKey(w,a))==='1';
  return lastCompletionDate(w,a)===localDateStamp();
}
function completionLabel(w,a){
  const last=lastCompletionDate(w,a);
  if(a==='wheel' && localStorage.getItem(completeKey(w,a))==='1')
    return last?`✓ Mastered ${prettyCompletionDate(last)}`:'✓ Mastered';
  if(last===localDateStamp())return '✓ Complete today';
  return last?`Last: ${prettyCompletionDate(last)}`:'';
}
function markDone(w,a){
  const today=localDateStamp();
  localStorage.setItem(completeKey(w,a),'1');
  localStorage.setItem(completionDateKey(w,a),today);
  try{
    const key=completionHistoryKey(w,a);
    const hist=JSON.parse(localStorage.getItem(key)||'[]');
    if(!hist.includes(today)){hist.push(today);localStorage.setItem(key,JSON.stringify(hist.slice(-90)));}
  }catch(e){}
  toast(a==='wheel'?'Wheel mastered!':'Activity complete for today!');
}
function toast(msg){ const t=$('#toast'); t.textContent=msg; t.classList.add('show'); clearTimeout(toast._t); toast._t=setTimeout(()=>t.classList.remove('show'),1500); }

let vocabAudio=null;
function browserSpeak(text){
  try{
    speechSynthesis.cancel();
    const u=new SpeechSynthesisUtterance(text);
    u.lang='en-GB';u.rate=.86;u.pitch=1.02;
    const voices=speechSynthesis.getVoices();
    const preferred=voices.find(v=>/en-GB/i.test(v.lang)) || voices.find(v=>/^en/i.test(v.lang));
    if(preferred)u.voice=preferred;
    speechSynthesis.speak(u);
  }catch(e){}
}
function vocabRyanPath(text){
  if(currentWeek!==1 && currentWeek!==2 && currentWeek!==3) return null;
  const idx=WEEKS[currentWeek].vocab.findIndex(v=>v[0]===text);
  if(idx<0) return null;
  return `assets/audio/vocab/week${currentWeek}/word_${String(idx+1).padStart(2,'0')}.mp3`;
}
function speak(text){
  try{
    speechSynthesis.cancel();
    if(vocabAudio){vocabAudio.pause();vocabAudio.currentTime=0;vocabAudio=null;}
    const src=vocabRyanPath(text);
    if(!src){browserSpeak(text);return;}
    const a=new Audio(src);vocabAudio=a;
    const fallback=()=>{if(vocabAudio===a)vocabAudio=null;browserSpeak(text);};
    a.onended=()=>{if(vocabAudio===a)vocabAudio=null;};
    a.onerror=fallback;
    a.play().catch(fallback);
  }catch(e){browserSpeak(text);}
}

let adventureAudio=null;
function stopAdventureNarration(){
  try{
    if(adventureAudio){ adventureAudio.pause(); adventureAudio.currentTime=0; adventureAudio=null; }
    speechSynthesis.cancel();
  }catch(e){}
}
function plainAdventureText(html){
  const d=document.createElement('div'); d.innerHTML=html; return (d.textContent||d.innerText||'').replace(/\s+/g,' ').trim();
}
function adventureNarrationPath(week,pageIndex){
  return `assets/audio/adventure/week${week}/page_${String(pageIndex+1).padStart(2,'0')}.mp3`;
}
function playAdventureNarration(week,pageIndex,html,button){
  stopAdventureNarration();
  const src=adventureNarrationPath(week,pageIndex);
  const a=new Audio(src); adventureAudio=a;
  if(button){button.textContent='■ Stop';button.classList.add('playing');}
  const reset=()=>{ if(button){button.textContent='🔊 Listen';button.classList.remove('playing');} if(adventureAudio===a) adventureAudio=null; };
  a.onended=reset;
  a.onerror=()=>{
    reset();
    // Fallback keeps narration usable before baked Ryan files are generated.
    speak(plainAdventureText(html));
  };
  a.play().catch(()=>{a.onerror&&a.onerror();});
}

function setScreen(name){
  $$('.screen').forEach(s=>s.classList.remove('active'));
  $(`#${name}Screen`).classList.add('active');
  document.body.classList.toggle('homeMode', name==='home');
  scrollTo(0,0);
}
function route(hash, replace=false){
  const h=hash.startsWith('#')?hash:`#${hash}`;
  if(replace){history.replaceState(null,'',h);applyRoute();} else if(location.hash!==h) location.hash=h; else applyRoute();
}
function applyRoute(){
  const parts=(location.hash||'#home').replace(/^#/,'').split('/');
  const page=parts[0];
  if(page==='weeks'){ renderWeeks();setScreen('weeks');return; }
  if(page==='hub'){
    const w=clamp(Number(parts[1])||1,1,6);currentWeek=w;renderHub();setScreen('hub');return;
  }
  if(page==='activity'){
    const w=clamp(Number(parts[1])||1,1,6);const a=parts[2]||'vocab';currentWeek=w;currentActivity=a;renderActivity(a);setScreen('activity');return;
  }
  setScreen('home');
}

function renderWeeks(){
  const host=$('#weeksGrid');
  host.innerHTML='';
  Object.entries(WEEKS).forEach(([k,w])=>{
    const n=Number(k);const open=w.available||PREVIEW_ALL;
    const el=document.createElement(open?'button':'div');
    el.className=`weekCard ${open?'available':'locked'}`;
    if(open){el.type='button';el.onclick=()=>route(`#hub/${n}`);el.setAttribute('aria-label',`Open ${w.title}: ${w.theme}`);}
    else{el.setAttribute('aria-disabled','true');el.setAttribute('aria-label',`${w.title} coming soon`);}
    el.innerHTML=`<img class="weekArt" src="${weekArt(n)}" alt="${w.theme}"><img class="weekBadge" src="${weekBadge(n)}" alt="" aria-hidden="true">${open?'':`<span class="lockPill"><span aria-hidden="true">🔒</span> Coming soon</span>`}`;
    host.appendChild(el);
  });
}

function renderHub(){
  const w=WEEKS[currentWeek];const host=$('#hubContent');
  const tiles=Object.keys(ACTIVITY_META).map(id=>{
    const [name,desc]=ACTIVITY_META[id];
    return `<button class="activityTile" data-activity="${id}" type="button"><span class="icon" aria-hidden="true">${ICONS[id]}</span><span><b>${name}</b><small>${desc}</small><span class="progressTick">${completionLabel(currentWeek,id)}</span></span></button>`;
  }).join('');
  host.innerHTML=`
    <div class="hubHero">
      <div class="hubArtWrap"><img class="hubArt" src="${weekArt(currentWeek)}" alt="${w.theme}"><img class="hubBadge" src="${weekBadge(currentWeek)}" alt="${w.title}"></div>
      <div class="hubInfo"><div class="eyebrow">myView 1.4 · Unit 4</div><h1>${w.theme}</h1><p class="hubQuestion">${w.question}</p><div class="skillChips"><span class="skillChip">${w.genre}</span>${w.skills.map(s=>`<span class="skillChip">${s}</span>`).join('')}</div><div class="centerActions" style="justify-content:flex-start"><button id="changeWeek" class="secondaryBtn" type="button">‹ Choose another week</button></div></div>
    </div>
    <div class="activitiesGrid">${tiles}</div>`;
  $('#changeWeek').onclick=()=>route('#weeks');
  $$('.activityTile',host).forEach(b=>b.onclick=()=>route(`#activity/${currentWeek}/${b.dataset.activity}`));
}

function activityShell(title,subtitle,body){
  return `<div class="activityHeader"><button id="backWeek" class="backBtn" type="button">‹ ${WEEKS[currentWeek].title}</button><div class="activityTitle"><h1>${title}</h1><p>${subtitle}</p></div><span class="headerSpacer"></span></div><div class="activityPanel">${body}</div>`;
}
function wireBack(){ const b=$('#backWeek'); if(b)b.onclick=()=>route(`#hub/${currentWeek}`); }
function renderActivity(id){
  currentActivity=id;
  if(id==='vocab')return renderVocab();
  if(id==='listen')return renderListen();
  if(id==='match')return renderMatch();
  if(id==='phonics')return startMC('Phonics',WEEKS[currentWeek].skills.slice(0,2).join(' · '),WEEKS[currentWeek].phonics,'phonics');
  if(id==='sight')return startMC('Words to Know','High-frequency words in context',WEEKS[currentWeek].sightTasks,'sight');
  if(id==='grammar')return startMC('Grammar',WEEKS[currentWeek].skills[2],WEEKS[currentWeek].grammar,'grammar');
  if(id==='read')return renderRead();
  if(id==='order')return renderOrder();
  if(id==='adventure')return renderAdventure();
  if(id==='check')return startQuickCheck();
  if(id==='exam')return startExam();
  if(id==='wheel')return renderWheel();
  renderHub();setScreen('hub');
}

function renderVocab(){
  const w=WEEKS[currentWeek];
  const cards=w.vocab.map(([word,definition,image])=>`<button class="vocabCard" data-speak="${word.replace(/"/g,'&quot;')}" type="button">${image?`<img class="vocabImage" src="assets/vocab/week${currentWeek}/${image}" alt="">`:''}<span class="vocabText"><span class="word">${word}</span><span class="definition">${definition}</span></span><span class="speak">🔊 Tap to hear</span></button>`).join('');
  $('#activityContent').innerHTML=activityShell('Vocabulary',`${w.reading} · ${w.genre}`,`<p class="instruction">These words follow the week’s source vocabulary and theme. Tap any card to hear it.</p><div class="vocabDeck">${cards}</div><div class="centerActions"><button id="vocabDone" class="primaryBtn" type="button">I’ve reviewed these words</button></div>`);
  wireBack();$$('.vocabCard').forEach(b=>b.onclick=()=>speak(b.dataset.speak));$('#vocabDone').onclick=()=>{markDone(currentWeek,'vocab');renderVocab();};
}

function makeListenQueue(){
  const words=[...WEEKS[currentWeek].vocab.map(x=>x[0]),...WEEKS[currentWeek].hfw];
  return shuffle(words).slice(0,8).map(answer=>{
    const distract=shuffle(words.filter(x=>x!==answer)).slice(0,2);
    return {answer,choices:shuffle([answer,...distract])};
  });
}
function renderListen(){
  listenState={queue:makeListenQueue(),i:0,score:0,answered:false};
  $('#activityContent').innerHTML=activityShell('Listen & Tap','Listen carefully. Choose the word you hear.',`<div id="listenInner"></div>`);wireBack();drawListen();
}
function drawListen(){
  const s=listenState,host=$('#listenInner');
  if(s.i>=s.queue.length){markDone(currentWeek,'listen');host.innerHTML=finishMarkup('Listening complete!',s.score,s.queue.length,'listen');wireFinishButtons();return;}
  const q=s.queue[s.i];
  host.innerHTML=`<div class="progressBar"><div class="progressFill" style="width:${100*s.i/s.queue.length}%"></div></div><p class="instruction">${s.i+1} / ${s.queue.length}</p><div class="promptBig">Which word do you hear?</div><div class="centerActions"><button id="replayWord" class="secondaryBtn" type="button">🔊 Play word</button></div><div class="answerGrid">${q.choices.map(x=>`<button class="answerBtn" data-answer="${escapeAttr(x)}" type="button">${x}</button>`).join('')}</div><div id="listenFeedback" class="feedback"></div><div class="centerActions"><button id="listenNext" class="nextBtn" type="button" hidden>${s.i===s.queue.length-1?'Finish':'Next'} ›</button></div>`;
  $('#replayWord').onclick=()=>speak(q.answer);setTimeout(()=>speak(q.answer),180);
  $$('.answerBtn',host).forEach(b=>b.onclick=()=>{
    if(s.answered)return;s.answered=true;const ok=b.dataset.answer===q.answer;if(ok)s.score++;
    $$('.answerBtn',host).forEach(x=>{x.disabled=true;if(x.dataset.answer===q.answer)x.classList.add('correct')});if(!ok)b.classList.add('wrong');
    const f=$('#listenFeedback');f.textContent=ok?'Correct!':'Listen again: '+q.answer;f.className='feedback '+(ok?'good':'bad');$('#listenNext').hidden=false;if(!ok)speak(q.answer);
  });
  $('#listenNext').onclick=()=>{s.i++;s.answered=false;drawListen();};
}

function renderMatch(){
  const withImages=WEEKS[currentWeek].vocab.filter(v=>v[2]);
  const hasEnoughPictures=withImages.length>=6;
  if(!hasEnoughPictures){
    const pairs=shuffle(WEEKS[currentWeek].vocab).slice(0,6).map(([word,def,image],i)=>({id:i,word,def,image:image||null}));
    matchState={pairs,stage:'meaning',left:null,right:null,matched:new Set(),memory:null,sets:null,completed:new Set()};
  }else{
    // Use different vocabulary in each game so one Match session reviews a wider range.
    // Week 1 currently has 28 illustrated words, so we can use 18 unique words per run.
    const pool=shuffle(withImages);
    const takeSet=(offset)=>pool.slice(offset,offset+6).map(([word,def,image],i)=>({id:i,word,def,image:image||null}));
    const picturePairs=takeSet(0);
    let meaningPairs=takeSet(6);
    let memoryPairs=takeSet(12);
    // Future weeks may temporarily have fewer than 18 illustrated words. Fill any short set
    // from the shuffled pool while avoiding repeats where possible.
    const fillSet=(set,used)=>{
      for(const item of pool){
        if(set.length>=6)break;
        if(!used.has(item[0])){ set.push({id:set.length,word:item[0],def:item[1],image:item[2]||null}); used.add(item[0]); }
      }
      if(set.length<6){
        for(const item of pool){
          if(set.length>=6)break;
          if(!set.some(x=>x.word===item[0])) set.push({id:set.length,word:item[0],def:item[1],image:item[2]||null});
        }
      }
      return set.map((p,i)=>({...p,id:i}));
    };
    const usedPic=new Set(picturePairs.map(p=>p.word));
    meaningPairs=fillSet(meaningPairs,new Set([...usedPic,...meaningPairs.map(p=>p.word)]));
    const usedBeforeMemory=new Set([...picturePairs,...meaningPairs].map(p=>p.word));
    memoryPairs=fillSet(memoryPairs,new Set([...usedBeforeMemory,...memoryPairs.map(p=>p.word)]));
    matchState={
      pairs:picturePairs,
      stage:'picture',left:null,right:null,matched:new Set(),memory:null,
      sets:{picture:picturePairs,meaning:meaningPairs,memory:memoryPairs},completed:new Set()
    };
  }
  $('#activityContent').innerHTML=activityShell('Match','Choose any game.',`<div class="matchSteps"><button id="matchStepPicture" class="matchStep" data-match-stage="picture" type="button">Picture Match</button><button id="matchStepMeaning" class="matchStep" data-match-stage="meaning" type="button">Meaning Match</button><button id="matchStepMemory" class="matchStep" data-match-stage="memory" type="button">Memory Match</button></div><div id="matchInner"></div>`);wireBack();$$('[data-match-stage]').forEach(b=>b.onclick=()=>openMatchGame(b.dataset.matchStage));drawMatch();
}
function resetMatchSelection(){
  matchState.left=null;matchState.right=null;
}
function setMatchStage(stage){
  const s=matchState;
  s.stage=stage;
  if(s.sets && s.sets[stage]) s.pairs=s.sets[stage];
  s.matched=new Set();
  s.memory=null;
  resetMatchSelection();
}
function openMatchGame(stage){
  if(stage==='memory'){beginMemoryMatch();return;}
  setMatchStage(stage);
  drawMatch();
}
function beginMemoryMatch(){
  const s=matchState;
  if(s.sets && s.sets.memory) s.pairs=s.sets.memory;
  const cards=[];
  s.pairs.forEach(p=>{
    cards.push({key:`w-${p.id}`,pairId:p.id,type:'word',word:p.word});
    cards.push({key:`p-${p.id}`,pairId:p.id,type:'picture',word:p.word,image:p.image});
  });
  s.memory={cards:shuffle(cards),flipped:[],matched:new Set(),locked:false,moves:0};
  s.stage='memory';s.matched=new Set();resetMatchSelection();drawMatch();
}
function drawMemoryMatch(){
  const s=matchState,m=s.memory,host=$('#matchInner');
  if(m.matched.size===s.pairs.length){
    s.completed.add('memory');
    if(s.completed.size===3){
      markDone(currentWeek,'match');
      host.innerHTML=`<div class="finishBox"><div class="big">All three match games complete!</div><div class="scoreBig">3 / 3 games</div><p>You practised 18 vocabulary words across Picture Match, Meaning Match and Memory Match.</p><div class="centerActions"><button id="finishAgain" class="secondaryBtn" type="button">Play Again</button><button id="finishWeek" class="primaryBtn" type="button">Back to ${WEEKS[currentWeek].title}</button></div></div>`;
      wireFinishButtons();return;
    }
    host.innerHTML=`<div class="matchStageComplete"><div class="matchStageIcon">✓</div><h2>Memory Match complete!</h2><p>Choose another Match game above whenever you're ready.</p></div>`;
    drawMatchTabs();return;
  }
  host.innerHTML=`<div class="memoryMeta">${m.matched.size} / ${s.pairs.length} pairs · ${m.moves} moves</div><div class="memoryGrid">${m.cards.map((card,idx)=>{
    const open=m.flipped.includes(idx)||m.matched.has(card.pairId);
    const matched=m.matched.has(card.pairId);
    if(!open)return `<button class="memoryCard memoryBack" data-memory-index="${idx}" type="button" aria-label="Face-down card"><span>?</span></button>`;
    if(card.type==='word')return `<button class="memoryCard memoryWord ${matched?'memoryMatched':''}" data-memory-index="${idx}" type="button"><span>${card.word}</span></button>`;
    return `<button class="memoryCard memoryPicture ${matched?'memoryMatched':''}" data-memory-index="${idx}" type="button" aria-label="${escapeAttr(card.word)} picture"><img src="assets/vocab/week${currentWeek}/${card.image}" alt=""></button>`;
  }).join('')}</div>`;
  $$('[data-memory-index]',host).forEach(b=>b.onclick=()=>{
    if(m.locked)return;
    const idx=Number(b.dataset.memoryIndex),card=m.cards[idx];
    if(m.matched.has(card.pairId)||m.flipped.includes(idx))return;
    m.flipped.push(idx);drawMatch();
    if(m.flipped.length===2){
      m.moves++;
      const [a,bx]=m.flipped.map(i=>m.cards[i]);
      m.locked=true;
      const ok=a.pairId===bx.pairId && a.type!==bx.type;
      setTimeout(()=>{
        if(ok){m.matched.add(a.pairId);toast('Match!');speak(a.word);}
        m.flipped=[];m.locked=false;drawMatch();
      },ok?650:900);
    }
  });
}
function drawMatchTabs(){
  const s=matchState;
  const tabs={picture:$('#matchStepPicture'),meaning:$('#matchStepMeaning'),memory:$('#matchStepMemory')};
  Object.entries(tabs).forEach(([stage,el])=>{
    if(!el)return;
    el.classList.toggle('active',s.stage===stage);
    el.classList.toggle('complete',s.completed&&s.completed.has(stage));
    const labels={picture:'Picture Match',meaning:'Meaning Match',memory:'Memory Match'};
    el.textContent=(s.completed&&s.completed.has(stage)?'✓ ':'')+labels[stage];
  });
}
function drawMatch(){
  const s=matchState,host=$('#matchInner');
  drawMatchTabs();
  if(s.stage==='memory'){drawMemoryMatch();return;}
  if(s.matched.size===s.pairs.length){
    if(!s.sets){
      markDone(currentWeek,'match');
      host.innerHTML=finishMarkup('Meaning Match complete!',s.pairs.length,s.pairs.length,'match');
      wireFinishButtons();return;
    }
    s.completed.add(s.stage);
    drawMatchTabs();
    if(s.completed.size===3){
      markDone(currentWeek,'match');
      host.innerHTML=`<div class="finishBox"><div class="big">All three match games complete!</div><div class="scoreBig">3 / 3 games</div><p>You practised 18 vocabulary words across Picture Match, Meaning Match and Memory Match.</p><div class="centerActions"><button id="finishAgain" class="secondaryBtn" type="button">Play Again</button><button id="finishWeek" class="primaryBtn" type="button">Back to ${WEEKS[currentWeek].title}</button></div></div>`;
      wireFinishButtons();return;
    }
    const name=s.stage==='picture'?'Picture Match':'Meaning Match';
    host.innerHTML=`<div class="matchStageComplete"><div class="matchStageIcon">✓</div><h2>${name} complete!</h2><p>Choose another Match game above whenever you're ready.</p></div>`;
    return;
  }
  const remaining=s.pairs.filter(p=>!s.matched.has(p.id));
  if(s.stage==='picture'){
    const pictures=shuffle(remaining);
    host.innerHTML=`<div class="matchBoard pictureMatchBoard"><div class="matchCol">${remaining.map(p=>`<button class="matchBtn wordMatchBtn ${s.left===p.id?'selected':''}" data-side="left" data-id="${p.id}" type="button">${p.word}</button>`).join('')}</div><div class="matchPictureGrid">${pictures.map(p=>`<button class="pictureMatchBtn ${s.right===p.id?'selected':''}" data-side="right" data-id="${p.id}" type="button" aria-label="Choose picture"><img src="assets/vocab/week${currentWeek}/${p.image}" alt=""></button>`).join('')}</div></div><div id="matchFeedback" class="feedback"></div>`;
  }else{
    const defs=shuffle(remaining);
    host.innerHTML=`<div class="matchBoard"><div class="matchCol">${remaining.map(p=>`<button class="matchBtn ${s.left===p.id?'selected':''}" data-side="left" data-id="${p.id}" type="button">${p.word}</button>`).join('')}</div><div class="matchCol">${defs.map(p=>`<button class="matchBtn ${s.right===p.id?'selected':''}" data-side="right" data-id="${p.id}" type="button">${p.def}</button>`).join('')}</div></div><div id="matchFeedback" class="feedback"></div>`;
  }
  $$('[data-side]',host).forEach(b=>b.onclick=()=>{
    const id=Number(b.dataset.id);
    if(b.dataset.side==='left'){s.left=id;speak(s.pairs.find(p=>p.id===id).word)}else s.right=id;
    if(s.left!==null&&s.right!==null){
      if(s.left===s.right){s.matched.add(s.left);toast('Match!');resetMatchSelection();setTimeout(drawMatch,240);}else{const f=$('#matchFeedback');f.textContent='Not quite — try a different pair.';f.className='feedback bad';resetMatchSelection();setTimeout(drawMatch,500);}
    } else drawMatch();
  });
}


const GRAMMAR_DAILY_EXTRAS={
  1:[
    {q:'Which sentence tells about something that already happened?',choices:['Lena opened the paint box.','Lena opens the paint box.','Lena will open the paint box.'],answer:'Lena opened the paint box.'},
    {q:'Complete the future sentence: Next Saturday we ___ a mural.',choices:['will paint','painted','paint yesterday'],answer:'will paint'}
  ],
  2:[
    {q:'Choose the past-tense verb: The team ___ after the game.',choices:['rested','rests','will rest'],answer:'rested'},
    {q:'Fix the sentence: “Yesterday we cheer for our team.”',choices:['Yesterday we cheered for our team.','Yesterday we cheers for our team.','Yesterday we will cheer for our team.'],answer:'Yesterday we cheered for our team.'}
  ],
  3:[
    {q:'Complete: Later today I ___ my homework.',choices:['will finish','finished yesterday','finishing'],answer:'will finish'},
    {q:'Which sentence is NOT future tense?',choices:['We visited the market.','We will visit the market.','Dad will drive us there.'],answer:'We visited the market.'}
  ]
};

const DAILY_PROMPT_VARIANTS=[
  q=>q,
  q=>`Choose the best answer. ${q}`,
  q=>`Think carefully. ${q}`,
  q=>`Pick the correct choice. ${q}`,
  q=>`Show what you know. ${q}`
];

const SIGHT_CONTEXTS={
  1:{
    new:[
      'I opened a ___ notebook for art class.','Mina wore her ___ shoes today.','We saw a ___ painting in the hall.','Dad bought a ___ paintbrush.',
      'This is my ___ desk.','The class started a ___ project.','Joon has a ___ backpack.','Our teacher showed us a ___ book.',
      'I tried a ___ color in my picture.','She moved into a ___ house.'
    ],
    found:[
      'We ___ a shell near the path.','I ___ my missing pencil.','They ___ an old photograph.','Mina ___ a quiet place to read.',
      'Dad ___ the keys under the chair.','We ___ a small bird nest.','The class ___ a map in the box.','I ___ the blue crayon.',
      'She ___ a coin on the floor.','They ___ a better way to solve it.'
    ],
    please:[
      '___ close the window.','___ pass me the ruler.','___ wait for your turn.','___ put the book back.',
      '___ speak a little more slowly.','___ help me carry this box.','___ write your name here.','___ sit beside your partner.',
      '___ turn to page ten.','___ bring your sketchbook tomorrow.'
    ],
    always:[
      'I ___ wash my hands before lunch.','We ___ listen when someone is speaking.','She ___ puts her pencils away.','Dad ___ checks the door before bed.',
      'Our class ___ cleans the tables after art.','He ___ smiles when he sees his dog.','I ___ bring water to practice.','They ___ walk home together.',
      'Mina ___ remembers her library book.','We ___ say thank you when someone helps.'
    ],
    thank:[
      'I said “___ you” after she helped me.','We wrote a ___-you card for our teacher.','“___ you for the paint,” said Joon.','I want to ___ Dad for fixing my bike.',
      'Please ___ your partner for helping.','We should ___ the volunteers.','“___ you,” I said with a smile.','Mina called to ___ her grandmother.',
      'The class made a sign to ___ the helpers.','I remembered to ___ him for the gift.'
    ]
  },
  2:{
    any:[
      'Do you have ___ questions?','Are there ___ apples left?','I cannot see ___ buses yet.','Did you bring ___ extra paper?',
      'We do not need ___ more chairs.','Are ___ students absent today?','Is there ___ water in the bottle?','Do we have ___ time left?',
      'I did not hear ___ noise.','Can you find ___ blue markers?'
    ],
    pull:[
      'Please ___ the door toward you.','___ the rope gently.','We had to ___ the wagon up the hill.','Do not ___ the plant by its leaves.',
      'Dad helped me ___ the heavy box.','___ the handle to open the drawer.','The team will ___ together.','She used both hands to ___ the cart.',
      'Please ___ your chair closer.','We can ___ the curtain open.'
    ],
    very:[
      'The speech was ___ powerful.','This box is ___ heavy.','We were ___ proud of the team.','The field was ___ wet after the rain.',
      'She ran ___ quickly.','That was a ___ kind thing to do.','The room became ___ quiet.','He was ___ nervous before the game.',
      'The story was ___ interesting.','Our teacher was ___ pleased.'
    ],
    were:[
      'We ___ ready to help.','They ___ at the field yesterday.','The boxes ___ beside the door.','You ___ very brave.',
      'The players ___ tired after practice.','We ___ happy with the result.','The books ___ on the shelf.','They ___ careful with the old photo.',
      'You ___ right about the answer.','The students ___ quiet during the speech.'
    ],
    every:[
      '___ student carried one box.','We read ___ day.','___ player got a turn.','She waters the plant ___ morning.',
      '___ family received a note.','The bus comes ___ hour.','___ team needs a captain.','He practises ___ afternoon.',
      '___ page has a number.','We check our work ___ time.'
    ]
  },
  3:{
    our:[
      'This is ___ classroom.','We packed ___ bags for the trip.','___ teacher showed us the map.','The train stopped near ___ town.',
      'We finished ___ project together.','___ class visited the museum.','We put ___ books on the shelf.','___ team made a model bridge.',
      'We will bring ___ lunch tomorrow.','The driver checked ___ tickets.'
    ],
    away:[
      'The train moved far ___.','The bird flew ___.','Please put the tools ___.','The old station is two miles ___.',
      'The wagon rolled ___.','She looked ___ from the bright light.','The bus drove ___.','The clouds drifted ___.',
      'We packed the game ___.','The horse ran ___ from the gate.'
    ],
    light:[
      'Turn on the ___ so we can see.','The lamp gives us ___.','Sun___ filled the room.','This bag is very ___ to carry.',
      'A small ___ shone by the door.','The moon gave a little ___.','Please switch off the ___.','The flashlight made a bright ___.',
      'We need more ___ to read.','The room became ___ when the curtains opened.'
    ],
    never:[
      'I have ___ ridden in a self-driving car.','We should ___ play on railroad tracks.','She ___ forgets her helmet.','I will ___ tell your secret.',
      'Dad has ___ used virtual reality.','The train ___ stops here on Sunday.','We ___ leave rubbish on the ground.','He has ___ seen a 3D printer.',
      'I ___ thought the box would be so heavy.','They ___ miss the morning bus.'
    ],
    pretty:[
      'The night sky looked ___.','She wore a ___ dress.','The flowers are ___.','That is a ___ picture.',
      'The old station looked ___ in the snow.','The garden is very ___.','We saw a ___ sunset.','Her drawing turned out ___.',
      'The village looked ___ from the hill.','That is a ___ pattern on the box.'
    ]
  }
};

function makeSightDailyBank(week){
  const w=WEEKS[week],ctx=SIGHT_CONTEXTS[week];
  if(!ctx)return w.sightTasks.map(normalizeQuestion);
  const words=w.hfw.map(x=>x.toLowerCase()),out=[];
  words.forEach((word,wi)=>{
    (ctx[word]||[]).forEach((q,qi)=>{
      const distractors=words.filter(x=>x!==word);
      const d1=distractors[(qi+wi)%distractors.length],d2=distractors[(qi+wi+1)%distractors.length];
      out.push({q,choices:[word,d1,d2],answer:word,_base:`${word}-${qi}`});
    });
  });
  return out.slice(0,50);
}
function makeExpandedDailyBank(seedQuestions,key,week){
  let seeds=[...seedQuestions];
  if(key==='grammar'&&GRAMMAR_DAILY_EXTRAS[week])seeds=seeds.concat(GRAMMAR_DAILY_EXTRAS[week]);
  const out=[];
  seeds.forEach((raw,bi)=>{
    const q=normalizeQuestion(raw);
    DAILY_PROMPT_VARIANTS.forEach((fn,vi)=>out.push({...q,q:fn(q.q),_base:`${bi}`,_variant:vi}));
  });
  while(out.length<50){
    const raw=normalizeQuestion(seeds[out.length%seeds.length]);
    out.push({...raw,_base:`extra-${out.length}`});
  }
  return out.slice(0,50);
}
function dailyQuestionBank(key,week,questions){
  if(key==='sight')return makeSightDailyBank(week);
  return makeExpandedDailyBank(questions,key,week);
}
function chooseDailyTen(bank){
  const grouped=new Map();
  bank.forEach(q=>{
    const k=q._base??q.q;
    if(!grouped.has(k))grouped.set(k,[]);
    grouped.get(k).push(q);
  });
  let groups=shuffle([...grouped.values()]);
  const picked=[];
  for(const g of groups){
    picked.push(shuffle(g)[0]);
    if(picked.length===10)break;
  }
  if(picked.length<10){
    const remaining=shuffle(bank.filter(q=>!picked.includes(q)));
    picked.push(...remaining.slice(0,10-picked.length));
  }
  return shuffle(picked).map(normalizeQuestion);
}

function normalizeQuestion(q){
  const answer=String(q.answer);const choices=q.choices.map(String);return {...q,answer,choices};
}
function startMC(title,subtitle,questions,key){
  const isDaily=['phonics','sight','grammar'].includes(key);
  const bank=isDaily?dailyQuestionBank(key,currentWeek,questions):questions.map(normalizeQuestion);
  const queue=isDaily?chooseDailyTen(bank):bank.map(normalizeQuestion);
  const dailySubtitle=isDaily?`${subtitle} · 10 random questions from a 50-question bank`:subtitle;
  mcState={title,subtitle:dailySubtitle,key,queue,i:0,score:0,answered:false,bankSize:bank.length};
  $('#activityContent').innerHTML=activityShell(title,dailySubtitle,`<div id="mcInner"></div>`);wireBack();drawMC();
}
function drawMC(){
  const s=mcState,host=$('#mcInner');
  if(s.i>=s.queue.length){markDone(currentWeek,s.key);host.innerHTML=finishMarkup(`${s.title} complete!`,s.score,s.queue.length,s.key);wireFinishButtons();return;}
  const q=s.queue[s.i];const choices=shuffle(q.choices);
  host.innerHTML=`<div class="progressBar"><div class="progressFill" style="width:${100*s.i/s.queue.length}%"></div></div><p class="instruction">${s.i+1} / ${s.queue.length}</p><div class="promptBig">${q.q}</div><div class="answerGrid">${choices.map(x=>`<button class="answerBtn" data-answer="${escapeAttr(x)}" type="button">${x}</button>`).join('')}</div><div id="mcFeedback" class="feedback"></div><div class="centerActions"><button id="mcNext" class="nextBtn" type="button" hidden>${s.i===s.queue.length-1?'Finish':'Next'} ›</button></div>`;
  $$('.answerBtn',host).forEach(b=>b.onclick=()=>{
    if(s.answered)return;s.answered=true;const ok=b.dataset.answer===q.answer;if(ok)s.score++;
    $$('.answerBtn',host).forEach(x=>{x.disabled=true;if(x.dataset.answer===q.answer)x.classList.add('correct')});if(!ok)b.classList.add('wrong');
    const f=$('#mcFeedback');f.textContent=ok?'Correct!':`Answer: ${q.answer}`;f.className='feedback '+(ok?'good':'bad');$('#mcNext').hidden=false;
  });
  $('#mcNext').onclick=()=>{s.i++;s.answered=false;drawMC();};
}

function renderRead(){
  const p=WEEKS[currentWeek].passage;readState={i:0,score:0,answered:false};
  $('#activityContent').innerHTML=activityShell('Read & Find','Original practice text aligned to this week’s theme and reading skill.',`<div class="readLayout"><article class="passage"><h2>${p.title}</h2><p>${p.text}</p></article><div id="readQuestions"></div></div>`);wireBack();drawReadQuestion();
}
function drawReadQuestion(){
  const p=WEEKS[currentWeek].passage,s=readState,host=$('#readQuestions');
  if(s.i>=p.questions.length){markDone(currentWeek,'read');host.innerHTML=finishMarkup('Reading complete!',s.score,p.questions.length,'read');wireFinishButtons();return;}
  const q=p.questions[s.i];
  host.innerHTML=`<div class="questionCard"><div class="eyebrow">Question ${s.i+1} of ${p.questions.length}</div><h3>${q.q}</h3><div class="miniChoices">${shuffle(q.choices).map(x=>`<button class="miniChoice" data-answer="${escapeAttr(x)}" type="button">${x}</button>`).join('')}</div><div id="readFeedback" class="feedback"></div><div class="centerActions"><button id="readNext" class="nextBtn" type="button" hidden>${s.i===p.questions.length-1?'Finish':'Next'} ›</button></div></div>`;
  $$('.miniChoice',host).forEach(b=>b.onclick=()=>{
    if(s.answered)return;s.answered=true;const ok=b.dataset.answer===q.answer;if(ok)s.score++;
    $$('.miniChoice',host).forEach(x=>{x.disabled=true;if(x.dataset.answer===q.answer)x.classList.add('correct')});if(!ok)b.classList.add('wrong');
    const f=$('#readFeedback');f.textContent=ok?'Correct — the text supports that answer.':`Look back at the text. Answer: ${q.answer}`;f.className='feedback '+(ok?'good':'bad');$('#readNext').hidden=false;
  });
  $('#readNext').onclick=()=>{s.i++;s.answered=false;drawReadQuestion();};
}


const ORDER_TASKS={
  1:['Mara draws ordinary things around her.','Her class visits a local art room.','Mara paints the view from her classroom window.','Her teacher says someone in the future may learn from her picture.'],
  2:['Joon notices the school garden needs care.','He asks if he can water the plants.','Students ask families for useful containers.','The school starts a lunchtime garden club.'],
  3:['Eli’s family waits for supplies to arrive by wagon.','A new rail station opens nearby.','The family’s tools arrive much faster.','Eli imagines what future inventions might change.'],
  4:['People once crossed the river by boat.','A bridge is built across the river.','The bridge becomes important to the town.','The town uses a bridge symbol on its flag.'],
  5:['Ms. Han remembers having only a few books nearby.','She asks families to donate books.','A shop owner offers an empty room.','Volunteers create a free reading room for children.'],
  6:['The class opens a box of objects from the community.','Students study each object for clues about the past.','They compare several sources and ask questions.','They add a class photograph and note for the future.']
};
const ADVENTURES={
  1:{
    title:'The Dusty Sketchbook',
    coverImage:'assets/adventure/week1/00_Story_Cover.png',
    completeImage:'assets/adventure/week1/06_Chichis_Turn.png',
    pages:[
      {title:'The Dusty Sketchbook',image:'assets/adventure/week1/01_The_Dusty_Sketchbook.png',text:`Chichi finds an old sketchbook at the back of the town art room. Inside are drawings of his street from many years ago.`},
      {title:'Something Strange',image:'assets/adventure/week1/02_Something_Strange.png',text:`Chichi looks closely at one drawing. The bakery is there. The big tree is there. But someone has drawn a tiny star beside the wall.`},
      {title:'Follow the Star',image:'assets/adventure/week1/03_Follow_the_Star.png',text:`Chichi takes the sketchbook outside. He finds the same wall, but there is no star. Then he notices one loose brick near the ground.`},
      {title:'Behind the Brick',image:'assets/adventure/week1/04_Behind_the_Brick.png',text:`Chichi carefully pulls the brick forward. Behind it is a small metal box! His heart jumps. Has he discovered hidden treasure?`},
      {title:'The Treasure',image:'assets/adventure/week1/05_The_Treasure.png',text:`Inside are three old pencils and a note: “For the next artist.” Chichi laughs. The treasure isn't gold. It is an invitation.`},
      {title:`Chichi's Turn`,image:'assets/adventure/week1/06_Chichis_Turn.png',text:`Chichi draws the street as it looks today. Then he adds a new pencil to the box and hides it again for the next artist.`}
    ]
  },
  2:{
    title:'The Secret Field',
    coverImage:'assets/adventure/week2/00_Story_Cover.png',
    completeImage:'assets/adventure/week2/08_Story_Complete.png',
    pages:[
      {title:'The Rookie',image:'assets/adventure/week2/01_The_Rookie.png',text:`Chichi is the <strong>rookie</strong> in the town football <strong>league</strong>. During his first game, he kicks the ball much too hard.<br><br><strong>WHOOSH!</strong><br>The ball flies over the fence and disappears into the bushes.`},
      {title:'Beyond the Fence',image:'assets/adventure/week2/02_Beyond_the_Fence.png',text:`Chichi squeezes through a gap to find it. Behind the bushes is another football <strong>field</strong>—small, overgrown and completely hidden. An old goal leans to one side.<br><br>“Who played here?” Chichi wonders.`},
      {title:'A Strange Discovery',image:'assets/adventure/week2/03_A_Strange_Discovery.png',text:`Near the goal, Chichi spots a rusty metal box under some leaves. Inside is an old team photograph. The players are muddy, smiling and holding an enormous silver cup.`},
      {title:'Number Seven',image:'assets/adventure/week2/04_Number_Seven.png',text:`Chichi turns the photograph over. Someone has written:<br><br><strong>EVERY TEAMMATE IS VALUABLE.</strong><br><br>He <strong>admires</strong> the old team. Then he looks again. Player number seven seems strangely familiar...`},
      {title:'The Surprise',image:'assets/adventure/week2/05_The_Surprise.png',text:`Chichi races back and shows his <strong>teammates</strong> the photograph. Their coach stares at it—and laughs.<br><br>“That’s me! I was the <strong>rookie</strong>.”<br><br>Chichi nearly drops the picture.`},
      {title:'Their Own League',image:'assets/adventure/week2/06_Their_Own_League.png',text:`Coach explains that his team wasn’t <strong>allowed</strong> to join the town league. Instead of giving up, they fixed the forgotten field and made a league of their own.<br><br>“And everyone was welcome.”`},
      {title:'One More Kick',image:'assets/adventure/week2/07_One_More_Kick.png',text:`The team decides to bring the secret field back to life. They pull weeds, fix the goal and hang the old photograph beside it. Everyone <strong>cheers</strong> as Chichi takes the first kick.<br><br><strong>WHOOSH!</strong><br>The ball sails over the fence.<br><br>Coach groans. “Not again!”`}
    ]
  },
  3:{
    title:'The Train That Wasn’t There',
    coverImage:'assets/adventure/week3/00_Story_Cover.png',
    completeImage:'assets/adventure/week3/08_Story_Complete.png',
    pages:[
      {title:'A Strange Ticket',image:'assets/adventure/week3/01_A_Strange_Ticket.png',text:`Chichi visits the town museum to try its new <strong>virtual reality</strong> exhibit. It uses modern <strong>technology</strong> to show what the town looked like long ago.<br><br>Before he puts on the headset, he notices an old train ticket on the floor.<br><br>“Where did you come from?”`},
      {title:'Back in Time',image:'assets/adventure/week3/02_Back_in_Time.png',text:`Suddenly, Chichi is standing beside a dusty <strong>railroad</strong>. In the distance, cowboys are moving <strong>cattle</strong> across a huge <strong>ranch</strong>. An <strong>older</strong> steam <strong>train</strong> whistles beside the station.<br><br>Chichi follows the track toward a little wooden <strong>bridge</strong>.<br><br>“This looks much older than our town!”<br><br>Chichi knows it is only virtual reality... or is it?`},
      {title:'The Missing Box',image:'assets/adventure/week3/03_The_Missing_Box.png',text:`At the station, a boy is struggling with a heavy wooden box.<br><br>“I <strong>promised</strong> to take this to the <strong>market</strong>,” he says, “but the train leaves soon!”<br><br>The box is too heavy to carry far.<br><br>Chichi looks around. An idea begins to form in his <strong>mind</strong>.`},
      {title:`Chichi's Plan`,image:'assets/adventure/week3/04_Chichis_Plan.png',text:`Chichi remembers something from the museum: a model cart made with a <strong>3D printer</strong>.<br><br>There is no 3D printer here, so he finds an old wooden cart instead.<br><br>Together, they <strong>load</strong> the box onto it.<br><br>“Much <strong>easier</strong>!” says the boy.<br><br>But the train is getting <strong>closer</strong>, and they need to move <strong>faster</strong>.`},
      {title:'Too Late!',image:'assets/adventure/week3/05_Too_Late.png',text:`They race across the little <strong>bridge</strong>.<br><br><strong>TOOOOT!</strong><br><br>The train begins to move.<br><br>Chichi runs even <strong>faster</strong>, but he can <strong>hardly</strong> keep up.<br><br>The boy waves desperately.<br><br>Then the train suddenly stops.<br><br>The driver leans out of the window.<br><br>“Forgot my lunch.”<br><br>Chichi blinks.`},
      {title:'One Last Surprise',image:'assets/adventure/week3/06_One_Last_Surprise.png',text:`They get the box aboard just in time.<br><br>The boy smiles.<br><br>“I’ll <strong>never</strong> forget this.”<br><br>Everything suddenly flickers.<br><br>The ranch, the station, the bridge and the train disappear.<br><br>Chichi is back in the museum.<br><br>But something is different.`},
      {title:'The Ticket',image:'assets/adventure/week3/07_The_Ticket.png',text:`The old ticket is still in Chichi’s hand.<br><br>He turns it over.<br><br>Written on the back are four words:<br><br><strong>THANK YOU FOR THE CART.</strong><br><br>Chichi stares at it.<br><br>“Virtual reality can’t do that... can it?”<br><br>From somewhere behind him:<br><br><strong>TOOOOT!</strong>`}
    ]
  },
  4:{
    pages:[
      {title:'The Museum Box',text:'At the town museum, Chichi sees an old map, a photograph, and a small flag.'},
      {title:'Clues from the Past',text:'Each object tells only part of the story, so Chichi asks what else he can learn.'},
      {title:'Compare Sources',text:'The map shows where a road was. The photograph shows what buildings looked like.'},
      {title:'A Symbol',text:'The flag has a river symbol that matches the river on the old map.'},
      {title:'Build the Story',text:'Chichi learns that several pieces of evidence can work together to explain the past.'}
    ]
  },
  5:{
    pages:[
      {title:'A Busy Morning',text:'Chichi visits a community center where volunteers are packing food boxes.'},
      {title:'Different Ways to Help',text:'Some people carry boxes, some write labels, and others greet visitors.'},
      {title:'A Small Problem',text:'They run out of markers, so Chichi asks the school office if it has extras.'},
      {title:'Everyone Has a Job',text:'The work continues because different people use different skills.'},
      {title:'Helpful Heroes',text:'Chichi decides that helping does not always mean doing something famous. It means noticing what is needed and acting.'}
    ]
  },
  6:{
    pages:[
      {title:`Chichi’s Time Capsule`,text:`Chichi wants to make a small time capsule for next year’s class.`},
      {title:'Choose Evidence',text:'He adds a class photo, a lunch menu, a bus ticket, and a short note about school life.'},
      {title:'Explain the Clues',text:'He labels each item so future students will know why it mattered.'},
      {title:'Think Like a Historian',text:'Chichi checks the date and asks whether the objects show different parts of life.'},
      {title:'Today Becomes History',text:'He closes the box and smiles. The present is already becoming the past.'}
    ]
  }
};

function renderOrder(){
  const correct=ORDER_TASKS[currentWeek];
  const items=shuffle(correct.map((text,i)=>({text,i})));
  let chosen=[];
  $('#activityContent').innerHTML=activityShell('Put in Order','Put the four events in the order they happen.',`<p class="instruction">Tap the events from first to last.</p><div id="orderSource" class="answerGrid"></div><div class="promptBig" style="font-size:28px;margin-top:24px">Your order</div><div id="orderChosen" class="matchCol" style="max-width:850px;margin:0 auto"></div><div id="orderFeedback" class="feedback"></div><div class="centerActions"><button id="orderReset" class="secondaryBtn" type="button">Reset</button><button id="orderCheck" class="primaryBtn" type="button">Check order</button></div>`);
  wireBack();
  const source=$('#orderSource'),out=$('#orderChosen');
  function draw(){
    source.innerHTML=items.filter(x=>!chosen.some(c=>c.i===x.i)).map(x=>`<button class="answerBtn" data-i="${x.i}" type="button">${x.text}</button>`).join('');
    out.innerHTML=chosen.map((x,j)=>`<button class="matchBtn" data-chosen="${j}" type="button"><strong>${j+1}.</strong> ${x.text}</button>`).join('');
    $$('.answerBtn',source).forEach(b=>b.onclick=()=>{chosen.push(items.find(x=>x.i===Number(b.dataset.i)));draw();});
    $$('[data-chosen]',out).forEach(b=>b.onclick=()=>{chosen.splice(Number(b.dataset.chosen),1);draw();});
  }
  draw();
  $('#orderReset').onclick=()=>{chosen=[];$('#orderFeedback').textContent='';draw();};
  $('#orderCheck').onclick=()=>{
    const f=$('#orderFeedback');
    if(chosen.length<4){f.textContent='Choose all four events first.';f.className='feedback bad';return;}
    const ok=chosen.every((x,i)=>x.i===i);
    f.textContent=ok?'Correct — the sequence makes sense.':'Not quite. Tap an item in your order to move it back, then try again.';f.className='feedback '+(ok?'good':'bad');
    if(ok){markDone(currentWeek,'order');}
  };
}

function renderAdventure(){
  const story=ADVENTURES[currentWeek]||{pages:[]};
  const pages=story.pages||[];
  let i=-1; // -1 = opening page
  $('#activityContent').innerHTML=activityShell('Chichi’s Adventure','',`<div id="adventureInner"></div>`);
  $('#activityContent .activityHeader')?.classList.add('adventureHeader');
  $('#activityContent .activityPanel')?.classList.add('adventurePanel');
  wireBack();
  function draw(){
    const host=$('#adventureInner');
    if(i<0){
      const cover=story.coverImage||pages[0]?.image||weekArt(currentWeek);
      const storyTitle=story.title||pages[0]?.title||'Chichi’s Adventure';
      host.innerHTML=`<div class="adventureIntro"><div class="adventureIntroImage"><img src="${cover}" alt="${escapeAttr(storyTitle)}"></div><div class="adventureIntroCard"><div class="eyebrow">${WEEKS[currentWeek].title} · Chichi’s Adventure</div><h2>${storyTitle}</h2><p>Ready for a new adventure with Chichi?</p><div class="centerActions"><button id="adventureStart" class="nextBtn adventureStartBtn" type="button">Start Story ›</button></div></div></div>`;
      $('#adventureStart').onclick=()=>{stopAdventureNarration();i=0;draw()};
      return;
    }
    if(i>=pages.length){
      markDone(currentWeek,'adventure');
      const completeImg=story.completeImage||pages.at(-1)?.image||weekArt(currentWeek);
      host.innerHTML=`<div class="adventurePage adventureFinish"><div class="adventureImageWrap"><img class="adventureImage" src="${completeImg}" alt="Story complete"></div><div class="questionCard adventureTextCard adventureFinishCard"><div class="big">Story complete!</div><p>Chichi finished this week’s adventure.</p><div class="centerActions adventureNav"><button id="adventureAgain" class="secondaryBtn" type="button">Read again</button><button id="adventureWeek" class="primaryBtn" type="button">Back to ${WEEKS[currentWeek].title}</button></div></div></div>`;
      $('#adventureAgain').onclick=()=>{stopAdventureNarration();i=-1;draw()};$('#adventureWeek').onclick=()=>{stopAdventureNarration();route(`#hub/${currentWeek}`)};return;
    }
    const page=pages[i], title=page.title, text=page.text;
    const image=page.image||weekArt(currentWeek);
    host.innerHTML=`<div class="progressBar"><div class="progressFill" style="width:${100*(i+1)/pages.length}%"></div></div><div class="adventurePage"><div class="adventureImageWrap"><img class="adventureImage" src="${image}" alt="${escapeAttr(title)}"></div><div class="questionCard adventureTextCard"><div class="eyebrow">Page ${i+1} of ${pages.length}</div><h2>${title}</h2><p>${text}</p><div class="adventureListenRow"><button id="advListen" class="secondaryBtn adventureListenBtn" type="button">🔊 Listen</button></div><div class="centerActions adventureNav"><button id="advPrev" class="secondaryBtn" type="button">‹ Back</button><button id="advNext" class="nextBtn" type="button">${i===pages.length-1?'Finish':'Next'} ›</button></div></div></div>`;
    $('#advListen').onclick=(e)=>{
      const b=e.currentTarget;
      if(b.classList.contains('playing')){stopAdventureNarration();b.textContent='🔊 Listen';b.classList.remove('playing');}
      else playAdventureNarration(currentWeek,i,text,b);
    };
    $('#advPrev').onclick=()=>{stopAdventureNarration();i--;draw()};
    $('#advNext').onclick=()=>{stopAdventureNarration();i++;draw()};
  }
  draw();
}

function vocabQuestions(w){
  const defs=w.vocab;
  return defs.slice(0,6).map(([word,def])=>{
    const distract=shuffle(defs.filter(x=>x[0]!==word).map(x=>x[1])).slice(0,2);
    return {q:`What does “${word}” mean?`,choices:shuffle([def,...distract]),answer:def};
  });
}
function reviewBank(week){
  const w=WEEKS[week];
  return [...vocabQuestions(w),...w.phonics,...w.sightTasks,...w.grammar].map(normalizeQuestion);
}
function startQuickCheck(){
  const q=shuffle(reviewBank(currentWeek)).slice(0,12);
  startMC('Quick Check','12 mixed questions from this week',q,'check');
}
function startExam(){
  const bank=reviewBank(currentWeek);
  const q=shuffle([...bank,...bank]).slice(0,20);
  startMC('Exam Practice','20 mixed questions · vocabulary, phonics, Words to Know, and grammar',q,'exam');
}


const G2_WHEEL_LEVELS=[
  {id:'starter',short:'Phonics',name:'Phonics Wheel',goal:100},
  {id:'challenge',short:'Words',name:'Words Wheel',goal:150},
  {id:'master',short:'Reading',name:'Reading Wheel',goal:150}
];
const G2_WHEEL_SEGMENTS=15;
const G2_WHEEL_GOLD=[4,9,14];
const G2_WHEEL_MAX_HEARTS=4;
let g2WheelLevel='starter',g2WheelPlus=false,g2WheelBusy=false,g2WheelQuestion=null,g2WheelRotation=0;
const g2WheelMaps={};
function wq(q,answer,choices,passage=''){return {q,answer,choices,passage};}
function wheelStorageKey(w){return `chichi_g2_u4_w${w}_g1wheel_v1`;}
function blankG2Wheel(){return {hearts:4,gameOver:false,starter:{points:0},challenge:{points:0},master:{points:0},completed:{starter:false,challenge:false,master:false},wheelMaster:false,plus:{starter:[],challenge:[],master:[]}};}
function loadG2Wheel(w=currentWeek){const s=blankG2Wheel();try{const r=JSON.parse(localStorage.getItem(wheelStorageKey(w))||'null');if(r){Object.assign(s,r);s.completed=Object.assign({starter:false,challenge:false,master:false},r.completed||{});s.plus=Object.assign({starter:[],challenge:[],master:[]},r.plus||{});G2_WHEEL_LEVELS.forEach(l=>{s[l.id]=Object.assign({points:0},r[l.id]||{});s.plus[l.id]=[...new Set((s.plus[l.id]||[]).map(Number).filter(n=>n>=0&&n<15))];});}}catch(e){};G2_WHEEL_LEVELS.forEach(l=>{s[l.id].points=Math.max(0,Math.min(l.goal,Number(s[l.id].points)||0));s.completed[l.id]=s.completed[l.id]||s[l.id].points>=l.goal;if(s.completed[l.id])s[l.id].points=l.goal;});s.hearts=Math.max(0,Math.min(4,Number(s.hearts)||0));s.wheelMaster=s.completed.starter&&s.completed.challenge&&s.completed.master;return s;}
function saveG2Wheel(s,w=currentWeek){try{localStorage.setItem(wheelStorageKey(w),JSON.stringify(s))}catch(e){}}
function wheelUnlocked(level,s=loadG2Wheel()){if(g2WheelPlus)return s.wheelMaster;if(s.wheelMaster)return true;if(level==='starter')return !s.completed.starter;if(level==='challenge')return s.completed.starter&&!s.completed.challenge;return s.completed.challenge&&!s.completed.master;}
function preferredG2Wheel(s){if(!s.completed.starter)return 'starter';if(!s.completed.challenge)return 'challenge';return 'master';}
function g2WheelPattern(i){return ['red','white','red','white','gold'][i%5];}
function g2Distractors(pool,correct,n=2){return shuffle(pool.filter(x=>x!==correct)).slice(0,n);}
function makeWordWheelBank(week){
  const v=WEEKS[week].vocab, words=v.map(x=>x[0]); const out=[];
  v.forEach(([word,def],i)=>out.push(wq(`Which word means “${def}”?`,word,shuffle([word,...g2Distractors(words,word)]))));
  let i=0;while(out.length<30){const [word,def]=v[i%v.length];const defs=v.map(x=>x[1]);out.push(wq(`Choose the best meaning for “${word}”.`,def,shuffle([def,...g2Distractors(defs,def)])));i++;}
  return out.slice(0,30);
}
const G2_PHONICS_WHEEL={
1:[
['Which word has the /ar/ sound?','sharp',['sharp','ship','shop']],['Choose the word with ar.','garden',['garden','golden','given']],['Which word rhymes with star?','jar',['jar','jet','joy']],['Which word has the same vowel sound as farm?','charm',['charm','term','storm']],['Complete the word: p__k.','ar',['ar','or','er']],['Which word has /ar/ in the middle?','market',['market','misty','mother']],['Which word belongs with car and far?','bar',['bar','bird','book']],['Which spelling makes the /ar/ sound in dark?','ar',['ar','er','ir']],['Which word does NOT have the /ar/ sound?','fork',['park','barn','fork']],['Which pair both have /ar/?','star and yard',['star and yard','star and bird','yard and fork']],['Which word needs -es to make a plural?','brush',['brush','cat','dog']],['What is the plural of dish?','dishes',['dishes','dishs','dishies']],['What is the plural of class?','classes',['classes','classs','classies']],['Which word is correct?','wishes',['wishs','wishes','wishies']],['Which plural ends in -es?','boxes',['boxes','cats','dogs']],['Complete: The artist ___ the canvas.','washes',['washes','washs','wash']],['Which verb is correct for he?','mixes',['mixes','mixs','mix']],['Choose the correct plural of peach.','peaches',['peaches','peachs','peachies']],['Which word adds -es?','buzzes',['buzzes','buzzs','buz']],['Which spelling is correct?','passes',['passes','passs','passies']],['Which word has ar?','artist',['artist','enter','under']],['Which word begins with /ar/?','army',['army','early','only']],['Which word ends with the /ar/ sound?','guitar',['guitar','paper','river']],['Which word has the same /ar/ sound as yard?','card',['card','cord','curd']],['Which plural is correct?','churches',['churches','churchs','churchies']],['Which plural is correct?','buses',['buses','buss','busies']],['Which verb is correct? She ___ the picture.','finishes',['finishes','finishs','finish']],['Which word needs -es after x?','foxes',['foxes','foxs','foxen']],['Choose the correct spelling.','matches',['matches','matchs','matchies']],['Which sentence has the correct -es form?','He watches the artist.',['He watches the artist.','He watchs the artist.','He watch the artist.']]],
2:[
['Which word has the /er/ sound?','herd',['herd','hard','head']],['Which word has the /ir/ sound?','shirt',['shirt','short','shut']],['Which word has the /ur/ sound?','turn',['turn','tan','tin']],['Which pair has the same r-controlled vowel sound?','bird and shirt',['bird and shirt','bird and board','shirt and shark']],['Choose the word with er.','person',['person','poison','season']],['Choose the word with ir.','first',['first','fast','feast']],['Choose the word with ur.','hurt',['hurt','heart','heat']],['Which word rhymes with bird?','third',['third','tired','tide']],['Which word rhymes with turn?','burn',['burn','barn','born']],['Which word does NOT have /er/, /ir/, or /ur/?','card',['girl','fern','card']],['Add -ing to run.','running',['running','runing','runned']],['Add -ed to stop.','stopped',['stopped','stoped','stopt']],['Add -ing to sit.','sitting',['sitting','siting','sitted']],['Add -ed to plan.','planned',['planned','planed','pland']],['Which word doubles the final consonant?','hopping',['hopping','hoping','hopeing']],['Complete: clap + ed =','clapped',['clapped','claped','clapd']],['Complete: swim + ing =','swimming',['swimming','swiming','swimmed']],['Which spelling is correct?','grabbing',['grabbing','grabing','grabingg']],['Which word does NOT double its final consonant?','helping',['running','sitting','helping']],['Which spelling is correct?','slipped',['slipped','sliped','slipted']],['Which word has the /ur/ sound?','purple',['purple','people','paper']],['Which word has the /ir/ sound?','girl',['girl','goal','gale']],['Which word has the /er/ sound?','term',['term','team','time']],['Which pair both have an r-controlled vowel?','fern and curl',['fern and curl','fern and cat','curl and cake']],['Add -ing to get.','getting',['getting','geting','getted']],['Add -ed to rub.','rubbed',['rubbed','rubed','rubb']],['Add -ing to drop.','dropping',['dropping','droping','droped']],['Which word is spelled correctly?','skipped',['skipped','skiped','skipt']],['Which sentence uses the correct -ing form?','The player is running.',['The player is running.','The player is runing.','The player is runned.']],['Which sentence uses the correct -ed form?','The team clapped.',['The team clapped.','The team claped.','The team clapd.']]],
3:[
['Which word compares two things?','taller',['taller','tallest','tall']],['Which word compares three or more things?','brightest',['brightest','brighter','bright']],['Choose the correct word: This train is ___ than that one.','faster',['faster','fastest','fast']],['Choose the correct word: This is the ___ bridge of the three.','longest',['longest','longer','long']],['Which ending usually compares two things?','-er',['-er','-est','-ing']],['Which ending usually compares three or more things?','-est',['-est','-er','-ed']],['Choose the correct word: The cart is ___ than the box.','lighter',['lighter','lightest','light']],['Choose the correct word: Of all the roads, this is the ___.','widest',['widest','wider','wide']],['Which word means “more old”?','older',['older','oldest','old']],['Which word means “most small”?','smallest',['smallest','smaller','small']],['Which word contains dge?','bridge',['bridge','brick','bring']],['Which word ends with dge?','edge',['edge','egg','end']],['Choose the /j/ sound spelled dge.','badge',['badge','bag','bake']],['Complete: fu___','dge',['dge','ge','je']],['Which spelling is correct?','judge',['judge','juge','jugg']],['Which word contains dge?','fudge',['fudge','fund','fun']],['Which word has the dge spelling?','lodge',['lodge','log','lock']],['Complete: bri___','dge',['dge','ge','j']],['Which word is spelled correctly?','ledge',['ledge','lege','lej']],['Which word does NOT contain dge?','giant',['badge','edge','giant']],['Choose the comparative form of easy.','easier',['easier','easiest','easyer']],['Choose the superlative form of easy.','easiest',['easiest','easier','easyest']],['Choose the comparative form of big.','bigger',['bigger','biggest','biger']],['Choose the superlative form of big.','biggest',['biggest','bigger','bigest']],['Which is correct?','hotter',['hotter','hoter','hottest than']],['Which is correct?','hottest',['hottest','hotest','hotter of all']],['Which word compares two trips?','shorter',['shorter','shortest','short']],['Which word compares all three trains?','fastest',['fastest','faster','fast']],['Which sentence is correct?','This bridge is wider than that one.',['This bridge is wider than that one.','This bridge is widest than that one.','This bridge is more widest.']],['Which sentence is correct?','This is the oldest train here.',['This is the oldest train here.','This is the older train of all.','This is the most older train.']]]
};
function makePhonicsWheelBank(week){return (G2_PHONICS_WHEEL[week]||[]).map((x,i)=>wq(x[0],x[1],x[2]));}
const G2_READING_WHEEL={
1:[
['Mina sketches the same old tree every month. In spring it has blossoms; in winter its branches are bare.',['Why does Mina draw the tree many times?','To show how it changes over time.',['To show how it changes over time.','Because she forgot the first drawing.','Because trees never change.']],['Which detail shows a change?','The branches are bare in winter.',['The branches are bare in winter.','Mina has a pencil.','The tree is old.']],['What idea does the passage support?','Artists can notice changes others may miss.',['Artists can notice changes others may miss.','Artists should only draw trees.','Winter is the best season.']]],
['An artist walks across a prairie and notices how the light changes the color of the grass. She paints the same view at sunrise and sunset.',['What is the artist studying?','How light changes what she sees.',['How light changes what she sees.','How to build a house.','How to grow wheat.']],['Why make two paintings?','To compare the view at different times.',['To compare the view at different times.','To use less paint.','To hide the prairie.']],['Which word best describes the artist?','observant',['observant','careless','impatient']]],
['Leo finds an old family painting. The clothes and street look different from today. His grandmother explains when it was painted.',['What can Leo learn from the painting?','Clues about life in the past.',['Clues about life in the past.','The weather tomorrow.','How to repair a camera.']],['Why does the date matter?','It places the painting on a time line.',['It places the painting on a time line.','It makes the colors brighter.','It changes the frame.']],['What is the main idea?','Art can preserve memories of another time.',['Art can preserve memories of another time.','Old clothes are always better.','Every painting is a photograph.']]],
['Sora paints a skyscraper from the sidewalk. Instead of drawing every window, she focuses on its shape against the dusky sky.',['What detail interests Sora most?','The building’s shape against the sky.',['The building’s shape against the sky.','Every person inside.','The street signs.']],['What does dusky suggest?','The light is becoming dim.',['The light is becoming dim.','The sky is very noisy.','It is noon.']],['Why might her painting look different from a photo?','She chooses what to emphasize.',['She chooses what to emphasize.','Paint cannot show buildings.','Photos have no shapes.']]],
['A class visits a gallery. One student whispers because the room is quiet. Another stands close to a canvas to study tiny brush marks.',['Why does the student whisper?','To keep the gallery quiet.',['To keep the gallery quiet.','To make the painting move.','To call someone outside.']],['What does the second student want to notice?','Small details in the painting.',['Small details in the painting.','The price of the building.','The weather.']],['What can you infer about the class?','They are looking carefully at art.',['They are looking carefully at art.','They are playing a loud game.','They are leaving immediately.']]],
['Jin draws a memory of his old neighborhood. He cannot remember every sign, so he paints the things he remembers most clearly.',['Why is the painting not an exact record?','It comes from Jin’s memory.',['It comes from Jin’s memory.','He has no colors.','The neighborhood never existed.']],['What does Jin choose to paint?','The details he remembers best.',['The details he remembers best.','Only things he dislikes.','Nothing from the past.']],['What theme fits this passage?','Art can hold personal memories.',['Art can hold personal memories.','Memory makes painting impossible.','Only maps show places.']]],
['A young artist hears a tune while she works. The rhythm makes her brush move in quick, repeating strokes.',['How does the tune affect the artist?','It influences the way she paints.',['It influences the way she paints.','It makes the canvas disappear.','It stops her from working.']],['Which detail shows the connection?','Her brush moves with the rhythm.',['Her brush moves with the rhythm.','The room has a window.','She owns a brush.']],['What is the main idea?','Different art forms can inspire each other.',['Different art forms can inspire each other.','Music and painting cannot mix.','Fast music is always better.']]],
['At first, people call a new painting scandalous because its shapes look unusual. Years later, many visitors admire it.',['Why did people react strongly at first?','The painting looked very unusual.',['The painting looked very unusual.','The frame was broken.','The gallery was closed.']],['How do opinions change?','People later admire the painting.',['People later admire the painting.','Everyone forgets it.','The artist removes it.']],['What lesson does this suggest?','New art can take time to understand.',['New art can take time to understand.','Unusual art has no value.','Old opinions never change.']]],
['Nari wants to achieve a difficult goal: finish a large mural. She works a little each day and asks classmates for help with the highest parts.',['How does Nari achieve her goal?','She works steadily and accepts help.',['She works steadily and accepts help.','She waits for someone else to finish.','She paints only one corner.']],['Why does she need classmates?','Some parts are hard to reach.',['Some parts are hard to reach.','She dislikes the colors.','They own the wall.']],['Which trait helps Nari most?','persistence',['persistence','forgetfulness','carelessness']]],
['A child looks at a painting of stars and begins to wonder about the universe. The picture does not give answers, but it makes him ask new questions.',['What does the painting cause the child to do?','Wonder about the universe.',['Wonder about the universe.','Forget about stars.','Stop asking questions.']],['Does the painting explain everything?','No, it inspires questions.',['No, it inspires questions.','Yes, it gives every answer.','No, it has no meaning.']],['What is the main idea?','Art can spark curiosity.',['Art can spark curiosity.','Art should explain science facts.','Questions are not useful.']]]
],
2:[
['A rookie joins a school team. One teammate misses an easy catch, but the rookie cheers instead of booing.',['What does the rookie do?','Supports the teammate.',['Supports the teammate.','Leaves the field.','Laughs at the mistake.']],['Which action shows respect?','Cheering after a mistake.',['Cheering after a mistake.','Booing loudly.','Refusing to play.']],['What lesson fits the passage?','A good teammate helps others keep trying.',['A good teammate helps others keep trying.','Only perfect players belong on teams.','Mistakes should end a game.']]],
['Two students want to use the same art table. Their teacher asks them to make a fair plan so both get equal time.',['What problem must they solve?','How to share the table fairly.',['How to share the table fairly.','How to buy a new school.','How to avoid art class.']],['What would show equality?','Each student gets the same amount of time.',['Each student gets the same amount of time.','One student gets all the time.','Neither student may use it.']],['Which value is most important here?','fairness',['fairness','fame','speed']]],
['A coach notices that only older players are allowed to choose equipment. She changes the rule so every teammate gets a turn.',['What did the coach change?','An unfair rule.',['An unfair rule.','The size of the field.','The season schedule.']],['Why is the new rule fairer?','Everyone gets a turn.',['Everyone gets a turn.','Only rookies choose.','No one uses equipment.']],['What can one action do?','Make a group more fair.',['Make a group more fair.','End every disagreement forever.','Make everyone famous.']]],
['During a game, one player hears a nasty comment from the crowd. His teammate stands up for him and tells the speaker to stop.',['What does the teammate do?','Defends the player.',['Defends the player.','Joins the crowd.','Walks away silently.']],['Which phrase matches the action?','stand up for',['stand up for','give up on','run away from']],['What quality does the teammate show?','courage',['courage','jealousy','carelessness']]],
['A student admires a classmate who keeps practicing after losing a race. The classmate does not become famous, but her effort inspires others.',['Why does the student admire her?','She keeps trying.',['She keeps trying.','She wins every race.','She becomes famous.']],['What matters more than fame here?','Effort and example.',['Effort and example.','Being on television.','Having expensive shoes.']],['What is the main idea?','Actions can influence others even without fame.',['Actions can influence others even without fame.','Only famous people change others.','Losing means quitting.']]],
['A baseball team has a new player. At first, some people are unkind. The team decides that every player deserves respect.',['What does the team decide?','Every player deserves respect.',['Every player deserves respect.','Only old players matter.','New players should leave.']],['What problem is the team addressing?','Unfair treatment.',['Unfair treatment.','A broken bat.','A rainy day.']],['Which word best connects to the decision?','equality',['equality','season','field']]],
['A community wants peace after a long argument. Instead of shouting, people listen to one another and agree on a shared rule.',['What helps the group move toward peace?','Listening and agreeing.',['Listening and agreeing.','More shouting.','Ignoring everyone.']],['What does peace mean here?','Living without fighting.',['Living without fighting.','Winning every argument.','Being alone.']],['What is the message?','Calm cooperation can solve conflict.',['Calm cooperation can solve conflict.','Arguments should never end.','Only leaders may speak.']]],
['A student council asks for more freedom to choose lunchtime clubs. The principal agrees, as long as students follow safety rules.',['What freedom do students gain?','They can choose clubs.',['They can choose clubs.','They can skip school.','They can change grades.']],['Why are there still rules?','Freedom can come with responsibility.',['Freedom can come with responsibility.','Rules remove all freedom.','Clubs are dangerous.']],['What is the main idea?','Freedom and responsibility can work together.',['Freedom and responsibility can work together.','Freedom means no rules at all.','Only adults can choose.']]],
['A player is not allowed to join a practice because of an unfair custom. Several teammates speak up and ask the coach to change it.',['What do the teammates do?','Challenge an unfair custom.',['Challenge an unfair custom.','Ignore the player.','Cancel the season.']],['Why do they speak up?','They want fair treatment.',['They want fair treatment.','They want more fame.','They dislike practice.']],['What could their action lead to?','A fairer team rule.',['A fairer team rule.','Fewer teammates forever.','No games at all.']]],
['One small act of kindness spreads through a class. A student helps another, that student helps someone else, and soon many people are helping.',['How does the first action change the class?','It encourages more helpful actions.',['It encourages more helpful actions.','It ends the school day.','It makes one person famous.']],['What pattern happens?','One action leads to another.',['One action leads to another.','Everyone stops helping.','Nothing changes.']],['What is the main idea?','A person’s actions can influence a group.',['A person’s actions can influence a group.','Only big actions matter.','Kindness cannot spread.']]]
],
3:[
['A ranch used to send boxes to market by wagon. After a railroad opened nearby, the same trip took much less time.',['What changed the travel time?','The railroad.',['The railroad.','The size of the ranch.','The weather report.']],['Why was the railroad useful?','Goods could reach market faster.',['Goods could reach market faster.','Cattle no longer needed food.','Markets disappeared.']],['What idea does the passage show?','Technology can make transportation easier.',['Technology can make transportation easier.','Old roads are always faster.','Markets do not need transport.']]],
['A class uses virtual reality to explore an old train station. They can look around, but they know the station is a computer-made environment.',['What technology are they using?','virtual reality',['virtual reality','a paper map','a radio']],['What makes the experience different from a real station?','It is computer-made.',['It is computer-made.','It has a train.','Students can look around.']],['What can this technology help students do?','Imagine a place from the past.',['Imagine a place from the past.','Travel through real time.','Build a railroad instantly.']]],
['A 3D printer builds a small model one thin layer at a time. The finished model helps engineers test an idea before making a full-size object.',['How does the printer build the model?','Layer by layer.',['Layer by layer.','All at once from paper.','By drawing with a pencil.']],['Why make a model first?','To test an idea.',['To test an idea.','To make the object heavier.','To avoid planning.']],['What is the main idea?','Technology can help people design and test things.',['Technology can help people design and test things.','Models are always toys.','Printers only make words.']]],
['Two carts carry the same load. The new cart has larger wheels, so moving the boxes is easier.',['Which cart is easier to move?','The cart with larger wheels.',['The cart with larger wheels.','The older cart.','They cannot be compared.']],['What does easier mean?','Less difficult.',['Less difficult.','More expensive.','More surprising.']],['What comparison is being made?','How difficult the carts are to move.',['How difficult the carts are to move.','The color of the boxes.','The age of the driver.']]],
['A driver promises to return before sunset. A broken bridge slows the trip, but he finds another road and keeps his promise.',['What problem slows the driver?','A broken bridge.',['A broken bridge.','A missing train.','An empty market.']],['How does he solve the problem?','He takes another road.',['He takes another road.','He stops forever.','He waits a week.']],['What does the story show about a promise?','He works to do what he said he would do.',['He works to do what he said he would do.','A promise is a surprise.','Promises only happen on trains.']]],
['A family hears that a faster train will begin service next week. They imagine visiting relatives who live far away.',['What are they imagining?','A future trip.',['A future trip.','A past accident.','A market closing.']],['When will the new service begin?','next week',['next week','yesterday','last year']],['Why are they excited?','Travel may become faster and easier.',['Travel may become faster and easier.','The train will stay still.','Their relatives are moving away.']]],
['A rancher must drive cattle across a wide field. A new gate makes the route shorter than before.',['What becomes shorter?','The cattle route.',['The cattle route.','The cattle themselves.','The week.']],['How does the gate help?','It gives a more direct path.',['It gives a more direct path.','It makes the field larger.','It turns cattle into a train.']],['What is the main idea?','A small change can make work more efficient.',['A small change can make work more efficient.','All gates are technology.','Longer routes are always easier.']]],
['A market owner uses a tablet to count supplies. Before, she wrote everything by hand. She can now update the list much faster.',['What changed in her work?','She uses a tablet.',['She uses a tablet.','She stopped selling goods.','She moved the market.']],['Why is the tablet useful?','It helps her update the list faster.',['It helps her update the list faster.','It makes the market older.','It changes the weather.']],['What does the passage show?','Technology can change everyday jobs.',['Technology can change everyday jobs.','Technology only changes trains.','Handwriting is impossible.']]],
['An older train takes three hours to reach the town. A newer train takes two hours.',['Which train is faster?','The newer train.',['The newer train.','The older train.','Both take the same time.']],['How much time does the newer train save?','one hour',['one hour','two hours','three hours']],['Which comparison is correct?','The newer train is faster than the older train.',['The newer train is faster than the older train.','The older train is fastest than the newer train.','The trains are never different.']]],
['A boy finds an old ticket in a museum. After a virtual-reality experience, the ticket is still in his hand, even though he thought it was only part of the program.',['Why is the boy surprised?','The ticket seems to have crossed from the experience into real life.',['The ticket seems to have crossed from the experience into real life.','He forgot how to read.','The museum has no technology.']],['What feeling does the ending create?','mystery',['mystery','boredom','certainty']],['What question is the reader likely to ask?','Was the experience really only virtual?',['Was the experience really only virtual?','What ingredient is in lunch?','How many cattle are on the ranch?']]]
]};
function makeReadingWheelBank(week){const out=[];(G2_READING_WHEEL[week]||[]).forEach(([passage,...qs])=>qs.forEach(x=>out.push(wq(x[0],x[1],x[2],passage))));return out.slice(0,30);}
function g2WheelBank(week,level){return level==='starter'?makePhonicsWheelBank(week):level==='challenge'?makeWordWheelBank(week):makeReadingWheelBank(week);}
function g2WheelMap(week,level,plus=false){const key=`${week}-${level}-${plus?'p':'n'}`;if(g2WheelMaps[key])return g2WheelMaps[key];const bank=g2WheelBank(week,level);const ids=plus?Array.from({length:15},(_,i)=>i+15):Array.from({length:15},(_,i)=>i);g2WheelMaps[key]=shuffle(ids);return g2WheelMaps[key];}
function currentG2WheelQuestion(segment){const bank=g2WheelBank(currentWeek,g2WheelLevel),map=g2WheelMap(currentWeek,g2WheelLevel,g2WheelPlus),idx=map[segment];return bank[idx%bank.length];}
function g2WheelGoal(level){return G2_WHEEL_LEVELS.find(x=>x.id===level).goal;}
function renderWheel(){
  const st=loadG2Wheel();if(!wheelUnlocked(g2WheelLevel,st))g2WheelLevel=preferredG2Wheel(st);g2WheelQuestion=null;
  $('#activityContent').innerHTML=activityShell(g2WheelPlus?'Wheel+':'Wheel Spin','',`<div class="g1WheelStage"><div class="g1WheelProgress" id="g1WheelProgress"></div><div class="g1WheelMain"><div class="g1WheelVisual"><div class="g1WheelPointer"></div><div class="g1ReviewWheel"><div id="g1WheelDisc" class="g1WheelDisc"></div><button id="g1WheelSpin" class="g1WheelSpin" type="button">SPIN</button></div><div class="g1WheelCounters"><span id="g1WheelPoints"></span><span id="g1WheelHearts"></span></div></div><div id="g1WheelQuestionPanel" class="g1WheelQuestionPanel"></div></div></div>`);wireBack();renderG2WheelScreen();
}
function renderG2WheelProgress(){const st=loadG2Wheel(),host=$('#g1WheelProgress');if(!host)return;host.innerHTML='';G2_WHEEL_LEVELS.forEach(l=>{const b=document.createElement('button');const unlocked=wheelUnlocked(l.id,st),complete=st.completed[l.id],plusDone=st.plus[l.id].length;b.type='button';b.disabled=!unlocked;b.className='g1WheelLevel'+(g2WheelLevel===l.id?' active':'')+(complete?' complete':'')+(!unlocked?' locked':'');b.innerHTML=`<strong>${l.short}</strong><small>${g2WheelPlus?`${plusDone}/15 green`:complete?'✓ Complete':`${st[l.id].points}/${l.goal} pts`}</small>`;b.onclick=()=>{g2WheelLevel=l.id;g2WheelQuestion=null;renderG2WheelScreen();};host.appendChild(b);});const master=document.createElement('button');master.type='button';master.className='g1WheelMaster'+(st.wheelMaster?' complete':'')+(g2WheelPlus?' active':'');master.disabled=!st.wheelMaster;master.innerHTML=st.wheelMaster?(g2WheelPlus?'← Normal':'🏆 Wheel+'):`🏆 ${Object.values(st.completed).filter(Boolean).length}/3`;master.onclick=()=>{g2WheelPlus=!g2WheelPlus;g2WheelLevel='starter';g2WheelQuestion=null;st.hearts=4;st.gameOver=false;saveG2Wheel(st);renderWheel();};host.appendChild(master);const reset=document.createElement('button');reset.className='g1WheelReset';reset.type='button';reset.textContent='Reset';reset.onclick=resetWheel;host.appendChild(reset);}
function paintG2Wheel(){const d=$('#g1WheelDisc');if(!d)return;d.innerHTML='';const st=loadG2Wheel(),green=new Set(g2WheelPlus?st.plus[g2WheelLevel]:[]),parts=[],line=1.25,angle=360/15;for(let i=0;i<15;i++){const start=i*angle,end=(i+1)*angle,type=g2WheelPattern(i);const c=green.has(i)?'#43b94f':type==='gold'?'#d4af37':type==='red'?'#E20808':'#fffdf7';parts.push(`#171717 ${start}deg ${start+line}deg`,`${c} ${start+line}deg ${end}deg`);}d.style.background=`conic-gradient(${parts.join(',')})`;for(let i=0;i<15;i++){const mid=(i+.5)*angle-90,rad=mid*Math.PI/180,t=document.createElement('div');t.className='g1WheelToken '+(g2WheelPattern(i)==='gold'?'gold':g2WheelPattern(i)==='red'?'light':'red');t.style.left=`${50+Math.cos(rad)*41}%`;t.style.top=`${50+Math.sin(rad)*41}%`;t.textContent=String(i+1);d.appendChild(t);if(g2WheelPattern(i)==='gold'){const h=document.createElement('div');h.className='g1WheelHeart';h.style.left=`${50+Math.cos(rad)*31}%`;h.style.top=`${50+Math.sin(rad)*31}%`;h.textContent='♥';d.appendChild(h);}}updateG2WheelTokens(false);}
function updateG2WheelTokens(anim=true){const d=$('#g1WheelDisc');if(!d)return;$$('.g1WheelToken,.g1WheelHeart',d).forEach(el=>{el.style.transition=anim?'transform 3.2s cubic-bezier(.12,.74,.11,1)':'none';el.style.transform=`translate(-50%,-50%) rotate(${-g2WheelRotation}deg)`;});}
function updateG2WheelCounters(){const st=loadG2Wheel(),goal=g2WheelGoal(g2WheelLevel);$('#g1WheelPoints').innerHTML=g2WheelPlus?`🟢 Green <b>${st.plus[g2WheelLevel].length}/15</b>`:`⭐ Points <b>${st[g2WheelLevel].points}/${goal}</b>`;$('#g1WheelHearts').innerHTML=`❤️ Hearts <b>${'❤️'.repeat(st.hearts)}${'♡'.repeat(4-st.hearts)}</b>`;}
function renderG2WheelIdle(){const host=$('#g1WheelQuestionPanel'),st=loadG2Wheel(),name=G2_WHEEL_LEVELS.find(x=>x.id===g2WheelLevel).short;if(st.gameOver){host.innerHTML=`<div class="g1WheelCelebrate"><img src="assets/crying_red_dragon_mascot.png" alt="Chichi"><h2>Out of hearts!</h2><p>Your progress is safe.</p><button id="g1WheelTryAgain" type="button">Try Again</button></div>`;$('#g1WheelTryAgain').onclick=()=>{st.hearts=4;st.gameOver=false;saveG2Wheel(st);renderG2WheelScreen();};return;}if(g2WheelPlus){const done=st.plus[g2WheelLevel].length;host.innerHTML=`<div class="g1WheelIdle"><img src="assets/chichi_present.png" alt="Chichi"><div class="g1WheelEyebrow">WHEEL+ MASTER CHALLENGE</div><h2>${name} Wheel</h2><p>Correct answers turn numbered segments green.</p><div class="g1WheelGoal">${done}/15 green</div></div>`;}else{host.innerHTML=`<div class="g1WheelIdle"><img src="assets/chichi_present.png" alt="Chichi"><h2>${name} Wheel</h2><p><b>Normal</b> = 10 pts · <b>Gold</b> = 20 pts + ❤️</p><p>${st.wheelMaster?'All three wheels are complete — Wheel+ is unlocked!':'Finish this wheel to unlock the next one.'}</p></div>`;}}

// v0.45 wheel sound effects
let g2WheelAudioCtx=null,g2WheelSpinSfxTimer=null,g2WheelSpinSfxStopTimer=null;
function getG2WheelAudioCtx(){
  try{
    if(!g2WheelAudioCtx){
      const Ctx=window.AudioContext||window.webkitAudioContext;
      g2WheelAudioCtx=Ctx?new Ctx():null;
    }
    if(g2WheelAudioCtx&&g2WheelAudioCtx.state==='suspended')g2WheelAudioCtx.resume();
    return g2WheelAudioCtx;
  }catch(e){return null;}
}
function g2WheelSfxNote(freq,startDelay=0,duration=.12,volume=.08,type='sine'){
  try{
    const ctx=getG2WheelAudioCtx();if(!ctx)return;
    const t=ctx.currentTime+0.01+startDelay;
    const osc=ctx.createOscillator(),gain=ctx.createGain();
    osc.type=type;osc.frequency.setValueAtTime(freq,t);
    gain.gain.setValueAtTime(0.0001,t);
    gain.gain.exponentialRampToValueAtTime(volume,t+0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001,t+duration);
    osc.connect(gain).connect(ctx.destination);
    osc.start(t);osc.stop(t+duration+.03);
  }catch(e){}
}
function playG2WheelTick(){g2WheelSfxNote(980,0,.045,.025,'square')}
function startG2WheelSpinSfx(){
  stopG2WheelSpinSfx();playG2WheelTick();
  g2WheelSpinSfxTimer=setInterval(playG2WheelTick,105);
  g2WheelSpinSfxStopTimer=setTimeout(stopG2WheelSpinSfx,3300);
}
function stopG2WheelSpinSfx(){
  if(g2WheelSpinSfxTimer){clearInterval(g2WheelSpinSfxTimer);g2WheelSpinSfxTimer=null;}
  if(g2WheelSpinSfxStopTimer){clearTimeout(g2WheelSpinSfxStopTimer);g2WheelSpinSfxStopTimer=null;}
}
function playG2WheelCorrect(){g2WheelSfxNote(1046.5,0,.16,.10);g2WheelSfxNote(1318.5,.09,.22,.075)}
function playG2WheelWrong(){g2WheelSfxNote(392,0,.17,.055);g2WheelSfxNote(329.63,.11,.20,.05)}
function playG2WheelGold(){g2WheelSfxNote(1174.7,0,.12,.07);g2WheelSfxNote(1568,.07,.16,.065);g2WheelSfxNote(2093,.15,.25,.055)}

function renderG2WheelScreen(){const st=loadG2Wheel();renderG2WheelProgress();paintG2Wheel();updateG2WheelCounters();const spin=$('#g1WheelSpin');const plusDone=g2WheelPlus&&st.plus[g2WheelLevel].length===15;spin.disabled=g2WheelBusy||st.gameOver||plusDone||(!g2WheelPlus&&!st.wheelMaster&&st.completed[g2WheelLevel]);spin.onclick=spinWheel;if(plusDone){renderG2WheelMilestone();}else if(!g2WheelQuestion)renderG2WheelIdle();}
function spinWheel(){const st=loadG2Wheel();if(g2WheelBusy||st.gameOver)return;let choices=Array.from({length:15},(_,i)=>i);if(g2WheelPlus)choices=choices.filter(i=>!st.plus[g2WheelLevel].includes(i));if(!choices.length){renderG2WheelMilestone();return;}const idx=choices[Math.floor(Math.random()*choices.length)],step=360/15,target=360-(idx+.5)*step;g2WheelRotation+=720+target-(g2WheelRotation%360);g2WheelBusy=true;startG2WheelSpinSfx();const d=$('#g1WheelDisc');d.style.transform=`rotate(${g2WheelRotation}deg)`;updateG2WheelTokens(true);$('#g1WheelSpin').disabled=true;setTimeout(()=>{stopG2WheelSpinSfx();g2WheelQuestion={...currentG2WheelQuestion(idx),segment:idx,gold:G2_WHEEL_GOLD.includes(idx)};showG2WheelQuestion();if(g2WheelQuestion.gold)playG2WheelGold();g2WheelBusy=false;$('#g1WheelSpin').disabled=false;},3250);}
function showG2WheelQuestion(){const q=g2WheelQuestion,host=$('#g1WheelQuestionPanel');host.innerHTML=`<div class="g1WheelQuestionMeta">${g2WheelPlus?`WHEEL+ · SEGMENT ${q.segment+1}`:q.gold?'⭐ CHALLENGE · 20 POINTS + ♥':`${G2_WHEEL_LEVELS.find(x=>x.id===g2WheelLevel).short.toUpperCase()} · 10 POINTS`}</div>${q.passage?`<div class="g1WheelPassage">${q.passage}</div>`:''}<div class="g1WheelQuestionText">${q.q}</div><div class="g1WheelAnswers">${shuffle(q.choices).map(x=>`<button class="g1WheelAnswer" data-answer="${escapeAttr(x)}" type="button">${x}</button>`).join('')}</div><div id="g1WheelFeedback" class="g1WheelFeedback"></div>`;$$('.g1WheelAnswer',host).forEach(b=>b.onclick=()=>answerG2Wheel(b));}
function answerG2Wheel(btn){if(!g2WheelQuestion)return;const st=loadG2Wheel(),q=g2WheelQuestion,ok=btn.dataset.answer===q.answer;$$('.g1WheelAnswer').forEach(b=>{b.disabled=true;if(b.dataset.answer===q.answer)b.classList.add('good');});if(!ok)btn.classList.add('bad');const f=$('#g1WheelFeedback');if(ok){f.textContent='Correct!';playG2WheelCorrect();if(g2WheelPlus){if(!st.plus[g2WheelLevel].includes(q.segment))st.plus[g2WheelLevel].push(q.segment);}else{const add=q.gold?20:10;st[g2WheelLevel].points=Math.min(g2WheelGoal(g2WheelLevel),st[g2WheelLevel].points+add);if(q.gold)st.hearts=Math.min(4,st.hearts+1);if(st[g2WheelLevel].points>=g2WheelGoal(g2WheelLevel))st.completed[g2WheelLevel]=true;st.wheelMaster=st.completed.starter&&st.completed.challenge&&st.completed.master;if(st.wheelMaster)markDone(currentWeek,'wheel');}saveG2Wheel(st);setTimeout(()=>{g2WheelQuestion=null;if(!g2WheelPlus&&st.wheelMaster){renderG2WheelProgress();paintG2Wheel();updateG2WheelCounters();renderG2WheelMilestone();return;}if(!g2WheelPlus&&st.completed[g2WheelLevel]){const next=G2_WHEEL_LEVELS.find(l=>!st.completed[l.id]);if(next)g2WheelLevel=next.id;}renderG2WheelScreen();},650);}else{playG2WheelWrong();st.hearts=Math.max(0,st.hearts-1);st.gameOver=st.hearts===0;saveG2Wheel(st);f.textContent=`Not this time — the answer is ${q.answer}.`;setTimeout(()=>{g2WheelQuestion=null;renderG2WheelScreen();},850);}}
function renderG2WheelMilestone(){const st=loadG2Wheel(),host=$('#g1WheelQuestionPanel');if(g2WheelPlus){const all=G2_WHEEL_LEVELS.every(l=>st.plus[l.id].length===15);host.innerHTML=`<div class="g1WheelCelebrate"><img src="assets/chichi_celebrate_wheel.png" alt="Chichi celebrating"><h2>${all?'Wheel+ Master!':`${G2_WHEEL_LEVELS.find(x=>x.id===g2WheelLevel).short} Master!`}</h2><p>${all?'Every segment on all three wheels is green!':'All 15 segments are green!'}</p>${all?'<button id="g1WheelBackWeek" type="button">Back to Week</button>':''}</div>`;if(all)$('#g1WheelBackWeek').onclick=()=>route(`#hub/${currentWeek}`);return;}host.innerHTML=`<div class="g1WheelCelebrate"><img src="assets/chichi_celebrate_wheel.png" alt="Chichi celebrating"><h2>Wheel Master!</h2><p>Phonics, Words, and Reading are complete. Wheel+ is unlocked!</p><button id="g1WheelStartPlus" type="button">Start Wheel+</button></div>`;$('#g1WheelStartPlus').onclick=()=>{g2WheelPlus=true;g2WheelLevel='starter';st.hearts=4;st.gameOver=false;saveG2Wheel(st);renderWheel();};}
function resetWheel(){if(!confirm(`Reset ${WEEKS[currentWeek].title} wheel progress?`))return;localStorage.removeItem(wheelStorageKey(currentWeek));localStorage.removeItem(completeKey(currentWeek,'wheel'));g2WheelPlus=false;g2WheelLevel='starter';g2WheelQuestion=null;g2WheelRotation=0;renderWheel();}

function finishMarkup(title,score,total,key){
  const pct=Math.round(score/total*100);return `<div class="finishBox"><div class="big">${title}</div><div class="scoreBig">${score} / ${total}</div><p>${pct>=90?'Excellent work.':pct>=70?'Good work — review anything you missed.':'Have another go after a quick review.'}</p><div class="centerActions"><button id="finishAgain" class="secondaryBtn" type="button">Again</button><button id="finishWeek" class="primaryBtn" type="button">Back to ${WEEKS[currentWeek].title}</button></div></div>`;
}
function wireFinishButtons(){
  const a=$('#finishAgain'),w=$('#finishWeek');if(a)a.onclick=()=>renderActivity(currentActivity);if(w)w.onclick=()=>route(`#hub/${currentWeek}`);
}
function escapeAttr(s){return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}

function validateData(){
  const errors=[];
  for(const [wk,w] of Object.entries(WEEKS)){
    const pools=[['phonics',w.phonics],['sight',w.sightTasks],['grammar',w.grammar],['reading',w.passage.questions]];
    pools.forEach(([name,qs])=>qs.forEach((q,i)=>{
      if(!q.choices.includes(q.answer))errors.push(`W${wk} ${name} ${i+1}: answer missing`);
      if(new Set(q.choices).size!==q.choices.length)errors.push(`W${wk} ${name} ${i+1}: duplicate choices`);
      if(q.choices.length<3)errors.push(`W${wk} ${name} ${i+1}: too few choices`);
    }));
    if(w.hfw.length!==5)errors.push(`W${wk}: HFW count ${w.hfw.length}`);
    if(w.vocab.length<8)errors.push(`W${wk}: vocab count ${w.vocab.length}`);
  }
  if(errors.length)console.error('DATA QC',errors); else console.info('DATA QC passed');
}

// Home interactions
$('#globalHome').onclick=()=>route('#home');
$('#homeChichi').onclick=()=>route('#weeks');
$('#homeRobin').onclick=()=>{try{new Audio('assets/robin_chirp.wav').play()}catch(e){}};
$('#homeBell').onclick=()=>{try{new Audio('assets/church_bell.wav').play()}catch(e){}};
window.addEventListener('hashchange',applyRoute);
validateData();
if(!location.hash)route('#home',true);else applyRoute();
