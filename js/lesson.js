const items = document.querySelector('.accordeon__items');
const test = document.querySelector('.test');
const localData = localStorage.getItem('subject');
let count = 0;

const lessonArray = [
	{
		id: 'biology',
		title: 'Биология',
		introdaction: `Биология аз калимаи юнони гирифта шуда "bio" ҳаёт ва "logos" илм мебошад, яъне илм дар бораи табиат мебошад`,
		literatures: [
			'Дьердь Пойа «Математическое открытие»',
			'Барбара Оакли «Думай, как математик»',
			'Ханна Фрай «Математика любви»',
			'Артур Бенджамин «Магия математики»',
			'Яков Перельман «Занимательная геометрия»',
		],
		lessons: [
			{
				title: 'Системаи асаб',
				theory: `<b>Аҳамияти системаи асаб.</b> Системаи асаб дар танзими
				ва- зифаи организм нақши муҳим мебозад. Вай кори доимии
				ҳуҷайраҳо, бофтаҳо, узвҳо ва низоми онҳоро таъмин мекунад.
				Бо мавҷудияти ин низом организм ба муҳити беруна алоқаманд
				аст. Фаъолияти системаи асаб ба ҳиссиёт, таълим, хотира,
				нутқ, тафаккур ва равандҳои руҳи асос ёфта, одам бо ёрии
				онҳо на танҳо муҳити атрофро дарк мекунад, балки метавонад
				онро фаъолона дигаргун созад. <br />
				<b>Бофтаи асаб.</b> Системаи асабро ҳуҷайраҳое ташкил
				мекунанд, ки нейрон ва ҳуҷайраҳои асосии бофтаи асаб буда,
				кори системаи асабро таъмин мекунанд. ҳуҷайраҳои ҳамроҳ
				вазифаи ғизодиҳи, такягоҳи ва муҳофизатиро иҷро мекунанд.
				Миқдори ҳуҷайраҳои ҳамроҳ назар ба нейронҳо қариб 10
				маротиба зиёдтар мебошад. Нейрон аз се қисм иборат аст: 1)
				тана; 2) изофаи кутоҳ (дендритҳо); 3) изофаи дароз (ё
				аксон) (расми 9). Дендритҳо кутоҳ ва сершохаанд. Дар як
				нейрон метавонад якчанд дендрит мавҷуд бошад. Дендритҳо бо
				ретсепторҳо пайваст буда, импулсҳои асабиро ба ҷасади
				нейрон мебаранд ва вазифаи ҳиссиётқабулкуниро иҷро
				мекунанд. Аксон (шоха) бо мушакҳо пайваст шуда, вазифаи
				ҳаракатро иҷро мекунад. <br />Аз ҷиҳати шохарони нейронҳо
				се хел мешаванд: <br>
				<ol>
				  <li> Нейронҳои якшоха (униполяри);</li>
				  <li> Нейронҳои душоха (биполяри);</li>
				  <li> Нейронҳои бисёршоха
					 (мултиполяри) (расми 10).</li>
				</ol>
				  Торҳои асаб ба тамоми организм
				паҳн шуда, импулсҳоро ба ҳамаи узвҳои бадан мебаранд. <br>
				<b>Қисмҳои системаи асаб.</b> Системаи асаб аз қисмҳои маркази ва
				канори иборат аст.  қисми маркази аз мағзи сар ва ҳароммағз
				таркиб ёфта, бо лимфаи бофтаи васлкунанда пушонида
				шудааст. Ба қисми канори гиреҳҳои асаб дохил ме- шаванд
				(расми 11). Як қисми системаи асаб, ки кори мушакҳои
				скелетро танзим мекунад, системаи соматики ном дорад. Одам
				тавассути ин системаи асаб метавонад ҳаракатҳоро идора
				карда, онҳоро ихтиёран ба вуҷуд орад ё қатъ гардонад.`,
				video: ['video/1.mp4', 'video/'],
				test: [
					{
						question: ' Бофтаҳои асаб аз кадом қисмҳо иборатанд?',
						answers: [
							{ id: true, test: 'Тана, изофаҳои дароз ва кутоҳ' },
							{ id: false, test: 'Тана ва изофа' },
							{ id: false, test: ' Тана, сар ва нуг' },
						],
					},
					{
						question:
							'Хун дар организм ҳаракат намуда кадом вазифаро иҷро менамояд?',
						answers: [
							{ id: false, test: 'Хабари' },
							{ id: true, test: 'Нақлиёти' },
							{ id: false, test: 'Огоҳи' },
						],
					},
				],
				task: 'Рефлекс чист?',
			},
			{
				title: 'Мубодилаи неру. Гигиенаи хурок',
				theory: `Барои равандҳои
				гуногуни фаъолияти ҳаётии организм (ба вуҷуд омадани
				моддаҳо, кори мушакҳо, нигоҳдории ҳарорати бадан) дар
				як шабонаруз қариб 10500 кҷ (2500 ккал) энергия (неру)
				зарур аст. Манбаи он неруест, ки дар бандҳои кимиёвии
				молекулаҳои моддаҳои узви (сафеда, чарб, карбогидрат)
				мавҷуд аст ва аз хурок гирифта мешавад.
				133
				Дар организм мунтазам раванди мураккаби мубодилаи
				неруи ба амал меояд. Дар натиҷаи баъзе мубодилаҳо организм
				аз неру бой шуда, дар дигар мубодила онро талаф медиҳад.
				Чунончи, ҳангоми оксидшави ва таҷзияи глюкоза, инчунин
				дигар пайвастаҳои узви дар ҳуҷайраҳо неруи кимиёви озод
				шуда, ба неруи барқи ва механики табдил меёбад.
				Масалан, неруи барқии импулси асаб ба торҳои асаб
				додани ахборро таъмин карда, неруи механики кашишхурии
				мушакҳои скелет, мушакҳои дилу диафрагмаро таъмин
				мекунад. ҳамаи ин намудҳои неру ба неруи гарми табдил
				меёбанд. Як қисми гарми барои мунтазам нигоҳ доштани
				ҳарорати бадан истифода мегардад ва зиёдатии онро
				организм ба муҳити атроф ихроҷ мекунад.
				ҳамин тариқ, организми одам ба қонуни бақои неру
				итоат мекунад. Неру пайдо ва нест намешавад, он танҳо
				тағйир меёбад.<br>
				<b>Сарф кардани неру дар корҳои гуногун.</b> Неруи организм
				сарфакардаро хурок пурра месозад. Миқдори неруи дар як
				шабонаруз сарфкардаи одамони касбу корашон гуногунро
				дониста, барояшон меъёри хурок муқаррар намудан лозим
				аст.
				Муайян шудааст, ки одами ба меҳнати ҷисмони
				машғулбуда зиёдтар неру сарф мекунад. ҷадвали 1-ро аз
				назар гузаронед.`,
				video: ['video/', 'video/'],
				test: [
					{
						question: 'Одам чанд дандони калони курси дорад?',
						answers: [
							{ id: false, test: '4-то' },
							{ id: true, test: '6-то' },
							{ id: false, test: '8-то' },
						],
					},
					{
						question: 'Глюкозаро кадом ғадуд танзим мекунад?',
						answers: [
							{ id: false, test: 'ҷоғар' },
							{ id: false, test: 'Оби даҳон.' },
							{ id: true, test: 'Зери меъда' },
						],
					},
				],
				task: 'Ғадуди сипаршакл дар мубодилаи моддаҳо чи нақшеро мебозад?',
			},
		],
	},

	{
		id: 'english',
		title: 'З. англиси',
		introdaction: `Аз сабабе, ин забон аст барои аз худ кардани он ман ба шумо тавсия медиҳам
		ба ғайр аз хондан боз бояд бо он муошират кард. Барои ин шумо бояд ё шахсеро ёбед, ки бо ин забон муошират мекунад 
		ё инки филмҳоро бо забони хориҷи тамошо кунед ва мусиқиҳои хориҷиро гуш кунед`,
		literatures: [
			'Дьердь Пойа «Математическое открытие»',
			'Барбара Оакли «Думай, как математик»',
			'Ханна Фрай «Математика любви»',
			'Артур Бенджамин «Магия математики»',
			'Яков Перельман «Занимательная геометрия»',
		],
		lessons: [
			{
				title: 'Граматика',
				theory: ``,
				video: ['video/1.mp4', 'video/'],
				test: [
					{
						question: ' Бофтаҳои асаб аз кадом қисмҳо иборатанд?',
						answers: [
							{ id: true, test: 'Тана, изофаҳои дароз ва кутоҳ' },
							{ id: false, test: 'Тана ва изофа' },
							{ id: false, test: ' Тана, сар ва нуг' },
						],
					},
					{
						question:
							'Хун дар организм ҳаракат намуда кадом вазифаро иҷро менамояд?',
						answers: [
							{ id: false, test: 'Хабари' },
							{ id: true, test: 'Нақлиёти' },
							{ id: false, test: 'Огоҳи' },
						],
					},
				],
				task: 'Рефлекс чист?',
			},
			{
				title: 'Мубодилаи неру. Гигиенаи хурок',
				theory: `Барои равандҳои
				гуногуни фаъолияти ҳаётии организм (ба вуҷуд омадани
				моддаҳо, кори мушакҳо, нигоҳдории ҳарорати бадан) дар
				як шабонаруз қариб 10500 кҷ (2500 ккал) энергия (неру)
				зарур аст. Манбаи он неруест, ки дар бандҳои кимиёвии
				молекулаҳои моддаҳои узви (сафеда, чарб, карбогидрат)
				мавҷуд аст ва аз хурок гирифта мешавад.
				133
				Дар организм мунтазам раванди мураккаби мубодилаи
				неруи ба амал меояд. Дар натиҷаи баъзе мубодилаҳо организм
				аз неру бой шуда, дар дигар мубодила онро талаф медиҳад.
				Чунончи, ҳангоми оксидшави ва таҷзияи глюкоза, инчунин
				дигар пайвастаҳои узви дар ҳуҷайраҳо неруи кимиёви озод
				шуда, ба неруи барқи ва механики табдил меёбад.
				Масалан, неруи барқии импулси асаб ба торҳои асаб
				додани ахборро таъмин карда, неруи механики кашишхурии
				мушакҳои скелет, мушакҳои дилу диафрагмаро таъмин
				мекунад. ҳамаи ин намудҳои неру ба неруи гарми табдил
				меёбанд. Як қисми гарми барои мунтазам нигоҳ доштани
				ҳарорати бадан истифода мегардад ва зиёдатии онро
				организм ба муҳити атроф ихроҷ мекунад.
				ҳамин тариқ, организми одам ба қонуни бақои неру
				итоат мекунад. Неру пайдо ва нест намешавад, он танҳо
				тағйир меёбад.<br>
				<b>Сарф кардани неру дар корҳои гуногун.</b> Неруи организм
				сарфакардаро хурок пурра месозад. Миқдори неруи дар як
				шабонаруз сарфкардаи одамони касбу корашон гуногунро
				дониста, барояшон меъёри хурок муқаррар намудан лозим
				аст.
				Муайян шудааст, ки одами ба меҳнати ҷисмони
				машғулбуда зиёдтар неру сарф мекунад. ҷадвали 1-ро аз
				назар гузаронед.`,
				video: ['video/', 'video/'],
				test: [
					{
						question: 'Одам чанд дандони калони курси дорад?',
						answers: [
							{ id: false, test: '4-то' },
							{ id: true, test: '6-то' },
							{ id: false, test: '8-то' },
						],
					},
					{
						question: 'Глюкозаро кадом ғадуд танзим мекунад?',
						answers: [
							{ id: false, test: 'ҷоғар' },
							{ id: false, test: 'Оби даҳон.' },
							{ id: true, test: 'Зери меъда' },
						],
					},
				],
				task: 'Ғадуди сипаршакл дар мубодилаи моддаҳо чи нақшеро мебозад?',
			},
		],
	},

	{
		id: 'information',
		title: 'Т. иттилооти',
		introdaction: `Биология аз калимаи юнони гирифта шуда "bio" ҳаёт ва "logos" илм мебошад, яъне илм дар бораи табиат мебошад`,
		literatures: [
			'Дьердь Пойа «Математическое открытие»',
			'Барбара Оакли «Думай, как математик»',
			'Ханна Фрай «Математика любви»',
			'Артур Бенджамин «Магия математики»',
			'Яков Перельман «Занимательная геометрия»',
		],
		lessons: [
			{
				title: 'Алгоритм',
				theory: `<b>Мафҳуми алгоритм.</b> Мо дар ҳаёти ҳаррузаамон
				корҳои зиёдеро ба сомон мерасонем, аммо на ҳамеша оид
				ба раванд ва тарзи иҷрои онҳо аҳамият медиҳем. Дар асл
				ҳар як кор мувофиқи пайдарпайии муайяни амалиёти
				алоҳида иҷро мегардад. Масалан, барои кушодани дари
				хона, бояд мо аввал дастаки онро қапем ва сони дарро ба
				самти кушодашавиаш тела диҳем. Чи хеле ки аз ин мисол
				бармеояд, мо дар ин маврид бояд ду амалро иҷро кунем:
				қапидан ва тела додан. Вале, шояд пеш аз кушодани дари
				хона, ба сари мо ҳеҷ гоҳ фикр ҳам наояд, ки мо бояд ҳатман
				аз руйи ду амали зикршуда рафтор намоем. Кушодани дари
				хона кори доими ва ҳамаруза буда, мо онро ҳар дафъа ба
				таври худкор (автомати) иҷро менамоем.
				Албатта, кушодани дар кори нисбатан сода ба ҳисоб
				меравад, чунки барои иҷрои он миқдори ками амалиёт
				истифода бурда мешавад. Зиндаги баъзан дар назди мо
				иҷрои вазифаҳои мураккабро низ мегузорад. Барои бехато
				иҷро намудани чунин вазифаҳо ва корҳое, ки дақиқро талаб
				менамоянд, мо бояд аз руйи пайдарпайии нишондодҳои
				аниқ амал намоем.
				ҳамин тариқ, мо дар ҳар як қадам бо масъалаҳои
				гуногун рубару шуда кушиш менамоем, ки онҳоро ҳал кунем.
				ҳар масъала роҳи ҳалли худро дорад. Дар чунин мавридҳо
				8
				зарур аст, ки мо пешаки пайдарпайии амалиётеро муайян
				созем, ки онҳо ба ҳалли ин масъалаҳо оварда мерасонанд.
				Ана ҳамин гуна тарзи иҷрои пайдарпайии амалиётро, ки
				ба ҳалли ин ё он масъала оварда мерасонад, алгоритм низ
				мегуянд. Дар воқеъ, боиси ифтихори мост, ки калимаи
				«алгоритм» аз шакли навишти лотинии номи риёзидони
				машҳури Осиёи Маркази (асри IX) Муҳаммад ал–хоразми
				<i>(Algorithmi)</i> гирифта шудааст. Алхоразми аллакай дар ҳамон
				замон қоидаҳои иҷрои амалҳои арифметикиро дар системаи
				ҳисоби даҳи пешниҳод намуда буд.
				Дар математика ва информатика мафҳуми алгоритм
				яке аз мафҳумҳои бунёди ба шумор меравад. ҳатто қисми
				махсуси математика – назарияи алгоритмҳо ба омузиш ва
				тадқиқи алгоритмҳо бахшида шудааст. Мафҳуми алгоритм
				хусусан ҳангоми ҳалли масъалаҳо бо ёрии компютер васеъ
				татбиқ карда мешавад. Вале қайд бояд кард, ки ба мафҳуми
				алгоритм, ба мисли баъзе мафҳумҳои бунёдии дигар (масалан, мафҳуми маҷмуъ), таърифи қатъи додан мумкин нест.
				Онро танҳо маънидод кардан мумкин аст:
				Алгоритм маҷмуи амрҳои барои иҷрокунанда фаҳмо ва нишондоди аниқи пайдарпайии амалиётест, ки барои ба даст
				овардани мақсад ё ҳал намудани масъалаи гузошташуда
				бояд онҳо пай дар пай иҷро карда шаванд.
				Иҷрочии алгоритм. ҳар як алгоритм мувофиқи
				дараҷаи душвории худ ба ягон иҷрочии мушаххас пешниҳод
				карда мешавад. Масалан, ҳалли муодилаи квадратиро аз
				ҳар гуна хонандаи синфи якум интизор шудан мумкин нест.
				Хушбахтона, дар ҷаҳони муосир, инсон дар иҳотаи маҷмуи
				гуногуни васоити техники қарор дорад. Оинаи нилгун,
				дастгоҳи аксбардори, нақлиёт, мошини ҷомашуи, радио,
				магнитофон, компютер, робот ва ғайра мисолҳои ин гуна
				васоитанд. Одамон ҳалли бисёр масъалаҳоро ба зиммаи
				ин васоит гузошта, меҳнати фикри ва ҷисмонии худро
				9
				осон гардонидаанд. Азбаски ҳар як таҷҳизот хусусият ва
				қоидаҳои истифодаи худро дорад, пас ҳар кадоми онҳоро
				иҷрочи номидан мумкин аст. Иҷрочи на танҳо васоити
				техники, балки шахси алоҳида ё гуруҳи одамон, ҳайвон ё
				паранда низ шуда метавонад. Масалан, парандаи ромшуда,
				ки амрҳои соҳибашро бехато иҷро мекунад ё духтарчае, ки
				бо хоҳиши модараш зарфҳоро мешуяд, иҷрочи мебошанд.
				ҳамин тариқ, ҳар як иҷрочи барои анҷом додани
				коре бояд пайдарпайии охирноки амалиётро иҷро намояд.
				Агар иҷрочии алгоритм воситаи техники бошад, он гоҳ
				пайдарпайии нишондодҳои алгоритм бояд намуди қатъи
				дошта бошад, яъне ҳар як амалиёти он бояд танҳо бо як тарз
				иҷро карда шавад. Компютер, ҳамчун воситаи техники, маҳз
				дар заминаи ҳамин қатъияти нишондодҳо ягон кореро ба
				анҷом мерасонад. Дар мавриди иҷрочии алгоритм будани
				компютер ба ҷойи мафҳуми нишондод мафҳуми фармон ё
				амр истифода мешавад.
				Системаи фармонҳои иҷрочи. Иҷрочиёни алгоритмҳо
				ба мисли худи алгоритмҳо гуногунанд. ҳар кадоми онҳо
				вобаста ба имконот ва синфи масъалаҳои кориашон маҷмуи
				амалиёти махсуси худро доранд. Масалан, амале, ки ба
				шудгори замин вобаста аст, ба маҷмуи амалиёти трактор
				дохил шуда, ба маҷмуи амалиёти телевизор ягон дахле
				надорад. Маҷмуи амалиётеро, ки иҷрочи амали гардонида
				метавонад, системаи фармонҳои иҷрочи мегуянд.
				Тарзҳои тасвири алгоритм. Барои он ки алгоритмро
				иҷрочи амали гардонида тавонад, бояд он бо ягон тарз тасвир
				карда шавад. Шаклҳои нисбатан бештар паҳнгардидаи
				алгоритмҳо матни, формулави-матни, ҷадвали, блок-нақшави ва барномави мебошанд.
				Шакли матнии алгоритм имконият медиҳад, ки
				алгоритм ба воситаи калима ва ҷумлаҳои забони муқаррарии
				гуфтугуи навишта шавад. Дар шакли формулави – матнии
				10
				алгоритм марҳалаҳои он бо ёрии формулаҳои математики
				тасвир карда шуда, барои шарҳу эзоҳашон аз матнҳо
				истифода мебаранд. Шакли ҷадвалии алгоритм имконият
				медиҳад, ки марҳалаҳои он дар сатру сутунҳои ҷадвал
				тасвир карда шаванд.
				Блок – нақша тасвири графикии сохтори мантиқии
				алгоритм мебошад, ки дар он ҳар як марҳалаи алгоритм
				ба воситаи ягон шакли геометрии мувофиқ (блок) ифода
				карда мешавад. Барои нишон додани самти идоракуни аз
				тирча истифода мебаранд. Ба сифати блокҳо шаклҳои зерин
				истифода мешаванд:`,
				video: ['video/1.mp4', 'video/'],
				test: [
					{
						question: ' Бофтаҳои асаб аз кадом қисмҳо иборатанд?',
						answers: [
							{ id: true, test: 'Тана, изофаҳои дароз ва кутоҳ' },
							{ id: false, test: 'Тана ва изофа' },
							{ id: false, test: ' Тана, сар ва нуг' },
						],
					},
					{
						question:
							'Хун дар организм ҳаракат намуда кадом вазифаро иҷро менамояд?',
						answers: [
							{ id: false, test: 'Хабари' },
							{ id: true, test: 'Нақлиёти' },
							{ id: false, test: 'Огоҳи' },
						],
					},
				],
				task: 'Мафҳуми алгоритм чист?',
			},
			{
				title: 'Мафҳумҳои асосии пойгоҳи додаҳо',
				theory: `Асоси системаи иттилоотии дилхоҳро пойгоҳи додаҳо ташкил медиҳад, ки дар он маълумот оид ба миқдори нусхаҳои зиёди синфҳои ба ҳам алоқаманди объектҳо нигоҳ дошта мешаванд. Зери мафҳуми пойгоҳи додаҳо маҷмўи ба тарзи хоса ташкилшудаи додаҳо фаҳмида мешавад, ки онҳо дар ягон барандаи модди нигоҳ дошта шудаанд. Бояд қайд намуд, ки ин маҷмўъ на ягон дастаи додаҳои пароканда, балки
				155
				дастаи додаҳои ба ҳам алоқаманди сохтори мебошад. Истифодабарандаи пойгоҳи додаҳо бояд ҳангоми корбари бо он оид ба ягон объект, ҳодиса ё раванд тасаввурот пайдо карда тавонад.
				Пойгоҳи додаҳо пеш аз ҳама барои худкорсозии равандҳои захирасози, ҷустуҷўи, идоракуни ва лоиҳакаши пешбини шудааст. ҳар кадоми шумо аллакай борҳо бо пойгоҳи додаҳо сару кор гирифтаед. Масалан, китоби рақами телефонҳо, дафтарчаи ёддошт, феҳристи китобҳои китобхона, рўйхати дўстони дар телефони ҳамроҳ маҳфузбуда ва ғайра мисоли пойгоҳи додаҳоро ташкил медиҳанд. Дар дафтарчаи ёддошт иттилооти гуногун – ном, насаб, рақами телефон, суроға, санаи таваллуд ва дигар маълумотро доир ба дўстону наздикон нигоҳ доштан мумкин аст. Айнан ба мисли ҳамин дар феҳристи китобҳои китобхона иттилоот дар бораи номи китобҳо, муаллиф, соли барориш, нашриёт ва ғайра нигоҳ дошта мешавад. Агар дар дафтарчаи ёддошт додаҳо (ному насаб) аз рўйи алифбо нигоҳ дошта шаванд, дар феҳристи китобҳо онҳоро аз рўйи соҳаи фанни (мавзўи) мураттаб сохтан мумкин аст.<br>
				<b>1. Пойгоҳи додаҳо – маҷмўи додаҳои сохтории соҳибном оид ба ягон соҳаи мавзўи.
				<br>2. Пойгоҳи додаҳо – амсилаи иттилоотие, ки гурўҳи объектҳоро аз рўйи хосиятҳои якхелаашон муттаҳид месозад.</b><br>
				Ба мафҳумҳои асосии пойгоҳи додаҳо майдон ва навишта дохил мешаванд. Майдон тавассути ном ва навъи додаҳо тавсиф дода мешавад. Дар ҷадвали дар мавзўи гузашта овардашуда Номи суруд, Иҷрочи, Жанр, Сол ва Мамлакат майдонҳои пойгоҳи додаҳои сурудҳо ба ҳисоб мераванд. Майдонҳои пойгоҳи додаҳо метавонанд дорои додаҳои навъи гуногун – матни, адади, санави, вақти, пули ва ғайра бошанд. Масалан, дар ҷадвали номбурда, ки дар он маълумот оид ба сурудҳо дарҷ гардидааст, номи майдонҳо дар сатри якум ва қиматҳои ҳар як майдон дар сутуни мувофиқи ҷадвал ба қайд гирифта шудааст.
				<br><b>Майдон объекти одитарини пойгоҳи додаҳо буда, барои
				нигаҳдории қиматҳои як параметри объекти воқеии
				тасвиршаванда хизмат мерасонад.</b><br>
				Азбаски дар пойгоҳи додаҳо оид ба параметрҳои зиёди объектҳои соҳаи мавзўи маълумот гирд оварда мешавад, бинобар он, ҷобаҷокунии (бақайдгирии) ин параметрҳо дар пойгоҳ масъалаи басо муҳим ба ҳисоб меравад. Масалан, агар маълумот оид ба ҳар як хонандаро дар намуди навишта тасвир намоем, ин мантиқан дуруст мебуд.
				<br><b>Навишта – ин маҷмўи қиматҳои параметрҳои объекти
				мушаххаси пойгоҳи додаҳо мебошад.</b><br>
				156
				Дар навишта тартиби ҷойгиршавии параметрҳо бояд чунин бошад: Насаб, Ном, Номи падар, Санаи таваллуд, Кўча, Хона, Манзил. Дар ин маврид доир ба ҳар як хонанда иттилооти заруриро зуд дастрас карда метавонем. Агар ин пайдарпайиро риоя накунем, он гоҳ ҷустуҷўи иттилооти зарури душвор мегардад. Барои муқоиса тартиби номуваффақи ҷойгиршавии ҳамин параметрҳоро дида мебароем: Хиёбони Рўдаки, Асозода, 19.03.2007, Хонаи 36/2, Мусо, ҳуҷраи 23, ҳабибулло. Тавре мебинем, дар пайдарпайи ҳатто ёфтани ному насаби хонанда низ бо душвори ба даст меояд.
				ҳамин тариқ, марҳалаи муҳими сохтани пойгоҳи додаҳоро коркарди сохтори навиштаи он ташкил медиҳад.
				<br><b>Сохтори навишта – ин маҷмўи мантиқан алоқаманди
				майдонҳои пойгоҳи додаҳо мебошад, ки онҳо параметрҳои
				объекти воқеиро тавсиф менамоянд.</b><br>
				Агар иттилоот оид ба объект дар шакли ҷадвал тасвир ёфта бошад, он гоҳ сатри якуми он ҳамеша номгўи параметрҳоро дар бар мегирад, яъне вай сохтори навиштаро муайян мекунад. Тамоми сатрҳои боқимонда бошад, навиштаҳоро ифода менамоянд.`,
				video: ['video/', 'video/'],
				test: [
					{
						question: 'Одам чанд дандони калони курси дорад?',
						answers: [
							{ id: false, test: '4-то' },
							{ id: true, test: '6-то' },
							{ id: false, test: '8-то' },
						],
					},
					{
						question: 'Глюкозаро кадом ғадуд танзим мекунад?',
						answers: [
							{ id: false, test: 'ҷоғар' },
							{ id: false, test: 'Оби даҳон.' },
							{ id: true, test: 'Зери меъда' },
						],
					},
				],
				task: 'Зери мафҳуми «майдон» чи фаҳмида мешавад?',
			},
		],
	},
];

const subject = getData(lessonArray, localData ? localData : 'math');
const literatures = setContent(subject);
setLesson(subject);

const tests = document.querySelectorAll('[data-test]');
const dataVideo = document.querySelectorAll('[data-video]');

//* Deligation
document.addEventListener('click', (e) => {
	switch (e.target) {
		case literaturesOfLesson:
			setList();
			break;

		case menu:
			document.body.classList.toggle('lock');
			header.classList.toggle('_active');
			break;
	}
});

let error = 0;
let truth = 0;

document.addEventListener('submit', (e) => {
	e.preventDefault();

	// if (e.target.querySelectorAll('[data-true]').length > 0)
	const input = e.target.querySelectorAll('[type="radio"]');
	const truthData = e.target.querySelectorAll('[data-true]');
	const btn = e.target.querySelector('.btn');
	const errModal = document.querySelector('.form__error');
	const submit = e.target.querySelector('.form__submit');
	e.target.scrollIntoView({ behavior: 'smooth' });

	if (input.length === 0) {
		errModal.textContent = 'Тугмаҳоро пахш кун ва ҷавоби дурустро интихоб кун';
		showFormModal();
	}

	input.forEach((item) => {
		if (item.checked) {
			if (item.dataset.task === 'false') {
				item.classList.add('_error');

				setInfoModal(error);
				showFormModal();
			} else {
				setInfoModal(truth);
				showFormModal();
			}
		}
	});

	function setInfoModal(arg = 'error') {
		arg === truth ? truth++ : error--;
		errModal.innerHTML = `ҷавобҳои дуруст ${truth} <br> ҷавобҳои нодуруст ${error}`;
		submit.setAttribute('disabled', '');
	}

	function showFormModal() {
		formModal.classList.add('_active');
		document.body.classList.add('lock');
	}
});

document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		header.classList.remove('_active');
		document.body.classList.remove('lock');
		formModal.classList.remove('_active');
	}
});

tests.forEach((item) => {
	item.addEventListener('click', (e) => setTests(subject, item));
});

dataVideo.forEach((item) => {
	item.addEventListener('click', (e) => {
		const data = item.dataset.video;
		const videoWrapper = document.querySelectorAll(
			'.accordeon__video .swiper-wrapper'
		);

		const slide = videoWrapper[data].querySelector('.swiper-slide');
		if (!slide) {
			subject.lessons[data].video.forEach((item) => {
				videoWrapper[data].insertAdjacentHTML(
					'beforeend',
					`
				<div class="main__item swiper-slide">
					<div class="video">
						<video controls src="${item}"></video>
					</div>
				<div>	
			`
				);
			});
			const showSlider = new Swiper('.swiper', {
				loop: false,
				slidesPerView: 1,
				spaceBetween: 30,
				speed: 1000,
				centeredSlides: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				// simulateTouch: false,
				// grabCursor: true, // меняет курсор
				slideToClickedSlide: true,
				keyboard: {
					enabled: true,

					onlyInViewport: true,
					pageUpDown: true,
				},
				// breakpoints: {
				// 	// when window width is >= 320px

				// 	320: {
				// 		slidesPerView: 1,
				// 		spaceBetween: 20,
				// 	},

				// 	640: {
				// 		slidesPerView: 2,
				// 		spaceBetween: 30,
				// 	},
				// },
			});
		}
	});
});

//! menu
const menu = document.querySelector('.header__menu span');
const header = document.querySelector('.header');
const title = document.querySelectorAll('.item');
const link = document.querySelectorAll('.list__link');
const list = document.querySelector('.list');
const accList = document.querySelector('.accordeon__list');
const literaturesOfLesson = document
	.querySelector('.accordeon__literature')
	.querySelector('.accordeon__sub-title');
const wrapper = document.querySelector('.wr');

//! lesson
const dataLesson = document.querySelectorAll('[data-lesson]');
const mainSubject = document.querySelector('.main__subject');
const mainLesson = document.querySelector('.main__lesson');
const formModal = document.querySelector('.form__modal');
const dataFormModal = document.querySelector('[data-formclose]');

const dataAccordeon = document.querySelectorAll('[data-accordeon]');

if (dataAccordeon.length > 0) {
	spoller(dataAccordeon);
}

function spoller(arg) {
	arg.forEach((item) => {
		item.addEventListener('click', (e) => {
			item.classList.toggle('_active');
			item.nextElementSibling.classList.toggle('_active');
		});
	});
}

function getData(obj, arg) {
	return obj.filter((item) => item.id === arg).find((i) => i);
}

//* teacher list
const teacher = [
	{
		id: 'math',
		teachers: [
			{
				name: 'Лангаршоева',
				id: 1,
				subject: 'литература',
				img: './img/teacher/1.jpg',
				video: 'video/1.mp4',
				practice:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, atque voluptate itaque vitae possimus molestias adipisci mollitia consequuntur! Sit iusto ipsam deleniti! Rem laudantium, id atque possimus eveniet autem delectus numquam reiciendis vitae odio nostrum nobis repellat porro consequuntur nihil ducimus, magni aut quasi magnam quisquam ad? Velit quis dolor omnis voluptate veniam magni iste ea impedit. Earum veniam iure ut eius sed minima error nam nesciunt! Similique eius, officia totam adipisci sint ipsum necessitatibus, aspernatur quam iusto labore commodi modi numquam dolorem sequi enim sapiente asperiores! Blanditiis officia quaerat obcaecati laboriosam, mollitia dolore, soluta placeat expedita tempore, nostrum totam ipsum cum ut animi asperiores illum rem provident incidunt neque. Quasi sunt iste distinctio fuga voluptatibus error doloribus consequuntur, provident, blanditiis facilis repellat accusantium, tempora molestiae porro autem optio quae. Dolore corporis laborum blanditiis quisquam illum enim ipsam doloremque architecto. Corporis voluptas illo eos officiis cum laborum maiores aut quia magni necessitatibus omnis, itaque ipsum ullam quas fugit, enim beatae facere hic quasi repellendus perspiciatis architecto. Temporibus eveniet ratione nobis. Rem nam corrupti non quibusdam numquam laborum totam minus assumenda nulla? Deleniti non nostrum sapiente pariatur explicabo facilis omnis unde natus, sit assumenda quia nesciunt laudantium voluptatibus, eligendi cum facere.',
				education: 'Училась в Душанбе работает с 1991 года',
				facebook: 'https://facebook',
			},

			{
				name: 'Марина Орлова',
				id: 1,
				subject: 'Алгебра',
				img: './img/teacher/2.jpg',
				video: 'video/',
				practice:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id minima amet sint illo sed?',
				education: 'Училась в Душанбе работает с 1991 года',
				facebook: 'https://facebook',
			},
		],
	},
	{
		id: 'biology',
		teachers: [
			{
				name: 'Муносибшоева Х',
				id: 1,
				subject: 'биология',
				img: './img/teacher/1.jpg',
				video: 'video/1.mp4',
				practice:
					'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, atque voluptate itaque vitae possimus molestias adipisci mollitia consequuntur! Sit iusto ipsam deleniti! Rem laudantium, id atque possimus eveniet autem delectus numquam reiciendis vitae odio nostrum nobis repellat porro consequuntur nihil ducimus, magni aut quasi magnam quisquam ad? Velit quis dolor omnis voluptate veniam magni iste ea impedit. Earum veniam iure ut eius sed minima error nam nesciunt! Similique eius, officia totam adipisci sint ipsum necessitatibus, aspernatur quam iusto labore commodi modi numquam dolorem sequi enim sapiente asperiores! Blanditiis officia quaerat obcaecati laboriosam, mollitia dolore, soluta placeat expedita tempore, nostrum totam ipsum cum ut animi asperiores illum rem provident incidunt neque. Quasi sunt iste distinctio fuga voluptatibus error doloribus consequuntur, provident, blanditiis facilis repellat accusantium, tempora molestiae porro autem optio quae. Dolore corporis laborum blanditiis quisquam illum enim ipsam doloremque architecto. Corporis voluptas illo eos officiis cum laborum maiores aut quia magni necessitatibus omnis, itaque ipsum ullam quas fugit, enim beatae facere hic quasi repellendus perspiciatis architecto. Temporibus eveniet ratione nobis. Rem nam corrupti non quibusdam numquam laborum totam minus assumenda nulla? Deleniti non nostrum sapiente pariatur explicabo facilis omnis unde natus, sit assumenda quia nesciunt laudantium voluptatibus, eligendi cum facere.',
				education: 'Училась в Душанбе работает с 1991 года',
				facebook: 'https://facebook',
			},

			{
				name: 'Марина Орлова',
				id: 1,
				subject: 'Алгебра',
				img: './img/teacher/2.jpg',
				video: 'video/',
				practice:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id minima amet sint illo sed?',
				education: 'Училась в Душанбе работает с 1991 года',
				facebook: 'https://facebook',
			},
		],
	},
];

function setContent({ title, introdaction, literatures }) {
	items.insertAdjacentHTML(
		'beforeend',
		`
		<div class="accordeon__introdaction">
		<h1 class="title">${title}</h1>
	
		<button data-accordeon class="accordeon__btn arrow"> Маълумот </button>
		<div class="accordeon__content">
			<p class="accordeon__text"> ${introdaction} </p>
	
			<div class="accordeon__e-book">
			<h2 data-accordeon class="accordeon__sub-title arrow">
				китобҳои электрони
			</h2>
			<div class="accordeon__content">
				<p class="accordeon__text">
					Дар телеграм ман барои ту китобҳоро омода кардам ба тугма пахш карда ба
					он гузар, дар онҷо ман маълумотҳои навро омода месозам
				</p>
				<a href="#" class="start">гузаштан</a>
			</div>
		</div>
	
		<div class="accordeon__literature">
			<h2 data-accordeon class="accordeon__sub-title arrow">
				адабиётҳо барои фан
			</h2>
			<div class="accordeon__content">
				<ul class="accordeon__list"> </ul>
			</div>
		</div>
	</div>
		</div>
	`
	);

	return literatures;
}

function setLesson({ lessons }) {
	lessons.forEach((item, index) => {
		items.insertAdjacentHTML(
			'beforeend',
			`
			<div class="accordeon__item">
				<button data-accordeon class="accordeon__btn arrow">
				${item.title}
				</button>
				<div class="accordeon__content">
				<h2 id="theory" class="accordeon__sub-title">
					Тиорема	
				</h2>
		
				<p class="accordeon__text">
					${item.theory}
				</p>
		
				<div class="accordeon__video">
					<h2 data-accordeon data-video=${index} class="accordeon__sub-title arrow">
						дарси водеои
					</h2>
					<div class="accordeon__content">
						<div class="subject__video swiper">
							<div class="swiper-wrapper"></div>
							<div class="swiper-button-next"></div>
							<div class="swiper-button-prev"></div>
						</div>
					</div>
				</div>
				<div  class="accordeon__test">
					<h2 data-accordeon data-test='${index}' class="accordeon__sub-title arrow">
						тестҳо
					</h2>
					<div class="accordeon__content">
						<form action="#" class="accordeon__form form__body">
							<button type="submit" class="form__submit">
								Ба пеш
							</button>
							
							</div>
						</form>
				</div>
				<div class="accordeon__exercise">
					<h2 data-accordeon class="accordeon__sub-title arrow">
						Машқ
					</h2>
					<div class="accordeon__content">
						<p class="accordeon__text">
						${item.task}
						</p>
					</div>
				</div>
			</div>
			`
		);
	});
}

function setModal() {
	const item = document.querySelectorAll(' [data-modal]');
	item.forEach((i) => {
		i.addEventListener('click', (e) => {
			const coach = document.querySelector('.main__coach');
			wrapper.parentElement.scrollIntoView({ behavior: 'smooth' });
			e.stopPropagation();

			const data = +i.dataset.modal;
			const getId = i.dataset.subject;
			const get = getData(teacher, getId);

			coach.insertAdjacentHTML(
				'beforeend',
				`
				<div data-mod class="modal">
					<div class="close">
					<span data-close></span>
					</div>
					<div class="_row">
					<div class="img">
						<img
							id="image"
							src="${get.teachers[data].img}"
							alt=""
	
						/>
					</div>
					<div class="left">
						<h2 id="modal-title" class="modal-title">
						${get.teachers[data].name}
						</h2>
						<div class="modal-text main__text">
							${get.teachers[data].subject}
						</div>
						<div class="modal__icon">
							<a id="facebook" href="${get.teachers[data].facebook}">
							<img src="./img/icon/Facebook.svg" alt="" />
							</a>
							<a id="instagram" href="${get.teachers[data].instagram}">
							<img
								src="./img/icon/Instagram.svg"
								alt=""
							/>
							</a>
						</div>
					</div>
					</div>
	
					<div class="tab">
					<ul class="list">
						<li class="item" data-tab="tab-1">
							<a href="#" class="list__link">Образование</a>
						</li>
						<li class="item" data-tab="tab-2">
							<a href="#" class="list__link"
							>Опыт работы
							</a>
						</li>
						<li class="item" data-tab="tab-3">
							<a href="#" class="list__link">Уроки</a>
						</li>
					</ul>
	
					<div
						class="tab-content"
						id="tab-1"
						data-tab-content
					>
						<div class="modal-title">Образование</div>
						<div class="main__text">
						${get.teachers[data].education}
						</div>
					</div>
	
					<div
						class="tab-content none"
						id="tab-2"
						data-tab-content
					>
						<div class="modal-title">Опыт работы</div>
						<div id="practice" class="main__text">
						${get.teachers[data].practice}
						</div>
					</div>
	
					<div
						class="tab-content none"
						id="tab-3"
						data-tab-content
					>
						<div class="modal-title">Уроки</div>
						<video
							controls
							src="${get.teachers[data].video}"
							class="modal__video"
						></video>
					</div>
					</div>
				`
			);

			showModal();

			//! tab
			const tabHeaders = document.querySelectorAll('[data-tab]');
			const contentBoxes = document.querySelectorAll('[data-tab-content]');

			//* tabs scripts
			tabHeaders.forEach((item) => {
				item.addEventListener('click', function () {
					// 1. скрыть все contentBox и скрыть
					contentBoxes.forEach(function (item) {
						item.classList.add('none');
					});
					// 2. выбрать нужный content box и показать его
					const contentBox = document.querySelector('#' + this.dataset.tab);
					contentBox.classList.remove('none');
				});
			});
		});
	});
}

function showModal() {
	const getModal = document.querySelector('[data-mod]');
	getModal.classList.add('_active');
	document.body.classList.add('lock');
	const closeBtn = document.querySelector('[data-close]');

	document.addEventListener('click', (e) => {
		e.target == closeBtn ? hideModal() : null;
	});

	document.addEventListener('keydown', (e) => {
		e.key == 'Escape' ? hideModal() : null;
	});

	function hideModal() {
		getModal.classList.remove('_active');
		document.body.classList.remove('lock');
	}
}

function setTeachers() {
	const { teachers } = getData(teacher, localData);
	teachers.forEach((item, index) => {
		wrapper.insertAdjacentHTML(
			'beforeend',
			`
		<div class="main__item swiper-slide">
		<div class="main__img">
		  <img  src="${item.img}" alt="" />
		</div>
  
		<h3 class="sub-title">${item.name}</h3>
		<div class="main__text">
		  омузгори фанни ${item.subject}
		</div>
  
		<button
		  data-modal="${index}" data-subject="math"
		  type="button"
		  class="detailed"
		>
		  Хондан
		</button>
	 </div>
			`
		);
	});

	setModal();
	const showSlider = new Swiper('.swiper-coach', {
		loop: false,
		slidesPerView: 1,
		spaceBetween: 30,
		speed: 1000,
		centeredSlides: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		// simulateTouch: false,
		// grabCursor: true, // меняет курсор
		slideToClickedSlide: true,
		keyboard: {
			enabled: true,

			onlyInViewport: true,
			pageUpDown: true,
		},
		// breakpoints: {
		// 	// when window width is >= 320px

		// 	320: {
		// 		slidesPerView: 1,
		// 		spaceBetween: 20,
		// 	},

		// 	640: {
		// 		slidesPerView: 2,
		// 		spaceBetween: 30,
		// 	},
		// },
	});
}

function setList() {
	literatures.forEach((item) => {
		accList.insertAdjacentHTML(
			'beforeend',
			`
		<li>${item}</li>
			`
		);
	});
}

function setTests({ lessons }, item) {
	const data = item.dataset.test;
	const form = document.querySelectorAll('.accordeon__form');
	const { test } = lessons[data];
	for (let i = test.length - 1; i >= 0; i--) {
		const item = test[i];
		form[data].insertAdjacentHTML(
			'afterbegin',
			`
					<h2>${item.question}</h2>
					<button data-answer="${i}" data-id="${data}" type="button" class="btn">вариантҳоро нишон додан</button>
					<div class="form__grid"></div>

				`
		);
	}

	setAnswer();
}

function showAnswer({ lessons }, item) {
	const answer = item.dataset.answer;
	const id = item.dataset.id;
	const form = item.nextElementSibling;
	const { test } = lessons[+id];
	const answers = [];
	item.remove();
	test[answer].answers.forEach((item, index) => {
		count++;
		form.insertAdjacentHTML(
			'beforeend',
			`
			<div class="form__item">
			  <input
				 type="radio"
				 name="test${answer}"
				data-task="${item.id}"
				id="test${count}"
				 class="accordeon__checkbox"
			  />
			  <label for="test${count}" class="accordeon__label"
				 >${item.test}</label
			  >
			</div>
			`
		);
	});
}

function setAnswer() {
	const answer = document.querySelectorAll('[data-answer]');
	const id = document.querySelectorAll('[data-id]');

	answer.forEach((item) => {
		item.addEventListener('click', (e) => {
			e.stopPropagation();
			showAnswer(subject, item);
		});
	});
}
