import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ThankYouEmailProps {
  name: string;
  message: string;
}

export const ThankYouEmail = ({ name, message }: ThankYouEmailProps) => (
  <Html>
    <Head />
    <Preview>Mission Received: I'll be in touch soon! 🚀</Preview>

    <Body style={main}>
      <Container style={container}>
        {/* Content Section */}
        <Section style={content}>
          <Text style={greeting}>Hello {name},</Text>

          <Text style={paragraph}>
            Signal secured. I've received your mission details and my system has
            logged your brief for analysis.
          </Text>

          <Text style={paragraph}>
            I'm currently reviewing your parameters and will establish an uplink
            with a detailed response soon.
          </Text>

          {/* Social Uplink Section */}
          <Section style={socialSection}>
            <Text style={messageLabel}>ESTABLISH DIRECT UPLINK</Text>
            <Section style={socialGrid}>
              <Button
                href="https://linkedin.com/in/krish-sangani"
                style={socialButton}
              >
                LinkedIn
              </Button>
              <Button
                href="https://github.com/krishpatel09"
                style={socialButton}
              >
                GitHub
              </Button>
            </Section>
            <Text style={socialHint}>
              Connect for real-time updates and more of my work.
            </Text>
          </Section>

          {/* Action Button */}
          <Section style={ctaSection}>
            <Button href="https://krishai.me" style={button}>
              Visit my Portfolio
            </Button>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            &copy; {new Date().getFullYear()} Krish Sangani &bull; Full Stack
            Developer
            <br />
            This is an automated confirmation of message receipt.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ThankYouEmail;

const main = {
  backgroundColor: "#0E0D0C",
  padding: "40px 0",
  fontFamily:
    'Outfit, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

const container = {
  margin: "0 auto",
  width: "600px",
  backgroundColor: "#121212",
  borderRadius: "24px",
  border: "1px solid #262626",
  overflow: "hidden",
};

const topSection = {
  padding: "40px 40px 20px 40px",
  textAlign: "center" as const,
  background:
    "radial-gradient(100% 100% at 50% 0%, rgba(255, 51, 51, 0.15), transparent 100%)",
};

const logo = {
  fontSize: "14px",
  fontWeight: "900",
  letterSpacing: "4px",
  color: "#ff3333",
  margin: "0",
  textTransform: "uppercase" as const,
};

const content = {
  padding: "30px 40px 50px 40px",
};

const greeting = {
  fontSize: "28px",
  fontWeight: "800",
  color: "#ffffff",
  lineHeight: "1.2",
  marginBottom: "24px",
  letterSpacing: "-0.5px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#a1a1aa",
  margin: "18px 0",
};

const highlight = {
  color: "#ff3333",
  fontWeight: "700",
};

const socialSection = {
  margin: "32px 0",
  textAlign: "center" as const,
};

const socialGrid = {
  textAlign: "center" as const,
  marginTop: "16px",
};

const socialButton = {
  backgroundColor: "#1a1a1a",
  color: "#ffffff",
  border: "1px solid #333333",
  padding: "10px 24px",
  borderRadius: "12px",
  fontSize: "13px",
  fontWeight: "700",
  textDecoration: "none",
  margin: "0 6px",
};

const socialHint = {
  fontSize: "13px",
  color: "#52525b",
  marginTop: "16px",
};

const messageBox = {
  backgroundColor: "#1a1a1a",
  padding: "24px",
  borderRadius: "16px",
  margin: "32px 0",
  border: "1px solid #333333",
};

const messageLabel = {
  fontSize: "10px",
  fontWeight: "800",
  color: "#ff3333",
  marginBottom: "12px",
  textTransform: "uppercase" as const,
  letterSpacing: "1.5px",
};

const messageContainer = {
  borderLeft: "2px solid #ff3333",
  paddingLeft: "16px",
};

const messageText = {
  fontSize: "15px",
  color: "#e2e2e2",
  lineHeight: "24px",
  fontStyle: "italic",
  margin: "0",
};

const ctaSection = {
  textAlign: "center" as const,
  marginTop: "40px",
  marginBottom: "20px",
};

const button = {
  backgroundColor: "#ff3333",
  color: "#ffffff",
  padding: "18px 36px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: "800",
  fontSize: "15px",
  display: "inline-block",
  boxShadow: "0 10px 20px -5px rgba(255, 51, 51, 0.3)",
};

const hr = {
  borderColor: "#262626",
  margin: "40px 0 30px 0",
};

const footer = {
  fontSize: "12px",
  color: "#52525b",
  textAlign: "center" as const,
  lineHeight: "20px",
};
