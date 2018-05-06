




/*
     FILE ARCHIVED ON 1:38:57 Nov 1, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:08:48 May 29, 2014.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
var BBComplex=function(){

//Переменные настроек(пользовательские)
//Настройка
 //Общие настройки
  //Путь к папке с иконками для ВСЕХ кодов, использующих иконки. Все пути иконок будут работать относительно значения этой переменной, так что будьте внимательны.
var DefMsgIconUrl="../../js/bb/
  //Запретить обработку BB-кодов в блоках [code]...[/code]
var disableBBInCode=true;
  //Массив обработки BB-Кодов
var _tag_array=function(){return([
_tag_array_cut(),
_tag_array_tbl(),
_tag_array_flv(),
_tag_array_off(),
_tag_array_icq(),
_tag_array_stext(),
_tag_array_dashedu(),
_tag_array_doubleu(),
_tag_array_indent(),
_tag_array_flash(),
_tag_array_wavy_green_u(),
_tag_array_wavy_red_u(),
_tag_array_highlight(),
_tag_array_move(),
_tag_array_notice(),
_tag_array_warn(),
_tag_array_blink(),
_tag_array_ancor(),
_tag_array_teletype()
]);}
 /*
   Внимание! Обрабатываются только те коды, которые содержатся в этом массиве!
   Если вам не нужны некоторые BB-Коды, то их следует удалять из этого массива.
   
   Вы можете создавать свои BB-Коды. Они могут быть двух типов: одинарные(как [hr]) либо с начальным и конечным тегом(как [b]<...>[/b]). Для BB-Кодов с начальным и конечным тегом вы должны определить функцию вида:

var _tag_array_XXX=function(){return([
 ["Type",4],
 ["Value","YYY"],
 ["Code",["AAA","BBB"]]
]);}

   Где XXX - индентификатор BB-Кода, YYY - его BB-Тег, AAA - начало кода вашего BB-Кода, BBB - конец кода вашего BB-Кода.
   AAA(начало кода вашего BB-Кода) или BBB(конец кода вашего BB-Кода) могут содержать специальные маркеры вида {$n:...}. Они будут указывать на то, что в результирующем коде место постановки маркера будет заполняться значенем n'ного параметра в теге BB-Кода при указании параметров после знака "=" через запятую. Если BB-Код вызывается без параметров, то будет использоваться значение, которое стоит после ':'. Если таких значений не стоит, то маркер будет пуст. К примеру:

var _tag_array_TEST=function(){return([
 ["Type",4],
 ["Value","бНОПНЯ"],
 ["Code",["бНОПНЯ1: '{$0:ПРЕВЕД МЕДВЕД}'",""]]
));}

   будет преобразовывать [бНОПНЯ][/бНОПНЯ] в бНОПНЯ1: 'ПРЕВЕД МЕДВЕД', а [бНОПНЯ=DDDD][/бНОПНЯ] - в бНОПНЯ1: 'DDDD'. Если же написать "бНОПНЯ1: '{$0}'", то результат будет соответственно бНОПНЯ1: '' и бНОПНЯ1: 'DDDD'.

   В кодах доступен также маркер $INNERHTML$, который будет указывать на то, что в результирующем коде место постановки маркера будет заполняться содержимым, находящимся между [код<...>] и [/код], а изначальное содержимое после записи на место маркера будет уничтожаться. Стоит также отметить, что BB-Код, использующий данный маркер, должен быть непрерывным, то есть начало кода и конец должны находиться в одном логически обрабатываемом блоке. Границами таких блоков могут быть либо границы сообщения либо границы логического необрабатываемого блока BB-Кода [code]<...>[/code]. При использовании данного маркера вторая часть кодов(после запятой) должна оставаться пустой - она не будет использоваться. Пример использования маркера $INNERHTML$:

var _tag_array_TEST=function(){return([
 ["Type",4],
 ["Value","бНОПНЯ"],
 ["Code",["бНОПНЯ1: '$INNERHTML$'",""]]
]);}

   Результатом обработки кода [бНОПНЯ]ПРЕВЕД МЕДВЕД[/бНОПНЯ] в этом случае будет бНОПНЯ1: 'ПРЕВЕД МЕДВЕД'.

   Если BB-Код должен принимать больше одного параметра, то их нужно соответственно указывать с нужными номерами - {$1},{$2},{$3} и т.п. Чтобы указать больше одного параметра при вставке BB-кода, нужно перечислить их через запятую. К примеру, [код=параметр1,параметр1,параметр3]текст[/код].

   Для одинарных тегов всё гораздо проще. Вы должны определить функцию вида:

var _tag_array_MMM=function(){return([
 ["Type",3],
 ["Value","YYY"],
 ["Code","AAA"]
]);}

   Маркер $BBID$ означает уникальное для каждого обработанного BB-Кода ID, которое может использоваться для управления результатом обработки после его обработки. К примеру, для конструкций вида node.getElementById(...)

   После того, как закончите с функциями, вы должны дописать их вызов в массив _tag_array, к примеру:

_tag_array_XXX(),
_tag_array_MMM()

   Учтите, что после последнего элемента массива не нужно ставить запятую.
*/

 //Дополнительные теги оформления текста
  //Подчеркивание пунктиром
var defDashed="dashed";
var _tag_array_dashedu=function(){return([
 ["Type",4],
 ["Value",defDashed],
 ["Code",['<font style="line-height: 1.5;border-bottom: 1px dashed;">','</font>']]
]);}
  //Двойное подчеркивание
var defDouble="double";
var _tag_array_doubleu=function(){return([
 ["Type",4],
 ["Value",defDouble],
 ["Code",['<font style="line-height: 1.5;border-bottom: 3px double;">','</font>']]
]);}
  //Волнистое подчеркивание
   //Зеленое
var defWawygreen="wavygreen";
var _tag_array_wavy_green_u=function(){return([
 ["Type",4],
 ["Value",defWawygreen],
 ["Code",['<font style="line-height: 1.5;background: url(\''+DefMsgIconUrl+'wave_green.gif\') repeat-x 100% 100%;white-space: nowrap;padding-bottom: 2px;">','</font>']]
]);}
   //Красное
var defWawyred="wavyred";
var _tag_array_wavy_red_u=function(){return([
 ["Type",4],
 ["Value",defWawyred],
 ["Code",['<font style="line-height: 1.5;background: url(\''+DefMsgIconUrl+'wave_red.gif\') repeat-x 100% 100%;white-space: nowrap;padding-bottom: 2px;">','</font>']]
]);}
  //"Мигающий" текст
var defBlink="blink";
var defBlinkTimeout=900;
var _tag_array_blink=function(){return([
 ["Type",4],
 ["Value",defBlink],
 ["Code",['<span name="UBlinkA">','</span>']]
]);}
  //Подсветка текста
var defHighlight="bgcolor";
var _tag_array_highlight=function(){return([
 ["Type",4],
 ["Value",defHighlight],
 ["Code",['<span style="background-color:{$0:transparent}">','</span>']]
]);}
  //Отступ
var defIndent="indent";
var _tag_array_indent=function(){return([
 ["Type",4],
 ["Value",defIndent],
 ["Code",['<div style="padding-left:20px;display:inline-block;">','</div>']]
]);}

 //"Уведомление" и "Предупреждение"
var defNotice="notice";
var _tag_array_notice=function(){return([
 ["Type",4],
 ["Value",defNotice],
 ["Code",['<div class="bbNoticeBlock"><div class="bbNoticeName" style="padding-left:5px;font-weight:bold;">Уведомление</div><div class="bbNoticeMessage" style="border:1px inset;max-height:200px;overflow:auto;"><img src="'+DefMsgIconUrl+'misc/notice.gif" align="left" border="0" />','</div></div>']]
]);}

var defWarn="warn";
var _tag_array_warn=function(){return([
 ["Type",4],
 ["Value",defWarn],
 ["Code",['<div class="bbWarningBlock"><div class="bbWarningName" style="padding-left:5px;font-weight:bold;">Предупреждение</div><div class="bbWarningMessage" style="border:1px inset;max-height:200px;overflow:auto;"><img src="'+DefMsgIconUrl+'misc/warn.gif" align="left" border="0" />','</div></div>']]
]);}

  //Моноширинный teletype-текст
var defTT="tt";
var _tag_array_teletype=function(){return([
 ["Type",4],
 ["Value",defTT],
 ["Code",['<tt>','</tt>']]
]);}

  //Ярлыки
var defAncor="ancor";
var _tag_array_ancor=function(){return([
 ["Type",4],
 ["Value",defAncor],
 ["Code",['<a name="bb_{$0}">','</a>']]
]);}


 //ICQ
  //Тег BB-Кода ICQ
var defICQ='icq';
  //Заголовок
var defICQTitle='ICQ: ';
  //Вариант картинки
var defICQPictVariant=5;
  //Определение обработки BB-Кода ICQ
var _tag_array_icq=function(){return([
 ["Type",4],
 ["Value",defICQ],
 ["Code",[defICQTitle+'<span class="bbICQ"><img src="../../scripts/online.dll?icq=$INNERHTML$&img='+defICQPictVariant+'
]);}


 //Вспывающий текст
  //Тег BB-Кода на всплывающий текст
var defSText='show';
  //Заголовок по-умолчанию
var defSTextTitle='Наведите указатель мыши для просмотра';
  //Определение обработки вспывающего текста
var _tag_array_stext=function(){return([
 ["Type",4],
 ["Value",defSText],
 ["Code",['<span class="bbSText" title="$INNERHTML$">[{$0:'+defSTextTitle+'}]</span>']]
]);}


 //Оффтопик
  //Тег BB-Кода на оффтопик
var defOff='off';
  //Заголовок оффтопика
var defOffMsgTitle='Оффтопик';
  //Определение обработки оффтопика
var _tag_array_off=function(){return([
 ["Type",4],
 ["Value",defOff],
 ["Code",['<div class="bbOffBlock"><div class="bbOffName" style="padding-left:5px;font-weight:bold;font-size:7pt">'+defOffMsgTitle+'</div><div class="offtopicMessage" style="color: gray;border:1px inset;max-height:200px;overflow:auto;height:expression(this.scrollHeight>230?\'200px\':\'auto\');">','</div></div>']]
]);}


 //Бегущая строка
  //Тег BB-Кода на бегущую строку
var defMove='move';
  //Определение обработки бегущих строк
var _tag_array_move=function(){return([
 ["Type",4],
 ["Value",defMove],
 ["Code",['<marquee behavior="scroll">','</marquee>']]
]);}

 //Подключение Flash
  //Тег BB-Кода на подключение Flash
var defFlash='flash';
  //Цвет фона
var defFlashBackground="#ffffff";
  //Определение обработки подключения Flash
var _tag_array_flash=function(){return([
 ["Type",4],
 ["Value",defFlash],
 ["Code",['<object type="application/x-shockwave-flash" data="$INNERHTML$" width="{$0:550}" height="{$1:400}" id="example" align="middle"><param name="allowScriptAccess" value="never" /><param name="movie" value="$INNERHTML$" /><param name="quality" value="high" /><param name="bgcolor" value="'+defFlashBackground+'" /></object>']]
]);}

 //Таблицы
  //HTML-Код BB-Тега [table]
var defTableStartCode='<table width="100%" cellspacing="1" cellpadding="1" style="border: 2px ridge; border-collapse: collapse;">';
  //HTML-Код BB-Тега [/table]
var defTableEndCode='</table>';
  //HTML-Код BB-Тега [tr]
var defTRStartCode='<tr>';
  //HTML-Код BB-Тега [/tr]
var defTREndCode='</tr>';
  //HTML-Код BB-Тега [td]
   //Начало кода
var defPRETDStartCode='<td';
   //Конец кода
var defPOSTTDStartCode=' style="border: 2px ridge; border-collapse: collapse;">';
  //HTML-Код BB-Тега [/td]
var defTDEndCode='</td>';
  //Определение обработки таблиц
var _tag_array_tbl=function(){return([["Type",2]]);}


 //Спойлер
  //Тег BB-Кода спойлера
var defCut="cut";
  //Тег BB-Кода скрытого от гостей спойлера
var defCutNG="cut noguest";
  //Всегда ли скрывать спойлер от гостей? (true|false)
var AlwaysHideSpoilersFromGuests=false;
  //Текст на спойлере без параметра "=текст на спойлере"
var DefaultSpoilerText="Читать далее";
  //Текст, который будет виден гостям на месте скрытого от гостей спойлера
var DefaultHiddenTextWarning="Этот текст скрыт от гостей"; 
  //Значок для нераскрытого спойлера(поставьте URL картинки в кавычках(' или ") вместо false, если желаете включить опцию)
var x_imageSpoilerIcon_cl=false; // "spoiler/plus.gif";
  //Значок для раскрытого спойлера(поставьте URL картинки в кавычках(' или ") вместо false, если желаете включить опцию)
var x_imageSpoilerIcon_op=false; // "spoiler/minus.gif";
  //Шаблон спойлера
   //В HTML-Коде спойлера могут содержаться специальные маркеры:
    //Маркер $SP_TITLE$ означает, что в конечном коде в месте постановки данного маркера будет проставлено значение переменной DefaultSpoilerText либо значение, указанное после знака "=" в BB-Коде с именем, равным значению переменной defCut.
    //Маркер $SP_WARN$ означает, что в конечном коде в месте постановки данного маркера будет проставлен текст, который будет виден гостям на месте скрытого от гостей спойлера(задаётся переменной var DefaultHiddenTextWarning).
    //Маркер $SP_IMG$ означает, что если переменные(var x_imageSpoilerIcon_cl и var x_imageSpoilerIcon_op) не равны false, то в в конечном коде в месте постановки данного маркера будет проставлено изображение, которое будет изменяться по клику на спойлер.
    //Маркер $SID$ отвечает за проставление каждому спойлеру нужного ID и доступа по этому ID к спойлеру.
defCutStartCode='<div class="spMsgBlock"><span id="$SID$Title" class="spMsgTitle0"><a class="spMsgTitleLink" href="javascript://" onclick="bbcobj.toggle_spoiler(\'$SID$\');return false;">[ $SP_IMG$$SP_TITLE$ ]</a></span><br><span id="$SID$" class="spMsgText" style="display: none">';
defCutStartCodeNG='<div class="spMsgBlock"><span class="spMsgTitle0">[ $SP_TITLE$(<a class="spMsgTitleLink" href="javascript://" onClick="openLayerB(\'LF\',0,\'/index/40\',\'Login\',250,130,1);return false;">$SP_WARN$</a>) ]</span><br><span id="$SID$" class="spMsgText" style="display: none">';
defCutEndCode='</span></div>';
   //Определение обработки спойлеров
var _tag_array_cut=function(){return([["Type",1]]);}


 //FLV-Плеер
  //Тег BB-Кода FLV-Плеера
var defPlayer="player";
  //Фоновый рисунок(путь)
var defFLVbackpict=false; //Пример - "../../flvplayer.png
  //Логотип
var defFLVtitlepict=false; //Пример - "../../flvplogo.png
  //Цвета
   //backcolor
var defFLVbackcolor="447136";
   //frontcolor
var defFLVfrontcolor="1e9a17";
  //Определение обработки FLV-Плеера
var _tag_array_flv=function(){return([
 ["Type",4],
 ["Value",defPlayer],
 ["Code",[('<embed src="../../player/player.swf)+'height="375" width="500">',""]]
]);}


 //Форма добавления сообщений
/*На Лаборатории Ватсона доступны темы оформления для фона кнопок bb-панели. Вы можете выбрать любой из них, либо установить свои.
Список доступных тем: smfdarkgreen, smfgrey, smfblue, classic, classicflat, classicgreen, classicgreenfl, darkstone, modern, vista
Каждая тема находится в одноименной папке.*/
  //Тема фона кнопок bb-панели
var _bb_PanelButtonTheme="modern";
  //Тема кнопок bb-панели(false означает стандартную)
var _bb_PanelImgTheme=false;
  //Фон кнопок в форме добавления сообщения. Если у вас используются кнопки из стандартного набора, не меняйте эти значения.
   //Фоновый рисунок под кнопками в форме добавления сообщений
var DefMsgIconBackgroundImageDefault="/bbc_bg.gif";
   //Фоновый рисунок под кнопками в форме добавления сообщений при наведенном курсоре мыши
var DefMsgIconBackgroundImageOver="/bbc_hoverbg.gif";
   //Фоновый рисунок под кнопками в форме добавления сообщений при клике мыши
var DefMsgIconBackgroundImageMark="/bbc_markbg.gif";
   //Фоновый рисунок под кнопками в форме добавления сообщений при незакрытом теге
var DefMsgIconBackgroundImageMarked="/bbc_markedbg.gif";
   //Фоновый рисунок под панелью с кнопками
var DefMsgPanelBGImage="/pbu.gif"; //Если false, то не используется
   //Фоновый рисунок каждой линии панели с кнопками
var DefMsgPanelLineImage="/pbg.gif"; //Если false, то не используется
   //Начальный фон под кнопками в форме добавления сообщений
var DefMsgIconBackground="url('"+DefMsgIconUrl+_bb_PanelButtonTheme+DefMsgIconBackgroundImageDefault+"')";
  //События кнопок: true - кнопки могут меняться при наведении и клике мыши, false - статические кнопки.
var HighLightButtons=true;
  //События кнопок при незакрытых тегах: если предыдущая настройка false, то не имеет никакого эффекта.
var HighLightUnclosedTagButtons=true;
  //Сообщение в запросе адреса ссылки
var text_enter_url="URL-Адрес ссылки";
  //Сообщение в запросе названия ссылки
var text_enter_url_name="Название ссылки";
  //Сообщение в запросе адреса изображения
var text_enter_image="URL-Адрес изображения";
  //Сообщение в запросе e-mail адреса
var text_enter_email="E-mail адрес";
  //Сообщение в запросе пункта списка
var list_prompt="Пункт списка";
  //Элементы панели bb-кодов
   /*Массив элементов bb-панели. Отсюда можно убирать кнопки, добавлять разделители и разрывы строк. Если вам необходимо добавить HTML-коды, просто допишите из в кавычках (" или '). Пример: нужно вставить ссылку между блоками bb_special() и bb_preview().
   Решение:

bb_special(),
'<a href="../../
bb_preview()

   После каждого элемента, кроме последнего, должна стоять запятая.*/
var panel_array=function(){return([
bb_capsulastart(),
bb_bold(),
bb_italicize(),
bb_underline(),
bb_defmove(),
new_bb_Block(bb_customblock1()),
bb_divider(),
bb_left(),
bb_center(),
bb_right(),
bb_pre(),
bb_indent(),
bb_divider(),
bb_sub(),
bb_sup(),
bb_divider(),
bb_table(),
bb_divider(),
bb_list(),
bb_hide(),
bb_divider(),
bb_smls(),
bb_keybrd(),
bb_translit(),
bb_doubledivider(),
bb_closeall(),
bb_breakspace(),
bb_url(),
bb_email(),
bb_icq(),
bb_img(),
bb_divider(),
bb_TT(),
bb_code(),
bb_offtop(),
bb_quote(),
bb_defcut(),
bb_divider(),
bb_hr(),
bb_divider(),
bb_video(),
bb_flash(),
bb_flv(),
bb_snd(),
bb_divider(),
bb_graffiti(),
bb_capsulaend(),
bb_fsize(),
bb_space(),
bb_font(),
bb_space(),
bb_fcolor(),
bb_space(),
bb_highlight(),
bb_space(),
bb_special()
]);}

var bb_customblock1=function(){return([
bb_strike(),
bb_over(),
bb_blink(),
bb_doubleunderline(),
bb_dashedunderline(),
bb_wavygreen(),
bb_wavyred(),
bb_stext()
]);}
   
   //Назначение кнопок BB-Панели
    //Для назначения кнопок используется функция _bb_Button. Функция _bb_Button принимает массив параметров кнопки.
	//Синтаксис - _bb_Button([["параметр",значение],["параметр",значение],<...>,["параметр",значение]])
	//Параметры - "Type", "Value", "Where", "Title", "GIFImage", "Special"
    //"Type" - Тип кнопки. Тип кнопки может быть:
     //0-"special" - позволяет указать параметр "Special"(с помощью _bb_set) в котором можно прописать свой код.
	 //Использование типа 0 без параметра "Special" дает тот же эффект, что и с типом 13
     //1-"simple" - стандартная кнопка BB-Кода.
	 //2-"once" - BB-Код, без закрывающего тега.
	 //3-"url", 4-"email", 5-"img", 6-"cut", 7-"list", 8-"video", 9-"audio", 10-"sml", 11-"keybrd", 12-"translit"
	 //13-"none" - при использовании "Type" >= 13 рисуется только изображение кнопки, без действий при нажатии.
	//"Value" - Значение тега BB-Кода
	//"Where" - Применяется к форме с заданным ID. По-умолчанию, "message".
	//"Title" - Заголовок кнопки
	//"GIFImage" - Изображение в формате GIF. Внимание, указывать нужно только имя изображения и, если нужно, подкатолог, в котором оно лежит относительно переменной DefMsgIconUrl, без расширения .gif
	//"Special" - Дополнительные функции кнопки в формате javascript. Прописываются в onClick="..." Работают со типами кнопок < 13
var bb_bold=function(){return(_bb_Button([["Type",1],["Value","b"],["Where","message"],["Title","Жирный"],["GIFImage","bold"]]));}
var bb_blink=function(){return(_bb_Button([["Type",1],["Value",defBlink],["Where","message"],["Title","Мигающий"],["GIFImage","blink"]]));}
var bb_icq=function(){return(_bb_Button([["Type",0],["Value",defICQ],["Title","ICQ номер и его статус"],["GIFImage","icq"],["Special","bbcobj.tag_icq('message',event);"]]));}
var bb_doubleunderline=function(){return(_bb_Button([["Type",1],["Value",defDouble],["Where","message"],["Title","Двойное подчеркивание"],["GIFImage","double"]]));}
var bb_stext=function(){return(_bb_Button([["Type",0],["Value",defSText],["Title","Всплывающий текст"],["GIFImage","stext"],["Special","bbcobj.tag_stext('message',event);"]]));}
var bb_dashedunderline=function(){return(_bb_Button([["Type",1],["Value",defDashed],["Where","message"],["Title","Пунктирное подчеркивание"],["GIFImage","dashed"]]));}
var bb_wavygreen=function(){return(_bb_Button([["Type",1],["Value",defWawygreen],["Where","message"],["Title","Подчеркивание зеленой волнистой линией"],["GIFImage","wavygreen"]]));}
var bb_wavyred=function(){return(_bb_Button([["Type",1],["Value",defWawyred],["Where","message"],["Title","Подчеркивание красной волнистой линией"],["GIFImage","wavyred"]]));}
var bb_italicize=function(){return(_bb_Button([["Type",1],["Value","i"],["Where","message"],["Title","Курсив"],["GIFImage","italicize"]]));}
var bb_underline=function(){return(_bb_Button([["Type",1],["Value","u"],["Where","message"],["Title","Подчеркивание"],["GIFImage","underline"]]));}
var bb_defmove=function(){return(_bb_Button([["Type",1],["Value", defMove],["Where","message"],["Title","Бегущая строка"],["GIFImage","move"]]));}
var bb_strike=function(){return(_bb_Button([["Type",1],["Value","s"],["Where","message"],["Title","Зачеркивание"],["GIFImage","strike"]]));}
var bb_over=function(){return(_bb_Button([["Type",1],["Value","o"],["Where","message"],["Title","Надчеркивание"],["GIFImage","over"]]));}
var bb_url=function(){return(_bb_Button([["Type",0],["Value","url"],["Title","Гиперссылка"],["Special","bbcobj.tag_url('message',event);"],["GIFImage","url"]]));}
var bb_email=function(){return(_bb_Button([["Type",0],["Value","email"],["Title","E-mail"],["Special","bbcobj.tag_email('message',event);"],["GIFImage","email"]]));}
var bb_img=function(){return(_bb_Button([["Type",0],["Value","img"],["Title","Изображение"],["Special","bbcobj.tag_image('message',event);"],["GIFImage","img"]]));}
var bb_defcut=function(){return(_bb_Button([["Type",0],["Title","Спойлер"],["Value", defCut],["Special","bbcobj.tag_cut('message',event);"],["GIFImage","cut"]]));}
var bb_quote=function(){return(_bb_Button([["Type",1],["Value","quote"],["Where","message"],["Title","Цитата"],["GIFImage","quote"]]));}
var bb_offtop=function(){return(_bb_Button([["Type",1],["Value", defOff],["Where","message"],["Title","Оффтопик"],["GIFImage","offtop"]]));}
var bb_hide=function(){return(_bb_Button([["Type",1],["Value","hide"],["Where","message"],["Title","Скрыть от гостей"],["GIFImage","hide"]]));}
var bb_TT=function(){return(_bb_Button([["Type",1],["Value",defTT],["Where","message"],["Title","Моноширинный teletype-текст"],["GIFImage","tele"]]));}
var bb_code=function(){return(_bb_Button([["Type",1],["Value","code"],["Where","message"],["Title","Код"],["GIFImage","code"]]));}
var bb_list=function(){return(_bb_Button([["Type",0],["Title","Список"],["Special","bbcobj.tag_list('message',event);"],["GIFImage","list"]]));}
var bb_left=function(){return(_bb_Button([["Type",1],["Value","l"],["Where","message"],["Title","По левому краю"],["GIFImage","left"]]));}
var bb_center=function(){return(_bb_Button([["Type",1],["Value","c"],["Where","message"],["Title","По центру"],["GIFImage","center"]]));}
var bb_right=function(){return(_bb_Button([["Type",1],["Value","r"],["Where","message"],["Title","По правому краю"],["GIFImage","right"]]));}
var bb_pre=function(){return(_bb_Button([["Type",1],["Value","j"],["Where","message"],["Title","По ширине"],["GIFImage","pre"]]));}
var bb_indent=function(){return(_bb_Button([["Type",1],["Value","indent"],["Where","message"],["Title","Отступ"],["GIFImage","indent"]]));}
var bb_sub=function(){return(_bb_Button([["Type",1],["Value","sub"],["Where","message"],["Title","Нижний индекс"],["GIFImage","sub"]]));}
var bb_sup=function(){return(_bb_Button([["Type",1],["Value","sup"],["Where","message"],["Title","Верхний индекс"],["GIFImage","sup"]]));}
var bb_video=function(){return(_bb_Button([["Type",0],["Value","video"],["Title","Видео"],["Special","bbcobj.tag_video('message',event);"],["GIFImage","video"]]));}
var bb_flash=function(){return(_bb_Button([["Type",0],["Value",defFlash],["Title","Flash"],["Special","bbcobj.tag_flash('message',event);"],["GIFImage","flash"]]));}
var bb_flv=function(){return(_bb_Button([["Type",0],["Value",defPlayer],["Title","FLV-Player"],["Special","bbcobj.tag_flv('message',event);"],["GIFImage","player"]]));}
var bb_snd=function(){return(_bb_Button([["Type",0],["Value","audio"],["Title","Аудио"],["Special","bbcobj.tag_audio('message',event);"],["GIFImage","snd"]]));}
var bb_hr=function(){return(_bb_Button([["Type",2],["Value","hr"],["Where","message"],["Title","Линия"],["GIFImage","hr"]]));}
var bb_smls=function(){return(_bb_Button([["Type",0],["Title","Все смайлы"],["Special","openLayerB('Sml',0,'/index/35-23-0','Полный список смайлов',250,350);return false;"],["GIFImage","smls"]]));}
var bb_keybrd=function(){return(_bb_Button([["Type",0],["Title","Виртуальная клавиатура"],["Special","window.open('/forum/0-0-0-31','virtKB','width=300,height=120,top=0,left=0');"],["GIFImage","keyboard"]]));}
var bb_translit=function(){return(_bb_Button([["Type",0],["Title","Транслитератор латиницы"],["Special","openLayerB('TranslitBody',0,'/translit/translit.xml','Транслитератор латиницы',460,320,1,0,0);"],["GIFImage","translit"]]));}
var bb_graffiti=function(){return(_bb_Button([["Type",0],["Special","window.open('/media/?t=draw;h=1','grafwind','width=800,height=600,top=0,left=0');"],["Title","Граффити"],["GIFImage","graffiti"]]));}
var bb_closeall=function(){return(_bb_Button([["Type",0],["Special","bbcobj.closeall('message','');"],["Title","Закрыть все незакрытые теги"],["GIFImage","closeall"]]));}
var bb_table=function(){return(_bb_Button([["Type",0],["Special","bbcobj.tag_table('message',event);"],["Title","Вставить таблицу"],["GIFImage","table"]]));}

   //Контейнер для кнопок
var bb_capsulastart=function(){return('<div style="padding-right:1px;'+(DefMsgPanelLineImage?'background:url(\''+DefMsgIconUrl+_bb_PanelButtonTheme+DefMsgPanelLineImage+'\');':'')+'">');}
var bb_capsulaend=function(){return('</div>');}

   //Стиль разделителей(HTML-код)
var bb_divider=function(){return('<img align="middle" border=0 src="' + DefMsgIconUrl + _bb_PanelButtonTheme + '/divider.gif" alt="|" style="margin: 0 2px 0 3px;" />');}
var bb_doubledivider=function(){return('<img align="middle" border=0 src="' + DefMsgIconUrl + _bb_PanelButtonTheme + '/divider.gif" alt="|" style="margin: 0 0px 0 3px;" /><img align="middle" border=0 src="' + DefMsgIconUrl + _bb_PanelButtonTheme + '/divider.gif" alt="|" style="margin: 0 2px 0 0px;" />');}

   //Стиль кнопок встроенных блоков
    //Кнопка(отжатая)
var x_imageBlockIcon_op="block/op1.gif";
    //Кнопка(нажатая)
var x_imageBlockIcon_cl="block/op2.gif";
    //Начало
var bb_inblock_st=function(){return('<a href="javascript://" onclick="bbcobj.toggle_show_inline(\'newBBlockSpan'+_bb_blockcount+'\');bbcobj._bb_userblock_togglepict(document.getElementById(\'newBBlockImage'+_bb_blockcount+'\'));return false;"><img alt=">" id="newBBlockImage'+_bb_blockcount+'" title="Показать/скрыть блок" align="middle" border="0" src="' + DefMsgIconUrl+x_imageBlockIcon_cl + '" style="margin-left: 3px; margin-right: 2px;"/></a><span id="newBBlockSpan'+_bb_blockcount+'" style="display: none">');}
    //Конец
var bb_inblock_post_st=function(){return('</span>');}

   //Перенос строки меню
var bb_breakspace=function(){return(bb_capsulaend()+bb_capsulastart());}

   //Перенос строки
var bb_breakspace_normal=function(){return('<br/>');}

   //Пробел
var bb_space=function(){return(' ');}

   //Размер шрифта
var bb_fsize=function(){return('<select name="fsize" class="codeButtons" onchange="bbcobj.alterfont(this.options[this.selectedIndex].value,\'size\',\'message\',\'\');this.selectedIndex=0;"><option value="0">Размер</option><option value="8">8 pt</option><option value="9">9 pt</option><option value="10">10 pt</option><option value="11">11 pt</option><option value="12">12 pt</option><option value="13">13 pt</option><option value="14">14 pt</option><option value="15">15 pt</option><option value="16">16 pt</option><option value="17">17 pt</option><option value="18">18 pt</option></select>');}

   //Цвет шрифта
var bb_fcolor=function(){return('<select name="fcolor" class="codeButtons" onchange="if(this.options[this.selectedIndex].value==\'choosebox\'){document.getElementById(\'bbColorSelect\').style.display=\'inline\';this.selectedIndex=0;return false;}bbcobj.alterfont(this.options[this.selectedIndex].value, \'color\',\'message\',\'\');this.selectedIndex=0;document.getElementById(\'bbColorSelect\').style.display=\'none\';"><option value="0">Цвет</option><option value="blue" style="color:blue">Синий</option><option value="red" style="color:red">Красный</option><option value="purple" style="color:purple">Пурпурный</option><option value="orange" style="color:orange">Оранжевый</option><option value="yellow" style="color:yellow">Жёлтый</option><option value="gray" style="color:gray">Серый</option><option value="green" style="color:green">Зелёный</option><option value="#EF84B5" style="color:#EF84B5;">Розовый</option><option value="choosebox">Другой...</option></select><input type="image" onclick="bbcobj.openPicker(this,\'colorselect\');return false;" id="bbColorSelect" style="display:none;border:1px outset #AAAAAA;" src="'+DefMsgIconUrl+'color.gif" width="14" height="14" value="" title="Выбрать цвет">');}

   //Цвет фона
var bb_highlight=function(){return('<select name="htbgcolor" class="codeButtons" onchange="if(this.options[this.selectedIndex].value==\'choosebox\'){document.getElementById(\'bbHTBGSelect\').style.display=\'inline\';this.selectedIndex=0;return false;}bbcobj.alterfont(this.options[this.selectedIndex].value, \''+defHighlight+'\',\'message\',\'\');this.selectedIndex=0;document.getElementById(\'bbHTBGSelect\').style.display=\'none\';"><option value="0">Фон</option><option value="blue" style="color:blue">Синий</option><option value="red" style="color:red">Красный</option><option value="purple" style="color:purple">Пурпурный</option><option value="orange" style="color:orange">Оранжевый</option><option value="yellow" style="color:yellow">Жёлтый</option><option value="gray" style="color:gray">Серый</option><option value="green" style="color:green">Зелёный</option><option value="#EF84B5" style="color:#EF84B5;">Розовый</option><option value="choosebox">Другой...</option></select><input type="image" onclick="bbcobj.openPicker(this,\'HTBGselect\');return false;" id="bbHTBGSelect" style="display:none;border:1px outset #AAAAAA;" src="'+DefMsgIconUrl+'bgcolor.gif" width="14" height="14" value="" title="Выбрать цвет">');}

   //Шрифт
var bb_font=function(){return('<select name="ffont" class="codeButtons" onchange="bbcobj.alterfont(this.options[this.selectedIndex].value,\'font\',\'message\',\'\');this.selectedIndex=0;"><option value="0">Шрифт</option><option value="Arial">Arial</option><option value="Times">Times</option><option value="Courier">Courier</option><option value="Impact">Impact</option><option value="Geneva">Geneva</option><option value="Optima">Optima</option></select>');}

   //Специальные символы
var bb_special=function(){return('<select name="newsymbols" class="codeButtons" onchange="bbcobj.symbolinssert(this.options[this.selectedIndex].value,\'message\');this.selectedIndex=0;"><option value="0">Специальные символы</option><option value="&#x301;">*удар&#x301;ение*</option><option value="^">^</option><option value="¤">¤</option><option value="Ґ">Ґ</option><option value="¦">¦</option><option value="§">§</option><option value="©">©</option><option value="Є">Є</option><option value="«">«</option><option value="¬">¬</option><option value="®">®</option><option value="Ї">Ї</option><option value="°">°</option><option value="±">±</option><option value="ґ">ґ</option><option value="µ">µ</option><option value="¶">¶</option><option value="·">·</option><option value="»">»</option><option value="•">•</option><option value="…">…</option><option value="′">′</option><option value="″">″</option><option value="‾">‾</option><option value="⁄">⁄</option><option value="™">™</option><option value="∂">∂</option><option value="∏">∏</option><option value="∑">∑</option><option value="−">−</option><option value="√">√</option><option value="∞">∞</option><option value="∫">∫</option><option value="≈">≈</option><option value="≠">≠</option><option value="≤">≤</option><option value="≥">≥</option><option value="◊">◊</option><option value="¡">¡</option><option value="¢">¢</option><option value="£">£</option><option value="¥">¥</option><option value="¨">¨</option><option value="°">°</option><option value="²">²</option><option value="³">³</option><option value="´">´</option><option value="µ">µ</option><option value="¸">¸</option><option value="¹">¹</option><option value="¼">¼</option><option value="½">½</option><option value="¾">¾</option><option value="¿">¿</option><option value="^¤Ґ¦§©Є«¬®Ї°±ґµ¶·»•…′″‾⁄™∂∏∑−√∞∫≈≠≤≥◊¡¢£¥¨°²³´µ¸¹¼½¾¿&#x301;">Все разом!</option></select>');}

   //Предпросмотр сообщения
var bb_preview=function(){return('<div id="bbPreview1" class="bbPreviewWait" style="display: none;">Загрузка...</div><div id="bbPreview2" class="bbPreviewBlock" style="display: none;"><table border="0" width="100%"><tr><td><div class="gDivLeft"><div class="gDivRight"><table class="gTable" border="0" width="100%" cellspacing="1" cellpadding="0"><tr><td><table border="0" width="100%" cellspacing="1" cellpadding="1" class="postTable"><tr><td class="posttdMessage" valign="top"><div id="bbPreview3" style="max-height:190px;overflow:auto;height:expression(this.scrollHeight>190?\'190px\':\'auto\');"></div></td></tr></table></td></tr></table></div></div><div class="gDivBottomLeft"></div><div class="gDivBottomCenter"></div><div class="gDivBottomRight"></div></td></tr></table></div>');}

//Собственно, сам скрипт
//--------------------------Начало  скрипта--------------------------//
var _bb_type=0,_bb_typearray=new Array("special","simple","once","none"),_bb_value=null,_bb_where="message";
var _bb_title="Dummy button",_bb_GIFImage="Dummy_image",_bb_special=null,_bb_simplecodes_array=new Array();
var _bb_hihglight_array=new Array(),_tag_type=0,_tag_value=null,_tag_special=null,_bb_blockcount=0;
var sidcounter;if(!sidcounter){sidcounter=0;}var gbbcounter;if(!gbbcounter){gbbcounter=0;}
var BBScpCounter;if(!BBScpCounter){BBScpCounter=0;}var BBSelColor="000000",pickedLayers={};var layerWidth=218;
var layerHeight=144,bbSBMORVAL="",EMLrXp=new RegExp("[0-9a-z-_\.]+@[0-9a-z_^.]+.[a-z]{2,3}"),HIDrXp=/^\d+$/;
var eCRegExp=/^\d{5,9}$/;

function PasGenHTML(chars,length){var chars,length,res="",r,i;if(!chars){chars="1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";}if(!length){length=10;}for(i=1;i<=length;i++){r=Math.floor(Math.random()*chars.length);res=res+chars.substring(r,r+1);}return res;}

function startBlink(blnode){return function(){if(blnode.style.visibility!="hidden"){blnode.style.visibility="hidden";}else{blnode.style.visibility="";}setTimeout(startBlink(blnode),defBlinkTimeout);}}
this.startBlink=startBlink;

function getBlinks(){
	var elem=document.getElementsByTagName('*'),arr=new Array();
	for(gbl=0;gbl<elem.length;gbl++){att=elem[gbl].getAttribute("name");if(att=="UBlinkA"){arr.push(elem[gbl]);}}
	return arr;
}

this.toggle_spoiler=function(sid){
	sidobj=document.getElementById(sid);sidimg=document.getElementById(sid+"_img");sidtitle=document.getElementById(sid+"Title");
	if(sidobj==false&&sidimg==false&&sidtitle==false){return false;}if(sidobj){bbcobj.toggle_show(sid);}
	if(sidimg){sidimg.src=sidimg.src==DefMsgIconUrl+x_imageSpoilerIcon_cl?DefMsgIconUrl+x_imageSpoilerIcon_op:DefMsgIconUrl+x_imageSpoilerIcon_cl;}
	if(sidtitle){sidtitle.className=sidtitle.className=='spMsgTitle0'?'spMsgTitle1':'spMsgTitle0';}
	return true;
}

this.toggle_show=function(id){document.getElementById(id).style.display=document.getElementById(id).style.display=='none'?'block':'none';}
this.show=function(id){document.getElementById(id).style.display='block';return true;}
this.show_inline=function(id){document.getElementById(id).style.display='inline';return true;}
this.hide=function(id){document.getElementById(id).style.display='none';return true;}
this.toggle_show_inline=function(id){document.getElementById(id).style.display=document.getElementById(id).style.display=='none'?'inline':'none';return true;}
this.toggle_show_iblock=function(id){document.getElementById(id).style.display=document.getElementById(id).style.display=='none'?'inline-block':'none';return true;}

function GetFStartTEnd(fs_h,fs_i,fs_is,fs_j,bs_l){
	var bs_l,fs_f=false,fs_g=false;
	if(bs_l){fs_a=fs_h.toLowerCase().indexOf(fs_i.toLowerCase());}else{fs_a=fs_h.indexOf(fs_i);}
	if(fs_a==-1){return false;}
	var fs_b=fs_a+fs_i.length;
	if(bs_l){fs_c=fs_h.slice(fs_b).toLowerCase().indexOf(fs_j.toLowerCase());}else{fs_c=fs_h.slice(fs_b).indexOf(fs_j);}
	if(fs_c==-1){return false;}
	var fs_d=fs_b+fs_c;
	if(bs_l){fs_e=fs_d+fs_h.slice(fs_b).toLowerCase().indexOf(fs_is.toLowerCase());}else{fs_e=fs_d+fs_h.slice(fs_b).indexOf(fs_is);}
	if(fs_e==fs_d-1||fs_d<fs_e){fs_f=true;}if(fs_f==true){fs_g=fs_h.slice(fs_b,fs_d);}
	if(fs_g==""){return false;}else{return fs_g;}}

function openPicker(Obj,pickerID){if(!pickedLayers[pickerID]){removeOtherPickerLayers(pickerID);createPickerLayer(pickerID,findPosX(Obj)+Obj.offsetWidth-110,findPosY(Obj)+18);}else{removeAllPickerLayers();}Obj.style.display="none";}

this.openPicker=openPicker;

function createPickerLayer(id,left,top){
	pickedLayers[id]=true;
	var width=layerWidth,height=layerHeight,zindex=1000,bgcolor="#d4d0c8",txtcolor="#000000",msg=getPickerContent(id);
	if(document.layers){
		if(document.layers[id]){return;}
		var layer=document.layers[id]=new Layer(width);
		layer.className="picker_layer";layer.name=id;layer.left=left;layer.top=top;layer.clip.height=height;layer.visibility='show';
		layer.zIndex=zindex;layer.bgColor=bgcolor;layer.innerHTML=msg;}
	else if(document.all){
		if(document.all[id]){return}
  		var layer='\n<DIV class="picker_layer" id='+id+' style="font-family:Arial,Helvetica,sans-serif;font-size:12px;text-decoration:none;background-color:#d4d0c8;border-width:1px;border-style:solid;border-color:#666666;overflow:visible;height:auto;width: auto;position:absolute;left:'+left+'px;top:'+top+'px;width:'+width+';height:'+height+'; visibility:visible'+'; z-index:'+zindex+';text-align:left">'+msg+'</DIV>';
		document.body.insertAdjacentHTML("BeforeEnd",layer);}
	else if(document.getElementById){
		var layer=document.createElement('div');layer.setAttribute('id',id);document.body.appendChild(layer);var ly=document.getElementById(id);ly.className="picker_layer";ly.style.position="absolute";ly.style.left=left+"px";ly.style.top=top+"px";ly.style.width=width+"px";ly.style.height=height+"px";ly.style.textAlign="left";ly.innerHTML=msg;}
}

function showClr(color){displayClr(color);Obj=document.getElementById("gcpicker_colorCode");Obj.value=color.toUpperCase();}
this.showClr=showClr;
function displayClr(color){Obj=document.getElementById("gcpicker_colorSample");Obj.style.backgroundColor=color;}
this.displayClr=displayClr;
function setClrcolorselect(color){bbcobj.alterfont(color.toUpperCase(),'color','message','');removeAllPickerLayers();}
this.setClrcolorselect=setClrcolorselect;
function setClrHTBGselect(color){bbcobj.alterfont(color.toUpperCase(),defHighlight,'message','');removeAllPickerLayers();}
this.setClrHTBGselect=setClrHTBGselect;

function removePickerLayer(id){
	delete pickedLayers[id];
	if(document.getElementById(id)==null){return;}
	if(document.layers&&document.layers[id]){document.layers[id].visibility='hide';delete document.layers[id];}
	if(document.all&&document.all[id]){document.all[id].innerHTML='';document.all[id].outerHTML='';}
	else if(document.getElementById){var b=document.body;var layer=document.getElementById(id);b.removeChild(layer);}
}

function removeOtherPickerLayers(layerToSave){for(pLayer in pickedLayers){if(pLayer!=layerToSave){removePickerLayer(pLayer);}}}
function removeAllPickerLayers(){for(pLayer in pickedLayers){removePickerLayer(pLayer);}}
this.removeAllPickerLayers=removeAllPickerLayers;

function getPickerContent(id){var content='<table width="222" border="0" cellpadding="0" cellspacing="1" style="background-color:#CCCCCC;border:2px outset #CCCCCC;"><tr><td><table width="100%" border="0" cellpadding="0" cellspacing="1" style="font-family:Arial,Helvetica,sans-serif;font-size:12px;text-decoration:none;"><tr><td bgcolor="#CCCCCC" id="gcpicker_colorSample" width="40" style="border-style:solid;border-color:#000000;border-width:1px;">&nbsp;</td><td align="center"><input type="text" id="gcpicker_colorCode" value="#CCCCCC" onkeyup="bbcobj.displayClr(this.value);" onchange="bbcobj.displayClr(this.value);" style="width:110px;" maxlength="7"/><input type="button" value=">" onclick="bbcobj.setClr'+id+'(document.getElementById(\'gcpicker_colorCode\').value);"/></td><td align="right"><input type="submit" value="" onclick="bbcobj.removeAllPickerLayers('+id+')" style="width:17px;height:17px;background-image:url(\''+DefMsgIconUrl+'close.gif\');background-repeat:no-repeat;background-position:center;"/></td></tr></table></td></tr><tr><td>'+colorTable(id)+'</td></tr></table>';return content;}

function colorTable(id){
	var clrfix=Array("#000000","#333333","#666666","#999999","#cccccc","#ffffff","#ff0000","#00ff00","#0000ff","#ffff00","#00ffff","#ff00ff");
	var table='<table border="0"  cellpadding="0" cellspacing="0" bgcolor="#000000"><tr>';table+='';
	for(var j=0;j<3;j++){
		table+='<td width="11"><table bgcolor="#000000"  border="0"  cellpadding="0" cellspacing="1" style="font-family:Arial,Helvetica,sans-serif;font-size:12px;text-decoration:none;">';
		for(var i=0;i<12;i++){var clr='#000000';if(j==1){clr=clrfix[i];}
			table+='<tr><td bgcolor="'+clr+'" style="cursor:pointer;width:9px;height:9px;" onmouseover="bbcobj.showClr('+"'"+clr+"'"+')" onclick="bbcobj.setClr'+id+'('+"'"+clr+"'"+')"></td></tr>';}
		table+='</table></td>';}
	table+='<td><table border="0" cellpadding="0" cellspacing="0">';
	for(var c=0;c<6;c++){
		if(c==0||c==3){table+="<tr>";}table+="<td>";
		table=table+'<table border="0" cellpadding="0" cellspacing="1" style="font-family:Arial,Helvetica,sans-serif;font-size:12px;text-decoration:none;"> ';
		for(var j=0;j<6;j++){table+="<tr>";
			for (var i=0;i<6;i++){
				var clrhex=rgb2hex(j*255/5,i*255/5,c*255/5);
				table+='<td bgcolor="'+clrhex+'" style="cursor:pointer;width:9px;height:9px;" onmouseover="bbcobj.showClr('+"'"+clrhex+"'"+')" onclick="bbcobj.setClr'+id+'('+"'"+clrhex+"'"+')"></td>';}
			table +="</tr>";}
		table+="</table>";table+="</td>"	
		if(c==2||c==5){table+="</tr>";}}
	table+='</table></td></tr></table>';return table;
}

function findPosX(obj){
	var curleft=0;
	if(obj.offsetParent)
	while(1){curleft+=obj.offsetLeft;if(!obj.offsetParent) break;
		obj=obj.offsetParent;}
	else if(obj.x) curleft+=obj.x;
	return curleft;
}

function findPosY(obj){
	var curtop=0;
	if(obj.offsetParent){
		while(1){curtop+=obj.offsetTop;
		if(!obj.offsetParent){break;}
		obj=obj.offsetParent;}
    }else if(obj.y){curtop+=obj.y;}
	return curtop;
}

function rgb2hex(red,green,blue){
    var decColor=red+256*green+65536*blue,clr=decColor.toString(16);
	for(var i=clr.length;i<6;i++){clr="0"+clr;}
	return "#"+clr;
}

function RetSpoiler(siteMessage)
{
	if(AlwaysHideSpoilersFromGuests==false){siteMessage=RetDefCut(siteMessage);}
	else{if(ShowHiddenSpoiler==true){siteMessage=RetDefCut(siteMessage);}
		else{siteMessage=RetDefCutHide(siteMessage);}}
	if(ShowHiddenSpoiler==true){siteMessage=RetDefCutNG(siteMessage);}
		else{siteMessage=RetDefCutNGHide(siteMessage);}
	if(siteMessage.indexOf("[/"+defCut+"]")>-1){siteMessage=siteMessage.replace("[/"+defCut+"]",defCutEndCode);}
	return(siteMessage);
}

function repCutTitle(ct_code,ct_title)
{
	var ct_title;sidcounter++;
	while(ct_code.indexOf("$SP_TITLE$")>-1){
		ct_code=ct_code.replace("$SP_TITLE$",(ct_title?ct_title:DefaultSpoilerText));}
	while(ct_code.indexOf("$SP_WARN$")>-1){
		ct_code=ct_code.replace("$SP_WARN$",DefaultHiddenTextWarning);}
	while(ct_code.indexOf("$SP_IMG$")>-1){
		if(x_imageSpoilerIcon_cl&&x_imageSpoilerIcon_op){ct_code=ct_code.replace("$SP_IMG$",'<img alt="+" id="'+defCut+sidcounter+'_img" align="middle" src="'+DefMsgIconUrl+x_imageSpoilerIcon_cl+'" border="0"> ');}
		else{ct_code=ct_code.replace("$SP_IMG$","");}}
	while(ct_code.indexOf("$SID$")>-1){
		ct_code=ct_code.replace("$SID$",defCut+sidcounter);}
	return(ct_code);
}

function RetDefCut(sp){return(RetDefCutUni(sp,defCut,defCutStartCode));}
function RetDefCutHide(sp){return(RetDefCutUni(sp,defCut,defCutStartCodeNG));}
function RetDefCutNG(sp){return(RetDefCutUni(sp,defCutNG,defCutStartCode));}
function RetDefCutNGHide(sp){return(RetDefCutUni(sp,defCutNG,defCutStartCodeNG));}

function RetDefCutUni(c0,c1,c2){
	if(c0.indexOf("["+c1+"]")>-1){c0=c0.replace("["+c1+"]",repCutTitle(c2));}
	if(c0.indexOf("["+c1+"=")>-1){spoilerTitle=GetFStartTEnd(c0,"["+c1+"=","["+c1,"]");
		if(spoilerTitle){c0=c0.replace("["+c1+"="+spoilerTitle+"]",repCutTitle(c2,spoilerTitle));
		}else{c0=c0.replace("["+c1+"=]",repCutTitle(c2));}}
	return(c0);
}

function isIHcode(s){return(s.indexOf('$INNERHTML$')>-1?1:0);}

function repSC(s){var h={'"':"&quot;",'&':"&amp;","'":"&#039;",'<':"&lt;",'>':"&gt;"},S='',eT='';for(S in h){eT=h[S];s=s.split(S).join(eT);}return s;}

function parseIHcode(s,bb,bbs,iO){
	var iRGbb=false,bRgb=false,iO;
	if(isIHcode(s)){
		iRGbb=GetFStartTEnd(bbs,'['+bb+(iO?"="+iO:"")+']','[','[/'+bb+']');
		if(iRGbb){niRGbb=repSC(iRGbb);while(isIHcode(s)){s=s.replace('$INNERHTML$',niRGbb);}bRgb=true;
		}else{while(isIHcode(s)){s=s.replace('$INNERHTML$',"");}}}
	return([s,iRGbb,bRgb]);
}

function parseGBBPms(s,sP){
	var sP;sP=sP?sP:'';if(s.indexOf('{$0')==-1){return(s);}
	var nSP=repSC(sP),arrSP=nSP.split(','),sPsrc='',ExpVal,Exp;
	for(prID in arrSP){
		sPsrc='{$'+prID;
		if(s.indexOf(sPsrc)>-1){
			Exp=GetFStartTEnd(s,'{$','{$','}').split(':');bExpL=Exp.length;
			if(bExpL==2){ExpVal=sPsrc+':'+Exp[1]+'}';
			}else if(bExpL==1){ExpVal=sPsrc+'}';}else{return(s);}
			while(s.indexOf(ExpVal)>-1){s=s.replace(ExpVal,sP?arrSP[prID]:(bExpL==2?Exp[1]:''));}}}
	return(s);
}

function parseGBBMarkers(s){gbbcounter++;while(s.indexOf("$BBID$")>-1){s=s.replace("$BBID$","cBB_"+gbbcounter);}return(s);}

function RetGenericBB(msgStr,bbCode,codes,isMO)
{
	var SGbbR=false,bRgb=false,iRGbb=null,SGbbR=null,iRgb='',A=null,isMO,GOCS,GCS,GCE;
	if(bbCode==null||codes==null){return(msgStr);}
	else{
		GOCS=codes.constructor==Array?codes[0]:codes;GCS=GOCS;if(!isMO){GCE=codes.constructor==Array?codes[1]:null;}
		if(msgStr.indexOf('['+bbCode+'=')>-1){
			SGbbR=GetFStartTEnd(msgStr,"["+bbCode+"=","["+bbCode,"]");
			if(SGbbR){GOCS=parseGBBPms(GOCS,SGbbR);}else{GOCS=parseGBBPms(GOCS);}
			if(!isMO){A=parseIHcode(GOCS,bbCode,msgStr,SGbbR);GOCS=A[0];bRgb=A[2];iRgb=A[1];}
			GOCS=parseGBBMarkers(GOCS);
			if(!bRgb){msgStr=msgStr.replace("["+bbCode+"="+(SGbbR?SGbbR:"")+"]",GOCS);}}
		if(!isMO&&bRgb&&msgStr.indexOf("["+bbCode+"="+(SGbbR?SGbbR:"")+"]")>-1&&msgStr.indexOf("[/"+bbCode+"]")>-1){
			msgStr=msgStr.replace("["+bbCode+"="+(SGbbR?SGbbR:"")+"]"+(iRgb?iRgb:"")+"[/"+bbCode+"]",GOCS);}
		if((msgStr.indexOf('['+bbCode+']')>-1||(!isMO&&msgStr.indexOf('[/'+bbCode+']')>-1))&&!bRgb){
			GCS=parseGBBPms(GCS);
			GCS=parseGBBMarkers(GCS);
			if(!isMO){
				A=parseIHcode(GCS,bbCode,msgStr);GCS=A[0];iRGbb=A[1],bRgb=A[2];
				if(bRgb){
					msgStr=msgStr.replace('['+bbCode+']'+(iRGbb?iRGbb:"")+'[/'+bbCode+']',GCS);}
				else{
					if(msgStr.indexOf('['+bbCode+']')>-1){
						msgStr=msgStr.replace('['+bbCode+']',GCS);}
					if(msgStr.indexOf('[/'+bbCode+']')>-1){
						msgStr=msgStr.replace('[/'+bbCode+']',(GCE?GCE:""));}}}
			else{
				if(msgStr.indexOf('['+bbCode+']')>-1){msgStr=msgStr.replace('['+bbCode+']',GCS);}}}}
	return(msgStr);
}

function RetTABLES(siteTableContents){
	StringTDR='';
	siteTableContents=siteTableContents.replace("[table]",defTableStartCode).replace("[/table]",defTableEndCode);
	siteTableContents=siteTableContents.replace("[tr]",defTRStartCode).replace("[/tr]",defTREndCode);
	if(siteTableContents.indexOf("[td colspan=")>-1){
		StringTDR=GetFStartTEnd(siteTableContents,"[td colspan=","[td","]");
		siteTableContents=siteTableContents.replace("[td colspan="+StringTDR+"]",defPRETDStartCode+" colspan="+StringTDR+defPOSTTDStartCode).replace("[/td]",defTDEndCode);}
	siteTableContents=siteTableContents.replace("[td]",defPRETDStartCode+defPOSTTDStartCode).replace("[/td]",defTDEndCode);
	return(siteTableContents);
}

function HasBBTag(str,strtyp,typ){
	if(!strtyp||strtyp==null||strtyp==''){return false;}
	if(!typ||typ==''){
		if(strtyp==1){
			if((str.lastIndexOf('[' + defCut + ']')>-1)||(str.lastIndexOf('[' + defCut + '=')>-1)||(str.lastIndexOf('[/' + defCut + ']')>-1)){return true;}
		}else if(strtyp==2){
			if((str.lastIndexOf('[table]')>-1)||(str.lastIndexOf('[tr]')>-1)||(str.lastIndexOf('[td]')>-1)||(str.lastIndexOf('[td colspan')>-1)||(str.lastIndexOf('[/table]')>-1)||(str.lastIndexOf('[/tr]')>-1)||(str.lastIndexOf('[/td]')>-1)){return true;}}
	}else{
		if((str.lastIndexOf('['+strtyp+']')>-1)||(str.lastIndexOf('[/'+strtyp+']')>-1)||(str.lastIndexOf('['+strtyp+'=')>-1)){return true;}}
	return false;
}

function ParseSiteMessage(siteMessage,strSiteMessage,i){
	var strSiteMessage,currSiteMessage=siteMessage,parsesm_array=_tag_array();
	for(d=0;d<parsesm_array.length;d++){
		parsesm_array_cur=parsesm_array[d];
		for(qw=0;qw<parsesm_array_cur.length;qw++){
			parsesm_array_cur_acts=parsesm_array_cur[qw];
			if(parsesm_array_cur_acts[0]=="Type"){
				_tag_type=parsesm_array_cur_acts[1];}
			if(parsesm_array_cur_acts[0]=="Value"){
				_tag_value=parsesm_array_cur_acts[1];}
			if(parsesm_array_cur_acts[0]=="Code"){
				_tag_special=parsesm_array_cur_acts[1];}}
		if(_tag_type==4){
			while(HasBBTag(siteMessage,_tag_value,_tag_type)){
				siteMessage=RetGenericBB(siteMessage,_tag_value,_tag_special);}}
		else if(_tag_type==3){
			while(HasBBTag(siteMessage,_tag_value,_tag_type)){
				siteMessage=RetGenericBB(siteMessage,_tag_value,_tag_special,true);}}
		else if(_tag_type==2){
			while(HasBBTag(siteMessage,_tag_type,'')){
				siteMessage=RetTABLES(siteMessage);}}
		else if(_tag_type==1){
			while(HasBBTag(siteMessage,_tag_type,'')){
				siteMessage=RetSpoiler(siteMessage);}}
		_tag_type=0;_tag_value=null;_tag_special=null;}
	if(strSiteMessage&&currSiteMessage!=siteMessage){strSiteMessage=strSiteMessage.replace(currSiteMessage,siteMessage);}
	if(!strSiteMessage) strSiteMessage=siteMessage;
	return(strSiteMessage);
}

function bbParse(strSiteMessage){
	if(disableBBInCode)
	{
		arrSiteRE=new RegExp("<DIV class=['\"]?bbCodeBlock['\"]?.*?>","ig");
		arrSiteRE2=new RegExp("<DIV class=['\"]?bbCodeName['\"]?.*?>","i");
		arrSiteRE3=new RegExp("<\/DIV><\/DIV>","i");
		arrSiteMessage=strSiteMessage.split(arrSiteRE);
		for(i=0;i<arrSiteMessage.length;i++){
			currentSM=arrSiteMessage[i];
			if(arrSiteRE2.test(currentSM)==true){
				arrSiteRE4=arrSiteRE3.exec(currentSM)[0];
				currentSM=currentSM.slice(currentSM.indexOf(arrSiteRE4)+arrSiteRE4.length);}
			strSiteMessage=ParseSiteMessage(currentSM,strSiteMessage,i);}
	}
	else
	{
		strSiteMessage=ParseSiteMessage(strSiteMessage,0,0);
	}
	return(strSiteMessage);
}

this.bbParse=bbParse;

this.bbComplete=function(ID){
	document.getElementById("msg"+ID).innerHTML=bbParse(document.getElementById("msg"+ID).innerHTML);
	var blels=getBlinks();for(var blel=0;blel<blels.length;blel++){startBlink(blels[blel])();}
	return true;
}

this.StartBBComplex=function(){
	siteBBPanel=document.addform;
	if(siteBBPanel&&siteBBPanel.innerHTML.indexOf("{?BBPANEL?}")>-1){
		siteBBPanel.innerHTML=siteBBPanel.innerHTML.replace("{?BBPANEL?}",BBCPanel());}
	siteTDs=document.getElementsByTagName("td");
	for(std_f=0;std_f<siteTDs.length;std_f++){
		if(siteTDs[std_f].className=="posttdMessage"){
			siteCTDH=siteTDs[std_f].innerHTML;
			siteTDs[std_f].innerHTML=bbParse(siteCTDH);}}
	siteDIVs=document.getElementsByTagName("div");
	for(std_f=0;std_f<siteDIVs.length;std_f++){
		if(siteDIVs[std_f].className=="cMessage"||siteDIVs[std_f].id=="block21"){
			siteCTDH=siteDIVs[std_f].innerHTML;
			siteDIVs[std_f].innerHTML=bbParse(siteCTDH);}}
	var blels=getBlinks();for(var blel=0;blel<blels.length;blel++){startBlink(blels[blel])();}
	return true;
}
this.oncetag=function(tag,wh){doInsert("["+tag+"]","",false,wh);}

this.tag_cut=function(wh,ev){
	if(ev&&ev.altKey){this.simpletag(defCut,'','','message','');return;}
	var x1="";var enterCODE=isSelected(wh),enterTITLE=prompt("Введите заголовок спойлера",DefaultSpoilerText);
	if(!enterTITLE){return;}if(AlwaysHideSpoilersFromGuests==false&&confirm("Скрывать спойлер от гостей?")){x1=" noguest";}
	if(enterTITLE==DefaultSpoilerText){doInsert("["+defCut+x1+"]"+enterCODE+"[/"+defCut+"]","",false,wh);
	}else{doInsert("["+defCut+x1+"="+enterTITLE+"]"+enterCODE+"[/"+defCut+"]","",false,wh);}
}

this.tag_image=function(wh,ev){
	this.advtagQ('img',[text_enter_image],['../../my_picture.jpg'],false,[true,false],false,false,wh,ev);}
this.tag_email=function(wh,ev){
	this.advtagQ('email',[text_enter_email],['anyone@example.com'],[EMLrXp],[true,true],false,false,wh,ev);}
this.tag_hide=function(wh,ev){
	this.advtagQ('hide',['Введите необходимое количество постов'],['0'],[HIDrXp],[false,false],false,true,wh,ev);}
this.tag_url=function(wh,ev){
	this.advtagQ('url',[text_enter_url,text_enter_url_name],['../../index.html','My WebPage'],false,[true,true],[false,true],false,wh,ev);}
this.tag_video=function(wh,ev){
	this.advtagQ('video',["Введите URL-адрес"],["../../watch?v=);}
this.tag_flash=function(wh,ev){
	this.advtagQ(defFlash,["Введите URL-адрес"],["../../my_flash.swf);}
this.tag_flv=function(wh,ev){
	this.advtagQ(defPlayer,["Введите URL-адрес"],["../../my_video.flv);}
this.tag_stext=function(wh,ev){
	this.advtagQ(defSText,["Введите текст подсказки"],[defSTextTitle],false,[false,true],[false,true],true,wh,ev);}
this.tag_icq=function(wh,ev){this.advtagQ(defICQ,["Введите номер ICQ"],false,[eCRegExp],[true,false],false,false,wh,ev);}
this.tag_audio=function(wh,ev){
	this.advtagQ('audio',["Введите URL-адрес"],["../../my_music.mp3);}

this.tag_table=function(wh,ev)
{
	if(ev&&ev.altKey){doInsert('[table][tr][td colspan=2][/td][/tr][tr][td][/td][td][/td][/tr][/table]',"",false,wh);return;}
	var trows=false,tcols=false,TblRegExp=/^\d+$/;
	trows=prompt("Введите количество строк таблицы","");
	while(trows&&(!TblRegExp.test(trows)||trows>100)){trows=prompt("Введите количество строк таблицы","");}
	if(!trows||trows==0){return;}
	tcols=prompt("Введите количество столбцов таблицы","");
	while(tcols&&(!TblRegExp.test(tcols)||tcols>10)){tcols=prompt("Введите количество столбцов таблицы","");}
	if(!tcols||tcols==0){return;}
	tblcodes="[table]";
	for(p=0;p<trows;p++){tblcodes+="[tr]";for(u=0;u<tcols;u++){tblcodes+="[td][/td]";}tblcodes+="[/tr]";}
	tblcodes+="[/table]";
	doInsert(tblcodes,"",false,wh);
}

this.tag_list=function(wh,ev){
	var enterCODE=isSelected(wh),thelist="";
	if(enterCODE){
		enterCARR=enterCODE.split("\n");
		for(dz=0;dz<enterCARR.length;dz++){if(enterCARR[dz]){thelist+="[*]"+enterCARR[dz]+"\n";}}
	}else{thelist="";}
	if(ev&&ev.altKey){doInsert("[list]\n"+(thelist?thelist:"[*]\n")+"[/list]\n","",false,wh);return;}
	var listvalue="init";
	while(listvalue!=""&&listvalue!=null)
	{
		listvalue=prompt(list_prompt,"");
		if(listvalue!=""&&listvalue!=null){
			thelist+="[*]"+listvalue+"\n";}
	}
	if(thelist!=""){doInsert( "[list]\n"+thelist+"[/list]\n", "",false,wh);}
}

this.advtagQ=function(tag,Q,defQ,uRxpS,bRepSel,bAllowNo,bAllowDef0,wh,ev){
	if(!Q||Q.constructor!=Array){return;}if(!defQ||defQ.constructor!=Array){defQ=[];}if(!uRxpS||uRxpS.constructor!=Array){uRxpS=[];}
	if(Q.length>2||defQ.length>2||uRxpS.length>2){return;}if(!bAllowNo||bAllowNo.constructor!=Array){bAllowNo=[];}
	if(!bRepSel||bRepSel.constructor!=Array){bRepSel=[];}if(!bAllowDef0){bAllowDef0=false;}
	if(ev&&ev.altKey){this.simpletag(tag,'','',wh,'');return;}
	var selection=isSelected(wh),uAnswers=[];
	if(!(selection.length>0&&bRepSel[0]&&!bRepSel[1])){
		uAnswers[0]=prompt(Q[0],defQ[0]?defQ[0]:'');
		while(uAnswers[0]&&((uRxpS[0]&&!uRxpS[0].test(uAnswers[0]))||(defQ[0]&&!bAllowDef0&&uAnswers[0]==defQ[0]))){
			uAnswers[0]=prompt(Q[0],defQ[0]?defQ[0]:'');}
		if(!bAllowNo[0]&&(!uAnswers[0]||uAnswers[0]=='')){return;}}
	if(selection.length>0){uAnswers[1]=selection}else if(Q[1]){
		uAnswers[1]=prompt(Q[1],defQ[1]?defQ[1]:'');
		while(uAnswers[1]&&uRxpS[1]&&!uRxpS[1].test(uAnswers[1])){
			uAnswers[1]=prompt(Q[1],defQ[1]?defQ[1]:'');}
		if(!bAllowNo[1]&&(!uAnswers[1]||uAnswers[1]=='')){return;}}
	if(uAnswers[1]&&bRepSel[1]&&!(bAllowDef0&&uAnswers[0]==defQ[0])){doInsert("["+tag+(uAnswers[0]?"="+uAnswers[0]:'')+"]"+uAnswers[1]+"[/"+tag+"]","",false,wh);
	}else if(uAnswers[1]&&bRepSel[1]&&(bAllowDef0&&uAnswers[0]==defQ[0])){
		doInsert("["+tag+"]"+uAnswers[1]+"[/"+tag+"]","",false,wh);
	}else if(uAnswers[1]&&!bRepSel[1]&&!(bAllowDef0&&uAnswers[0]!=defQ[0])){
		doInsert("["+tag+"]"+uAnswers[1]+"[/"+tag+"]","",false,wh);
	}else if(bRepSel[0]){doInsert("["+tag+"]"+(uAnswers[0]?uAnswers[0]:'')+"[/"+tag+"]","",false,wh);
	}else if(uAnswers[1]&&bAllowDef0&&uAnswers[0]!=defQ[0]){
		doInsert("["+tag+(uAnswers[0]?"="+uAnswers[0]:'')+"]"+uAnswers[1]+"[/"+tag+"]","",false,wh);
	}else if(!(bAllowDef0&&uAnswers[0]==defQ[0])){doInsert("["+tag+(uAnswers[0]?"="+uAnswers[0]:'')+"][/"+tag+"]","",false,wh);
	}else{doInsert("["+tag+"][/"+tag+"]","",false,wh);}
}

this.symbolinssert=function(symbol,wh){doInsert(symbol,"",false,wh);}

this.DrawPanel=function(){document.write(BBCPanel());}

function BBCPanel(){return('<span style="display:none;"><img src="'+DefMsgIconUrl+_bb_PanelButtonTheme+DefMsgIconBackgroundImageDefault+'" border="0" width="0" height="0"><img src="'+DefMsgIconUrl+_bb_PanelButtonTheme+DefMsgIconBackgroundImageOver+'" border="0" width="0" height="0"><img src="'+DefMsgIconUrl+_bb_PanelButtonTheme+DefMsgIconBackgroundImageMark+'" border="0" width="0" height="0"><img src="'+DefMsgIconUrl+_bb_PanelButtonTheme+DefMsgIconBackgroundImageMarked+'" border="0" width="0" height="0"></span><div class="bbc1" style="padding-right:1px;'+(DefMsgPanelBGImage?'background:url(\''+DefMsgIconUrl+_bb_PanelButtonTheme+DefMsgPanelBGImage+'\');':'')+'">'+panel_array().join("")+'<input type="hidden" name="tagcount" value="0"></div>');}

this.bbc_highlight=function(something, mode, marked)
{
	if(marked){
		_bb_hihglight_array.push(something);
		something.style.backgroundImage="url("+DefMsgIconUrl+_bb_PanelButtonTheme+DefMsgIconBackgroundImageMarked+")";}
	else{
		something.style.backgroundImage=("url("+DefMsgIconUrl+_bb_PanelButtonTheme+(mode?DefMsgIconBackgroundImageOver:DefMsgIconBackgroundImageDefault)+")");}
}

this.bbc_clicklight=function(something){
	something.style.backgroundImage="url("+DefMsgIconUrl+_bb_PanelButtonTheme+DefMsgIconBackgroundImageMark+")";}

this._bb_clearmarkedhighlightfromall=function()
{
	while(_bb_hihglight_array.length>0){
		this.bbc_highlight(_bb_hihglight_array.pop(), false, false);}
}

this._bb_highlightmarkedremove=function(what,stag)
{
	if(what==stag){return;}
	var temparray=new Array();var tempvar=null;
	while(_bb_hihglight_array.length>0){
		tempvar=_bb_hihglight_array.pop();
		if(tempvar!=what){
			temparray.push(tempvar);}
		tempvar=null;}
	_bb_hihglight_array=temparray;
	this.bbc_highlight(what, false, false);
	return true;
}

function _bb_set(value1,value2){return(new Array(value1,value2));}

function _bb_Button(param)
{
	var _button_build_result=null;
	for(i=0;i<param.length;i++){
		if(param[i][0]=="Type"){_bb_type=param[i][1];}
		if(param[i][0]=="Value"){_bb_value=param[i][1];}
		if(param[i][0]=="Where"){_bb_where=param[i][1];}
		if(param[i][0]=="Title"){_bb_title=param[i][1];}
		if(param[i][0]=="GIFImage"){_bb_GIFImage=param[i][1];}
		if(param[i][0]=="Special"){_bb_special=param[i][1];}}
	_button_build_result=_bb_Button_build();
	_bb_reset();
	return(_button_build_result);
}

function _bb_reset()
{
	_bb_type=0;
	_bb_value=null;
	_bb_where="message";
	_bb_name="Кнопка";
	_bb_title="Кнопка";
	_bb_GIFImage="empty";
	_bb_special=null;
}

this._bb_userblock_togglepict=function(tpelement)
{
	if(tpelement.src==DefMsgIconUrl+x_imageBlockIcon_cl){
		tpelement.src=DefMsgIconUrl+x_imageBlockIcon_op;}
	else{
		tpelement.src=DefMsgIconUrl+x_imageBlockIcon_cl;}
}

function new_bb_Block(blockArray)
{
	retBlock=bb_inblock_st();
	retBlock+=blockArray.join("");
	retBlock+=bb_inblock_post_st();
	_bb_blockcount++;
	return(retBlock);
}

function _bb_Button_build()
{
	_bb_button_build_code='<img '+(_bb_value?('id="xbb_button_'+_bb_value+'"'):'')+' align="middle"';
	if(HighLightButtons){
		_bb_button_build_code+='onmousedown="bbcobj.bbc_clicklight(this);" ';
		if((_bb_typearray[_bb_type]=="special"||_bb_typearray[_bb_type]=="simple")&&_bb_value&&HighLightUnclosedTagButtons){
			_bb_button_build_code+='onmouseover="bbcobj.bbc_highlight(this,true,(document.addform.'+(_bb_value=="code"?"codes":_bb_value)+'.value.indexOf(\'*\')>-1?true:false));" onmouseout="bbcobj.bbc_highlight(this,false,(document.addform.'+(_bb_value=="code"?"codes":_bb_value)+'.value.indexOf(\'*\')>-1?true:false));" onmouseup="bbcobj.bbc_highlight(this,true,(document.addform.'+(_bb_value=="code"?"codes":_bb_value)+'.value.indexOf(\'*\')>-1?false:true));" ';}
		else{
			_bb_button_build_code+='onmouseover="bbcobj.bbc_highlight(this,true,false);" onmouseout="bbcobj.bbc_highlight(this,false,false);" onmouseup="bbcobj.bbc_highlight(this, true, false);" ';}}
	_bb_button_build_code+='style="background:'+DefMsgIconBackground+';" border=0 src="'+DefMsgIconUrl+(_bb_PanelImgTheme?"ImgTheme/"+_bb_PanelImgTheme+"/":'')+_bb_GIFImage+'.gif" alt="'+(_bb_value?_bb_value:"button")+'" title="'+_bb_title+'"';
	if(_bb_type<=_bb_typearray.length){
		_bb_button_build_code+='onclick="';
		if(_bb_typearray[_bb_type]=="simple"&&_bb_value){
			_bb_button_build_code+="bbcobj.simpletag('"+_bb_value+"','','','"+_bb_where+"','');";
			_bb_simplecodes_array.push(_bb_value);}
		if(_bb_typearray[_bb_type]=="once"&&_bb_value){
			_bb_button_build_code+="bbcobj.oncetag('"+_bb_value+"','"+_bb_where+"');";}
		if(_bb_special&&_bb_typearray[_bb_type]!="none"){
			_bb_button_build_code+=_bb_special;}
		_bb_button_build_code+='"';}
	_bb_button_build_code+='>';
	if(_bb_value){_bb_button_build_code+=('<input type="hidden" name="'+(_bb_value=="code"?"codes":_bb_value)+'" value="'+_bb_value+'">');}
	_bb_reset();
	return(_bb_button_build_code);
}

//Далее следует часть изменённого bbcodes.js(../../src/bbcodes.js)
//----------------------------bbcodes.js-----------------------------//
var opens=[],bbtags=new Array(),myAgent=navigator.userAgent.toLowerCase(),myVersion=parseInt(navigator.appVersion),is_ie=((myAgent.indexOf("msie")!=-1)&&(myAgent.indexOf("opera")==-1)),is_nav=((myAgent.indexOf('mozilla')!=-1)&&(myAgent.indexOf('spoofer')==-1)&&(myAgent.indexOf('compatible')==-1)&&(myAgent.indexOf('opera')==-1)&&(myAgent.indexOf('webtv')==-1)&&(myAgent.indexOf('hotjava')==-1)),is_win=((myAgent.indexOf("win")!=-1)||(myAgent.indexOf("16bit")!=-1)),is_mac=(myAgent.indexOf("mac")!=-1);

function hstat(msg){try{document.addform.helpbox.value=eval("help_"+msg);}catch(e){}}

function cstat(fi){
	if(!fi){fi='';}
	var c=stacksize(bbtags);
	if((c<1)||(c==null)){c=0;}
	if(!bbtags[0]){c=0;}
	eval('document.addform.tagcount'+fi+'.value='+c);
}

function stacksize(thearray){
	for(i=0;i<thearray.length;i++){
		if((thearray[i]=="")||(thearray[i]==null)||(thearray=='undefined')){return i;}}
	return thearray.length;
}

function pushstack(thearray,newval,fi){
	arraysize=stacksize(thearray);
	thearray[arraysize]=newval;
}

function popstack(thearray){
	arraysize=stacksize(thearray);
	theval=thearray[arraysize-1];
	delete thearray[arraysize-1];
	return theval;
}

this.closeall=function(wh,fi){
	if(!fi){fi='';}
	if(!wh){wh='message';}
	this._bb_clearmarkedhighlightfromall();
	if(bbtags[0]){
		try{
			while(bbtags[0]){
				tagRemove=popstack(bbtags);
				document.getElementById(wh).value+="[/"+tagRemove + "]";
				if((tagRemove!='font')&&(tagRemove!='size')&&(tagRemove!='color')){
					if(tagRemove=='code'){
						eval("document.addform.codes"+fi+".value=' "+tagRemove+" '");
					}else{
						eval("document.addform."+tagRemove+fi+".value=' " + tagRemove + " '");}
					opens[tagRemove+fi]=0;}}}
		catch(e){}
	}
	eval('document.addform.tagcount'+fi+'.value=0');
	bbtags=new Array();
	document.getElementById(wh).focus();
}

this.emoticon=function(tS,wh){doInsert(" "+tS+" ","",false,wh);}

this.alterfont=function(theval,thetag,wh,fi){if(!fi){fi='';}if(theval==0)return;if(doInsert("["+thetag+"="+theval+"]","[/"+thetag+"]",true,wh))	pushstack(bbtags,thetag);cstat(fi);}

this.simpletag=function(thetag,fid,chtxt,wh,fi,di){
	if(!fi){fi='';}if(!di){di='';}
	var tagOpen=opens[thetag+fid];
	if(!tagOpen){
		if(doInsert("["+thetag+(di?"="+di:"")+"]","[/"+thetag+"]",true,wh)){
			opens[thetag+fid]=1;
			if(fid){
				document.getElementById(fid).value=chtxt+'*';
			}else{
				if(thetag=='code'){
					eval("document.addform.codes"+fi+".value+='*'");
				}else{
					eval("document.addform."+thetag+fi+".value+='*'");}}
			pushstack(bbtags,thetag,fi);
			cstat(fi);
			hstat('click_close');
		}else{
			this.bbc_highlight(document.getElementById("xbb_button_"+thetag),false,false);}
	}else{
		lastindex=0;
		for(i=0;i<bbtags.length;i++){if(bbtags[i]==thetag){lastindex=i;}}
		while(bbtags[lastindex]){
			tagRemove=popstack(bbtags);
			doInsert("[/"+tagRemove+"]","",false,wh);
			if((tagRemove!='font')&&(tagRemove!='size')&&(tagRemove != 'color')){
				this._bb_highlightmarkedremove(document.getElementById("xbb_button_"+tagRemove),document.getElementById("xbb_button_"+thetag));
				if(fid){
					document.getElementById(fid).value=chtxt;
				}else{
					if(thetag=='code'){
						eval("document.addform.codes"+fi+".value='"+tagRemove+"'");
					}else{
						eval("document.addform."+tagRemove+fi+".value='"+tagRemove+"'");}}
				opens[tagRemove+fid]=0;}}
		cstat(fi);}
}

function doInsert(ibTag,ibClsTag,isSingle,wh){
	if(!wh){wh='message';}
	var isClose=false,obj_ta=document.getElementById(wh);
	if((myVersion>=4)&&is_ie&&is_win){
		if(obj_ta.isTextEdit){
			obj_ta.focus();
			var sel=document.selection,rng=sel.createRange();
			rng.colapse;
			if((sel.type=="Text"||sel.type=="None")&&rng!=null){
				if(ibClsTag!=""&&rng.text.length>0) ibTag+=rng.text+ibClsTag;
				else if(isSingle) isClose=true;
				rng.text=ibTag;}
		}else{
			if(isSingle) isClose=true;
			obj_ta.value+=ibTag;}
	}else try{
		var txtStart=obj_ta.selectionStart;
		if(!(txtStart>=0)) throw 1;
		var txtEnd=obj_ta.selectionEnd,firstPos=txtStart+ibTag.length,secondPos=txtEnd+ibTag.length,scrollpos=false;
		if(is_nav){scrollpos=obj_ta.scrollTop;}
		if(ibClsTag!=""&&obj_ta.value.substring(txtStart,txtEnd).length>0){
			obj_ta.value=obj_ta.value.slice(0,txtStart)+ibTag+obj_ta.value.slice(txtStart);
			obj_ta.value=obj_ta.value.slice(0,secondPos)+ibClsTag+obj_ta.value.slice(secondPos);
			obj_ta.selectionStart=txtStart;
			obj_ta.selectionEnd=secondPos+ibClsTag.length;
		}else{
			if(isSingle) isClose=true;
			if(isSelected(wh).length>0){
				obj_ta.value=obj_ta.value.slice(0,txtStart)+ibTag+obj_ta.value.slice(txtEnd);
				obj_ta.selectionStart=txtStart;
				obj_ta.selectionEnd=firstPos;
			}else{
				obj_ta.value=obj_ta.value.slice(0,txtStart)+ibTag+obj_ta.value.slice(txtStart);
				obj_ta.selectionStart=txtStart+ibTag.length;
				obj_ta.selectionEnd=txtStart+ibTag.length;}}
		if(scrollpos){obj_ta.scrollTop=scrollpos;}
	}catch(e){
		if(isSingle) isClose=true;
		obj_ta.value+=ibTag;}
	obj_ta.focus();
	return isClose;
}

function isSelected(wh){
	if(!wh){wh='message';}
	var obj_ta=document.getElementById(wh);
	if((myVersion>=4)&&is_ie&&is_win){
		if(obj_ta.isTextEdit){
			obj_ta.focus();
			var sel=document.selection,rng=sel.createRange();
			rng.colapse;
			if((sel.type=="Text"||sel.type=="None")&&rng!=null){
				if(rng.text.length>0){
					return rng.text;}}}
		return '';}
	try{
		var txtStart=obj_ta.selectionStart;
		if(!(txtStart>=0)) throw 1;
		var txtEnd=obj_ta.selectionEnd;
		if(obj_ta.value.substring(txtStart,txtEnd).length>0){
			return obj_ta.value.substring(txtStart,txtEnd);}
	}catch(e){}
	return '';
}
//-------------------------Конец bbcodes.js--------------------------//
}
var bbcobj;if(!bbcobj){bbcobj=new BBComplex();}
var alterfont=bbcobj.alterfont;
var bbComplete=bbcobj.bbComplete;
var bbPrepostFinish=bbcobj.bbPrepostFinish;
var bbPrepostStart=bbcobj.bbPrepostStart;
var bbSubmitFinish=bbcobj.bbSubmitFinish;
var bbSubmitStart=bbcobj.bbSubmitStart;
var closeall=bbcobj.closeall;
var DrawBBCodesPanel=bbcobj.DrawPanel;
var emoticon=bbcobj.emoticon;
var hideblock=bbcobj.hide;
var showblock=bbcobj.show;
var ShowHiddenSpoiler;
var simpletag=bbcobj.simpletag;
var StartBBComplex=bbcobj.StartBBComplex;
var tag_list=bbcobj.tag_list;
//---------------------------Конец скрипта---------------------------//
