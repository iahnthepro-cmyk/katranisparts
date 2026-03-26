export interface EmailPayload {
  to: string;
  subject: string;
  body: string;
}

/**
 * Mock email sender — logs to console instead of sending a real email.
 * Replace this with a real provider (e.g. Nodemailer, Resend, SendGrid) for production.
 */
export async function sendEmail(payload: EmailPayload): Promise<{ success: boolean }> {
  console.log("--- [MOCK EMAIL] ---");
  console.log(`To: ${payload.to}`);
  console.log(`Subject: ${payload.subject}`);
  console.log(`Body:\n${payload.body}`);
  console.log("--- [END MOCK EMAIL] ---");
  return { success: true };
}
