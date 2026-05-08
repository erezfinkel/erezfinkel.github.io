/* tweaks-panel.jsx — Tweaks side-panel for blog prototype */

const { useState, useEffect } = React;

/* ─── useTweaks hook ──────────────────────────────────────────────────────── */
function useTweaks(defaults) {
  const [tweaks, setTweaksState] = useState(() => {
    try {
      const saved = localStorage.getItem('blog-tweaks');
      return saved ? { ...defaults, ...JSON.parse(saved) } : defaults;
    } catch { return defaults; }
  });

  const setTweak = (key, value) => {
    setTweaksState(prev => {
      const next = { ...prev, [key]: value };
      try { localStorage.setItem('blog-tweaks', JSON.stringify(next)); } catch {}
      return next;
    });
  };

  return { tweaks, setTweak };
}

/* ─── Panel shell ─────────────────────────────────────────────────────────── */
function TweaksPanel({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <style>{`
        .tp-fab {
          position: fixed;
          bottom: 24px;
          left: 24px;
          z-index: 9999;
          width: 44px; height: 44px;
          border-radius: 50%;
          background: var(--accent);
          color: #fff;
          border: none;
          font-size: 20px;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 16px oklch(0% 0 0 / .25);
          cursor: pointer;
          transition: transform .2s, background .2s;
        }
        .tp-fab:hover { transform: scale(1.08); background: var(--accent-hover); }
        .tp-drawer {
          position: fixed;
          bottom: 80px;
          left: 24px;
          z-index: 9998;
          width: 260px;
          background: var(--surface);
          border: 1.5px solid var(--border-strong);
          border-radius: 10px;
          box-shadow: 0 8px 32px oklch(0% 0 0 / .18);
          padding: 18px 16px 14px;
          display: flex; flex-direction: column; gap: 6px;
          transform-origin: bottom left;
          animation: tpIn .18s ease;
        }
        @keyframes tpIn { from { opacity:0; transform:scale(.92) } to { opacity:1; transform:scale(1) } }
        .tp-title {
          font-family: var(--font-serif);
          font-size: 14px; font-weight: 700;
          color: var(--ink);
          margin-bottom: 6px;
          border-bottom: 2px solid var(--accent);
          padding-bottom: 8px;
        }
        .tp-section-title {
          font-size: 10px; font-weight: 700;
          letter-spacing: .08em; text-transform: uppercase;
          color: var(--ink-3); margin: 10px 0 6px;
        }
        .tp-row {
          display: flex; align-items: center;
          justify-content: space-between; gap: 8px;
          margin-bottom: 6px;
        }
        .tp-label { font-size: 13px; color: var(--ink-2); }
        .tp-color { width: 32px; height: 26px; border: 1.5px solid var(--border-strong); border-radius: 4px; cursor: pointer; padding: 0; }
        .tp-select {
          background: var(--bg); border: 1.5px solid var(--border);
          border-radius: 4px; padding: 4px 8px;
          font-size: 12px; color: var(--ink); font-family: var(--font-ui);
          cursor: pointer;
        }
        .tp-toggle {
          width: 36px; height: 20px;
          background: var(--border-strong);
          border-radius: 10px; border: none;
          position: relative; cursor: pointer;
          transition: background .2s;
          flex-shrink: 0;
        }
        .tp-toggle.on { background: var(--accent); }
        .tp-toggle::after {
          content: '';
          position: absolute;
          top: 3px; left: 3px;
          width: 14px; height: 14px;
          border-radius: 50%; background: #fff;
          transition: transform .2s;
        }
        .tp-toggle.on::after { transform: translateX(16px); }
      `}</style>

      <button className="tp-fab" onClick={() => setOpen(o => !o)} title="עריכת עיצוב">
        {open ? '✕' : '⚙'}
      </button>
      {open && (
        <div className="tp-drawer">
          <div className="tp-title">⚙ עריכת עיצוב</div>
          {children}
        </div>
      )}
    </>
  );
}

/* ─── TweakSection ────────────────────────────────────────────────────────── */
function TweakSection({ title, children }) {
  return (
    <div>
      <div className="tp-section-title">{title}</div>
      {children}
    </div>
  );
}

/* ─── TweakColor ──────────────────────────────────────────────────────────── */
function TweakColor({ label, id, value, onChange }) {
  const PRESETS = [
    'oklch(44% 0.18 25)',   // terracotta (default)
    'oklch(45% 0.20 260)',  // blue
    'oklch(42% 0.18 145)',  // green
    'oklch(40% 0.20 300)',  // purple
    'oklch(48% 0.22 55)',   // orange
    'oklch(38% 0.16 0)',    // crimson
  ];
  return (
    <div className="tp-row">
      <span className="tp-label">{label}</span>
      <div style={{ display:'flex', gap:'4px', flexWrap:'wrap', justifyContent:'flex-end' }}>
        {PRESETS.map(p => (
          <button
            key={p}
            onClick={() => onChange(p)}
            style={{
              width: 20, height: 20,
              borderRadius: '50%',
              border: p === value ? '2px solid var(--ink)' : '1.5px solid var(--border)',
              background: p,
              cursor: 'pointer',
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── TweakSelect ─────────────────────────────────────────────────────────── */
function TweakSelect({ label, id, value, onChange, options }) {
  return (
    <div className="tp-row">
      <span className="tp-label">{label}</span>
      <select
        className="tp-select"
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        {options.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  );
}

/* ─── TweakToggle ─────────────────────────────────────────────────────────── */
function TweakToggle({ label, id, value, onChange }) {
  return (
    <div className="tp-row">
      <span className="tp-label">{label}</span>
      <button
        className={`tp-toggle${value ? ' on' : ''}`}
        onClick={() => onChange(!value)}
        aria-checked={value}
        role="switch"
      />
    </div>
  );
}
