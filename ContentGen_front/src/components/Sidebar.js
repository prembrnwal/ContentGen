import { useState } from 'react';
import { C } from '../constants/theme';
import Icon from './Icon';

function SideItem({ icon, label, active, onClick, badge }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex", alignItems: "center", gap: 12,
        padding: "10px 16px", borderRadius: 10, cursor: "pointer",
        background: active ? C.greenLight : hov ? "#f0faf5" : "transparent",
        color: active ? C.greenDark : hov ? C.green : C.gray600,
        fontWeight: active ? 600 : 400, fontSize: 14,
        borderLeft: active ? `3px solid ${C.green}` : "3px solid transparent",
        transition: "all 0.15s ease",
        userSelect: "none", position: "relative",
      }}
    >
      <span style={{ opacity: active ? 1 : hov ? 1 : 0.65 }}>
        <Icon name={icon} size={18} color={active ? C.green : hov ? C.green : C.gray600} />
      </span>
      <span style={{ flex: 1 }}>{label}</span>
      {badge != null && badge > 0 && (
        <span style={{ background: C.green, color: "#fff", fontSize: 10, fontWeight: 700, padding: "1px 7px", borderRadius: 20 }}>
          {badge}
        </span>
      )}
    </div>
  );
}

export default function Sidebar({ tab, setTab, history, user, setUser, setPage }) {
  return (
    <div style={{
      width: 220, flexShrink: 0,
      background: C.white,
      borderRight: `1px solid ${C.gray100}`,
      display: "flex", flexDirection: "column",
      height: "100vh", position: "sticky", top: 0,
      boxShadow: "2px 0 12px rgba(0,0,0,0.03)",
    }}>
      {/* Logo */}
      <div style={{ padding: "20px 18px 16px", borderBottom: `1px solid ${C.gray100}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: 10, background: `linear-gradient(135deg, ${C.greenMid}, ${C.greenDark})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon name="sparkle" size={16} color="#fff" />
          </div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: C.black, letterSpacing: "-0.3px", fontFamily: "'DM Serif Display', serif" }}>ContentGen</div>
            <div style={{ fontSize: 10, color: C.green, fontWeight: 600, letterSpacing: "0.05em" }}>PRO</div>
          </div>
        </div>
      </div>

      {/* User info */}
      <div style={{ padding: "12px 18px", borderBottom: `1px solid ${C.gray100}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: C.greenLight, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon name="user" size={16} color={C.green} />
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: C.black }}>{user || "User"}</div>
            <div style={{ fontSize: 11, color: C.green, fontWeight: 500 }}>Content Creator</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <div style={{ padding: "14px 10px", flex: 1 }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.gray400, padding: "0 10px 8px" }}>Navigation</div>
        <SideItem icon="home" label="Dashboard" active={tab === "dashboard"} onClick={() => setTab("dashboard")} />
        <SideItem icon="generate" label="Generator" active={tab === "generate"} onClick={() => setTab("generate")} />
        <SideItem icon="history" label="Content History" active={tab === "history"} onClick={() => setTab("history")} badge={history.length} />
      </div>

      {/* Pro Tip */}
      <div style={{ margin: "0 10px 10px", padding: "12px 14px", background: C.greenLight, borderRadius: 10, border: `1px solid ${C.green}22` }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.greenDark, marginBottom: 4 }}>💡 Pro Tip</div>
        <div style={{ fontSize: 11, color: C.gray600, lineHeight: 1.55 }}>
          Use the Ad template for quick promotions and the Blog template for long-form SEO content.
        </div>
      </div>

      {/* Logout */}
      <div style={{ padding: "0 10px 16px" }}>
        <SideItem icon="logout" label="Sign Out" onClick={() => { setUser(null); setPage("landing"); }} />
      </div>
    </div>
  );
}
