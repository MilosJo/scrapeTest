jQuery(function (e) {
    e.datepicker.regional["fi-fi"] = {
        closeText: 'Sulje',
        prevText: '&#xAB;Edellinen',
        nextText: 'Seuraava&#xBB;',
        currentText: 'Tänään',
        monthNames: ['Tammikuu','Helmikuu','Maaliskuu','Huhtikuu','Toukokuu','Kesäkuu',
		'Heinäkuu','Elokuu','Syyskuu','Lokakuu','Marraskuu','Joulukuu'],
        monthNamesShort: ['Tammi','Helmi','Maalis','Huhti','Touko','Kesä',
		'Heinä','Elo','Syys','Loka','Marras','Joulu'],
        dayNamesShort: ['Su','Ma','Ti','Ke','To','Pe','La'],
        dayNames: ['Sunnuntai','Maanantai','Tiistai','Keskiviikko','Torstai','Perjantai','Lauantai'],
        dayNamesMin: ['Su','Ma','Ti','Ke','To','Pe','La'],
        weekHeader: 'Vk',
        dateFormat: (typeof term_CalendarDateFormat !== 'undefined' && term_CalendarDateFormat !== 'term_CalendarDateFormat') ? term_CalendarDateFormat : 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''};
e.datepicker.setDefaults(e.datepicker.regional["fi-fi"])
});
jQuery(function (e) {
    e.datepicker.regional["sv-se"] = {
        closeText: 'Stäng',
        prevText: '&#xAB;Förra',
        nextText: 'Nästa&#xBB;',
        currentText: 'Idag',
        monthNames: ['Januari','Februari','Mars','April','Maj','Juni',
		'Juli','Augusti','September','Oktober','November','December'],
        monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun',
		'Jul','Aug','Sep','Okt','Nov','Dec'],
        dayNamesShort: ['Sön','Mån','Tis','Ons','Tor','Fre','Lör'],
        dayNames: ['Söndag','Måndag','Tisdag','Onsdag','Torsdag','Fredag','Lördag'],
        dayNamesMin: ['Sö','Må','Ti','On','To','Fr','Lö'],
        weekHeader: 'Ve',
        dateFormat: (typeof term_CalendarDateFormat !== 'undefined' && term_CalendarDateFormat !== 'term_CalendarDateFormat') ? term_CalendarDateFormat : 'yy-mm-dd',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''};
    e.datepicker.setDefaults(e.datepicker.regional["sv-se"])
});
jQuery(function (e) {
    e.datepicker.regional["it-it"] = {
        closeText: 'Chiudi',
        prevText: '&#x3C;Prec',
        nextText: 'Succ&#x3E;',
        currentText: 'Oggi',
        monthNames: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno',
			'Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
        monthNamesShort: ['Gen','Feb','Mar','Apr','Mag','Giu',
			'Lug','Ago','Set','Ott','Nov','Dic'],
        dayNames: ['Domenica','Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato'],
        dayNamesShort: ['Dom','Lun','Mar','Mer','Gio','Ven','Sab'],
        dayNamesMin: ['Do','Lu','Ma','Me','Gi','Ve','Sa'],
        weekHeader: 'Sm',
        dateFormat: (typeof term_CalendarDateFormat !== 'undefined' && term_CalendarDateFormat !== 'term_CalendarDateFormat') ? term_CalendarDateFormat : 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''};
    e.datepicker.setDefaults(e.datepicker.regional["it-it"])
});
jQuery(function (e) {
    e.datepicker.regional["en-us"] = {
        closeText: "Done",
        prevText: "Prev",
        nextText: "Next",
        currentText: "Today",
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        weekHeader: "Wk",
        dateFormat: (typeof term_CalendarDateFormat !== 'undefined' && term_CalendarDateFormat !== 'term_CalendarDateFormat') ? term_CalendarDateFormat : 'mm/dd/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ""
    };
    e.datepicker.setDefaults(e.datepicker.regional["en-us"])
});
jQuery(function (e) {
    e.datepicker.regional["en-gb"] = {
        closeText: 'Done',
        prevText: 'Prev',
        nextText: 'Next',
        currentText: 'Today',
        monthNames: ['January','February','March','April','May','June',
		'July','August','September','October','November','December'],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
		'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'],
        weekHeader: 'Wk',
        dateFormat: (typeof term_CalendarDateFormat !== 'undefined' && term_CalendarDateFormat !== 'term_CalendarDateFormat') ? term_CalendarDateFormat : 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''};
    e.datepicker.setDefaults(e.datepicker.regional["en-gb"])
});
jQuery(function (e) {
    e.datepicker.regional["de-de"] = {
        closeText: 'Schließen',
        prevText: '&#x3C;Zurück',
        nextText: 'Vor&#x3E;',
        currentText: 'Heute',
        monthNames: ['Januar','Februar','März','April','Mai','Juni',
		'Juli','August','September','Oktober','November','Dezember'],
        monthNamesShort: ['Jan','Feb','Mär','Apr','Mai','Jun',
		'Jul','Aug','Sep','Okt','Nov','Dez'],
        dayNames: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
        dayNamesShort: ['So','Mo','Di','Mi','Do','Fr','Sa'],
        dayNamesMin: ['So','Mo','Di','Mi','Do','Fr','Sa'],
        weekHeader: 'KW',
        dateFormat: (typeof term_CalendarDateFormat !== 'undefined' && term_CalendarDateFormat !== 'term_CalendarDateFormat') ? term_CalendarDateFormat : 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''};
    e.datepicker.setDefaults(e.datepicker.regional["de-de"])
});
jQuery(function (e) {
    e.datepicker.regional["zh-cn"] = {
        closeText: '关闭',
        prevText: '&#x3C;上月',
        nextText: '下月&#x3E;',
        currentText: '今天',
        monthNames: ['一月','二月','三月','四月','五月','六月',
		'七月','八月','九月','十月','十一月','十二月'],
        monthNamesShort: ['一月','二月','三月','四月','五月','六月',
		'七月','八月','九月','十月','十一月','十二月'],
        dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
        dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],
        dayNamesMin: ['日','一','二','三','四','五','六'],
        weekHeader: '周',
        dateFormat: (typeof term_CalendarDateFormat !== 'undefined' && term_CalendarDateFormat !== 'term_CalendarDateFormat') ? term_CalendarDateFormat : 'yy-mm-dd',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: true,
        yearSuffix: '年'};
    e.datepicker.setDefaults(e.datepicker.regional["zh-cn"])
});
jQuery(function (e) {
    e.datepicker.regional["zh-cht"] = {
        closeText: '关闭',
        prevText: '&#x3C;上月',
        nextText: '下月&#x3E;',
        currentText: '今天',
        monthNames: ['一月', '二月', '三月', '四月', '五月', '六月','七月', '八月', '九月', '十月', '十一月', '十二月'],
        monthNamesShort: ['一月', '二月', '三月', '四月', '五月', '六月','七月', '八月', '九月', '十月', '十一月', '十二月'],
        dayNames: ['星期日', '週一', '星期二', '星期三', '星期四', '星期五', '星期六'],
        dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
        weekHeader: '周',
        dateFormat: (typeof term_CalendarDateFormat !== 'undefined' && term_CalendarDateFormat !== 'term_CalendarDateFormat') ? term_CalendarDateFormat : 'yy-mm-dd',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: true,
        yearSuffix: '年'
    };
    e.datepicker.setDefaults(e.datepicker.regional["zh-cht"])
});

jQuery(function (e) {
    e.datepicker.regional["nl-nl"] = {
        closeText: 'Sluiten',
        prevText: '←',
        nextText: '→',
        currentText: 'Vandaag',
        monthNames: ['januari', 'februari', 'maart', 'april', 'mei', 'juni',
		'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
        monthNamesShort: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun',
		'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
        dayNames: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
        dayNamesShort: ['zon', 'maa', 'din', 'woe', 'don', 'vri', 'zat'],
        dayNamesMin: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
        weekHeader: 'Wk',
        dateFormat: (typeof term_CalendarDateFormat !== 'undefined' && term_CalendarDateFormat !== 'term_CalendarDateFormat') ? term_CalendarDateFormat : 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''};
    e.datepicker.setDefaults(e.datepicker.regional["nl-nl"])
});
jQuery(function (e) {
    e.datepicker.regional["fr-fr"] = {
        closeText: 'Fermer',
        prevText: 'Précédent',
        nextText: 'Suivant',
        currentText: 'Aujourd\'hui',
        monthNames: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin',
			'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
        monthNamesShort: ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin',
			'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
        dayNames: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
        dayNamesShort: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
        dayNamesMin: ['D','L','M','M','J','V','S'],
        weekHeader: 'Sem.',
        dateFormat: (typeof term_CalendarDateFormat !== 'undefined' && term_CalendarDateFormat !== 'term_CalendarDateFormat') ? term_CalendarDateFormat : 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''};
    e.datepicker.setDefaults(e.datepicker.regional["fr-fr"])
});
jQuery(function (e) {
    e.datepicker.regional["ro-ro"] = {
        closeText: 'Închide',
        prevText: '&#xAB; Luna precedentă',
        nextText: 'Luna următoare &#xBB;',
        currentText: 'Azi',
        monthNames: ['Ianuarie','Februarie','Martie','Aprilie','Mai','Iunie',
		'Iulie','August','Septembrie','Octombrie','Noiembrie','Decembrie'],
        monthNamesShort: ['Ian', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun',
		'Iul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        dayNames: ['Duminică', 'Luni', 'Marţi', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă'],
        dayNamesShort: ['Dum', 'Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'Sâm'],
        dayNamesMin: ['Du','Lu','Ma','Mi','Jo','Vi','Sâ'],
        weekHeader: 'Săpt',
        dateFormat: (typeof term_CalendarDateFormat !== 'undefined' && term_CalendarDateFormat !== 'term_CalendarDateFormat') ? term_CalendarDateFormat : 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''};
    e.datepicker.setDefaults(e.datepicker.regional["ro-ro"])
});
jQuery(function (e) {
    e.datepicker.regional["da-dk"] = {
        closeText: 'Luk',
        prevText: '&#x3C;Forrige',
        nextText: 'Næste&#x3E;',
        currentText: 'Idag',
        monthNames: ['Januar','Februar','Marts','April','Maj','Juni',
		'Juli','August','September','Oktober','November','December'],
        monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun',
		'Jul','Aug','Sep','Okt','Nov','Dec'],
        dayNames: ['Søndag','Mandag','Tirsdag','Onsdag','Torsdag','Fredag','Lørdag'],
        dayNamesShort: ['Søn','Man','Tir','Ons','Tor','Fre','Lør'],
        dayNamesMin: ['Sø','Ma','Ti','On','To','Fr','Lø'],
        weekHeader: 'Uge',
        dateFormat: (typeof term_CalendarDateFormat !== 'undefined' && term_CalendarDateFormat !== 'term_CalendarDateFormat') ? term_CalendarDateFormat : 'dd-mm-yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''};
    e.datepicker.setDefaults(e.datepicker.regional["da-dk"])
});
jQuery(function (e) {
    e.datepicker.regional["ru-ru"] = {
        closeText: 'Закрыть',
        prevText: '&#x3C;Пред',
        nextText: 'След&#x3E;',
        currentText: 'Сегодня',
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
		'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
		'Июл','Авг','Сен','Окт','Ноя','Дек'],
        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        weekHeader: 'Нед',
        dateFormat: (typeof term_CalendarDateFormat !== 'undefined' && term_CalendarDateFormat !== 'term_CalendarDateFormat') ? term_CalendarDateFormat : 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''};
    e.datepicker.setDefaults(e.datepicker.regional["ru-ru"])
});
jQuery(function (e) {
    e.datepicker.regional["es-es"] = {
        closeText: 'Cerrar',
        prevText: '&#x3C;Ant',
        nextText: 'Sig&#x3E;',
        currentText: 'Hoy',
        monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio',
		'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
        monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun',
		'Jul','Ago','Sep','Oct','Nov','Dic'],
        dayNames: ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'],
        dayNamesShort: ['dom','lun','mar','mié','juv','vie','sáb'],
        dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sa'],
        weekHeader: 'Sm',
        dateFormat: (typeof term_CalendarDateFormat !== 'undefined' && term_CalendarDateFormat !== 'term_CalendarDateFormat') ? term_CalendarDateFormat : 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''};
    e.datepicker.setDefaults(e.datepicker.regional["es-es"])
});
jQuery(function (e) {
    e.datepicker.regional["es-mx"] = {
        closeText: 'Cerrar',
        prevText: '&#x3C;Ant',
        nextText: 'Sig&#x3E;',
        currentText: 'Hoy',
        monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio',
		'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
        monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun',
		'Jul','Ago','Sep','Oct','Nov','Dic'],
        dayNames: ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'],
        dayNamesShort: ['dom','lun','mar','mié','juv','vie','sáb'],
        dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sa'],
        weekHeader: 'Sm',
        dateFormat: (typeof term_CalendarDateFormat !== 'undefined' && term_CalendarDateFormat !== 'term_CalendarDateFormat') ? term_CalendarDateFormat : 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''};
    e.datepicker.setDefaults(e.datepicker.regional["es-mx"])
});
jQuery(function (e) {
    e.datepicker.regional["pt-pt"] = {
        closeText: 'Fechar',
        prevText: 'Anterior',
        nextText: 'Seguinte',
        currentText: 'Hoje',
        monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho',
		'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
        monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun',
		'Jul','Ago','Set','Out','Nov','Dez'],
        dayNames: ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'],
        dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'],
        dayNamesMin: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'],
        weekHeader: 'Sem',
        dateFormat: (typeof term_CalendarDateFormat !== 'undefined' && term_CalendarDateFormat !== 'term_CalendarDateFormat') ? term_CalendarDateFormat : 'dd-mm-yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''};
    e.datepicker.setDefaults(e.datepicker.regional["pt-pt"])
});
jQuery(function(e) {
    e.datepicker.regional["pl-pl"] = {
        closeText: "Gotowy",
        prevText: "Poprzedni",
        nextText: "Następny",
        currentText: "Hoje",
        monthNames: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Paździemik", "Listopad", "Grudzień"],
        monthNamesShort: ["Stycz", "Lut", "Mar", "Kwie", "Maj", "Czerw", "Lip", "Sierp", "Wrzes", "Parzd", "List", "Grud"],
        dayNames: ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"],
        dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
        dayNamesMin: ["pn", "wt", "śr", "czw", "pt", "sb", "nd"],
        weekHeader: "Dzień",
        dateFormat: typeof term_CalendarDateFormat !== "undefined" && term_CalendarDateFormat !== "term_CalendarDateFormat" ? term_CalendarDateFormat : "dd-mm-yyyy",
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ""
    };
    e.datepicker.setDefaults(e.datepicker.regional["pl-pl"])
});
jQuery(function (e) {
    e.datepicker.regional["zh-TW"] = {
        closeText: "收盤價",
        prevText: "以前",
        nextText: "下一個",
        currentText: "今日",
        monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        dayNames: ["周一，周二，周三，周四，周五，周六，周日"],
        dayNamesShort: ["周一，周二，周三，周四，周五，周六，周日"],
        dayNamesMin: ["周一，周二，周三，周四，周五，周六，周日"],
        weekHeader: "年",
        dateFormat: typeof term_CalendarDateFormat !== "undefined" && term_CalendarDateFormat !== "term_CalendarDateFormat" ? term_CalendarDateFormat : "dd-mm-yyyy",
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ""
    };
    e.datepicker.setDefaults(e.datepicker.regional["zh-TW"])
});


jQuery(function (e) {
    e.datepicker.regional["et-EE"] = {
        closeText: 'Valmis',
        prevText: 'Eelmine',
        nextText: 'Järgmine',
        currentText: 'Täna',
        monthNames: ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"],
        monthNamesShort: ["Jaan", "Veebr", "Märts", "Apr", "Mai", "Juuni", "Juuli", "Aug", "Sept", "Okt", "Nov", "Dets"],
        dayNames: ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"],
        dayNamesShort: ["E", "T", "K", "N", "R", "L", "P"],
        dayNamesMin: ["E", "T", "K", "N", "R", "L", "P"],
        weekHeader: 'Nädal',
        dateFormat: (typeof term_CalendarDateFormat !== 'undefined' && term_CalendarDateFormat !== 'term_CalendarDateFormat') ? term_CalendarDateFormat : 'dd-mm-yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    e.datepicker.setDefaults(e.datepicker.regional["et-EE"])
});