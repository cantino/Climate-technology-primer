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

      <main className={styles.main} id='main'>
      <script src="https://unpkg.com/@curvenote/article"></script>

        <Nav></Nav>
        <div>
          <article>
          <section>
            <h1 >Section 1: intro</h1>
              
            <p>
            
            This first section aims to give an outsider’s summary of the basics of the physics/chemistry/biology of the climate system. 
            Firstly by looking at some basic numbers, things like radiation balance and feedback effects. I then have a look at where 
            emissions are coming from with some BoTE looks at a few popular policy ideas as well as some levers we could pull to 
            accelerate emissions reductions. I take a look at some of the potential impacts of the path we’re on, 
            importantly including tipping points. I’ll end with some of my overarching takeaways.
            
            <br></br><br></br>
            

            <Collapsible trigger="I mentioned that these posts have a focus on back of the envelope calculations and the main reasons for this are that being comfortable with this kind of skill can be an incredibly useful sanity checker for different policies/proposals. Is what you’re hearing definitely crazy or might it just be possible? You’ll hopefully find that knowing a few climate related facts and formulas can take you a surprisingly long way when evaluating questions like: ">
            <p>
              <ul>
                <li>
                How can I estimate the world’s remaining carbon budget for various levels of warming? What are the uncertainties in this?
                </li>
                <li>
                What would happen if Greenland melted?
                </li>
                <li>
                What are the fundamental physical limits on, say, the potential for sucking carbon dioxide out of the atmosphere? How low could the cost theoretically go?
                </li>
                <li>
                How many trees would you need to plant, and are you going to run out of water, land or fertilizer for them?
                </li>
                <li>
                If we did manage to remove a given amount of CO2, how would the climate respond? How would the climate respond if we magically ceased all emissions today?
                </li>
                <li>
                What would be the real impact if we could electrify all cars?
                </li>
                <li>
                Are batteries going to be able to store all the variable renewable energy we’ll need? Is there enough Uranium obtainable to power the world with nuclear? Order of magnitude, how much would it cost to just replace our entire energy supply with nuclear?
                </li>
              </ul>
            </p>
            </Collapsible>
            <br></br><br></br>
            </p>

          
          </section>
          </article>
        </div>    
        <div class="footer">
        <p style={{fontSize: '5rem'}}><a href="../">&#8678;</a> &nbsp; <a href="../section_1/1.1">&#8680;</a></p>
        </div> 


      </main>

    </div>
  )
}
