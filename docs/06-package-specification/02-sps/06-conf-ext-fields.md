# ConfExt Only fields

## Configuration extensions example

```toml
name = "linuxutil-config"
summary = "Configuration Details for Linux Utility Scripts"
conflicts = []
depends = ["linuxutil"]
long_doc = """
The 'linuxutil-config' package provides configuration details for the 'linuxutil' package, which is a collection of useful utility scripts for managing and monitoring Linux systems.

This configuration package does not contain any binaries or scripts but adds configuration settings to the 'linuxutil' package. It includes:

- Customized settings for 'disk-usage.sh'.
- System monitoring preferences for 'system-info.sh'.
- Log monitoring configurations for 'log-monitor.sh'.
- Backup preferences for 'backup-scripts.sh'.

These configurations enhance the functionality of the 'linuxutil' package, allowing users to tailor the utility scripts to their specific needs.

Note: This is a fictional package for demonstration purposes.
"""
add_dirs = []
add_files = []
add_links = []
add_manpages = []
min_patch = ""
provides = []
recommends = []
suggests = []
patch_foreign = {}

# ConfExt Fields
depends_on_extended = false
external = false
extends = "linuxutil"
extended_by = []
replaces = false
```

## depends_on_extended

- Type: bool
- Example
  ```toml
  depends_on_extended = true
  ```

The "depends_on_extended" field is a boolean flag that, when set to true, indicates that the package depends on extended packages or configurations. It signifies that the package relies on or requires additional configurations provided by extended packages or components.

depends_on_extended basically controls whether the extended package goes to Recommends or Depends

## external

- Type: bool
- Example
  ```toml
  external = true
  ```

The "external" field is a boolean value that, when set to true, indicates that the package being extended is sourced from an external repository. In essence, this signifies that the package does not have a corresponding Smart Package Specification (SPS) file. The "external" field helps in distinguishing packages that are not defined within the current repository but are instead obtained from external sources or repositories.

## extends

- Type: TemplateString
- Example

  ```toml
  extends = "tor"
  ```

- Variant example

  ```toml
  extends = "bitcoin-@variant"
  ```

The "extends" field specifies the name of a package or configuration that the current package utilizes for expanding its features or configurations.

## extended_by

- Type: List of TemplateString
- Example

  ```toml
  extended_by = ["tor-hs-patch-config", "selfhost-clearnet"]
  ```

- Variant example

  ```toml

  ```

The "extended_by" field specifies a list of packages or configurations that extend properties and settings from the current package. It indicates which other packages or configurations build upon the current package's settings. This field establishes a relationship where the current package serves as a base for other packages or configurations.

## replaces

- Type: Boolean or List of TemplateString
- Example
  ```toml
  replaces = false
  ```
- Variant example
  ```toml
  replaces = ["bitcoin-chain-mode-{variant}"]
  ```

The "replaces" field pertains to whether the package makes modifications or replacements to files of another package. By default, it is set to false, indicating that no replacements are made. When set to true, it signifies that the extending package replaces the extended package entirely. Alternatively, if provided as a list, it explicitly enumerates all packages that are being replaced or modified by the current package. This field is used to specify the extent of file replacements or modifications initiated by the package.
