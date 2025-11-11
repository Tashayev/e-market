export const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f9fafb",
  },
  card: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "0.75rem",
    padding: "2rem",
    borderRadius: "1rem",
    backgroundColor: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    width: "320px",
  },
  avatar: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover" as const,
    border: "3px solid #e5e7eb",
  },
  name: {
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "#111827",
  },
  role: {
    fontSize: "1rem",
    color: "#6b7280",
    marginBottom: "1rem",
  },
  infoBlock: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "0.25rem",
    marginBottom: "1.5rem",
  },
  label: {
    fontWeight: 500,
    color: "#374151",
  },
  
  button: {
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "0.5rem",
    padding: "0.5rem 1rem",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  },
};
