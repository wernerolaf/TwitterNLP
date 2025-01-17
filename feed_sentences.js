const target = new EventTarget();
const observer = new MutationObserver(() => target.dispatchEvent(new Event('ghetto-changed')));

function feed(text) {
    const english = document.querySelector('.english');
    const englishText = document.getElementById('english-text');
    return new Promise(resolve => {
        const listener = () => {
            const v = document.getElementById('ghetto-text').value;
            if(!v) return;
            target.removeEventListener('ghetto-text', listener);
            resolve(v);
        };
        target.addEventListener('ghetto-changed', listener);
        englishText.value = text.split('\t')[3];
        english.dispatchEvent(new Event('input', {bubbles: true, cancelable: true}));
    });
}

async function main(data) {
    observer.observe(document.getElementById('ghetto-text'), {attributes: true});
    let p = Promise.resolve([]);
    data.forEach(element => {
        p = p.then(async arr => {
            console.log(arr.length, data.length);
            arr.push(await feed(element));
            return arr;
        });
    });
    const ret = await p;
    observer.disconnect();
    return ret;
}

var data = `clc95	1		somebody just left - guess who .
clc95	1		they claimed they had settled on something , but it was n't clear what they had settled on .
clc95	1		if sam was going , sally would know where .
clc95	1		they 're going to serve the guests something , but it 's unclear what .
clc95	1		she 's reading . i ca n't imagine what .
clc95	1		john said joan saw someone from her graduating class .
clc95	0	*	john ate dinner but i do n't know who .
clc95	0	*	she mailed john a letter , but i do n't know to whom .
clc95	1		i served leek soup to my guests .
clc95	1		i served my guests .
clc95	0	*	she was bathing , but i could n't make out who .
clc95	0	*	she knew french for tom .
clc95	0	*	john is tall on several occasions .
clc95	0	*	the ship sank , but i do n't know with what .
clc95	0	*	they noticed the painting , but i do n't know for how long .
clc95	0	*	john was tall , but i do n't know on what occasions .
clc95	1		joan ate dinner with someone but i do n't know who .
clc95	1		joan ate dinner with someone but i do n't know who with .
clc95	0	*	i know that meg 's attracted to harry , but they do n't know who .
clc95	0	*	since jill said joe had invited sue , we did n't have to ask who .
clc95	1		i know that meg 's attracted to harry , but they do n't know who .
clc95	0	*	she said she had spoken to everybody , but he was n't sure who .
clc95	0	*	each of the performers came in , but were sitting so far back that we could n't see who .
clc95	1		she did n't talk to one student .
clc95	0	*	she does n't meet anyone for dinner , but they ca n't figure out who .
clc95	1		everyone relies on someone . it 's unclear who .
clc95	1		each student wrote a paper on a mayan language , but i do n't remember which one .
clc95	1		the newspaper has reported that they are about to appoint someone , but i ca n't remember who the newspaper has reported that they are about to appoint .
clc95	1		the newspaper has reported that they are about to appoint someone , but i ca n't remember who they are about to appoint .
clc95	1		most columnists claim that a senior white house official has been briefing them , and the newspaper today reveals which one .
clc95	1		most columnists claim that a senior white house official has been briefing them , but none will reveal which one .
clc95	1		bill wondered how many papers sandy had read , but he did n't care which ones .
clc95	1		i never know which papers sandy has read , but i usually know how many .
clc95	1		sandy had read how many papers ? !
clc95	1		everybody gets on well with a certain relative , but often only his therapist knows which one .
clc95	1		which book did each author recommend ?
clc95	1		his or her least known work .
clc95	1		they were going to meet sometime on sunday , but the faculty did n't know when .
clc95	1		john likes some students , but i do n't know who .
clc95	1		i do n't know who john likes .
clc95	0	*	john likes some students , but i do n't know who john likes some students .
clc95	0	*	joan said she talked to the students , but fred could n't figure out who .
clc95	0	*	he announced he had eaten the asparagus , but we did n't know what .
clc95	1		she was reading the books under the table , but fred did n't know what books .
clc95	1		he announced he would marry the woman he loved most , but none of his relatives could figure out who .
clc95	1		she talked to john or mary but i do n't know which .
clc95	1		she talked to john or mary but i do n't know which one .
clc95	1		she talked to harry , but i do n't know who else .
clc95	1		i will see them , but i do n't know how many of them .
clc95	1		everyone who knows either susan or laura likes her .
clc95	0	*	she said she talked to three students but i do n't know how many .
clc95	0	*	she said she talked to those students but i do n't know how many .
clc95	1		he shouted again , but i do n't know who to .
clc95	1		she was dancing with somebody , but i do n't know who with .
clc95	1		several firefighters were injured , but it 's not known .
clc95	1		meg is attracted to harry , but they do n't know who she is attracted to .
clc95	1		sandy was trying to work out which students would be able to solve a certain problem , but she would n't tell us which one .
clc95	0	*	sandy was trying to work out which students would be able to solve a certain problem , but she would n't tell us which one .
clc95	0	*	john and someone were dancing together , but i do n't know who .
clc95	1		the ta 's have been arguing about whether some student or other should pass , but i ca n't now remember which one .
clc95	0	*	it has been determined that somebody will be appointed ; it 's just not clear yet who .
clc95	0	*	sally asked if somebody was going to fail math class , but i ca n't remember who .
clc95	0	*	the ta 's have been arguing about whether some student or other should pass , but i ca n't now remember which one .
clc95	1		sandy is very anxious to see if the students will be able to solve the homework problem in a particular way , but she wo n't tell us which .
clc95	1		sandy is very anxious to see if the students will be able to solve the homework problem in a particular way , but she wo n't tell us in which way .
clc95	1		clinton is anxious to find out which budget dilemmas panetta would be willing to tackle in a certain way , but he wo n't say in which .
clc95	1		sandy is wondering whether there will be students who have to drop the class for a certain reason , but she wo n't reveal what .
clc95	0	*	in which way is sandy very anxious to see if the students will be able to solve the homework problem ?
clc95	0	*	in which way is clinton anxious to find out which budget dilemmas panetta would be willing to solve ?
clc95	1		i know how many assignments i 've graded , but i do n't know how many bill has .
clc95	0	*	what did you leave before they did ?
clc95	0	*	what did you leave before they started playing ?
clc95	1		sandy was trying to work out which students would be able to solve a certain problem .
clc95	1		the administration has issued a statement that it is willing to meet with one of the student groups .
clc95	1		sandy was trying to work out which students would be able to solve a problem .
clc95	1		the administration has issued a statement that it is willing to meet a student group .
clc95	1		the administration has issued a statement that it is willing to meet a student group , but i 'm not sure which one .
clc95	1		i think agnes said that bill would speak , but i do n't remember what about .
clc95	0	*	agnes wondered how john could eat but it 's not clear what .
clc95	0	*	tony sent mo a picture that he painted , but it 's not clear with what .
clc95	1		she 's been dancing but we do n't know with whom .
clc95	0	*	who did they see someone ?
c-05	1		it was believed by everybody that mary was a thief .
c-05	1		that professor is feared by all students .
c-05	1		mary was respected by john .
c-05	1		ted was bitten by the spider .
c-05	0	*	the book was by john written .
c-05	0	*	the argument was summed by the coach up .
c-05	1		the paper was written up by john .
c-05	0	*	the paper was written by john up .
c-05	1		john was spoken to by mary .
c-05	0	*	john was spoken by mary to .
c-05	1		the book was seen by mary .
c-05	0	*	john was seen the book .
c-05	1		the book was written .
c-05	0	*	john was spoke by mary to .
c-05	1		the table was wiped clean by john .
c-05	0	*	the table was wiped by john clean .
c-05	0	*	mary was given by john the book .
c-05	1		john was believed to be telling the truth by mary .
c-05	1		john was believed by mary to be telling the truth .
c-05	1		the car was driven by john to maine .
c-05	1		it was believed by the students that they would have an exam .
c-05	0	*	the magazines were sent to herself by mary .
c-05	0	*	chocolate eggs were hidden from each other by the children .
c-05	1		the magazines were sent by mary to herself .
c-05	1		chocolate eggs were hidden from no child by any adult .
c-05	1		tabs were kept on each agent by the other .
c-05	1		chocolate eggs were hidden from every child by his mother .
c-05	1		books were taken from no student and given to mary .
c-05	0	*	books were taken from no student and given to mary by any professor .
c-05	1		books were taken from each student by the other .
c-05	1		books were taken from each student and given to mary .
c-05	0	*	books were taken from each student and given to mary by the other .
j_71	1		jack hates sue and is loved by mary .
j_71	1		vera sent a baby alligator to max and a leather dinosaur to phyllis .
j_71	1		either sam plays the bassoon or jekyll the oboe .
j_71	1		sam does n't play bassoon , nor medusa oboe .
j_71	0	*	bill ate the peaches , but harry the grapes .
j_71	1		i no more could have stolen that steak than jack the diamonds .
j_71	1		bill ate more peaches than harry did grapes .
j_71	0	*	bill ate the peaches and harry did the grapes .
j_71	0	*	tom will smoke the grass , and reuben has the hash .
j_71	1		if the ants were called elephants and elephants ants , i 'd be able to squash an elephant .
j_71	1		simon quickly dropped the gold , and jack the diamonds .
j_71	1		bob tried to wash himself , and mary to read the funnies .
j_71	1		harry told sue that albania is a lovely place for a vacation , and tom told sally that albania is a lovely place for a vacation .
j_71	1		harry told sue that albania is a lovely place for a vacation , and tom .
j_71	1		max seemed to be trying to begin to love harriet , and fred to be trying to begin to love sue .
j_71	1		max seemed to be trying to force ted to leave the room , and walt , ira .
j_71	0	*	max seemed to be trying to force ted to leave the room , and walt to stay a little longer .
j_71	0	*	arizona elected goldwater senator , and massachusetts , mccormack .
j_71	0	*	millie will send the president an obscene telegram , and paul , the secretary a rude letter .
j_71	0	*	maytag will give a brand-new dryer to the winner of the mrs .
j_71	0	*	bill did n't eat the peaches , nor harry .
j_71	1		bill ate the peaches , and harry did , too .
j_71	0	*	bill must quickly eat the peaches , and harry must slowly .
j_71	1		whenever russia has made a major political blunder , the u.s. has too .
j_71	1		bill 's story about sue and max 's about kathy both amazed me .
j_71	1		i bought three quarts of wine and two of clorox .
j_71	1		scientists at the south hanoi institute of technology have succeeded in raising one dog with five legs , another with a cow 's liver , and a third with no head .
j_71	1		bill 's story about sue may be amazing , but max 's is virtually incredible .
j_71	1		i like bill 's yellow shirt , but not max 's .
j_71	1		bill 's funny story about sue and max 's boring one about kathy both amazed me .
j_71	1		bill 's wine from france and ted 's from california can not be compared .
j_71	0	*	as a teacher , you have to deal simultaneously with the administration 's pressure on you to succeed , and the children 's to be a nice guy .
j_71	1		neither von karajan 's recording of beethoven 's 6th on columbia nor klemperer 's on angel has the right tempo .
j_71	0	*	gould 's performance of bach on the piano does n't please me anywhere as much as ross 's on the harpsichord .
j_71	0	*	tom 's dog with one eye attacked frank 's with three legs .
j_71	0	*	because steve 's of a spider 's eye had been stolen , i borrowed fred 's diagram of a snake 's fang .
j_71	1		neither von karajan 's recording of beethoven 's 6th on columbia nor klemperer 's has the right tempo .
j_71	1		tom 's dog with one eye attacked fred 's .
j_71	1		i borrowed fred 's diagram of a snake 's eye because steve 's had been stolen .
j_71	1		jerry attempted to blow up the pentagon .
j_71	1		so fast did he run that nobody could catch him .
j_71	1		bill bought a red house , and max bought one too .
s_97	1	 	who always drinks milk ?
s_97	1		the book which inspired them was very long .
s_97	0	*	the book what inspired them was very long .
s_97	1		i know the person whose mother died .
s_97	1		the person whose mother 's dog we were all fond of .
s_97	1		i wonder whose mother died .
s_97	1		i wonder whose mother 's dog died .
s_97	1		i wonder to whom they dedicated the building .
s_97	1		give me the phone number of the person whose mother 's dog died .
s_97	1		this is the senator to whose mother 's friend 's sister 's i sent the letter .
s_97	0	*	i want goes to the store .
s_97	0	*	i wonder what to be a clown on the cover of .
s_97	0	*	bother you that kim left !
s_97	0	*	a student who to talk to us just walked in .
s_97	1		whose bagels do you like ?
s_97	1		i wonder in whom to place my trust .
s_97	1		there were several old rocks songs that she and i were the only two who knew .
s_97	0	*	it was to to amuse us that kim was singing that they wanted .
s_97	0	*	what they feared most was to be no one available to help them .
s_97	0	*	we tried to amuse them that kim was singing .
s_97	1		mary asked me if , in st. louis , john could rent a house cheap .
s_97	0	*	mary arranged for , in st. louis , john to rent a house cheap .
s_97	1		it would be unwise for there to be no fire exit .
s_97	1		i believe there to be no way out .
s_97	0	*	i wonder in whom them to place their trust .
s_97	0	*	i wonder whom us to trust .
s_97	0	*	i wonder who for us to trust .
s_97	1		i wonder who to place my trust in .
s_97	1		i know the people that voted in the election .
s_97	1		i threw away a book that sandy thought we had read .
s_97	1		i thought that you were sick .
s_97	0	*	i dislike the people in who we placed our trust .
s_97	1		i dislike the company in which we placed our trust .
s_97	1		i dislike the people in whose house we stayed .
s_97	1		i dislike the person with whom we were talking .
s_97	0	*	jones , that we were talking to last night , always watches football games alone .
s_97	1		a letter was received that jones would be upset by .
s_97	0	*	a letter was received jones would be upset by .
s_97	1		i saw someone yesterday i had n't seen for years .
s_97	1		something happened i could n't really talk about .
s_97	1		the only person that i like whose kids dana is willing to put up with is pat .
s_97	1		the book that i like which everyone else in the class hates was written by john .
s_97	0	*	the only person whose kids dana is willing to put up with was written by john .
s_97	0	*	the book that i like - everyone else in the class hates .
s_97	1		the only person whose kids dana is willing to put up with is pat .
s_97	1		which book 's author did you meet ?
s_97	0	*	which boy 's mother did you meet who you liked ?
s_97	0	*	which book 's author did you meet who you liked ?
s_97	1		which boy 's mother did you meet ?
s_97	1		all who lost money in the scam are eligible for the program .
s_97	0	*	who for sandy to talk to is still enrolled in the class ?
s_97	1		who who you like does sandy also like ?
s_97	1		everything you like is on the table .
s_97	1		the bills passed by the house yesterday that we objected to were vetoed .
s_97	1		the only people being added to our group who were at harvard were students .
swb04	1		we like ourselves .
swb04	1		nobody likes us .
swb04	0	*	leslie likes ourselves .
swb04	0	*	ourselves like ourselves .
swb04	1		she voted for herself .
swb04	0	*	we gave us presents .
swb04	1		we gave ourselves presents .
swb04	1		we gave presents to ourselves .
swb04	0	*	we gave us to the cause .
swb04	1		we gave ourselves to the cause .
swb04	0	*	leslie told us about us .
swb04	0	*	leslie told ourselves about us .
swb04	1		we think that leslie likes us .
swb04	0	*	we think that leslie likes ourselves .
swb04	1		our friends like us .
swb04	1		those pictures of us offended us .
swb04	0	*	we found your letter to ourselves in the trash .
swb04	0	*	vote for you !
swb04	1		vote for yourself !
swb04	0	*	we appeared to them to vote for themselves .
swb04	1		we admired the pictures of us in the album .
swb04	1		we admired the pictures of ourselves in the album .
swb04	1		leslie used a pen .
swb04	1		we put the pigs in a pen .
swb04	1		we need to pen the pigs to keep them from getting into the corn .
swb04	1		they should pen the letter quickly .
swb04	1		the car wo n't run .
swb04	1		this dye will run .
swb04	1		she can run an accelerator .
swb04	1		these stockings will run .
swb04	1		we need another run to win .
swb04	1		lee saw the student with a telescope .
swb04	1		i forgot how good beer tastes .
swb04	1		visiting relatives can be boring .
swb04	1		if only superman would stop flying planes !
swb04	1		that 's a new car dealership .
swb04	1		i know you like the back of my hand .
swb04	1		max is on the phone now .
swb04	1		i saw her duck .
swb04	1		i 'm creating a committee . kim – you 're in charge .
swb04	1		lights go out at ten . there will be no talking afterwards .
swb04	1		they found the book on the atom .
swb04	1		which experts testified against defendants who exposed them ?
swb04	1		list all experts for the defendant who represented himself .
swb04	1		list associates of each defendant who speaks spanish .
swb04	0	*	they lost themselves ' books .
swb04	1		some sentences go on and on and on .
swb04	0	*	sentences some go on and on and on and on .
swb04	1		that surprised me .
swb04	0	*	i noticed the .
swb04	1		they were interested in his .
swb04	1		this is my favorite .
swb04	1		a large dog chased a small cat .
swb04	1		some people yell at noisy dogs in my neighborhood .
swb04	1		some people yell at the dogs in my neighborhood .
swb04	1		some people yell at the dogs .
swb04	1		some people yell at noisy dogs .
swb04	1		some people yell at dogs .
swb04	1		some people consider the noisy dogs dangerous .
swb04	1		some people consider the dogs in my neighborhood dangerous .
swb04	1		some people consider noisy dogs in my neighborhood dangerous .
swb04	1		some people consider the dogs dangerous .
swb04	1		some people consider noisy dogs dangerous .
swb04	1		some people consider dogs in my neighborhood dangerous .
swb04	1		some people consider dogs dangerous .
swb04	1		people with children who use drugs should be locked up .
swb04	1		this disease gave leslie a fever in rome .
swb04	1		the love of my life and mother of my children would never do such a thing .
swb04	1		most elections are quickly forgotten , but the election of 2000 , everyone will remember for a long time .
swb04	0	*	it is painting by klee or drawing by miro that the museum displays no .
swb04	1		the defendant denied the accusation .
swb04	0	*	the teacher disappeared the problem .
swb04	0	*	the teacher handed the student .
swb04	1		the bird sings .
swb04	0	*	the bird sing .
swb04	0	*	birds sings .
swb04	1		the birds give the worm a tug .
swb04	0	*	the bird give the worm a tug .
swb04	0	*	the birds gives the worm a tug .
swb04	1		terry delighted in my pain .
swb04	0	*	terry delighted .
swb04	0	*	terry delighted my pain .
swb04	1		kerry remarked it was late .
swb04	1		what additional categories and rules would be required to handle these verbs ?
swb04	1		we created a monster .
swb04	0	*	i was already aware of fact .
swb04	0	*	the defendant deny the allegation .
swb04	0	*	the defendants denies the allegation .
swb04	1		the defendant walks .
swb04	0	*	the defendant walk .
swb04	0	*	the defendants walks .
swb04	1		how many feature structures categories can label the first daughter ?
swb04	1		the child put the toy on the table .
swb04	1		the teacher became angry with the students .
swb04	0	*	the teacher became .
swb04	1		the jury believed the defendant lied .
swb04	1		the guests dined .
swb04	1		we relied on leslie .
swb04	0	*	we relied above leslie .
swb04	1		we celebrated in the streets .
swb04	1		we celebrated in the streets in the rain on tuesday in the morning .
swb04	0	*	the children are happy of ice cream .
swb04	0	*	the children are fond with the ice cream .
swb04	0	*	the children are fond that they have ice cream .
swb04	1		a magazine appeared on the newsstands .
swb04	1		a magazine about crime appeared on the newsstands .
swb04	1		newsweek appeared on the newsstands .
swb04	0	*	newsweek about crime appeared on the newsstands .
swb04	1		the report that crime was declining surprised many people .
swb04	1		the book surprised many people .
swb04	0	*	the book that crime was declining surprised many people .
swb04	1		the storm arrived after the picnic .
swb04	0	*	the storm arrived while the picnic .
swb04	1		the storm arrived while we ate lunch .
swb04	0	*	this dogs barked .
swb04	1		these dogs barked .
swb04	1		a chair was broken .
swb04	1		they want them arrested .
swb04	1		they preferred them arrested .
swb04	1		we preferred them on our team .
swb04	1		with my parents as supportive as they are , i 'll be in fine shape .
swb04	0	*	we walks .
swb04	0	*	few dog barked .
swb04	1		the dogs barked .
swb04	1		i walk and dana runs .
swb04	1		they like us .
swb04	0	*	us like them .
swb04	1		kim likes dogs .
swb04	1		dogs like kim .
swb04	1		the person responsible confessed .
swb04	0	*	the person confessed responsible .
swb04	0	*	the cat slept soundly and furry .
swb04	0	*	the soundly and furry cat slept .
swb04	1		chris walks , pat eats broccoli , and sandy plays squash .
swb04	1		there was some particular dog who saved every family .
swb04	1		susan frightens her .
swb04	1		susan told her a story .
swb04	1		susan told a story to her .
swb04	1		susan devoted herself to linguistics .
swb04	1		nobody told susan about herself .
swb04	1		that picture of susan offended her .
swb04	1		he offended sandy .
swb04	0	*	i enjoy yourself .
swb04	1		they talk to themselves .
swb04	1		nobody told susan .
swb04	1		protect yourself !
swb04	0	*	protect you !
swb04	1		i met the person who left .
swb04	1		leslie slept .
swb04	0	*	chris handed bo .
swb04	1		dana walked and leslie ran .
swb04	0	*	dana walking and leslie ran .
swb04	0	*	dana walking and leslie running .
swb04	0	*	the putter of books left .
swb04	1		kris donated a book to the library .
swb04	1		the police sprayed the protesters with water .
swb04	1		the police sprayed water on the protesters .
swb04	1		the students drove cars .
swb04	1		these cars drive easily .
swb04	1		the horse kicked me black and blue .
swb04	1		they yelled .
swb04	1		the horse raced past the barn fell .
swb04	1		the horse that was raced past the barn fell .
swb04	1		the boat seen down the river sank .
swb04	1		the evidence assembled by the prosecution convinced the jury .
swb04	1		lou forgot the umbrella .
swb04	1		lou forgot the umbrella in the closet .
swb04	1		lou hoped the umbrella was broken .
swb04	0	*	lou hoped the umbrella in the closet .
swb04	0	*	lou put the umbrella was broken .
swb04	1		lou put the umbrella in the closet .
swb04	1		the artist drew the child with a pencil .
swb04	1		the dog bit the cat .
swb04	0	*	the cat was bitten the mouse .
swb04	0	*	the cat was bitten the mouse by the dog .
swb04	0	*	chris was handed sandy a note by pat .
swb04	1		chris was handed a note .
swb04	0	*	chris was handed sandy a note .
swb04	1		tv puts dumb ideas in children 's heads .
swb04	1		dumb ideas are put in children 's heads by tv .
swb04	1		dumb ideas are put in children 's heads .
swb04	0	*	dumb ideas are put notions in children 's heads by tv .
swb04	1		the patient died .
swb04	0	*	the patient was died .
swb04	0	*	chris was handed .
swb04	0	*	tv puts dumb ideas .
swb04	1		he was arrested by the police .
swb04	1		the cat got bitten .
swb04	0	*	the cat were bitten by the dog .
swb04	1		there is a monster in loch ness .
swb04	1		it is obvious that pat is lying .
swb04	1		pat is the captain of the team .
swb04	0	*	pat is hate chris .
swb04	1		there is a unicorn in the garden .
swb04	1		there was a felon elected to the city council .
swb04	1		there is a seat available .
swb04	0	*	a seat available was in the last row .
swb04	1		many people were fond of pat .
swb04	1		people are looking through the window .
swb04	1		a felon was elected to the city council .
swb04	0	*	there loved sandy .
swb04	0	*	we talked to them about there .
swb04	1		it mattered that the giants had lost .
swb04	1		that dogs bark annoys people .
swb04	1		it annoys people that dogs bark .
swb04	1		that chris knew the answer occurred to pat .
swb04	1		it never occurred to pat that chris knew the answer .
swb04	1		that the cardinal won the game gave sandy a thrill .
swb04	1		it gave sandy a thrill that the cardinal won the game .
swb04	0	*	that sandy had lied suggested .
swb04	0	*	it loved sandy .
swb04	1		cohen proved the independence of the continuum hypothesis .
swb04	1		cohen proved that the continuum hypothesis was independent .
swb04	1		we forgot our invitations .
swb04	1		nobody saw pat .
swb04	1		that fido barks annoys me .
swb04	1		fido barks .
swb04	1		chris dreads the bucket .
swb04	1		the candidates bring advantage to the voters .
swb04	1		tabs are kept on suspected drug dealers by the fbi .
swb04	1		advantage is taken of every opportunity for improvement .
swb04	1		the bucket was kicked by pat .
w_80	1		john is sad .
w_80	1		john loaded the wagon full with hay .
w_80	0	*	john loaded the wagon with hay green .
w_80	0	*	i presented john with it dead .
w_80	1		of whom are you thinking ?
w_80	1		john became rich .
w_80	1		i gave john gold apples .
w_80	1		how silly is bill considered ?
w_80	1		how mad was bill made ?
w_80	1		john is sick .
w_80	1		john left singing .
w_80	1		john is near larry .
w_80	1		john gave bill the dog dead .
w_80	0	*	bill was struck by john as stupid .
w_80	0	*	john was struck as sick .
w_80	1		john was struck by bill 's idiocy .
w_80	1		john promised bill to leave .
w_80	1		john tried to leave .
w_80	1		to leave would be a pleasure .
w_80	0	*	john was struck by bill as pompous .
w_80	0	*	john was promised by bill to leave .
w_80	1		they make good cooks .
w_80	1		there is nothing to do .
w_80	1		john has something for bill to do .
w_80	1		i am counting on bill to incriminate himself .
w_80	1		on whom are you counting to incriminate himself ?
w_80	1		i am counting on bill to get there on time .
w_80	1		i would prefer to leave .
w_80	1		i would hate for john to leave .
w_80	1		i would prefer for john to leave .
w_80	0	*	it was hated for john to leave .
w_80	0	*	john decided for bill to get the prize .
w_80	0	*	john decided bill to get the prize .
w_80	1		to die is no fun .
w_80	1		john wants to leave .
w_80	1		john counted on bill to get there on time .
w_80	1		i bought bill a book to read .
w_80	1		john told mary that it would be important to leave early .
w_80	1		john told mary that it was important to fred to leave early .
w_80	1		john , told mary that it would be appropriate to leave together .
w_80	0	*	the election of john president surprised me .
w_80	1		john 's arriving dead surprised me .
w_80	1		the attempt by john to leave surprised me .
w_80	1		john left orders to follow pete .
w_80	1		john left us orders to follow pete .
w_80	1		john left orders not to be disturbed .
w_80	1		that he is here is clear .
w_80	1		it is a problem that he is here .
w_80	1		it bothers me that he is here .
w_80	1		john regretted it that bill had a good time .
w_80	0	*	john believes it that bill is here .
w_80	0	*	john believes it sincerely that bill is here .
w_80	0	*	john is aware of it that bill is here .
w_80	0	*	john felt it that bill was tardy .
w_80	0	*	john believed it that bill was tardy .
w_80	1		it was believed that bill was tardy .
w_80	0	*	that john is reluctant seems .
w_80	0	*	it is the problem that he is here .
w_80	1		that he is here is the problem .
w_80	1		the problem we are discussing is george .
w_80	0	*	it is to give up to leave .
w_80	1		it would prove our theory to be untenable for carrots to be vegetables .
w_80	0	*	it was believed to be illegal by them to do that .
w_80	1		john grudgingly accepted judgments of his incompetence as an auto mechanic .
w_80	1		it was to john that i gave the book .
w_80	1		i bought it to read .
w_80	1		i bought it to give to pete .
w_80	1		i gave it to pete to take to the fair .
w_80	0	*	i gave pete the book to impress .
w_80	1		i wrote to bill .
w_80	1		i presented it to bill to read .
w_80	0	*	i presented bill with it to read .
w_80	1		i gave a book to bill to read .
w_80	1		john thinks it would upset himself to die .
w_80	1		john made bill mad at himself .
w_80	1		john made bill master of himself .
w_80	1		the correspondence school made bill a good typist .
w_80	1		the correspondence school sent bill a good typist .
w_80	1		john considers bill silly .
w_80	1		john considers bill to be silly .
w_80	0	*	john bought a dog for himself to play with .
w_80	1		john arranged for himself to get the prize .
w_80	1		john talked to bill about himself .`.split('\n');

main(
    data
).then(console.log);