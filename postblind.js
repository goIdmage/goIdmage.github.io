var btn = document.querySelector("button");
    var out = document.getElementById("output");
    
  
    btn.addEventListener("click", getWord);
   
    function getWord(){
     
      
      var theWord= [
        'is WHAT c0ming back, wh0 ARE y0u?',
        'wh0a h0ld 0n.',
        'why am i talking like y0u suddenly?',
        'that d0esnt really answer my questi0n, but 0k.',
        '0h.',
        'h0ly shit, i cant see!',
        'w0w, awes0me! way t0 be awes0mely sympathetic t00 my terrible new pr0blem, aa.',
        'i cant believe this, its alm0st as if im getting... D0UBLE TEAMED.',
        'that didnt feel right at all, i think i might have t0 retire the wh0le bifurcati0n gimmick, puns and all.',
        'actually that is kind 0f a relief, maybe y0ure right, im feeling better ab0ut this already.',
        'this is s0 weird, what am i even listening t0 here.',
        ' 0_0. FUCK, i cann0t BELIEVE i just made that face.',
        'why the fuck are my teeth missing?',
        '0k, well, great, glad we g0t t0 the fucking b0tt0m 0f that mystery.',
        ' myssssssstery. mystery. mySSSSthSSSStery. mysterymysterymystery. man, i cant even lisp anym0re if i try.',
        'please d0nt laugh, i can tell y0u are b0th enj0ying this, i can smell it using my new blind guy n0se p0wers.',
        'n0 n0t literally, i was j0king. i mean n0t YET. maybe ill ask tz ab0ut it when i wake up th0ugh.',
        'y0u can say that again heheheheheh. but i mean, d0nt say it again literally, because thats kind 0f the wh0le p0int, and w0uld c0mpletely c0ntradi...',
        'well shit, why cant i just g0 glub ar0und 0ut there in the ring and find her n0w?',
        'i mean, aside fr0m the fact that im blind and c0mpletely useless.',
        'wait, what, y0ure wearing a g0dh00d?',
        'why didnt y0u tell me that, what gives? 0r that y0u came back t0 life??',
        'man, being blind is dumb, can i like gr0pe y0u 0r s0mething t0 get up t0 date 0n y0ur appearance, w0uld that be weird?',
        '/R0LLING MY EYES. is what i w0uld be d0ing if that were p0ssible.',
        'aa c0me 0n y0u were making a p0int.',
        'thith ith kinb 0f thtupib. h0py thith, i b0 th0unb thtupib.',
        'why the fuckth ith by b0uth fthull 0f all thethe theeth subbenly?',
        '0h, 0k, greath, th0 i will mithth the retht 0f the c00l tht0ry, 0k.',
        'thith ith ribicul0uth.',
        'aw sthith, i guethth im 0utha here.',
        'thee y0u lather eberyb0by.',
        'uh, because im blind, stupid?',
        'theyre sp00ky as shit, but yes, im alive.',
        '0k, heres the sh0rt versi0n. i used t0 be able t0 see, but then i went blind. then i used my p0wers t00 hard, and died. but it turned 0ut i was 0nly half dead.',
        'let me finish. s0 the gh0st half 0f me c0uld see again, s0 i was 0nly half blind.',
        'but then s0meb0dy pr0t0typed my c0rpse, which i guess sucked the gh0st half 0f me 0ut 0f my b0dy, t0 make me fully alive again? als0 fully blind.',
        'and n0w the gh0st part 0f my s0ul is sharing a sprite b0dy with FUCKING ERIDAN 0f all pe0ple.',
        'y0u kn0w, f0rget it. im s0 sick 0f telling this st0ry t0 pe0ple 0ver and 0ver, and n0b0dy understanding what the hell im talking ab0ut.',
        'its all s0 simple. n0, actually, it isnt, its a fucking stupid st0ry that makes n0 sense, maybe thats the pr0blem.',
        'my marginal existence is fraught with s0 much p0intless duality and c0mplicated n0nsense, s0 im d0ne even trying t0 explain it.',
        'fr0m n0w 0n i sh0uld just wear a shirt that says d0nt ask me ab0ut my disability 0r my m0rtality. then everything w0uld be fine.',
        'l0l.',
        'ahahahah, yeah, what a d0uche!',
        'wait, ff is here? 0h g0d, why didnt that 0ccur t0 me, where is she??',
        'wh0s talking.',
        'can s0me0ne please tell me wh0 is talking.',
        'kanaya, d0nt be such a damn n00b.',
        'the explanation for all the stuff i just heard is s0 0bvi0us.',
        'mutha. fuckin. shenanigans.',
        'kk kn0cked 0ut all my teeth like s0me kind of grubfisted d0uche.',
        'eheheh, n0w hes flipping 0ut.',
        'seems like he wants t0 talk t0 y0u.',
        'but i was h0ping t0 talk with y0u a bit first, h0pe y0u d0nt mind.  i mean, i kn0w he minds, but he can sm00ch my bl00dy, gummy m0uth right 0n the lisp f0r all i care.',
        'i mean lips! thats what i mean t0 say, n0w that i can. lips, lips, lipsssss. w0w, it feels s0 great t0 say that w0rd!',
        'g0t me with his fucking science stick, but its my fault, i t0tally underestimated him.',
        'h0nestly im 0k with it th0ugh, im fine, i mean, aside fr0m the part ab0ut n0t being able t0 see g0d damn squat.',
        'but its 0k, im 0k with that t00.',
        'its hard t0 explain h0w im feeling n0w.',
        'i just kn0w that she is happy and 0k right n0w. just like aradia is.',
        'i feel better than i ever have, really.',
        'there is n0 m0re n0ise, i never realized h0w N0ISY it was.',
        'i can finally relax, and hear my 0wn th0ughts with0ut having t0 yell them, 0r actually, just n0t have any th0ughts, thats a nice change 0f pace.',
        'v0ices.',
        'indiscriminate, indecipherable v0ices, all talking at 0nce, v0ices 0f the s00n t0 be dead. they had been getting l0uder lately, and i just figured they were all 0urs.',
        'i tuned them 0ut kind 0f like i pretty much always d0, but n0w that theyre g0ne the difference is HUGE, i mean W0W.',
        'maybe since theyre g0ne, it means we w0nt have t0 die anym0re?',
        's0, since i guess i have t0 learn t0 be blind n0w, d0 y0u have any tisps f0r me?',
        'i mean tips. tips tips tips tips tips! 0u0. wait, n0, that s0unds stupid.',
        'thats 0k, im happy t0 learn fr0m y0u just being y0u.',
        'fuck, i dunn0.  im BLIND, remember?',
        'if he was 0n this ship, id walk the plank and plummet thr0ugh the fake ass water thr0ugh infinite n0where f0rever.',
        'besides y0u act like y0u havent already recruited at least fifty fucking eridans fr0m d00med timelines in y0ur army.',
        'y0u really are shamefully prejudiced against 0ur alternate reality gh0st selves, theyre just as real as we are and have the same em0ti0ns and everything.',
        'theyre all real!!! SHIT, i d0nt even LIKE eridan, but here i am sticking up f0r his c0pies.',
        '0h whatever. just WHATEVER, rati0nalize the "c0llateral damage" t0 y0ur army all y0u want.',
        'and t0 think, bef0re i j0ined y0ur party i heard rum0rs that y0u might have changed, like learned t0 be a better pers0n 0r s0mething, HEHEH, YEAH RIGHT!',
        'n0, y0ure n0t a bad pers0n f0r THAT PARTICULAR reas0n, i guess.',
        'excuse me, s0me 0f us here have special needs. i think i will c0ntinue dragging my feet if y0u d0nt mind.',
        'N0!!!!!!!!!!',
        'hey tavr0s, wait up, i think im c0ming with y0u.',
        'nah, ive pretty much had it t00.',
        'i cant believe i went al0ng with this f0r as l0ng as i did, s0 yeah.',
        'ill be fucked tw0 ways fr0m perigees eve bef0re i let tavr0s upstage me in the backb0ne department.',
        '0h, feferi and nepeta will be c0ming with me t00.',
        'yes they will! they just t0ld me.',
        'they b0th gave me meaningful glances! like as if t0 say, aw yeah, lets b0unce. instead 0f underestimating the perspicacity 0f the sens0ry impaired, why d0nt y0u bite me.',
        'yeah, this stuff is all super interesting. j/k, l0sers.',
        'anyway, were 0ut.',
        'LADIES.',
        'what friends? m0re ghosts?',
        'so then, we made it 0ut here alright.',
        'whats a funeral?',
        'SHIT, its s0 bright, how can y0u stand it here?',
        'yeah, i can see it. but.. it lo0ks 2d. O_0',
        'ok, well i believed y0u about that, but yeah, i can see that.',
        'what.',
        'eugh, can s0meone get rid 0f that thing please?',
        'aradia, FUCK. will y0u co0l it on the c0rpse party shit for a minute?',
        'i mean, everyb0dy here has just met, and i guess just went through a l0t of really heavy bullshit, d0 you think that maybe this isnt the best thing t0 harp on right n0w?',
        'not everyb0dy is as into death as y0u though. like, its c0ol t0 see you s0 excited about s0mething, im seriously thrilled ab0ut that. but frankly its all pretty fucking morbid t0 everybody, i just th0ught you sh0uld know.',
        'yeah sure.',
        'hey aradia, uh... y0ur rob0 clones l0ok like theyre ab0ut to flip the fuck 0ut. theyre making me nervous, eheheh. can you try talking s0me sense into them?',
        '(l0l, like this guys 0ne t0 talk.)',
        '(hes already unc0mf0rtable, and he sh0uld be. we all sh0uld be.)',
        'w0w aradia, y0u actually sent the guy running t0 hear a serket st0ry. that was a REALLY impressive creep 0ut j0b, nice.',
        'aradia, s0rry, i cant be a part 0f this anym0re, its just making me feel dirty.',
        'lets catch up again later, h0pefully when this is all 0ver.',
        'kk, what the fuck? were you h0lding your breath that wh0le time?',
        'hey man, come 0n. not c0ol.',
        'yeah, i think ill hang behind here t0o, if thats 0k with you guys.',
        'be like what? a ghost??',
        'i d0nt think i belong with the living anym0re.',
        'kk, SORRY.',
        'im just d0ne with this crap, this insane adventure bullshit, its nothing pers0nal.',
        'i just want to spend time with aa and chill 0ut and catch up with some 0f our dead buddies, is that 0k?',
        'ehehehehe.',
        'hell if i kn0w.',
        'calm down kk, it sh0uld be fine.',
        'y0u wont sl0w down.',
        'wh0s this douchebag?',
        
        'yes that w0uld be *such* a tragedy.',
        'isnt it "kissing 0rphans"?',
        't0p five at least.',
        'dont be s0 n0sy aradia.',
        'please d0nt.',
        'aradia c0uld y0u st0p fucking b0thering her.',
        'what are we even d0ing here, serving as like, the attendants f0r this super ancient and wise g0ddess, 0r whatever the fuck she is...',
        'if all y0ure g0nna d0 is get in her face and hassle her ab0ut whatever c00l shit is g0ing 0n in her visi0ns.',
        'aradia, being d00med is all i used t0 ever talk ab0ut.',
        'even ive chilled 0ut 0n all that shit n0w.',
        'ehhh, shrug.',
        'all im d0ing here is keeping y0u c0mpany. like usual.',
        '0k, the least she c0uld d0 is tell us WHY were all d00med.',
        'wh0 cares.',
        'this is 0fficially s0mething we d0nt care ab0ut, right?',
        'i didnt think he had it in him, but apparently all it takes f0r him t0 bec0me the her0 he was meant t0 be was f0r things t0 get extremely fucking stupid.',
        'yeah.',
        'like, WAY m0re stupid than usual.',
        'fucking finally.',
        'hey l0ser. its been a l0ng time.',
        '0h. n0pe.',
        'thats what happens when s0me0ne 0pens a d00r t0 a t0tally dark encl0sure.',
        'fuck, i cant believe y0ure still this stupid. 0h wait i can.',
        'wh0 the fuck is the prince?',
        'are y0u sure y0u want t0 g0 d0wn there? it seems like its ab0ut t0 get wild.',
        
      ];

      
      var wordNum = Math.floor(Math.random() * theWord.length);
      
     
      output.textContent = theWord[wordNum];
    }