# Service Only fields

## Service package example

```toml
name = "linuxutil-service"
summary = "Systemd Service for Linux Utility Scripts"
conflicts = []
depends = ["linuxutil"]
long_doc = """
The 'linuxutil-service' package provides a systemd service configuration for the 'linuxutil' package, which is a collection of useful utility scripts for managing and monitoring Linux systems.

This package defines a systemd service called 'linuxutil-service' that ensures the 'linuxutil' scripts are properly managed and executed as a system service.

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

# Service Fields
after = "multi-user.target"
bin_package = ""
bare_conf_param = false
bin_package = ""
binds_to = ""
binary = ""
condition_path_exists = ""
conf_d = {}
conf_param = []
exec_stop = ""
extra_groups = {}
extra_service_config = """
ExecStart=/usr/bin/linuxutil-script
Restart=always
"""
part_of = ""
refuse_manual_start = false
refuse_manual_stop = false
requires = []
runtime_dir = {}
service_type = "simple"
user = {}
wanted_by = "multi-user.target"
wants = "linuxutil"

```

## after

- Type: TemplateString
- Example
  ```toml
  after = "postgresql.service"
  ```
- Variant example
  ```toml
  after = "lnd-system-{variant}.service"
  ```

In systemd service unit files, the "after" field defines a dependency relationship, specifying a target service or unit that the current package must start after. This ensures that the package waits for the specified service or unit to commence before it begins its own execution.

## bare_conf_param

- Type: boolean
- Conflicts with: conf_param
- Example
  ```toml
  bare_conf_param = true
  ```

If `bare_conf_param` is true, it means the application must be launched as `/bin/foo /etc/foo/foo.conf`. Where foo is the package name.

## bin_package

- Type: String
- Example
  ```toml
  bin_package = "python3-remir"
  ```

TODO

## binds_to

- Type: TemplateString
- Example
  ```toml
  binds_to = "lnd-system.service"
  ```
- Variant example
  ```toml
  binds_to = "lnd-system-{variant}.service"
  ```

The "binds_to" field specifies a target service or unit that the current package should be bound to. It establishes a relationship where the package should be started and stopped together with the specified service or unit.

## binary

- Type: String
- Example
  ```toml
  binary = "/usr/bin/remir"
  ```

The "binary" field specifies the path to the binary executable associated with the package. It indicates the location of the main executable file that the package provides or relies on. This field is essential for identifying the primary executable within the package.

## condition_path_exists

- Type: TemplateString
- Example
  ```toml
  condition_path_exists="!/etc/selfhost/deactivate-selfhost-dashboard"
  ```

The "condition_path_exists" field specifies a condition that needs to be met for the package to be installed or configured. It uses a TemplateString to define a path condition that checks for the existence or non-existence of a specific file or directory. Depending on the condition, the package installation or configuration may proceed or be skipped.

## conf_d

- Type: ConfDir
- Example
  ```toml
  conf_d = { name = "conf.d", param = "--conf-dir" }
  ```

conf_d specifies the name of the parameter used to load configuration from a directory by reading each file of the directory.
If a service is capable of it and accepts e.g. --conf-dir /etc/foo/conf.d then use conf_d = "--conf-dir"
Then the service will read each file from the conf dir and use its content to modify configuration.
By convention these directories are named with ".d" suffix. This is very useful to enable multiple packages or the user to affect the configuration without conflicts or complicated file editing.

Note: This directory can be filled with confext package content.

## conf_param

- Type: ConfParam
- Conflicts with: bare_conf_param
- Example
  ```toml
  conf_param = "--conf"
  conf_param = "--conf="
  ```

conf_param specifies the name of the argument used to supply the configuration file to the service.

So if the service needs to be launched with /bin/foo --config /etc/foo/foo.conf you specify conf_param = "--config" and then write [config."foo.conf"] below

## exec_stop

- Type: String
- Example
  ```toml
  exec_stop = "/bin/true"
  ```

The "exec_stop" field specifies the command or script that should be executed when stopping the service associated with the package. It defines the action to be taken when the service is stopped, such as running a specific command or script. This field is used to control the behavior of the service during the stop process.

## extra_groups

- Type: Map of TemplateString to ExtraGroup
- Example

  ```toml
  [extra_groups."lnd-system"]
  create = false
  ```

- Variant example
  ```toml
  [extra_groups."lnd-system-{variant}"]
  create = false
  ```

The "extra_groups" field specifies additional groups that should be created or configured as part of the package installation process. It uses a map where each key is a TemplateString representing the group name, and each value is an ExtraGroup type that defines the group's configuration, including whether it should be created or not.

The Service user will be added to these groups by debcrafter.

## extra_service_config

- Type: TemplateString
- Example
  ```toml
  extra_service_config = """
  Restart=always
  """
  ```
- Variant example
  ```toml
  extra_service_config = """
  Environment="BITCOIN_NETWORK={variant}"
  RemainAfterExit=true
  """
  ```

The "extra_service_config" field allows you to specify additional configuration options for the systemd service associated with the package. It uses a TemplateString to define custom systemd service configuration settings. These settings can include directives that control how the service behaves, environment variables, and more.

## part_of

- Type: TemplateString
- Example

  ```toml
  part_of = "lnd-system.service"
  ```

- Variant example
  ```toml
  part_of = "lnd-system-{variant}.service"
  ```

The "part_of" field specifies that the current package is considered a part of another systemd service in another package, indicating a dependency relationship. It uses a TemplateString to define the name of the service to which the package is considered a part. This field ensures that the package is treated as a component of the specified service.

## refuse_manual_start

- Type: bool
- Example
  ```toml
  refuse_manual_start = true
  ```

The "refuse_manual_start" field is a boolean flag that, when set to true, indicates that the package should not be started manually by users or administrators. It prevents manual initiation of the associated service using commands like systemctl start or similar. This flag is used to enforce automatic startup behavior or to prevent unintentional manual starts.

## refuse_manual_stop

- Type: bool
- Example
  ```toml
  refuse_manual_stop = true
  ```

The "refuse_manual_stop" field is a boolean flag that, when set to true, indicates that the package should not be stopped manually by users or administrators. It prevents manual termination of the associated service using commands like systemctl stop or similar. This flag is used to enforce automatic stop behavior or to prevent unintentional manual stops.

## requires

- Type: TemplateString
- Example

  ```toml
  requires = ["service"]

  ```

- Variant example

  ```toml
  requires = ["service-{variant}"]

  ```

The "requires" field in System.d configuration is used to specify dependencies on other services or units that the current service or unit relies on. This field defines a relationship between services or units, ensuring that the current one only starts if the required services or units are also started. This helps in managing service dependencies and the order in which services or units are started.

The field takes a list of TemplateStrings, which can specify the names of required services or units. These are service or unit names that the current service or unit depends on.

## runtime_dir

- Type: RuntimeDir
- Example

  ```toml
  runtime_dir = { mode = "750" }
  ```

The "runtime_dir" field specifies the configuration for creating a runtime directory associated with the package. It uses the RuntimeDir type to define the configuration, including the directory's mode. Runtime directories are typically used to store temporary or runtime data for a service or application.

runtime_dir is deleted whenever the service stops and is placed in `/var/run`

## service_type

- Type: String
- Example
  ```toml
  service_type = "notify"
  ```

The "service_type" field specifies the type of systemd service that is associated with the package. It defines the behavior and characteristics of the systemd service. The allowed values for the "service_type" field include:

- "simple": Indicates a basic systemd service that does not provide notifications or special features.
- "forking": Indicates a systemd service that forks itself into the background during startup.
- "oneshot": Indicates a systemd service that is designed to be executed once and then exit.
- "dbus": Indicates a systemd service that communicates with D-Bus for activation.
- "notify": Indicates a systemd service that sends a notification to systemd when it is ready to accept connections.

## user

- Type: UserSpec
- Example
  ```toml
  user = { group = true, create = { home = false } }
  ```
- Variant example
  ```toml
  user = { name = "lnd-system-{variant}", group = true }
  ```

The "user" field specifies the user and, optionally, a group that will be associated with the service. Additionally, you can define whether the user's home directory should be created.

In the first example, the user field is configured to create a group for the service and explicitly set not to create a home directory for the user.

In the variant example, the user field dynamically generates the user name based on the provided variant. It also creates a group for the service.

This field allows you to define the user and group settings for the service and manage the user's home directory as needed.

## wanted_by

- Type: TemplateString
- Example
  ```toml
  wanted_by = "lnd-system.service"
  ```
- Variant example
  ```toml
  wanted_by = "lnd-system-{variant}.service"
  ```

The "wanted_by" field specifies the systemd target or service that the current package should be wanted by. It establishes a dependency relationship where the package is configured to be wanted by the specified target or service. This field ensures that the package is included in the dependencies of the target or service.

## wants

- Type: TemplateString
- Example
  ```toml
  wants = "postgresql.service"
  ```
- Variant example

  ```toml
  wants = "postgresql-{variant}.service"
  ```

The "wants" field specifies the systemd target or service that the current package wants as a dependency. It establishes a relationship where the package indicates that it wants the specified target or service to be active. This field ensures that the package relies on the presence and activation of the specified target or service.
