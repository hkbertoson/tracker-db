var API_ENDPOINT =
	'https://8ayf6eidp0.execute-api.eu-central-1.amazonaws.com/production';
var VOICES = {
	Ivy: 'Ivy [English - American]',
	Joanna: 'Joanna [English - American]',
	Joey: 'Joey [English - American]',
	Justin: 'Justin [English - American]',
	Kendra: 'Kendra [English - American]',
	Kimberly: 'Kimberly [English - American]',
	Matthew: 'Matthew [English - American]',
	Salli: 'Salli [English - American]',
	Nicole: 'Nicole [English - Australian]',
	Russell: 'Russell [English - Australian]',
	Amy: 'Amy [English - British]',
	Emma: 'Emma [English - British]',
	Brian: 'Brian [English - British]',
	Aditi: 'Aditi [English - Indian]',
	Raveena: 'Raveena [English - Indian]',
	Geraint: 'Geraint [English - Welsh]',
	Zeina: 'Zeina [Arabic]',
	Zhiyu: 'Zhiyu [Chinese - Mandarin]',
	Mads: 'Mads [Danish]',
	Naja: 'Naja [Danish]',
	Lotte: 'Lotte [Dutch]',
	Ruben: 'Ruben [Dutch]',
	Mathieu: 'Mathieu [French]',
	Lea: 'Lea [French]',
	Celine: 'Celine [French]',
	Chantal: 'Chantal [Canadian French]',
	Hans: 'Hans [German]',
	Marlene: 'Marlene [German]',
	Vicki: 'Vicki [German]',
	Dora: 'Dora [Icelandic]',
	Karl: 'Karl [Icelandic]',
	Bianca: 'Bianca [Italian]',
	Carla: 'Carla [Italian]',
	Giorgio: 'Giorgio [Italian]',
	Mizuki: 'Mizuki [Japanese]',
	Takumi: 'Takumi [Japanese]',
	Seoyeon: 'Seoyeon [Korean]',
	Liv: 'Liv [Norwegian]',
	Maja: 'Maja [Polish]',
	Jan: 'Jan [Polish]',
	Jacek: 'Jacek [Polish]',
	Ewa: 'Ewa [Polish]',
	Cristiano: 'Cristiano [Portuquese]',
	Ines: 'Ines [Portuquese]',
	Camila: 'Camila [Portuguese, Brazilian]',
	Ricardo: 'Ricardo [Portuguese, Brazilian]',
	Vitoria: 'Vitoria [Portuguese, Brazilian]',
	Carmen: 'Carmen [Romanian]',
	Maxim: 'Maxim [Russian]',
	Tatyana: 'Tatyana [Russian]',
	Penelope: 'Penelope [US Spanish]',
	Miguel: 'Miguel [US Spanish]',
	Lupe: 'Lupe [US Spanish]',
	Conchita: 'Conchita [Castilian Spanish]',
	Lucia: 'Lucia [Castilian Spanish]',
	Enrique: 'Enrique [Castillian Spanish]',
	Mia: 'Mia [Mexican Spanish]',
	Astrid: 'Astrid [Swedish]',
	Filiz: 'Filiz [Turkish]',
	Gwyneth: 'Gwyneth [Welsh]',
};
var NEURAL_VOICES = {
	Ivy: 'Ivy [English - American]',
	Joanna: 'Joanna [English - American]',
	Joey: 'Joey [English - American]',
	Justin: 'Justin [English - American]',
	Kendra: 'Kendra [English - American]',
	Kevin: 'Kevin [English - American]',
	Kimberly: 'Kimberly [English - American]',
	Matthew: 'Matthew [English - American]',
	Salli: 'Salli [English - American]',
	Olivia: 'Olivia [English - Australian]',
	Amy: 'Amy [English - British]',
	Emma: 'Emma [English - British]',
	Brian: 'Brian [English - British]',
	Aria: 'Aria [English - New Zealand]',
	Ayanda: 'Ayanda [English - South African]',
	Arlet: 'Arlet [Catalan]',
	Lea: 'Lea [French]',
	Gabrielle: 'Gabrielle [Canadian French]',
	Vicki: 'Vicki [German]',
	Hannah: 'Hannah [German - Austrian]',
	Bianca: 'Bianca [Italian]',
	Takumi: 'Takumi [Japanese]',
	Seoyeon: 'Seoyeon [Korean]',
	Ines: 'Ines [Portuquese]',
	Camila: 'Camila [Portuguese, Brazilian]',
	Vitoria: 'Vitoria [Portuguese, Brazilian]',
	Lucia: 'Lucia [Castilian Spanish]',
	Mia: 'Mia [Mexican Spanish]',
	Lupe: 'Lupe [US Spanish]',
};
var DEFAULT_VOICE = 'Salli';

$(document).ready(function () {
	// set up voice select

	setUpVoiceSelect();

	// set up info asides

	setUpInfoAsides();

	// load from url params

	loadUrlParams();

	// on form submit, send polly request

	$('#engine-select').on('click', function (e) {
		e.stopPropagation();

		var engine = $('#engine-select option:selected').val();
		setUpVoiceSelect(engine);
	});

	$('#submit').on('click', function (e) {
		e.preventDefault();

		var text = $('#ipa-text').val();
		var voice = $('#polly-voice option:selected').val();
		var engine = $('#engine-select option:selected').val();
		sendToPolly(text, voice, engine);
	});

	// hide share link until something to share
	$('#share').hide();
});

function setUpVoiceSelect(engine) {
	removeOptions(document.getElementById('polly-voice'));

	var VOICELIST = VOICES;
	if (engine == 'neural') {
		VOICELIST = NEURAL_VOICES;
	}

	var $voice = $('#polly-voice');
	$.each(VOICELIST, function (value, name) {
		$voice.append("<option value='" + value + "'>" + name + '</option>');
	});
	$('option[value="' + DEFAULT_VOICE + '"]').prop('selected', true);

	$('#polly-voice').select2({});

	$(document).click(function () {
		$styledSelect.removeClass('active');
		$list.hide();
	});
}

function removeOptions(selectElement) {
	var i,
		L = selectElement.options.length - 1;
	for (i = L; i >= 0; i--) {
		selectElement.remove(i);
	}
}

function setUpInfoAsides() {
	// initially hide all asides

	closeInfoAsides();

	// add close to each aside

	$('aside.info').each(function (idx, $aside) {
		$('<span />', {
			class: 'close',
			text: '×',
		}).appendTo($aside);
	});

	// open corresponding aside based on a[href]

	$('a.info').on('click', function (e) {
		e.stopPropagation();
		closeInfoAsides();

		$($(this).attr('href')).show();
	});

	// close when click close

	$('aside.info .close').on('click', function (e) {
		e.stopPropagation();
		closeInfoAsides();
	});

	// close when click off

	$('body').on('click', function (e) {
		e.stopPropagation();
		if ($(e.target).parents('.box').length == 0) {
			closeInfoAsides();
		}
	});

	function closeInfoAsides() {
		$('aside.info').hide();
	}
}

function loadUrlParams() {
	// grab url params
	var params = new URLSearchParams(window.location.search);

	// parse/load params
	if (params.has('text')) {
		var text = decodeURIComponent(params.get('text'));
		$('#ipa-text').val(text);
	}

	if (params.has('voice')) {
		var voice = decodeURIComponent(params.get('voice'));
		$('#polly-voice option:selected').val(voice);
	}

	setShareUrl();
}

function setShareUrl(audiodata) {
	$('#share').prop('href', 'data:audio/mp3; base64, ' + audiodata);
}

function sendToPolly(text, voice, engine) {
	// clear any previous audio players or errors
	$('audio').remove();
	$('.error').hide();

	// get selected values
	var data = {
		text: text,
		voice: voice || DEFAULT_VOICE,
		engine: engine,
	};

	if (data.text == '') {
		$('.error').text('You must enter SSML formatted text.').show();
		return;
	}

	// prevent multiple submissions
	$('#submit').prop('disabled', 'disabled');

	// submit request
	$.ajax({
		url: API_ENDPOINT,
		type: 'POST',
		data: JSON.stringify(data),
		contentType: 'application/json',
		success: readResponse,
		error: errorResponse,
	});
}

function readResponse(response) {
	var source =
		'<source src="data:audio/mpeg;base64,' +
		response +
		'" type="audio/mpeg"></source>';
	var audio = '<audio autoplay="true" controls>' + source + '</audio>';
	$('.audio').prepend(audio);

	setShareUrl(response);
	$('#share').show();

	reset();
}

function errorResponse(response) {
	console.log(response);
	alert('There was an error processing your request.');
	reset();
}

function reset() {
	$('#submit').prop('disabled', false);
}
