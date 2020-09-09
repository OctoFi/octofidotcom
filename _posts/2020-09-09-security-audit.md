---
title: Smart Contract Security Audit
date: 2020-09-09 00:00:00
description: Smart contract security is paramount for any decentralized application that holds or controls the flow of users’ hard-earned funds.
featured_image: '/images/9.jpg'
---

Smart contract security is paramount for any decentralized application that holds or controls the flow of users’ hard-earned funds. 

While we at OctoFi have written our code with care and prioritized security, software bugs are an inevitable fact of life for even the most diligent of development teams. 

Undergoing a security audit by a highly respected and thorough third party is of the utmost importance to ensuring our smart contracts run as designed. It also gives our users the confidence needed to deposit any amount of their cryptocurrency into the OctoFi Ecosystem.

This is why we are pleased to announce that the OctoFi smart contracts on the Ethereum blockchain are currently undergoing some security audits and two reports can already be perused.

## Procedure

In the audit process, the following crucial features of the code are considered:

- Whether the code conforms to the specification. 
- Whether the code meets best coding practices.
- Whether the code is secure.


**The audit was done according to the following procedure:**

Automated analysis:

- Scan of project’s code base with Automated Scanner (Mythril, Slither, Solhint, HoneyBadger)
- Manually verification (reject or confirm) all the issues found by tools (SWC-Registry, Overflow)

Manual audit:

- Inspection of the code and revert the initial algorithms of the protocol and then compare them with the specification
- Manually analyze the code for security vulnerabilities

Report:

- Reflect all the gathered information in a report

## Results

### OCTO Token (ERC20) based on Ethereum

Source: GitHub[^1] Etherscan[^2]

**MythX (Tool by ConsenSys)**

Findings: 3 (LOW)

[Download Audit](https://github.com/octofi/octofi-smart-contract-audits/raw/master/octo-token/MythX_Audit_OCTO_Token_Contract.pdf)

**Securify**

Findings: 2 (LOW)

[Download Audit](https://github.com/octofi/octofi-smart-contract-audits/raw/master/octo-token/Securify_Audit_OCTO_Token_Contract.pdf)

### OCTO Yield Smart Contract based on Ethereum

Source: GitHub[^3]

**MythX (Tool by ConsenSys)**

Findings: 1 (LOW) 1 (MEDIUM)

[Download Audit](https://github.com/octofi/octofi-smart-contract-audits/raw/master/octo-yield/MythX_Audit_OCTO_Yield_Contract.pdf)

**Securify** 

Findings: 13 (LOW)

[Download Audit](https://github.com/octofi/octofi-smart-contract-audits/raw/master/octo-yield/Securify_Audit_OCTO_Yield_Contract.pdf)

## Summary

A majority of the code was standard and copied from widely-used and reviewed contracts and as a result, a lot of the code was reviewed before. It correctly implemented widely-used and reviewed contracts for safe mathematical operations. 

The audit identified no major security vulnerabilities, at the moment of audit. A majority of the functions were self-explanatory, and standard documentation tags (such as @dev, @param, and @returns) were included.

The libraries used are based on OpenZepplin codebase, such as Roles, IERC20, SafeMath, SafeERC20 etc.


## Disclaimer

*The audit does not give any warranties on the security of the code. One audit cannot be considered enough. It’s always recommended proceeding with several independent audits and a public bug bounty program to ensure the security of the code. Besides, security audit is not an investment advice.*


[^1]: [github.com/octofi/octofi-erc20-smart-contract/blob/master/contracts/OCTO_Token.sol](https://github.com/octofi/octofi-erc20-smart-contract/blob/master/contracts/OCTO_Token.sol)
[^2]: [etherscan.io/address/0x7240aC91f01233BaAf8b064248E80feaA5912BA3#code](https://etherscan.io/address/0x7240aC91f01233BaAf8b064248E80feaA5912BA3#code)
[^3]: [github.com/octofi/octofi-yield-smart-contract/blob/master/contracts/Octo_Yield.sol](https://github.com/octofi/octofi-yield-smart-contract/blob/master/contracts/Octo_Yield.sol)
