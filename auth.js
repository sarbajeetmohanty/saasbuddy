const isAuthed = () => !!window.firebaseAuth?.currentUser;

const clearAuth = () => {
  if (window.firebaseAuth) {
    window.firebaseAuth.signOut();
  }
};

const getLoginUrl = () => {
  const path = window.location.pathname.replace(/\\/g, "/").toLowerCase();
  if (path.endsWith("/login/") || path.endsWith("/login/index.html")) {
    return null;
  }
  return new URL("login/", window.location.href).toString();
};

const requireAuth = () => {
  const loginUrl = getLoginUrl();
  if (!loginUrl) return;
  if (!window.firebaseAuth) {
    window.location.href = loginUrl;
    return;
  }
  window.firebaseAuth.onAuthStateChanged((user) => {
    if (!user) {
      window.location.href = loginUrl;
    }
  });
};

requireAuth();
