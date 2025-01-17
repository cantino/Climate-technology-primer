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
            <h1 >Space based sun-shades</h1>
              
            <p>
            Somewhat less attention has been paid to option #3 above, a space-based sun-shade. The most popular version of the idea
            <label for="mn-demo" class="margin-toggle">&#8853;</label>
			<input type="checkbox" id="mn-demo" class="margin-toggle"/>
			<span class="marginnote" id="id_option">
            Although to be clear, no version of this idea is particularly popular
			</span> 
 
            appears to be a version by Roger Angel proposing to deliver sun shades to the 
            <label for="mn-demo" class="margin-toggle">&#8853;</label>
			<input type="checkbox" id="mn-demo" class="margin-toggle"/>
			<span class="marginnote" id="id_option">
            Did you know that we have a spacecraft <a href="https://sohowww.nascom.nasa.gov/about/orbit.html">at L1</a> already.
            <br></br>
            <div style={{textAlign: 'center'}}>
            <Image src='/img/sec3/3_l1.jpeg' alt="diagram of L1 orbit point" width="500px" height="400px"/>
            </div>
			</span> 
            L1 Lagrange Point, a point which remains at a constant relative position in between the Earth and Sun as they orbit. Angel’s paper proposes three things:
            <br></br><br></br>
            <ol>
                <li>
                “First is an optical design for a very thin refractive screen with low reflectivity, leading to a total sunshade mass of 20 million tons.” 

                </li>
                <li>
                “Second is a concept aimed at reducing transportation cost to $50/kg by using electromagnetic acceleration to escape Earth’s gravity, followed by ion propulsion.” (Hmm…)

                </li>
                <li>
                “Third is an implementation of the sunshade as a cloud of many spacecraft, autonomously stabilized by modulating solar radiation pressure.”

                </li>

            </ol>

            </p>
            <p>
            There are some obvious and enormous practicality issues:
            <ol>
                <li>
                Why “low reflectivity” and why would it need to be “stabilized”? Apparently in part because solar radiation exerts a radiation pressure on the spacecraft, which tends to push them away from the sun, and in part because orbits around L1 are inherently radially unstable.

                </li>
                <li>
                “Very thin” means &lt;1 micron thick, significantly complicating fabrication and deployment as far as I can tell, e.g., can films much thinner than saran wrap really survive the environment of space? It turns out that this range of thickness is widely considered in the solar sail literature. Not that this makes it easy.

                </li>
                <li>
                In total, the sunshade would need to be a couple of thousand kilometers on a side. That would take a long time to assemble.

                </li>
                
            </ol>
            </p>
            <p>
            How do the costs then work out? SpaceX’s proposed/forecast launch costs to low-Earth orbit using the BFR rocket are $100/kg. So if the refractive screen weighs 20 million tons as proposed, the launch cost would be 2e7 tons * 1e2 $/kg  = 2 trillion dollars, which is hefty. Angel’s novel electromagnetic launcher concept helps but the cost is still at best above $100 billion.
            <br></br><br></br>
            Interestingly, the earlier <a href="https://pdfs.semanticscholar.org/da74/16d80a952c5713380de2264aded5eca8c82a.pdf">paper</a> with Lowell Wood proposes a potentially lower-cost variant:
            <br></br><br></br>
            <label for="mn-demo" class="margin-toggle">&#8853;</label>
			<input type="checkbox" id="mn-demo" class="margin-toggle"/>
			<span class="marginnote" id="id_option">
            Now, 1e14 grams = 1e8 tons, which is similar to the 2e7 tons for the Roger Angel proposal. But the Teller/Wood/Hyde proposal suggests 1e5 smaller mass requirement than that: see footnotes 23, 24 and 25 in that paper. So that seems more economically feasible, though I am wondering about the challenges in actually building and maintaining such a system in space.

			</span> 

        <div style={{textAlign: 'center'}}> 
        <Image src='/img/sec3/3_footnote.png' alt="some text about sun shades" width="500px" height="400px"/>
        </div>
            <br></br><br></br>
            The other idea mentioned in the above footnote is using lunar regolith as a construction material, which has a much shallower gravity well to escape versus stuff launched from Earth; granted, this approach requires moon mining and manufacturing machines, probably with regolith-to-fuel processing powered by photovoltaics, and ferry rockets!

            <br></br><br></br>
            Clearly, we’d need to massively up our game in space technology to make something like this work. Reminds me of Jeff Bezos saying “<a href="https://www.recode.net/2016/6/1/11826514/jeff-bezos-space-save-earth">We Have to Go to Space to Save Earth</a>“, although this is not the context in which he meant it. A long shot at best, to be sure.
            <br></br><br></br>
            The National Academies <a href="https://www.nap.edu/read/18988/chapter/5#127">report</a> on solar radiation management concluded:

            </p>
            <blockquote>
				<p>
                “…these ideas require the ability to manufacture in space, making them impractical at the current time. Overall, the committee has chosen to not consider these technologies because of the substantial time (&gt;20 years), cost (trillions of dollars), and technology challenges associated with these issues (GAO, 2011; The Royal Society, 2009).”

				</p>
			</blockquote>
            <p>
            But perhaps this hasn’t been studied to its absolute logical limit — for instance, there are other <a href="http://www.niac.usra.edu/files/library/meetings/fellows/mar07/1314Crowe.pdf">cool</a> <a href="https://pdfs.semanticscholar.org/44b5/f3ec56ba36481d41ea562d3f23bac6d717de.pdf?_ga=2.30784125.335461148.1549357238-1626053982.1549037200">ideas</a> for reducing mass.
            <br></br><br></br>
            </p>


          </section>
          </article>
        </div>    
        <div class="footer">
        <p style={{fontSize: '5rem'}}><a href="../section_3/3.3">&#8678;</a> &nbsp; <a href="../section_3/3.5">&#8680;</a></p>
        </div> 

      </main>

    </div>
  )
}
