# Shared Simple fields

## add_dirs

- Type: List of TemplateString
- Example:
  ```toml
  add_dirs = ["/etc/tor/torrc.d", "/etc/tor/hidden-services.d"]
  ```

A list of extra directories to be installed alongside the package. Each value specifies a directory path, indicating where these directories will be created during the package installation process. This is helpful when you need to include supplementary directories in your package distribution.

## add_files

- Type: List of TemplateString
- Example:
  ```toml
  add_files = ["lnd /usr/bin", "lib/bash.sh /usr/share/lnd/lib", "get_external_addr.sh /usr/share/lnd"]
  ```

A list specifying additional files to be installed alongside the package. Each entry defines a file path, allowing you to include extra files in the package distribution. These files will be copied or installed to the appropriate locations during package installation, ensuring their availability for use.

## add_links

- Type: List of TemplateString
- Example:
  ```toml
  add_links = ["/usr/lib/NBXplorer/NBXplorer /usr/bin/nbxplorer"]
  ```

A list used to specify extra symbolic links that should be created during the package installation. Each entry defines a symbolic link, indicating the source file or directory and the destination to which the symbolic link should point. This allows you to establish symbolic links as part of the package installation, simplifying dependency management or providing shortcuts to important resources.

## add_manpages

- Type: List of TemplateString
- Example:
  ```toml
  add_manpages = ["target/man/selfhost-dashboard.1"]
  ```

A list of path values used to specify extra man pages that should be bundled with the package. Each entry defines the source path of the man page. Man pages play a vital role in documenting command-line tools and utilities.

## patch_foreign

- Type: Map of String to String

"patch_foreign" is intended for files that are not part of this package.

It consists of a mapping of file paths on the system to their corresponding patch file paths. This mapping is used to specify which patches should be applied to certain files during the installation or configuration of the package. Each entry in the map consists of a file path as the key and the path to the associated patch file as the value.

For instance:

```toml
[patch_foreign]
"/usr/share/tor/tor-service-defaults-torrc" = "/usr/share/tor-hs-patch-config/defaults.patch"
"/etc/apparmor.d/local/system_tor" = "/usr/share/tor-hs-patch-config/apparmor.patch"
```

Here, the package will apply the `defaults.patch` to `/usr/share/tor/tor-service-defaults-torrc` and the `apparmor.patch` to `/etc/apparmor.d/local/system_tor` during installation or configuration. This is commonly used to apply custom patches or configuration changes to specific files as part of the package installation process.

## min_patch

- Type: String
- Example

  ```toml
  min_patch = "1"
  ```

The minimum required patch level for the package. This value represents a specific component of the version known as the "patch."

It's important to note that the package always depends on the same upstream version of the package it was built with. For instance, if you have a binary package named "foo" with version 1.2.3-4 and a service package named "foo-system," the "foo-system" package will automatically depend on "foo" with a version greater than or equal to "1.2.3-1" unless the "min_patch" value is increased. If the "min_patch" is set to "5," it will depend on "foo" with a version greater than or equal to "1.2.3-5."
