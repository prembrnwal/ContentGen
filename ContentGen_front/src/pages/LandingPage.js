import { C, FEATURES, STATS } from '../constants/theme';
import { BtnPrimary } from '../components/Buttons';
import Icon from '../components/Icon';

export default function LandingPage({ setPage }) {
  return (
    <div style={{ background: C.bg }}>
      {/* HERO */}
      <div style={{
        background: `linear-gradient(135deg, ${C.greenDark} 0%, ${C.green} 50%, ${C.teal} 100%)`,
        padding: "80px 48px 88px", textAlign: "center",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: -80, left: -80, width: 320, height: 320, borderRadius: "50%", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -100, right: -60, width: 380, height: 380, borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 640, margin: "0 auto" }}>
          <div className="fade-up" style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)",
            borderRadius: 24, padding: "5px 16px", fontSize: 12, fontWeight: 600,
            color: "#fff", letterSpacing: "0.07em", textTransform: "uppercase",
            marginBottom: 26, border: "1px solid rgba(255,255,255,0.25)",
          }}>
            <Icon name="sparkle" size={12} color="#fff" /> Free AI Content Generator
          </div>

          <h1 className="fade-up-1" style={{
            fontSize: 46, fontWeight: 700, color: "#fff", letterSpacing: "-1px",
            lineHeight: 1.12, fontFamily: "'DM Serif Display', serif", marginBottom: 18,
          }}>
            Create compelling content <em>in seconds</em>
          </h1>

          <p className="fade-up-2" style={{ fontSize: 17, color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: 36 }}>
            ContentGen Pro uses advanced AI to generate blog posts, emails, LinkedIn content, ad copy, and more — tailored to your exact tone and style.
          </p>

          <div className="fade-up-3" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <BtnPrimary style={{ padding: "14px 32px", fontSize: 16, borderRadius: 10 }} onClick={() => setPage("login")}>
              <Icon name="sparkle" size={16} color="#fff" /> Start generating free
            </BtnPrimary>
            <button
              onClick={() => setPage("login")}
              style={{
                background: "rgba(255,255,255,0.15)", color: "#fff",
                border: "1.5px solid rgba(255,255,255,0.4)", borderRadius: 10,
                padding: "14px 28px", fontSize: 15, fontWeight: 600, cursor: "pointer",
                backdropFilter: "blur(6px)",
              }}
            >
              View demo →
            </button>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div style={{ background: C.white, borderBottom: `1px solid ${C.gray100}` }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "28px 36px", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 24 }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 30, fontWeight: 700, color: C.green, letterSpacing: "-0.8px", fontFamily: "'DM Serif Display', serif" }}>{s.val}</div>
              <div style={{ fontSize: 13, color: C.gray600, marginTop: 3 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "60px 36px 80px" }}>
        <div style={{ textAlign: "center", marginBottom: 42 }}>
          <h2 style={{ fontSize: 30, fontWeight: 700, letterSpacing: "-0.5px", fontFamily: "'DM Serif Display', serif", color: C.black, marginBottom: 10 }}>
            Everything you need to scale content
          </h2>
          <p style={{ fontSize: 15, color: C.gray600, maxWidth: 480, margin: "0 auto" }}>
            Six powerful templates powered by AI. Just write your prompt, select your tone, and watch it write.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {FEATURES.map((f, i) => (
            <div key={i} style={{ background: C.white, border: `1px solid ${C.gray100}`, borderRadius: 12, padding: "22px 20px", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: C.greenLight, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                <Icon name={f.icon} size={18} color={C.green} />
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color: C.black, marginBottom: 6 }}>{f.title}</div>
              <div style={{ fontSize: 13, color: C.gray600, lineHeight: 1.65 }}>{f.desc}</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 36 }}>
          <BtnPrimary style={{ padding: "13px 30px", fontSize: 15 }} onClick={() => setPage("login")}>
            Get started free →
          </BtnPrimary>
        </div>
      </div>
    </div>
  );
}
