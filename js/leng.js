// Смена языка на Русский язык
const lengArray = { //Выберете язык leng_ru
	"unit": {
		"ru": "Апельсин",
		"en": "Apelsyn",
		"ua": "Апельсин",
	},
	"ch": {
		"ru": "Выберете язык",
		"en": "Choose language",
		"ua": "Виберіть мову",
	},
	"chengeText": {
		"ru": "Выберете язык",
		"en": "Choose language",
		"ua": "Апельсин",
	},
	"slogan": {
		"ru": "Мы создаем дизайн web-сайтов и мобильных приложений",
		"en": "We develop websites and mobile applications",
		"ua": "Ми розробляємо веб-сайти та мобільні додатки",
	},
	"popup": {
		"ru": "Мы свяжемся с вами",
		"en": "We call you",
		"ua": "Ми зв'яжемся з вами",
	},
	"menu__item-1": {
		"ru": "Работы Apelsyn",
		"en": "Works Apelsyn",
		"ua": "Роботи Apelsyn",
	},
	"menu__item-2": {
		"ru": "Рабочий процес",
		"en": "Workflow",
		"ua": "Робочий процес",
	},
	"menu__item-3": {
		"ru": "Prices",
		"en": "Цены",
		"ua": "Ціни",
	},
	"menu__item-4": {
		"ru": "Отзывы",
		"en": "Reviews",
		"ua": "Відгуки",
	},
	"menu__item-5": {
		"ru": "Контакты",
		"en": "Contacts",
		"ua": "Контакти",
	},
	//-----------------------------------
	"popup_title": {
		"ru": "Мы звоним вам",
		"en": "We are call you",
		"ua": "Ми дзвонимо вам",
	},
	"popup_text": {
		"ru": "Lorem ipsum dolor sit amet",
		"en": "Lorem ipsum dolor sit amet",
		"ua": "Lorem ipsum dolor sit amet",
	},
	//-----------------------------------
	"works__title": {
		"ru": "Работы Apelsyn",
		"en": "Works Apelsyn",
		"ua": "Роботи Apelsyn",
	},
	"cards__title-web": {
		"ru": "Web сайты:",
		"en": "Web sites",
		"ua": "Web сайти",
	},
	"item__name-web": {
		"ru": "Web сайт",
		"en": "Web sites",
		"ua": "Web сайт",
	},
	//---------------------------------
	"item__name-mobile": {
		"ru": "Мобильное приложение",
		"en": "Mobile app",
		"ua": "Мобільний додаток",
	},
	"cards__title-mobile": {
		"ru": "Мобильный дизайн",
		"en": "Mobile Designe",
		"ua": "Мобільний дизайн",
	},
	//------------------------------------
	"proces__title": {
		"ru": "Рабочий процес Apelsyn",
		"en": "Apelsyn workflow",
		"ua": "Робочий процес Apelsyn",
	},
	"cards__title-proces": {
		"ru": "Процесс имет 4 интервью",
		"en": "The process has 4 interviews",
		"ua": "Процес має 4 інтерв'ю",
	},
	"item__content-proces-span": {
		"ru": "Интервью:",
		"en": "Interviews:",
		"ua": "Інтерв'ю:",
	},
	"item__content-proces-1": {
		"ru": "Определение сферы бизнеса; Сбор информации; Определение ЦА; Вопросы для сбора контента.",
		"en": "Definition of business scope; Collection of information; Definition of target audience; Questions to collect content.",
		"ua": "Визначення сфери бізнесу; Збір інформації; Визначення ЦА; Запитання для збирання контенту.",
	},
	"item__content-proces-2": {
		"ru": "Утверждение текстового прототипа; Утверждение картинок и цветовой палитры;",
		"en": "Approval of the text prototype; Approval of pictures and color palette;",
		"ua": "Затвердження текстового прототипу; Затвердження картинок та палітри кольорів;",
	},
	"item__content-proces-3": {
		"ru": "Утверждение чернобелого скетча.",
		"en": "Black and white sketch approval.",
		"ua": "Затвердження чорнобілого скетчу.",
	},
	"item__content-proces-4": {
		"ru": "Утверждение макета сайта(приложения), Отправка файлов програмистам.",
		"en": "Approval of the layout of the site (application), Sending files to programmers.",
		"ua": "Затвердження макету сайту (додатки), Відправлення файлів програмісту(верстальнику).",
	},
	//-------------------------------------
	"price__title": {
		"ru": "Цены",
		"en": "Price",
		"ua": "Ціни",
	},
	"price__sub-title": {
		"ru": "Стоимость работы 1час 5$ доларов.",
		"en": "The cost of work for 1 hour is $5.",
		"ua": "Вартість роботи 1година 5 $ доларів.",
	},
	"content__item-price-1": {
		"ru": "Рабочее время",
		"en": "Working time",
		"ua": "Робочий час",
	},
	"content__item-price-2": {
		"ru": "4 интервью с заказчиком",
		"en": "4 interviews with the customer",
		"ua": "4 інтерв'ю із замовником",
	},
	"content__item-price-3": {
		"ru": "Час обеда",
		"en": "Lunch hour",
		"ua": "Година обіду",
	},
	"content__item-price-4": {
		"ru": "Количество интервью может изменятся от сложности проэкта.",
		"en": "The number of interviews may vary depending on the complexity of the project.",
		"ua": "Кількість інтерв'ю може змінюватись від складності проекту.",
	},
	//--------------------------------
	"reviews__title": {
		"ru": "Отзывы",
		"en": "Reviews",
		"ua": "Відгуки",
	},
	"reviews__content": {
		"ru": "Удовлетворены работай, было 4 встречи. На четвертой встрече мы получили файл для передачи програмистам.",
		"en": "Satisfied with work, there were 4 meetings. At the fourth meeting, we received a file to hand over to the programmers.",
		"ua": "Задоволені роботою, було 4 зустрічі. На четвертій зустрічі ми отримали файл для передачі програмістам.",
	},
	//--------------------------------
	"menu__footer-1": {
		"ru": "Работы Apelsyn",
		"en": "Works Apelsyn",
		"ua": "Роботи Apelsyn",
	},
	"menu__footer-2": {
		"ru": "Рабочий процес",
		"en": "Workflow",
		"ua": "Робочий процес",
	},
	"menu__footer-3": {
		"ru": "Prices",
		"en": "Цены",
		"ua": "Ціни",
	},
	"menu__footer-4": {
		"ru": "Отзывы",
		"en": "Reviews",
		"ua": "Відгуки",
	},
	"menu__footer-5": {
		"ru": "Контакты",
		"en": "Contacts",
		"ua": "Контакти",
	},
};