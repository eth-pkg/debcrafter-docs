# Shared Config fields

## config

This section defines fields that will be shown for dpkg-configure and placed into the package configuration directory.

```toml
# Main Configuration File
[config."{filename}"]

# Internal Variables
[config."{filename}".ivars]
"{variable_name}" = "<variable_value>"

# Hidden Variables (Not Exposed to dpkg-configure)
[config."{filename}".hvars]
"{variable_name}" = "<variable_value>"

# External Variables Extension for Another Package (Visible During Installation)
[config."{filename}".evars."{other_package}"."{variable_name}"]
"{variable_name}" = "<variable_value>"

```

- `[config."{filename}"]`:

  - Creates a file in `/etc/"{package_name}"/"{file_name}"` based on the provided options.

- `[config."{filename}".ivars."{variable_name}"]`:

  - Creates `"{variable_name}"` within `/etc/"{package_name}"/"{file_name}"` and assigns the provided values. These variables are visible during the dpkg-configure process.

- `[config."{filename}".hvars."{variable_name}"]`:

  - Creates `"{variable_name}"` within `/etc/"{package_name}"/"{file_name}"` and assigns the provided values. However, these variables are not exposed to dpkg-configure.

- `[config."{filename}".evars."{other_package}"."{variable_name}"]`:
  - Creates `"{variable_name}"` within `/etc/"{package_name}"/"{file_name}"` and assigns the provided values. These variables become visible during the dpkg\* -configure process when configuring the `"{other_package}"`.

### [config.{filename}]

Example for allowed values for `[config.{filename}]`

```toml
# Example TOML configuration file with configuration parameters

# Define the format for the configuration data
[config.example]
format = "toml"

# Specify directories to be created under /etc
cat_dir = ["conf.d", "data"]

# List of files to be appended to the configuration file
cat_files = ["file1", "file2"]

# Set file permissions to public (644)
public = true

# Define the content to be written to the file
content = """
Hello World!
"""

# Insert header and additional content at the beginning of the file
insert_header = "#Hello Example"
insert_header = """
# This file has a very long header description
#
# End of long header
"""

# Define file variables and their values
[config.example.fvars]
type = "path"
file_type = "regular"
structure = ["SSO", "rtlCookiePath"]

# Add an additional comment or description
comment = "Some additional comment"

# Specify post-processing commands
[config.example.postprocess]
command = ["echo", "hello world"]

# Specify details about file generation after post-processing
[config.example.postprocess.generates]
dir = ""
file = ""
```

#### format

- Type: One of the following - plain, toml, yaml, json, spaceseperated.
- Example:
  ```toml
  [config.example]
  format = "toml"
  ```

In this example, the "format" field is set to "toml," indicating that the configuration data for `config.example` will be represented in TOML format.

The "format" field allows you to specify the format in which your configuration data should be represented. You can choose one of the following formats:

- `plain`: Represents the configuration data in plain, unformatted text.
- `toml`: Represents the configuration data in TOML (Tom's Obvious, Minimal Language) format.
- `yaml`: Represents the configuration data in YAML (YAML Ain't Markup Language) format.
- `json`: Represents the configuration data in JSON (JavaScript Object Notation) format.
- `spaceseperated`: Represents the configuration data in a space-separated format.

#### cat_dir

- Type: List of TemplateString
- Usage Example:
  ```toml
  [config.example]
  format = "toml"
  cat_dir = ["conf.d", "data"]
  ```

In this example, the "cat_dir" field defines two directories, "conf.d" and "data," which will be created under the `/etc` directory.

- Post-install Action: The "cat_dir" field typically implies a post-install action where files in the specified directories (relative to `/etc/example/`) are concatenated and appended to a target file.

The "cat_dir" field specifies a directory or directories, represented as a list of TemplateString values, that will be created under the `/etc` directory. These directories will be placed in the `/etc` directory, and they can be used to organize configuration files or data.

#### cat_files

- Type: List of TemplateString
- Example:
  ```toml
  [config.example]
  format = "toml"
  cat_files = ["file1", "file2"]
  ```
  In this example, the "cat_files" field specifies a list of files, "file1" and "file2," that will be appended to the configuration file during post-installation.

The `cat_files` field allows you to specify a list of files that will be appended to the configuration file during post-installation.

#### public

- Type: bool
- Example:
  ```toml
  [config.example]
  public = true
  ```

In this example, setting `public` to `true` indicates that the associated file should have its permissions set to 644. If the `public` field is not specified or set to `false`, the default permissions of 640 will be used.

The `public` field allows you to control the file permissions for the associated file. When set to `true`, it ensures that the file is made publicly readable (644), while `false` uses the default permissions of 640.

#### content

- Type: TemplateString
- Example:
  ```toml
  [config.example]
  content = """
  Hello World!
  """
  ```

In this example, the "content" field allows you to specify the content that will be written to the associated file. The content should be enclosed within triple-quotes (`"""`) to allow for multi-line content.

The `content` field is used to define the content that will be written to the file associated with it. You can use triple-quotes to enclose multi-line content for the file.

#### insert_header

- Type: TemplateString
- Example:
  ```toml
  [config.example]
  insert_header = "#Hello Example"
  insert_header = """
  # This file has a very long header description
  #
  # End of long header
  """
  ```
  In this example, the "insert_header" field allows you to specify a header or additional content that will be inserted at the beginning of the associated file. You can provide both single-line and multi-line headers using triple-quotes (`"""`).

The `insert_header` field is used to add a header or additional content at the beginning of the associated file. It supports both single-line and multi-line headers.

#### fvars

- Type: Map of String to Filevar
- Example:
  ```toml
  [config.example]
  type = "path"
  file_type = "regular"
  structure = ["SSO", "rtlCookiePath"]
  ```

In this example, the "fvars" field is used to define a map of String to Filevar. It allows you to specify a set of file variables (`Filevar`) with associated values. Each key in the map represents the name of a file variable, and the corresponding value is an instance of the `Filevar` type.

The `fvars` field is used to specify file variables and their values for the associated configuration. It provides a way to configure file-related settings using a map format.

#### comment

- Type: String
- Example:
  ```toml
  [config.example]
  comment = "Some additional comment"
  ```

In this example, the "comment" field allows you to add an additional comment or description to the associated configuration. The comment should be provided as a string value.

The `comment` field is used to include additional comments or descriptions within the configuration. It helps provide context or explanations for specific configuration settings.

#### postprocess

- Type: List of TemplateString
- Usage Example:
  ```toml
  [config.example.postprocess]
  command = ["echo", "hello world"]
  ```

In this example, the "postprocess" field is a list of `TemplateString` values. Each `TemplateString` represents a command or script to be executed as part of the post-processing phase after the associated configuration is applied.

#### postprocess.generates

- Type: Object
- Usage Example:
  ```toml
  [config.example.postprocess.generates]
  dir = ""
  file = ""
  ```
  The "generates" section allows you to specify additional details related to file generation as part of the post-processing. It includes the following fields:
  - `dir`: Specifies the directory where generated files should be placed. Provide a `TemplateString` to dynamically determine the directory path.
  - `file`: Specifies the name of the generated file. Provide a `TemplateString` to dynamically determine the file name.

The `generates` section complements the `postprocess` field by providing information about where and how generated files should be placed after post-processing.

### shared config variable values

### [config.{filename}.ivars.{variable_name}]

Within the file configuration section, you can define internal variables (ivars) using the `{variable_name}`. These internal variables are meant to be used within the configuration for the specified file. This variable will be shown with dpkg-configure.

```toml

# Variable placed into /etc/package_name/file_name
[config."{filename}".ivars."{variable_name}"]
# Short description of the variable
summary = "Description of the variable"

# Detailed documentation of the variable
long_doc = """
Detailed documentation explaining the variable's purpose and usage.
"""

# Default value for the variable
default = "Default value for the variable"

# Script to calculate and overwrite the default value
try_overwrite_default = """
Script to dynamically calculate and overwrite the default value.
"""

# DebConf priority for presenting the configuration question
priority = { dynamic = { script = "Script to calculate priority based on conditions" } }

# Store the value as part of the package's configuration
store = true

# Ignore the variable if no value is provided
ignore_empty = true

# Additional field placeholders (structure and conditions)
structure = ["Additional field placeholders"]
conditions = ["Additional field placeholders"]
```

#### summary

- Type: TemplateString
- Example:
  ```toml
  summary = "Directory containing the timechain data"
  ```
  In this example, the "summary" field is used to describe the variable or configuration item as a directory that holds timechain data.

The "summary" field provides a concise and short description of the variable or configuration item it is associated with. It serves as a way to summarize the purpose or content of the variable in a clear and brief manner.

The `summary` field is typically used to provide a quick and informative summary of the variable's purpose or content. It helps users understand the variable's role without needing to read detailed documentation.

#### long_doc

- Type: TemplateString
- Example:
  ```toml
  long_doc = """
  The full path to the directory which will contain timechain data (blocks and chainstate).
  Important: you need around 10GB of free space!
  """
  ```
  In this example, the "long_doc" field offers a detailed explanation of the variable, including its purpose, the type of data it holds, and an important note about the required amount of free space.

The `long_doc` field is used when more extensive documentation is needed to convey detailed information about the variable, helping users understand its significance and usage in-depth.

#### default

- Type: TemplateString
- Example:
  ```toml
  default = "/var/lib/bitcoin-mainnet"
  ```
  In this example, the "default" field sets the default value for the variable to "/var/lib/bitcoin-mainnet."

The `default` field allows you to define a fallback value that will be used when the user does not specify a value for the associated variable or configuration item, ensuring that there is always a value available for the variable.

#### try_overwrite_default

- Type: TemplateString
- Example:
  ```toml
  try_overwrite_default = """
  mem_avail=`grep MemTotal /proc/meminfo | awk '{{print $2}}'` &&
  if [ $mem_avail -lt 1024000 ]; then
     echo -n 450;
  elif [ $mem_avail -lt 2048000 ]; then
     echo -n 512;
  elif [ $mem_avail -lt 4096000 ]; then
     echo -n 1024;
  elif [ $mem_avail -lt 8192000 ]; then
     echo -n 2048;
  else echo -n 4096; fi
  """
  ```
  In this example, the "try_overwrite_default" field contains a script that calculates a memory-based value and attempts to overwrite the default value of the associated variable based on the available system memory.

The `try_overwrite_default` field allows you to specify a script that dynamically calculates a new value for the variable and replaces the default value if the script produces a valid result.

#### priority

- Type: DebConfPriority
- Example:
  ```toml
  priority = { dynamic = { script = "test `df /var | tail -1 | awk '{ print $4; }'` -lt 10000000 && PRIORITY=high || PRIORITY=medium"} }
  ```
  In this example, the "priority" is calculated by a script. If the script condition is met (available disk space in `/var` is less than 10,000,000), the priority is set to "high"; otherwise, it is set to "medium."

The `priority` field allows you to dynamically set the DebConf priority based on specific conditions or calculations, ensuring that the configuration question is presented with the appropriate level of importance and urgency during package management.

#### store

- Type: bool
- Example:
  ```toml
  store = true
  ```
  In this example, the "store" field is set to `true`, indicating that the variable's value should be stored as part of the package's configuration.

The `store` field allows you to specify whether the value of the configuration variable should be retained and stored as part of the package's configuration data. Setting it to `true` ensures that the value is saved, while `false` prevents it from being stored.

#### ignore_empty

- Type: bool
- Example:
  ```toml
  ignore_empty = true
  ```
  In this example, the "ignore_empty" field is set to `true`, indicating that the variable should be ignored if no value is provided during package configuration.

The `ignore_empty` field provides a way to control the behavior of the package when handling configuration variables. Setting it to `true` allows you to skip empty or unspecified variables, while `false` enforces the requirement of a value, even if it is empty.

#### structure

- Type: List of String
- Example:
  ```toml
  summary = "Directory containing the timechain data"
  ```

structure and conditions are not placeholders
structure defines where the field should go in structured files such as json. So
[config.foo.ivar.bar]
structure = "baz"

Will put the value in:
{
"baz": {
"bar": "value here"
}
}

#### conditions

- Type: List of IntervalVarCondition
- Example:

  ```toml

  ```

  ????

### [config.{filename}.hvars.{variable_name}]

Similarly, within the file configuration section, you can define hidden variables (hvars) using `{variable_name}`. These variables are hidden from dpkg-configure and are not meant to be exposed externally.

```toml
# Ignore the variable if no value is provided
[config."{filename}".hvars."{variable_name}"]
ignore_empty = true

# Store the value as part of the package's configuration
store = true

structure = ["Additional field placeholders"]

```

#### ignore_empty

- Type: bool
- Example:
  ```toml
  ignore_empty = true
  ```
  In this example, the "ignore_empty" field is set to `true`, indicating that the variable should be ignored if no value is provided during package configuration.

The `ignore_empty` field provides a way to control the behavior of the package when handling configuration variables. Setting it to `true` allows you to skip empty or unspecified variables, while `false` enforces the requirement of a value, even if it is empty.

#### store

- Type: bool
- Example:
  ```toml
  store = true
  ```
  In this example, the "store" field is set to `true`, indicating that the variable's value should be stored as part of the package's configuration.

The `store` field allows you to specify whether the value of the configuration variable should be retained and stored as part of the package's configuration data. Setting it to `true` ensures that the value is saved, while `false` prevents it from being stored.

#### structure

- Type: List of String
- Example:
  ````toml
  structure = ["Authentication", "macaroonPath"]    ```
  ````

???

### [config.{filename}.evars.{variable_name}]

```toml
-# Name of the external variable
[config."{filename}".evars."{variable_name}"]
name = "External Variable Name"

# Store the value as part of the package's configuration
store = true

# Ignore the variable if no value is provided
ignore_empty = true

# Additional field (structure) for external variables
structure = ["Additional field placeholders"]

```

#### name

- Type: String

#### store

- Type: bool
- Example:
  ```toml
  store = true
  ```
  In this example, the "store" field is set to `true`, indicating that the variable's value should be stored as part of the package's configuration.

The `store` field allows you to specify whether the value of the configuration variable should be retained and stored as part of the package's configuration data. Setting it to `true` ensures that the value is saved, while `false` prevents it from being stored.

#### ignore_empty

- Type: bool
- Example:
  ```toml
  ignore_empty = true
  ```
  In this example, the "ignore_empty" field is set to `true`, indicating that the variable should be ignored if no value is provided during package configuration.

The `ignore_empty` field provides a way to control the behavior of the package when handling configuration variables. Setting it to `true` allows you to skip empty or unspecified variables, while `false` enforces the requirement of a value, even if it is empty.

#### structure

- Type: List of string

???

### [config."null"]

- Explanation: The `[config."null"]` configuration section is a special and unique hack used to define postprocess or preinstall actions that are not associated with a specific file or configuration variable. It allows you to execute custom scripts or commands during the package installation or configuration process. This section can be used to perform tasks that are not directly related to the configuration of files or variables but are still necessary as part of the package's installation or setup.
- Usage: You can define postprocess or preinstall actions within the `[config."null"]` section by specifying the desired commands or scripts. These actions will be executed at the appropriate stage of the package installation or configuration process.
- Example:
  ```toml
  [config."null"]
  postprocess = [
      "echo 'Performing custom post-installation action'",
      "chmod +x /path/to/script.sh",
      "/path/to/script.sh --option value",
  ]
  ```
  In this example, the `[config."null"]` section defines a `postprocess` action that includes multiple commands to be executed as part of a custom post-installation action.

The `[config."null"]` configuration section is a flexible and powerful feature that allows you to extend package configuration beyond file-related settings and configuration variables, enabling custom actions and scripts as needed.

## [map_variant.{variable_name}]

The `[map_variant.{variable_name}]` configuration section is used to define variable values that are specific to different variants of a package or configuration. Variants are identified by their names (e.g., `mainnet`, `regtest`) and are typically represented using the `@variant` placeholder. This section allows you to map values to specific variants, ensuring that the correct value is used depending on the active variant during package configuration.

- Usage: Within the `[map_variant.{variable_name}]` section, you can specify the values for different variants using variant names as keys and their respective values as values. This allows you to configure variables differently based on the active variant.
- Example:
  ```toml
  [map_variant.mainnet_enabled]
  mainnet = "1"
  regtest = "0"
  ```
  In this example, the `[map_variant.mainnet_enabled]` section defines two mappings for the `mainnet` and `regtest` variants. When the package is configured with the `mainnet` variant, the variable `mainnet_enabled` will have a value of `"1"`. Conversely, when the `regtest` variant is active, the value will be `"0"`.
- Additional Details: This configuration section is particularly useful when dealing with variant-specific settings or behaviors. It allows you to customize package configuration based on the specific variant being used, ensuring that variables have the appropriate values for each variant.

The `[map_variant.{variable_name}]` configuration section provides a way to tailor variable values to different package variants, enhancing flexibility and customization in your package configurations.

## [alternatives.{filename}]

Explanation: The `[alternatives.{filename}]` configuration section is used to define alternatives for files in a package. Alternatives allow multiple packages to provide the same functionality (e.g., command-line tools) while enabling users to select the preferred implementation. This section specifies details for the alternatives, including the name, destination, and priority.

- Usage: Within the `` section, you can define the following attributes:
  - `name`: Specifies the name of the alternative. This is the name that users will use to select the alternative.
  - `dest`: Defines the destination path where the alternative will be installed. This is typically a symbolic link to the actual file.
  - `priority`: Assigns a priority value to the alternative. Alternatives with higher priority values are considered more preferred.
- Example:
  ```toml
  [alternatives."/usr/share/lncli/xlncli"]
  name = "lncli"
  dest = "/usr/bin/lncli"
  priority = 100
  ```
  In this example, an alternative named "lncli" is defined for the file located at "/usr/share/lncli/xlncli". The alternative will be installed at "/usr/bin/lncli" with a priority of 100.
- Additional Details: Alternatives are commonly used to manage interchangeable components or commands within a package. Users can choose their preferred alternative using system-level commands like `update-alternatives` on Debian-based systems. The priority value helps determine which alternative is the default when multiple options are available.

The `[alternatives.{filename}]` configuration section provides a way to manage alternative implementations of files or commands, enhancing flexibility and user choice in package installations.

## [[plug]]

The `[[plug]]` configuration section is used to define external scripts or commands that can be executed as part of package installation or removal. These scripts are referred to as "plugs" and provide a way to perform custom actions during package management processes.

- Usage: Within each `[[plug]]` section, you can define the following attributes:
  - `run_as_user` (optional): Specifies the user under which the plug should be executed. If not provided, the plug will run with the default user permissions.
  - `register_cmd`: Defines the command or script to execute when registering the plug during package installation. This command is typically used to set up or configure the plug.
  - `unregister_cmd`: Specifies the command or script to execute when unregistering or removing the plug during package removal. This command is used to clean up or deactivate the plug.
- Example:
  ```toml
  [[plug]]
  run_as_user = "root"
  register_cmd = ["/usr/share/lnd-auto-unlock/set.sh", "{variant}"]
  unregister_cmd = ["rm", "-f", "/var/lib/lnd-system-{variant}/.auto_unlock"]
  ```
  In this example, a plug is defined with the following details:
  - It is executed as the "root" user.
  - The `register_cmd` command runs the script "/usr/share/lnd-auto-unlock/set.sh" with the "{variant}" parameter during package installation.
  - The `unregister_cmd` command removes the "/var/lib/lnd-system-{variant}/.auto_unlock" file during package removal.
- Additional Details: The `[[plug]]` configuration sections are commonly used to integrate external scripts or commands into package management workflows. These scripts can perform various tasks such as configuration, initialization, or cleanup specific to the package's functionality.

The `[[plug]]` section offers flexibility for package maintainers to extend and customize package management actions by executing external scripts or commands at specific points in the installation or removal process.

## [databases.{databasename}]

The `[databases.{databasename}]` configuration section is used to define a specific database connection configuration for a database system with the given `{databasename}`. This configuration allows you to specify the connection details, such as the host, port, user, password, and database name, needed to establish a connection to the database.

- Type: TemplateString
- Usage: To define a database connection configuration for a specific database system, you should create a `[databases.{databasename}]` section, where `{databasename}` is a placeholder for the actual name of the database system (e.g., `[databases.mysql]`, `[databases.postgresql]`). Within this section, you can define the following fields:
  - `template`: A string field that represents the connection string template. This template can contain placeholders for various connection parameters that will be replaced with actual values when connecting to the database.
- Example:
  ```toml
  [databases.postgresql]
  template = """
  postgresql://_DB_USER_:_DB_PASSWORD_@_DB_HOST_:_DB_PORT_/_DB_NAME_
  """
  ```
  In this example, a configuration for a PostgreSQL database connection is defined using the `[databases.postgresql]` section. The `template` field specifies the connection string template, which includes placeholders such as `_DB_USER_`, `_DB_PASSWORD_`, `_DB_HOST_`, `_DB_PORT_`, and `_DB_NAME_`.
- Additional Details: The `[databases.{databasename}]` configuration sections allow you to organize and manage database connection configurations for different database systems within your TOML configuration file. Each section corresponds to a specific database system, and the provided `template` defines how the connection string should be formatted.

  By using these configuration sections, you can ensure that your application can easily switch between different databases or database providers by referencing the appropriate `[databases.{databasename}]` section, which provides the necessary connection details. This approach simplifies database configuration management and enhances the portability of your application across different database systems.

## [migrations.{version_number}]

The `[migrations]` configuration section is used to define migration scripts that need to be executed when specific conditions or versions of a package or application are met during the upgrade or installation process. These migration scripts typically handle tasks like data migration, configuration updates, or cleanup operations.

- Usage: To define a migration script, you should create a `[migrations."<< version"]` section, where `version` is a placeholder for the specific package version to which the migration script applies. You can define multiple `[migrations]` sections with different versions to handle various migration scenarios. Within each `[migrations."<< version"]` section, you can define the following fields:
  - `config` (Optional): A string field containing the migration script that needs to be executed. This script can include shell commands or instructions to perform specific migration tasks. You can use shell scripting syntax to define the migration logic.
  - `preinst` (Optional): A string field that defines a migration script to be executed before the package is installed or upgraded. This script can handle any pre-installation tasks or checks required for the migration.
  - `postinst` (Optional): A string field that defines a migration script to be executed after the package is installed or upgraded. This script can perform post-installation tasks, configuration updates, or data migration.
  - `prerm` (Optional): A string field that defines a migration script to be executed before the package is removed or downgraded. This script can handle any pre-removal cleanup or data backup tasks.
  - `postrm` (Optional): A string field that defines a migration script to be executed after the package is removed or downgraded. This script can perform post-removal cleanup or data archiving tasks.
  - `preinst_finish` (Optional): A string field that defines a migration script to be executed after the package installation process is completed but before the package is configured. This script can handle any additional setup or checks needed.
  - `postinst_finish` (Optional): A string field that defines a migration script to be executed after the package installation process is completed and the package is configured. This script can perform final configuration or cleanup tasks.
- Example:

  ```toml
  [migrations."<< 0.10.1-2"]
  postinst_finish = """
  rm -rf /var/lib/ridetheln-system/sso
  """
  ```

  In this example, a migration script is defined for the version "0.10.1-2." The `postinst_finish` field specifies a script that removes a specific directory (`/var/lib/ridetheln-system/sso`) as part of the post-installation finish process.

  ```toml
  [migrations."<< 0.9.9-1"]
  config = """
  db_get electrs-{variant}/verbose || RET="2"
  if [ "$RET" -eq 0 ];
  then
  \tlog_filters=error
  elif [ "$RET" -eq 1 ];
  then
  \tlog_filters=warn
  elif [ "$RET" -eq 2 ];
  then
  \tlog_filters=info
  else
  \tlog_filters=debug
  fi
  \techo "Migrating verbose level $RET to log_filters=$log_filters" >&2
  \tdb_set electrs-{variant}/log_filters "$log_filters"
  \tdb_fset electrs-{variant}/log_filters seen false || true
  """
  ```

  In this example, a migration script is defined for the version "0.9.9-1." The `config` field specifies a script that checks a database value (`electrs-{variant}/verbose`) and updates another database value (`electrs-{variant}/log_filters`) based on the retrieved value. This script handles the migration of verbose levels to log filters during the upgrade process.

- Additional Details: The `[migrations]` configuration section allows you to automate migration tasks when packages or applications are upgraded or installed. By defining migration scripts for specific versions or conditions, you can ensure that your system transitions smoothly and performs any necessary data migration or configuration updates during package management operations.
