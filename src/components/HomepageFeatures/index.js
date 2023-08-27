import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Herramienta',
    Svg: require('@site/static/img/godot.svg').default,
    link: (
      <></>
    ),
    description: (
      <>
        CaveBot Rescue fue desarrollado con Godot, una herramienta de desarrollo de videojuegos 2D y 3D. 
      </>
    ),
  },
  {
    title: 'Trailer',
    Svg: require('@site/static/img/gatitosIntro.svg').default,
    link: (
      <>
        <a href='https://github.com/Lizz25/vdProyecto2P'>Aquí.</a>
      </>
      
    ),
    description: (
      <>
        Conoce la historia detras de CaveBot Rescue. 
      </>
    ),
  },
  {
    title: 'Demo',
    Svg: require('@site/static/img/botFinal.svg').default,
    link: (
      <></>
    ),
    description: (
      <>
        Conoce nuestro juego y diviertete con Cavebot Rescue.
      </>
    ),
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p> 
        <p>{link}</p>
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
