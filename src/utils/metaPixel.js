const subscribeStorageKey = 'meta_subscribe_tracked';
let subscribeTrackedInMemory = false;

export function trackSubscribe(event) {
  const nativeEvent = event?.nativeEvent ?? event;
  if (!nativeEvent?.isTrusted) {
    event?.preventDefault?.();
    return;
  }

  if (typeof window === 'undefined' || typeof window.fbq !== 'function') {
    return;
  }

  let alreadyTracked = subscribeTrackedInMemory;
  try {
    alreadyTracked = alreadyTracked || window.localStorage.getItem(subscribeStorageKey) === 'true';
  } catch {
    // Use the in-memory guard when localStorage is unavailable.
  }

  if (alreadyTracked) {
    return;
  }

  const eventID = `subscribe_${Date.now()}_${Math.random().toString(36).slice(2)}`;
  subscribeTrackedInMemory = true;

  try {
    window.localStorage.setItem(subscribeStorageKey, 'true');
  } catch {
    // The in-memory guard still prevents duplicates for this page session.
  }

  try {
    window.fbq('track', 'Subscribe', {
      value: 100.00,
      currency: 'INR'
    }, { eventID });
  } catch {
    subscribeTrackedInMemory = false;
    try {
      window.localStorage.removeItem(subscribeStorageKey);
    } catch {
      // Ignore storage cleanup failures; the download must continue.
    }
  }
}
