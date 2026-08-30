document.addEventListener('DOMContentLoaded', () => {
  const DEFAULT_SLUG = 'ensar-camii-mossingen-mossingen-72116-g';
  const DEFAULT_LANG = 'en';
  const DEFAULT_THEME = 'dark';

  const translations = {
    en: {
      toggleHelpBtn: 'Change Mosque',
      txtTitle: 'Change Mosque',
      txtStep1: 'Search Google for your mosque + mawaqit',
      txtStep2: 'Copy the link from the address bar',
      txtStep3: 'Paste the link below and click Save',
      linkInputPlaceholder: 'Paste Mawaqit link...',
      speichernBtn: 'Save',
      pinBtn: '⭐ Pin',
      pinnedSuccess: '✓ Mosque pinned successfully!',
      successMsg: '✓ Mosque saved successfully!',
      errorEmpty: 'Please paste a link first.',
      errorInvalid: 'Invalid link. Please check the Mawaqit link.'
    },
    de: {
      toggleHelpBtn: 'Moschee ändern',
      txtTitle: 'Moschee wechseln',
      txtStep1: 'Suche auf Google nach deiner Moschee + mawaqit',
      txtStep2: 'Kopiere den Link aus der Adresszeile',
      txtStep3: 'Füge den Link unten ein und klicke auf Speichern',
      linkInputPlaceholder: 'Mawaqit Link einfügen...',
      speichernBtn: 'Speichern',
      pinBtn: '⭐ Pinnen',
      pinnedSuccess: '✓ Moschee erfolgreich gepinnt!',
      successMsg: '✓ Moschee erfolgreich gespeichert!',
      errorEmpty: 'Bitte füge zuerst einen Link ein.',
      errorInvalid: 'Ungültiger Link. Bitte Mawaqit-Link prüfen.'
    },
    ar: {
      toggleHelpBtn: 'تغيير المسجد',
      txtTitle: 'تغيير المسجد',
      txtStep1: 'ابحث في Google عن مسجدك + mawaqit',
      txtStep2: 'انسخ الرابط من شريط العنوان',
      txtStep3: 'ألصق الرابط أدناه وانقر على حفظ',
      linkInputPlaceholder: 'أدخل رابط Mawaqit...',
      speichernBtn: 'حفظ',
      pinBtn: '⭐ تثبيت',
      pinnedSuccess: '✓ تم تثبيت المسجد بنجاح!',
      successMsg: '✓ تم حفظ المسجد بنجاح!',
      errorEmpty: 'يرجى إدخال رابط أولاً.',
      errorInvalid: 'رابط غير صالح. يرجى التحقق من رابط Mawaqit.'
    },
    tr: {
      toggleHelpBtn: 'Camiyi Değiştir',
      txtTitle: 'Cami Değiştirme',
      txtStep1: "Google'da caminizi + mawaqit olarak arayın",
      txtStep2: 'Adres çubuğundaki bağlantıyı kopyalayın',
      txtStep3: "Bağlantıyı aşağıya yapıştırın ve Kaydet'e tıklayın",
      linkInputPlaceholder: 'Mawaqit bağlantısını yapıştırın...',
      speichernBtn: 'Kaydet',
      pinBtn: '⭐ Sabitle',
      pinnedSuccess: '✓ Cami başarıyla sabitlendi!',
      successMsg: '✓ Cami başarıyla kaydedildi!',
      errorEmpty: 'Lütfen önce bir bağlantı yapıştırın.',
      errorInvalid: 'Geçersiz bağlantı. Lütfen Mawaqit bağlantısını kontrol edin.'
    },
    ur: {
      toggleHelpBtn: 'مسجد تبدیل کریں',
      txtTitle: 'مسجد تبدیل کریں',
      txtStep1: 'گوگل پر اپنی مسجد + mawaqit تلاش کریں',
      txtStep2: 'ایڈریس بار سے لنک کاپی کریں',
      txtStep3: 'نیچے لنک پیسٹ کریں اور محفوظ کریں پر کلک کریں',
      linkInputPlaceholder: 'Mawaqit لنک درج کریں...',
      speichernBtn: 'محفوظ کریں',
      pinBtn: '⭐ پِن کریں',
      pinnedSuccess: '✓ مسجد کامیابی کے ساتھ پِن ہو گئی!',
      successMsg: '✓ مسجد کامیابی کے ساتھ محفوظ ہو گئی!',
      errorEmpty: 'براہ کرم پہلے ایک لنک درج کریں۔',
      errorInvalid: 'نامعقول لنک۔ براہ کرم Mawaqit لنک چیک کریں۔'
    },
    id: {
      toggleHelpBtn: 'Ubah Masjid',
      txtTitle: 'Ganti Masjid',
      txtStep1: 'Cari masjid Anda + mawaqit di Google',
      txtStep2: 'Salin tautan dari bilah alamat',
      txtStep3: 'Tempelkan tautan di bawah dan klik Simpan',
      linkInputPlaceholder: 'Tempel tautan Mawaqit...',
      speichernBtn: 'Simpan',
      pinBtn: '⭐ Pin',
      pinnedSuccess: '✓ Masjid berhasil disematkan!',
      successMsg: '✓ Masjid berhasil disimpan!',
      errorEmpty: 'Harap tempelkan tautan terlebih dahulu.',
      errorInvalid: 'Tautan tidak valid. Periksa tautan Mawaqit.'
    },
    fr: {
      toggleHelpBtn: 'Changer de mosquée',
      txtTitle: 'Changer de mosquée',
      txtStep1: 'Cherchez votre mosquée + mawaqit sur Google',
      txtStep2: 'Copiez le lien depuis la barre d’adresse',
      txtStep3: 'Collez le lien ci-dessous et cliquez sur Enregistrer',
      linkInputPlaceholder: 'Coller le lien Mawaqit...',
      speichernBtn: 'Enregistrer',
      pinBtn: '⭐ Épingler',
      pinnedSuccess: '✓ Mosquée épinglée avec succès !',
      successMsg: '✓ Mosquée enregistrée avec succès !',
      errorEmpty: 'Veuillez d’abord coller un lien.',
      errorInvalid: 'Lien invalide. Veuillez vérifier le lien Mawaqit.'
    }
  };

  const langSelect = document.getElementById('lang-select');
  const toggleHelpBtn = document.getElementById('toggle-help-btn');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const anleitungCard = document.getElementById('anleitung-card');
  const txtTitle = document.getElementById('txt-title');
  const txtStep1 = document.getElementById('txt-step1');
  const txtStep2 = document.getElementById('txt-step2');
  const txtStep3 = document.getElementById('txt-step3');
  const linkInput = document.getElementById('link-input');
  const speichernBtn = document.getElementById('speichern-btn');
  const pinBtn = document.getElementById('pin-btn');
  const pinnedBar = document.getElementById('pinned-bar');
  const statusMsg = document.getElementById('status-msg');
  const iframe = document.getElementById('mawaqit-frame');

  // Sprache anwenden
  function applyLanguage(lang) {
    const t = translations[lang] || translations.en;
    langSelect.value = lang;
    toggleHelpBtn.textContent = '🕌 ' + t.toggleHelpBtn;
    txtTitle.textContent = t.txtTitle;
    txtStep1.textContent = t.txtStep1;
    txtStep2.textContent = t.txtStep2;
    txtStep3.textContent = t.txtStep3;
    linkInput.placeholder = t.linkInputPlaceholder;
    speichernBtn.textContent = t.speichernBtn;
    pinBtn.textContent = t.pinBtn;

    // RTL für Arabisch und Urdu
    if (lang === 'ar' || lang === 'ur') {
      document.body.dir = 'rtl';
    } else {
      document.body.dir = 'ltr';
    }
  }

  // Theme anwenden
  function applyTheme(theme) {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
      themeToggleBtn.textContent = '🌙';
    } else {
      document.body.classList.remove('light-theme');
      themeToggleBtn.textContent = '☀️';
    }
  }

  // Hilfekarte ein-/ausklappen
  toggleHelpBtn.addEventListener('click', () => {
    anleitungCard.classList.toggle('hidden');
  });

  // Theme-Toggle Klick
  themeToggleBtn.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-theme');
    const newTheme = isLight ? 'light' : 'dark';
    themeToggleBtn.textContent = isLight ? '🌙' : '☀️';
    chrome.storage.local.set({ theme: newTheme });
  });

  // Sprachauswahl ändern
  langSelect.addEventListener('change', (e) => {
    const selectedLang = e.target.value;
    applyLanguage(selectedLang);
    chrome.storage.local.set({ lang: selectedLang });
  });

  // Speichern-Aktionen
  speichernBtn.addEventListener('click', () => {
    verarbeiteEingabe();
  });

  pinBtn.addEventListener('click', () => {
    verarbeitePinEingabe();
  });

  linkInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      verarbeiteEingabe();
    }
  });

  function verarbeiteEingabe() {
    const currentLang = langSelect.value;
    const t = translations[currentLang] || translations.en;
    const text = linkInput.value.trim();

    if (!text) {
      statusMsg.textContent = t.errorEmpty;
      statusMsg.style.color = '#ff5252';
      return;
    }

    const slug = extrahiereSlug(text);
    if (slug) {
      let name = slug.split('-').slice(0, 3).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      if (!name) name = slug;

      chrome.storage.local.get(['pinnedMosques'], (res) => {
        let pinned = res.pinnedMosques || [];
        if (!pinned.some(p => p.slug === slug)) {
          pinned.push({ slug, name });
        }

        chrome.storage.local.set({ moscheeSlug: slug, pinnedMosques: pinned }, () => {
          ladeWidget(slug);
          linkInput.value = '';
          renderPinnedBar(pinned, slug);
          statusMsg.textContent = t.successMsg;
          statusMsg.style.color = 'var(--primary-color)';

          // Nach 1,5 Sekunden automatisch einklappen
          setTimeout(() => {
            anleitungCard.classList.add('hidden');
            statusMsg.textContent = '';
          }, 1500);
        });
      });
    } else {
      statusMsg.textContent = t.errorInvalid;
      statusMsg.style.color = '#ff5252';
    }
  }

  function verarbeitePinEingabe() {
    const currentLang = langSelect.value;
    const t = translations[currentLang] || translations.en;
    const text = linkInput.value.trim();

    if (!text) {
      statusMsg.textContent = t.errorEmpty;
      statusMsg.style.color = '#ff5252';
      return;
    }

    const slug = extrahiereSlug(text);
    if (slug) {
      // Name für den Pin ermitteln (schöner Name aus Slug oder URL)
      let name = slug.split('-').slice(0, 3).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      if (!name) name = slug;

      chrome.storage.local.get(['pinnedMosques', 'moscheeSlug'], (res) => {
        let pinned = res.pinnedMosques || [];
        // Prüfen ob schon vorhanden
        if (!pinned.some(p => p.slug === slug)) {
          pinned.push({ slug, name });
        }
        
        chrome.storage.local.set({ pinnedMosques: pinned, moscheeSlug: slug }, () => {
          ladeWidget(slug);
          linkInput.value = '';
          renderPinnedBar(pinned, slug);
          statusMsg.textContent = t.pinnedSuccess;
          statusMsg.style.color = 'var(--primary-color)';

          setTimeout(() => {
            anleitungCard.classList.add('hidden');
            statusMsg.textContent = '';
          }, 1500);
        });
      });
    } else {
      statusMsg.textContent = t.errorInvalid;
      statusMsg.style.color = '#ff5252';
    }
  }

  function renderPinnedBar(pinnedList, currentSlug) {
    pinnedBar.innerHTML = '';
    if (!pinnedList || pinnedList.length === 0) return;

    pinnedList.forEach(item => {
      const chip = document.createElement('div');
      chip.className = 'pin-chip';
      if (item.slug === currentSlug) {
        chip.classList.add('active');
      }

      const labelSpan = document.createElement('span');
      labelSpan.textContent = item.name;
      labelSpan.addEventListener('click', () => {
        chrome.storage.local.set({ moscheeSlug: item.slug }, () => {
          ladeWidget(item.slug);
          renderPinnedBar(pinnedList, item.slug);
        });
      });

      const removeBtn = document.createElement('span');
      removeBtn.className = 'remove-pin';
      removeBtn.textContent = '×';
      removeBtn.title = 'Entfernen';
      removeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const updated = pinnedList.filter(p => p.slug !== item.slug);
        chrome.storage.local.set({ pinnedMosques: updated }, () => {
          renderPinnedBar(updated, currentSlug);
        });
      });

      chip.appendChild(labelSpan);
      chip.appendChild(removeBtn);
      pinnedBar.appendChild(chip);
    });
  }

  function extrahiereSlug(urlOderText) {
    if (!urlOderText) return null;
    let bereinigt = urlOderText.trim();

    // Scheme & www entfernen
    bereinigt = bereinigt.replace(/^https?:\/\//i, '').replace(/^www\./i, '');

    // Query-Parameter und Hash entfernen
    bereinigt = bereinigt.split('?')[0].split('#')[0];

    // Ignorierte URL-Segmente
    const ignoriert = new Set([
      'mawaqit.net', 'w', 'm',
      'de', 'ar', 'en', 'tr', 'ur', 'id', 'fr', 'es', 'nl', 'ru'
    ]);

    const teile = bereinigt
      .split('/')
      .map(t => t.trim())
      .filter(t => t.length > 0 && !ignoriert.has(t.toLowerCase()));

    return teile.length > 0 ? teile[0] : null;
  }

  function ladeWidget(slug) {
    iframe.src = `https://mawaqit.net/de/w/${slug}`;
  }

  // Gespeicherte Einstellungen beim Laden abrufen (Standard: Englisch & Dark Mode)
  chrome.storage.local.get(['moscheeSlug', 'lang', 'theme', 'pinnedMosques'], (res) => {
    const lang = res.lang || DEFAULT_LANG;
    const slug = res.moscheeSlug || DEFAULT_SLUG;
    const theme = res.theme || DEFAULT_THEME;
    const pinned = res.pinnedMosques || [
      { slug: DEFAULT_SLUG, name: 'Ensar Camii' }
    ];

    applyLanguage(lang);
    applyTheme(theme);
    ladeWidget(slug);
    renderPinnedBar(pinned, slug);
  });
});
