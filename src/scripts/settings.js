(function ($) {

    const translations = {
        'site-title': {
            'english': 'Thai Alphabet',
            'russian': 'Тайский Алфавит',
        },
        'vowels': {
            'english': 'Vowels',
            'russian': 'Гласные',
        },
        'short-vowels': {
            'english': 'Short',
            'russian': 'Краткие',
        },
        'long-vowels': {
            'english': 'Long',
            'russian': 'Долгие',
        },
        'basic-vowels': {
            'english': 'Basic vowels',
            'russian': 'Базовые гласные',
        },
        'basic-vowels-single-word': {
            'english': 'Basic',
            'russian': 'Базовые',
        },
        'complex-vowels': {
            'english': 'Complex vowels',
            'russian': 'Составные',
        },
        'complex-vowels-single-word': {
            'english': 'Complex',
            'russian': 'Составные',
        },
        'finals': {
            'english': 'Finals',
            'russian': 'Финали',
        },
        'diphthongs': {
            'english': 'Diphthongs',
            'russian': 'Дифтонги',
        },
        'quasi-letters': {
            'english': 'Quasi-letters',
            'russian': 'Квазибуквы',
        },
        'consonants': {
            'english': 'Consonants',
            'russian': 'Согласные',
        },
        'high-class-consonants': {
            'english': 'High class consonants',
            'russian': 'Согласные высокого класса',
        },
        'middle-class-consonants': {
            'english': 'Middle class consonants',
            'russian': 'Согласные среднего класса',
        },
        'low-class-consonants': {
            'english': 'Low class consonants',
            'russian': 'Согласные низкого класса',
        },
        'high-class': {
            'english': 'High class',
            'russian': 'Высокий класс',
        },
        'middle-class': {
            'english': 'Middle class',
            'russian': 'Средний класс',
        },
        'low-class': {
            'english': 'Low class',
            'russian': 'Низкий класс',
        },
        'sonorant-consonants': {
            'english': 'Sonorant',
            'russian': 'Сонорные',
        },
        'voiceless-consonants': {
            'english': 'Voiceless',
            'russian': 'Глухие',
        },
        'marks': {
            'english': 'Marks',
            'russian': 'Значки',
        },
        'digits': {
            'english': 'Digits',
            'russian': 'Цифры',
        },
        'tones': {
            'english': 'Tones',
            'russian': 'Тоны',
        },
        'other': {
            'english': 'Other',
            'russian': 'Разное',
        },
        'dead-syllable-lowercase': {
            'english': 'dead syllable',
            'russian': 'мёртвый слог',
        },
        'live-syllable-lowercase': {
            'english': 'live syllable',
            'russian': 'живой слог',
        },
        'about-sonorant-consonants': {
            'english': ''
                + '<p>These letters give sonorous sounds. When pronouncing such sounds, the voice (tone) is greater than the noise. For example in English language it is L, R, M, N, Y, W sounds.</p>'
                + '<p>This is an important for learning the rules of reading. If the sonorant consonant is at the end of a syllable, then a live syllable is formed. All other consonants of all classes at the end of a syllable form a dead syllable.</p>'
            ,
            'russian': ''
                + '<p>Дают сонорные звуки — звуки без глухой пары (например Б-П). При произнесении таких звуков, голоса (тона) больше, чем шума. В русском языке — это звуки Р, Л, М, Н, Й, например.</p>'
                + '<p>Это важный момент для изучения правил чтения. Если сонорная согласная стоит в конце слога, то образуется живой слог. Все остальные согласные всех классов в конце слога дают мертвый слог.</p>'
            ,
        },
        'hint-with-colon': {
            'english': 'Hint:',
            'russian': 'Подсказка:',
        },
        'in-closed-syllable': {
            'english': 'in closed<br> syllable',
            'russian': 'в закрытом<br> слоге',
        },
        'in-closed-syllable-with-yo-yak': {
            'english': 'in closed syllable<br> ending with <span class="thai">ย</span>',
            'russian': 'в закрытом<br> оканчив-ся на <span class="thai">ย</span>',
        },
        'in-closed-syllable-not-ro-ria': {
            'english': 'invisible in a<br> closed syllable<br> ending with<br>anything except <span class="thai">ร</span>',
            'russian': 'невидима<br> в закрытом слоге<br> оканчивающимся<br> не на <span class="thai">ร</span>',
        },
        'milk-example': {
            'english': 'Example: <span class="thai">นม</span> <span class="script" data-notation="nom¯">nom¯</span> — milk',
            'russian': 'Пример: <span class="thai">นม</span> <span class="script" data-notation="nom¯">nom¯</span> — молоко',
        },
        'in-closed-syllable-with-ro-ria': {
            'english': 'invisible in a<br> closed syllable<br> ending with <span class="thai">ร</span>',
            'russian': 'невидима<br> в закрытом слоге<br> оканчивающимся<br> на <span class="thai">ร</span>',
        },
        'tv-series-example': {
            'english': 'Example: <span class="thai">ละคร</span> <span class="script" data-notation="la´khɔ:n¯">la´khɔ:n¯</span> — TV series',
            'russian': 'Пример: <span class="thai">ละคร</span> <span class="script" data-notation="la´khɔ:n¯">la´khɔ:n¯</span> — сериал',
        },
        'ae-sound-keyboard-hint': {
            'english': ''
                + '<p>'
                    + 'Although the writing is identical to the two of <span class="thai">เ</span>,<br>'
                    + 'it is still a separate key on the keyboard: <span class="thai">แ</span>.'
                + '</p>'
                + '<p>'
                    + 'Despite the fact that visually the result looks<br>'
                    + 'the same, correct character should still be used,<br>'
                    + 'so that the typing is validly read by apps such as<br>'
                    + 'autocomplition, translation, search and so on.'
                + '</p>'
            ,
            'russian': ''
                + '<p>'
                    + 'Несмотря на то, что запись идентична двум <span class="thai">เ</span>,<br>'
                    + 'на клавиатуре это отдельный символ <span class="thai">แ</span>.'
                + '</p>'
                + '<p>'
                    + 'Хотя внешне результат и выглядит одинаково,<br>'
                    + 'всё же следует использовать именно этот символ,<br>'
                    + 'чтобы букву правильно считывали приложения<br>'
                    + 'для перевода, автодополнение, поиск и так далее.'
                + '</p>'
            ,
        },
        'finals-hint': {
            'english': ''
                + '<p>'
                    + 'The vowels of this group<br>'
                    + 'come with an additional<br>'
                    + 'sound, as if they were<br>'
                    + 'followed by an additional<br>'
                    + 'consonant. So they always<br>'
                    + 'make a closed syllable.<br>'
                    + 'And there cannot be<br>'
                    + 'another consonant after.'
                + '</p>'
                + '<p>'
                    + 'Reading rules remains<br>'
                    + 'the same as for ordinary<br>'
                    + 'closed syllables.'
                + '</p>'
            ,
            'russian': ''
                + '<p>'
                    + 'Гласные этой группы идут<br>'
                    + 'с дополнительным звуком,<br>'
                    + 'как если бы они добавляли<br>'
                    + 'после себя согласную. Т.е.<br>'
                    + 'всегда образуют закрытый<br>'
                    + 'слог. Ещё одной согласной<br>'
                    + 'после быть не может.'
                + '</p>'
                + '<p>'
                    + 'Правила чтения как<br>'
                    + 'у обычных закрытых слогов.'
                + '</p>'
            ,
        },
        'long-doesnt-exist': {
            'english': 'Long variant<br> does not exist',
            'russian': 'Долгий вариант<br> не существует',
        },
        'am-hint': {
            'english': 'Can be taken as an<br> abbreviation for <span class="thai"><span class="placeholder placeholder--text-alike">◌</span>ัม</span>',
            'russian': 'Можно воспринимать как<br> сокращённую запись <span class="thai"><span class="placeholder placeholder--text-alike">◌</span>ัม</span>',
        },
        'am-reading-hint': {
            'english': 'Additional sound <span class="script" data-notation="m">m</span> here<br> is kinda included into the<br> letter. As a result it gives<br> us a closed live syllable.',
            'russian': 'Здесь дополнительный<br> звук <span class="script" data-notation="м">м</span> как бы включён<br> внутрь буквы. Получается<br> закрытый живой слог.',
        },
        'ay-hint': {
            'english': 'Can be taken as an<br> abbreviation for <span class="thai"><span class="placeholder placeholder--text-alike">◌</span>ัย</span>',
            'russian': 'Можно воспринимать как<br> сокращённую запись <span class="thai"><span class="placeholder placeholder--text-alike">◌</span>ัย</span>',
        },
        'ay-reading-hint': {
            'english': 'Additional sound <span class="script" data-notation="y">y</span> here<br> is kinda included into the<br> letter. As a result it gives<br> us a closed live syllable.',
            'russian': 'Здесь дополнительный<br> звук <span class="script" data-notation="y">y</span> как бы включён<br> внутрь буквы. Получается<br> закрытый живой слог.',
        },
        'au-hint': {
            'english': ''
                + '<p>'
                    + 'Can be taken as an<br>'
                    + 'abbreviation for <span class="thai"><span class="placeholder placeholder--text-alike">◌</span>ะ</span> + <span class="thai">ว</span>.'
                + '</p>'
                + '<p>'
                    + 'In this hint it\'s separated<br>'
                    + 'with plus for not being<br>'
                    + 'mistaken with <span class="thai"><span class="placeholder placeholder--text-alike">◌</span>ัว</span><br>'
                    + 'diphthong (see above).'
                + '</p>',
            'russian': ''
                + '<p>'
                    + 'Можно воспринимать как<br>'
                    + 'сокращённую запись <span class="thai"><span class="placeholder placeholder--text-alike">◌</span>ะ</span> + <span class="thai">ว</span>'
                + '</p>'
                + '<p>'
                    + 'В этой подсказке запись<br>'
                    + 'разделена плюсом чтобы<br>'
                    + 'не путать с дифтонгом <span class="thai"><span class="placeholder placeholder--text-alike">◌</span>ัว</span><br>'
                    + '(смотри выше).'
                + '</p>',
        },
        'au-reading-hint': {
            'english': 'Additional sound <span class="script" data-notation="y">y</span> here<br> is kinda included into the<br> letter. As a result it gives<br> us a closed live syllable.',
            'russian': 'Здесь дополнительный<br> звук <span class="script" data-notation="y">y</span> как бы включён<br> внутрь буквы. Получается<br> закрытый живой слог.',
        },
        'called-may-malay': {
            'english': 'Called<br> “May Malay”',
            'russian': 'Называется<br> «май малай»',
        },
        'called-may-muan': {
            'english': 'Called<br> “May Muan”',
            'russian': 'Называется<br> «май муан»',
        },
        'diphthongs-note': {
            'english': ''
                + '<p>'
                    + 'Two vowel sounds merge. When<br>'
                    + 'pronouncing, one smoothly turns<br>'
                    + 'into the other.'
                + '</p>'
                + '<p>'
                    + 'It does not affect the reading<br>'
                    + 'rules though. You can think about<br>'
                    + 'diphthongs as ordinary vowels.<br>'
                + '</p>'
            ,
            'russian': ''
                + '<p>'
                    + 'Сливаются два гласных звука.<br>'
                    + 'При произношении один<br>'
                    + 'плавно переходит в другой.'
                + '</p>'
                + '<p>'
                    + 'На правила чтения это никак<br>'
                    + 'не влияет. Воспринимать<br>'
                    + 'и изучать дифтонги можно<br>'
                    + 'как обычные гласные.'
                + '</p>'
            ,
        },
        'ia-reading-hint': {
            'english': ''
                + 'Example: <span class="thai">เรียน</span> — learn<br>'
                + 'Supposed to be <span class="script" data-notation="ri:an¯">ri:an¯</span>,<br>'
                + 'but reads as <span class="script" data-notation="ri:ən¯">ri:ən¯</span>.'
            ,
            'russian': ''
                + 'Пример: <span class="thai">เรียน</span> — учиться<br>'
                + 'Должно читаться <span class="script" data-notation="ri:an¯">ri:an¯</span>,<br>'
                + 'но читается <span class="script" data-notation="ri:ən¯">ri:ən¯</span>.'
            ,
        },
        'pristine-white-example': {
            'english': 'Example: <span class="thai">ขาวจั๊วะ</span> — pristine white',
            'russian': 'Пример: <span class="thai">ขาวจั๊วะ</span> — кипенно-белый',
        },
        'ua-difton-same-consonant': {
            'english': ''
                + 'Not to be confused with <span class="thai">ว</span> consonant.<br>'
                + 'That one is just <span class="script" data-notation="w">w</span> or <span class="script" data-notation="u">u</span> if at the end<br>'
                + 'of a syllable. And this one is the <span class="script" data-notation="u:a">u:a</span><br>'
                + 'diphthong in between two consonants.<br>'
                + 'Example: <span class="thai">สวน</span> <span class="script" data-notation="su:anˇ">su:anˇ</span> — park.'
            ,
            'russian': ''
                + 'Не путать с согласной <span class="thai">ว</span> — там<br>'
                + 'просто <span class="script" data-notation="w">w</span>, или <span class="script" data-notation="u">u</span> если в конце слога.<br>'
                + 'А здесь именно дифтонг <span class="script" data-notation="u:a">u:a</span> между<br>'
                + 'двумя согласными.<br>'
                + 'Пример: <span class="thai">สวน</span> <span class="script" data-notation="su:anˇ">su:anˇ</span> — парк.'
            ,
        },
        'quasi-heading-hing': {
            'english': 'These set up<br> whole syllable.',
            'russian': 'По-сути обозначают<br> сразу целый слог.'
        },
        'quasi-ri-details': {
            'english': ''
                + '<p>'
                    + 'Can be taken as an abbreviation<br>'
                    + 'for <span class="thai">รึ</span> <span class="script" data-notation="rɯ´">rɯ´</span> or <span class="thai">ริ</span> <span class="script" data-notation="ri´">ri´</span>. Which one<br>'
                    + 'exactly depends on the word.'
                + '</p>'
                + '<p>'
                    + '• Examples with <span class="thai">รึ</span> <span class="script" data-notation="rɯ´">rɯ´</span>:<br>'
                    + '<span class="thai">ฤดู</span> <span class="script" data-notation="rɯ´du:¯">rɯ´du:¯</span> — season,<br>'
                    + '<span class="thai">พฤกษา</span> <span class="script" data-notation="phrɯk´sa:ˇ">phrɯk´sa:ˇ</span> — flora.'
                + '</p>'
                + '<p>'
                    + '• Examples with <span class="thai">ริ</span> <span class="script" data-notation="ri´">ri´</span>:<br>'
                    + '<span class="thai">อังกฤษ</span> <span class="script" data-notation="ang¯krit">ang¯krit`</span> — England,<br>'
                    + '<span class="thai">ฤทธิ์</span> <span class="script" data-notation="rit´">rit´</span> — might.'
                + '</p>'
                + '<p>'
                    + 'There is one more case that<br> stands out from the scheme<br>'
                    + 'but uses the same glyph:<br> a long sound <span class="thai">เรอ</span> <span class="script" data-notation="rə:¯">rə:¯</span>.'
                + '</p>'
                + '<p>'
                    + '• Example with <span class="thai">เรอ</span> <span class="script" data-notation="rə:¯">rə:¯</span>:<br>'
                    + '<span class="thai">ฤกษ์</span> <span class="script" data-notation="rə:¯">rə:kˆ</span> — occasion.'
                + '</p>'
            ,
            'russian': ''
                + '<p>'
                    + 'Можно воспринимать как<br>'
                    + 'сокращенную запись <span class="thai">รึ</span> <span class="script" data-notation="rɯ´">rɯ´</span> или <span class="thai">ริ</span> <span class="script" data-notation="ri´">ri´</span>.<br>'
                    + 'Какую из — зависит от слова.'
                + '</p>'
                + '<p>'
                    + '• Примеры с <span class="thai">รึ</span> <span class="script" data-notation="rɯ´">rɯ´</span>:<br>'
                    + '<span class="thai">ฤดู</span> <span class="script" data-notation="rɯ´du:¯">rɯ´du:¯</span> — время года,<br>'
                    + '<span class="thai">พฤกษา</span> <span class="script" data-notation="phrɯk´sa:ˇ">phrɯk´sa:ˇ</span> — Флора.'
                + '</p>'
                + '<p>'
                    + '• Примеры с <span class="thai">ริ</span> <span class="script" data-notation="ri´">ri´</span>:<br>'
                    + '<span class="thai">อังกฤษ</span>	<span class="script" data-notation="ang¯krit">ang¯krit`</span> — Англия,<br>'
                    + '<span class="thai">ฤทธิ์</span>	<span class="script" data-notation="rit´">rit´</span> — доблесть.'
                + '</p>'
                + '<p>'
                    + 'Ещё один вариант, выбивающийся<br>'
                    + 'из общей схемы, но использующий <br>'
                    + 'этот же значок — долгий звук <span class="thai">เรอ</span> <span class="script" data-notation="rə:¯">rə:¯</span>.'
                + '</p>'
                + '<p>'
                    + '• Пример с <span class="thai">เรอ</span> <span class="script" data-notation="rə:¯">rə:¯</span>:<br>'
                    + '<span class="thai">ฤกษ์</span> <span class="script" data-notation="rə:¯">rə:kˆ</span> — повод, обстоятельство.'
                + '</p>'
            ,
        },
        'quasi-ri-long-details': {
            english: 'Can be taken as an<br> abbreviation for <span class="thai">รือ</span>',
            russian: 'Можно воспринимать как<br> сокращенную запись <span class="thai">รือ</span>',
        },
        'ri-tones-hint': {
            'english': 'The high tone is because of<br> the reading rules of <span class="thai">รึ</span> / <span class="thai">ริ</span>',
            'russian': 'Высокий тон получается<br> из правил чтения <span class="thai">รึ</span> / <span class="thai">ริ</span>',
        },
        'rohan-about': {
            'english': ''
                + '<p>'
                    + 'The sound is identical to <span class="thai"><span class="placeholder placeholder--text-alike">◌</span>ัน</span>.<br>'
                    + 'Example: <span class="thai">กรรไกร</span> <span class="script" data-notation="kan¯kray¯">kan¯kray¯</span> — scissors.'
                + '</p>'
                + '<p>'
                    + 'The glyph is identical to the consonant <span class="thai">ร</span>.<br>'
                + '</p>'
                + '<p>'
                    + 'Not to be confused with abbreviations:<br>'
                    + '<span class="thai">ร.ร.</span> = โรงเรียน <span class="script">ro:ng¯ri:ən¯</span> — school,<br>'
                    + '<span class="thai">รร.</span> = โรงแรม <span class="script">ro:ng¯rɛ:m¯</span> — hotel.'
                + '</p>',
            'russian': ''
                + '<p>'
                    + 'Звучание идентично <span class="thai"><span class="placeholder placeholder--text-alike">◌</span>ัน</span>. Пример:<br>'
                    + '<span class="thai">กรรไกร</span> <span class="script" data-notation="kan¯kray¯">kan¯kray¯</span> — ножницы.'
                + '</p>'
                + '<p>'
                    + 'Значок идентичен согласной <span class="thai">ร</span>.<br>'
                + '</p>'
                + '<p>'
                    + 'Не путать с аббревиатурами:<br>'
                    + '<span class="thai">ร.ร.</span> = โรงเรียน <span class="script">ro:ng¯ri:ən¯</span> — школа,<br>'
                    + '<span class="thai">รร.</span> = โรงแรม <span class="script">ro:ng¯rɛ:m¯</span> — отель.'
                + '</p>',
        },
        'rohan-examples': {
            'english': 'Examples:<br> <span class="thai">กรรม</span> <span class="script" data-notation="kam¯">kam¯</span> — karma,<br> วรรค <span class="script" data-notation="wak´">wak´</span> — paragraph.',
            'russian': 'Примеры:<br> <span class="thai">กรรม</span> <span class="script" data-notation="kam¯">kam¯</span> — карма,<br> วรรค <span class="script" data-notation="wak´">wak´</span> — абзац.'
        },
        'word-khai': {
            'english': 'egg',
            'russian': 'яйцо',
        },
        'word-ching': {
            'english': '“cymbals”  —<br> mus. instrument',
            'russian': '«кастаньеты» —<br> муз. инструмент',
        },
        'word-sia': {
            'english': 'tiger',
            'russian': 'тигр',
        },
        'word-risi': {
            'english': 'hermit',
            'russian': 'отшельник',
        },
        'word-sala': {
            'english': 'pavilion',
            'russian': 'беседка',
        },
        'word-thung': {
            'english': 'sack, bag',
            'russian': 'мешок, пакет',
        },
        'word-than': {
            'english': 'base, pedestal',
            'russian': 'основание,<br> пьедестал',
        },
        'word-phing': {
            'english': 'bee',
            'russian': 'пчела',
        },
        'word-fa': {
            'english': 'lid',
            'russian': 'крышка',
        },
        'word-hip': {
            'english': 'chest, box',
            'russian': 'сундук',
        },
        'word-kai': {
            'english': 'chicken',
            'russian': 'курица',
        },
        'word-jan': {
            'english': 'plate',
            'russian': 'тарелка',
        },
        'word-dek': {
            'english': 'child',
            'russian': 'ребенок',
        },
        'word-chada': {
            'english': '“Chada” —<br> headdress',
            'russian': '«чада» —<br> головной убор',
        },
        'word-tau': {
            'english': 'turtle',
            'russian': 'черепаха',
        },
        'word-patak': {
            'english': 'goad, javelin',
            'russian': 'палка погонщика<br> с острым концом',
        },
        'word-baimai': {
            'english': 'leaf',
            'russian': 'листок',
        },
        'word-pla': {
            'english': 'fish',
            'russian': 'рыба',
        },
        'word-ang': {
            'english': 'basin, bowl,<br> bathtub, sink',
            'russian': 'бадья, большая<br> ёмкость для воды',
        },
        'word-nu': {
            'english': 'mouse',
            'russian': 'мышь',
        },
        'word-nen': {
            'english': '“Samanera” —<br> noviciate',
            'russian': '«Шраманера» —<br> послушник',
        },
        'word-ngu': {
            'english': 'snake',
            'russian': 'змея',
        },
        'word-ma': {
            'english': 'horse',
            'russian': 'лошадь',
        },
        'word-yak': {
            'english': '“Yaksha” — myth.<br> character, giant',
            'russian': 'Як — миф.<br> персонаж,<br> великан',
        },
        'word-ying': {
            'english': 'woman',
            'russian': 'женщина',
        },
        'word-weng': {
            'english': 'ring',
            'russian': 'кольцо',
        },
        'word-ling': {
            'english': 'monkey',
            'russian': 'обезьяна',
        },
        'word-jula': {
            'english': 'kite',
            'russian': 'воздушный<br> змей',
        },
        'word-ria': {
            'english': 'boat',
            'russian': 'лодка',
        },
        'word-khwai': {
            'english': 'buffalo',
            'russian': 'буйвол',
        },
        'word-rakhang': {
            'english': 'bell',
            'russian': 'колокол',
        },
        'word-chang': {
            'english': 'elephant',
            'russian': 'слон',
        },
        'word-cho': {
            'english': '“Cho” tree',
            'russian': 'дерево «Че»',
        },
        'word-so': {
            'english': 'chain',
            'russian': 'цепь',
        },
        'word-thahan': {
            'english': 'soldier',
            'russian': 'солдат',
        },
        'word-thong': {
            'english': 'flag',
            'russian': 'флаг',
        },
        'word-montho': {
            'english': 'Montho — <br> name of myth.<br> heroines',
            'russian': 'Монтхо — имя<br> миф. героини',
        },
        'word-phuthau': {
            'english': 'elder',
            'russian': 'старик',
        },
        'word-phan': {
            'english': '“Phan” — offering<br> bowl or tray<br>with pedestal',
            'russian': '«Пхан» —<br> чаша, основание<br> для подношений',
        },
        'word-samphau': {
            'english': 'ship',
            'russian': 'корабль',
        },
        'word-fan': {
            'english': 'teeth',
            'russian': 'зуб',
        },
        'word-nokhu': {
            'english': 'owl',
            'russian': 'филин',
        },
        'ch-aspiration': {
            'english': ''
                + 'Technically <span class="thai">ฉ</span> read aspirated and the sound,<br>'
                + 'should be written as <span class="script" data-notation="chh">chh</span>. But english <span class="script" data-notation="ch">ch</span><br>'
                + 'already sounds soft, and when read <span class="thai">ฉ</span> it is<br>'
                + 'not necessary to add an aspiration. So in<br>'
                + 'transcription we don\'t add second <span class="script" data-notation="h">h</span>.'
            ,
            'russian': ''
                + 'Технически <span class="thai">ฉ</span> читается с придыханием как,<br>'
                + 'и остальные буквы высокого класса, и звук бы<br>'
                + 'должен записываться как <span class="script" data-notation="chh">chh</span>. Но русский <span class="script" data-notation="ch">ch</span><br>'
                + 'и так звучит мягко, и при чтении <span class="thai">ฉ</span> дополнительно<br>'
                + 'добавлять предыхание не нужно. Соответственно<br>'
                + '<span class="script" data-notation="h">h</span> в транскрипцию не записываем.'
            ,
        },
        'dont-exist-end': {
            'english': 'Does not occur at the<br> end of a syllable',
            'russian': 'В конце слога<br> не встречается',
        },
        'ho-hip-as-mark': {
            'english': ''
                + 'It can also work as a glyph that moves the<br>'
                + 'following consonant into a high class.<br> '
                + 'Example: <span class="thai">หมอ</span> <span class="script" data-notation="mɔ:ˇ">mɔ:ˇ</span> — doctor. In this<br>'
                + 'example the high class reading rules<br> apply to the <span class="thai">ม</span>.'
            ,
            'russian': ''
                + 'Так же может выступать в роли значка<br>'
                + 'для перевода последующей согласной <br>'
                + 'в высокий класс. Пример: <span class="thai">หมอ</span> <span class="script" data-notation="mɔ:ˇ">mɔ:ˇ</span><br> ' +
                '— доктор. Здесь к <span class="thai">ม</span> применяются<br> правила чтения высокого класса.'
            ,
        },
        'o-ang-as-mark': {
            'english': ''
                + '<p>'
                    + '• It can also work as a glyph that moves the<br>'
                    + 'following consonant into a middle class.<br>'
                    + 'There are only four words like that:<br>'
                    + '- <span class="thai">อยู่</span> <span class="script" data-notation="yu:`">yu:`</span> — to be somewher<br>'
                    + '- <span class="thai">อยาก</span> <span class="script" data-notation="ya:k`">ya:k`</span> — to want<br>'
                    + '- <span class="thai">อย่า</span> <span class="script" data-notation="ya:`">ya:`</span> — do not<br>'
                    + '- <span class="thai">อย่าง</span> <span class="script" data-notation="ya:ng`">ya:ng`</span> — type, kind, variety; like, as<br>'
                    + 'In this example the middle class reading<br> rules apply to the <span class="thai">ย</span>.'
                + '</p>'
                + '<p>'
                    + '• There is also a vowel with the same spelling.<br>'
                + '</p>'
            ,
            'russian': ''
                + '<p>'
                    + '• Так же может выступать в роли значка<br>'
                    + 'для перевода последующей согласной <br>'
                    + 'в средний класс. Таких слов всего четыре:<br>'
                    + '- <span class="thai">อยู่</span> <span class="script" data-notation="yu:`">yu:`</span> — быть где-то<br>'
                    + '- <span class="thai">อยาก</span> <span class="script" data-notation="ya:k`">ya:k`</span> — хотеть<br>'
                    + '- <span class="thai">อย่า</span> <span class="script" data-notation="ya:`">ya:`</span> — выражение запрета<br>'
                    + '- <span class="thai">อย่าง</span> <span class="script" data-notation="ya:ng`">ya:ng`</span> — род, вид, сорт; образ,<br>'
                    + 'подобие, образец.<br>'
                    + 'Здесь к <span class="thai">ย</span> применяются правила чтения<br> среднего класса.'
                + '</p>'
                + '<p>'
                    + '• Существует гласная буква с идентичной<br> записью.<br>'
                + '</p>'
            ,
        },
        'o-ang-as-placeholder': {
            'english': ''
                + '<p>'
                    + 'Silent consonant. In Thai writing, vowels<br>'
                    + 'cannot go alone without consonants, i.e.<br>'
                    + 'cannot form a syllable on their own. But<br>'
                    + 'a syllable can begin with a vowel sound.<br>'
                    + 'In such cases <span class="thai">อ</span> is used, and the<br>'
                    + ' corresponding vowel is attached to it.<br>'
                    + 'Example: <span class="thai">อะไร</span> <span class="script" data-notation="a`ray¯">a`ray¯</span> — question “what”.'
                + '</p>'
                + '<p>'
                    + 'For the same reason, when writing vowels<br>'
                    + 'in the alphabet, the letter <span class="thai">อ</span> is often used<br>'
                    + 'instead of the placeholder symbol <span class="placeholder placeholder--text-alike">◌</span>.'
                + '</p>'
            ,
            'russian': ''
                + '<p>'
                    + 'Беззвучная согласная. В тайском<br>'
                    + 'письме гласные буквы не могут идти<br>'
                    + 'без согласных, т.е. не могут сами<br>'
                    + 'образовать слог. Но с гласного звука<br>'
                    + 'слог начинаться может. В таких случаях<br>'
                    + 'используется <span class="thai">อ</span>, и соответствующая<br>'
                    + 'гласная привязывается к нему.<br>'
                    + 'Пример: <span class="thai">อะไร</span> <span class="script" data-notation="a`ray¯">a`ray¯</span> — вопрос «какой?».'
                + '</p>'
                + '<p>'
                    + 'По этой же причине, при записи гласных<br>'
                    + 'в алфавите, букву <span class="thai">อ</span> зачастую используют<br>'
                    + 'вместо символа плейсхолдера <span class="placeholder placeholder--text-alike">◌</span>.'
                + '</p>'
            ,
        },
        'o-ang-ending': {
            'english': ''
                + '<p>'
                    + 'Does not occur at the end<br>'
                    + 'of a syllable.'
                + '</p>'
                + '<p>'
                    + 'As a vowel it can be at the<br>'
                    + 'end of an open syllable. In<br>'
                    + 'this case, see the vowel <span class="thai">อ</span>.'
                + '</p>'
            ,
            'russian': ''
                + '<p>'
                    + 'В конце закрытого<br>'
                    + 'слога не встречается.'
                + '</p>'
                + '<p>'
                    + 'Как гласная может<br>'
                    + 'завершать открытый<br>'
                    + 'слог. В таком случае<br>'
                    + 'смотри гласную <span class="thai">อ</span>.'
                + '</p>'
            ,
        },
        'wo-weng-as-vowel': {
            'english': ''
                + '<p>'
                    + 'Similar glyph also used for the variation<br>'
                    + 'of vowel diphthong <span class="thai"><span class="placeholder placeholder--text-alike">◌</span>ัว</span> <span class="script" data-notation="u:a">u:a</span>. Specifically<br>'
                    + 'its variant in closed syllable <span class="placeholder placeholder--text-alike">◌</span><span class="thai">ว</span><span class="placeholder placeholder--text-alike">◌</span>.'
                + '</p>'
                + '<p>'
                    + 'See this diphthong in the vowels column.<br>'
                    + 'Here is another case.'
                + '</p>'
            ,
            'russian': ''
                + '<p>'
                    + 'Таким же символом записывается одна из<br>'
                    + 'вариаций гласного дифтонга <span class="thai"><span class="placeholder placeholder--text-alike">◌</span>ัว</span> <span class="script" data-notation="u:a">u:a</span>,<br>'
                    + 'а именно его форма в закрытом слоге <span class="placeholder placeholder--text-alike">◌</span><span class="thai">ว</span><span class="placeholder placeholder--text-alike">◌</span>.'
                + '</p>'
                + '<p>'
                    + 'Этот дифтонг смотри в табличке гласных.<br>'
                    + 'Здесь иной случай.'
                + '</p>'
            ,
        },
        'wo-weng-as-final': {
            'english': ''
                + 'Similar to english <span class="script">w</span>:<br>'
                + 'Wow, Moscow!<br>'
                + 'Example: <span class="thai">ข้าว</span> <span class="script" data-notation="kha:uˆ">kha:uˆ</span> — rice.'
            ,
            'russian': ''
                + 'Аналогично английскому <span class="script">w</span>:<br>'
                + 'Wow, Moscow!<br>'
                + 'Пример: <span class="thai">ข้าว</span> <span class="script" data-notation="kha:uˆ">kha:uˆ</span> — рис.'
            ,
        },
        'ro-ria-readings': {
            'english': ''
                + '- In combinations <span class="thai">ศร</span>, <span class="thai">สร</span> or <span class="thai">จร</span> letter <span class="thai">ร</span> can be<br>'
                + 'silent. Unreadable itselft and does not affect<br> reading rules:'

                + '<span style="display: block; margin-top: 4px;">'
                    + '• In the <span class="thai">ศร</span> it is always silent. Example <span class="thai">ศรี</span> <span class="script" data-notation="si:ˇ">si:ˇ</span><br>'
                    + '— majesty; glory; honor; splendor'
                + '</span>'

                + '<span style="display: block; margin-top: 4px;">'
                    + '• In the <span class="thai">สร</span> it is silent most of the time.<br>'
                    + 'Example: <span class="thai">สระว่ายน้ำ</span> <span class="script" data-notation="sa`wa:yˆnam´">sa`wa:yˆnam´</span> — pool.'
                + '</span>'

                + '<span style="display: block; margin-top: 4px;">'
                    + '• In the <span class="thai">จร</span> it is always silent. Thought there is<br>'
                    + 'only one word exists: <span class="thai">จริง</span> <span class="script" data-notation="jing¯">jing¯</span> — truth; really?'
                + '</span>'

                + '<br>'
                + '- Combination of <span class="thai">ทร</span> sometimes read as <span class="script" data-notation="s">s</span>.<br>'
                + 'Example: <span class="thai">ทราบ</span> <span class="script" data-notation="sa:pˆ">sa:pˆ</span> — to know.'

                + '<br><br>'
                + '- Combination <span class="thai">รร</span> gives vowel sound. See this <br> vowel at the end of vowels column.'
            ,
            'russian': ''
                + '- В комбинациях <span class="thai">ศร</span>, <span class="thai">สร</span> и <span class="thai">จร</span> буква <span class="thai">ร</span> бывает<br>'
                + 'немой. Не читается и не влияет на правила чтения:'

                + '<span style="display: block; margin-top: 4px;">'
                    + '• В <span class="thai">ศร</span> всегда немая. Пример <span class="thai">ศรี</span> <span class="script" data-notation="si:ˇ">si:ˇ</span><br>'
                    + '— превосходный, блестящий.'
                + '</span>'

                + '<span style="display: block; margin-top: 4px;">'
                    + '• В <span class="thai">สร</span> немая в большинстве случаев.<br>'
                    + 'Пример: <span class="thai">สระว่ายน้ำ</span> <span class="script" data-notation="sa`wa:yˆnam´">sa`wa:yˆnam´</span> — бассейн.'
                + '</span>'

                + '<span style="display: block; margin-top: 4px;">'
                    + '• В <span class="thai">จร</span> всегда немая. Существует только одно<br>'
                    + 'слово: <span class="thai">จริง</span> <span class="script" data-notation="jing¯">jing¯</span> — правда, истина.'
                + '</span>'

                + '<br>'
                + '- Комбинация <span class="thai">ทร</span> иногда читается как <span class="script" data-notation="s">s</span>.<br>'
                + 'Пример: <span class="thai">ทราบ</span> <span class="script" data-notation="sa:pˆ">sa:pˆ</span> — знать, сознавать.'

                + '<br><br>'
                + '- Комбинация <span class="thai">รร</span> даёт гласный звук. Смотри<br> соответствующую гласную в конце алфавита.'
            ,
        },
        'tone-mayek': {
            'english': '<span data-notation="`">`</span> for <b class="consonant-middle">middle</b> and <b class="consonant-high">high</b><br> <span data-notation="ˆ">ˆ</span> for <b class="consonant-low">low</b>',
            'russian': '<span data-notation="`">`</span> для <b class="consonant-middle">ср</b> и <b class="consonant-high">вы</b><br> <span data-notation="ˆ">ˆ</span> для <b class="consonant-low">низ</b>'
        },
        'tone-maytho': {
            'english': '<span data-notation="ˆ">ˆ</span> for <b class="consonant-middle">middle</b> and <b class="consonant-high">high</b><br> <span data-notation="´">´</span> for <b class="consonant-low">low</b>',
            'russian': '<span data-notation="ˆ">ˆ</span> для <b class="consonant-middle">ср</b> и <b class="consonant-high">вы</b><br> <span data-notation="´">´</span> для <b class="consonant-low">низ</b>'
        },
        'tone-maytri': {
            'english': '<span data-notation="´">´</span> for <b class="consonant-middle">middle</b>',
            'russian': '<span data-notation="´">´</span> для <b class="consonant-middle">ср</b>'
        },
        'tone-mayjattawa': {
            'english': '<span data-notation="ˇ">ˇ</span> for <b class="consonant-middle">middle</b>',
            'russian': '<span data-notation="ˇ">ˇ</span> для <b class="consonant-middle">ср</b>'
        },
        'other-thanthakhat': {
            'english': 'Silenced letter',
            'russian': 'Нечитаемая буква'
        },
        'other-mayyamok': {
            'english': 'Word repetition',
            'russian': 'Повтор слова'
        },
        'other-payyannoy': {
            'english': 'Abbreviation',
            'russian': 'Сокращение'
        },
        'other-payyanyay': {
            'english': 'etc.',
            'russian': 'и т.д.'
        },
        'other-bat': {
            'english': 'Baht',
            'russian': 'Бат'
        },
        'bat-hint': {
            'english': ''
                + 'Currency in Thailand.<br>'
                + 'Example: <span class="thai">250฿</span><br>'
                + 'Currency code: <span class="black">THB</span>'
            ,
            'russian': ''
                + 'Валюта в Таиланде.<br>'
                + 'Пример: <span class="thai">250฿</span><br>'
                + 'Код валюты: <span class="black">THB</span>'
        },
        'show-settings': {
            'english': 'Toggle settings',
            'russian': 'Показать настройки'
        },
        'settings': {
            'english': 'Settings',
            'russian': 'Настройки'
        },
        'close': {
            'english': 'Close',
            'russian': 'Закрыть'
        },
        'letters-notation': {
            'english': 'Letters notation',
            'russian': 'Запись букв'
        },
        'letters-default': {
            'english': 'Default',
            'russian': 'По-умолчанию'
        },
        'letters-cyrillic': {
            'english': 'Cyrillic',
            'russian': 'Кириллица'
        },
        'tones-notation': {
            'english': 'Tones notation',
            'russian': 'Запись тонов'
        },
        'tones-marks': {
            'english': 'Marks',
            'russian': 'Значками'
        },
        'tones-digits': {
            'english': 'Digits',
            'russian': 'Числами'
        },
        'tones-letters': {
            'english': 'Letters',
            'russian': 'Буквами'
        },
        'example': {
            'english': 'Example',
            'russian': 'Пример'
        },
        'interface': {
            'english': 'Interface',
            'russian': 'Интерфейс'
        },
        'show-headings': {
            'english': 'Show headings',
            'russian': 'Показывать заголовки'
        },
        'sanskrit-consonants-heading': {
            'english': 'Consonants from Pali/Sanskrit',
            'russian': 'Согласные из Пали/Санскрита'
        },
        'sanskrit-consonants-description': {
            'english': 'These are a lot less common. They differ from ordinary consonants in a more complex writing. You can devote less time to these letters. By hiding them, the alphabet becomes more transparent: 7 letters per class/subclass.<br> Full list: ษ ศ ฐ ฎ ฏ ฬ ณ ญ ฆ ฌ ธ ฑ ฒ ภ.',
            'russian': 'Встречаются сильно реже. Отличаются более сложной записью. Можно уделить этим буквам меньше времени. Скрыв их, алфавит становится более прозрачным: по 7 букв в классе/подклассе. Список: ษ ศ ฐ ฎ ฏ ฬ ณ ญ ฆ ฌ ธ ฑ ฒ ภ.'
        },
        'group-by': {
            'english': 'Group consonants',
            'russian': 'Группировать согласные'
        },
        'group-by-classes': {
            'english': 'By classes',
            'russian': 'По классам'
        },
        'group-by-sounds': {
            'english': 'By sounds',
            'russian': 'По звукам'
        },
        'group-alphabetically': {
            'english': 'Alphabetically',
            'russian': 'В алфавитном порядке'
        },
        'show-about': {
            'english': 'Show about info',
            'russian': 'Показать информацию о проекте'
        },
        'about': {
            'english': 'About',
            'russian': 'О проекте'
        },
        'letter-legend': {
            'english': 'Letter legend',
            'russian': 'Описание буквы'
        },
        'legend-screenshot': {
            'english': '<img class="letter-legend__screenshot" srcset="content/letter-hints-en@2x.png 2x" src="content/letter-hints-en.png" width="182" height="168" alt="">',
            'russian': '<img class="letter-legend__screenshot" srcset="content/letter-hints-ru@2x.png 2x" src="content/letter-hints-ru.png" width="182" height="168" alt="">'
        },
        'legend-letter': {
            'english': 'Thai letter',
            'russian': 'Тайская буква'
        },
        'legend-key': {
            'english': 'Keyboard key',
            'russian': 'Клавиша на клавиатуре'
        },
        'legend-sound': {
            'english': 'Sound',
            'russian': 'Звук'
        },
        'legend-ending-sound': {
            'english': 'Sound if the letter is at the end of a syllable',
            'russian': 'Звук, если буква в конце слога'
        },
        'legend-name': {
            'english': 'Letter name',
            'russian': 'Название буквы'
        },
        'legend-translation': {
            'english': 'Translation of the letter name',
            'russian': 'Перевод названия'
        },
        'ui-translated': {
            'english': 'All elements on the page are voiced by a native speaker. Clicking on the tile reads the entire letter. Additionally, you can click on sounds and on Thai words.',
            'russian': 'Все элементы интерфейса озвучены носителем языка. Клик по всей плитке читает букву целиком. Дополнительно можно кликать по звукам и по тайским словам.'
        },
        'definitions': {
            'english': 'Definitions',
            'russian': 'Определения'
        },
        'open-syllable-definition': {
            'english': '<strong>Open syllable</strong> — syllable containing: consonant + vowel.<br> For example <span class="thai">นา</span> or <span class="thai">นะ</span>.',
            'russian': '<strong>Открытый слог</strong> — слог формата: согласная + гласная.<br> Например <span class="thai">นา</span> или <span class="thai">นะ</span>.'
        },
        'closed-syllable-definition': {
            'english': '<strong>Closed syllable</strong> — syllable containing: consonant + vowel + consonant.<br> For example <span class="thai">นาน</span> or <span class="thai">นัน</span>.',
            'russian': '<strong>Закрытый слог</strong> — слог формата: согласная + гласная + согласная.<br> Например <span class="thai">นาน</span> или <span class="thai">นัน</span>.'
        },
        'bookmarks': {
            'english': 'Bookmarks',
            'russian': 'В закладки'
        },
        'bookmarks-description': {
            'english': 'Add an “Alphabet” shortcut to home screen of your smartphone or computer for a app-like user experience.',
            'russian': 'Добавьте ярлык «Алфавита» на домашний экран, и&nbsp;пользовательский опыт будет сравним с&nbsp;мобильным приложением.'
        },
        'bookmarks-ios-begins': {
            'english': 'On <b>iOS</b> open site in <b>Safari</b>, tap <b><em>Share</em></b>',
            'russian': 'На <b>iOS</b> откройте сайт в&nbsp;<b>Safari</b>, нажмите <b><em>Поделиться</em></b>'
        },
        'bookmarks-ios-ends': {
            'english': 'scroll menu down below the main screen and choose menu item <b class="nobr"><em>Add to Home Screen</em></b>.',
            'russian': 'прокрутите меню вниз, и&nbsp;выберите пункт <b class="nobr"><em>На экран «Домой»</em></b>.'
        },
        'bookmarks-android-begins': {
            'english': 'On <b>Android</b> open site in&nbsp;<b>Chrome</b>, tap <b><em>More</em></b>',
            'russian': 'На <b>Android</b> откройте сайт в&nbsp;<b>Chrome</b>, нажмите <b><em>Ещё</em></b>'
        },
        'bookmarks-android-ends': {
            'english': 'and near the end of the list, find the menu item <b class="nobr"><em>Add to Home Screen</em></b>.',
            'russian': 'и&nbsp;ближе к&nbsp;концу списка найдите пункт меню <b class="nobr"><em>Добавить на гл. экран</em></b>.'
        },
        'bookmarks-desktop-begins': {
            'english': 'On desktops or laptops you can save a shortcut to the site page, so it will open a browser tab when run. In&nbsp;browsers such as <b>Chrome</b> or <b>Edge</b> click <b><em>More</em></b>',
            'russian': 'На домашних компьютерах можно сохранить ярлык на страницу сайта, который откроет вкладку браузера при запуске. В&nbsp;браузерах <b>Chrome</b> или <b>Edge</b> нажмите <b><em>Ещё</em></b>'
        },
        'bookmarks-desktop-ends': {
            'english': 'select <b><em>More Tools</em></b> and then <b><em>Create shortcut…</em></b>. Created shortcut can be dragged to any panel or dock. In <b>Safari</b> bookmark site to favorites, open new tab and drag the site icon from favorites to desktop or dock area next to the Trash.',
            'russian': 'далее выберите <b><em>Дополнительные инструменты</em></b>, затем <b><em>Создать ярлык</em></b>. Получившийся ярлык можно перетащить на&nbsp;любую панель или в док. В&nbsp;<b>Safari</b> добавьте сайт в&nbsp;избранное, откройте новую вкладу и&nbsp;перетащите иконку сайта из&nbsp;избранного на&nbsp;рабочий стол или в&nbsp;область дока рядом с&nbsp;корзиной.'
        },
        'people': {
            'english': 'People',
            'russian': 'Люди'
        },
        'developed-by': {
            'english': '<strong>Developed by:&nbsp;</strong> Anton Shchukin (<a class="link" href="https://t.me/cypher" target="_blank">Telegram</a>)',
            'russian': '<strong>Разработка:&nbsp;</strong> Щукин Антон (<a class="link" href="https://t.me/cypher" target="_blank">Телеграм</a>)'
        },
        'voiced-by': {
            'english': '<strong>Voiced by:&nbsp;</strong> Masha Muay (<a class="link" href="https://www.instagram.com/muaymasha" target="_blank">Instagram</a>)',
            'russian': '<strong>Озвучено:&nbsp;</strong> Муай Маша (<a class="link" href="https://www.instagram.com/muaymasha" target="_blank">Инстаграм</a>)'
        },
        'special-thanks': {
            'english': '<strong>Special thanks to:&nbsp;</strong> Maria, Olga, <span class="nobr">Anton&nbsp;Kochenkov (<a class="link" href="https://t.me/a_kochenkov" target="_blank">Telegram</a>)</span>, <span class="nobr">Angelina&nbsp;Masserovna (<a class="link" href="https://t.me/masserovna" target="_blank">Telegram</a>)</span>, <span class="nobr">Alexandra&nbsp;Antukh (<a class="link" href="https://t.me/alealexal" target="_blank">Telegram</a>)</span>, Evgenii&nbsp;Prokopiev, Roman',
            'russian': '<strong>Благодарности:&nbsp;</strong> Мария, Ольга, <span class="nobr">Антон&nbsp;Коченков (<a class="link" href="https://t.me/a_kochenkov" target="_blank">Телеграм</a>)</span>, <span class="nobr">Ангелина&nbsp;Массерова (<a class="link" href="https://t.me/masserovna" target="_blank">Телеграм</a>)</span>, <span class="nobr">Александра&nbsp;Антух (<a class="link" href="https://t.me/alealexal" target="_blank">Телеграм</a>)</span>, Евгений&nbsp;Прокопьев, Роман'
        },
        'links': {
            'english': 'Links',
            'russian': 'Ссылки'
        },
        'roadmap': {
            'english': '<a class="link" href="https://thaisu.notion.site/thai-alphabet-com-21-22-ca61bc7742f8445988a82cbf6a6a7f5d" target="_blank">Roadmap</a> &nbsp;—&nbsp; Leave a comment in an online document.',
            'russian': '<a class="link" href="https://thaisu.notion.site/thai-alphabet-com-21-22-ca61bc7742f8445988a82cbf6a6a7f5d" target="_blank">Планы по развитию</a> &nbsp;—&nbsp; Оставить комментарий в онлайн-документе.'
        },
        'telegram-chat': {
            'english': '<a class="link" href="https://t.me/thaisu" target="_blank">Telegram chat</a> &nbsp;—&nbsp; Report a bug, suggest an idea.',
            'russian': '<a class="link" href="https://t.me/thaisurussian" target="_blank">Чат в телеграмме</a> &nbsp;—&nbsp; Сообщить об ошибке, предложить идею.'
        },
        'thai-su-link': {
            'english': '<a class="link" href="http://thai.su" target="_blank">thai.su</a> &nbsp;—&nbsp; Parent project with other tools for learning Thai.',
            'russian': '<a class="link" href="http://thai.su" target="_blank">thai.su</a> &nbsp;—&nbsp; Родительский проект с прочими инструментами для изучения тайского языка.'
        },
        'safari-bug': {
            'english': 'Bug on Apple devices',
            'russian': 'Баг на устройствах от Apple'
        },
        'safari-text': {
            'english': ''
                + '<p>'
                    + 'Unfortunately, recent updates to Safari have broken the ability to highlight individual characters in Thai language. Superscript and subscript characters such as some vowels and tone marks just disappear from the page. You can see the bug in action on the test subdomain <a class="link" href="http://safari.thai-alphabet.com">safari.thai-alphabet.com</a>.'
                + '</p>'
                + '<p>'
                    + 'Whatʼs even more worse is the fact that all other browsers on Apple smartphones are forced to use the Safari engine, being nothing more than just itʼs reskin. So they also inherit the bug. Basically there is no choice on the iPhone but to live with this bug.'
                + '</p>'
                + '<p>'
                    + 'On Apple computers, the situation is better. Only Safari is damaged. Other browsers use their own engines and work correctly. On a macbook, it would be better to use Chrome or, for example, Firefox.'
                + '</p>'
                + '<p>'
                    + 'Apple is aware of the problem, but it is unknown if and when they plan to fix it.'
                + '</p>'
                + '<p>'
                    + 'The best thing that can be done for Safari is avoiding the bug by replacing the placeholder character with an en dash and canceling color highlight. This is a less illustrative option, but at least it works:'
                + '</p>'
            ,
            'russian': ''
                + '<p>'
                    + 'К сожалению, последние обновления Safari сломали возможность выделять отдельные символы в тайском языке. Надстрочные и подстрочные символы вроде гласных букв и тонов исчезают со страницы. Взглянуть на баг вживую можно на тестовом поддомене <a class="link" href="http://safari.thai-alphabet.com">safari.thai-alphabet.com</a>.'
                + '</p>'
                + '<p>'
                    + 'Ситуация усугубляется тем, что все остальные браузеры на смартфонах Apple принуждены использовать движок Safari, т.е. по-сути являются не более чем его рескинами, и так же наследуют баг. Другими словами на iPhone нет выбора и придётся смириться с багом.'
                + '</p>'
                + '<p>'
                    + 'На компьютерах Apple ситуация лучше. Повреждён только Safari. Другие браузеры используют свои движки и работают корректно. Т.е. на макбуке лучше использовать Chrome или, например, Firefox.'
                + '</p>'
                + '<p>'
                    + 'Apple в курсе проблемы, но собирается ли её решать, и если собирается, то когда — неизвестно.'
                + '</p>'
                + '<p>'
                    + 'Лучшее что можно сделать для Safari — это обойти баг заменив символ плейсхолдера на короткое тире и убрать выделения цветом. Это менее наглядный, но, тем не менее, рабочий вариант:'
                + '</p>'
            ,
        },
        'safari-no-bug-image': {
            'english': '<img class="safari-bug__screenshot" srcset="content/safari-no-bug-en@2x.png 2x" src="content/safari-no-bug-en.png" width="182" height="168" alt="">',
            'russian': '<img class="safari-bug__screenshot" srcset="content/safari-no-bug-ru@2x.png 2x" src="content/safari-no-bug-ru.png" width="182" height="168" alt="">',
        },
        'safari-bug-image': {
            'english': '<img class="safari-bug__screenshot" srcset="content/safari-bug-en@2x.png 2x" src="content/safari-bug-en.png" width="182" height="168" alt="">',
            'russian': '<img class="safari-bug__screenshot" srcset="content/safari-bug-ru@2x.png 2x" src="content/safari-bug-ru.png" width="182" height="168" alt="">',
        },
        'safari-default': {
            'english': 'How it looks by default.<br> Non-apple devices.',
            'russian': 'Отображение по умолчанию.<br> Устройства не от Apple.',
        },
        'safari-in-safari': {
            'english': 'How it looks in Safari and on Apple smartphones.',
            'russian': 'Отображение в Safari, и&nbsp;на&nbsp;смартфонах Apple',
        },
        'friends': {
            'english': 'Friends',
            'russian': 'Друзья',
        },
        'ruthai': {
            'english': '<strong>RuThai</strong> &nbsp;—&nbsp; Thai language online school for Russian speakers',
            'russian': '<strong>RuThai</strong> &nbsp;—&nbsp; Онлайн-школа тайского языка: <a class="link" href="https://www.instagram.com/ruthai_org" target="_blank">Инстаграм</a>, <a class="link" href="https://www.youtube.com/@ruthai_org" target="_blank">Ютуб</a>',
        },
        'info-other': {
            'english': 'Other',
            'russian': 'Разное',
        },
        'info-thai-language': {
            'english': 'Some translations are taken from the <a class="link" href="http://thai-language.com">thai-language.com</a>',
            'russian': 'Некоторые переводы взяты с <a class="link" href="http://thai-language.com">thai-language.com</a>',
        },
    }

    const $html = $('html');
    const $display = $('.display'); /* Чекбоксы отвечающие за отображение чего либо на странице */


    /* Safari / iOS */

    const isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
    const isIOS = ['iPad', 'iPhone', 'iPod', 'iPad Simulator', 'iPhone Simulator', 'iPod Simulator'].includes(navigator.platform) || (navigator.userAgent.includes("Mac") && "ontouchend" in document); // second part is iPad on iOS 13 detection

    function safariPlaceholder() {
        if (isSafari || isIOS) {
            $('.placeholder').each(function (){
                $(this).replaceWith('–');
            });
        }
    }


    /* 0. При открытии приложения нужно актуализировать все чекбоксы из Local Storage */

    const appState = localStorage.getItem('display');
    if( appState ) {
        appState.replace('display-', '');

        $display.each(function () {
            $(this).prop("checked", appState.indexOf( $(this).val() ) > -1);
        });

    }

    /* Обновляем DOM: язык, нотация, баг в Safari */
    changeLanguage();
    changeTonesNotation();
    safariPlaceholder();


    /* 1. Жонглирование классами видимости в зависимости от чекнутости чекбоксов */

    function display($this) {
        /* Отображаем в <html> */
        if ($this.is(':checked') || $this.is(':indeterminate')) {
            $html.addClass('display-' + $this.val());
        } else {
            $html.removeClass('display-' + $this.val());
        }

        /* Сохраняем в Local Storage */
        localStorage.setItem('display', $html.attr('class').replace(' settings-expanded', '').replace('settings-expanded', ''));

        /* Обновляем DOM: язык, нотация */
        if( $this.attr('name') === 'language' ) { changeLanguage(); }
        if( $this.attr('name') === 'tones' )    { changeTonesNotation(); }
    }

    /* Клик по чекбоксу */
    $display.on('change', function () {
        display($(this));
    });


    /* Функция для перепроверки всех чекбоксов и актуализации соответствующих классов.
     * Ещё это нужно делать когда чекбоксы чекаются жаба-скриптом,
     * поскольку .prop() не вызывает событие onChange.
     */
    function displayAll() {
        $display.each(function () {
            display($(this));
        });
    }


    /* 2. Непосредственно сам чеклист */

    /* Немного адаптированный вот этот сэмпл:
     * https://codepen.io/chriscoyier/pen/JYyXjX
     * (в некоторых местах удвоенны .parent() и .children()
     */

    $('.checklist .choice__widget').change(function (e) {

        const isChecked = $(this).prop("checked");
        const $checklistItem = $(this).parent('.choice').parent('.checklist__item');

        /* Сразу чекаем всех потомков (ну или анчекаем, в общем переводим их все в тот же статус, как чекбокс на который только что кликнули) */
        $checklistItem.find('.choice__widget').prop({
            indeterminate: false,
            checked: isChecked
        });

        /* Поскольку .prop не вызывает onChange надо отвлечься и перепроверить все чекбоксы и актуализировать классы */
        displayAll();

        /* возвращаемся к алгоритму */
        function checkSiblings($checklistItem) {

            const parent = $checklistItem.parent('.checklist').parent('.checklist__item');
            let all = true;

            $checklistItem.siblings().each(function () {
                let returnValue = all = ($(this).children().children('.choice__widget').prop("checked") === isChecked);
                return returnValue;
            });

            if (all && isChecked) {

                parent.children().children('.choice__widget').prop({
                    indeterminate: false,
                    checked: isChecked
                });

                /* Поскольку .prop не вызывает onChange надо отвлечься и перепроверить все чекбоксы и актуализировать классы */
                displayAll();

                /* возвращаемся к алгоритму */
                if ( parent.children().children('.choice__widget').length ) {
                    checkSiblings(parent);
                }

            } else if (all && !isChecked) {

                parent.children('.choice').children('.choice__widget').prop("checked", isChecked);
                parent.children('.choice').children('.choice__widget').prop("indeterminate", (parent.find('.choice__widget:checked').length > 0));

                /* Поскольку .prop не вызывает onChange надо отвлечься и перепроверить все чекбоксы и актуализировать классы */
                displayAll();

                /* возвращаемся к алгоритму */
                if ( parent.children().children('.choice__widget').length ) {
                    checkSiblings(parent);
                }

            } else {

                $checklistItem.parents(".checklist__item").children('.choice').children('.choice__widget').prop({
                    indeterminate: true,
                    checked: false
                });

                /* Поскольку .prop не вызывает onChange надо отвлечься и перепроверить все чекбоксы и актуализировать классы */
                displayAll();

            }

        }

        checkSiblings($checklistItem);
    });




    function changeLanguage() {
        $('[data-i18n]').each(function () {

            /* Берём оригинальный текст (английский): */
            const i18n = $(this).data('i18n');

            let currentLanguage;

            if ($html.hasClass('display-language-english')) {
                currentLanguage = 'english';
            } else if ($html.hasClass('display-language-russian')) {
                currentLanguage = 'russian';
            }

            /* Сформированную строку выводим в DOM */
            $(this).html(translations[i18n][currentLanguage]);

        });

        /* По-идее здесь же надо перезапустить смену нотации поскольку в переводах все нотации дефолтны. */
        /* Но смена нотации и так запускается с каждым display() */
        // changeTonesNotation();

        safariPlaceholder();
    }


    /* Notation -- опции, которые не подхватываются стилями, а которые надо обновлять скриптом внутри DOM */

    function changeTonesNotation() {

        $('[data-notation]').each(function() {

            /* Берём оригинальный текст (нотация thai.su и тоны символами): */
            let notation = $(this).data('notation');

            /* И опция за опцией реплейсим в нём символы: */

            if( $html.hasClass('display-letters-by-russian') ) {
                notation = notation
                    .split('kh').join('кх')
                    .split('th').join('тх')
                    .split('ph').join('пх')
                    .split('ch').join('ч')
                    .split('ng').join('нг')
                    .split('j').join('ть')
                    .split('k').join('к')
                    .split('t').join('т')
                    .split('p').join('п')
                    .split('b').join('б')
                    .split('w').join('в')
                    .split('s').join('с')
                    .split('f').join('ф')
                    .split('h').join('х')
                    .split('d').join('д')
                    .split('r').join('р')
                    .split('l').join('л')
                    .split('m').join('м')
                    .split('n').join('н')
                    .split('y').join('й')
                    .split('a').join('а')
                    .split('i').join('и')
                    .split('u').join('у')
                    .split('ɯ').join('ы')
                    .split('e').join('е')
                    .split('ɛ').join('э')
                    .split('o').join('о')
                    .split('ɔ').join('ɔ')
                    .split('ə').join('ə')
            } else if( $html.hasClass('display-letters-by-pro-language') ) {
                notation = notation
                    .split('kh').join('kh')
                    .split('th').join('th')
                    .split('ph').join('ph')
                    .split('ch').join('ch')
                    .split('ng').join('ng')
                    .split('j').join('j')
                    .split('k').join('k')
                    .split('t').join('t')
                    .split('p').join('p')
                    .split('b').join('b')
                    .split('w').join('w')
                    .split('s').join('s')
                    .split('f').join('f')
                    .split('h').join('h')
                    .split('d').join('d')
                    .split('r').join('r')
                    .split('l').join('l')
                    .split('m').join('m')
                    .split('n').join('n')
                    .split('y').join('y')
                    .split('a').join('a')
                    .split('i').join('i')
                    .split('u').join('u')
                    .split('ɯ').join('<u>u</u>')
                    .split('e').join('e')
                    .split('ɛ').join('<u>a</u>')
                    .split('o').join('о')
                    .split('ɔ').join('<u>о</u>')
                    .split('ə').join('<u>e</u>')
            }

            /* default for letters:
            if( $html.hasClass('display-letters-by-thai.su') ) {
                notation = notation;
            }
            */

            if( $html.hasClass('display-tones-by-digits') ) {
                notation = notation.split('¯').join('⁰')
                        .split('`').join('¹')
                        .split('ˆ').join('²')
                        .split('´').join('³')
                        .split('ˇ').join('⁴')
            }

            if( $html.hasClass('display-tones-by-letters') ) {

                notation = notation.split('¯').join('<sup>M</sup>')
                        .split('`').join('<sup>L</sup>')
                        .split('ˆ').join('<sup>F</sup>')
                        .split('´').join('<sup>H</sup>')
                        .split('ˇ').join('<sup>R</sup>')
            }

            /* default for tones:

            if( $html.hasClass('display-tones-by-marks') ) {
                notation = notation;
            }
            */

            /* Сформированную строку выводим в DOM */
            $(this).html(notation);

        });

        safariPlaceholder();
    }


})(jQuery);
