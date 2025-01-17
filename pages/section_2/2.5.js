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
            <h1 >Biological methods - Land</h1>
              
            <p>
            Photosynthetic organisms can sequester carbon. Many sequester most of it only for a short period of time, often less than a year. Others like trees incorporate carbon into their trunks and root systems for potentially centuries or even (consider the beautiful giant sequoia) millennia. Other crops can grab large amounts of carbon quickly from the atmosphere to grow quickly and densely, like in a corn field, but the ecosystem tends to release most of it back in a short time.
            <br></br><br></br>
            To increase biological sequestration, one can: 
            <br></br>
            a) grow more of the organisms that naturally do a good job of sequestration (e.g., trees)
            <br></br>
            b) help existing organisms sequester more, for instance by physically sequestering some of their products (e.g., crop residue capture, bioenergy with carbon capture and storage)
            <br></br>
            c) engineer modified organisms that sequester more. Or, one can do these in some combination. (Is there any other category of biological intervention?) In any case, we’ll consider these in turn. 

            </p>

            <h2>BECCS</h2>
            <p>
            One possibility is to grow plants, burn their biomass as fuels, and capture the outgoing CO2 for long term sequestration. Because plants capture CO2 into their biomass when they photosynthesize, this process removes CO2 from the atmosphere. This is called bioenergy with carbon capture and storage (BECCS).
            <br></br><br></br>
            IPCC scenarios for below 2C of warming are already tending to rely on bioenergy with carbon capture and storage for negative emissions. From the <a href="https://www.nature.com/articles/s41467-018-05938-3">Lawrence paper</a>:

            </p>
            <blockquote>
				<p>
                “High-end estimates for BECCS in the literature involve underlying assumptions such as the use of forestry and agriculture residues <a href="https://www.nature.com/articles/s41467-018-05938-3#ref-CR35">35</a>, the transition to lower meat diets, and the diversion of over half the current nitrogen and phosphate fertilizer inputs to BECCS, resulting in an uptake of ~10 Gt(CO2)/yr by 2050 <a href="https://www.nature.com/articles/s41467-018-05938-3#ref-CR32">32</a>,<a href="https://www.nature.com/articles/s41467-018-05938-3#ref-CR33">33</a>…
				Various factors may reduce this, but it could also increase under the high-end assumptions mentioned above.”

                </p>
			</blockquote>
            <p>
            This <a href="https://www.nature.com/articles/s41558-017-0064-y">paper</a> argues against biomass based capture being ultimately scalable enough based on water use, land use, and similar. This seems to be a key issue. It is possible that BECCS is being overused in some scenarios relative to its scalability and environmental impact, at least without revolutionary-level improvements in the biotechnology of plants. Here is <a href="https://www.carbonbrief.org/beccs-the-story-of-climate-changes-saviour-technology">one take</a> from the NAS on that.

            </p>
            <blockquote>
				<p>
                “The estimated cost of capture and sequestration for BECCS systems that produce electricity is $70/t CO2, which is higher than costs for capture and sequestration from fossil fuel electricity. Although costs for direct air capture and BECCS may decline quickly, they are not currently competitive.”
				</p>
			</blockquote>
            <p>
                <b>Water constraint</b>
                <br></br><br></br>
                <label for="mn-demo" class="margin-toggle">&#8853;</label>
			<input type="checkbox" id="mn-demo" class="margin-toggle"/>
			<span class="marginnote" id="id_option">
            Total world fresh water reserves are 3e16 m^3, but much of it not easily accessible.
            <br></br><br></br>
            In practice today it seems desalinated water with current technology can sometimes be problematic for agriculture, e.g still being too salinate, build up of poisonous elements in the soil, too low mineral content.
			</span> 

                Let’s consider water. Of course, the Earth has a lot of water. Fresh water availability in theory depends on available clean energy for <a href="https://www.technologyreview.com/s/534996/megascale-desalination/">desalination</a>.
                <label for="mn-demo" class="margin-toggle">&#8853;</label>
			<input type="checkbox" id="mn-demo" class="margin-toggle"/>
			<span class="marginnote" id="id_option">
            Even if water use efficiency is <a href="https://link.springer.com/article/10.1023/A:1026141220731">10x better</a>, this is still huge
			</span> 

                Based on thermodynamics it <a href="https://www.forbes.com/sites/quora/2017/09/07/why-desalination-isnt-the-answer-to-the-worlds-water-problems/#57434e864737">takes</a> <a href="http://large.stanford.edu/courses/2014/ph240/hurlbutt1/">about</a> a kWh or more to desalinate a cubic meter of seawater. Assuming a water use <a href="https://res.mdpi.com/agriculture/agriculture-02-00325/article_deploy/agriculture-02-00325.pdf?filename=&attachment=1">efficiency</a> <a href="https://www.mdpi.com/1999-4907/7/12/296">of</a> one CO2 captured per 5000 water molecules used, capturing 650 Gigatonnes of CO2 via biomass growth <a href="http://m.wolframalpha.com/input/?i=5000*%28650+gigatonnes+%2F+%28molar+mass+of+carbon+dioxide%29+*+%28molar+mass+of+water%29+%2F+%28density+of+water%29+to+cubic+meters">requires</a> 1e15 m^3 of water, which if it all came from desalination would take at minimum that many kWh, <a href="http://m.wolframalpha.com/input/?i=1e15+kWh">or</a> 1 million Terawatt hours, 3e21 Joules. That’s more than we needed for chemical CO2 direct air capture in the thermodynamic limit.
                <br></br><br></br>
                So it appears desalination for agriculture for BECCS CO2 capture is not the answer here — the water would need to come from other sources, unless unused water (e.g., evaporated from the leaves) could be recycled and reused very efficiently, or plants with much higher water use efficiencies were used compared to what a quick googling suggested to me (or unless clean energy got *really* cheap).
                <br></br><br></br>
                <b>Land constraint</b>
                <br></br><br></br>
                Land is also an issue. From this article:

            </p>
            <blockquote>
				<p>
                “Although BECCS is relatively cheap and theoretically feasible, the sheer scale at which it operates in the models alarms many researchers. In some future scenarios, BECCS would remove up to a trillion tons of CO2 from the air by the end of the century—about half of what humans have emitted since the start of the Industrial Revolution—and it would supply a third of the globe’s energy needs. <b>Such a feat would require growing bioenergy crops over an area at least as large as India and possibly as big as Australia—half as much land as humans already farm</b>.”

				</p>
			</blockquote>
            <p>
            The National Academies report has the following to say in their <a href="https://www.nap.edu/read/25259/chapter/2#3">summary</a>, and also has a full chapter that covers BECCS in more detail:

            </p>
            <blockquote>
				<p>
                “For example, <b>30 million to 43 million hectares is required to raise BECCS feedstocks per Gt/y CO2 of negative emissions</b>. Thus, 10 Gt/y CO2 of negative emissions from BECCS requires hundreds of millions of hectares of land, which is <b>almost 40 percent of global cropland</b> according to some studies reviewed in IPCC (2014b).”

				</p>
			</blockquote>
            <p>
            Not only are there issues with theoretical land availability but there are other practical issues. Firstly, using solutions that rely on many landowners changing behaviors has not, historically been a very successful strategy. Or, as the NAS report puts it; 

            </p>
            <blockquote>
				<p>
                “Many past programs to induce landowners to change forest, grazing, and cropland management were not successful…” 
				</p>
			</blockquote>
            <p>
            Logistically BECCS also presents issues, if “approximately half  …the 10Gt/y CO₂ globally would be achieved with BECCS fueled exclusively with biomass waste, and would require the collection and delivery of all economically available agricultural, forestry, and municipal waste to a BECCS facility able to use that type of waste”. This would not be easy, especially in countries with less developed public infrastructure. 
            <br></br><br></br>
            The general perceptions of the feasibility of scaling up BECCS type approaches to the requisite level remain mixed at best despite their role in modeling scenarios, e.g., <a href="https://www.sciencemag.org/news/2018/02/vast-bioenergy-plantations-could-stave-climate-change-and-radically-reshape-planet">this article</a> quotes David Keith as saying:

            </p>
            <blockquote>
				<p>
                “If moral hazard is sweeping the problem under the rug, and pushing more of it to future generations, and making it look like you are meeting the targets when you are not… that is for sure what’s happening with BECCS now.”

				</p>
			</blockquote>

            <h2>Trees</h2>
            <p>
            Another possibility is to aggressively grow trees aka “afforestation”. This appears possible but also runs up against potential issues of fertilizers, water use, the widely distributed nature of land ownership, and damage to soil. 
            <br></br><br></br>
            <label for="mn-demo" class="margin-toggle">&#8853;</label>
			<input type="checkbox" id="mn-demo" class="margin-toggle"/>
			<span class="marginnote" id="id_option">
            Some aspects of Dyson’s estimates seem a bit odd, e.g., rather than Sycamore trees, one would likely be looking at Southern Pine and Poplar, which are the commercial species for wood and paper. 50 year tree lifetime also seems long, as growth rates decrease with age and the biomass could be sequestered by other means once growth saturates.

			</span> 

            <a href="https://adamant.typepad.com/seitz/files/Dyson_Energy_1977.pdf">Dyson</a>, back in 1977, gets to a sequestration potential of 3 tons of carbon or ~11 tons of CO2 per acre of new forest per year (≈ 4.5t/ha-yr), meaning we’d need on the order of 4 billion acres — an acre is roughly the size of a football field — to offset our current emission rates (of course we need to bring our emission rates to zero anyway, but this gives a sense of scale). He does note though that  “The availability of fertilizers will probably be the critical factor limiting the scale and speed of carbon fixation.”
            <br></br><br></br>
            Here is another estimate from an early synthesis by <a href="https://www.geoengineeringwatch.org/library/articles%20and%20news%202000-2009/16%20Geoengineering%20David%20Keith%20A%20Serious%20Look%20At%20Geoengineering%201992.pdf">Keith et al</a> on the scale of afforestation we would need: 

            </p>
            <blockquote>
				<p>
                Large-scale afforestation is the geoengineering option most thoroughly treated in the existing literature [Dyson and Marland, 1979; NAS, 1991; OTA, 1991]. Regularly harvested temperate forests capture atmospheric CO2 at a rate of <b>~2 t/ha-yr</b>; intensively cultivated forests of fast-growing trees can capture CO2 3-5 times faster. <b>If one-third of the current forested area (4 x 10⁹ ha) was devoted to intensive sylviculture, then about 10 Gt/yr of CO2 could be sequestered</b>. In order to remove CO2, continuously at this rate, it would be necessary to dispose of the trees so that their carbon could not return to the atmosphere, thus necessitating the removal of tree nutrients from the soil. Intensive fertilization would be required, and its production could be costly [Dyson and Marland, 1979]. A key problem, so far ignored, is the long-term effect of such tree farming on soils. Since it may be argued that soil degradation is a more serious problem than CO2- induced climate change, this is a critical shortcoming of intensive sylviculture for carbon sequestration.

				</p>
			</blockquote>
            <p>
            They come up with roughly some billions to tens of billions of hectares (a hectare is ~2.5 acres) of new forest as the benchmark for carbon removal at the scale of global emissions
            <br></br><br></br>
            <Collapsible trigger="Fertilizers and soil health">
			<p>
            Note also in this context that fertilizer <a href="https://www.pnas.org/content/111/25/9199">is a source</a> of greenhouse gasses in itself. The papers of G. Philip Robertson study greenhouse emissions due to fertilizer in more detail and the net tradeoffs involved, for some <a href="http://www.publish.csiro.au/SR/SR02064">forms</a> of <a href="http://science.sciencemag.org/content/289/5486/1922">agriculture</a>. This includes <a href="https://dl.sciencesocieties.org/publications/sssaj/abstracts/62/2/SS0620020394">direct measurements</a> of nitrous oxide and CO2 fluxes. (Generally, farmers over-fertilize, because it is a kind of economic insurance. Robertson found that beyond a critical fertilization level, increasing fertilizer causes a non-linear increase in N2O emissions.)
            <br></br><br></br>
            It is not actually clear that fertilizer must be limiting as Dyson worried, nor water. One of Robertson’s <a href="http://science.sciencemag.org/content/356/6345/eaal2324.abstract">studies</a>, for instance, states: 

			</p>
            <blockquote>
				<p>
                “…yields of perennial biomass crops such as switchgrass, giant miscanthus (Miscanthus × giganteus), and hybrid poplar trees (Populus spp.) rival those of annual crops without the climate penalty of annual cultivation and high N fertilizer rates… some high productivity perennial crops require little if any supplemental N… Perennial vegetation, whether herbaceous grasses and dicots or short-rotation trees, offers environmental outcomes superior to those of annual crops —high net energy return on investment, greater soil C and N retention, and improved insect and wildlife habitat—with no observable impact on landscape water balances in humid temperate climates.” 

				</p>
			</blockquote>
            <p>
            Good techniques, e.g., <a href="https://royalsocietypublishing.org/doi/10.1098/rspb.2018.1240">mixed</a> crops, it would seem, may also be able to help somewhat with the problem of soil degradation from tree planting in general. I am not sure this deals fully with the issue of long-term soil depletion mentioned by Keith, or that the relevant conditions can apply over the large scales needed. Some trees can even <a href="https://en.wikipedia.org/wiki/Vachellia_tortilis">grow in desert soil</a>, and Africa’s <a href="https://www.greatgreenwall.org/2030ambition">Great Green Wall project</a> aimed to restore land and plant 100 million hectares of trees across the entire width of Africa, although it has apparently <a href="https://www.smithsonianmag.com/science-nature/great-green-wall-stop-desertification-not-so-much-180960171/">pivoted</a> to mostly focus on proven approaches for farmer-managed natural regeneration.

            </p>

			</Collapsible>
            <br></br><br></br>
            <b>Scale</b>
            <br></br><br></br>
            The total land area of the USA is about 1e9 hectares. So if trees were constantly being grown in their peak growth phase and their carbon stored permanently, over the entire USA, that would be close to comparable to Keith’s 10 Gt CO2 per year number. This scale is very, very large.
            <br></br><br></br>
            <a href="https://link.springer.com/article/10.1007/s11769-010-0401-9">Research</a> suggests that between 1970-2003 planted forest area grew by 14.5x10⁶ hectares and the carbon stored in Chinese forests grew by 0.58Gt Cand had an average uptake of around around 0.022Gt C a year. If we convert these values from C to CO₂ then we’re looking at around 2.1Gt removed in the 30ish years and an average rate of 0.08Gt a year. (this roughly works out to an average of 9t CO₂ per h per year which is better than some of our earlier estimates.
            <br></br><br></br>
            <label for="mn-demo" class="margin-toggle">&#8853;</label>
			<input type="checkbox" id="mn-demo" class="margin-toggle"/>
			<span class="marginnote" id="id_option">
            There are about <a href="https://www.nature.com/articles/nature14967">3 trillion trees</a> on Earth in total, only ~100x what China supposedly planted there. Apparently, <a href="https://www.insider.com/ethiopia-beats-goal-plants-350-million-trees-in-12-hours-2019-7">Ethiopia</a> planted 350M trees in 12 hours. Also of interest: <a href="https://lemelson.mit.edu/resources/moshe-alamaro">tree bombing</a>.

			</span> 

            China has accelerated its efforts and “<a href="https://www.carbonbrief.org/mapped-where-afforestation-is-taking-place-around-the-world">Since the 1990s</a>, China has invested more than $100bn in afforestation programmes and, according to its government, planted more than 35bn trees across 12 Chinese provinces”. It seems like this is paying off as this paper has data to suggest that from “2009 to 2016….we estimate a mean Chinese land biosphere sink of −1.11 ± 0.38 petagrams of carbon per year” (i.e forests are removing roughly 1Gt of C or 3.7Gt of CO₂).
            <br></br><br></br>
            <b>Availability</b>
            <br></br><br></br>
            <a href="https://twitter.com/hausfath/status/1147190442145898496">Here is</a> one recent take on the realistic role of tree planting. It refers to (and, like <a href="https://twitter.com/Peters_Glen/status/1188401955233660929">others</a>, questions some of the stated implications from) <a href="http://www.fieraboster.it/docs/BOSTER%202019/The-global-tree-restoration-potential.pdf">this paper</a> from the <a href="https://www.nature.com/articles/d41586-019-02846-4">Crowther research group</a>, which among other things made a map of where there is potential for increasing tree cover, taking into account local environment and removing urbanized or agricultural areas. They state:
            <br></br><br></br>
            <label for="mn-demo" class="margin-toggle">&#8853;</label>
			<input type="checkbox" id="mn-demo" class="margin-toggle"/>
			<span class="marginnote" id="id_option">
            One key caution about planting trees in many of the areas on the above map is that trees can decrease the surface albedo, especially in areas that would otherwise be snow-covered in Winter. 
            This was pointed out by Caldeira and colleagues in this <a href="https://www.pnas.org/content/104/16/6550">paper</a> in <a href="https://www.nytimes.com/2007/01/16/opinion/16caldeira.html">2007</a>. It would be interesting to see someone re-draw Crowther’s map above and re-weight the total sequestration potential in light of the need to avoid net warming effects. 
			</span> 

            <div style={{textAlign: 'center'}}>
            <Image src='/img/sec2/2_forest_map.png' alt="map of potential forest cover around the world" width="500px" height="400px"/>
            </div>
            <br></br><br></br>
            I’m not sure of the long-term follow-up on this paper’s line of reasoning overall, but <a href="https://www.nature.com/articles/d41586-019-00122-z">this article</a> suggests that related questions are continuing to be asked and that useful new data may soon become available. Some tropical forests are actually <a href="https://twitter.com/GlobalChangeBio/status/1118254997626662912">net sources</a> of greenhouse gases. This all points towards potential advantages of industrial direct air capture compared with tree planting.
            <br></br><br></br>
            <label for="mn-demo" class="margin-toggle">&#8853;</label>
			<input type="checkbox" id="mn-demo" class="margin-toggle"/>
			<span class="marginnote" id="id_option">
            This is about the same area as all of America
			</span> 

            “Excluding existing trees and agricultural and urban areas, we found that there is room for an <b>extra 0.9 billion hectares of canopy cover</b>, which could store 205 gigatonnes of carbon in areas that would naturally support woodlands and forests.”
            <br></br><br></br>
            That’s on the scale of what Dyson and Keith were talking about back in the day. Alas, as they point out, 

            </p>
            <blockquote>
				<p>
                “Of course, it remains unclear what proportion of this land is public or privately owned, and so we cannot identify how much land is truly available for restoration.” 

				</p>
			</blockquote>
            <p>
            In other words, they don’t really cover the logistical opportunity to actually plant in all those areas. 
            <br></br><br></br>
            <b>Permanence</b>
            <br></br><br></br>
            Other key issues include the fact that trees, of course, don’t last forever — and thus to permanently sequester carbon, one will have to eventually remove the trees and bury or otherwise permanently sequester their wood’s carbon. <a href="https://www.pnas.org/content/early/2019/09/24/1907855116">Wildfires</a> could also knock out a lot of your sequestered carbon in one go. One way to push this direction would be to use wood for a wider range of highly permanent applications, e.g., some are working on “<a href="https://www.scientificamerican.com/article/stronger-than-steel-able-to-stop-a-speeding-bullet-mdash-it-rsquo-s-super-wood/">wood that is stronger than steel</a>".
            <br></br><br></br>
            What does the National Academies <a href="https://www.nap.edu/read/25259/chapter/2#10">report</a> <a href="https://www.nap.edu/read/25259/chapter/5#106">say</a>?

            </p>
            <blockquote>
				<p>
                “Until research proves otherwise, it is prudent to view as impractical upper bounds for afforestation/reforestation and BECCS deployment of much greater than 10 Gt/y CO2…  Because forests established at high latitudes decrease albedo, afforestation/reforestation at high latitudes would cause net warming despite the cooling caused by the forest’s CO2 uptake. In addition, forests established in regions with limited rainfall would have adverse effects on streamflow, irrigation, and groundwater resources.”
                <br></br><br></br>
“…estimates are 0.6 Gt/y CO2 from forestland and 0.25 Gt/y CO2 in agricultural soils for the United States, and corresponding estimates of 9 and 3 Gt/y CO2 for the world. Much of this CO2 removal would be achieved for less than $50/t. If frontier NETs prove practical and economical, rates of carbon removal for both forests and agricultural soils could roughly double in size.”

				</p>
			</blockquote>

            <p>
            <Collapsible trigger="Here are some more ideas adjacent to aforestation">
			<p>
            There are some ideas adjacent to aggressive afforestation, e.g., Drawdown lists <a href="https://www.drawdown.org/solutions/food/silvopasture">silvopasture</a>, i.e., “an ancient practice that integrates trees and pasture into a single system for raising livestock”, very high on its list of greenhouse gas reducing measures, and <a href="https://www.drawdown.org/solutions/food/tree-intercropping">tree intercropping</a> further down on this list; there has been some scientific <a href="https://www.nature.com/articles/s41598-017-16821-4">study</a> of silvopasture. Drawdown also <a href="https://www.drawdown.org/solutions/land-use/afforestation">puts</a> afforestation high on the list. A recent <a href="https://moderndiplomacy.eu/2019/08/27/what-would-it-really-take-to-plant-a-trillion-trees/">article</a> mentions more of the social and logistical aspects, including <a href="https://www.unenvironment.org/news-and-stories/story/surprising-benefits-age-old-land-regeneration-technique">farmer-managed natural regeneration</a> growth from seeds already present in the soil, and social and financial needs around cultivating afforestation worldwide despite widely distributed ownership of the land, as well as existing knowledge in many countries of which trees should be planted where, but this article doesn’t provide specific estimates in terms of total impact, time or cost. Of course there is also <a href="https://www.theatlantic.com/science/archive/2017/07/paying-people-to-preserve-their-trees/534351/">paying people</a> not to cut down trees.

			</p>
			</Collapsible>
            <br></br><br></br>
            <label for="mn-demo" class="margin-toggle">&#8853;</label>
			<input type="checkbox" id="mn-demo" class="margin-toggle"/>
			<span class="marginnote" id="id_option">
            This would be like foresting all the land in the entire USA and then cutting it all down every few decades.
            <br></br><br></br>
            It is worth noting for a second that there are other reasons for afforestation like biodiversity which are important but not discussed here.

			</span> 

            So overall it looks like if we take the 0.9bn hectare figure as our upper bound and the ≈9t of CO₂ per h per yr we could conceivably be removing around 8.1Gt of CO₂ a year. This sounds promising but we have to keep in mind that this would be if all of this land could be used, which for land use and ownership reasons is unlikely. It also ignores albedo effects which would severely curtain benefits in more northern climates and finally all of this extra forest would have to be regularly cut down and disposed of in ways that won’t leak carbon. It could be done at this scale but not without massive tradeoffs and other issues
            </p>

            <h2>Topsoil</h2>
            <p>
            <label for="mn-demo" class="margin-toggle">&#8853;</label>
			<input type="checkbox" id="mn-demo" class="margin-toggle"/>
			<span class="marginnote" id="id_option">
            The <a href="https://www.nature.com/articles/s41467-018-05938-3">Lawrence paper</a> estimates more available capacity via soil carbon enrichment than via trees.
            <br></br><br></br>
            <a href="https://www.nature.com/articles/nature17174">This paper</a> by Paustian et al gives a summary of soil carbon sequestration strategies. 
            <br></br><br></br>
            <a href="https://www.nature.com/articles/d41586-019-02846-4">Apparently</a> the Crowther group is now working on a map of global soil carbon restoration potential, and they recently <a href="https://science.sciencemag.org/content/365/6455/eaav0550.abstract">reviewed</a> global soil organic carbon stocks
            <br></br><br></br>
            <a href="https://arpa-e.energy.gov/?q=slick-sheet-project/associated-particle-imaging-soil-carbon">Here</a> are <a href="https://arpa-e.energy.gov/?q=slick-sheet-project/soil-sensors-nitrogen-use-efficiency">also</a> some <a href="https://arpa-e.energy.gov/?q=document/open-sensors-bioenergy-and-agriculture-cohort">links</a> to do with improving imaging and technology to tackle this problem 
            <br></br><br></br>
            A related biological concept in soil carbon sequestration is that of <a href="https://en.wikipedia.org/wiki/Phytolith#Carbon_sequestration">phytolith</a>.

			</span> 

            Another possibility is to grow biomass in topsoil. Dyson’s topsoil calculations are 1/100 inch per year, over 1/2 of land mass, of soil based biomass, to suck out all of the atmospheric carbon, and about 1/10 inch per year of total topsoil therefore.
            <br></br><br></br>
            The <a href="https://www.indigoag.com/the-terraton-initiative">Terraton Initiative</a> aims to capture 1000 GtCO2 by enriching the carbon content of agricultural soils (apparently with mostly conventional methods like no-till farming, cover crops, optimized crop rotations, and so forth). From their video, 

            </p>
            <blockquote>
				<p>
                “Today’s agricultural soils contain about 1% carbon content. Prior to cultivation those soils contained about 3% carbon. If we could take every cultivated acre on Earth, which is about 3.5 billion acres, and get them back from 1 to 3 percent, that would represent sequestering about 1 trillion tonnes of carbon dioxide…”

				</p>
			</blockquote>
            <p>
            But see the below quote from the NAS report, which <a href="https://www.nap.edu/read/25259/chapter/5#106">estimates</a>: 

            </p>
            <blockquote>
				<p>
                “3 Gt/y CO2” for world agricultural soil carbon enrichment capacity without frontier biotech (e.g., new root phenotypes), and twice that with frontier biotech. To get to 1000 GtCO2 captured would take &gt;100 years or so at that rate at best. However, the NAS estimate may not be assuming full adoption — that’s their estimate of “practically achievable”

				</p>
			</blockquote>
            <p>
                <b>Adoption</b>
                <br></br><br></br>
                The National Academies <a href="https://www.nap.edu/read/25259/chapter/2#11">report</a> emphasizes the difficulties of adoption of new agricultural practices that would improve soil carbon content long term, and lumps these approaches — without significant further research on new crop varieties with greater root mass and so forth — into the bucket with BECCS and afforestation, estimating that in total these can reach less that 10 GtCO2 globally per year with current technology and knowledge:

            </p>
            <blockquote>
				<p>
                “historical adoption rates of agricultural soil conservation and forestry management practices that would save farmers and forest landowners money have been surprisingly low, as have dietary changes, such as reduced meat consumption, that would increase health while freeing agricultural land for forestry NETs and BECCS”

				</p>
			</blockquote>
            <p>
                <b>Permanence</b>
                <br></br><br></br>
                They also note the risk that, just as wildfires or a return to burning trees as wood could un-sequester that carbon, unless buried, soil carbon enhancement could be undone by a return to heavy tilling.
                <br></br><br></br>
                <b>Co-benefits</b>
                <br></br><br></br>
                However they also note side benefits of these approaches for agriculture: “Approaches that enhance carbon uptake and storage in agricultural soils generally have large positive side benefits, including increased productivity, water holding capacity, stability of yields, and nitrogen use efficiency, but sometimes increase nitrous oxide emissions.”
                <br></br><br></br>
                <b>Enhanced weathering in soil</b>
                <br></br><br></br>
                One idea is to distribute a fine powder of Olivine over land areas so that it mixes with soil and increases its rate of CO₂ absorption. <a href="https://www.pnas.org/content/107/47/20228">This paper</a> estimates that “this approach has the potential to sequestrate up to 1 Pg of C per year directly, if olivine is distributed as fine powder over land areas of the humid tropics” but this is said to likely be an upper limit and comes with side effects like increasing soil PH. 
                <br></br><br></br>
                This approach can have costs well below $100 with the paper estimating there to be the potential for them to be between $20-40. What kind of scale could this approach achieve? 
            </p>
            <blockquote>
				<p>
                Considering a sequestration of 0.5 Pg of C per year requires an olivine distribution rate of about 300 g m-2 y-1, if applied over the whole Amazon catchment area. This procedure would lead to enhanced weathering rates of 85 t of C per km-2 y-1

				</p>
			</blockquote>

            <p>
            How much CO₂ would this be? 85t of C is roughly 310t of CO₂, the Amazon catchment area is 5.83e12 m² or 5.83e6km², if we multiply these values together we get around 1.8Gt CO₂ every year. 
            <br></br><br></br>
            This is a clearly impressive amount of carbon removal but the paper goes on to say that there would be immense “difficulties in distributing olivine powder in remote land areas covered with dense tropical rain forests”.
            <br></br><br></br>
            This approach is also very dependent on the climate it is being used in. The paper above explicitly looks at more tropical environments. <a href="https://www.frontiersin.org/articles/10.3389/fclim.2022.827698/full">A recent paper</a> looked at how this kind of approach fairs at lower temperatures (4℃ vs 19℃) and found that after 100 days the lower temperature was more than 2 orders of magnitude less effective. 


            <Collapsible trigger="Some more initiatives">
			<p>
            <a href="https://www.indigoag.com/">Indigo Ag</a>, a company which seems to produce the Terraton Initiative, seems undeterred by the low historical adoption rates of improved agricultural practices. They are working on a number of aspects including microbial treatments for improving seed productivity, a digital marketplace that allows differentiation and selection of crops based on growing practices and uses sensor measurements to do so, and a transport/delivery system. They already have a carbon farming program that, it appears, leverages carbon credits to generate income for farmers by improving and verifying their soil sequestration: “At about $15-$20 tonne… would provide significant incentives to farmers… POTENTIAL GROSS INCOME FROM ENRICHING YOUR SOIL… $30-45 / acre / year vesting over 10 years; results may vary”.
            <br></br><br></br>
            ARPA-E also has a number of funded projects on measurement of soil carbon content as part of ROOTS as well as OPEN+ Sensors for Bioenergy and Agriculture Cohort and SMARTFARM, presumably in part to allow just this kind of marketplace and incentive structure to thrive:

			</p>
			</Collapsible>
            <br></br><br></br>
            As a summary, there is a lot that can be done with soil based approaches, which can feasibly get us to gigatons removed a year. However, we face similar challenges to afforestation, namely that these removed tons are very subject to land use reversals and so the permanence of them are very uncertain.  

            </p>
            <h2>Biochar</h2>
            <p>
            <a href="https://biochar-international.org/biochar/">Biochar</a> <a href="http://www.azimuthproject.org/azimuth/show/Biochar">is</a> a different but related concept, sequestering carbon from biomass through a chemical reaction called <a href="https://en.wikipedia.org/wiki/Pyrolysis">pyrolysis</a>, which produces a form of carbon that is a useful soil additive. This does not “burn” the biomass carbon and release CO2 because the pyrolysis is an oxygen-free reaction, and the resulting pyrolyzed carbon is a nice home for soil bacteria, water, gasses and so forth, enriching soil. Pyrolyzed carbon can also be converted into energy-dense fuels. 
            The Lawrence paper suggests a carbon capture yield not big enough to single handedly wield a decisive global scale effect on atmospheric CO2:
            </p>
            <blockquote>
				<p>
                “This results in a much lower estimated maximum removal potential for biochar, ~2–2.5 Gt(CO2)/yr <a href="https://www.nature.com/articles/s41467-018-05938-3#ref-CR28">28</a>,<a href="https://www.nature.com/articles/s41467-018-05938-3#ref-CR41">41</a>, or up to ~200 Gt(CO2) by 2100, although, as with BECCS, this could possibly be enhanced by additional use of residue biomass from agriculture and forestry <a href="https://www.nature.com/articles/s41467-018-05938-3#ref-CR41">41</a>”. 

				</p>
			</blockquote>
            <p>
            Not an insignificant amount, but it would take a long time to suck out the reference value of 650 Gt CO2 listed by the Lawrence paper. David Keith also raises questions in this <a href="https://e360.yale.edu/features/refilling_the_carbon_sink_biochars_potential_and_pitfalls">article</a> on the relative utility of biochar compared to other uses of the same biomass. Currently, it looks like biochar costs thousands of dollars per tonne. Overall I’m not sure I have a full understanding of this area’s potential. 
            <br></br><br></br>
            </p>


          </section>
          </article>
        </div>    
        <div class="footer">
        <p style={{fontSize: '5rem'}}><a href="../section_2/2.4">&#8678;</a> &nbsp; <a href="../section_2/2.6">&#8680;</a></p>
        </div> 


      </main>

    </div>
  )
}
