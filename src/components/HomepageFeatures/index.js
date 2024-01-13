import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Zuhause der Zukunft',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Entdecke die unendlichen Möglichkeiten der Vernetzung und Automatisierung in deinem Zuhause. Tritt unserer Community bei und lass dich von den innovativen Ideen und Projekten inspirieren.
      </>
    ),
  },
  {
    title: 'Energie der Gemeinschaft',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Erlebe, wie deine Leidenschaft für Smarthome und Balkonkraftwerke eine neue Ära der Energieunabhängigkeit einläutet. Teile deine Erfahrungen und lerne von den Besten.
      </>
    ),
  },
  {
    title: 'Smartes Miteinander',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Dein Beitrag zählt! Verbinde dich mit Gleichgesinnten, tausche dich aus und bringe deine Projekte auf die nächste Ebene. Gemeinsam machen wir den Unterschied.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
