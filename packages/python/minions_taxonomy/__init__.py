"""
Minions Taxonomy Python SDK

Organizational metadata — groups, categories, tags, namespaces, statuses, and priorities
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Taxonomy.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
