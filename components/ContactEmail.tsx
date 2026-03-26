import * as React from "react";

export function ContactEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  return (
    <div style={{ fontFamily: "Arial, Helvetica, sans-serif", lineHeight: 1.5 }}>
      <h2 style={{ margin: "0 0 12px" }}>New contact request</h2>

      <div style={{ margin: "0 0 16px" }}>
        <div>
          <strong>Name:</strong> {name}
        </div>
        <div>
          <strong>Email:</strong> {email}
        </div>
      </div>

      <div>
        <div style={{ margin: "0 0 8px" }}>
          <strong>Message:</strong>
        </div>
        <pre
          style={{
            whiteSpace: "pre-wrap",
            margin: 0,
            padding: "12px",
            background: "#f6f7f9",
            borderRadius: "8px",
            border: "1px solid #e5e7eb",
          }}
        >
          {message}
        </pre>
      </div>
    </div>
  );
}

