var jq = jQuery;

var props = {
  name: jq("script[src$='350-embed-actionnetwork.js']").data("petition"),
  type: jq("script[src$='350-embed-actionnetwork.js']").data("type"),
  lang: jq("script[src$='350-embed-actionnetwork.js']").data("language"),
  country: jq("script[src$='350-embed-actionnetwork.js']").data("country"),
  countryName: jq("script[src$='350-embed-actionnetwork.js']").data("country-name"),
  submitButtonText: jq("script[src$='350-embed-actionnetwork.js']").data("submit"),
  titleText: jq("script[src$='350-embed-actionnetwork.js']").data("title")
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
    "Thank you for your support": "",
    "First name": "Nombre",
    "Last name": "Apellido",
    "Postal": "Código Postal *",
    "Sign up": "",
    "Email": "E-mail *",
    "Click here": "Haz clic aquí",
    "Not": "No",
    "Welcome back": "Bienvenido de nuevo"
  },
  "pt": {
    "Thank you for your support": "",
    "First name": "Nome",
    "Last name": "Sobrenome",
    "Postal": "Código Postal *",
    "Sign up": "",
    "Email": "E-mail *",
    "Click here": "Clique aqui",
    "Not": "Não",
    "Welcome back": "Bem vindo de volta"
  },
  "tr": {
    "Thank you for your support": "",
    "First name": "İsim",
    "Last name": "Soyadı",
    "Postal": "Posta Kodu *",
    "Sign up": "",
    "Email": "Email *",
    "Click here": "Buraya Tıkla",
    "Not": "Değil",
    "Welcome back": "Tekrar hoş geldiniz"
  },
  "fr": {
    "Thank you for your support": "",
    "First name": "Prénom",
    "Last name": "Nom",
    "Postal": "Code Postal *",
    "Sign up": "",
    "Email": "Adresse Électronique *",
    "Click here": "Cliquez ici",
    "Not": "Non",
    "Welcome back": "Accueillir à nouveau"
  },
  "de": {
    "Thank you for your support": "",
    "First name": "Vorname",
    "Last name": "Nachname",
    "Postal": "PLZ *",
    "Sign up": "",
    "Email": "E-Mail-Adresse *",
    "Click here": "Klicke hier",
    "Not": "Nicht",
    "Welcome back": "Willkommen zurück"
  },  
  "id": {
    "Thank you for your support": "",
    "First name": "Nama",
    "Last name": "Nama belakang",
    "Postal": "Kode Pos *",
    "Sign up": "",
    "Email": "E-mail *",
    "Click here": "Klik disini",
    "Not": "Tidak",
    "Welcome back": "Selamat datang kembali"
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
    jq('#can_thank_you h1').html(l10n('Thank you for your support'));
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
    });
  });
});
jq("<div id='can-"+props.type+"-area-"+props.name+"' style='width: 100%; max-width: 400px;'></div>").insertAfter("script[src$='350-embed-actionnetwork.js']");
jq('<link>').attr('href', 'https://actionnetwork.org/css/style-embed.css').attr('rel', 'stylesheet').attr('type', 'text/css').appendTo('body');
window.yepnope || jq('<script src="https://actionnetwork.org/includes/js/yepnope154-min.js"><\/script>').appendTo('body');
jq("<script src='https://actionnetwork.org/widgets/v2/"+ props.type + "/" + props.name + "?format=js&source=widget'></script>").appendTo('body');
