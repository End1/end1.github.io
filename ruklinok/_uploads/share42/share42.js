




/*
     FILE ARCHIVED ON 0:27:11 Nov 4, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:12:27 May 29, 2014.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/* share42.com | 04.03.2012 | (c) Dimox */
function share42(f){d=document.getElementsByTagName('div');for(var i=0;i<d.length;i++){if(d[i].className.indexOf('share42init')!=-1){if(d[i].getAttribute('data-url')!=-1)u=d[i].getAttribute('data-url');if(d[i].getAttribute('data-title')!=-1)t=d[i].getAttribute('data-title');if(!u)u=location.href;if(!t)t=document.title;u=encodeURIComponent(u);t=encodeURIComponent(t);var s=new Array('"#" onclick="window.open(\'../../sharer.php?u='+u+'&t='+t+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=200, top=200, width=550, height=440, toolbar=0, status=0\') -'+24*j+'px 0" href='+s[j]+' target="_blank"></a>';d[i].innerHTML='<span id="share42">'+l+'</span>';}}};
