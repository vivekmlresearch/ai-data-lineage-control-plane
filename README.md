# AI Data Lineage & Governance Control Plane

An end-to-end data governance and release control system for LLM/AI systems. Demonstrates responsible AI practices through data ingestion, quality assurance, safety evaluation, lineage tracking, and approval gates.

**Inspired by:** Google's LLM Launch & Data Governance Framework | **Reference Implementation:** Open-source responsible AI

## 🎯 Key Features

### 📊 Data Ingestion
- **Multi-source support**: Human-annotated, synthetic, licensed, public datasets
- **Schema validation**: Automatic format and structure validation
- **Versioning**: Track dataset versions with immutable references
- **Metadata**: Capture provenance, licensing, and source information

### ✅ Quality & Compliance
- **Completeness checks**: Detect missing values and incomplete records
- **Consistency validation**: Cross-field and temporal consistency
- **Schema enforcement**: Type checking and constraint validation
- **Statistical quality**: Outlier detection and distribution analysis

### 🔒 Safety & PII Detection
- **PII detection**: Identify emails, SSNs, credit cards, phone numbers, names
- **Sensitive content**: Detect potential harmful patterns
- **Data masking**: Automatic redaction and anonymization
- **Compliance reporting**: GDPR, CCPA compliance checks

### 📈 Lineage & Audit
- **Data lineage**: Track dataset → transformation → evaluation → model
- **Tamper-evident logs**: Cryptographically signed audit trails
- **Transformation tracking**: Capture all data mutations
- **Compliance audit**: Full traceability for regulatory requirements

### 🛡️ Approval Gates & Governance
- **Risk assessment**: Automated safety and quality scoring
- **Approval workflows**: Multi-level approval gates
- **Blocking releases**: Prevent unsafe or non-compliant data from reaching production
- **Policy enforcement**: Custom governance rules and constraints

### 🤖 LLM Evaluation
- **Public models**: Gemma, Llama, Mistral evaluation support
- **Benchmark tests**: MMLU, HellaSwag, TruthfulQA style evaluations
- **Safety scoring**: Toxicity, bias, harmfulness assessment
- **Performance metrics**: Accuracy, F1, perplexity tracking

### 📱 Interactive Dashboard
- Dataset quality metrics and health status
- Data lineage visualization
- PII/safety detection results
- Evaluation metrics and model performance
- Approval status and governance actions
- Release readiness determination

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     Data Sources                                │
│  Human | Synthetic | Licensed | Public                         │
└────────────────────────┬────────────────────────────────────────┘
                         │
┌─────────────────────────▼────────────────────────────────────────┐
│                  Data Ingestion Layer                            │
│  Schema Validation | Versioning | Metadata Extraction           │
└────────────────────────┬────────────────────────────────────────┘
                         │
┌─────────────────────────▼────────────────────────────────────────┐
│              Quality & Compliance Pipeline                       │
│  Completeness | Consistency | Schema | Statistical Quality      │
└────────────────────────┬────────────────────────────────────────┘
                         │
┌─────────────────────────▼────────────────────────────────────────┐
│           Safety & PII Detection Layer                           │
│  PII Detection | Sensitive Content | Masking | Compliance       │
└────────────────────────┬────────────────────────────────────────┘
                         │
┌─────────────────────────▼────────────────────────────────────────┐
│          Lineage Tracking & Audit Logs                           │
│  Immutable Ledger | Tamper Detection | Compliance Reports       │
└────────────────────────┬────────────────────────────────────────┘
                         │
┌─────────────────────────▼────────────────────────────────────────┐
│         LLM Evaluation & Benchmarking                            │
│  Gemma | Llama | Mistral | Safety Scoring | Performance         │
└────────────────────────┬────────────────────────────────────────┘
                         │
┌─────────────────────────▼────────────────────────────────────────┐
│         Approval Gates & Governance                              │
│  Risk Assessment | Multi-Level Approvals | Release Blocking     │
└────────────────────────┬────────────────────────────────────────┘
                         │
┌─────────────────────────▼────────────────────────────────────────┐
│              Release Control Plane                               │
│  Release Readiness | Compliance | Deployment                    │
└─────────────────────────────────────────────────────────────────┘
```

## 📁 Project Structure

```
ai-data-lineage-control-plane/
├── README.md
├── requirements.txt
├── config/
│   ├── governance_policies.yaml
│   ├── pii_patterns.yaml
│   └── safety_rules.yaml
├── src/
│   ├── __init__.py
│   ├── ingestion/
│   │   ├── __init__.py
│   │   ├── data_loader.py
│   │   ├── schema_validator.py
│   │   └── versioning.py
│   ├── quality/
│   │   ├── __init__.py
│   │   ├── completeness.py
│   │   ├── consistency.py
│   │   ├── schema_checks.py
│   │   └── statistical_quality.py
│   ├── safety/
│   │   ├── __init__.py
│   │   ├── pii_detector.py
│   │   ├── sensitive_content.py
│   │   ├── masking.py
│   │   └── compliance_checks.py
│   ├── lineage/
│   │   ├── __init__.py
│   │   ├── audit_log.py
│   │   ├── lineage_tracker.py
│   │   └── tamper_detection.py
│   ├── evaluation/
│   │   ├── __init__.py
│   │   ├── model_evaluator.py
│   │   ├── benchmarks.py
│   │   └── safety_scorer.py
│   ├── governance/
│   │   ├── __init__.py
│   │   ├── approval_gates.py
│   │   ├── risk_assessment.py
│   │   └── policy_engine.py
│   └── dashboard/
│       ├── __init__.py
│       ├── app.py
│       ├── pages/
│       │   ├── overview.py
│       │   ├── lineage.py
│       │   ├── quality.py
│       │   ├── safety.py
│       │   ├── evaluations.py
│       │   └── approvals.py
│       └── components/
│           ├── metrics.py
│           ├── charts.py
│           └── tables.py
├── examples/
│   ├── demo_data/
│   │   ├── human_data.csv
│   │   ├── synthetic_data.csv
│   │   └── public_dataset.csv
│   ├── run_pipeline.py
│   ├── example_governance_policy.yaml
│   └── integration_test.py
├── tests/
│   ├── __init__.py
│   ├── test_ingestion.py
│   ├── test_quality.py
│   ├── test_safety.py
│   ├── test_lineage.py
│   ├── test_governance.py
│   └── test_evaluation.py
├── docs/
│   ├── ARCHITECTURE.md
│   ├── GOVERNANCE_GUIDE.md
│   ├── SAFETY_FRAMEWORK.md
│   ├── API_REFERENCE.md
│   └── QUICKSTART.md
├── Dockerfile
├── docker-compose.yml
└── .github/
    └── workflows/
        ├── tests.yml
        └── quality_checks.yml
```

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/vivekmlresearch/ai-data-lineage-control-plane.git
cd ai-data-lineage-control-plane

# Install dependencies
pip install -r requirements.txt

# Run the dashboard
python -m src.dashboard.app
```

### Example Usage

```python
from src.ingestion.data_loader import DataLoader
from src.quality.completeness import CompletenessChecker
from src.safety.pii_detector import PIIDetector
from src.lineage.lineage_tracker import LineageTracker
from src.governance.approval_gates import ApprovalGate

# Load data
loader = DataLoader()
dataset = loader.load_csv("data.csv", source="human_annotated")

# Check quality
quality_checker = CompletenessChecker()
quality_report = quality_checker.check(dataset)

# Detect PII
pii_detector = PIIDetector()
pii_findings = pii_detector.scan(dataset)

# Track lineage
tracker = LineageTracker()
tracker.log_dataset_ingestion(dataset, source="human_annotated")

# Governance approval
approval_gate = ApprovalGate()
approved = approval_gate.evaluate(
    dataset=dataset,
    quality_report=quality_report,
    pii_findings=pii_findings,
    policy="production_release"
)
```

## 📊 Dashboard Features

- **Dataset Overview**: Quality metrics, row counts, schema
- **Lineage View**: Data flow visualization with audit trail
- **Quality Report**: Completeness, consistency, schema validation
- **Safety Findings**: PII detections, sensitive content, masking status
- **Model Evaluations**: Performance metrics on Gemma/Llama/Mistral
- **Approval Status**: Gate decisions, blockers, compliance status
- **Release Readiness**: Overall readiness score and blocking issues

## 🔐 Governance & Compliance

- **Policy-driven**: YAML-based governance rules
- **Tamper-evident**: Cryptographic signing of audit logs
- **Approval workflows**: Customizable multi-level approvals
- **Blocking gates**: Prevent non-compliant data from reaching production
- **Audit trails**: Complete traceability for compliance

## 🤖 Supported Models

- **Gemma**: Google's lightweight model
- **Llama**: Meta's open LLM family
- **Mistral**: Efficient open models

## 📝 Documentation

- [Architecture Guide](docs/ARCHITECTURE.md)
- [Governance Framework](docs/GOVERNANCE_GUIDE.md)
- [Safety & PII Detection](docs/SAFETY_FRAMEWORK.md)
- [API Reference](docs/API_REFERENCE.md)
- [Quick Start Guide](docs/QUICKSTART.md)

## 📜 License

Apache License 2.0 - See LICENSE file

## 🤝 Contributing

Contributions welcome! Please see CONTRIBUTING.md for guidelines.

## 🎓 Inspiration

This project is inspired by Google's LLM Launch Framework and demonstrates responsible AI practices for data governance, lineage tracking, safety evaluation, and release control.

---

**Built as a portfolio project demonstrating end-to-end responsible AI practices.**
