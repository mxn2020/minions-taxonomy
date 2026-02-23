/**
 * @module @minions-taxonomy/sdk/schemas
 * Custom MinionType schemas for Minions Taxonomy.
 */

import type { MinionType } from 'minions-sdk';

export const miniongroupType: MinionType = {
  id: 'taxonomy-minion-group',
  name: 'Minion group',
  slug: 'minion-group',
  description: 'A named collection of MinionTypes sharing a combined purpose.',
  icon: '🗂️',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'description', type: 'string', label: 'description' },
    { name: 'minionTypes', type: 'string', label: 'minionTypes' },
    { name: 'tags', type: 'string', label: 'tags' },
    { name: 'status', type: 'select', label: 'status' },
  ],
};

export const minioncategoryType: MinionType = {
  id: 'taxonomy-minion-category',
  name: 'Minion category',
  slug: 'minion-category',
  description: 'A hierarchical taxonomy node for browsing and classifying MinionTypes.',
  icon: '🌲',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'parentCategoryId', type: 'string', label: 'parentCategoryId' },
    { name: 'description', type: 'string', label: 'description' },
    { name: 'path', type: 'string', label: 'path' },
  ],
};

export const miniontagType: MinionType = {
  id: 'taxonomy-minion-tag',
  name: 'Minion tag',
  slug: 'minion-tag',
  description: 'A freeform label attachable to any Minion for filtering and search.',
  icon: '🏷️',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'color', type: 'string', label: 'color' },
    { name: 'description', type: 'string', label: 'description' },
    { name: 'namespaceId', type: 'string', label: 'namespaceId' },
  ],
};

export const minionnamespaceType: MinionType = {
  id: 'taxonomy-minion-namespace',
  name: 'Minion namespace',
  slug: 'minion-namespace',
  description: 'An ownership or origin scope for a set of MinionTypes.',
  icon: '📦',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'owner', type: 'string', label: 'owner' },
    { name: 'ownerType', type: 'select', label: 'ownerType' },
    { name: 'description', type: 'string', label: 'description' },
  ],
};

export const minionstatusType: MinionType = {
  id: 'taxonomy-minion-status',
  name: 'Minion status',
  slug: 'minion-status',
  description: 'A defined lifecycle stage applicable to MinionTypes that track state.',
  icon: '🔄',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'label', type: 'string', label: 'label' },
    { name: 'color', type: 'string', label: 'color' },
    { name: 'isTerminal', type: 'boolean', label: 'isTerminal' },
    { name: 'order', type: 'number', label: 'order' },
  ],
};

export const minionpriorityType: MinionType = {
  id: 'taxonomy-minion-priority',
  name: 'Minion priority',
  slug: 'minion-priority',
  description: 'A named priority level with a numeric weight for ordering work.',
  icon: '⚡',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'label', type: 'string', label: 'label' },
    { name: 'weight', type: 'number', label: 'weight' },
    { name: 'color', type: 'string', label: 'color' },
  ],
};

export const customTypes: MinionType[] = [
  miniongroupType,
  minioncategoryType,
  miniontagType,
  minionnamespaceType,
  minionstatusType,
  minionpriorityType,
];

