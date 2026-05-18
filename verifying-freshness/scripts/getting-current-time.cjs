#!/usr/bin/env node

/**
 * Helper script for Verifying Freshness skill.
 * Outputs the current system UTC time deterministically.
 */

console.log(`Current Time (UTC): ${new Date().toISOString()}`);
