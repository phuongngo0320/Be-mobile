const Sentry = require("@sentry/node");
const { nodeProfilingIntegration } = require("@sentry/profiling-node");
Sentry.init({
    dsn: "https://548a41319a1bf9f16d9970f2646597b5@o4507197215801344.ingest.us.sentry.io/4507352318738432",
    integrations: [
        nodeProfilingIntegration(),
    ],
    tracesSampleRate: 1.0,
    profilesSampleRate: 1.0,
});
//# sourceMappingURL=instrument.js.map