/* @ds-bundle: {"format":3,"namespace":"AgentChatDesignSystem_019dd0","components":[],"sourceHashes":{"assets/icons.js":"3d641f3a9869","ui_kits/agentchat/app.jsx":"21f28f6fd4e4","ui_kits/agentchat/components.jsx":"6ccf7995afdd","ui_kits/agentchat/screens.jsx":"955199612774"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AgentChatDesignSystem_019dd0 = window.AgentChatDesignSystem_019dd0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/icons.js
try { (() => {
// AgentChat icon registry — Lucide-derived SVGs.
// All icons: 24x24 viewBox, 1.5 stroke, rounded caps/joins, currentColor.
// Usage in JSX:  <Icon name="search" size={20} />
// Usage in HTML: <span class="icon" data-icon="search"></span>  +  hydrateIcons()

window.AC_ICONS = {
  // navigation / rail
  agents: '<path d="M12 2a4 4 0 0 0-4 4v2a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Z"/><path d="M5 22v-1a7 7 0 0 1 14 0v1"/>',
  chat: '<path d="M21 12a8 8 0 0 1-11.5 7.2L3 21l1.8-6.5A8 8 0 1 1 21 12Z"/>',
  data: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
  keys: '<circle cx="8" cy="15" r="4"/><path d="m11 12 8-8"/><path d="m15.5 7.5 3 3"/><path d="m18 5 3 3"/>',
  usage: '<path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',
  // actions
  search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
  close: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4Z"/>',
  copy: '<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16V4a2 2 0 0 1 2-2h12"/>',
  trash: '<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  more: '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  arrow_right: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  chevron_down: '<path d="m6 9 6 6 6-6"/>',
  chevron_right: '<path d="m9 6 6 6-6 6"/>',
  // file / data
  database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 0 20"/><path d="M12 2a15 15 0 0 0 0 20"/>',
  zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9Z"/>',
  // controls
  google: '<path d="M21.6 12.2c0-.6-.1-1.3-.2-1.9H12v3.6h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2a9.7 9.7 0 0 0 3-7.2Z" fill="#4285F4" stroke="none"/><path d="M12 22a9.5 9.5 0 0 0 6.6-2.4l-3.2-2.5a6 6 0 0 1-9-3.1H3.1v2.5A10 10 0 0 0 12 22Z" fill="#34A853" stroke="none"/><path d="M6.4 14a6 6 0 0 1 0-3.8V7.6H3.1a10 10 0 0 0 0 8.9l3.3-2.5Z" fill="#FBBC04" stroke="none"/><path d="M12 6.1a5.4 5.4 0 0 1 3.8 1.5l2.9-2.9A9.6 9.6 0 0 0 3.1 7.5L6.4 10a6 6 0 0 1 5.6-3.9Z" fill="#EA4335" stroke="none"/>',
  // empty / status
  inbox: '<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.5 5.4 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6L18.5 5.4A2 2 0 0 0 16.7 4H7.3a2 2 0 0 0-1.8 1.4Z"/>',
  command: '<path d="M18 3a3 3 0 1 0 0 6h-3V6a3 3 0 0 0-3-3"/><path d="M3 6a3 3 0 1 0 6 0V3"/><path d="M6 21a3 3 0 1 0 0-6h3v3a3 3 0 0 0 3 3"/><path d="M21 18a3 3 0 1 0-6 0v3"/><rect x="9" y="9" width="6" height="6" rx="1"/>',
  sparkle: '<path d="M12 3v6"/><path d="M12 15v6"/><path d="m5.6 5.6 4.2 4.2"/><path d="m14.2 14.2 4.2 4.2"/><path d="M3 12h6"/><path d="M15 12h6"/><path d="m5.6 18.4 4.2-4.2"/><path d="m14.2 9.8 4.2-4.2"/>',
  bot: '<rect x="3" y="8" width="18" height="12" rx="2"/><path d="M12 4v4"/><circle cx="9" cy="14" r="1"/><circle cx="15" cy="14" r="1"/><path d="M2 14h2"/><path d="M20 14h2"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  team: '<circle cx="9" cy="8" r="3.5"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M15 20a4 4 0 0 1 7 0"/>',
  shield: '<path d="M12 2 4 5v6c0 5 3.4 9.5 8 11 4.6-1.5 8-6 8-11V5l-8-3Z"/>',
  history: '<path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/><path d="M12 7v5l3 2"/>'
};

// Build a fully-formed <svg> string for a named icon.
window.acIcon = function (name, size = 20, strokeWidth = 1.5) {
  const inner = window.AC_ICONS[name] || window.AC_ICONS.command;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
};

// Hydrate any <span data-icon="name" data-size="20"> in the DOM.
window.hydrateIcons = function (root = document) {
  root.querySelectorAll('[data-icon]').forEach(el => {
    if (el.dataset.iconHydrated) return;
    const name = el.dataset.icon;
    const size = parseInt(el.dataset.size || '20', 10);
    el.innerHTML = window.acIcon(name, size);
    el.dataset.iconHydrated = '1';
  });
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/icons.js", error: String((e && e.message) || e) }); }

// ui_kits/agentchat/app.jsx
try { (() => {
// Main app shell — composes everything into the index prototype.

const {
  useState: useStateApp
} = React;
function App() {
  const [signedIn, setSignedIn] = useStateApp(true);
  const [route, setRoute] = useStateApp('agents');
  const [drawer, setDrawer] = useStateApp(null); // { mode: 'new' } | { mode: 'edit', agent }

  if (!signedIn) return /*#__PURE__*/React.createElement(LoginScreen, {
    onSignIn: () => setSignedIn(true)
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, /*#__PURE__*/React.createElement(Rail, {
    active: route,
    onNavigate: setRoute
  }), /*#__PURE__*/React.createElement("main", {
    className: "main"
  }, route === 'agents' && /*#__PURE__*/React.createElement(AgentsPage, {
    onOpenAgent: a => setDrawer({
      mode: 'edit',
      agent: a
    }),
    onNewAgent: () => setDrawer({
      mode: 'new'
    })
  }), route === 'chat' && /*#__PURE__*/React.createElement(ChatScreen, null), route === 'data' && /*#__PURE__*/React.createElement(DataSourcesPage, null), route === 'keys' && /*#__PURE__*/React.createElement(ApiKeysPage, null), route === 'usage' && /*#__PURE__*/React.createElement(UsagePage, null), route === 'settings' && /*#__PURE__*/React.createElement(SettingsPage, null)), drawer && /*#__PURE__*/React.createElement(AgentDrawer, {
    agent: drawer.agent,
    onClose: () => setDrawer(null),
    onSave: () => setDrawer(null)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/agentchat/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/agentchat/components.jsx
try { (() => {
// AgentChat UI Kit — primitives + screen components
// Loaded as: <script type="text/babel" src="components.jsx"></script>
// Exports everything to window so the app can use them across script files.

const {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback
} = React;

/* ---------- Primitives ---------- */

function Icon({
  name,
  size = 20,
  stroke = 1.5,
  style
}) {
  const svg = useMemo(() => window.acIcon(name, size, stroke), [name, size, stroke]);
  return /*#__PURE__*/React.createElement("span", {
    className: "icon",
    style: style,
    dangerouslySetInnerHTML: {
      __html: svg
    }
  });
}
function Avatar({
  initials,
  color = 1,
  size = 36
}) {
  const cls = size === 28 ? 'avatar-sq s28' : size === 24 ? 'avatar-sq s24' : 'avatar-sq';
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    style: {
      background: `var(--avatar-${color})`
    }
  }, initials);
}
function Dot({
  kind = 'muted'
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `dot ${kind}`
  });
}
function Switch({
  on,
  onChange
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: `switch ${on ? 'on' : ''}`,
    onClick: () => onChange(!on),
    "aria-pressed": on
  });
}

/* ---------- Rail ---------- */

function Rail({
  active,
  onNavigate
}) {
  const items = [{
    id: 'agents',
    label: 'Agents',
    icon: 'agents'
  }, {
    id: 'chat',
    label: 'Chat',
    icon: 'chat'
  }, {
    id: 'data',
    label: 'Data sources',
    icon: 'data'
  }, {
    id: 'keys',
    label: 'API keys',
    icon: 'keys'
  }, {
    id: 'usage',
    label: 'Usage',
    icon: 'usage'
  }];
  return /*#__PURE__*/React.createElement("nav", {
    className: "rail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand",
    title: "AgentChat"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 32 32",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "32",
    height: "32",
    rx: "6",
    fill: "#171514"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 22 16 9l5.5 13",
    stroke: "#F5F1EC",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 18h7",
    stroke: "#F5F1EC",
    strokeWidth: "2",
    strokeLinecap: "round"
  }))), items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    className: `rail-btn ${active === it.id ? 'is-active' : ''}`,
    onClick: () => onNavigate(it.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    className: "tip"
  }, it.label))), /*#__PURE__*/React.createElement("div", {
    className: "rail-spacer"
  }), /*#__PURE__*/React.createElement("button", {
    className: `rail-btn ${active === 'settings' ? 'is-active' : ''}`,
    onClick: () => onNavigate('settings')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "settings",
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    className: "tip"
  }, "Settings")), /*#__PURE__*/React.createElement("button", {
    className: "rail-btn",
    title: "Account"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 22,
      height: 22,
      borderRadius: 4,
      background: 'var(--avatar-3)',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      fontSize: 10,
      fontWeight: 600
    }
  }, "EK")));
}

/* ---------- Login ---------- */

function LoginScreen({
  onSignIn
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'var(--n-900)',
      color: 'var(--n-50)',
      padding: '64px 64px 48px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 32 32",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "32",
    height: "32",
    rx: "6",
    fill: "#F5F1EC"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 22 16 9l5.5 13",
    stroke: "#171514",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 18h7",
    stroke: "#171514",
    strokeWidth: "2",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'clamp(48px, 6vw, 88px)',
      fontWeight: 600,
      lineHeight: 1.02,
      letterSpacing: '-0.04em'
    }
  }, "Agents that", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, "actually"), /*#__PURE__*/React.createElement("br", null), "ship work."), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      marginTop: 32,
      fontSize: 12,
      color: 'oklch(70% 0.01 80)',
      letterSpacing: '0.14em',
      textTransform: 'uppercase'
    }
  }, "AgentChat \u2014 v2.4")), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      color: 'oklch(60% 0.01 80)',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 AgentChat Labs"), /*#__PURE__*/React.createElement("span", null, "built in oakland"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 12%'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    style: {
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("rect", {
    width: "32",
    height: "32",
    rx: "6",
    fill: "#171514"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 22 16 9l5.5 13",
    stroke: "#F5F1EC",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 18h7",
    stroke: "#F5F1EC",
    strokeWidth: "2",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 44,
      fontWeight: 600,
      letterSpacing: '-0.04em',
      marginBottom: 8
    }
  }, "Sign in"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--fg-secondary)',
      fontSize: 14,
      marginBottom: 36
    }
  }, "Welcome back to your workspace."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary",
    style: {
      width: '100%',
      justifyContent: 'center',
      padding: '11px 14px',
      fontSize: 14,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21.6 12.2c0-.6-.1-1.3-.2-1.9H12v3.6h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2a9.7 9.7 0 0 0 3-7.2Z",
    fill: "#4285F4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 22a9.5 9.5 0 0 0 6.6-2.4l-3.2-2.5a6 6 0 0 1-9-3.1H3.1v2.5A10 10 0 0 0 12 22Z",
    fill: "#34A853"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.4 14a6 6 0 0 1 0-3.8V7.6H3.1a10 10 0 0 0 0 8.9l3.3-2.5Z",
    fill: "#FBBC04"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 6.1a5.4 5.4 0 0 1 3.8 1.5l2.9-2.9A9.6 9.6 0 0 0 3.1 7.5L6.4 10a6 6 0 0 1 5.6-3.9Z",
    fill: "#EA4335"
  })), "Continue with Google"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "mono muted",
    style: {
      fontSize: 10,
      letterSpacing: '0.14em',
      textTransform: 'uppercase'
    }
  }, "or"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border-subtle)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "input input-lg",
    placeholder: "email@company.com",
    defaultValue: "elshaday@labs.co"
  }), /*#__PURE__*/React.createElement("input", {
    className: "input input-lg",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    defaultValue: "passwordpassword"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      marginTop: 10,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--fg-tertiary)',
      fontSize: 12,
      textDecoration: 'none'
    },
    onClick: e => e.preventDefault()
  }, "Forgot password")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-dark",
    onClick: onSignIn
  }, "Sign in"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      fontSize: 12,
      color: 'var(--fg-tertiary)'
    }
  }, "Don't have an account? ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onSignIn();
    },
    style: {
      color: 'var(--fg-primary)'
    }
  }, "Request access"))));
}

/* ---------- Notice bar (used by API keys success) ---------- */

function NoticeBar({
  children,
  onDismiss
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--n-900)',
      color: 'var(--n-50)',
      padding: '12px 64px',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    stroke: 2
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      flex: 1
    }
  }, children), /*#__PURE__*/React.createElement("button", {
    className: "btn-icon btn btn-ghost",
    style: {
      color: 'var(--n-300)'
    },
    onClick: onDismiss
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 14
  })));
}

/* ---------- Agents page ---------- */

// state = workflow lifecycle: active | draft | archived
// dot kind = transient runtime: active | idle | error
const AGENTS = [{
  id: 1,
  name: 'Support bot',
  model: 'claude-sonnet-4.5',
  color: 1,
  state: 'active',
  dot: 'active',
  initials: 'SB',
  when: '2h ago'
}, {
  id: 2,
  name: 'Research assistant',
  model: 'gpt-4o',
  color: 3,
  state: 'active',
  dot: 'idle',
  initials: 'RA',
  when: 'Apr 12'
}, {
  id: 3,
  name: 'Data wrangler',
  model: 'claude-sonnet-4.5',
  color: 2,
  state: 'active',
  dot: 'active',
  initials: 'DW',
  when: '4h ago'
}, {
  id: 4,
  name: 'Email triage',
  model: 'gpt-4o-mini',
  color: 4,
  state: 'active',
  dot: 'active',
  initials: 'ET',
  when: 'Yesterday'
}, {
  id: 5,
  name: 'Quarterly analyst',
  model: 'claude-opus-4.5',
  color: 5,
  state: 'draft',
  dot: 'idle',
  initials: 'QA',
  when: 'Apr 8'
}, {
  id: 6,
  name: 'Meeting notes',
  model: 'claude-haiku-4.5',
  color: 6,
  state: 'active',
  dot: 'active',
  initials: 'MN',
  when: '5d ago'
}, {
  id: 7,
  name: 'Code reviewer',
  model: 'claude-sonnet-4.5',
  color: 8,
  state: 'active',
  dot: 'error',
  initials: 'CR',
  when: 'Apr 3'
}, {
  id: 8,
  name: 'Onboarding guide',
  model: 'gpt-4o',
  color: 7,
  state: 'draft',
  dot: 'idle',
  initials: 'OG',
  when: 'Apr 1'
}, {
  id: 9,
  name: 'Sales prospector',
  model: 'claude-haiku-4.5',
  color: 2,
  state: 'active',
  dot: 'active',
  initials: 'SP',
  when: 'Mar 28'
}, {
  id: 10,
  name: 'Translation desk',
  model: 'gpt-4o',
  color: 5,
  state: 'archived',
  dot: 'muted',
  initials: 'TD',
  when: 'Mar 24'
}, {
  id: 11,
  name: 'Doc summarizer',
  model: 'claude-haiku-4.5',
  color: 4,
  state: 'active',
  dot: 'active',
  initials: 'DS',
  when: 'Mar 21'
}, {
  id: 12,
  name: 'Voice of customer',
  model: 'gpt-4o',
  color: 1,
  state: 'archived',
  dot: 'muted',
  initials: 'VC',
  when: 'Mar 15'
}];
function StatePill({
  state
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `pill ${state}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "pill-dot"
  }), state);
}
function AgentRow({
  agent,
  onClick,
  onEdit,
  onChat
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "agent-row",
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px 28px',
      minHeight: 64,
      borderBottom: '1px solid var(--border-faint)',
      cursor: 'pointer',
      transition: 'background 120ms'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--bg-hover)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: agent.initials,
    color: agent.color
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 500,
      fontSize: 14,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, agent.name, agent.dot !== 'muted' && /*#__PURE__*/React.createElement(Dot, {
    kind: agent.dot
  })), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      color: 'var(--fg-tertiary)',
      marginTop: 2
    }
  }, agent.model)), /*#__PURE__*/React.createElement(StatePill, {
    state: agent.state
  }), /*#__PURE__*/React.createElement("div", {
    className: "row-actions",
    style: {
      color: 'var(--fg-tertiary)',
      minWidth: 96,
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-icon btn-ghost",
    title: "Chat",
    onClick: e => {
      e.stopPropagation();
      onChat && onChat(agent);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chat",
    size: 15
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-icon btn-ghost",
    title: "Edit",
    onClick: e => {
      e.stopPropagation();
      onEdit && onEdit(agent);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "edit",
    size: 15
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-icon btn-ghost",
    title: "More",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "more",
    size: 15
  }))), /*#__PURE__*/React.createElement("div", {
    className: "tnum muted",
    style: {
      fontSize: 12,
      width: 80,
      textAlign: 'right'
    }
  }, agent.when));
}
function AgentsPage({
  onOpenAgent,
  onNewAgent,
  onChatAgent
}) {
  const [q, setQ] = useState('');
  const [tab, setTab] = useState('all');
  const counts = {
    all: AGENTS.length,
    active: AGENTS.filter(a => a.state === 'active').length,
    draft: AGENTS.filter(a => a.state === 'draft').length,
    archived: AGENTS.filter(a => a.state === 'archived').length
  };
  const filtered = AGENTS.filter(a => tab === 'all' ? true : a.state === tab).filter(a => a.name.toLowerCase().includes(q.toLowerCase()) || a.model.includes(q.toLowerCase()));
  const tabs = [{
    id: 'all',
    label: 'All'
  }, {
    id: 'active',
    label: 'Active'
  }, {
    id: 'draft',
    label: 'Draft'
  }, {
    id: 'archived',
    label: 'Archived'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-pad",
    style: {
      paddingBottom: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-title"
  }, "Agents"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-sm",
    onClick: onNewAgent,
    style: {
      whiteSpace: 'nowrap',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 14,
    stroke: 1.75
  }), " New agent")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      marginBottom: 4,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tab-filters"
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    className: tab === t.id ? 'is-active' : '',
    onClick: () => setTab(t.id)
  }, t.label, /*#__PURE__*/React.createElement("span", {
    className: "count"
  }, counts[t.id])))), /*#__PURE__*/React.createElement("input", {
    className: "input input-search",
    placeholder: "Search agents\u2026",
    value: q,
    onChange: e => setQ(e.target.value),
    style: {
      maxWidth: 280,
      flex: 1
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, filtered.map(a => /*#__PURE__*/React.createElement(AgentRow, {
    key: a.id,
    agent: a,
    onClick: () => onOpenAgent(a),
    onEdit: onOpenAgent,
    onChat: onChatAgent
  })), filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '80px 64px',
      textAlign: 'center',
      color: 'var(--fg-tertiary)'
    }
  }, "No agents match.")));
}

/* ---------- New / Edit Agent modal ---------- */

function AgentDrawer({
  agent,
  onClose,
  onSave
}) {
  const [name, setName] = useState(agent?.name || 'Untitled agent');
  const [model, setModel] = useState(agent?.model || 'claude-sonnet-4.5');
  const [tab, setTab] = useState('general');
  const [prompt, setPrompt] = useState(agent ? `You are ${agent.name}, an internal helper. Always reply concisely and cite the source data when answering factual questions.` : '');
  const [tools, setTools] = useState({
    webSearch: true,
    codeExec: false,
    fileRead: true,
    sendEmail: false
  });
  const [linkedSources, setLinkedSources] = useState(['Customer DB', 'Help Center']);
  const sources = ['Customer DB', 'Help Center', 'Engineering Wiki', 'Slack archive', 'CRM exports'];

  // Widget state
  const [widgetTitle, setWidgetTitle] = useState(agent?.name || 'Untitled agent');
  const [widgetGreeting, setWidgetGreeting] = useState('How can I help today?');
  const [widgetAccent, setWidgetAccent] = useState('amber');
  const [widgetPosition, setWidgetPosition] = useState('right');
  const [widgetShowAvatar, setWidgetShowAvatar] = useState(true);
  const accentMap = {
    amber: 'oklch(74% 0.16 68)',
    neutral: 'var(--n-900)',
    sage: 'oklch(70% 0.13 145)',
    slate: 'oklch(60% 0.05 250)'
  };
  const serverCode = `// node\nimport { AgentChat } from "agentchat";\n\nconst client = new AgentChat({\n  apiKey: process.env.AGENTCHAT_KEY,\n});\n\nconst reply = await client.agents\n  .get("${(agent?.name || 'untitled').toLowerCase().replace(/\s+/g, '-')}")\n  .send({ message: "..." });`;
  const embedCode = `<!-- paste before </body> -->\n<script\n  src="https://cdn.agentchat.dev/widget.js"\n  data-agent="${(agent?.name || 'untitled').toLowerCase().replace(/\s+/g, '-')}"\n  data-position="${widgetPosition}"\n  defer></script>`;
  const tokenize = code => code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/(\/\/.*$)/gm, '<span class="tok-c">$1</span>').replace(/(&lt;!--.*?--&gt;)/g, '<span class="tok-c">$1</span>').replace(/\b(import|from|const|await|process|env)\b/g, '<span class="tok-k">$1</span>').replace(/("[^"]*")/g, '<span class="tok-s">$1</span>').replace(/(data-[a-z]+)/g, '<span class="tok-n">$1</span>');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "scrim",
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", {
    className: "modal",
    role: "dialog",
    "aria-label": agent ? 'Edit agent' : 'New agent'
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-head"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label-up"
  }, agent ? 'Edit agent' : 'New agent'), /*#__PURE__*/React.createElement("span", {
    className: "muted",
    style: {
      fontSize: 12
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("input", {
    value: name,
    onChange: e => setName(e.target.value),
    style: {
      border: 0,
      outline: 'none',
      background: 'transparent',
      fontSize: 17,
      fontWeight: 600,
      letterSpacing: '-0.01em',
      color: 'var(--fg-primary)',
      flex: 1,
      minWidth: 0
    }
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-icon btn-ghost",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tabs"
  }, /*#__PURE__*/React.createElement("button", {
    className: tab === 'general' ? 'is-active' : '',
    onClick: () => setTab('general')
  }, "General"), /*#__PURE__*/React.createElement("button", {
    className: tab === 'widget' ? 'is-active' : '',
    onClick: () => setTab('widget')
  }, "Widget"), /*#__PURE__*/React.createElement("button", {
    className: tab === 'embed' ? 'is-active' : '',
    onClick: () => setTab('embed')
  }, "Embed")), tab === 'general' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--fg-tertiary)',
      margin: '0 0 10px'
    }
  }, "Model"), /*#__PURE__*/React.createElement("select", {
    value: model,
    onChange: e => setModel(e.target.value),
    style: {
      padding: '8px 10px',
      border: '1px solid var(--border-subtle)',
      borderRadius: 6,
      background: 'var(--bg-surface)',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--fg-primary)',
      minWidth: 280
    }
  }, /*#__PURE__*/React.createElement("option", null, "claude-sonnet-4.5"), /*#__PURE__*/React.createElement("option", null, "claude-opus-4.5"), /*#__PURE__*/React.createElement("option", null, "claude-haiku-4.5"), /*#__PURE__*/React.createElement("option", null, "gpt-4o"), /*#__PURE__*/React.createElement("option", null, "gpt-4o-mini"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--fg-tertiary)',
      margin: '0 0 10px'
    }
  }, "System prompt"), /*#__PURE__*/React.createElement("textarea", {
    value: prompt,
    onChange: e => setPrompt(e.target.value),
    rows: 5,
    placeholder: "Describe how this agent should behave\u2026",
    style: {
      width: '100%',
      padding: 12,
      border: '1px solid var(--border-subtle)',
      borderRadius: 6,
      background: 'var(--bg-surface)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      lineHeight: 1.55,
      color: 'var(--fg-primary)',
      resize: 'vertical',
      outline: 'none'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--fg-tertiary)',
      margin: '0 0 14px'
    }
  }, "Tools"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18
    }
  }, [['webSearch', 'Web search', 'Search the public web'], ['codeExec', 'Code execution', 'Run Python in a sandbox'], ['fileRead', 'File read', 'Read attached documents'], ['sendEmail', 'Send email', 'Send via the workspace inbox']].map(([key, label, sub]) => /*#__PURE__*/React.createElement("div", {
    key: key,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--fg-tertiary)',
      marginTop: 1
    }
  }, sub)), /*#__PURE__*/React.createElement(Switch, {
    on: tools[key],
    onChange: v => setTools({
      ...tools,
      [key]: v
    })
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--fg-tertiary)',
      margin: '0 0 12px'
    }
  }, "Data sources"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, sources.map(s => {
    const linked = linkedSources.includes(s);
    return /*#__PURE__*/React.createElement("button", {
      key: s,
      onClick: () => setLinkedSources(linked ? linkedSources.filter(x => x !== s) : [...linkedSources, s]),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '5px 10px',
        borderRadius: 4,
        fontSize: 12,
        fontWeight: 500,
        cursor: 'pointer',
        background: linked ? 'var(--accent-tint)' : 'var(--n-100)',
        color: linked ? 'oklch(40% 0.15 68)' : 'var(--fg-secondary)',
        border: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "database",
      size: 12
    }), s, linked && /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 12,
      stroke: 2
    }));
  })))), tab === 'widget' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '320px 1fr',
      gap: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--fg-tertiary)',
      margin: '0 0 8px'
    }
  }, "Branding"), /*#__PURE__*/React.createElement("input", {
    className: "input",
    value: widgetTitle,
    onChange: e => setWidgetTitle(e.target.value),
    placeholder: "Title",
    style: {
      marginBottom: 8
    }
  }), /*#__PURE__*/React.createElement("input", {
    className: "input",
    value: widgetGreeting,
    onChange: e => setWidgetGreeting(e.target.value),
    placeholder: "Greeting"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--fg-tertiary)',
      margin: '0 0 8px'
    }
  }, "Accent"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, Object.keys(accentMap).map(k => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setWidgetAccent(k),
    title: k,
    style: {
      width: 28,
      height: 28,
      borderRadius: 4,
      background: accentMap[k],
      border: widgetAccent === k ? '2px solid var(--fg-primary)' : '2px solid var(--border-subtle)',
      cursor: 'pointer',
      padding: 0
    }
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--fg-tertiary)',
      margin: '0 0 8px'
    }
  }, "Position"), /*#__PURE__*/React.createElement("div", {
    className: "tab-filters"
  }, /*#__PURE__*/React.createElement("button", {
    className: widgetPosition === 'left' ? 'is-active' : '',
    onClick: () => setWidgetPosition('left')
  }, "Left"), /*#__PURE__*/React.createElement("button", {
    className: widgetPosition === 'right' ? 'is-active' : '',
    onClick: () => setWidgetPosition('right')
  }, "Right"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500
    }
  }, "Show agent avatar"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--fg-tertiary)',
      marginTop: 1
    }
  }, "In the widget header")), /*#__PURE__*/React.createElement(Switch, {
    on: widgetShowAvatar,
    onChange: setWidgetShowAvatar
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--n-100)',
      borderRadius: 10,
      padding: 24,
      position: 'relative',
      minHeight: 360,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "label-up",
    style: {
      marginBottom: 12
    }
  }, "Live preview"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 24,
      [widgetPosition]: 24,
      width: 280,
      background: 'var(--bg-surface)',
      borderRadius: 10,
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 14px',
      borderBottom: '1px solid var(--border-faint)',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, widgetShowAvatar && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 24,
      height: 24,
      borderRadius: 4,
      background: accentMap[widgetAccent],
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      fontSize: 10,
      fontWeight: 600
    }
  }, (widgetTitle[0] || 'A').toUpperCase()), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 13,
      fontWeight: 500
    }
  }, widgetTitle), /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 13,
    style: {
      color: 'var(--fg-tertiary)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      fontSize: 13,
      color: 'var(--fg-secondary)',
      minHeight: 80
    }
  }, widgetGreeting), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 12px',
      borderTop: '1px solid var(--border-faint)',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 12,
      color: 'var(--fg-tertiary)'
    }
  }, "Reply\u2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 22,
      height: 22,
      borderRadius: 4,
      background: accentMap[widgetAccent],
      display: 'grid',
      placeItems: 'center',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "send",
    size: 11
  })))))), tab === 'embed' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "note"
  }, /*#__PURE__*/React.createElement("span", {
    className: "icon-wrap"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield",
    size: 14
  })), /*#__PURE__*/React.createElement("div", null, "Server-side calls require an ", /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, "AGENTCHAT_KEY"), ". Never expose keys in the browser \u2014 use the embed snippet for client-side instead.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--fg-tertiary)',
      margin: '0 0 10px'
    }
  }, "Server-side \xB7 Node"), /*#__PURE__*/React.createElement("div", {
    className: "code-block"
  }, /*#__PURE__*/React.createElement("button", {
    className: "copy"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "copy",
    size: 11
  }), "Copy"), /*#__PURE__*/React.createElement("pre", {
    dangerouslySetInnerHTML: {
      __html: tokenize(serverCode)
    }
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--fg-tertiary)',
      margin: '0 0 10px'
    }
  }, "Client-side \xB7 Embed snippet"), /*#__PURE__*/React.createElement("div", {
    className: "code-block"
  }, /*#__PURE__*/React.createElement("button", {
    className: "copy"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "copy",
    size: 11
  }), "Copy"), /*#__PURE__*/React.createElement("pre", {
    dangerouslySetInnerHTML: {
      __html: tokenize(embedCode)
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "modal-foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => onSave({
      name,
      model
    })
  }, "Save agent"))));
}

/* Export everything to window */
Object.assign(window, {
  Icon,
  Avatar,
  Dot,
  Switch,
  Rail,
  LoginScreen,
  NoticeBar,
  AGENTS,
  AgentRow,
  AgentsPage,
  AgentDrawer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/agentchat/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/agentchat/screens.jsx
try { (() => {
// AgentChat UI Kit — screen components for the remaining 5 surfaces
// Loaded after components.jsx

const {
  useState: useState2
} = React;

/* =====================================================================
   DATA SOURCES
   ===================================================================== */
const DATA_SOURCES = [{
  id: 1,
  name: 'Customer DB',
  type: 'postgres',
  status: 'active',
  host: 'prod-db.internal',
  tables: 24,
  rows: '2.4M'
}, {
  id: 2,
  name: 'Help Center',
  type: 'web',
  status: 'active',
  host: 'help.agentchat.dev',
  tables: null,
  rows: '1,820 articles'
}, {
  id: 3,
  name: 'Engineering Wiki',
  type: 'web',
  status: 'active',
  host: 'wiki.internal',
  tables: null,
  rows: '412 pages'
}, {
  id: 4,
  name: 'Slack archive',
  type: 'file',
  status: 'idle',
  host: '/exports/slack-2025-q1',
  tables: null,
  rows: '184k messages'
}, {
  id: 5,
  name: 'CRM exports',
  type: 'file',
  status: 'error',
  host: '/exports/crm',
  tables: null,
  rows: 'last sync failed'
}, {
  id: 6,
  name: 'Analytics warehouse',
  type: 'postgres',
  status: 'active',
  host: 'warehouse.internal',
  tables: 86,
  rows: '142M'
}];
function DataSourcesPage() {
  const [activeId, setActiveId] = useState2(1);
  const [showWiz, setShowWiz] = useState2(false);
  const active = DATA_SOURCES.find(d => d.id === activeId);
  const typeIcon = t => t === 'postgres' ? 'database' : t === 'web' ? 'globe' : 'file';
  return /*#__PURE__*/React.createElement("div", {
    className: "page",
    style: {
      display: 'flex',
      overflow: 'hidden',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 300,
      borderRight: '1px solid var(--border-faint)',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--bg-surface)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 20px 14px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 600,
      letterSpacing: '-0.01em'
    }
  }, "Data sources"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary btn-sm",
    onClick: () => setShowWiz(true),
    style: {
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 13,
    stroke: 1.75
  }), " Add")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 12px 12px'
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "input input-search",
    placeholder: "Filter\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, DATA_SOURCES.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.id,
    onClick: () => setActiveId(d.id),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 20px',
      cursor: 'pointer',
      background: activeId === d.id ? 'var(--bg-hover)' : 'transparent',
      borderLeft: activeId === d.id ? '2px solid var(--accent)' : '2px solid transparent',
      transition: 'background 120ms'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: typeIcon(d.type),
    size: 16,
    style: {
      color: 'var(--fg-tertiary)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      fontSize: 13,
      fontWeight: 500
    }
  }, d.name), /*#__PURE__*/React.createElement(Dot, {
    kind: d.status
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '40px 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "label-up",
    style: {
      marginBottom: 8
    }
  }, active.type, " \xB7 ", active.status), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 600,
      letterSpacing: '-0.03em',
      whiteSpace: 'nowrap'
    }
  }, active.name), /*#__PURE__*/React.createElement("div", {
    className: "mono muted",
    style: {
      marginTop: 6,
      fontSize: 12
    }
  }, active.host)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary btn-sm"
  }, "Edit"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-danger btn-sm"
  }, "Delete"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 32,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "label-up",
    style: {
      marginBottom: 10
    }
  }, "Tables"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 500,
      letterSpacing: '-0.02em'
    },
    className: "tnum"
  }, active.tables ?? '—')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "label-up",
    style: {
      marginBottom: 10
    }
  }, "Rows"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 500,
      letterSpacing: '-0.02em'
    },
    className: "tnum"
  }, active.rows))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "label-up",
    style: {
      marginBottom: 14
    }
  }, "Filters"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--fg-secondary)',
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      background: 'var(--n-100)',
      padding: '2px 6px',
      borderRadius: 3
    }
  }, "tenant_id = 'workspace_a4f8'"), " \xA0 AND \xA0", /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      background: 'var(--n-100)',
      padding: '2px 6px',
      borderRadius: 3
    }
  }, "archived = false"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "label-up",
    style: {
      marginBottom: 14
    }
  }, "Tables in scope"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, ['users', 'organizations', 'subscriptions', 'invoices', 'support_tickets'].map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '12px 0',
      borderTop: '1px solid var(--border-faint)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "database",
    size: 14,
    style: {
      color: 'var(--fg-tertiary)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 13,
      flex: 1
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    className: "muted tnum",
    style: {
      fontSize: 12
    }
  }, [12482, 184, 2014, 8901, 24911][i].toLocaleString(), " rows"))))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "zap",
    size: 14
  }), " Test connection")), showWiz && /*#__PURE__*/React.createElement(AddSourceWizard, {
    onClose: () => setShowWiz(false)
  }));
}
function AddSourceWizard({
  onClose
}) {
  const [step, setStep] = useState2(0);
  const [type, setType] = useState2('postgres');
  const [picked, setPicked] = useState2(['users', 'subscriptions']);
  const allTables = ['users', 'organizations', 'subscriptions', 'invoices', 'support_tickets', 'events', 'sessions', 'feature_flags'];
  const types = [{
    id: 'postgres',
    label: 'PostgreSQL',
    sub: 'Self-hosted or managed'
  }, {
    id: 'mysql',
    label: 'MySQL',
    sub: 'Versions 5.7+'
  }, {
    id: 'snowflake',
    label: 'Snowflake',
    sub: 'OAuth or password'
  }, {
    id: 'web',
    label: 'Web (URL)',
    sub: 'Crawl a public site'
  }, {
    id: 'file',
    label: 'File upload',
    sub: 'CSV, JSON, MD, PDF'
  }, {
    id: 'gsheet',
    label: 'Google Sheet',
    sub: 'Read-only sync'
  }];
  const typeIconFor = id => ({
    postgres: 'database',
    mysql: 'database',
    snowflake: 'database',
    web: 'globe',
    file: 'file',
    gsheet: 'database'
  })[id] || 'database';
  const steps = ['Connect', 'Select tables', 'Row filters'];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "scrim",
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", {
    className: "modal",
    role: "dialog",
    "aria-label": "Add data source",
    style: {
      width: 720
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-head"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label-up"
  }, "New data source"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 600,
      letterSpacing: '-0.01em',
      marginTop: 6
    }
  }, steps[step])), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-icon btn-ghost",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 28px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "stepper"
  }, steps.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: s
  }, /*#__PURE__*/React.createElement("div", {
    className: `step ${i === step ? 'is-active' : i < step ? 'is-done' : ''}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, i < step ? /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 11,
    stroke: 2
  }) : i + 1), /*#__PURE__*/React.createElement("span", null, s)), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body",
    style: {
      minHeight: 360
    }
  }, step === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--fg-tertiary)',
      margin: '0 0 12px'
    }
  }, "Source type"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 8
    }
  }, types.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => setType(t.id),
    style: {
      textAlign: 'left',
      padding: '14px',
      borderRadius: 8,
      border: type === t.id ? '1.5px solid var(--accent)' : '1px solid var(--border-subtle)',
      background: type === t.id ? 'var(--accent-tint)' : 'var(--bg-surface)',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: typeIconFor(t.id),
    size: 16,
    style: {
      color: type === t.id ? 'var(--accent)' : 'var(--fg-secondary)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--fg-primary)'
    }
  }, t.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--fg-tertiary)'
    }
  }, t.sub))))), (type === 'postgres' || type === 'mysql') && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--fg-tertiary)',
      margin: 0
    }
  }, "Connection"), /*#__PURE__*/React.createElement("input", {
    className: "input mono",
    placeholder: "postgres://user:pass@host:5432/db",
    defaultValue: "postgres://reader:\u2022\u2022\u2022\u2022\u2022\u2022\u2022@prod-db.internal:5432/app",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "input",
    placeholder: "Display name",
    defaultValue: "Customer DB"
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary btn-sm",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "zap",
    size: 13
  }), " Test"))), type === 'web' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--fg-tertiary)',
      margin: 0
    }
  }, "URL"), /*#__PURE__*/React.createElement("input", {
    className: "input mono",
    placeholder: "https://docs.example.com",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12
    }
  })), type === 'file' && /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1.5px dashed var(--border-subtle)',
      borderRadius: 8,
      padding: '36px 24px',
      textAlign: 'center',
      color: 'var(--fg-tertiary)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file",
    size: 20,
    style: {
      marginBottom: 8,
      color: 'var(--fg-tertiary)'
    }
  }), /*#__PURE__*/React.createElement("div", null, "Drop files here or ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)',
      fontWeight: 500
    }
  }, "browse")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      marginTop: 4
    }
  }, "CSV, JSON, MD, PDF \u2014 up to 50 MB each"))), step === 1 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--fg-secondary)',
      marginBottom: 14,
      lineHeight: 1.55
    }
  }, "We discovered ", /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      fontWeight: 500,
      color: 'var(--fg-primary)'
    }
  }, allTables.length), " tables. Pick the ones agents may read."), /*#__PURE__*/React.createElement("input", {
    className: "input input-search",
    placeholder: "Search tables\u2026",
    style: {
      marginBottom: 12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border-faint)',
      borderRadius: 8,
      overflow: 'hidden'
    }
  }, allTables.map((t, i) => {
    const on = picked.includes(t);
    return /*#__PURE__*/React.createElement("label", {
      key: t,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 16px',
        borderTop: i ? '1px solid var(--border-faint)' : 0,
        cursor: 'pointer',
        background: on ? 'oklch(99% 0.005 80)' : 'transparent'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: on,
      onChange: () => setPicked(on ? picked.filter(x => x !== t) : [...picked, t]),
      style: {
        accentColor: 'var(--accent)'
      }
    }), /*#__PURE__*/React.createElement(Icon, {
      name: "database",
      size: 14,
      style: {
        color: 'var(--fg-tertiary)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        fontSize: 13,
        flex: 1
      }
    }, t), /*#__PURE__*/React.createElement("span", {
      className: "muted tnum",
      style: {
        fontSize: 11
      }
    }, [12482, 184, 2014, 8901, 24911, 91204, 5821, 42][i].toLocaleString(), " rows"));
  })), /*#__PURE__*/React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 12,
      marginTop: 12
    }
  }, picked.length, " of ", allTables.length, " selected")), step === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "note"
  }, /*#__PURE__*/React.createElement("span", {
    className: "icon-wrap"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield",
    size: 14
  })), /*#__PURE__*/React.createElement("div", null, "Row-level filters apply on every read. Agents will ", /*#__PURE__*/React.createElement("strong", null, "never"), " see rows that don't match.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--fg-tertiary)',
      margin: '0 0 10px'
    }
  }, "WHERE clause"), /*#__PURE__*/React.createElement("textarea", {
    className: "input mono",
    rows: 4,
    defaultValue: "tenant_id = 'workspace_a4f8'\nAND archived = false",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      lineHeight: 1.55,
      resize: 'vertical'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--fg-tertiary)',
      margin: '0 0 10px'
    }
  }, "Column redactions"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, ['email', 'phone', 'ssn', 'card_number'].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    className: "mono",
    style: {
      fontSize: 11,
      padding: '4px 10px',
      background: 'var(--n-100)',
      borderRadius: 4,
      color: 'var(--fg-secondary)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, c, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-tertiary)'
    }
  }, "\xD7"))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    style: {
      padding: '3px 8px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 11
  }), " Add column"))))), /*#__PURE__*/React.createElement("div", {
    className: "modal-foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), step > 0 && /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary",
    onClick: () => setStep(step - 1)
  }, "Back"), step < 2 ? /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => setStep(step + 1)
  }, "Continue") : /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: onClose
  }, "Connect source"))));
}

/* =====================================================================
   CHAT (unchanged)
   ===================================================================== */
const CONVOS = [{
  id: 1,
  title: 'Quarterly revenue breakdown',
  agent: 'QA',
  color: 5,
  when: '12m',
  preview: 'Pulling Q1 numbers from the warehouse…',
  unread: true
}, {
  id: 2,
  title: 'Onboarding email draft',
  agent: 'OG',
  color: 7,
  when: '1h',
  preview: 'Here is a v2 with shorter sentences…'
}, {
  id: 3,
  title: 'Bug triage — login flow',
  agent: 'CR',
  color: 8,
  when: '3h',
  preview: 'Looks like a race condition in the OAuth callback…'
}, {
  id: 4,
  title: 'Customer churn this week',
  agent: 'VC',
  color: 1,
  when: 'Yesterday',
  preview: '4 cancellations, 2 mentioned billing.'
}, {
  id: 5,
  title: 'Translate launch FAQ',
  agent: 'TD',
  color: 5,
  when: 'Apr 12',
  preview: 'Done. ES + DE + JA attached.'
}, {
  id: 6,
  title: 'Wiki summary — ranking algo',
  agent: 'DS',
  color: 4,
  when: 'Apr 10',
  preview: 'Three-paragraph summary below.'
}];
function ChatScreen() {
  const [activeId, setActiveId] = useState2(1);
  const [draft, setDraft] = useState2('');
  const [messages, setMessages] = useState2([{
    role: 'agent',
    text: "I pulled Q1 revenue from the warehouse. Total recognized: $4.28M, up 14% QoQ. Top growth came from the Pro tier (38% of new MRR). Want me to break it down by channel?"
  }, {
    role: 'user',
    text: "Yes — channel breakdown please, ordered by absolute MRR contribution."
  }, {
    role: 'agent',
    text: "Direct: $1.62M · Partner: $0.91M · Self-serve: $0.74M · Outbound: $0.48M · Referral: $0.29M.\n\nDirect grew the most in absolute terms (+$240k). Self-serve grew fastest by percentage (+62%)."
  }]);
  const active = CONVOS.find(c => c.id === activeId);
  const send = () => {
    if (!draft.trim()) return;
    setMessages([...messages, {
      role: 'user',
      text: draft
    }, {
      role: 'agent',
      text: 'On it — give me a moment to query the warehouse.'
    }]);
    setDraft('');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "page",
    style: {
      display: 'flex',
      overflow: 'hidden',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 320,
      borderRight: '1px solid var(--border-faint)',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--bg-surface)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 20px 12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 600,
      letterSpacing: '-0.01em'
    }
  }, "Chats"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-icon btn-ghost"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 15
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 12px 12px'
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "input input-search",
    placeholder: "Search chats\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, CONVOS.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    onClick: () => setActiveId(c.id),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 20px',
      cursor: 'pointer',
      background: activeId === c.id ? 'var(--bg-hover)' : 'transparent',
      borderLeft: activeId === c.id ? '2px solid var(--accent)' : '2px solid transparent'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: c.agent,
    color: c.color,
    size: 28
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      flex: 1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, c.title), c.unread && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 50,
      background: 'var(--accent)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--fg-tertiary)',
      marginTop: 2,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, c.preview)), /*#__PURE__*/React.createElement("div", {
    className: "muted tnum",
    style: {
      fontSize: 11
    }
  }, c.when))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--bg-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 40px',
      borderBottom: '1px solid var(--border-faint)',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: active.agent,
    color: active.color,
    size: 28
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500
    }
  }, active.title), /*#__PURE__*/React.createElement("div", {
    className: "mono muted",
    style: {
      fontSize: 11,
      marginTop: 2
    }
  }, "quarterly-analyst \xB7 claude-opus-4.5")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "more",
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '40px 56px',
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, messages.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start',
      maxWidth: 720
    }
  }, m.role === 'agent' ? /*#__PURE__*/React.createElement(Avatar, {
    initials: "QA",
    color: 5,
    size: 28
  }) : /*#__PURE__*/React.createElement("div", {
    className: "avatar-sq s28",
    style: {
      background: 'var(--avatar-3)'
    }
  }, "EK"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "label-up",
    style: {
      marginBottom: 6
    }
  }, m.role === 'agent' ? 'Quarterly analyst' : 'Elshaday'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--fg-primary)',
      whiteSpace: 'pre-wrap'
    }
  }, m.text))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 40px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 10,
      padding: '12px 14px',
      background: 'var(--bg-surface)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    value: draft,
    onChange: e => setDraft(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        send();
      }
    },
    rows: 1,
    placeholder: "Reply\u2026",
    style: {
      flex: 1,
      border: 0,
      outline: 'none',
      background: 'transparent',
      resize: 'none',
      fontSize: 14,
      lineHeight: 1.5,
      color: 'var(--fg-primary)',
      minHeight: 22
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-icon btn-ghost"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 16
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-icon",
    disabled: !draft.trim(),
    onClick: send,
    style: {
      opacity: draft.trim() ? 1 : 0.5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "send",
    size: 14
  }))), /*#__PURE__*/React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 11,
      marginTop: 8,
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, "\u21B5"), " send"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, "\u21E7\u21B5"), " new line")))));
}

/* =====================================================================
   API KEYS — proper table (Name / Prefix / Agent / Last used / Created)
   ===================================================================== */
const KEYS = [{
  id: 1,
  name: 'Production server',
  prefix: 'sk_live_a4f8',
  agent: 'Support bot',
  lastUsed: '4m ago',
  created: 'Jan 14'
}, {
  id: 2,
  name: 'Staging',
  prefix: 'sk_test_91be',
  agent: 'Research assistant',
  lastUsed: '2h ago',
  created: 'Feb 02'
}, {
  id: 3,
  name: 'Local dev — elshaday',
  prefix: 'sk_test_3c2a',
  agent: 'Code reviewer',
  lastUsed: 'Yesterday',
  created: 'Feb 28'
}, {
  id: 4,
  name: 'CI runner',
  prefix: 'sk_live_d72f',
  agent: 'Email triage',
  lastUsed: 'Apr 11',
  created: 'Mar 06'
}, {
  id: 5,
  name: 'Backfill job',
  prefix: 'sk_live_8e15',
  agent: 'Data wrangler',
  lastUsed: 'Apr 4',
  created: 'Mar 20'
}];
function ApiKeysPage() {
  const [showSuccess, setShowSuccess] = useState2(false);
  const [keys, setKeys] = useState2(KEYS);
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, showSuccess && /*#__PURE__*/React.createElement(NoticeBar, {
    onDismiss: () => setShowSuccess(false)
  }, "New key created. Copy ", /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      background: 'oklch(20% 0.005 80)',
      padding: '1px 6px',
      borderRadius: 3
    }
  }, "sk_live_e9f2\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7"), " now \u2014 you won't see it again."), /*#__PURE__*/React.createElement("div", {
    className: "page-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "page-title"
  }, "API keys"), /*#__PURE__*/React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 13,
      marginTop: 6
    }
  }, "Server-side credentials. Each key is scoped to one agent.")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-sm",
    onClick: () => setShowSuccess(true)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 14,
    stroke: 1.75
  }), " Generate new key")), /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: '28%'
    }
  }, "Name"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '20%'
    }
  }, "Prefix"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '24%'
    }
  }, "Agent"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 110
    }
  }, "Last used"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 90
    }
  }, "Created"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 36
    }
  }))), /*#__PURE__*/React.createElement("tbody", null, keys.map(k => /*#__PURE__*/React.createElement("tr", {
    key: k.id,
    className: "key-row"
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 500
    }
  }, k.name), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 12,
      background: 'var(--n-100)',
      padding: '3px 8px',
      borderRadius: 4,
      color: 'var(--fg-secondary)'
    }
  }, k.prefix, "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7")), /*#__PURE__*/React.createElement("td", {
    className: "muted"
  }, k.agent), /*#__PURE__*/React.createElement("td", {
    className: "muted tnum",
    style: {
      fontSize: 12
    }
  }, k.lastUsed), /*#__PURE__*/React.createElement("td", {
    className: "muted tnum",
    style: {
      fontSize: 12
    }
  }, k.created), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "row-actions btn btn-icon btn-ghost",
    style: {
      color: 'var(--fg-tertiary)'
    },
    onClick: () => setKeys(keys.filter(x => x.id !== k.id))
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 14
  })))))))));
}

/* =====================================================================
   USAGE — 4 stat cards + By Agent + By API Key
   ===================================================================== */

function Sparkline({
  data,
  color = 'var(--n-700)',
  height = 40
}) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const w = 100,
    h = height;
  const pts = data.map((v, i) => `${i / (data.length - 1) * w},${h - (v - min) / (max - min || 1) * h}`).join(' ');
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${w} ${h}`,
    preserveAspectRatio: "none",
    style: {
      width: '100%',
      height,
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: pts,
    fill: "none",
    stroke: color,
    strokeWidth: "1.25",
    strokeLinejoin: "round",
    strokeLinecap: "round",
    vectorEffect: "non-scaling-stroke"
  }));
}
function Bars({
  data,
  color = 'var(--n-300)',
  height = 40
}) {
  const max = Math.max(...data);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 2,
      height
    }
  }, data.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: `${v / max * 100}%`,
      background: color,
      borderRadius: 1
    }
  })));
}
function StatCard({
  label,
  value,
  delta,
  deltaUp,
  chart
}) {
  const deltaColor = deltaUp ? 'oklch(45% 0.13 145)' : 'oklch(50% 0.18 25)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 22px',
      border: '1px solid var(--border-faint)',
      borderRadius: 8,
      background: 'var(--bg-surface)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "label-up",
    style: {
      marginBottom: 14
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tnum",
    style: {
      fontSize: 32,
      fontWeight: 500,
      letterSpacing: '-0.02em',
      lineHeight: 1
    }
  }, value), delta && /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      fontSize: 11,
      fontWeight: 500,
      color: deltaColor
    }
  }, deltaUp ? '↑' : '↓', " ", delta)), chart);
}
function UsagePage() {
  const tokenSeries = [12, 18, 22, 19, 26, 30, 28, 34, 32, 40, 38, 46, 42, 50, 48, 56, 52, 60, 58, 64, 62, 70, 68, 75, 72, 80, 78, 86, 82, 92];
  const reqBars = [22, 28, 19, 31, 27, 36, 30, 41, 35, 44, 39, 50, 46, 58, 52, 61, 55, 64, 58, 70, 65, 73, 68, 80, 74, 86, 78, 92, 84, 98];
  const userBars = [12, 14, 11, 13, 15, 12, 16, 14, 17, 15, 18, 16, 19, 17, 20, 18, 22, 19, 21, 23, 20, 24, 22, 25, 23, 26, 24, 28, 25, 29];
  const errSeries = [4, 3, 2, 5, 3, 2, 1, 2, 4, 3, 1, 2, 1, 0, 1, 2, 1, 1, 0, 1, 2, 1, 0, 1, 2, 1, 0, 1, 0, 1];
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-title"
  }, "Usage"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("select", {
    className: "input",
    style: {
      width: 'auto',
      padding: '7px 30px 7px 12px',
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("option", null, "Last 30 days"), /*#__PURE__*/React.createElement("option", null, "Last 7 days"), /*#__PURE__*/React.createElement("option", null, "This month")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary btn-sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "data",
    size: 13
  }), " Export"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16,
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Tokens used",
    value: "1.28M",
    delta: "14%",
    deltaUp: true,
    chart: /*#__PURE__*/React.createElement(Sparkline, {
      data: tokenSeries,
      color: "var(--accent)"
    })
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Requests",
    value: "42,108",
    delta: "22%",
    deltaUp: true,
    chart: /*#__PURE__*/React.createElement(Bars, {
      data: reqBars,
      color: "var(--n-400)"
    })
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Active users",
    value: "128",
    delta: "6%",
    deltaUp: true,
    chart: /*#__PURE__*/React.createElement(Bars, {
      data: userBars,
      color: "var(--n-400)"
    })
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Errors",
    value: "0.42%",
    delta: "38%",
    deltaUp: false,
    chart: /*#__PURE__*/React.createElement(Sparkline, {
      data: errSeries,
      color: "oklch(60% 0.20 25)"
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "label-up"
  }, "By agent"), /*#__PURE__*/React.createElement("a", {
    className: "muted",
    style: {
      fontSize: 12,
      textDecoration: 'none'
    },
    href: "#"
  }, "View all \u2192")), /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Agent"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "Requests"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "Tokens"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "Cost"))), /*#__PURE__*/React.createElement("tbody", null, [['Support bot', 'claude-sonnet-4.5', 18420, 412000, 38.20], ['Research assistant', 'gpt-4o', 12810, 290000, 24.90], ['Data wrangler', 'claude-sonnet-4.5', 8214, 198000, 14.30], ['Email triage', 'gpt-4o-mini', 5912, 84000, 6.10], ['Quarterly analyst', 'claude-opus-4.5', 3210, 142000, 12.80], ['Code reviewer', 'claude-sonnet-4.5', 1944, 86000, 7.20]].map(r => /*#__PURE__*/React.createElement("tr", {
    key: r[0]
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 500
    }
  }, r[0]), /*#__PURE__*/React.createElement("div", {
    className: "mono muted",
    style: {
      fontSize: 11,
      marginTop: 2
    }
  }, r[1])), /*#__PURE__*/React.createElement("td", {
    className: "tnum",
    style: {
      textAlign: 'right'
    }
  }, r[2].toLocaleString()), /*#__PURE__*/React.createElement("td", {
    className: "tnum",
    style: {
      textAlign: 'right'
    }
  }, (r[3] / 1000).toFixed(0), "K"), /*#__PURE__*/React.createElement("td", {
    className: "tnum",
    style: {
      textAlign: 'right'
    }
  }, "$", r[4].toFixed(2))))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "label-up",
    style: {
      marginBottom: 14
    }
  }, "By API key"), /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Key"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "Requests"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "Tokens"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "Last used"))), /*#__PURE__*/React.createElement("tbody", null, [['Production server', 'sk_live_a4f8', 21408, 612000, '4m ago'], ['CI runner', 'sk_live_d72f', 9120, 214000, 'Apr 11'], ['Backfill job', 'sk_live_8e15', 6240, 186000, 'Apr 4'], ['Staging', 'sk_test_91be', 3814, 92000, '2h ago'], ['Local dev — elshaday', 'sk_test_3c2a', 1526, 41000, 'Yesterday']].map(r => /*#__PURE__*/React.createElement("tr", {
    key: r[1]
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 500
    }
  }, r[0]), /*#__PURE__*/React.createElement("div", {
    className: "mono muted",
    style: {
      fontSize: 11,
      marginTop: 2
    }
  }, r[1], "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7")), /*#__PURE__*/React.createElement("td", {
    className: "tnum",
    style: {
      textAlign: 'right'
    }
  }, r[2].toLocaleString()), /*#__PURE__*/React.createElement("td", {
    className: "tnum",
    style: {
      textAlign: 'right'
    }
  }, (r[3] / 1000).toFixed(0), "K"), /*#__PURE__*/React.createElement("td", {
    className: "tnum muted",
    style: {
      textAlign: 'right',
      fontSize: 12
    }
  }, r[4]))))))));
}

/* =====================================================================
   SETTINGS
   ===================================================================== */

function SettingsPage() {
  const [cat, setCat] = useState2('general');
  const cats = [{
    id: 'general',
    label: 'Workspace',
    icon: 'settings'
  }, {
    id: 'team',
    label: 'Team',
    icon: 'team'
  }, {
    id: 'providers',
    label: 'Provider keys',
    icon: 'keys'
  }, {
    id: 'audit',
    label: 'Audit log',
    icon: 'history'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "page",
    style: {
      display: 'flex',
      overflow: 'hidden',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 220,
      borderRight: '1px solid var(--border-faint)',
      padding: '40px 0',
      background: 'var(--bg-surface)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "label-up",
    style: {
      padding: '0 24px 14px'
    }
  }, "Settings"), cats.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    onClick: () => setCat(c.id),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      width: '100%',
      padding: '10px 22px',
      textAlign: 'left',
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      fontSize: 13,
      fontWeight: cat === c.id ? 500 : 400,
      color: cat === c.id ? 'var(--fg-primary)' : 'var(--fg-secondary)',
      borderLeft: cat === c.id ? '2px solid var(--accent)' : '2px solid transparent',
      paddingLeft: 22
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 15,
    style: {
      color: cat === c.id ? 'var(--fg-primary)' : 'var(--fg-tertiary)'
    }
  }), c.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '56px 64px'
    }
  }, cat === 'general' && /*#__PURE__*/React.createElement(SettingsWorkspace, null), cat === 'team' && /*#__PURE__*/React.createElement(SettingsTeam, null), cat === 'providers' && /*#__PURE__*/React.createElement(SettingsProviders, null), cat === 'audit' && /*#__PURE__*/React.createElement(SettingsAudit, null)));
}
function SettingRow({
  label,
  desc,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 32,
      padding: '20px 0',
      borderTop: '1px solid var(--border-faint)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500
    }
  }, label), desc && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--fg-tertiary)',
      marginTop: 4,
      lineHeight: 1.5,
      maxWidth: 480
    }
  }, desc)), /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0
    }
  }, children));
}
function SettingsWorkspace() {
  const [name, setName] = useState2('Labs');
  const [confirm, setConfirm] = useState2('');
  const canDelete = confirm === 'Labs';
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 600,
      letterSpacing: '-0.03em',
      marginBottom: 8
    }
  }, "Workspace"), /*#__PURE__*/React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 14,
      marginBottom: 36
    }
  }, "Identity, defaults, and irreversible actions."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 32,
      padding: '20px 0',
      borderTop: '1px solid var(--border-faint)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500
    }
  }, "Workspace logo"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--fg-tertiary)',
      marginTop: 4,
      lineHeight: 1.5,
      maxWidth: 480
    }
  }, "PNG or SVG, square. Shown on shared agent links and embedded widgets.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 8,
      background: 'var(--n-900)',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      fontSize: 20,
      fontWeight: 600,
      letterSpacing: '-0.02em'
    }
  }, "L"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary btn-sm"
  }, "Upload"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    style: {
      color: 'var(--fg-tertiary)'
    }
  }, "Remove"))), /*#__PURE__*/React.createElement(SettingRow, {
    label: "Workspace name",
    desc: "Shown to teammates and on shared links."
  }, /*#__PURE__*/React.createElement("input", {
    className: "input",
    value: name,
    onChange: e => setName(e.target.value),
    style: {
      width: 240
    }
  })), /*#__PURE__*/React.createElement(SettingRow, {
    label: "Workspace URL",
    desc: "The slug used in agent share links."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      border: '1px solid var(--border-subtle)',
      borderRadius: 6,
      overflow: 'hidden',
      background: 'var(--bg-surface)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono muted",
    style: {
      fontSize: 12,
      padding: '9px 8px 9px 12px',
      borderRight: '1px solid var(--border-faint)',
      background: 'var(--n-100)'
    }
  }, "agentchat.dev/"), /*#__PURE__*/React.createElement("input", {
    className: "mono",
    defaultValue: "labs",
    style: {
      border: 0,
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      padding: '9px 12px',
      width: 140,
      color: 'var(--fg-primary)'
    }
  }))), /*#__PURE__*/React.createElement(SettingRow, {
    label: "Default model",
    desc: "Used when an agent doesn't specify one."
  }, /*#__PURE__*/React.createElement("select", {
    className: "input",
    defaultValue: "claude-sonnet-4.5",
    style: {
      width: 240,
      fontFamily: 'var(--font-mono)',
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("option", null, "claude-sonnet-4.5"), /*#__PURE__*/React.createElement("option", null, "claude-opus-4.5"), /*#__PURE__*/React.createElement("option", null, "gpt-4o"))), /*#__PURE__*/React.createElement(SettingRow, {
    label: "Email notifications",
    desc: "Daily digest of agent activity."
  }, /*#__PURE__*/React.createElement(Switch, {
    on: true,
    onChange: () => {}
  })), /*#__PURE__*/React.createElement(SettingRow, {
    label: "Anonymous usage analytics",
    desc: "Help improve the product. No prompt content is sent."
  }, /*#__PURE__*/React.createElement(Switch, {
    on: false,
    onChange: () => {}
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "danger-zone"
  }, /*#__PURE__*/React.createElement("h4", null, /*#__PURE__*/React.createElement(Icon, {
    name: "shield",
    size: 13
  }), " Danger zone"), /*#__PURE__*/React.createElement("p", null, "Permanently remove this workspace, all agents, chat history, and connected data sources. ", /*#__PURE__*/React.createElement("strong", null, "This cannot be undone.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "input",
    placeholder: `Type "${name}" to confirm`,
    value: confirm,
    onChange: e => setConfirm(e.target.value),
    style: {
      flex: 1,
      maxWidth: 280,
      fontFamily: 'var(--font-mono)',
      fontSize: 12
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-danger",
    disabled: !canDelete,
    style: {
      opacity: canDelete ? 1 : 0.5,
      cursor: canDelete ? 'pointer' : 'not-allowed'
    }
  }, "Delete workspace"))));
}
const ROLES = ['Owner', 'Admin', 'Developer', 'Viewer'];
function SettingsTeam() {
  const [members, setMembers] = useState2([['Elshaday Kebede', 'elshaday@labs.co', 'Owner', 3, 'EK'], ['Daria Roth', 'daria@labs.co', 'Admin', 4, 'DR'], ['Ravi Anand', 'ravi@labs.co', 'Developer', 5, 'RA'], ['Sam Brae', 'sam@labs.co', 'Developer', 1, 'SB'], ['Marisol Kessler', 'marisol@labs.co', 'Developer', 2, 'MK'], ['Theo Solano', 'theo@labs.co', 'Viewer', 6, 'TS']]);
  const setRole = (i, role) => {
    const next = [...members];
    next[i] = [...next[i]];
    next[i][2] = role;
    setMembers(next);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 600,
      letterSpacing: '-0.03em',
      marginBottom: 8
    }
  }, "Team"), /*#__PURE__*/React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 14,
      marginBottom: 36
    }
  }, "Invite teammates and manage roles. Roles control which agents and data sources someone can access."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "input",
    placeholder: "email@company.com",
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("select", {
    className: "input",
    defaultValue: "Developer",
    style: {
      width: 140
    }
  }, ROLES.filter(r => r !== 'Owner').map(r => /*#__PURE__*/React.createElement("option", {
    key: r
  }, r))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary"
  }, "Invite")), /*#__PURE__*/React.createElement("div", {
    className: "label-up",
    style: {
      marginBottom: 12
    }
  }, "Members \xB7 ", members.length), members.map(([name, email, role, color, initials], i) => /*#__PURE__*/React.createElement("div", {
    key: email,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px 0',
      borderTop: '1px solid var(--border-faint)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: initials,
    color: color,
    size: 28
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 12
    }
  }, email)), role === 'Owner' ? /*#__PURE__*/React.createElement("span", {
    className: "muted mono",
    style: {
      fontSize: 11,
      padding: '4px 10px',
      background: 'var(--n-100)',
      borderRadius: 4,
      letterSpacing: '0.05em'
    }
  }, "OWNER") : /*#__PURE__*/React.createElement("select", {
    className: "role-select",
    value: role,
    onChange: e => setRole(i, e.target.value)
  }, ROLES.filter(r => r !== 'Owner').map(r => /*#__PURE__*/React.createElement("option", {
    key: r
  }, r))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    style: {
      color: 'var(--fg-tertiary)',
      visibility: role === 'Owner' ? 'hidden' : 'visible'
    }
  }, "Remove"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 48
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "label-up",
    style: {
      marginBottom: 12
    }
  }, "Pending \xB7 2"), [['nadia@labs.co', 'Developer'], ['jules@labs.co', 'Viewer']].map(([email, role]) => /*#__PURE__*/React.createElement("div", {
    key: email,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px 0',
      borderTop: '1px solid var(--border-faint)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 4,
      background: 'var(--n-150)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 13,
    style: {
      color: 'var(--fg-tertiary)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 13
    }
  }, email), /*#__PURE__*/React.createElement("span", {
    className: "pill",
    style: {
      background: 'oklch(96% 0.04 80)',
      color: 'oklch(48% 0.10 70)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pill-dot"
  }), "pending"), /*#__PURE__*/React.createElement("select", {
    className: "role-select",
    defaultValue: role
  }, ROLES.filter(r => r !== 'Owner').map(r => /*#__PURE__*/React.createElement("option", {
    key: r
  }, r))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    style: {
      color: 'var(--fg-tertiary)'
    }
  }, "Revoke"))));
}
function SettingsProviders() {
  const [open, setOpen] = useState2(null);
  const provs = [{
    id: 'anthropic',
    name: 'Anthropic',
    dot: 'oklch(72% 0.13 30)',
    set: true,
    prefix: 'sk-ant-···········x4f8',
    updated: 'Apr 12'
  }, {
    id: 'openai',
    name: 'OpenAI',
    dot: 'oklch(70% 0.13 145)',
    set: true,
    prefix: 'sk-···············91be',
    updated: 'Mar 28'
  }, {
    id: 'google',
    name: 'Google AI',
    dot: 'oklch(70% 0.13 250)',
    set: false
  }, {
    id: 'xai',
    name: 'xAI',
    dot: 'oklch(20% 0.005 80)',
    set: false
  }, {
    id: 'mistral',
    name: 'Mistral',
    dot: 'oklch(72% 0.13 60)',
    set: false
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 600,
      letterSpacing: '-0.03em',
      marginBottom: 8
    }
  }, "Provider keys"), /*#__PURE__*/React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 14,
      marginBottom: 24
    }
  }, "Bring your own keys. Stored encrypted; only used at request time."), /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "icon-wrap"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield",
    size: 14
  })), /*#__PURE__*/React.createElement("div", null, "Keys are encrypted at rest with AES-256 and only decrypted in the request path. We never log key contents and rotate the encryption key quarterly.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, provs.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      border: '1px solid var(--border-faint)',
      borderRadius: 8,
      background: 'var(--bg-surface)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(open === p.id ? null : p.id),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '16px 18px',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 50,
      background: p.dot,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500
    }
  }, p.name), p.set && /*#__PURE__*/React.createElement("div", {
    className: "mono muted",
    style: {
      fontSize: 11,
      marginTop: 2
    }
  }, p.prefix, " \xB7 updated ", p.updated)), p.set ? /*#__PURE__*/React.createElement("span", {
    className: "pill configured"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pill-dot"
  }), "configured") : /*#__PURE__*/React.createElement("span", {
    className: "pill notset"
  }, "not set"), /*#__PURE__*/React.createElement(Icon, {
    name: open === p.id ? 'chevron_down' : 'chevron_right',
    size: 14,
    style: {
      color: 'var(--fg-tertiary)'
    }
  })), open === p.id && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 18px 18px',
      borderTop: '1px solid var(--border-faint)',
      background: 'oklch(99% 0.005 80)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "input mono",
    type: "password",
    placeholder: p.id === 'anthropic' ? 'sk-ant-...' : p.id === 'openai' ? 'sk-...' : 'paste key',
    style: {
      flex: 1,
      fontFamily: 'var(--font-mono)',
      fontSize: 12
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary btn-sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "copy",
    size: 12
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-sm"
  }, p.set ? 'Update' : 'Save'), p.set && /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    style: {
      color: 'oklch(50% 0.18 25)'
    }
  }, "Remove")), /*#__PURE__*/React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 11,
      marginTop: 8
    }
  }, "Find your key at ", /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      color: 'var(--fg-secondary)'
    }
  }, p.id === 'anthropic' ? 'console.anthropic.com/keys' : p.id === 'openai' ? 'platform.openai.com/api-keys' : `${p.id}.com → API`)))))));
}
function SettingsAudit() {
  /* event-type pills + actor email + timestamp */
  const events = [{
    type: 'agent',
    actor: 'Elshaday Kebede',
    email: 'elshaday@labs.co',
    verb: 'deleted agent',
    tgt: 'Support Bot',
    ts: '2m ago'
  }, {
    type: 'invite',
    actor: 'Daria Roth',
    email: 'daria@labs.co',
    verb: 'invited',
    tgt: 'jules@labs.co',
    ts: '14m ago'
  }, {
    type: 'key',
    actor: 'Ravi Anand',
    email: 'ravi@labs.co',
    verb: 'rotated API key',
    tgt: 'sk_live_a4f8',
    ts: '1h ago'
  }, {
    type: 'provider',
    actor: 'Elshaday Kebede',
    email: 'elshaday@labs.co',
    verb: 'updated provider key',
    tgt: 'Anthropic',
    ts: '3h ago'
  }, {
    type: 'agent',
    actor: 'Daria Roth',
    email: 'daria@labs.co',
    verb: 'created agent',
    tgt: 'Quarterly analyst',
    ts: 'Yesterday'
  }, {
    type: 'source',
    actor: 'Marisol Kessler',
    email: 'marisol@labs.co',
    verb: 'connected data source',
    tgt: 'Customer DB',
    ts: 'Apr 12'
  }, {
    type: 'member',
    actor: 'Ravi Anand',
    email: 'ravi@labs.co',
    verb: 'removed member',
    tgt: 'oldteammate@labs.co',
    ts: 'Apr 11'
  }, {
    type: 'config',
    actor: 'Elshaday Kebede',
    email: 'elshaday@labs.co',
    verb: 'changed default model',
    tgt: 'claude-sonnet-4.5',
    ts: 'Apr 9'
  }];
  // map event type → pill color (uses existing pill classes + inline tint)
  const pillStyle = t => {
    const map = {
      agent: {
        bg: 'oklch(96% 0.04 145)',
        fg: 'oklch(42% 0.13 145)'
      },
      invite: {
        bg: 'oklch(96% 0.04 250)',
        fg: 'oklch(42% 0.13 250)'
      },
      key: {
        bg: 'oklch(96% 0.04 80)',
        fg: 'oklch(48% 0.10 70)'
      },
      provider: {
        bg: 'oklch(96% 0.04 30)',
        fg: 'oklch(45% 0.13 30)'
      },
      source: {
        bg: 'oklch(96% 0.04 280)',
        fg: 'oklch(42% 0.12 280)'
      },
      member: {
        bg: 'var(--n-100)',
        fg: 'var(--fg-secondary)'
      },
      config: {
        bg: 'var(--n-100)',
        fg: 'var(--fg-secondary)'
      }
    };
    const c = map[t] || map.config;
    return {
      background: c.bg,
      color: c.fg
    };
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 600,
      letterSpacing: '-0.03em',
      marginBottom: 8
    }
  }, "Audit log"), /*#__PURE__*/React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 14,
      marginBottom: 24
    }
  }, "Every workspace-level action, oldest at the bottom."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "input input-search",
    placeholder: "Search by actor, target, or type\u2026",
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("select", {
    className: "input",
    defaultValue: "All types",
    style: {
      width: 160
    }
  }, /*#__PURE__*/React.createElement("option", null, "All types"), /*#__PURE__*/React.createElement("option", null, "Agent"), /*#__PURE__*/React.createElement("option", null, "Invite"), /*#__PURE__*/React.createElement("option", null, "Key"), /*#__PURE__*/React.createElement("option", null, "Provider"), /*#__PURE__*/React.createElement("option", null, "Source"), /*#__PURE__*/React.createElement("option", null, "Member"), /*#__PURE__*/React.createElement("option", null, "Config")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary btn-sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "data",
    size: 13
  }), " Export CSV")), /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: 110
    }
  }, "Type"), /*#__PURE__*/React.createElement("th", null, "Event"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 240
    }
  }, "Actor"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 110,
      textAlign: 'right'
    }
  }, "Time"))), /*#__PURE__*/React.createElement("tbody", null, events.map((e, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "pill",
    style: {
      ...pillStyle(e.type),
      fontSize: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pill-dot"
  }), e.type)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--fg-secondary)'
    }
  }, e.verb), ' ', /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 12,
      background: 'var(--n-100)',
      padding: '1px 6px',
      borderRadius: 3
    }
  }, e.tgt)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500
    }
  }, e.actor), /*#__PURE__*/React.createElement("div", {
    className: "mono muted",
    style: {
      fontSize: 11,
      marginTop: 1
    }
  }, e.email)), /*#__PURE__*/React.createElement("td", {
    className: "muted tnum",
    style: {
      fontSize: 12,
      textAlign: 'right'
    }
  }, e.ts))))));
}
Object.assign(window, {
  DataSourcesPage,
  ChatScreen,
  ApiKeysPage,
  UsagePage,
  SettingsPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/agentchat/screens.jsx", error: String((e && e.message) || e) }); }

})();
