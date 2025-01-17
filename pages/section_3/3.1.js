import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Nav from '../../components/nav'
import sidebar from '../../components/sidebar'
import Collapsible from 'react-collapsible';
import Latex from 'react-latex-next'
import Script from 'next/script'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <main className={styles.main}>
      <script src="https://unpkg.com/@curvenote/article"></script>

        <Nav></Nav>
        <div>
          <article>
          <section >
            <h1 >Existing interventions</h1>
              
            <p>
            Actually interfering with the climate is not necessarily a new thing, some of the approaches mentioned in this piece are and we’ll discuss why that’s important, but I was still surprised by just how many places were already tinkering with the climate. 
            <br></br><br></br>
            Most of our current interventions have to do with either trying to increase or decrease rain in certain areas. 
            <br></br><br></br>
            China currently has the world's largest rainmaking program where they do things like shoot silver iodine into the sky to induce gathered clouds to rain down. If this program scales to plan it will be potentially large enough to have global weather modification effects and may affect atmospheric circulation.
            <br></br><br></br>
            It is not just China though, <a href="https://www.thejakartapost.com/news/2020/05/28/indonesia-starts-cloud-seeding-to-keep-forest-fires-at-bay.html">Indonesia</a> have tried injecting particles into clouds offshore to try to get them to rain before getting to land and causing floods. Colorado is also using similar methods to try to increase their snowpack. 
            <br></br><br></br>
            The UAE is trying something slightly different, the approaches above focus on stimulating rain from pre existing clouds whereas they are trying to induce cloud formation in the first place. They have a $400 million fund and have 
            <label for="mn-demo" class="margin-toggle">&#8853;</label>
			<input type="checkbox" id="mn-demo" class="margin-toggle"/>
			<span class="marginnote" id="id_option">
            ¹ <a href="https://wired.me/science/environment/cloud-seeding-uae-dubai-rain-floods/">In some cases</a> maybe too much progress
			</span> 

            been making progress¹. 

            <br></br><br></br>
            </p>

          </section>
          </article>
        </div>  
        <div class="footer">
        <p style={{fontSize: '5rem'}}><a href="../section_3/3.0">&#8678;</a> &nbsp; <a href="../section_3/3.2">&#8680;</a></p>
        </div> 
  

      </main>

    </div>
  )
}
