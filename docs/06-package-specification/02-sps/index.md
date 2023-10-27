---
sidebar_position: 2
---

# SPS

`.sps` - "smart package specification" - defines how individual packages look and behave.

There are three kinds of `sps` files:

- Basic - most often contains just binaries or dumb data.
- Service - defines a service launched with the system (e.g. `bitcoind`) and the corresponding package.
  These are often parametrised over bitcoin network (`mainnet`, `regtest`)
- Configuration extensions - define packages that control configuration.
  These are used for settings that need to be enforced by the depending packages.
  The main idea is to avoid conflicting configuration and other issues.

The kind of SPS package is inferred from content and can not be distinguished otherwise.
Basically, if the file contains service-related options it's a service package, if it contains `architecture` key it's a basic package, everything else is a configuration extension.

## SPS specification

The structure

```toml
# Debian fields
# Shared fields
# One of:  Basic fields | Service fields | ConfExt  fields

## Config related shared fields
## [config]
## [map_variant]
## [alternatives]
## [[plug]]
## [databases]
## [migrations]
```

## To check with Martin if the document is correct, some notable questions:

- [ ] structure field
- [ ] val field
- [ ] condition field
- [ ] conf.d
- [ ] VPackageName naming
- [ ] conf.param is that correct?
- [ ] check TemplateString
- [ ] TODO check if [[plug]] is correct
- [ ] TODO check if alternatives section is correct
- [ ] TODO where are `@variant` values come from
- [ ] check migrations

For me to fill out:

- [ ] add example for ivars with allowed values
- [ ] add examples for evars
- [ ] add examples of hvars
- [ ] FileVar
- [ ] TODO document requires field
- [ ] TODO add links to debconf
- [ ] TODO add links to system.d
- [ ] TODO add backlink reference to types
- [ ] TODO add links to debcrafter
- [ ] TODO check if the architecture field are correct
