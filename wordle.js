var height = 6; // NUMBER OF GUESSES
var width = 5; //WORD LENGTH

//CURRENT GUESSING POSITION 
var row = 0; //ATTEMPT
var col = 0; //LETTER

var gameOver = false;
var wordList = ["voden","hla\u010de","moral","kanal","hihot","strug","sveza","akord","zalog","mekan","butan","\u017earki","tjeme","kr\u010dag","sirov","bera\u010d","kukma","balet","dotle","mu\u0161ki","obzir","plato","ustav","li\u0161aj","lukav","glava","sudar","\u017eamor","gospa","fagot","povez","\u0161epav","nepar","onako","kola\u010d","medni","slast","divno","naziv","mrkli","katar","prior","lijen","aroma","monah","vrsta","pouka","lozov","bira\u010d","tre\u0107i","\u010dupav","vje\u0111a","perje","plast","alkan","litij","mnome","dovle","humus","salpa","trsje","mason","ote\u0107i","okret","olako","kiseo","igra\u010d","himna","obuka","pisa\u010d","urlik","zrnat","ubrus","kupka","tuma\u010d","murva","pre\u0161a","talac","nosni","voza\u010d","strti","pu\u017eev","menta","harfa","porok","zajam","fonem","veoma","popis","medij","\u017eivot","okuka","sku\u0161a","cezij","gumar","paran","klupa","vrbik","habit","oru\u0111e","jalov","jahta","povrh","bo\u017ei\u0107","ure\u0107i","ple\u0107a","ponor","istok","levit","pumpa","pozor","meket","mrena","hitar","to\u010dno","komad","horda","izvor","oltar","pre\u0111a","namot","brkat","li\u010dni","obrat","narod","emajl","himba","danak","tr\u010dka","sidro","taman","penat","omara","sklop","malen","bulin","izuti","\u0161aran","zalet","gorko","bogac","troji","ov\u010dar","nujan","drme\u0161","pasha","odsad","masiv","pismo","pilad","\u017eilav","uvjet","pa\u010dad","biber","tmina","hitno","bedro","osoba","va\u017ean","pelud","\u010dulan","brend","glina","zanos","pipac","izrez","gusar","umalo","uludo","\u010diopa","maska","vedar","po\u0161ip","ta\u010dke","pojam","uzeti","nered","misni","pa\u010dji","\u017eumor","lopov","ispod","otu\u0107i","tabla","pauza","perce","ponos","optok","uni\u0107i","kr\u0161ki","\u0161umni","grlen","ikako","katni","otpor","mrtav","alarm","posve","melez","\u010delni","golub","duda\u0161","dioda","nakit","uzgon","\u010dislo","stoti","odred","lubin","trupa","ki\u0107en","vijak","lakom","kopno","notes","pla\u0161t","valni","fauna","\u0161amar","prema","tinta","dioba","nosiv","drugi","\u0161ipka","ugled","metla","leden","potom","le\u017eaj","ma\u010dka","izlet","skori","drven","\u010de\u0161ki","pomno","krema","agrar","gajde","usjev","hvala","modni","gruda","kombi","go\u0161\u0107a","\u010dvrst","obrok","\u0111a\u010dki","sukob","zapad","vodi\u010d","kopar","nu\u017eno","zamah","patka","bedem","grubo","pla\u0107a","hitin","borba","koban","oniks","dupin","dosta","kokos","breme","tonik","\u0161a\u0161av","burza","fraza","pokoj","uzrok","nazad","brlog","papir","ispit","brada","tenis","pr\u0161ut","gatar","zoran","\u0161kver","pitom","troje","nizak","bo\u0107ar","trzaj","hrana","maslo","balun","smola","vinov","iskaz","bu\u010dno","neko\u0107","vidni","fetus","vitlo","udica","lugar","usred","vijek","odaja","mirta","talas","\u017eu\u010dni","du\u017ean","cikla","\u0161ogor","jidi\u0161","\u0161irom","le\u0111ni","jelka","brzac","vidra","bukov","parni","krzno","tajan","kapak","naiva","\u017eurba","dokon","obli\u0107","stati","upola","uliti","ivrit","vrelo","zrnce","klapa","usjek","topot","sre\u0107a","pirat","guska","\u017eabac","zadak","sabor","sva\u0111a","varav","\u0161e\u0107er","kulak","leglo","tokar","utrka","efekt","supka","elita","egov","oti\u0107i","asket","di\u010dan","telad","ju\u010der","uzdu\u017e","ugriz","lasta","klica","dojam","uzgoj","biv\u0161i","bacil","spe\u0107i","zamet","pogon","napor","miran","otkup","\u010dujan","zakon","gori","celer","ukri\u017e","skupa","pojas","novac","zlato","kanon","vodik","o\u010dito","posto","dodir","odora","savez","vo\u0107ar","gripa","vlada","logor","izrod","upiti","droga","na\u017eao","kazna","opseg","gadan","plima","eunuh","dojka","oprez","nu\u017eda","obred","du\u0107an","guda\u010d","staza","\u0161kare","an\u0111eo","drsko","arhiv","\u0161ator","zamak","golem","stopa","kilav","olovo","sitan","\u0161paga","pravo","nalet","vapno","smjer","biser","deran","pono\u0107","kobac","\u017eidak","dovoz","zmija","lakat","tepih","\u0107ilim","sloga","\u010dopor","autor","diple","izgon","cimet","vrtni","vrpca","makar","za\u010das","upala","izvoz","gida","zapuh","shema","etapa","mrkva","tanak","vesti","jadan","kupac","mokar","sjeme","bazga","berba","pluto","hara\u010d","bojni","pekar","imati","metil","\u010dipka","zimus","jarak","povoj","ocean","debeo","ope\u0107i","ju\u017eni","kop\u010da","\u017ealac","iza\u0107i","\u017ealba","barut","na\u010din","bunda","kasta","lonac","pokus","prvak","trema","model","obraz","smrad","magla","topao","klasa","tkivo","ubiti","hajde","grozd","konak","jarki","nanos","sakat","\u0161taka","pisar","vidik","losos","mnogo","varo\u0161","tkati","obzor","pun\u0111a","cijel","klima","vepar","odvod","crnac","pegla","pehar","jasen","basna","uop\u0107e","orkan","\u017eu\u010dan","vagon","vokal","kuhan","metar","ze\u010dji","kvaka","krava","no\u0107ni","devet","oblog","jedak","te\u010daj","objed","garda","sirup","fikus","u\u0161tap","idiot","barem","nepce","nacrt","pre\u010da","desni","viski","zamka","bode\u017e","svrab","ovako","motiv","ekran","ina\u010de","no\u0107as","kopa\u010d","\u017eenik","gria","kanta","vjera","perla","\u0161unka","jetra","kasno","dakle","surov","poema","pera\u010d","nai\u0107i","takav","crte\u017e","tu\u017eba","lo\u017ea\u010d","zabat","pasta","bunar","svaki","sobar","bukva","izbor","vapaj","gotov","\u0161apat","kolni","dopis","jedar","agent","ma\u010dak","ov\u010dji","cesta","kleti","stepa","nauka","bra\u0107a","korov","silan","\u010dita\u010d","liker","deset","junad","\u010dokot","lagan","do\u010dek","galeb","tu\u017eno","zubni","humak","pilot","pupak","dreka","ogled","sedlo","skela","lahor","ze\u010di\u0107","miraz","sr\u010dan","haker","banda","\u0161kola","gusle","vje\u0161t","oglas","no\u017eni","uvu\u0107i","tesar","konop","kozji","heroj","zelen","jedan","ondje","davno","\u017eupni","\u0161eta\u010d","preko","gr\u010dki","truba","prije","lisni","potop","trbuh","jutro","mu\u010dno","du\u0161ik","kotao","su\u0161an","dosad","jamac","junak","slabo","taban","otrti","\u010desto","davni","idila","uzlet","jakna","uta\u0107i","kavez","lokot","trka\u010d","kuka","ozimi","bajka","silno","karta","spram","\u017eivac","sorta","\u0161e\u0161ir","\u0161uman","splet","bomba","tikva","hotel","ispis","strog","jelen","bluza","cedar","\u017euda","izlog","breza","taksa","labud","ni\u0161ta","minus","puran","dobar","cigla","\u017eezlo","kico\u0161","tekst","smjel","zbroj","struk","sobar","sudi","ihov","svje\u017e","bazen","snaga","pijan","sa\u010dma","\u0161krob","ovrha","lijep","uzdah","svrha","leme\u0161","tajna","kalij","ptica","obu\u0107a","junac","su\u0107ut","teror","pisak","psina","pata","\u0161akal","bravo","\u010ditak","buran","nulti","\u010de\u0161er","zreti","zavoj","afera","pseto","zakup","polen","tigar","dubok","iznad","dvije","\u0161erif","suton","polet","vo\u0107ni","\u0161irok","nemo\u0107","cista","budan","skija","aleja","tipka","trava","nalog","oteti","izraz","podao","pa\u017ea","slava","kuhar","korak","ulica","obu\u0107i","tropi","mi\u0161ji","drvce","mesar","jedro","uzica","dobit","arena","gubav","\u0111akon","kakao","unija","gluma","velik","kocka","nasad","kupa","podlo","jesti","sonet","cipal","trpni","mu\u017ear","kota\u010d","kugla","borac","napon","sijed","\u017ebica","du\u0161ni","\u010dizma","skoro","humor","dokaz","mazga","korzo","jaad","nagao","o\u010dak","duhan","\u017eedan","blizu","lu\u0111ak","uznik","naboj","drzak","molba","tifus","tora","nagib","\u0161krga","\u0161aren","tempo","koko\u0161","gibak","marka","datum","ma\u0161ta","vo\u017ea","kupus","bo\u017eji","urota","limun","kolac","sadra","uhoda","iznos","\u0161verc","kajak","\u0161uta","\u017eupan","badem","pomo\u0107","bager","bosti","obi\u0107i","uvala","odziv","zamor","\u017eu\u0107ak","jaram","omjer","puca","ba\u010dva","sala\u0161","zator","zebra","pri\u010da","eta\u017ea","crkva","vrlet","obrva","usuti","ekipa","zvati","nevin","obdan","bijes","\u0161ugav","lakaj","vrti\u0107","deblo","aorta","nazor","krsni","povod","trpak","grlat","ovdje","metan","pleme","koak","opeka","luta","ufae","stado","gri\u017ea","sje\u0107i","pasti","\u0161tuka","cekin","blago","surla","kupon","sport","kiga","\u010dudno","kvrga","jasan","papak","svu\u0107i","pijuk","labav","izlaz","\u017eetva","jaha\u010d","izvod","lokva","pade\u017e","\u010delik","prkos","ku\u0161a","busen","bahat","hr\u010dak","krvni","pe\u010dat","veseo","vrana","brvno","demon","\u010davao","jarac","tu\u017ean","te\u017ea","stroj","motor","stoga","strah","izvan","svuda","nakon","fosil","ormar","sluga","jasle","mesti","sonda","drago","musti","te\u010dan","poziv","start","pri\u0107i","sklon","me\u0111a\u0161","tolik","navoj","limen","kifla","sarma","sada","obru\u010d","futur","kale\u017e","slovo","crnka","helij","norma","kalup","\u017eurno","griva","pepeo","sti\u0107i","ameba","lanac","\u017ebuka","ni\u0161an","ma\u010dji","pomor","vatra","naoko","arsen","motka","viola","e\u017ean","mudar","kipar","ispad","izdah","krvav","scena","vre\u0107a","kr\u010dma","paket","zavod","vlast","plu\u0107e","otkad","teret","princ","vi\u0161a","sapun","proza","\u017elica","tajno","graja","papar","g\u0111ica","vrhe","grdno","ovjes","\u0111eram","nosa\u010d","okolo","pjena","srpa","poraz","izi\u0107i","kabao","netom","zbiti","opera","oklop","marva","tetak","brana","o\u010dica","kriti","\u010dabar","izmet","kolos","odbor","nijem","dativ","kolut","psiha","metal","pohod","volan","dobro","lopta","dabar","\u0161ansa","dalek","brava","krhak","potok","lipa","u\u010diti","kotac","dotad","pokop","hokej","leta\u010d","draga","saar","skica","grana","prase","tkae","zarez","kosac","lovac","taur","bivol","lista","mo\u0161a","slina","pro\u0107i","\u0161aka\u010d","za\u010din","sje\u010da","vrbov","sinod","nalik","znati","u\u017eivo","vlaga","zipka","pan\u01c6a","klati","dovod","\u010de\u017ea","misao","klada","mukao","odjek","bogat","de\u010dko","kra\u0111a","major","epoha","strip","proso","pravi","mrzak","velar","mr\u0161av","opiti","jasno","maak","vidan","pu\u0161a\u010d","bitan","iskra","vo\u0107ka","okvir","\u010duvar","zglob","dvoje","burek","geslo","jedva","sedmi","hajka","alkar","\u0161utke","te\u017eak","javor","bitka","di\u0161ni","vikar","pla\u017ea","glupo","zvono","zeba","desno","\u0161teta","pjega","otrov","lovor","bolan","limar","dlaka","porta","da\u0161ak","u\u017eina","barok","\u010detka","sokol","beton","vazal","obris","flota","\u010dekrk","goni\u010d","poriv","\u010ditav","\u017eenka","hita","onamo","pse\u0107i","lu\u010dki","mnogi","zalaz","namet","petak","trnci","napad","prae","litra","po\u0161to","epski","\u017ei\u010dan","kaput","zbrka","greda","\u0161umar","dra\u010da","\u017eidov","u\u0161ica","kupa\u010d","brati","nomad","osvit","podne","povik","e\u017eno","pu\u0161ka","udati","je\u010dam","\u017euran","arija","to\u010dan","danas","odati","kaon","suka","peron","zatim","\u0111avao","li\u0161\u0107e","svota","po\u017ear","nitko","porod","true","mre\u017ea","avion","bizon","\u010davka","vezir","dr\u017eak","oblak","sipak","\u010dudak","grbav","ishod","grupa","stric","doseg","pu\u010dki","terca","hrast","osuda","zemni","bati\u0107","odmor","organ","uspon","mo\u017eda","porez","genij","briga","najam","bezub","banka","nemar","putem","odron","miris","grdan","ploha","sake","no\u0161a","kreda","mlada","grudi","zahod","igdje","mjera","mosni","mamac","fazan","ukras","zubat","nasip","idu\u0107i","svila","kamen","momak","misal","\u01c6uda\u0161","zloba","veslo","juri\u0161","govor","unuka","nesti","gra\u0111a","stvar","mozak","vitao","ove\u0107i","\u010dedan","taksi","mutan","\u017eubor","ikona","lenta","sedam","dosje","poput","dokle","sija\u010d","sinak","odmah","balon","liga","vreva","mi\u0161i\u0107","istom","gamad","tetka","uma\u0107i","opkop","vreti","sobni","stae","gusak","ne\u0161to","\u017ertva","otkud","plo\u010da","perad","puha\u010d","bo\u010dni","\u017eeton","vrta","centa","u\u010dee","zadi","tumor","\u0161tivo","menza","to\u010dka","na\u010das","\u010disto","konto","klae","\u0161egrt","sjeta","stoka","konac","amper","sjena","tabor","crta\u010d","spona","tree","kubik","kum\u010de","ta\u0161ta","\u010damac","sklad","strop","spjev","citat","varka","navod","ovuda","human","zdrav","stvor","unu\u010de","estet","torta","vr\u0161ak","virus","anoda","crpka","punac","baca\u010d","pamet","sjati","vree","sa\u017eet","krivo","ste\u0107i","vitez","krcat","djelo","gazda","zubac","polip","tlaka","sme\u0107e","naglo","zanat","u\u0161iti","jeziv","osvrt","tunel","spust","metak","notni","dugme","kadet","vodni","sudac","lampa","kvart","jezik","daska","satir","svia","zgoda","grli\u0107","\u0161esti","nokat","mirno","cijev","kakav","plu\u0107a","uskok","\u010deoni","\u010dudan","vitak","bukva","forma","domet","dokad","putar","silom","nalaz","jesen","\u010di\u010dak","pored","tu\u010dak","stuba","buba","kan\u01c6a","astma","meden","komet","\u010dasak","\u0161tala","ku\u0107ni","\u0161ifra","diza\u010d","atlas","trska","pitak","gozba","obiti","ideal","\u010demer","lihva","su\u0111en","sviti","groza","gorak","musav","bijeg","hitan","vrata","vu\u010dji","vihor","\u0161eta","jajni","divan","mo\u0107an","slati","ikada","p\u010dela","\u010digra","orati","kola\u017e","\u010deki\u0107","vosak","potez","lisac","ki\u0161an","ki\u010dma","farma","maser","po\u0161ta","patak","te\u0161ko","ko\u017eni","otvor","zaton","pipak","ve\u010der","sino\u0107","sprud","otkos","\u017edral","nabor","strka","pamuk","mu\u010dan","dinar","nerad","smo\u0107i","lijek","kuni\u0107","lave\u017e","uloga","zidar","karat","pisac","la\u0111ar","smion","oksid","obala","nafta","modar","pakao","zapis","sekta","tavan","\u010du\u010da",,"salon","modem","neman","uzvik","posao","aktiv","bujan","\u0107elav","zapor","zabit","crven","slama","utaja","seoba","hitac","santa","petni","slae","obuti","\u0161ipak","made\u017e","kruna","kr\u0161an","oboje","pua\u010d","panda","zraka","majka","ezin","teren","osli\u0107","kokot","kadar","stega","sutra","triko","pasji","zvae","kova\u010d","vi\u0161ak","okrug","\u017eilet","album","palma","nagon","ovamo","senat","uspio","melem","firma","sna\u0107i","uputa","odjel","pista","odgoj","gu\u017eva","oluja","ne\u0107ak","torba","znae","visok","so\u010dan","odvoz","uskrs","ute\u0107i","toplo","jecaj","kriza","kabel","staja","sunce","sr\u01c6ba","zadah","pru\u0107e","sporo","lijes","slika","naime","dolar","hru\u0161t","zubar","jedno","snaha","puder","civil","dekan","o\u0161tar","ideja","kotar","pe\u010den","ekcem","tovar","sajam","hrbat","djeca","odraz","mulat","lipov","ikoji","mesni","tisak"];
var guessList = ["abuja","accra","adana","adela","adept","adige","adolf","afekt","afgan","agapa","agata","agens","agram","aguti","ajant","ajvar","akant","akril","akson","akter","alast","alaun","albin","alela","alias","alija","alisa","alkal","aloja","alojz","altaj","al\u017eir","amaro","ambar","ambis","ambra","amidi","amman","ampir","andol","an\u0111el","aneks","anica","anita","antej","anton","antun","anzio","apage","apeks","apgar","apoen","apolo","april","arara","areal","argun","argus","ariel","arije","arpad","arsin","artur","aruba","asana","ascii","asean","asker","aspik","aspra","assam","astek","asuan","asura","ata\u0161e","atena","atest","atila","atlet","atona","atrej","audio","auti\u0107","avans","avers","avnoj","azeri","azidi","azija","azoik","azola","aztek","babac","babun","ba\u010den","ba\u010di\u0107","ba\u010dka","ba\u010dki","bada","badel","badi\u0107","badi","baget","bago\u0161","bagra","bagu\u0161","bajer","bajni","bajta","bakar","bakho","balav","banak","banat","bantu","baran","bara\u017e","barel","baril","barit","baron","baruh","barun","basel","basic","basra","ba\u0161\u010da","ba\u0161ka","batak","batat","batik","bazar","bebop","be\u010dki","bedak","bege\u0161","beke\u0161","belaj","bel\u00e9m","belot","benav","benin","beria","beril","besan","bezok","bibac","bibav","bi\u010di\u0107","bi\u010dji","bidon","bigot","biha\u0107","bihar","bijen","bilin","binar","biota","biped","biret","bismo","bitak","biter","bitni","bitva","bivak","bizam","bja\u0161e","bjehu","bje\u0161e","blaa","blato","bla\u017ei","blend","bli\u017ei","blond","blues","bluna","bodac","boden","bodri","bodul","bogme","bojan","bojen","bojev","bokal","bolni","bolta","bonus","bora\u010d","borak","bordo","borej","bori\u0107","borik","boris","borje","borna","bor\u0161\u010d","bosna","botel","botun","bozen","bozon","bo\u017eur","braga","bragi","brand","br\u010di\u0107","bre\u0111i","brest","brica","brico","brio\u0161","bruka","bruto","brzak","bu\u010dan","bu\u010dje","bu\u010dni","budak","budem","bude\u0161","budim","budni","budva","bu\u0111en","bugar","bujad","bujas","bujni","bujon","buka\u010d","buko\u010d","buraz","burka","burma","burni","bursa","bu\u0161a\u010d","bu\u0161an","bu\u0161el","bu\u0161en","butik","butni","butor","buzet","caddo","caklo","canid","capri","cari\u0107","cavea","cazin","cefta","ceker","cekum","cener","cepin","cerek","ceres","cerij","cerje","cesar","ceuta","cezar","chara","chari","chico","cibet","cifra","cigan","cigin","cijan","cije\u0111","cijuk","cikot","cilik","cimer","cipar","cipli","cirus","crpao","crpem","crpe\u0161","crpla","crpni","crti\u0107","crvak","curak","cusco","\u010dador","\u010da\u0111av","\u010dajni","\u010dakir","\u010dakra","\u010dalma","\u010danak","\u010darda","\u010darka","\u010dasni","\u010dazma","\u010de\u010den","\u010dedni","\u010dehov","\u010deka\u010d","\u010dekia","\u010denaj","\u010depi\u0107","\u010derek","\u010derga","\u010desma","\u010de\u0161a","\u010de\u0161\u0107i","\u010de\u0161ka","\u010detin","\u010detni","\u010dibuk","\u010difut","\u010dinel","\u010dioda","\u010diope","\u010diovo","\u010dirak","\u010diri\u0107","\u010di\u0161\u0107i","\u010ditki","\u010doban","\u010doper","\u010dorba","\u010dubar","\u010dudni","\u010dujni","\u010dulni","\u010dunak","\u010dupka","\u010duvan","\u010duven","\u0107a\u0107ko","\u0107evap","\u0107opav","\u0107orak","\u0107orav","\u0107osav","\u0107o\u0161ak","\u0107umez","\u0107u\u0161ka","dadem","dade\u0161","dadne","dadoh","dahna","daire","dakar","damir","danac","dance","dante","darak","dario","darpa","da\u0161\u0107e","da\u0161\u0107i","da\u0161to","dava\u010d","dave\u017e","david","davor","dedal","dedi\u0107","deist","dekla","delfi","delhi","denar","dendi","denga","dera\u010d","derbi","derle","dezen","dhaka","di\u010dni","dijon","dildo","diler","dimak","dimni","dinka","dinko","diona","dioni","dipol","disco","disko","divit","divni","djeva","dnima","dobo\u0161","dobri","dojen","dolac","dolet","domak","donde","donor","donos","do\u0161li","doziv","dragi","drati","drava","dra\u017ei","drmed","drni\u0161","drski","dr\u0161\u0107e","dr\u0161\u0107i","dr\u0161\u0107u","druid","drvar","drvni","dubai","duha\u010d","dunav","dupke","dupli","du\u0161ak","du\u0161an","du\u017eni","dvaju","dvama","dviju","dvoga","dvoma","dvori","\u01c6elat","\u01c6epar","\u01c6epni","\u01c6ezva","\u01c6ihad","\u01c6okej","\u0111a\u010di\u0107","\u0111ubar","\u0111ubre","\u0111ukac","\u0111ur\u0111a","\u0111urin","edita","egida","egina","egzil","ekson","elzas","email","emina","eneja","enter","enver","eparh","eprom","erato","erbij","erdut","ergot","ervin","eshil","eskim","espoo","essen","etida","etika","etnos","eugen","fakat","fakin","falda","falus","farba","farsa","farsi","fatah","fatum","faust","fazni","fazon","feder","felid","fenol","feer","ferdo","fe\u0161ta","feti\u0161","fetva","fi\u0107uk","fijuk","filek","filet","filip","filir","finac","fini\u0161","finta","firer","flaks","flash","fla\u0161a","fleka","flert","floem","flops","fluks","foaje","fobos","fokus","fondi","forte","foti\u0107","fotka","fotos","frank","frape","freak","frend","freud","frula","fulbe","funta","futa\u010d","gabon","gabro","gacka","gadni","gajba","gajen","galen","galge","galij","galon","gansu","gare\u017e","gasiv","ga\u0161en","gatka","gauss","gavan","gavez","ga\u017een","gegav","geler","gepek","germa","gimel","gipki","gizda","gla\u0111u","glanc","gleba","globa","glosa","gluon","glu\u0161i","gnajs","gnoza","gojen","gojni","gola\u0107","gomel","goran","gor\u010di","goriv","gorje","gorki","gouda","govno","graba","grapa","gr\u010den","gr\u010dka","grdni","greta","grgur","grlce","grmak","grma\u0161","grogi","grunt","guava","gubac","guber","gugol","gugut","gumen","gura\u010d","gurav","gurka","gusan","guske","gusto","gu\u0161\u010de","gu\u0161\u0107i","gu\u0161en","gverc","gvirc","gvozd","hagaj","hahar","haifa","haiti","hajda","hajmo","hajte","halav","halon","halva","hamam","hamas","hanoi","hanza","haron","hasan","hasid","hasij","haski","ha\u0161ki","hauba","hdssb","hebei","herat","herod","heron","hetit","hilel","himan","himen","hindi","hiper","hipik","hiron","hitna","hitni","hitri","hobit","ho\u0107e\u0161","hoda\u010d","ho\u0111ah","hokan","homer","homi\u0107","honda","horor","horus","hr\u010dci","hrpta","hrpte","hrpti","hrptu","hrvat","htjet","hu\u010dni","humat","hunan","huron","husar","ibisi","ibrik","i\u010dega","i\u010demu","idaho","i\u0111ahu","i\u0111a\u0161e","igalo","iglen","iglun","ikamo","ikoga","ikome","ikomu","ileum","ilica","ilija","ilova","imade","imela","indij","indra","indus","ingot","inkub","ino\u010da","input","irska","irti\u0161","irvas","iskan","iskon","iskop","ispuh","istra","istrt","istup","isuti","i\u0161tar","itaka","itrij","ivica","ivona","izboj","izida","izlov","izmak","izmir","izvid","i\u017eeti","jadi\u0107","jadni","jagma","jajar","jajce","jakob","jakov","jalni","jalta","jamni","janez","janko","janus","japan","japet","japod","jaran","jardi","jarun","jasni","ja\u0161en","jatak","javan","javno","jazon","jeba\u010d","jeben","jecav","jeden","jedi\u0107","jedik","jedri","jelek","jemen","jenki","jesam","jesmo","jeste","je\u0161ua","jetki","jezda","jodid","joint","josip","jo\u0161ua","julia","julij","juraj","juren","jutan","ju\u017ean","ju\u017eno","kabul","ka\u010di\u0107","kadli","kadri","ka\u0111en","kafka","kagan","kairo","kajla","kakvi","kalaj","kaleb","kalem","kalfa","kamin","kami\u0161","kamov","kanat","kanda","kanoa","kapar","kargo","karib","karla","karma","karte","kasa\u010d","kasai","kasan","katon","katun","kauai","kavea","kavga","kazan","ke\u010dap","ke\u010dka","kegla","kemal","keops","kepec","keson","keton","kibic","kibla","kibuc","kijev","kikot","kinez","kinin","kiper","kipi\u0107","kirka","ki\u0161ar","ki\u0161ni","kitra","kivni","klaka","klara","klaun","kle\u010de","klika","klin\u010d","kli\u0161e","kmeri","kne\u017ee","kobni","ko\u010den","ko\u010dni","kodni","kodon","kofer","kolan","kolar","kolet","kolor","komar","kome\u0161","komin","kompa","komun","kongo","konus","koic","koi\u0107","kopun","koral","koren","korpa","kosa\u010d","kosat","kosir","kosni","ko\u0161en","ko\u0161i\u0107","ko\u0161a","kotor","kotur","kotva","kovit","kozak","kozar","kozer","ko\u017ear","ko\u017euh","ko\u017eun","kraba","kra\u0107i","krama","krave","kr\u010den","kr\u010dki","kreja","kreta","krhki","krilo","krist","krmak","krm\u010de","krmen","krmni","kroki","krona","kro\u0161e","krpar","krpe\u017e","krsta","kr\u0161en","kru\u0107i","kubus","kuca\u010d","kucaj","ku\u010dka","ku\u0111en","kufer","kukac","kukci","kulen","kuluk","kumir","kumis","kunka","kuad","kupan","kupid","kurac","kuren","kurij","kurir","kurji","kurva","kusav","kusur","ku\u0161a\u010d","kuti\u0107","kutni","ku\u017eni","kvark","kvazi","kvirc","kvota","labin","lafet","lager","lagos","lagum","lagva","laici","lajav","lakej","lak\u0161i","lanci","lanen","lanut","lapis","larga","largo","larma","lasju","laska","lasso","lauda","laura","lavi\u0107","lazar","la\u017eac","la\u017ean","la\u017ee\u0161","la\u017eni","la\u017eov","le\u0111en","leeds","legat","lejla","lelek","lepet","lepra","letak","letva","lhasa","liban","libar","libor","libra","licej","li\u010den","li\u010dki","lider","liger","ligne","lijev","lilit","lille","limit","links","liak","lipik","lirik","li\u0161en","litar","litva","livac","liven","liza\u010d","lizin","lizip","lizol","logos","loire","lojka","lojni","lokal","lokna","lomiv","lomni","lotos","lova\u0161","lo\u017een","lo\u017eiv","lu\u010dac","lu\u010den","lu\u010di\u0107","lu\u010dni","luger","lumen","lunar","lupan","lupar","lupe\u017e","lutka","lutra","luzon","macan","ma\u010dek","ma\u010dke","ma\u010dor","madam","ma\u0111ar","maher","maidu","maine","makac","makao","makro","malac","maler","malne","malta","mambe","mambo","man\u010da","man\u0107a","manga","manir","manta","maori","maria","marke","marko","marni","marod","marof","marta","maruh","mar\u017ea","masen","ma\u0161na","matej","mateo","mater","mato\u0161","mauna","mauri","maza\u010d","mazni","mazut","ma\u017een","me\u010dka","medar","mek\u0161i","melon","melos","memla","meten","mete\u017e","meuse","mezij","mezon","mider","mijeh","mikro","milan","milo\u0161","mimir","miner","minos","minsk","miren","mirha","mirko","mirni","mirza","mi\u0161ar","mitar","mladi","mla\u0111i","mleci","mo\u010den","mo\u0107ni","modri","modul","modus","mogah","mogao","mogla","mogle","mogli","moglo","mogni","mogoh","mogul","moha\u010d","moher","mokri","moloh","mom\u010de","moped","moren","mor\u0161a","mosor","mosul","mo\u0161us","mozgu","mo\u017ee\u0161","mra\u0161e","mravi","mra\u017ee","mrgod","mrka\u010d","mrkov","mrmor","mrski","mrsni","mrtvi","mrzli","mucav","mucin","mu\u010den","mu\u010dki","mu\u010dni","mu\u0107ak","mu\u0107en","mu\u0107ka","mudri","muhar","mukli","mulac","mungo","mural","mu\u0161ko","mute\u017e","mutni","muzej","mu\u017een","mu\u017ei\u0107","na\u010det","na\u0107ve","nadir","nadme","nadmu","nadro","nadru","na\u0111en","nagli","nahum","nakot","nali\u010d","namah","namib","namur","nanio","napet","napol","napuh","narav","nasrt","na\u0161it","natru","nauru","navoz","navrh","nazal","nazeb","ne\u010deg","ne\u010dem","ne\u010dim","ne\u0107e\u0161","nefin","nefud","negda","negev","nehaj","nehat","neja\u010d","nejak","nekad","nekud","nemio","nemir","nemoj","nenad","nepal","nepun","neron","netko","neven","nevis","ni\u010deg","ni\u010dim","niger","nikab","nikad","nikao","nikim","nikog","nikom","nikud","nisam","niska","niski","nismo","niste","nitna","nitni","nobel","noeza","nogar","nogat","nosan","nosi\u0107","no\u0161en","notar","no\u017ei\u0107","nsaid","nu\u0111en","nujni","nu\u017ean","nu\u017eni","edra","isak","iska","oapec","obadi","obaju","oblik","oboji","oboma","octen","o\u010dale","o\u010diju","o\u010dima","odade","odemo","odesa","odete","odnos","odoka","odo\u0161e","odran","odrod","odsut","oduka","odve\u0107","oglav","ohrid","oja\u010di","okana","okapi","okean","okice","okovi","olaki","oleum","olimp","oma\u0107i","omama","omega","omski","on\u010das","onime","oni\u017ei","onomu","op\u0107en","op\u0161av","op\u0161it","op\u0161iv","oputa","ora\u0107i","orden","ore\u0107i","oreol","orest","orfej","orion","oriti","orli\u0107","orlov","ornat","ortak","osaka","osama","oscar","oseka","osica","osii","osion","oskar","oslon","oslov","osman","osmij","osuti","o\u0161tri","otale","otamo","otare","otari","otaru","otepe","otepi","otepu","otkaz","otpis","otprt","otrem","otrla","otuda","ovime","oviti","ovla\u0161","ovnov","ovomu","ozdol","o\u017ee\u0107i","o\u017eeme","o\u017emem","pacer","packa","pa\u0107en","pagan","pagar","pajzl","palac","palau","pale\u017e","palij","palme","pamir","panel","papuk","paraf","parba","paren","pari\u0107","parip","paris","pariz","parka","paroh","parti","pasa\u017e","pasiv","paska","paso\u0161","pasto","pasus","pa\u0161\u010de","pa\u0161ki","pa\u0161ta","pater","patke","patos","pauci","pavao","pavla","pavle","pavlu","pazar","pazin","pazuh","pa\u017een","pecar","pecos","pe\u0107ar","peder","pegaz","pelin","pelir","penal","pepsi","perec","perin","peri\u0161","perth","perun","perut","pesos","pe\u0161ta","petar","petit","petra","pi\u010dka","pi\u01c6in","pieta","pijun","piksa","pilat","pilav","pili\u0107","pilon","pinkl","pinsk","pinta","pipav","piran","pirej","pirit","pi\u0161ta","pita\u010d","pitki","pivar","pivce","pivot","pizda","pizma","pjaca","plata","plaut","plava","plavo","pli\u0107i","pliva","po\u010dek","po\u010det","po\u010dev","podij","podli","podug","pogan","pojac","pojen","pokal","poker","polio","polog","pomet","pomni","pomol","pompa","pon\u010do","ponio","popaj","porat","pore\u010d","poren","porno","porto","porub","posip","posni","po\u0161av","potih","potka","potre","potrt","povit","pozer","pozli","pozni","po\u017eet","praia","prasa","prati","pr\u010den","prdac","prde\u017e","pre\u010di","pre\u0107i","prelo","presa","prezl","prgav","prhki","prhut","pride","prija","prima","pri\u0161t","prkno","proba","proja","prost","prota","prova","prsat","prsni","pr\u0161i\u0107","prten","pr\u017een","pr\u017eun","pssst","ptice","pti\u010de","puca\u010d","pu\u010dan","pu\u0107en","pudla","pukli","pulen","pulpa","punch","punkt","pupav","purim","purin","purus","puten","puti\u0107","putni","pu\u017eni","rabat","rabin","rabo\u0161","ra\u010di\u0107","ra\u010dji","ra\u010dun","ra\u010dva","radar","radi\u0107","radij","radin","radio","radni","radon","ra\u0111en","raeun","rafal","ragbi","rahli","rajna","rajon","rakar","rakun","rampa","ranac","ranar","ranka","rapir","rarog","rasad","rasan","rasap","rasni","rasol","rasti","ra\u0161ki","ra\u0161pa","ratan","ratar","ratni","ravan","ravel","ravni","razni","razor","razum","ra\u017een","rbina","r\u0111ati","rebra","rebro","rebus","re\u010den","redak","redar","redni","redov","re\u0111en","reful","regal","rego\u010d","reich","reims","reket","reku\u0107","relej","remen","renij","renin","renta","repak","repat","reper","repi\u0107","repni","rerna","reski","resor","restl","retor","reuma","reved","rever","revir","revni","reza\u010d","rezak","rezon","re\u017eim","rh\u00f4ne","ribar","ribe\u017e","ribi\u010d","ribiz","ri\u0111an","rigel","right","rijad","rije\u010d","rik\u0161a","rilce","rilke","risa\u010d","rista","ritam","riter","rival","riven","rizik","rizom","rje\u0111i","rnaza","robni","robot","ro\u010dni","rodeo","rodij","rodni","rodos","ro\u0111ak","ro\u0111en","roga\u010d","rogat","rogoz","rohav","rojen","rojta","roker","rolna","roman","romeo","romon","romor","romul","ronac","rosni","ro\u0161en","rotor","rovac","rova\u010d","rova\u0161","rovka","rovke","rozga","rubac","rubin","rubni","ru\u010dak","ru\u010dka","ru\u010dni","ru\u010dno","rudar","rudni","ru\u0111er","ruga\u010d","ruglo","ruina","rujan","rujni","rukav","rulet","rumba","rumen","runda","ruski","ru\u0161en","rutav","rutva","ru\u017ean","ru\u017een","ru\u017eni","rzati","sabat","sadni","sa\u0111en","safir","sajla","saldo","salsa","salto","salun","salva","samac","samar","samba","samit","samoa","samrt","samur","sanak","sapet","saraj","sarin","saski","satan","saten","sati\u0107","satni","satrh","satro","satrt","savao","saziv","sebar","sebra","sedan","sedef","sedum","seine","seksi","selam","selce","selci","selen","selim","selma","semit","seoce","sepsa","serin","servo","seter","sezam","shari","sibir","si\u0107an","sidon","sifon","siget","sigma","sijam","sijev","silaz","silni","sinaj","sinci","sin\u010de","singl","sinko","sinku","sipan","sipki","sirac","sira\u010d","siren","sirot","sisak","sisar","sisat","si\u0161li","sitar","sitni","sivac","sizif","skala","skalp","skamp","skaut","skide","skije","sklek","skoba","skrad","skrit","skroz","skuta","skvo\u0161","sla\u0111i","slajd","slana","sle\u0107i","sliti","sma\u0107i","sme\u0111a","sme\u0111i","smoci","smoje","smoji","smoju","smr\u010da","smr\u0107u","snovi","so\u010dni","sodar","sokak","sokna","sokne","solid","solin","solni","solun","somi\u0107","somun","sonar","so\u0161ni","spali","spica","splav","split","spock","sprej","sprva","srati","srbin","sr\u010dek","srdi\u0161","srdit","srak","stade","stara","stari","steon","stera","stevo","stiks","stipo","stjeg","stoik","stola","stout","stran","stube","suada","sucre","su\u010dev","sudan","sudba","sukub","sukur","sukus","sulud","sumer","sunit","supek","super","surka","sushi","su\u0161ac","su\u0161ak","su\u0161en","su\u0161iv","su\u0161ni","su\u0161ti","sutla","suvag","su\u017ea","su\u017een","sva?a","svast","svazi","sveci","svega","svemu","svima","svime","svita","svomu","\u0161abes","\u0161ajka","\u0161ama\u0161","\u0161anac","\u0161apka","\u0161apta","\u0161arac","\u0161araf","\u0161arka","\u0161arov","\u0161arun","\u0161ar\u017ea","\u0161edok","\u0161ehid","\u0161ekel","\u0161enoa","\u0161eret","\u0161erpa","\u0161etni","\u0161evar","\u0161iber","\u0161ifon","\u0161ijit","\u0161ikan","\u0161imin","\u0161iren","\u0161irit","\u0161i\u0161a\u010d","\u0161kart","\u0161kija","\u0161koda","\u0161krip","\u0161kuda","\u0161kuna","\u0161kura","\u0161lapa","\u0161nala","\u0161naps","\u0161nita","\u0161ofer","\u0161ogun","\u0161okac","\u0161oldi","\u0161olta","\u0161pena","\u0161pica","\u0161pigl","\u0161pija","\u0161piro","\u0161pula","\u0161teka","\u0161tene","\u0161tift","\u0161tono","\u0161trik","\u0161tula","\u0161uica","\u0161upak","\u0161vaba","\u0161vorc","tabak","tabun","tacit","tacna","ta\u010dki","tadi\u0107","tajac","tajen","takvi","talar","tales","talij","talir","talog","talon","tamil","tamni","tanac","tanan","tanga","tange","tanin","tanki","tarac","tarem","tare\u0161","tarni","tarok","tarot","tartu","tatar","tatek","ta\u017een","te\u010dni","tegla","teku\u0107","tekut","telac","telal","teli\u0107","telka","telur","temza","tenda","tenor","tepav","tepen","termo","terra","te\u0161ki","tetis","teuta","tezej","tezga","theta","thora","thoth","tiber","tibet","tifon","tihan","tilia","timar","timin","timor","timun","timur","timus","tinel","tirol","tisno","tisov","ti\u0161ma","titan","titov","tmast","tmica","tobo\u017e","to\u010dak","to\u010den","to\u010dni","tokaj","tokio","tomac","tomi\u0107","toner","tonga","tonus","topaz","topi\u0107","topli","topuz","torij","torus","total","totem","tovni","trakt","trans","trasa","trave","trend","trgi\u0107","trgla","trgli","trglo","trgoh","trija","triju","trima","triom","trli\u0161","trnac","trnak","troga","troja","trpki","trsat","truli","trust","trven","trzav","tr\u017een","tr\u017eni","tucet","tu\u010den","tukac","tukan","tulij","tulum","tunis","tupav","turbe","turbo","turci","turke","tutor","tutsi","tuzla","tu\u017een","tu\u017eni","tvoga","tvoji","tvome","tvomu","tvr\u0111a","tvr\u0111i","tzone","ubjel","ubrzo","u\u010dilo","u\u010dtiv","udade","udaja","udba\u0161","uditi","udova","ufati","uglom","uklet","ukoso","ukrug","ule\u0107i","ulema","uliks","ulkus","ultra","umiti","umnik","umrli","unfpa","unhcr","unski","uo\u010den","upe\u0107i","upeti","upora","urban","urica","usana","usima","usmen","usnen","usnik","usput","ustuk","ustup","u\u0161esa","u\u0161trb","utiha","utrem","utrla","utrli","utu\u0107i","uve\u010de","uveli","uviti","uza\u0107i","uzduh","uzi\u0107i","uziti","uzlaz","uzmak","uznio","u\u017eadi","u\u017ee\u0107i","u\u017ei\u017ee","vabac","vaduz","va\u0111en","vaga\u0161","vajda","vajni","vakuf","vali\u0107","valin","varan","varen","varna","va\u0161ar","vazam","va\u017eni","veber","vedri","vegan","veli\u0161","velna","velom","velur","vergl","vesna","vespa","vesta","veza\u010d","vezan","vezen","vezni","vezuv","vi\u010dni","vidar","video","vidje","vi\u0111en","vika\u010d","vinar","vince","vinko","viak","visak","visla","vi\u0161ki","vi\u0161nu","vitki","vizir","vi\u017ela","vi\u017ele","vjeke","vlaji","vlasi","vodka","vo\u0111en","vojak","vojko","vojna","vojni","volar","volej","volga","voli\u0107","volta","vozar","vozni","vo\u017een","vrane","vrbas","vrcav","vr\u010di\u0107","vreli","vrga","vrije","vriju","vrimo","vrite","vriti","vrsni","vr\u0161en","vrtan","vruci","vrzin","vu\u010dak","vu\u010den","vu\u010dko","vulva","vunen","vutra","zabok","za\u010det","zadan","zadar","zadat","zadrt","zajeb","zajeo","zalud","zapah","zapet","zapru","zarad","zaron","zarub","zasad","zasun","za\u0161to","zatrt","zavor","zavri","zaziv","zazor","zbjeg","zbrda","zdola","zdrug","zecom","zefir","zekat","zelot","zemun","zenon","zgura","zidi\u0107","zidni","zi\u0111em","zijan","zijev","ziper","zlata","zlo\u0107a","zmije","zna\u010di","zoben","zombi","zorka","zorni","zreli","zriti","zubi\u0107","zujav","zuluf","zulum","zveka","\u017eabar","\u017eagor","\u017eaket","\u017eaoka","\u017eara\u010d","\u017earen","\u017eedni","\u017eep\u010de","\u017ee\u0161\u0107i","\u017ee\u017een","\u017egati","\u017eicar","\u017ei\u010dni","\u017ei\u0161ci","\u017eitak","\u017eitki","\u017eitni","\u017eivad","\u017eive\u017e","\u017ei\u017eak","\u017enora","\u017erva","\u017eudni","\u017eu\u0111en","\u017euren","\u017eurni","\u017evala","\u017evale"];
guessList = guessList.concat(wordList);

var word = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
console.log(word);

window.onload = function(){
    intialize();
}

function intialize(){
    //CREATE GAME BOARD
    for (let r=0; r < height; r++){
        for(let c=0; c < width; c++){
            //<SPAN ID="0-0" CLASS="TILE"></SPAN>
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);
        }
    }

    //CREATE KEYBOARD
    let keyboard = [
        ["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P", "Š", "Đ", "Ž"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Č", "Ć"],
        ["Enter", "Z", "X", "C", "V", "B", "N", "M", "⌫" ]
    ]

    for (let i = 0; i <keyboard.length; i++){
        let currRow = keyboard[i];
        let keyboardRow = document.createElement("div");
        keyboardRow.classList.add("keyboard-row");

        for (let j =0; j < currRow.length; j++){
            let keyTile = document.createElement("div");
            let key = currRow[j];
            keyTile.innerText = key;
            if (key == "Enter"){
                keyTile.id = "Enter";
            }
            else if (key == "⌫"){
                keyTile.id = "Backspace";
            }
            else if ("A" <= key && key <= "Ž"){
                keyTile.id = "Key" + key;
            }

            keyTile.addEventListener("click", processKey);

            if (key == "Enter"){
                keyTile.classList.add("enter-key-tile");
            }
            else {
                keyTile.classList.add("key-tile");
            }
            keyboardRow.appendChild(keyTile);
        }
        document.body.appendChild(keyboardRow);
    }

    //KEY PRESS
    document.addEventListener("keyup", (e) => {
        if (gameOver) return;
            processInput(e);
    });
}

function processKey(){
    let e = {"code" : this.id};
    processInput(e);
}

function processInput(e) {
    //alert(e.code);
    if ("KeyA" <= e.code && e.code <= "KeyŽ"){
        if (col < width){
            let currTile = document.getElementById(row.toString() + '-' + col.toString());
            if (currTile.innerText == ""){
                currTile.innerText = e.code[3];
                col += 1;
            }
        }
    }
    else if (e.code == "Backspace"){
        if (0 < col && col <= width){
            col -= 1;
        }
        let currTile = document.getElementById(row.toString() + '-' + col.toString());
        currTile.innerText = "";
    }

    else if (e.code == "Enter"){
        update();
    }

    if (!gameOver && row == height){
        gameOver = true;
        document.getElementById("answer").innerText = word;
    }
}

function update(){
    let guess = "";
    document.getElementById("answer").innerText = "";

    for (let c = 0; c < width; c++){
        let currTile = document.getElementById(row.toString() + "-" + c.toString());
        let letter = currTile.innerText;
        guess += letter;
    }

    guess = guess.toLowerCase();
    if (!guessList.includes(guess)){
        var answerElement = document.getElementById("answer");
        answerElement.innerText = "Riječ nije ispravna";
        answerElement.style.color = "green";
        return;
    }
    let correct = 0;
    let letterCount = {};
    for (let i=0; i < word.length; i++){
        letter = word[i];
        if (letterCount[letter]){
            letterCount[letter] += 1;
        }
        else {
            letterCount[letter] = 1;
        }
    }

    for (let c = 0; c < width; c++){
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;

        //CORRECT POSITION?
        if (word[c] == letter){
            currTile.classList.add("correct");
            let keyTile = document.getElementById("Key" + letter);
            keyTile.classList.remove("present");
            keyTile.classList.add("correct");
            correct += 1;
            letterCount[letter] -= 1;
        }
    
        if (correct == width) {
            gameOver = true;
        }
    }

    for (let c = 0; c < width; c++){
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;
    if (!currTile.classList.contains("correct")){
        //IN THE WORD?
        if (word.includes(letter) && letterCount[letter] > 0){
            currTile.classList.add("present");
            let keyTile = document.getElementById("Key" + letter);
            if (!keyTile.classList.contains("correct")){
                keyTile.classList.add("present");
            }
            
            letterCount[letter] -= 1;
        }
        //NOT IN THE WORD
        else {
            currTile.classList.add("absent");
            let keyTile = document.getElementById("Key" + letter);
            if (!keyTile.classList.contains("correct")){
            keyTile.classList.add("absent");
            }
        }
    }

    
    }

    row += 1;
    col = 0;
}

let stopwatchInterval;
let startTime = 0;

function startStopwatch() {
    startTime = Date.now() - (startTime > 0 ? startTime : 0);
    stopwatchInterval = setInterval(updateStopwatch, 1000);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    startTime = 0;
    clearInterval(stopwatchInterval);
    updateStopwatch();
}

function updateStopwatch() {
    if (!gameOver) {
        const currentTime = Date.now() - startTime;
        const minutes = Math.floor(currentTime / 60000);
        const seconds = Math.floor((currentTime % 60000) / 1000);
        const stopwatchElement = document.getElementById("stopwatch");
        stopwatchElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
}

function customPopup(message) {
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `<p>${message}</p>`;
    document.body.appendChild(popup);
}



document.addEventListener("DOMContentLoaded", function () {
    startStopwatch();
    
    const correctWord = word; 
    const inputElement = document.getElementById("answer"); 

    inputElement.addEventListener("input", function () {
        if (gameOver) return;
        let guess = inputElement.value.toLowerCase();
        if (guess === correctWord) {
            stopStopwatch();
            gameOver = true;
        }
    });
})

