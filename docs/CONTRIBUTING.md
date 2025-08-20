# Contributing to Project NANDA

> **📋 DOCUMENT STATUS**: Subject to Approval  
> **📅 DATE**: 2025-01-20  
> **👤 AUTHOR**: Security & Development Guidelines Team (parmarmanojkumar)  
> **✅ APPROVAL REQUIRED FROM**:  
> - [ ] Security Team Lead  
> - [ ] Engineering Manager  
> - [ ] Open Source Maintainers  
> - [ ] Community Manager

Welcome to Project NANDA! We're building the foundational infrastructure for the Internet of AI Agents, and we welcome contributions from the community. This document outlines how to contribute effectively and securely to the project.

## Code of Conduct

Project NANDA is committed to providing a welcoming and inclusive environment for all contributors. By participating, you agree to abide by our community standards of respect, collaboration, and constructive dialogue.

## Getting Started

### Prerequisites

- Git knowledge and GitHub account
- Understanding of AI agent architectures and distributed systems
- Familiarity with security best practices
- Commitment to privacy-preserving design principles

### Development Environment Setup

1. **Fork and Clone**
   ```bash
   git fork https://github.com/projnanda/projnanda.git
   git clone https://github.com/YOUR_USERNAME/projnanda.git
   cd projnanda
   ```

2. **Set Up Development Branch**
   ```bash
   git checkout -b dev
   git checkout -b feature/your-feature-name
   ```

3. **Install Dependencies**
   ```bash
   npm install  # or appropriate package manager
   ```

4. **Run Security Checks**
   ```bash
   make security-check
   npm audit --audit-level high
   ```

## Development Workflow

### Branching Strategy

We follow the GitFlow model with security enhancements:

- **main**: Production-ready code, protected branch
- **dev**: Development integration branch  
- **feature/**: New features (branch from dev)
- **bugfix/**: Bug fixes (branch from dev)
- **hotfix/**: Critical production fixes (branch from main)
- **security/**: Security fixes (high priority, expedited review)

### Branch Naming Convention

```
feature/TICKET-ID-short-description
bugfix/TICKET-ID-short-description
security/CVE-or-ID-short-description
docs/section-update-type
```

Examples:
- `feature/SEC-123-oauth2-authentication`
- `bugfix/REG-456-agent-discovery-timeout`
- `security/CVE-2024-001-input-validation`

## Security Requirements

### 🚨 CRITICAL: Current Security Status

**Before contributing, understand the current security posture:**

| Component | Security Level | Contribution Risk |
|-----------|----------------|-------------------|
| **NANDA-INDEX** | **Level 0/5** | 🛑 **Emergency fixes only** |
| **NANDA-AGENT** | **Level 1/5** | 🚨 **CRITICAL - Emergency fixes only** |
| **NANDA-ADAPTER** | **Level 2/5** | ⚠️ **HIGH - Security hardening priority** |

**All contributions must address security gaps identified through AI security frameworks:**
- **OWASP LLM Top 10** - LLM application security
- **OWASP Agentic AI Top 10** - Multi-agent system security  
- **MITRE ATLAS** - ML-specific attack mitigations
- **MAESTRO Framework** - Multi-agent orchestration security

### 🚨 Security-First Development

All contributions must follow security-by-design principles:

#### Code Security Checklist

- [ ] **Input Validation**: All user inputs validated and sanitized
- [ ] **Output Encoding**: All outputs properly encoded for context
- [ ] **Authentication**: Proper authentication for protected resources
- [ ] **Authorization**: Principle of least privilege applied
- [ ] **Cryptography**: Use established libraries, no custom crypto
- [ ] **Error Handling**: No sensitive information in error messages
- [ ] **Logging**: Security events logged, no secrets in logs

#### Security Scanning Requirements

All PRs must pass:
- [ ] **SAST**: Static Application Security Testing
- [ ] **SCA**: Software Composition Analysis  
- [ ] **Secret Scanning**: No hardcoded secrets or credentials
- [ ] **IaC Security**: Infrastructure as Code security validation
- [ ] **Container Security**: Docker image vulnerability scanning

### Privacy Protection

- **Data Minimization**: Collect only necessary data
- **Anonymization**: Remove PII when possible
- **Consent**: Clear consent mechanisms for data collection
- **Transparency**: Document all data handling practices

## Contribution Types

### 1. Research Contributions

Contributing to NANDA's research papers and architectural decisions:

- **Algorithmic Research**: New algorithms for agent discovery, trust, privacy
- **Security Analysis**: Threat modeling, vulnerability research, countermeasures
- **Privacy Research**: Privacy-preserving technologies, anonymization techniques
- **Performance Studies**: Scalability analysis, optimization research

**Process**:
1. Join the [NANDA Writing Group](https://tinyurl.com/nandawritingonboarding)
2. Propose research topics in Discord #research channel
3. Collaborate on papers in shared repositories
4. Submit to appropriate venues with NANDA attribution

### 2. Code Contributions

Contributing to NANDA's technical implementation:

#### Infrastructure Code
- Registry implementation and optimization
- AgentFacts schema and validation
- Cross-protocol bridges and adapters
- Security and privacy enhancements

#### SDK Development
- Client libraries (JavaScript, Python, Go, Rust)
- Protocol implementations (HTTPS, MCP, A2A)
- Developer tools and utilities
- Testing frameworks

#### Security Implementations
- Authentication and authorization systems
- Cryptographic protocols and libraries
- Privacy-preserving algorithms
- Security monitoring and alerting

### Component-Specific Contribution Guidelines

#### NANDA-INDEX Contributions (Registry Service)
**CRITICAL SECURITY PRIORITY** - Emergency fixes only until baseline security implemented

**Allowed Contributions:**
- [ ] API authentication implementation
- [ ] Input validation and sanitization
- [ ] Database security hardening
- [ ] Audit logging implementation
- [ ] Rate limiting and DDoS protection

**Prohibited Until Security Fixed:**
- ❌ New features or endpoints
- ❌ Performance optimizations
- ❌ UI/UX improvements
- ❌ Documentation-only changes

#### NANDA-AGENT Contributions (Agent Communication)
**HIGH SECURITY PRIORITY** - Security hardening required

**Priority Contributions:**
- [ ] Prompt injection detection and sanitization
- [ ] Secure secrets management
- [ ] Agent authentication frameworks
- [ ] Conversation encryption
- [ ] MCP plugin sandboxing

**AI Security Focus:**
- [ ] OWASP LLM Top 10 mitigations
- [ ] Adversarial input detection
- [ ] Model output validation
- [ ] Behavioral anomaly monitoring

#### NANDA-ADAPTER Contributions (Framework Integration)
**MEDIUM SECURITY PRIORITY** - Framework security hardening

**Priority Contributions:**
- [ ] Framework sandboxing (LangChain/CrewAI)
- [ ] Input validation at integration boundaries
- [ ] Framework-specific security controls
- [ ] Resource limiting and monitoring
- [ ] Custom function security

**Framework Security Requirements:**
- [ ] LangChain tool authorization
- [ ] CrewAI agent capability restrictions
- [ ] Custom improvement function sandboxing
- [ ] Framework vulnerability scanning

**Process**:
1. Check existing issues and roadmap
2. Discuss proposal in Discord or GitHub Issues
3. Create detailed design document if needed
4. Implement with comprehensive tests
5. Submit PR following security requirements

### 3. Documentation Contributions

- **Technical Documentation**: API docs, architecture guides
- **Security Documentation**: Security guides, threat models
- **User Guides**: Getting started, best practices
- **Research Papers**: Academic contributions, white papers

### 4. Community Contributions

- **Education**: Workshops, tutorials, conference talks
- **Ecosystem Building**: Integrations, partnerships, standards work
- **Testing**: Quality assurance, security testing, performance testing
- **Translation**: Internationalization support

## Pull Request Process

### Before Submitting

1. **Reuse Justification**: Document why new code is necessary
   ```markdown
   ## Reuse Justification
   - [ ] Searched existing modules/libraries
   - [ ] Analyzed fit-gap for reusability  
   - [ ] Documented why new implementation needed
   - [ ] Considered extending existing solutions
   ```

2. **Security Review**
   - Run all security scanning tools
   - Review code for security vulnerabilities
   - Test with security test cases
   - Document security implications

3. **Testing**
   - Unit tests (≥80% coverage for critical paths)
   - Integration tests for APIs
   - Security tests for security-sensitive code
   - Performance tests if applicable

### PR Template

```markdown
## Description
Brief description of changes and motivation.

## Type of Change
- [ ] Bug fix (non-breaking change fixing an issue)
- [ ] New feature (non-breaking change adding functionality)
- [ ] Breaking change (fix or feature causing existing functionality to change)
- [ ] Documentation update
- [ ] Security enhancement

## Security Impact
- [ ] No security impact
- [ ] Security enhancement
- [ ] Requires security review

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass  
- [ ] Security tests pass
- [ ] Manual testing completed

## Documentation
- [ ] Code comments added/updated
- [ ] README updated if needed
- [ ] API documentation updated
- [ ] Security documentation updated

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Security scanning passed
- [ ] Reuse justification provided (if new code)
- [ ] Breaking changes documented
```

### Review Process

1. **Automated Checks**: All CI/CD checks must pass
2. **Peer Review**: At least one code owner review required
3. **Security Review**: Required for security-sensitive changes
4. **Documentation Review**: Required if documentation changes

### Review Criteria

- **Functionality**: Does it work as intended?
- **Security**: Are security requirements met?
- **Privacy**: Does it maintain privacy principles?
- **Performance**: Acceptable performance impact?
- **Maintainability**: Is the code maintainable?
- **Documentation**: Adequately documented?

## Quality Standards

### Code Quality

- **Complexity**: Function complexity ≤10 (cyclomatic)
- **File Size**: ≤400 LOC (soft limit with justification)
- **Dependencies**: Minimize external dependencies
- **Error Handling**: Graceful failure handling
- **Logging**: Structured logging with appropriate levels

### Testing Standards

- **Test Pyramid**: Unit > Integration > E2E tests
- **Coverage**: ≥80% for critical business logic
- **Mutation Testing**: ≥60% mutation score
- **Security Testing**: Security test cases for all security features
- **Performance Testing**: Load testing for scalability-critical components

### Documentation Standards

- **Code Comments**: Why, not what (self-documenting code preferred)
- **API Documentation**: OpenAPI specifications for all APIs
- **Architecture Documentation**: ADRs for significant design decisions
- **Security Documentation**: Security design and threat models

## Recognition

### Contributors

All contributors are recognized in:
- Project documentation and websites
- Research paper acknowledgments
- Community presentations and demos
- Annual contributor reports

### Security Researchers

Special recognition for security contributions:
- Security advisory acknowledgments
- Hall of Fame for significant findings
- Conference presentation opportunities
- Research collaboration invitations

## Resources

### Learning Resources

- [OWASP Secure Coding Practices](https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/)
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)
- [Privacy by Design Principles](https://iab.org/wp-content/IAB-uploads/2011/03/fred_carter.pdf)

### Development Tools

- **Security Scanners**: Bandit (Python), ESLint Security, Semgrep
- **Dependency Checkers**: npm audit, safety (Python), OWASP Dependency Check
- **Container Security**: Hadolint, Trivy, Clair
- **Code Quality**: SonarQube, CodeClimate, Codacy

### Communication Channels

- **Discord**: [Join NANDA Discord](https://discord.gg/BxnPBEqd88)
  - #general: General discussion
  - #development: Development coordination  
  - #security: Security discussions
  - #research: Research collaborations

- **GitHub**: 
  - Issues for bug reports and feature requests
  - Discussions for community conversations
  - PRs for code contributions

- **Community Events**:
  - Weekly webinars: [Lu.ma/nanda](https://Lu.ma/nanda)
  - YouTube: [@ProjectNANDA](https://www.youtube.com/@ProjectNANDA)

## License

By contributing to Project NANDA, you agree that your contributions will be licensed under the MIT License.

---

**Questions?** Reach out on Discord or create a GitHub Discussion.

**Security Issues?** Please follow our [Security Policy](SECURITY.md) for responsible disclosure.

Thank you for helping build the secure Internet of AI Agents! 🤖🔐
