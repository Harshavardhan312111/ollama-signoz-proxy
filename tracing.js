const { NodeSDK } = require("@opentelemetry/sdk-node");
const { getNodeAutoInstrumentations } = require("@opentelemetry/auto-instrumentations-node");
const { OTLPTraceExporter } = require("@opentelemetry/exporter-trace-otlp-http");

const sdk = new NodeSDK({
  serviceName: "ollama-signoz-proxy",
  traceExporter: new OTLPTraceExporter({
    url: "http://192.168.1.8:8504/v1/traces"
  }),
  instrumentations: [getNodeAutoInstrumentations()]
});

sdk.start();
console.log("OpenTelemetry started");
