const container = document.querySelector('.container');
const menu = document.querySelector('.header__menu span');

document.addEventListener('click', (e) => {
	console.log(e.target);
	e.stopImmediatePropagation();
	console.log(e.target);
	switch (e.target) {
		case menu:
			document.body.classList.toggle('lock');
			header.classList.toggle('_active');
			break;
	}
});

const univer = [
	{
		id: 'oxford',
		image: 'img/oxf.jpg',
		text: `- Поступление: Процесс поступления включает подачу заявления через UCAS, прохождение вступительных испытаний и участие в собеседованиях. Требования к кандидатам высоки, включая отличные оценки и мотивационное письмо.
      - Студенческая жизнь: Студенты Оксфорда живут в колледжах, которые предоставляют жилье и поддержку. В университете множество спортивных команд, клубов и обществ. - Студенты живут и учатся в колледжах, которые являются маленькими академическими общинами.
      - Колледжи предоставляют жилье, питание, библиотеки, спортивные и социальные удобства.
      - Студенты участвуют в многочисленных клубах и обществах, от академических и профессиональных до творческих и спортивных.
      - Сильное академическое давление и высокие ожидания, но также и поддержка со стороны преподавателей и наставников. Больше информации можно найти на официальном сайте Оксфорда.
      <br>1. Подача заявления через UCAS: Кандидаты подают заявление на учебу через онлайн-систему UCAS, указывая выбранные программы и колледжи.
      <br>2. Вступительные экзамены: Для некоторых специальностей требуются специализированные вступительные экзамены.
      <br>3. Собеседование: Выбранные кандидаты приглашаются на интервью, которое может включать академические вопросы и задачи.
      <br>4. Предложение о зачислении: Успешные кандидаты получают предложение, которое часто зависит от результатов их квалификационных экзаменов.
      <br> 


Оксфорд и Кембридж:
- Оба университета предлагают стипендии и гранты для студентов, которые нуждаются в финансовой поддержке.
- Существуют также займы для студентов из Великобритании и ЕС.
- Многие колледжи предлагают свои собственные стипендии и фонды поддержки.




Для всех университетов важными факторами являются академические достижения, внеклассная и волонтерская деятельность, мотивационные письма и эссе, которые отражают личные качества и заинтересованность в выбранной области знаний. Кандидатам рекомендуется тщательно ознакомиться с требованиями и процедурой поступления на интересующие их программы и начать подготовку заранее.   
      `,
		url: 'https://www.ox.ac.uk/admissions/undergraduate/student-life',
	},
	{
		id: 'cambridge',
		image: 'img/cambridge.jpg',
		text: `
      - Поступление: Аналогично Оксфорду, поступление требует подачи заявления через UCAS, успешного прохождения вступительных экзаменов и собеседований. Важным является высокий уровень академических достижений.
      - Студенческая жизнь: Студенты Кембриджа также живут в колледжах, которые являются центрами социальной и академической жизни. Студентам доступны различные виды спорта, искусства и другие внеклассные активности.  Подробности на сайте Кембриджа.
      <br>1. Подача заявления через UCAS: Кандидаты подают заявление на учебу через онлайн-систему UCAS, указывая выбранные программы и колледжи.
      <br>2. Вступительные экзамены: Для некоторых специальностей требуются специализированные вступительные экзамены.
      <br>3. Собеседование: Выбранные кандидаты приглашаются на интервью, которое может включать академические вопросы и задачи.
      <br>4. Предложение о зачислении: Успешные кандидаты получают предложение, которое часто зависит от результатов их квалификационных экзаменов.
      <br>



Оксфорд и Кембридж:
- Оба университета предлагают стипендии и гранты для студентов, которые нуждаются в финансовой поддержке.
- Существуют также займы для студентов из Великобритании и ЕС.
- Многие колледжи предлагают свои собственные стипендии и фонды поддержки.


Для всех университетов важными факторами являются академические достижения, внеклассная и волонтерская деятельность, мотивационные письма и эссе, которые отражают личные качества и заинтересованность в выбранной области знаний. Кандидатам рекомендуется тщательно ознакомиться с требованиями и процедурой поступления на интересующие их программы и начать подготовку заранее.   
`,
		url: 'https://www.undergraduate.study.cam.ac.uk/student-life',
	},
	{
		id: 'harvard',
		image: 'img/harvard.jpg',
		text: `
      - Поступление: Гарвард имеет один из самых конкурентных процессов поступления в мире, включающий подачу заявления, эссе, рекомендательные письма и стандартизированные тесты (например, SAT или ACT).
      - Студенческая жизнь: Студенты Гарварда участвуют в широком спектре активностей, включая спорт, театр, музыку и множество студенческих организаций. Жизнь на кампусе насыщенная и разнообразная. - Студенты Гарварда могут проживать в кампусе, который предлагает богатую социальную жизнь и сеть поддержки.
      - Возможности для исследований, стажировок и международного обмена.
      - Широкий спектр студенческих организаций, включая культурные, политические и волонтерские группы.
      - Доступ к передовым ресурсам, лекциям мирового класса и событиям. Больше информации доступно на сайте Гарварда.
   <br>   1. Common Application или Coalition Application: Кандидаты подают заявление через одну из этих платформ, включая эссе и информацию о достижениях.
2. Стандартизированные тесты: SAT или ACT, а также возможно требование SAT Subject Tests.<br>
3. Рекомендательные письма: От учителей и наставников.<br>
4. Дополнительные материалы: Включая портфолио, исследовательские работы или музыкальные записи, в зависимости от специальности. <br>
5. Интервью: С алюмни или представителем приемной комиссии.<br>

- Гарвард известен своей политикой финансовой помощи "need-blind admission", что означает, что способность студента платить не влияет на его шансы быть принятым.
- Университет предоставляет значительную финансовую помощь на основе демонстрируемой финансовой потребности.
- Более 50% студентов получают стипендии, и многие выпускники заканчивают обучение без долговых обязательств.




Для всех университетов важными факторами являются академические достижения, внеклассная и волонтерская деятельность, мотивационные письма и эссе, которые отражают личные качества и заинтересованность в выбранной области знаний. Кандидатам рекомендуется тщательно ознакомиться с требованиями и процедурой поступления на интересующие их программы и начать подготовку заранее.
      `,
		url: 'https://college.harvard.edu/student-life',
	},
];

function getData(arr, id) {
	return arr.filter((item) => item.id == id).find((item) => item);
}

function dis({ id, image, text, url }) {
	container.insertAdjacentHTML(
		'beforeend',
		`
         <div class="main__header">
         <div class="main__img">
            <img src="${image}" alt="oxford" />
         </div>
         <h1 class="title">${id}</h1>
         </div>
         <div class="main__content">
            <p>${text}</p>
            <a id="web" class="start" href="${url}"
               >Сомонаи донишгоҳ</a
            >
         </div>
   `
	);
}

const item = localStorage.getItem('univer');

dis(getData(univer, item));