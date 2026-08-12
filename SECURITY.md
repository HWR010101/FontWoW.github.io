# Security Policy

## Automated security checks

FontWoW runs public, automated security checks in GitHub Actions:

- CodeQL scans the JavaScript/TypeScript and Android Java source on every change to `main`, on pull requests, and weekly.
- Dependency Review rejects pull requests that introduce dependencies with known high or critical vulnerabilities.
- `npm audit` checks the locked dependency tree for high or critical vulnerabilities.
- OWASP ZAP performs a non-destructive baseline scan against the deployed website after successful deployments and weekly.
- Dependabot proposes updates for npm, Gradle, and GitHub Actions dependencies.

CodeQL results are available in the repository's **Security → Code scanning** section. ZAP reports are attached to each workflow run and the scanner keeps a GitHub issue open while alerts remain.

Automated scans reduce risk but cannot prove that software is vulnerability-free. Releases should also receive human review, especially when permissions, network requests, or file handling change.

## Reporting a vulnerability

Please do not disclose a suspected vulnerability in a public issue. Use GitHub's **Security → Report a vulnerability** form if private vulnerability reporting is enabled for this repository. Otherwise, contact the maintainers through the contact method listed in the application and ask for a private reporting channel.

Include the affected version or URL, reproduction steps, expected impact, and any suggested mitigation. Please avoid accessing other users' data or running destructive tests.
