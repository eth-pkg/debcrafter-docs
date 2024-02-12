# Basic Only fields

## Basic package example

```toml
name = "linuxutil"
summary = "Collection of Linux Utility Scripts"
conflicts = []
depends = ["bash (>= 4.0)"]
long_doc = """
The 'linuxutil' package provides a collection of useful utility scripts for managing and monitoring Linux systems.

Included Utilities:
- `disk-usage.sh`: Displays disk usage information for mounted partitions.
- `system-info.sh`: Provides system information, including CPU, memory, and kernel details.
- `log-monitor.sh`: Monitors system log files for critical events and errors.
- `backup-scripts.sh`: Assists in creating and managing system backups.

Usage:
$ disk-usage.sh
$ system-info.sh
$ log-monitor.sh
$ backup-scripts.sh

These scripts can help administrators and users perform various system maintenance and monitoring tasks conveniently.

Please refer to the man pages for each utility for detailed usage instructions.

Note: This is a fictional package for demonstration purposes.
"""
add_dirs = []
add_files = ["disk-usage.sh /usr/local/bin", "system-info.sh /usr/local/bin", "log-monitor.sh /usr/local/bin", "backup-scripts.sh /usr/local/bin"]
add_links = []
add_manpages = ["disk-usage.1", "system-info.1", "log-monitor.1", "backup-scripts.1"]
min_patch = ""
provides = []
recommends = []
suggests = []
patch_foreign = {}

# Package specific field
architecture = "all"
```

## architecture

- Type: String
- Example
  ```toml
  architecture = "all"
  ```

The "architecture" field specifies the target architecture(s) for which the package is intended in Debian packaging. You can use one of the following values to define the supported architectures:

In architecture "any" means the package can be built for any architecture, but once built it can only be installed on the architecture it was built for.
"all" means it doesn't matter which architecture you build on and the resulting package will be installable on each architecture without rebuilding.
