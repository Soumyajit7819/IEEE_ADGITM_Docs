import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Embedded Systems',
    Svg: require('../../static/img/PCB3.svg').default,
    description: (
      <>
        An Embedded System is a microprocessor or microcontroller-based system which is
        based on the combination of hardware and software, designed for a specific function.
      </>
    ),
  },
  {
    title: 'Internet of Things',
    Svg: require('../../static/img/PCB2.svg').default,
    description: (
      <>
        The Internet of things (IoT) describes physical objects that are embedded with sensors, 
        processing ability, software, and other technologies that connect and exchange data with
        other devices and systems over the Internet 
      </>
    ),
  },
  {
    title: 'Advanced',
    Svg: require('../../static/img/PCB1.svg').default,
    description: (
      <>
        In this docs we will also learn about the trending technologies like LoraWAN, Verilog,
        Tiny ML and many more. New content would keep on adding in this docs.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
