"""
Minions Taxonomy SDK — Type Schemas
Custom MinionType schemas for Minions Taxonomy.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

minion_group_type = MinionType(
    id="taxonomy-minion-group",
    name="Minion group",
    slug="minion-group",
    description="A named collection of MinionTypes sharing a combined purpose.",
    icon="🗂️",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="description", type="string", label="description"),
        FieldDefinition(name="minionTypes", type="string", label="minionTypes"),
        FieldDefinition(name="tags", type="string", label="tags"),
        FieldDefinition(name="status", type="select", label="status"),
    ],
)

minion_category_type = MinionType(
    id="taxonomy-minion-category",
    name="Minion category",
    slug="minion-category",
    description="A hierarchical taxonomy node for browsing and classifying MinionTypes.",
    icon="🌲",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="parentCategoryId", type="string", label="parentCategoryId"),
        FieldDefinition(name="description", type="string", label="description"),
        FieldDefinition(name="path", type="string", label="path"),
    ],
)

minion_tag_type = MinionType(
    id="taxonomy-minion-tag",
    name="Minion tag",
    slug="minion-tag",
    description="A freeform label attachable to any Minion for filtering and search.",
    icon="🏷️",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="color", type="string", label="color"),
        FieldDefinition(name="description", type="string", label="description"),
        FieldDefinition(name="namespaceId", type="string", label="namespaceId"),
    ],
)

minion_namespace_type = MinionType(
    id="taxonomy-minion-namespace",
    name="Minion namespace",
    slug="minion-namespace",
    description="An ownership or origin scope for a set of MinionTypes.",
    icon="📦",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="owner", type="string", label="owner"),
        FieldDefinition(name="ownerType", type="select", label="ownerType"),
        FieldDefinition(name="description", type="string", label="description"),
    ],
)

minion_status_type = MinionType(
    id="taxonomy-minion-status",
    name="Minion status",
    slug="minion-status",
    description="A defined lifecycle stage applicable to MinionTypes that track state.",
    icon="🔄",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="label", type="string", label="label"),
        FieldDefinition(name="color", type="string", label="color"),
        FieldDefinition(name="isTerminal", type="boolean", label="isTerminal"),
        FieldDefinition(name="order", type="number", label="order"),
    ],
)

minion_priority_type = MinionType(
    id="taxonomy-minion-priority",
    name="Minion priority",
    slug="minion-priority",
    description="A named priority level with a numeric weight for ordering work.",
    icon="⚡",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="label", type="string", label="label"),
        FieldDefinition(name="weight", type="number", label="weight"),
        FieldDefinition(name="color", type="string", label="color"),
    ],
)

custom_types: list[MinionType] = [
    minion_group_type,
    minion_category_type,
    minion_tag_type,
    minion_namespace_type,
    minion_status_type,
    minion_priority_type,
]

