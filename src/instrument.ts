const Sentry = require("@sentry/node");
const { nodeProfilingIntegration } = require("@sentry/profiling-node");

// Ensure to call this before requiring any other modules!
Sentry.init({
  dsn: "https://548a41319a1bf9f16d9970f2646597b5@o4507197215801344.ingest.us.sentry.io/4507352318738432",
  integrations: [
    // Add our Profiling integration
    nodeProfilingIntegration(),
  ],

  // Add Performance Monitoring by setting tracesSampleRate
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // Set sampling rate for profiling
  // This is relative to tracesSampleRate
  profilesSampleRate: 1.0,
});
