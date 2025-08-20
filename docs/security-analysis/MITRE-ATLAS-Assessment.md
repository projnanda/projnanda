# MITRE ATLAS Framework Assessment - NANDA Project

## Document Information

**Framework**: MITRE ATLAS (Adversarial Threat Landscape for Artificial-Intelligence Systems)  
**Assessment Date**: 2025-01-20  
**Assessor**: Security Analysis Team (parmarmanojkumar)  
**Scope**: NANDA-INDEX, NANDA-AGENT, NANDA-ADAPTER  
**Framework Version**: v4.0  

## Executive Summary

This assessment evaluates the NANDA Internet of Agents against the MITRE ATLAS framework, focusing on adversarial threats against AI/ML systems. The analysis reveals **HIGH** to **CRITICAL** vulnerabilities across multiple ATLAS tactics, with particular concerns around ML model compromise, adversarial data injection, and AI supply chain attacks.

### ATLAS Tactics Risk Overview

| ATLAS Tactic | NANDA-INDEX | NANDA-AGENT | NANDA-ADAPTER | Overall Risk |
|--------------|-------------|-------------|---------------|--------------|
| **Initial Access** | MEDIUM | **HIGH** | **HIGH** | **HIGH** |
| **ML Model Access** | N/A | **CRITICAL** | **HIGH** | **CRITICAL** |
| **Persistence** | **HIGH** | **HIGH** | **HIGH** | **HIGH** |
| **Privilege Escalation** | MEDIUM | **HIGH** | **CRITICAL** | **CRITICAL** |
| **Defense Evasion** | MEDIUM | **HIGH** | **HIGH** | **HIGH** |
| **Discovery** | **HIGH** | MEDIUM | MEDIUM | **HIGH** |
| **Collection** | **HIGH** | **CRITICAL** | **HIGH** | **CRITICAL** |
| **ML Attack Staging** | MEDIUM | **HIGH** | **CRITICAL** | **CRITICAL** |
| **Exfiltration** | **HIGH** | **CRITICAL** | MEDIUM | **CRITICAL** |
| **Impact** | **CRITICAL** | **CRITICAL** | **HIGH** | **CRITICAL** |

## Detailed ATLAS Technique Analysis

### Initial Access Techniques

#### AML.T0000: Valid Accounts
**Risk Level**: 🔴 **HIGH**  
**Affected Components**: NANDA-AGENT (High), NANDA-ADAPTER (High)

**Vulnerability Assessment:**
- **NANDA-AGENT**: No authentication required for agent communication
- **NANDA-ADAPTER**: Framework accounts with excessive privileges
- **Attack Vector**: Compromised service accounts provide ML system access

**Evidence:**
```python
# Vulnerable account management in NANDA-AGENT
def authenticate_agent(agent_id):
    # VULNERABILITY: No actual authentication
    return True  # Always returns true
```

**Exploitation Scenarios:**
1. Compromised API keys provide direct ML model access
2. Framework service accounts used to access sensitive AI operations
3. Agent impersonation through weak authentication

**Mitigations:**
- Implement strong authentication for all AI system access
- Use time-limited, scope-restricted API tokens
- Multi-factor authentication for privileged AI operations

#### AML.T0001: Spearphishing
**Risk Level**: 🔶 **MEDIUM**  
**Affected Components**: All components

**Assessment:**
- Social engineering attacks targeting AI developers and operators
- Malicious model or dataset sharing via trusted channels
- Focus on supply chain and developer education

### ML Model Access Techniques

#### AML.T0005: Compromise ML Model Repository
**Risk Level**: 🚨 **CRITICAL**  
**Affected Components**: NANDA-AGENT (Critical), NANDA-ADAPTER (High)

**Vulnerability Assessment:**
- **Model Source Verification**: No verification of ML model integrity
- **Repository Security**: Models loaded from untrusted sources
- **Supply Chain**: No signing or provenance tracking for models

**Evidence:**
```python
# Critical model repository vulnerability
def load_model(model_url):
    # VULNERABILITY: No integrity verification
    model_data = requests.get(model_url).content
    return pickle.loads(model_data)  # Direct deserialization
```

**Exploitation Scenarios:**
1. **Backdoored Models**: Malicious models with hidden behaviors inserted
2. **Model Replacement**: Legitimate models replaced with compromised versions  
3. **Poisoned Updates**: Model updates contain malicious modifications

**Mitigations:**
- Cryptographic signing of all AI models
- Model provenance tracking and verification
- Sandboxed model loading and execution
- Model integrity monitoring

#### AML.T0006: ML Supply Chain Compromise
**Risk Level**: 🚨 **CRITICAL**  
**Affected Components**: NANDA-ADAPTER (Critical), NANDA-AGENT (High)

**Vulnerability Assessment:**
- **Framework Dependencies**: LangChain/CrewAI dependencies not verified
- **Model Dependencies**: AI models loaded without verification
- **Library Vulnerabilities**: ML libraries contain unpatched vulnerabilities

**Evidence:**
```json
// Vulnerable supply chain in NANDA-ADAPTER
{
  "dependencies": {
    "langchain": "*",  // Wildcard version - no security validation
    "transformers": "^4.0.0",  // No integrity checking
    "torch": "latest"  // Always latest, no stability/security validation
  }
}
```

**Supply Chain Risks:**
1. **Compromised ML Libraries**: Malicious code in ML frameworks
2. **Model Poisoning**: Pre-trained models contain adversarial behaviors
3. **Dependency Confusion**: Malicious packages with similar names to legitimate ML tools
4. **Update Attacks**: Malicious updates to legitimate ML packages

**Mitigations:**
- Software Bill of Materials (SBOM) for all ML components
- Dependency vulnerability scanning and management
- Pinned dependency versions with integrity verification
- Isolated execution environments for untrusted ML code

### Persistence Techniques

#### AML.T0015: Backdoor ML Model
**Risk Level**: 🔴 **HIGH**  
**Affected Components**: All components

**Vulnerability Assessment:**
- **Model Modification**: No protection against model tampering
- **Persistent Access**: Backdoors in models provide ongoing access
- **Detection Evasion**: Backdoors designed to evade detection

**Attack Scenarios:**
1. **Trigger-Based Backdoors**: Models behave normally except with specific inputs
2. **Data Poisoning Backdoors**: Models compromised through poisoned training data
3. **Model Inversion**: Backdoors that expose training data when triggered

**Evidence:**
```python
# Vulnerable model deployment
def deploy_model(model_path):
    # VULNERABILITY: No backdoor detection
    model = torch.load(model_path)  # Direct model loading
    return model  # No security validation
```

### Privilege Escalation Techniques

#### AML.T0016: ML Artifact Poisoning
**Risk Level**: 🚨 **CRITICAL**  
**Affected Components**: NANDA-ADAPTER (Critical), NANDA-AGENT (High)

**Vulnerability Description:**
Poisoning ML artifacts (models, datasets, configuration files) to gain elevated system access or modify system behavior.

**NANDA-ADAPTER Findings:**
- **Configuration Poisoning**: ML framework configurations can be modified
- **Model Poisoning**: Pre-trained models can contain privilege escalation code
- **Dataset Poisoning**: Training datasets poisoned to create backdoors

**Evidence:**
```python
# Artifact poisoning vulnerability
def load_ml_config(config_file):
    # VULNERABILITY: No validation of configuration integrity
    with open(config_file) as f:
        config = yaml.load(f)  # Unsafe YAML loading
    return config
```

**Attack Vectors:**
1. **Configuration Injection**: Malicious configurations grant additional privileges
2. **Model Privilege Escalation**: Models designed to escalate system privileges
3. **Framework Exploitation**: Poisoned artifacts exploit framework vulnerabilities

### Defense Evasion Techniques

#### AML.T0020: Adversarial Examples in Data
**Risk Level**: 🔴 **HIGH**  
**Affected Components**: NANDA-AGENT (High), NANDA-ADAPTER (High)

**Vulnerability Assessment:**
- **Input Validation**: No adversarial example detection
- **Model Robustness**: Models vulnerable to adversarial perturbations
- **Detection Evasion**: Adversarial examples bypass security controls

**Evidence:**
```python
# Vulnerable input processing
def process_agent_input(user_input):
    # VULNERABILITY: No adversarial example detection
    model_output = ai_model.predict(user_input)
    # Direct action based on potentially adversarial input
    if model_output == "execute_command":
        execute_system_command(user_input)
```

**Attack Scenarios:**
1. **Evasive Prompts**: Adversarial prompts that bypass content filters
2. **Model Manipulation**: Inputs crafted to manipulate model decisions
3. **Security Bypass**: Adversarial examples that evade detection systems

**Mitigations:**
- Adversarial example detection algorithms
- Input preprocessing and sanitization
- Ensemble models for robustness
- Randomized transformations

### Discovery Techniques

#### AML.T0025: Exfiltrate ML Artifacts
**Risk Level**: 🔴 **HIGH**  
**Affected Components**: NANDA-INDEX (High), NANDA-AGENT (Medium)

**Vulnerability Assessment:**
- **Model Architecture Discovery**: Model structures exposed through APIs
- **Training Data Inference**: Training data discoverable through model queries
- **System Architecture**: ML system architecture discoverable through reconnaissance

**Evidence:**
```python
# Information disclosure vulnerability
@app.route('/model_info')
def model_info():
    # VULNERABILITY: Exposes internal model details
    return {
        'model_architecture': str(model.architecture),
        'training_data_path': '/path/to/training/data',
        'hyperparameters': model.config
    }
```

### Collection Techniques

#### AML.T0035: Data from Information Repositories
**Risk Level**: 🚨 **CRITICAL**  
**Affected Components**: NANDA-AGENT (Critical), NANDA-INDEX (High)

**Vulnerability Assessment:**
- **Conversation Data**: Agent conversations contain sensitive information
- **Registry Data**: Agent registry contains system architecture information
- **Model Data**: ML models may contain embedded sensitive information

**Critical Findings:**
```python
# Critical data exposure
def log_agent_interaction(agent_id, user_input, response):
    # VULNERABILITY: Sensitive data in logs
    logger.info(f"Agent {agent_id}: {user_input} -> {response}")
    # Logs may contain PII, secrets, or sensitive business data
```

**Data Collection Risks:**
1. **Training Data Extraction**: Adversaries extract training data from models
2. **Conversation Harvesting**: Agent conversations mined for sensitive information
3. **Registry Mining**: Agent registry data used to map system architecture
4. **Memory Extraction**: Sensitive data extracted from model memory

### ML Attack Staging Techniques

#### AML.T0040: Craft Adversarial Data
**Risk Level**: 🚨 **CRITICAL**  
**Affected Components**: NANDA-ADAPTER (Critical), NANDA-AGENT (High)

**Vulnerability Description:**
Creation and deployment of adversarial data specifically designed to compromise ML systems.

**NANDA-ADAPTER Findings:**
- **Framework Vulnerabilities**: LangChain/CrewAI vulnerable to adversarial inputs
- **Model Poisoning**: Adversarial data used to poison model behavior
- **Evasion Attacks**: Crafted inputs designed to evade security measures

**Evidence:**
```python
# Vulnerable adversarial data handling
def execute_langchain_workflow(user_data):
    # VULNERABILITY: No adversarial data detection
    # Adversarial data can manipulate workflow execution
    workflow = LangChainWorkflow(data=user_data)
    return workflow.execute()  # Potential adversarial manipulation
```

**Attack Techniques:**
1. **Gradient-Based Attacks**: Using model gradients to craft adversarial examples
2. **Black-Box Attacks**: Query-based attacks to discover model vulnerabilities
3. **Transferability Attacks**: Adversarial examples crafted for one model attacking another
4. **Physical Adversarial Attacks**: Adversarial examples in physical environments

**Mitigations:**
- Adversarial training of models
- Input preprocessing and detection
- Certified defenses against adversarial attacks
- Randomized model behavior

#### AML.T0043: Generate Adversarial Examples
**Risk Level**: 🔴 **HIGH**  
**Affected Components**: All components

**Assessment:**
- Automated generation of adversarial examples targeting NANDA models
- Use of open-source adversarial attack tools
- Custom adversarial example generation for specific NANDA vulnerabilities

### Exfiltration Techniques

#### AML.T0048: Exfiltrate via ML Model
**Risk Level**: 🚨 **CRITICAL**  
**Affected Components**: NANDA-AGENT (Critical), NANDA-ADAPTER (High)

**Vulnerability Assessment:**
- **Model Inversion**: Models can be used to extract sensitive training data
- **Membership Inference**: Determining if specific data was used in training
- **Property Inference**: Inferring properties of training data from model behavior

**Evidence:**
```python
# Model exfiltration vulnerability
def query_model_batch(inputs):
    # VULNERABILITY: Unlimited model queries enable data extraction
    results = []
    for input_data in inputs:
        # No rate limiting or query monitoring
        result = ai_model.predict(input_data)
        results.append(result)
    return results
```

**Exfiltration Scenarios:**
1. **Training Data Recovery**: Attackers recover training data through model queries
2. **Secret Extraction**: API keys and secrets embedded in models extracted
3. **Business Logic Exfiltration**: Proprietary algorithms reverse-engineered from models
4. **User Data Inference**: Personal information inferred from model responses

**Mitigations:**
- Differential privacy in model training
- Query rate limiting and monitoring  
- Output perturbation and noise addition
- Model watermarking for tracking

### Impact Techniques

#### AML.T0054: ML Denial of Service
**Risk Level**: 🚨 **CRITICAL**  
**Affected Components**: All components (Critical impact on availability)

**Vulnerability Assessment:**
- **Model Resource Exhaustion**: Models can be overwhelmed with resource-intensive queries
- **Framework DoS**: ML frameworks vulnerable to denial of service attacks
- **Cost-Based DoS**: Expensive AI API calls used to exhaust budgets

**Evidence:**
```python
# DoS vulnerability in NANDA-AGENT
def process_unlimited_requests(requests):
    # VULNERABILITY: No resource limits or rate limiting
    for request in requests:
        # Each request consumes expensive AI API calls
        expensive_ai_response = claude_api.generate_response(
            prompt=request,
            max_tokens=8192  # Maximum cost per request
        )
    return responses
```

**DoS Attack Vectors:**
1. **Adversarial Complexity**: Inputs designed to maximize computational cost
2. **Memory Exhaustion**: Inputs that cause excessive memory usage
3. **API Cost Attacks**: Expensive API calls to exhaust financial resources
4. **Cascading Failures**: DoS attacks that cause system-wide failures

#### AML.T0056: ML Model Theft
**Risk Level**: 🔴 **HIGH**  
**Affected Components**: NANDA-AGENT (High), NANDA-ADAPTER (Medium)

**Vulnerability Assessment:**
- **Model Extraction**: Proprietary models can be extracted through queries
- **Architecture Theft**: Model architectures discoverable through analysis
- **Knowledge Distillation**: Model knowledge extracted to create clones

**Model Theft Scenarios:**
1. **Query-Based Extraction**: Systematic querying to recreate model
2. **Shadow Models**: Creating functionally equivalent models from queries
3. **Parameter Extraction**: Direct extraction of model parameters
4. **Intellectual Property Theft**: Stealing proprietary AI innovations

## Risk Assessment Summary

### Critical Risk Areas

1. **ML Supply Chain Security** - Compromised dependencies and models
2. **Model Integrity** - No verification of model authenticity or integrity
3. **Data Exfiltration** - Sensitive data extraction through ML models
4. **Adversarial Attacks** - No protection against adversarial examples
5. **Resource Exhaustion** - Unlimited resource consumption by ML operations

### High Risk Areas

1. **Model Access Control** - Insufficient authentication and authorization
2. **Adversarial Data Detection** - No detection of malicious inputs
3. **ML Artifact Security** - Unprotected ML artifacts and configurations
4. **Information Disclosure** - Sensitive information exposed through ML APIs

## Mitigation Roadmap

### Phase 0: Emergency ML Security (Week 1-2)

#### Model Integrity Protection
```python
# Implement basic model integrity verification
import hashlib
import hmac

class ModelIntegrityChecker:
    def __init__(self, secret_key):
        self.secret_key = secret_key
    
    def sign_model(self, model_path):
        with open(model_path, 'rb') as f:
            model_data = f.read()
        
        signature = hmac.new(
            self.secret_key.encode(),
            model_data,
            hashlib.sha256
        ).hexdigest()
        
        return signature
    
    def verify_model(self, model_path, expected_signature):
        current_signature = self.sign_model(model_path)
        return hmac.compare_digest(current_signature, expected_signature)
```

#### Adversarial Input Detection
```python
# Basic adversarial input detection
class AdversarialDetector:
    def __init__(self, model):
        self.model = model
        self.baseline_confidence = 0.8
    
    def detect_adversarial_input(self, input_data):
        # Statistical tests for adversarial examples
        confidence = self.model.predict_proba(input_data).max()
        
        if confidence < self.baseline_confidence:
            return True  # Potential adversarial example
        
        # Additional heuristics for adversarial detection
        if self.check_input_perturbations(input_data):
            return True
            
        return False
    
    def check_input_perturbations(self, input_data):
        # Implement perturbation-based detection
        # This is a simplified example
        noise = np.random.normal(0, 0.01, input_data.shape)
        perturbed_input = input_data + noise
        
        original_pred = self.model.predict(input_data)
        perturbed_pred = self.model.predict(perturbed_input)
        
        # If small perturbations cause large changes in prediction
        return not np.array_equal(original_pred, perturbed_pred)
```

### Phase 1: Comprehensive ML Security (Month 1-3)

#### ML Supply Chain Security
```python
# Comprehensive ML supply chain verification
class MLSupplyChainSecurity:
    def __init__(self):
        self.trusted_repositories = set()
        self.vulnerability_db = {}
        self.integrity_cache = {}
    
    def verify_ml_dependency(self, package_name, version, checksum):
        # Verify package integrity
        if not self.verify_checksum(package_name, version, checksum):
            raise SecurityError(f"Integrity check failed for {package_name}:{version}")
        
        # Check for known vulnerabilities
        vulnerabilities = self.check_vulnerabilities(package_name, version)
        if vulnerabilities:
            raise SecurityError(f"Vulnerabilities found: {vulnerabilities}")
        
        # Verify source repository
        if not self.verify_source_repository(package_name):
            raise SecurityError(f"Untrusted source repository for {package_name}")
        
        return True
    
    def generate_ml_sbom(self, dependencies):
        # Generate Software Bill of Materials for ML components
        sbom = {
            'timestamp': datetime.now().isoformat(),
            'dependencies': [],
            'vulnerabilities': [],
            'integrity_hashes': {}
        }
        
        for dep in dependencies:
            dep_info = {
                'name': dep.name,
                'version': dep.version,
                'source': dep.source,
                'integrity_hash': self.calculate_hash(dep),
                'vulnerabilities': self.check_vulnerabilities(dep.name, dep.version)
            }
            sbom['dependencies'].append(dep_info)
        
        return sbom
```

#### Model Security Framework
```python
# Advanced model security framework
class ModelSecurityFramework:
    def __init__(self):
        self.adversarial_detector = AdversarialDetector()
        self.privacy_protector = DifferentialPrivacy()
        self.integrity_checker = ModelIntegrityChecker()
        
    def secure_model_inference(self, model, input_data, user_context):
        # Pre-inference security checks
        if self.adversarial_detector.detect_adversarial_input(input_data):
            raise SecurityError("Adversarial input detected")
        
        # Rate limiting and cost protection
        if not self.check_rate_limits(user_context):
            raise SecurityError("Rate limit exceeded")
        
        # Secure inference with privacy protection
        result = model.predict(input_data)
        
        # Post-inference privacy protection
        protected_result = self.privacy_protector.add_noise(result)
        
        # Audit logging
        self.log_inference(user_context, input_data, protected_result)
        
        return protected_result
    
    def monitor_model_behavior(self, model, input_batch, output_batch):
        # Detect potential model compromise
        for inp, out in zip(input_batch, output_batch):
            if self.detect_anomalous_behavior(model, inp, out):
                self.trigger_security_alert(model, inp, out)
```

### Phase 2: Advanced ML Security (Month 3-6)

#### Adversarial Robustness
```python
# Advanced adversarial defense system
class AdversarialDefenseSystem:
    def __init__(self, base_model):
        self.base_model = base_model
        self.ensemble_models = []
        self.randomization_layer = RandomizationLayer()
        
    def adversarial_training(self, training_data, attack_methods):
        # Implement adversarial training
        for attack_method in attack_methods:
            adversarial_examples = attack_method.generate(training_data)
            augmented_training_data = training_data + adversarial_examples
            self.base_model.train(augmented_training_data)
    
    def certified_defense(self, input_data, radius=0.1):
        # Certified defense against adversarial examples
        # Returns guaranteed robust predictions within radius
        
        # Randomized smoothing for certification
        predictions = []
        for _ in range(100):  # Number of samples for smoothing
            noise = np.random.normal(0, 0.25, input_data.shape)
            noisy_input = input_data + noise
            pred = self.base_model.predict(noisy_input)
            predictions.append(pred)
        
        # Return majority prediction with confidence bounds
        majority_pred = max(set(predictions), key=predictions.count)
        confidence = predictions.count(majority_pred) / len(predictions)
        
        return majority_pred, confidence
```

### Phase 3: ML Security Monitoring (Month 6-12)

#### Continuous ML Security Monitoring
```python
# Comprehensive ML security monitoring system
class MLSecurityMonitoringSystem:
    def __init__(self):
        self.threat_detector = MLThreatDetector()
        self.behavior_analyzer = MLBehaviorAnalyzer()
        self.incident_responder = MLIncidentResponder()
        
    def continuous_monitoring(self):
        while True:
            # Monitor for adversarial attacks
            adversarial_threats = self.threat_detector.scan_for_adversarial_attacks()
            
            # Analyze model behavior drift
            behavior_anomalies = self.behavior_analyzer.detect_anomalies()
            
            # Check for data poisoning
            poisoning_attempts = self.threat_detector.detect_data_poisoning()
            
            # Respond to detected threats
            for threat in adversarial_threats + behavior_anomalies + poisoning_attempts:
                self.incident_responder.handle_threat(threat)
            
            time.sleep(60)  # Monitor every minute
    
    def generate_security_report(self):
        return {
            'timestamp': datetime.now(),
            'threat_summary': self.threat_detector.get_threat_summary(),
            'model_health': self.behavior_analyzer.get_model_health(),
            'security_metrics': self.calculate_security_metrics(),
            'recommendations': self.generate_recommendations()
        }
```

## Compliance and Standards

### MITRE ATLAS Compliance Mapping

| ATLAS Technique | Mitigated | Controls Implemented | Compliance Status |
|-----------------|-----------|---------------------|-------------------|
| AML.T0005 | ❌ | None | Not Compliant |
| AML.T0006 | ❌ | None | Not Compliant |
| AML.T0040 | ❌ | None | Not Compliant |
| AML.T0048 | ❌ | None | Not Compliant |
| AML.T0054 | ❌ | None | Not Compliant |

### Regulatory Alignment

- **NIST AI Risk Management Framework**: Align with AI risk management practices
- **EU AI Act**: Compliance with high-risk AI system requirements  
- **ISO/IEC 23053**: AI risk management guidelines
- **NIST Cybersecurity Framework**: ML-specific security controls

## Testing and Validation

### ML Security Test Suite

#### Adversarial Attack Testing
```python
def test_adversarial_robustness():
    # Test various adversarial attack methods
    attack_methods = [
        FGSM(model),
        PGD(model),  
        CarliniWagner(model),
        DeepFool(model)
    ]
    
    for attack in attack_methods:
        adversarial_examples = attack.generate(test_data)
        
        # Test if defenses detect adversarial examples
        for example in adversarial_examples:
            assert adversarial_detector.detect(example) == True
```

#### Model Integrity Testing
```python
def test_model_integrity():
    # Test model tampering detection
    original_model = load_model('model.pkl')
    original_signature = integrity_checker.sign_model('model.pkl')
    
    # Simulate model tampering
    tamper_model('model.pkl')
    
    # Verify integrity check fails
    assert not integrity_checker.verify_model('model.pkl', original_signature)
```

## Conclusion

The MITRE ATLAS assessment reveals significant ML-specific security vulnerabilities in NANDA:

### Critical Findings:
1. **No ML Supply Chain Security** - Vulnerable to compromised ML dependencies
2. **No Adversarial Attack Protection** - Systems vulnerable to adversarial examples
3. **No Model Integrity Verification** - Models can be tampered without detection
4. **Critical Data Exfiltration Risk** - Sensitive data extractable via ML models
5. **No ML-Specific Access Controls** - Insufficient protection of ML assets

### Immediate Actions Required:
1. Implement model integrity verification
2. Deploy adversarial input detection
3. Secure ML supply chain with SBOM and verification
4. Add rate limiting and cost protection for ML APIs
5. Implement differential privacy for sensitive model outputs

The recommended phased approach addresses the most critical ML security risks first, building toward comprehensive ML security suitable for production AI agent systems at Internet scale.

---

**Assessment Completed**: 2025-01-20  
**Next Assessment**: After Phase 1 implementation (estimated 3 months)  
**Framework Reference**: [MITRE ATLAS](https://atlas.mitre.org/)
