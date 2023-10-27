import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Complex Debian Package Generation",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Debcrafter crafts complex Debian packages from rich specification files.
        PPackage generation can significantly simplify the process of creating
        Debian packages, especially for those who need to package multiple
        packages that work together seamlessly.
      </>
    ),
  },
  {
    title: "Package Specification",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Debcrafter allows you to define package specifications in a structured
        format, including information about service packages, configuration
        extensions, and base packages. This feature makes it easier to ensure
        that packages are correctly configured and interconnected.
      </>
    ),
  },
  {
    title: "Extensive Configuration Options",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Debcrafter provides various configuration options for package
        specification, including support for different configuration file
        formats (plain, Toml, Yaml, Json), setting correct ownership and
        permissions, creating configuration extension packages, and specifying
        package dependencies.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
