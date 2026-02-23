/**
 * Minions Taxonomy SDK
 *
 * Organizational metadata — groups, categories, tags, namespaces, statuses, and priorities
 *
 * @module @minions-taxonomy/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Taxonomy.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
