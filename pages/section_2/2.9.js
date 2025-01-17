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
            <h1 >macro-algae</h1>
            <p>
            <label for="mn-demo" class="margin-toggle">&#8853;</label>
			<input type="checkbox" id="mn-demo" class="margin-toggle"/>
			<span class="marginnote" id="id_option">
            "The committee’s focus on sequestration in terrestrial and nearshore/coastal environments is not intended to undervalue the potential of technologies or practices for oceanic sequestration, but instead is a response to the Statement of Task"
			<br></br><br></br>
            "Land use and management practices that increase the carbon stored in living plants or sediments in mangroves, tidal marshlands, seagrass beds, and other tidal or salt-water wetlands"
            </span> 

            The National Academies report mostly <a href="https://www.nap.edu/read/25259/chapter/3#40">doesn’t</a> consider ocean options
            but it devotes an entire <a href="https://www.nap.edu/read/25259/chapter/4">chapter</a> to research recommendations for Coastal Blue Carbon. These approaches are sometimes called “blue carbon” even though they refer to coastal ecosystems instead of the open ocean.” Unfortunately due to the limited coastal area where this is applicable the total additional sequestration capacity appears very low — but see below re Kelp and possibly open ocean variants.

            </p>

            <h2>Coastal Blue Carbon</h2>
            <p>
            They note some advantages of Coastal Blue Carbon, such as very low cost: “Although their potential for removing carbon is lower than other negative emissions technologies, coastal blue carbon approaches warrant continued exploration and support. The cost of the carbon removal is low or zero because investments in many coastal blue carbon projects target other benefits such as ecosystem services and coastal adaptation. If projects are implemented for purposes other than or in addition to carbon removal, then costs are reduced to the incremental cost of monitoring coastal carbon removal. 
            <br></br><br></br>
            Such costs approximate $0.75/t CO2 for tidal wetlands and $4/t CO2 for seagrass meadows for all coastal blue carbon approaches, except those augmented with carbon-rich materials (estimated at $1-30/t CO2) depending on the material and construction method used.”
            <br></br><br></br>
            They also note the need for more fundamental research: “Understanding of the impacts of sea-level rise, coastal management, and other climate impacts on future uptake rates should be improved… many of the critical processes that govern carbon burial and sequestration in coastal ecosystems lack a mechanistic understanding of how they may change under high rates of sea-level rise and other direct and indirect impacts of climate change, and few studies have been performed on transgression of coastal wetlands inland”.

            </p>

            <h2>Sea Grass</h2>
            <p>
            A Salk Institute team, meanwhile, is <a href="https://www.salk.edu/wp-content/uploads/2017/11/Harnessing-Plants.pdf">working</a> on increasing coastal sea-grass carbon sequestration through selective breeding: “Certain varieties of seagrass have greater carbon storage capacity… If this trait was bred into other varieties of grasses, we could sequester far more carbon in coastal ecosystems.” This is also an important environmental restoration project relevant to the food supply (fish catch), “Coastal seagrass beds store nearly twice as much carbon per acre as terrestrial forests and account for about 10 percent of the carbon stored in the ocean. Unfortunately, due to dredging and pollution, seagrass ecosystems are seriously threatened around the world. About 1.5 percent of these ecosystems disappear each year. Changing water temperatures due to global warming accelerates this decline.” Alas, the limited areal extent of coastal sea-grasses may limit the scaling potential of this approach.

            </p>

            <h2>Macro-algae</h2>
            <p>
            What about Kelp / seaweed / macro-algae? The NAS report has a brief appendix on this: 
            <label for="mn-demo" class="margin-toggle">&#8853;</label>
			<input type="checkbox" id="mn-demo" class="margin-toggle"/>
			<span class="marginnote" id="id_option">
            <br></br><br></br>
            Their 173 TgC/y is only about 0.6 GigaTonne/year, though.
            <br></br><br></br>
            [EXPLAIN WHAT NPP IS]
			</span> 

            </p>
            <blockquote>
				<p>
                An estimated 82 percent of kelp productivity becomes detritus (<a href="https://www.nap.edu/read/25259/chapter/13#backmatter03_ref393">Krumhansl and Scheibling, 2012</a>). <b>Carbon sequestration can thus only occur if carbon is buried in sediments or exported into the deep ocean</b> and sequestered long term. Most carbon from macroalgae is assumed to return to the carbon cycle through herbivory and thus extensive study on its carbon storage rate and capacity has not been conducted (<a href="https://www.nap.edu/read/25259/chapter/13#backmatter03_ref304">Howard et al., 2017</a>). <a href="https://royalsocietypublishing.org/doi/10.1098/rsbl.2018.0236">Krause-Jensen and Duarte (2016)</a> have synthesized data from studies of macroalgae transport and occurrence in the deep ocean to develop a rough estimate for macroalgae’s carbon removal potential. They identified potential opportunities for carbon storage through burial within the algal beds, burial in the continental shelf, export to below the mixed ocean layer, and export to the deep sea. Using an approximate global <a href="https://carboninstitute.org/kelp-and-carbon-sequestration-bringing-terrestrial-carbon-accounting-to-the-deep-sea/">net primary production</a> (NPP) of 1,521 TgC/y, <b>they estimate that macrolagae may be sequestering 173 TgC/y, or a removal rate of 11 percent per year</b>. Most of this is assumed to be sequestered in the deep ocean.“
				</p>
			</blockquote>
            <p>
                <b>Ocean Macroalgal Afforestation</b>
                <br></br><br></br>
                But what if people deliberately made massive kelp farms out in the open ocean and vastly increased the total area of kelp forest, and also tried to ensure that the sequestered carbon from these open ocean farms indeed reached the deep ocean for ~permanent storage?
                <br></br><br></br>
                <label for="mn-demo" class="margin-toggle">&#8853;</label>
                <input type="checkbox" id="mn-demo" class="margin-toggle"/>
                <span class="marginnote" id="id_option">
            We also talked about what Running Tide was doing with sinking kelp farms in section <a href="../section_2/2.7">2.7</a>
                </span> 

                A <a href="https://www.semanticscholar.org/paper/Negative-carbon-via-Ocean-Afforestation-N%E2%80%99Yeurt-Chynoweth/9fac691b576e8ce5ddf0c0fa0eabf07c758dddb2">2012 paper</a> proposes this. They study a scenario where 9% of the open ocean is covered with farmed kelp forests. They propose to use the kelp thus grown for biomethane production in a kind of ocean-based BECCS scheme, to recycle nutrients from the kelp as a form of fertilization, and to also use this to increase fish catch. They end up with a figure of around 53Gt of potential CO₂ removal per year which seems startlingly high. 
                <br></br><br></br>
                <a href="https://theconversation.com/how-farming-giant-seaweed-can-feed-fish-and-fix-the-climate-81761">This article</a> covers more. As mentioned earlier, nutrient upwelling with wave driven pumps is one potential way to feed such open ocean kelp forests with sufficient nutrients: 
                <label for="mn-demo" class="margin-toggle">&#8853;</label>
                <input type="checkbox" id="mn-demo" class="margin-toggle"/>
                <span class="marginnote" id="id_option">
                More on this <a href="https://www.technologyreview.com/2021/09/19/1035889/kelp-carbon-removal-seaweed-sinking-climate-change/amp/?__twitter_impression=true">here</a>
                </span> 

                “These floating platforms use wave energy to restore nutrient upwelling to pre- global warming levels. While the nutrients encourage plankton and kelp growth, the platform provides a structure onto which kelp will attach. In essence, this forms a mini-ecosystem. The kelp forest will provide habitat for forage fish, who will feed off the replenished plankton. Game fish will, in turn, eat these forage fish, and on up the food chain to tuna and sharks. What was once an aquatic desert will thrive with life.”

            </p>

            
            <h2>Azolla</h2>
            <p>
            We shouldn’t forget about <a href="https://www.scientificamerican.com/article/can-the-fern-that-cooled-the-planet-do-it-again/">Azolla</a> and other <a href="http://www.climatefoundation.org/azolla.html">fast growing ocean plants</a>, i.e., the ones that possibly once <a href="https://www.scientificamerican.com/article/can-the-fern-that-cooled-the-planet-do-it-again/">caused an ice age</a> through their growth.
            <br></br><br></br>
            <label for="mn-demo" class="margin-toggle">&#8853;</label>
			<input type="checkbox" id="mn-demo" class="margin-toggle"/>
			<span class="marginnote" id="id_option">
            Of course, many plants get their nitrogen availability from nitrogen fixing microbes, e.g., in the soil, or <a href="https://www.sciencedaily.com/releases/2013/07/130725125024.htm">inside</a> roots themselves, which fix nitrogen from the air, but the tightly optimized 1-1 relationship here seems special.

			</span> 

            The Azolla system is reported to be able to double its biomass in &lt;2 days. It does this in part by drawing nitrogen from the atmosphere. The Climate Foundation <a href="http://www.climatefoundation.org/azolla.html">website</a> states “Azolla can remove 6 tonnes per acre per year of carbon (1.5 kg/m²/yr)” and another website gives a similar number
            <label for="mn-demo" class="margin-toggle">&#8853;</label>
			<input type="checkbox" id="mn-demo" class="margin-toggle"/>
			<span class="marginnote" id="id_option">
            As a point of comparison, Y Combinator in its ocean cyanobacterial project example, <a href="http://carbon.ycombinator.com/ocean-phytoplankton/">states</a> “We will be conservative and say that our algal beds fix 2.5 kg of C per square meter per year“.
			</span> 

            This works out to just 7 million square kilometers to remove 200 GigaTonnes of carbon (recall the Lawrence paper’s reference value of 177 Gt Carbon) in 20 years, which is half the area of the Arctic Ocean.
            <br></br><br></br>
            Alas, Azolla likes fresh water, which, during the Azolla Event, <a href="https://www.reddit.com/r/todayilearned/comments/3dojw4/til_there_is_a_fern_that_has_such_a_high_level_of/">apparently</a> <a href="https://www.nature.com/articles/nature04692">formed</a> a slick, floating on top of Arctic Ocean salt water; moreover, one needs the right chemical and ecological conditions for the sinking organic material to be long-term sequestered rather than rapidly consumed, for example, by oxidative respiration, regenerating CO2.

            <br></br><br></br>
            </p>

          </section>
          </article>
        </div>    
        <div class="footer">
        <p style={{fontSize: '5rem'}}><a href="../section_2/2.9">&#8678;</a> &nbsp; <a href="../section_2/2.10">&#8680;</a></p>
        </div> 


      </main>

    </div>
  )
}
