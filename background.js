// Hintergrund-Service-Worker für Mawaqit Gebetszeiten

// Alarm beim Installieren oder Starten einrichten, um regelmäßig zu prüfen
chrome.runtime.onInstalled.addListener(() => {
  console.log('Mawaqit Erweiterung installiert.');
  // Alarm erstellen, der alle 1 Minute läuft
  chrome.alarms.create('checkPrayerTimes', { periodInMinutes: 1 });
});

chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name === 'checkPrayerTimes') {
    await pruefeGebetszeitenUndBenachrichtige();
  }
});

async function pruefeGebetszeitenUndBenachrichtige() {
  try {
    // Gespeicherten Slug aus dem Storage holen
    const result = await chrome.storage.local.get(['mosqueSlug']);
    if (!result.mosqueSlug) return;

    const response = await fetch(`https://mawaqit.net/api/2.0/mosque/${result.mosqueSlug}/prayer-times`);
    if (!response.ok) return;

    const data = await response.json();
    let times = data.times || [];

    const gebete = [
      { name: 'Imsak', zeit: data.imsak },
      { name: 'Sabah / Fajr', zeit: times[0] || data.fajr },
      { name: 'Shuruk', zeit: times[1] || data.shuruk },
      { name: 'Dohr', zeit: times[2] || data.dohr },
      { name: 'Assr', zeit: times[3] || data.assr },
      { name: 'Maghrib', zeit: times[4] || data.maghrib },
      { name: 'Ishaa', zeit: times[5] || data.ishaa },
      { name: 'Freitagsgebet', zeit: data.jumua || data.jumuah }
    ];

    const jetzt = new Date();
    const aktuelleStunden = String(jetzt.getHours()).padStart(2, '0');
    const aktuelleMinuten = String(jetzt.getMinutes()).padStart(2, '0');
    const aktuelleZeitStr = `${aktuelleStunden}:${aktuelleMinuten}`;
    const heuteStr = jetzt.toISOString().split('T')[0];

    for (const gebets of gebete) {
      if (gebets.zeit && gebets.zeit === aktuelleZeitStr) {
        const storageKey = `notified_${heuteStr}_${gebets.name}`;
        const notifiedCheck = await chrome.storage.local.get([storageKey]);
        
        if (!notifiedCheck[storageKey]) {
          sendeBenachrichtigung(gebets.name);
          await chrome.storage.local.set({ [storageKey]: true });
        }
      }
    }

  } catch (error) {
    console.error('Fehler bei der Hintergrundprüfung der Gebetszeiten:', error);
  }
}

function sendeBenachrichtigung(gebetsName) {
  // Vermeide doppelte Benachrichtigungen in derselben Minute (optional über Storage prüfbar, hier einfache Benachrichtigung)
  const notificationId = `prayer-${gebetsName}-${Date.now()}`;
  
  chrome.notifications.create(notificationId, {
    type: 'basic',
    iconUrl: 'icon.png', // Fall vorhanden, ansonsten ignoriert oder Standard
    title: 'Mawaqit Gebetszeit',
    message: `Es ist Zeit für das ${gebetsName}-Gebet!`,
    priority: 2
  });
}
