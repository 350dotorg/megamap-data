var jq = jQuery;

var props = {
  name: jq("script[src$='350-embed-actionnetwork-wrapper.js']").data("petition"),
  type: jq("script[src$='350-embed-actionnetwork-wrapper.js']").data("type"),
  lang: jq("script[src$='350-embed-actionnetwork-wrapper.js']").data("language"),
  country: jq("script[src$='350-embed-actionnetwork-wrapper.js']").data("country"),
  countryName: jq("script[src$='350-embed-actionnetwork-wrapper.js']").data("country-name"),
  submitButtonText: jq("script[src$='350-embed-actionnetwork-wrapper.js']").data("submit"),
  titleText: jq("script[src$='350-embed-actionnetwork-wrapper.js']").data("title")
};

var _l10n = {
  "fi": {
    "Thank you for your support": "Kiitos tuestasi.",
    "First name": "Etunimi",
    "Last name": "Sukunimi",
    "Postal": "Postinumero *",
    "Sign up": "Ilmoittaudu!",
    "Email": "Sähköposti *",
    "Click here": "Klikkaa tästä",
    "Not": "Ei",
    "Welcome back": "Tervetuloa takaisin"
  },
  "es": {
    "First name": "Nombre",
    "Last name": "Apellido",
    "Postal": "Código Postal *",
    "Country": "País",
    "Language": "Idioma",
    "Sign up": "Inscribirse",
    "Email": "E-mail *",
    "Click here": "Haz clic aquí",
    "Not": "No",
    "Welcome back": "Bienvenido de nuevo",
    "Not in the US?": "¿No está en los Estados Unidos?",
    "Thank you for your support, we'll be in touch with next steps soon.": "Gracias por tu apoyo. Nos pondremos en contacto contigo pronto para comunicarte los próximos pasos."
  },
  "pt": {
    "First name": "Nome",
    "Last name": "Sobrenome",
    "Postal": "CEP *",
    "Country": "País",
    "Language": "Idioma",
    "Sign up": "Inscreva-se",
    "Not in the US?": "Não está nos EUA?",
    "Email": "E-mail *",
    "Click here": "Clique aqui",
    "Not": "Não",
    "Welcome back": "Bem vindo de volta",
    "Thank you for your support, we'll be in touch with next steps soon.": "Obrigad@ pelo seu apoio, enviaremos informações sobre os próximos passos em breve."
  },
  "tr": {
    "First name": "İsim",
    "Last name": "Soyadı",
    "Postal": "Posta Kodu *",
    "Country": "Ülke",
    "Sign up": "Kayıt ol",
    "Not in the US?": "ABD dışında",
    "Language": "Dil",
    "Email": "Email *",
    "Click here": "Buraya Tıkla",
    "Not": "Değil",
    "Welcome back": "Tekrar hoş geldiniz",
    "Thank you for your support, we'll be in touch with next steps soon.": "Desteğin için teşekkürler, bir sonraki adımlarla ilgili iletişimde olacağız"
  },
  "fr": {
    "First name": "Prénom",
    "Last name": "Nom",
    "Postal": "Code Postal *",
    "Country": "Pays",
    "Language": "Langue",
    "Sign up": "Inscrivez-vous",
    "Email": "Adresse Électronique *",
    "Not in the US?": "Pas aux États-Unis?",
    "Click here": "Cliquez ici",
    "Not": "Non",
    "Welcome back": "Accueillir à nouveau",
    "Thank you for your support, we'll be in touch with next steps soon.": "Merci de votre soutien, nous vous contacterons sous peu pour les prochaines étapes."
  },
  "de": {
    "First name": "Vorname",
    "Last name": "Nachname",
    "Postal": "PLZ *",
    "Country": "Land",
    "Language": "Sprache",
    "Sign up": "Anmeldung",
    "Email": "E-Mail-Adresse *",
    "Click here": "Klicke hier",
    "Not in the US?": "Nicht in den USA?",
    "Not": "Nicht",
    "Welcome back": "Willkommen zurück",
    "Thank you for your support, we'll be in touch with next steps soon.": "Danke für eure Unterstützung! Wie es weitergeht, erfahrt ihr in Kürze von uns."
  },  
  "id": {
    "First name": "Nama",
    "Last name": "Nama belakang",
    "Postal": "Kode Pos *",
    "Sign up": "Daftar",
    "Email": "e-mail *",
    "Country": "Negara",
    "Not in the US?": "Di Amerika Serikat tidak ada?",
    "Click here": "Klik disini",
    "Not": "Tidak",
    "Welcome back": "Selamat datang kembali",
    "Thank you for your support, we'll be in touch with next steps soon.": "Terima kasih atas dukungan Anda. Untuk langkah-langkah selanjutnya, kami akan menghubungi lagi dalam waktu dekat."
  },

};

var l10n = function(str) {
  if (props.lang && _l10n[props.lang] && _l10n[props.lang][str]) {
    return _l10n[props.lang][str];
  }
  return str;
};

var showCountry = function() {
  jq('.can_embed #cc_state_drop_wrap, .can_embed .state_wrap').hide();
  jq('.can_embed #cc_state_drop_wrap select, .can_embed .state_wrap select').removeClass('required');
  var that = jq('.can_embed .international_link');
  if (jq(that).parent().parent().hasClass('cc_li_half')) {
    jq(that).parent(".international_link-wrap").slideToggle();
  } else {
    if (jq(that).parents('.event_campaign').length) {
      jq(that).parent(".international_link-wrap").hide();
    } else {
      jq(that).parent(".international_link-wrap").slideToggle();
    }
  }
  jq(that).parent().parent().find("#create-event-state-drop_down").slideToggle();
  jq(that).parent().parent().find('.country_drop_wrap').slideToggle().css('display','block');
  jq(that).parent().parent().find('.country_drop_wrap select').addClass('required');
}
jq(document).ready(function() {
  jq(document).on('can_embed_submitted', function() {
    // do your work here, after the widget form is submitted
    jq('#can_thank_you h1').replaceWith(
      jq("<h3>").html(l10n("Thank you for your support, we'll be in touch with next steps soon.")));
    jq('#can_thank_you h4').hide();
    jq('.can_thank_you_wrap > .clearfix').hide();
    jq('.can_embed #logo_wrap, .can_embed #action_info').attr("style", "display: none !important");
  });
  jq(document).on('can_embed_loaded', function() {
    if (props.titleText) {
      jq('.can_embed h4').text(props.titleText);
    }
    jq('.can_embed #action_info, .can_embed #d_sharing, .can_embed #logo_wrap, .can_embed h2').attr("style", "display: none !important");
    
    jq('.can_embed input#form-first_name').attr('placeholder', l10n('First name'));
    jq('.can_embed input#form-last_name').attr('placeholder', l10n('Last name'));
    jq('.can_embed input#form-zip_code').attr('placeholder', l10n('Postal'));
    if (props.submitButtonText) {
      jq('.can_embed input[type=submit]').val(props.submitButtonText);
    }
    jq('.can_embed input#form-email').attr('placeholder', l10n('Email'));

    jq('.international_link').text(l10n('Not in the US?'));
    
    var welcome = jq('.can_embed #action_welcome_message_inner .left').children(':first');
    welcome.text(l10n("Welcome back") + ', ' + welcome.text().split(',')[1]);
    if (jq('.can_embed #action_welcome_message_inner .left small').length) {
      jq('.can_embed #action_welcome_message_inner .left small').html(
        jq('.can_embed #action_welcome_message_inner .left small').html()
          .replace('Not', l10n('Not'))
          .replace('Click here', l10n('Click here'))
      );
    }
    window.setTimeout(function() {
      if (props.country) {
        showCountry();
        var _option = jq('.can_embed select#form-country option[value='+props.country+']').prop('selected', true);
        if (props.countryName) {
          jq('.can_embed .country_drop_wrap .can_selectInner').text(props.countryName);
        } else {
          jq('.can_embed .country_drop_wrap .can_selectInner').text(_option.text());
        }
      }
      if (props.lang) {
        if (jq("select[name=Language]")) {
          var lang = jq("select[name=Language]").find("option[value="+props.lang+"]").prop("selected", "selected");
          var li = jq("select[name=Language]").closest("li").hide();
          li.prev("label").attr("style", "display: none !important");
          jq('#s2id_Language .select2-chosen').text(lang.text());
        } else {
          jq('<input type="hidden" name="language">').appendTo(".can_embed form");
        }
      }
    }, 50);
  });
});

jq(window).on("load", function() {
  (function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}})(this,document);

  jq("<div id='can-"+props.type+"-area-"+props.name+"' style='width: 100%; max-width: 400px;'></div>").insertAfter("script[src$='350-embed-actionnetwork-wrapper.js']");
  jq('<link>').attr('href', 'https://actionnetwork.org/css/style-embed.css').attr('rel', 'stylesheet').attr('type', 'text/css').appendTo('body');

  __embed_code_loaded = false;
  jq.ajaxPrefilter('script', function(options) { options.cache = true; });
  function add_actionnetwork_embed_code() {
    if (__embed_code_loaded) { return; }
    jq("<script src='https://actionnetwork.org/widgets/v2/"+ props.type + "/" + props.name + "?format=js&source=widget'></script>").insertAfter("script[src$='350-embed-actionnetwork-wrapper.js']");
    __embed_code_loaded = true;
  };
  if (window.yepnope) {
    add_actionnetwork_embed_code();
  } else {
    setTimeout(add_actionnetwork_embed_code, 500);
  }
});
