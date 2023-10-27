# Types

## String

## Bool

## TemplateString

**Defining a TemplateString:**

In your TOML configuration file, a `TemplateString` can be defined as a string value enclosed in double (`"`) or triple (`"""`) quotes. Triple quotes are employed for multi-line strings. Placeholders for variables are included using curly braces `{}`.

**Using TemplateString in Configuration:**

To utilize the `TemplateString` in your configuration, reference it by its assigned name (e.g., "template") and incorporate variable values where required using the `{variable_name}` format.

**Example:**

```toml
message = "This is a {variable} template."
```

In this example, the `message` field makes use of the `TemplateString` defined earlier, and the variable value, "customized," replaces `{variable}` within the resulting message.

## Confdir

The ConfDir struct represents configuration directory settings and can be used within a TOML file to specify configuration directory attributes. Below is the documentation for the ConfDir struct:

```toml

# ConfDir Struct in TOML Configuration

# The `ConfDir` struct is used to define configuration directory attributes.
# It specifies the parameters and name of the configuration directory.

# Example short usage:
conf_d = { param = "--conf-dir", name = "my_config" }
```

In the above TOML documentation:

The ConfDir struct is explained as a way to define configuration directory attributes.
It includes two required fields:

- param: Specifies the parameter used to set the configuration directory. This parameter indicates the path or location of the configuration directory.
- name: Specifies the name of the configuration directory, which is typically a user-defined identifier.
  An example usage is provided to illustrate how to use the ConfDir struct within a TOML configuration file

## ConfParam

The `ConfParam` enum provides a way to define different types of configuration parametersin a TOML configuration file. It is designed to help you format configuration parameters correctly.

```toml

# Usage Examples:

# To specify a configuration parameter with a value separated by a space, you can simply provide the parameter followed by the value.
# Example:
# conf_param = "--config /etc/my_config.conf"
conf_param = "--config /etc/my_config.conf"

# To specify a configuration parameter with a value without spaces, use an equals sign (=) to separate the parameter and its value.
# Example:
# conf_param = "--port=8080"
conf_param = "--port=8080"

# For a bare configuration parameter without a value, you can directly provide the parameter itself.
# Example:
# conf_param = "--verbose"
conf_param = "--verbose"

```

## UserSpec

```toml
# User Configuration Example

# Short usage
user = { group = true, create = { home = false } }
```

#### ExtraGroup

```toml
# Extra Group Configuration

# The `ExtraGroup` struct is used to configure additional user groups in a TOML configuration file.

[extra_group]
create = true
# Short Usage Example:

# To configure an extra group, you can use the short syntax by directly specifying the `create` field with a boolean value.
# Set `create` to `true` to create the extra group, or `false` to skip its creation.

# Example:
extra_group = { create = true }

```

## VPackageName

TODO

## FileVar

File vars are whole files that are loaded as a variable. They are mainly intended for json configuration. So other packages can place sub-objects in separate files that get added to the rest of the json under specified field when generating the final configuration in postinst
