import { C } from '../constants/theme';
import { BtnPrimary, BtnGhost } from './Buttons';
import Icon from './Icon';

export default function Header({ setPage, user, setUser }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
      borderBottom: `1px solid ${C.gray100}`,
      padding: "0 36px", height: 60,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      position: "sticky", top: 0, zIndex: 100,
      boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
    }}>
      <div onClick={() => setPage("landing")} style={{ display: "flex", alignItems: "center", gap: 9, cursor: "pointer" }}>
        <div style={{ width: 30, height: 30, borderRadius: 8, background: `linear-gradient(135deg, ${C.greenMid}, ${C.greenDark})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name="sparkle" size={14} color="#fff" />
        </div>
        <div style={{ fontSize: 16, fontWeight: 700, color: C.black, letterSpacing: "-0.3px", fontFamily: "'DM Serif Display', serif" }}>
          ContentGen <span style={{ color: C.green }}>Pro</span>
        </div>
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        {user ? (
          <>
            <span style={{ fontSize: 13, color: C.gray600, alignSelf: "center" }}>Hi, {user}</span>
            <BtnGhost onClick={() => { setUser(null); setPage("landing"); }}>Sign out</BtnGhost>
          </>
        ) : (
          <>
            <BtnGhost onClick={() => setPage("login")}>Sign in</BtnGhost>
            <BtnPrimary small onClick={() => setPage("login")}>Get started free</BtnPrimary>
          </>
        )}
      </div>
    </div>
  );
}
