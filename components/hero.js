import Image from 'next/image';
import classes from './hero.module.css';

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/aram.jpg" alt="Aram" height={300} width={300} />
      </div>
      <h1>Hi, I'm Aram</h1>
      <p>A blog about front-end development</p>
    </section>
  )
}
