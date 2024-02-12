# Debian Shared fields

## conflicts

- Type: Set of TemplateString
- Example:
  ```toml
  conflicts = ["nbxplorer (<< 2.1.47)", "python3-lnpbp-testkit (<< 0.1.4)"]
  ```
- Variant example
  ```toml
  conflicts = ["bitcoin-chain-mode-{variant}"]
  ```

When one binary package declares a conflict with another using a Conflicts field, dpkg will refuse to allow them to be unpacked on the system at the same time. This is a stronger restriction than Breaks, which prevents the broken package from being configured while the breaking package is in the “Unpacked” state but allows both packages to be unpacked at the same time.

## depends

- Type: Set of TemplateString
- Example
  ```toml
  depends = ["nodejs (>= 8.0.0)"]
  ```
- Variant Example
  ```toml
  depends = ["bitcoin-{variant}"]
  ```

This declares an absolute dependency. A package will not be configured unless all of the packages listed in its Depends field have been correctly configured (unless there is a circular dependency as described above).

The Depends field should be used if the depended-on package is required for the depending package to provide a significant amount of functionality.

The Depends field should also be used if the postinst or prerm scripts require the depended-on package to be unpacked or configured in order to run. In the case of postinst configure, the depended-on packages will be unpacked and configured first. (If both packages are involved in a dependency loop, this might not work as expected; see the explanation a few paragraphs back.) In the case of prerm or other postinst actions, the package dependencies will normally be at least unpacked, but they may be only “Half-Installed” if a previous upgrade of the dependency failed.

Finally, the Depends field should be used if the depended-on package is needed by the postrm script to fully clean up after the package removal. There is no guarantee that package dependencies will be available when postrm is run, but the depended-on package is more likely to be available if the package declares a dependency (particularly in the case of postrm remove). The postrm script must gracefully skip actions that require a dependency if that dependency isn’t available.

## long_doc

- Type: List of TemplateString
- Example:
  ```toml
  long_doc = """This package provides a very simple, yet useful UI for accessing
  selfhost-enabled applications."""
  ```

Long documentation explaining of what your package provides. You can include multiple paragraph explaining in more detail of how to use or configure this packages.

## name (required)

- Type: VPackageName
- Example:

  ```toml
  name = bitcoin
  ```

- Variant Example:
  ```toml
  name = "bitcoin-timechain-@variant"
  ```

Name of your package. This will be the searchable name that people install.

## provides

- Type: Set of TemplateString
- Example
  ```toml
  provides = ["selfhost-domain (= 1.1)"]
  ```
- Variant example
  ```toml
  provides = ["bitcoin-chain-mode-{variant} (= 1.0)", "bitcoin-fullchain-{variant}"]
  ```

The "provides" field in Debian packaging allows a package to declare that it offers certain abstract capabilities or virtual packages. Other packages can then depend on or conflict with these virtual packages. This flexibility enables package managers to resolve dependencies and conflicts based on capabilities rather than specific package names, offering greater adaptability and choice for both package maintainers and users.

See: https://www.debian.org/doc/debian-policy/ch-relationships.html#virtual-packages-provides

## recommends

- Type: Set of TemplateString
- Example
  ```toml
  recommends = ["selfhost (>= 0.1.5)", "selfhost (<< 0.2.0)"]
  ```
- Variant example
  ```toml
  recommends = ["electrum-trustless-{variant} | electrum-trustless-regtest", "python3-pyqt5"]
  ```

This declares a strong, but not absolute, dependency.

The Recommends field should list packages that would be found together with this one in all but unusual installations.

## suggests

- Type: Set of TemplateString
- Example
  ```toml
  suggests = ["bitcoin-cli"]
  ```
- Variant example
  ```toml
  suggests = ["tor", "bitcoin-fullchain-{variant}"]
  ```

This is used to declare that one package may be more useful with one or more others. Using this field tells the packaging system and the user that the listed packages are related to this one and can perhaps enhance its usefulness, but that installing this one without them is perfectly reasonable.

## summary (required)

- Type: TemplateString
- Example
  ```toml
  summary = "Publishes bitcoin whitepaper as /bitcoin.pdf"
  ```
- Variant example
  ```toml
  summary = "Marker package disabling integration of LND into BTCPayServer ({variant})"
  ```

Provides a short summary of what your package does.
