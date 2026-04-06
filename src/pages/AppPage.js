import { useState } from 'react';
import { C } from '../constants/theme';
import { Badge } from '../components/Primitives';
import { BtnPrimary } from '../components/Buttons';
import Sidebar from '../components/Sidebar';
import Toast from '../components/Toast';
import Icon from '../components/Icon';
import DashboardPage from './DashboardPage';
import GeneratePage from './GeneratePage';
import HistoryPage from './HistoryPage';

export default function AppPage({ user, setUser, setPage }) {
  const [tab, setTab] = useState("generate");
  const [history, setHistory] = useState([]);
  const [toast, setToast] = useState({ show: false, msg: "" });

  // Shared state to allow history → generate prefill
  const [sharedPrompt, setSharedPrompt] = useState("");
  const [sharedTemplate, setSharedTemplate] = useState("Blog");
  const [sharedTone, setSharedTone] = useState("Professional");

  function showToast(msg) {
    setToast({ show: true, msg });
    setTimeout(() => setToast({ show: false, msg: "" }), 2500);
  }

  const tabLabel = tab === "dashboard" ? "Dashboard" : tab === "generate" ? "Generator" : "Content History";

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: C.bg, fontFamily: "'DM Sans', sans-serif" }}>
      <Sidebar tab={tab} setTab={setTab} history={history} user={user} setUser={setUser} setPage={setPage} />

      <div style={{ flex: 1, overflow: "auto" }}>
        {/* Top bar */}
        <div style={{
          background: C.white, borderBottom: `1px solid ${C.gray100}`,
          padding: "0 32px", height: 60,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          position: "sticky", top: 0, zIndex: 10,
          boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
        }}>
          <div style={{ fontSize: 14, color: C.gray600 }}>
            <span style={{ color: C.green, fontWeight: 600 }}>ContentGen Pro</span>
            <span style={{ color: C.gray400 }}> / </span>
            <span style={{ fontWeight: 500, color: C.gray800 }}>{tabLabel}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Badge color={C.green} bg={C.greenLight}>{history.length} pieces</Badge>
            <BtnPrimary small onClick={() => setTab("generate")}>
              <Icon name="sparkle" size={13} color="#fff" /> New Content
            </BtnPrimary>
          </div>
        </div>

        {/* Main content */}
        <div style={{ padding: "32px 36px", maxWidth: 960, margin: "0 auto" }}>
          {tab === "dashboard" && (
            <DashboardPage history={history} setTab={setTab} />
          )}
          {tab === "generate" && (
            <GeneratePage
              history={history}
              setHistory={setHistory}
              setTab={setTab}
              showToast={showToast}
              initialPrompt={sharedPrompt}
              initialTemplate={sharedTemplate}
              initialTone={sharedTone}
            />
          )}
          {tab === "history" && (
            <HistoryPage
              history={history}
              setHistory={setHistory}
              setPrompt={setSharedPrompt}
              setTemplate={setSharedTemplate}
              setTone={setSharedTone}
              setTab={setTab}
              showToast={showToast}
            />
          )}
        </div>
      </div>

      <Toast msg={toast.msg} show={toast.show} />
    </div>
  );
}
