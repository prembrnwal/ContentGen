import { useState } from 'react';
import { C } from '../constants/theme';
import { BtnPrimary } from '../components/Buttons';
import { Spinner } from '../components/Primitives';
import Icon from '../components/Icon';

export default function LoginPage({ setPage, setUser }) {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  function handleSubmit() {
    if (!email || !password || (mode === "signup" && !name)) {
      setErr("Please fill in all fields."); return;
    }
    if (!email.includes("@")) { setErr("Enter a valid email address."); return; }
    setErr(""); setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setUser(mode === "signup" ? name.split(" ")[0] : email.split("@")[0]);
      setPage("app");
    }, 900);
  }

  const labelStyle = {
    fontSize: 11, fontWeight: 700, letterSpacing: "0.08em",
    textTransform: "uppercase", color: C.gray600, marginBottom: 7, display: "block",
  };
  const inputStyle = {
    width: "100%", fontSize: 14, color: C.black, background: C.gray50,
    border: `1px solid ${C.gray200}`, borderRadius: 8, padding: "10px 14px",
    transition: "border-color 0.15s",
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: `linear-gradient(135deg, ${C.greenLight} 0%, #fff 60%)`,
      display: "flex", alignItems: "center", justifyContent: "center", padding: 24,
    }}>
      <div style={{ width: "100%", maxWidth: 420 }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: `linear-gradient(135deg, ${C.greenMid}, ${C.greenDark})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name="sparkle" size={16} color="#fff" />
            </div>
            <div style={{ fontSize: 18, fontWeight: 700, color: C.black, fontFamily: "'DM Serif Display', serif" }}>ContentGen Pro</div>
          </div>
          <h1 style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.4px", marginBottom: 6, color: C.black }}>
            {mode === "login" ? "Welcome back" : "Create your account"}
          </h1>
          <p style={{ fontSize: 14, color: C.gray600 }}>
            {mode === "login" ? "Sign in to continue." : "Free plan — no credit card required."}
          </p>
        </div>

        {/* Form card */}
        <div style={{ background: C.white, border: `1px solid ${C.gray100}`, borderRadius: 16, padding: "28px", boxShadow: "0 12px 40px rgba(26,138,92,0.1)" }}>
          {mode === "signup" && (
            <div style={{ marginBottom: 14 }}>
              <label style={labelStyle}>Full name</label>
              <input style={inputStyle} placeholder="Jane Smith" value={name} onChange={e => setName(e.target.value)} />
            </div>
          )}
          <div style={{ marginBottom: 14 }}>
            <label style={labelStyle}>Email address</label>
            <input style={inputStyle} type="email" placeholder="jane@company.com" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div style={{ marginBottom: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
              <label style={{ ...labelStyle, marginBottom: 0 }}>Password</label>
              {mode === "login" && <span style={{ fontSize: 12, color: C.green, cursor: "pointer", fontWeight: 500 }}>Forgot?</span>}
            </div>
            <input
              style={inputStyle}
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSubmit()}
            />
          </div>

          {err && <div style={{ fontSize: 13, color: C.red, marginBottom: 14 }}>{err}</div>}

          <BtnPrimary
            style={{ width: "100%", padding: "13px", fontSize: 15, borderRadius: 9, opacity: loading ? 0.8 : 1 }}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading && <Spinner />}
            {loading ? "Please wait…" : mode === "login" ? "Sign in" : "Create account"}
          </BtnPrimary>

          <p style={{ textAlign: "center", fontSize: 13, color: C.gray600, marginTop: 18 }}>
            {mode === "login" ? "Don't have an account? " : "Already have an account? "}
            <span
              style={{ color: C.green, fontWeight: 600, cursor: "pointer" }}
              onClick={() => { setMode(mode === "login" ? "signup" : "login"); setErr(""); }}
            >
              {mode === "login" ? "Sign up free" : "Sign in"}
            </span>
          </p>
        </div>

        <p style={{ textAlign: "center", marginTop: 18, fontSize: 13 }}>
          <span style={{ cursor: "pointer", color: C.green, fontWeight: 600 }} onClick={() => setPage("landing")}>
            ← Back to home
          </span>
        </p>
      </div>
    </div>
  );
}
